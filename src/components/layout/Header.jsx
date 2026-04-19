
import Link from "next/link";

export default function Header() {
    return (
      <header className="bg-primary text-white shadow-md">
        <div className="mx-auto flex  items-center justify-between px-10 py-4">
          <h1 className="text-3xl font-bold">QR Park</h1>
  
          <nav className="hidden gap-8 md:flex items-center mr-20">
          <Link href={"/"}>
          Home
          </Link>
            <Link href={"/howitwork"}>
            {/* <a href="#how-it-works" className="hover:text-teal-300"> */}
                How it Works
                {/* </a> */}
            </Link>
            <a href="#faq" className="hover:text-teal-300">FAQs</a>
            <Link href="/login">
            <button className="rounded-full bg-buttonbg px-6 py-2 font-semibold hover:bg-teal-600">
            Login
          </button>
          </Link>
          </nav>
  
        
        </div>
      </header>
    );
  }