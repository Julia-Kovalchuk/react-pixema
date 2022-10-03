import {
  CloseIcon,
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "assets";
import { Customlink } from "components";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { fetchSignOutUser } from "store/feautures";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors";
import { ButtonOut } from "../UserEmblem/styles";
import { Container, ButtonClose, NavList, StyledIcon, Wrapper } from "./styles";

interface IProps {
  toggleisOpen: () => void;
  isOpen: boolean;
}

export const BurgerMenu = ({ toggleisOpen, isOpen }: IProps) => {
  const { isAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOut = () => {
    dispatch(fetchSignOutUser())
      .unwrap()
      .then(() => {
        navigate(ROUTE.HOME);
      });
  };

  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 1,
      },
      transitionEnd: {
        opacity: 0,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Wrapper
          initial="closed"
          exit="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <Container>
            <NavList>
              <Customlink to={ROUTE.HOME}>
                <StyledIcon>
                  <HomeIcon />
                </StyledIcon>{" "}
                Home
              </Customlink>
              <Customlink to={ROUTE.NEW}>
                <StyledIcon>
                  <TrendsIcon />
                </StyledIcon>{" "}
                New
              </Customlink>
              <Customlink to={ROUTE.FAVORITES}>
                <StyledIcon>
                  <FavoritesIcon />
                </StyledIcon>{" "}
                Favorites
              </Customlink>
              <Customlink to={ROUTE.SETTINGS}>
                <StyledIcon>
                  <SettingsIcon />{" "}
                </StyledIcon>
                Settings
              </Customlink>

              {isAuth ? (
                <>
                  <ButtonOut type="button" onClick={handleOut}>
                    Log out
                  </ButtonOut>
                </>
              ) : (
                <>
                  <Customlink to={ROUTE.SIGN_IN}>Sign in</Customlink>
                  <Customlink to={ROUTE.SIGN_UP}>Sign up</Customlink>
                </>
              )}
            </NavList>

            <ButtonClose type="button" onClick={() => toggleisOpen()}>
              <CloseIcon />
            </ButtonClose>
          </Container>
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
