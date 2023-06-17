import Link from "next/link";
function NavItem({ text, href, active }) {
  return (
    <Link legacyBehavior href={href}>
      <a className={`nav__item ${active ? "active" : ""}`}>{text}</a>
    </Link>
  );
}

export default NavItem;
