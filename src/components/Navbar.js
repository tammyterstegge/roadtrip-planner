import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Roadtrip Planner</Link>
      <ul>
        <li>
          <CustomLink to="/map">Map</CustomLink>
        </li>
        <li>
          <CustomLink to="/markers">Markers</CustomLink>
        </li>
        <li>
          <CustomLink to="/notes">Notes</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
