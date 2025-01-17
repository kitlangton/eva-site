import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white text-red-500 p-4  " >
      <nav className="flex justify-around items-center space-x-4">
        <Link href="/">
          <span className="text-lg font-semibold cursor-pointer">Home</span>
        </Link>
        <Link href="/contact">
          <span className="text-lg font-semibold cursor-pointer">Contact</span>
        </Link>
        <Link href="/wide-blue-yawn">
          <span className="text-lg text-blue-300 font-semibold cursor-pointer">Wide Blue Yawn</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;