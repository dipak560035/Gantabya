import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[#111111] text-white h-25">
        <nav className="flex items-center justify-between px-10 py-6">
        
            <Link href="/" className="hover:text-white transition">Our Bikes</Link>
            <Link href="/" className="hover:text-white transition">Technology</Link>
            <Link href="/" className="hover:text-white transition">About Us</Link>
            <Link href="/" className="hover:text-white transition">Blog</Link>
            <Link href="/" className="hover:text-white transition">Support</Link>
            <Link href="/" className="hover:text-white transition">Contact</Link>
            </div>

     
            <button className="bg-[#00d65c] text-black px-8 py-2.5 font-bold rounded-full hover:bg-[#00b34d] transition-colors">
                 Book Test Ride

















import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-[#111111] text-white h-25">
        <nav className="flex items-center justify-between px-10 py-6">
        
            <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-black">G</div>
            <span className="text-xl font-bold">gantabya</span>
            </div>

            <div className="flex items-center gap-8 text-gray-300">
            <Link href="/" className="text-green-500 font-medium">Home</Link>
            <Link href="/" className="hover:text-white transition">Our Bikes</Link>
            <Link href="/" className="hover:text-white transition">Technology</Link>
            <Link href="/" className="hover:text-white transition">About Us</Link>
            <Link href="/" className="hover:text-white transition">Blog</Link>
            <Link href="/" className="hover:text-white transition">Support</Link>
            <Link href="/" className="hover:text-white transition">Contact</Link>
            </div>

     
            <button className="bg-[#00d65c] text-black px-8 py-2.5 font-bold rounded-full hover:bg-[#00b34d] transition-colors">
                 Book Test Ride
            </button>
        </nav>

    
    </div>
  );
}
