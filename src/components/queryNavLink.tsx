import { QueryNavLinkProps } from "@/interface/queryNavLinkProps";
import React from "react";
import { useLocation, NavLink, NavLinkProps } from "react-router-dom";

/**
 * QueryNavLink Component extends NavLink
 *
 * This can persist the query string when we click a link by adding it to the link's href
 *
 * @param {string} to
 * @param {string} children
 * @param {({ isActive }: { isActive: boolean }) => React.CSSProperties} style
 * @param {NavLinkProps} props
 * @return {JSX.Element}
 */
const QueryNavLink = ({
  to,
  children,
  style,
  ...props
}: QueryNavLinkProps) => {
  const location = useLocation();

  return (
    <NavLink
      to={to + location.search}
      style={style}
      children={children}
      {...props}
    />
  );
};

export default QueryNavLink;
