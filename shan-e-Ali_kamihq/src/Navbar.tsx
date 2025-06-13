// src/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white py-2 shadow-sm">
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-left gap-10">
        {/* Logo */}
        <div className="text-[45px] font-bold">
          <span className="lowercase">kami</span>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 font-semibold text-white text-md">
          <li><a href="#">Home</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Learn Kami</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Library</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#" className="hover:underline">Sign in</a></li>
        </ul>
      </div>
    </nav>
  );
}
