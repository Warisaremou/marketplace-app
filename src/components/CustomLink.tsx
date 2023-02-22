import clsx from "clsx";
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
    <div className="">
      <Link
        className={clsx("flex flex-col items-center menu", isActive && "bottom-active-link")}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
