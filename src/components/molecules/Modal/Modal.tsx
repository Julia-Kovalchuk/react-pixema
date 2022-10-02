import { Filters, Portal } from "components";
import { PortalTarget } from "../Portal/Portal";
import { Container } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const Modal = ({ toggleModal }: IProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <Container>
        <Filters toggleModal={toggleModal} />
      </Container>
    </Portal>
  );
};
