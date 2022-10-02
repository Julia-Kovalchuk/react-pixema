import { LogoIconLight, LogoIconDark } from "../../../assets";
import { ROUTE } from "../../../routes/routes";
import { StyledLink, Wrapper } from "./styles";
import { useWindowSize } from "../../../hooks";
import { BurgerMenu, SearchInput, UserEmblem } from "components";
import { Breackpoint } from "ui";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Navbar = ({ toggleModal }: IProps) => {
  const { themeMode } = useAppSelector(getUserInfo);
  const { screenWidth } = useWindowSize();

  return (
    <Wrapper>
      <StyledLink to={ROUTE.HOME}>
        {themeMode === "dark" ? <LogoIconDark /> : <LogoIconLight />}
      </StyledLink>

      <SearchInput toggleModal={toggleModal} />
      {screenWidth && screenWidth > Breackpoint.MD ? (
        <UserEmblem />
      ) : (
        <BurgerMenu />
      )}
    </Wrapper>
  );
};
