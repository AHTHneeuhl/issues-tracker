import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Issues",
    href: "/issues",
  },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
