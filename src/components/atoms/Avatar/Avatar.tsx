import { UserIcon } from "assets";
import { useAppSelector } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelectors";
import { getUserAbbreviation } from "utils/getUserAbbreviation";
import { StyledAvatar } from "./styles";

export const Avatar = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);

  return (
    <StyledAvatar>
      {isAuth ? <div>{name && getUserAbbreviation(name)}</div> : <UserIcon />}
    </StyledAvatar>
  );
};
