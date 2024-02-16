import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  renderContent: () => ReactNode;
}

function BottomSheet({
  isOpen,
  onClose,
  renderContent,
}: BottomSheetProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={false}
      motionPreset={"slideInBottom"}
    >
      <ModalOverlay
        backdropBlur={"20px"}
        backdropFilter="blur(2px)"
      />
      <ModalContent
        position="fixed"
        bottom={"-76px"}
        left={0}
        right={0}
        border="none"
        borderRadius="10px 10px 0 0"
        boxShadow="0 -2px 10px rgba(0, 0, 0, 0.1)"
      >
        {renderContent()}
      </ModalContent>
    </Modal>
  );
}

export default BottomSheet;
