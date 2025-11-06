"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

interface KeelWebGLProps {
  variant?: "graph" | "particles" | "calendar"
  accent?: string
}

let globalAudioContext: AudioContext | null = null
let globalAnalyser: AnalyserNode | null = null
let globalSource: MediaElementAudioSourceNode | null = null
let globalAudioElement: HTMLAudioElement | null = null

function useAudioReactivity() {
  const [audioLevel, setAudioLevel] = useState(0)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const audio = document.getElementById("keel-demo-audio") as HTMLAudioElement
    if (!audio) return

    if (!globalAudioContext) {
      globalAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      globalAnalyser = globalAudioContext.createAnalyser()
      globalAnalyser.fftSize = 256
      globalAudioElement = audio

      // Create source only once
      globalSource = globalAudioContext.createMediaElementSource(audio)
      globalSource.connect(globalAnalyser)
      globalAnalyser.connect(globalAudioContext.destination)
    }

    const dataArray = new Uint8Array(globalAnalyser!.frequencyBinCount)

    const updateAudio = () => {
      if (globalAnalyser) {
        globalAnalyser.getByteFrequencyData(dataArray)
        const avg = dataArray.reduce((a, b) => a + b) / dataArray.length
        setAudioLevel(avg / 255)
      }
      animationFrameRef.current = requestAnimationFrame(updateAudio)
    }

    const handlePlay = () => {
      if (globalAudioContext?.state === "suspended") {
        globalAudioContext.resume()
      }
      updateAudio()
    }

    const handlePause = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return audioLevel
}

// Static SVG fallback for reduced-motion or unsupported WebGL
function StaticFallback({ accent }: { accent: string }) {
  return (
    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="keel-gradient" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
          <stop offset="50%" stopColor={accent} stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0b1220" stopOpacity="1" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#keel-gradient)" />
    </svg>
  )
}

// Node Graph variant: Call routing visualization
function NodeGraph({ accent }: { accent: string }) {
  const groupRef = useRef<THREE.Group>(null)
  const audioLevel = useAudioReactivity()
  const pulseRef = useRef(0)

  useFrame((state) => {
    if (groupRef.current) {
      // Mild parallax
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
      pulseRef.current += 0.02 + audioLevel * 0.03
    }
  })

  const nodes = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const nodeCount = isMobile ? 3 : 4
    return Array.from({ length: nodeCount }, (_, i) => ({
      position: [(i - nodeCount / 2 + 0.5) * 2, Math.sin(i) * 0.5, 0] as [number, number, number],
      type: i === 0 ? "phone" : i === nodeCount - 1 ? "calendar" : "router",
    }))
  }, [])

  return (
    <group ref={groupRef}>
      {/* Connecting lines */}
      {nodes.slice(0, -1).map((node, i) => (
        <line key={`line-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...node.position, ...nodes[i + 1].position])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color={accent} opacity={0.3} transparent />
        </line>
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node.position}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshBasicMaterial color={accent} />
          {/* Glow ring */}
          <mesh scale={1.5 + Math.sin(pulseRef.current + i) * 0.3}>
            <ringGeometry args={[0.15, 0.2, 32]} />
            <meshBasicMaterial color={accent} opacity={0.3} transparent side={THREE.DoubleSide} />
          </mesh>
        </mesh>
      ))}

      {/* Traveling pulse */}
      <mesh position={[Math.sin(pulseRef.current * 2) * 3, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={accent} />
      </mesh>
    </group>
  )
}

// Particles variant: Flowing particles through phone silhouette
function FlowingParticles({ accent }: { accent: string }) {
  const particlesRef = useRef<THREE.Points>(null)
  const audioLevel = useAudioReactivity()

  const particleCount = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    return isMobile ? 500 : 1000
  }, [])

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2
      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = 0
    }

    return { positions, velocities }
  }, [particleCount])

  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      const rate = 1 + audioLevel * 2

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += particles.velocities[i * 3] * rate
        positions[i * 3 + 1] += particles.velocities[i * 3 + 1] * rate

        // Reset particles that go off screen
        if (Math.abs(positions[i * 3]) > 5 || Math.abs(positions[i * 3 + 1]) > 5) {
          positions[i * 3] = (Math.random() - 0.5) * 10
          positions[i * 3 + 1] = (Math.random() - 0.5) * 10
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={particles.positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={accent} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// Calendar variant: 3D rotating calendar ring
function CalendarRing({ accent }: { accent: string }) {
  const ringRef = useRef<THREE.Group>(null)
  const audioLevel = useAudioReactivity()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  const tickCount = 24
  const ticks = useMemo(
    () =>
      Array.from({ length: tickCount }, (_, i) => {
        const angle = (i / tickCount) * Math.PI * 2
        const radius = 2
        return {
          position: [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as [number, number, number],
          rotation: angle,
        }
      }),
    [],
  )

  return (
    <group ref={ringRef}>
      {/* Ring outline */}
      <mesh>
        <ringGeometry args={[1.9, 2.1, 64]} />
        <meshBasicMaterial color={accent} opacity={0.2} transparent side={THREE.DoubleSide} />
      </mesh>

      {/* Tick marks */}
      {ticks.map((tick, i) => (
        <mesh key={i} position={tick.position} rotation={[0, 0, tick.rotation]}>
          <boxGeometry args={[0.05, 0.2, 0.05]} />
          <meshBasicMaterial
            color={accent}
            opacity={i === Math.floor(Date.now() / 1000) % tickCount ? 0.8 + audioLevel * 0.2 : 0.3}
            transparent
          />
        </mesh>
      ))}

      {/* Pulsing center */}
      <mesh scale={1 + audioLevel * 0.5}>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial color={accent} opacity={0.5} transparent />
      </mesh>
    </group>
  )
}

// Main scene wrapper
function Scene({ variant, accent }: { variant: "graph" | "particles" | "calendar"; accent: string }) {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.z = 5
  }, [camera])

  return (
    <>
      <color attach="background" args={["#0b1220"]} />
      {variant === "graph" && <NodeGraph accent={accent} />}
      {variant === "particles" && <FlowingParticles accent={accent} />}
      {variant === "calendar" && <CalendarRing accent={accent} />}
    </>
  )
}

export function KeelWebGL({ variant = "graph", accent = "#14b8a6" }: KeelWebGLProps) {
  const [isSupported, setIsSupported] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    setIsSupported(!!gl)

    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    // Pause when tab hidden
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  // Use fallback for unsupported or reduced motion
  if (!isSupported || prefersReducedMotion) {
    return <StaticFallback accent={accent} />
  }

  return (
    <div className="absolute inset-0 -z-10" style={{ pointerEvents: "none" }}>
      {isVisible && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ antialias: false, powerPreference: "low-power" }}
        >
          <Scene variant={variant} accent={accent} />
        </Canvas>
      )}
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.2)_0%,_transparent_50%)]" />
    </div>
  )
}
