import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Blogs */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-white text-lg font-semibold hover:text-indigo-400"
            >
              Blogs
            </a>
          </div>

          {/* Right side - Create */}
          <div className="flex items-center">
            <a
              href="http://localhost:5173/create"
              className="text-white text-lg font-semibold hover:text-indigo-400"
            >
              Create
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
