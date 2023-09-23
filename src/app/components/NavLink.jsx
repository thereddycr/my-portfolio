import Link from "next/link";

const NavLink = ({ href, title, isActive, setActiveLink, setNavbarOpen }) => {
  const handleClick = () => {
    setActiveLink(href);
    setNavbarOpen(false);
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`block text-[#ADB7BE] sm:text-xl rounded md:p-0 font-sans hover:divide-x-8 hover:text-white ${
        isActive ? "text-white" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
