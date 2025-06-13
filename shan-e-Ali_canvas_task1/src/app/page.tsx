'use client'

import { useState } from 'react'
import LoginModal from '@/components/LoginModal'

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
      
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
      >
        Login
      </button>

      {/* Conditional Modal */}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </div>
  )   
}
