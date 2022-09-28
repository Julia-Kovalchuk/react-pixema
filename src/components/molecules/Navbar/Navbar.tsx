import { LogoIconLight, LogoIconDark } from "../../../assets";
import { ROUTE } from "../../../routes/routes";
import { StyledLink, Wrapper } from "./styles";
import { useTheme, useWindowSize } from "../../../hooks";
import { BurgerMenu, SearchInput, UserEmblem } from "components";
import { Breackpoint } from "ui";

export const Navbar = () => {
  const { theme } = useTheme();
  const { screenWidth } = useWindowSize();

  return (
    <Wrapper>
      <StyledLink to={ROUTE.HOME}>
        {theme === "dark" ? <LogoIconDark /> : <LogoIconLight />}
      </StyledLink>
      <SearchInput />
      {screenWidth && screenWidth > Breackpoint.MD ? (
        <UserEmblem />
      ) : (
        <BurgerMenu />
      )}
    </Wrapper>
  );
};
