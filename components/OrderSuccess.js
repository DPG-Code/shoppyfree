import { IconSuccess } from './Icons'
import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'

const defaults = {
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
  colors: ['#000000', '#ffffff']
}

export default function OrderSuccess() {
  const [exploding, setExploding] = useState(false)

  useEffect(() => {
    if (exploding) return
    setExploding(true)
    setTimeout(() => {
      confetti(defaults)
    }, 300)
  }, [])

  return (
    <div className='py-4 w-full bg-black flex items-center justify-center gap-2'>
      <p className='text-white font-medium'>ORDER SUCCESS</p>
      <IconSuccess />
    </div>
  )
}
