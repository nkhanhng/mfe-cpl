import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="apps/remote">Home</Link>
      </li>
      <li>
        <Link to="apps/earn">Earn</Link>
      </li>
      <li>
        <Link to="apps/trading">Trading</Link>
      </li>
      <li>
        <Link to="apps/forex">Forex</Link>
      </li>
    </ul>
  );
};
