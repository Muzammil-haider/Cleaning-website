
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#FFF3E3] sticky top-0 z-50 shadow-md">
      <div className="flex space-x-48 items-center px-4 py-4 md:px-12">
        <div className="flex items-center space-x-3">
          <Image
            className="rounded-lg"
            src="/images/professionalcleaning3.png"
            width={50}
            height={50}
            alt="logo"
          />
          <h1 className="text-lg md:text-2xl font-bold text-black">Professional Cleaning</h1>
        </div>
        <nav className="hidden md:flex space-x-10 font-light">
          <a href="#home" className="hover:text-[#B88E2F] transition">Home</a>
          <a href="#services" className="hover:text-[#B88E2F] transition">Services</a>
          <a href="#works" className="hover:text-[#B88E2F] transition">Our Work</a>
          <a href="#contact" className="hover:text-[#B88E2F] transition">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
