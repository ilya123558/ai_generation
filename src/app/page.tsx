'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/onboarding')
    }, 2000)
  }, [])

  return (
    <section className="w-screen h-screen bg-primary flex items-center justify-center">
      <h1 className="fs-30 font-medium text-background">AI.bot</h1>
    </section>
  )
}