import { Link, useMatch, useResolvedPath } from "react-router-dom";
import camper from "./camper.png";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <div className="flex space-x-4">
          <img
            src={camper}
            alt="camper"
            width="40"
            height="40"
            about='<a href="https://www.flaticon.com/free-icons/caravan" title="caravan icons">Caravan icons created by Freepik - Flaticon</a>'
          />
          <div>Roadtrip Planner</div>
        </div>
      </Link>
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
