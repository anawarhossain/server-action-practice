import { Link, Button } from "@heroui/react";

const Navbar = () => {
  return (
    <div className=" border-b border-separator bg-background/70 backdrop-blur-lg">
      {/* Basic */}
      <nav className="sticky top-0 z-40 w-[80%] mx-auto ">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <Link href="/" className="font-bold">
              ACME
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
