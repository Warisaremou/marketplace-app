import { PropsWithChildren } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

type Props = PropsWithChildren<{
  children: any;
  to: any;
}>;

function CustomLink({ to, children }: Props) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <>
      <Link className={`nav-link ${isActive ? "active-link" : ""}`} to={to}>
        {children}
      </Link>
    </>
  );
}

export default CustomLink;
