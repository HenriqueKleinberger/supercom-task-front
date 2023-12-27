import ReactModal from "react-modal";
import { Button } from "../../styles";
import { ACTION, CANCEL } from "../../contants/buttonTypes";
import { Buttons, Message } from "./styles";

interface IModalProps {
  isOpen: boolean;
  cancelAction: () => void;
  onAction: () => void;
  message: string;
}

const Modal = ({ isOpen, cancelAction, onAction, message }: IModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        content: {
          top: "35%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          width: "30%",
          transform: "translate(-40%, -10%)",
        },
      }}
    >
      <Message>{message}</Message>
      <Buttons>
        <Button $type={ACTION} onClick={onAction}>
          Yes
        </Button>
        <Button $type={CANCEL} onClick={cancelAction}>
          No
        </Button>
      </Buttons>
    </ReactModal>
  );
};

export default Modal;
