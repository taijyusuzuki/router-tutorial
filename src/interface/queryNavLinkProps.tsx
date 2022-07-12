import { NavLinkProps } from "react-router-dom";

export interface QueryNavLinkProps {
  to: string,
  children?: string,
  style: ({ isActive }: { isActive: boolean }) => React.CSSProperties,
  props?: NavLinkProps
};
