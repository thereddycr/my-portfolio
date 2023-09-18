import Link from "next/link";

const NavLink = ({ href, title, isActive }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-[#F9D342] ${
        isActive
          ? "text-[#F9D342]"
          : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
