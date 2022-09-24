import { LogoIconLight, LogoIconDark } from "../../../assets";
import { ROUTE } from "../../../routes";
import { SearchInput, UserEmblem } from "../..";
import { StyledLink, Wrapper } from "./styles";
import { useTheme } from "../../../hooks";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <StyledLink to={ROUTE.HOME}>
        {theme === "dark" ? <LogoIconDark /> : <LogoIconLight />}
      </StyledLink>
      <SearchInput />
      <UserEmblem />
    </Wrapper>
  );
};
