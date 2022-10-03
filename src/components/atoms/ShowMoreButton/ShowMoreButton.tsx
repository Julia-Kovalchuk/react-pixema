import { Spiner } from "../Spiner/Spiner";
import { StyledShowMoreButton } from "./styles";

interface IProps {
  onClick: () => void;
}

export const ShowMoreButton = ({ onClick }: IProps) => {
  return (
    <StyledShowMoreButton onClick={onClick}>
      Show more <Spiner />{" "}
    </StyledShowMoreButton>
  );
};
