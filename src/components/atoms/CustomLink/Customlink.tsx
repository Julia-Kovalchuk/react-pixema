import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "../../../routes";
import { StyledCustomLink } from "./styles";

interface IProps {
  to: ROUTE;
  children: ReactNode;
}

export const Customlink = ({ to, children }: IProps) => {
  const isActive = useMatch(to);

  return (
    <StyledCustomLink $isActive={isActive} to={to}>
      {children}
    </StyledCustomLink>
  );
};
