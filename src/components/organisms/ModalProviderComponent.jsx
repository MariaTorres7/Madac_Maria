// src/components/organisms/ModalProviderComponent.jsx
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { ModalProvider, useModal } from '../../context/ModalContext';

const GlobalModal = () => {
  const { isOpen, modalContent, closeModal } = useModal();

  return (
    <Modal isOpen={isOpen} onOpenChange={closeModal}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
            <ModalBody>
              {modalContent}
            </ModalBody>
            <ModalFooter>
              {/* <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const ModalProviderComponent = ({ children }) => {
  return (
    <ModalProvider>
      {children}
      <GlobalModal />
    </ModalProvider>
  );
};

export default ModalProviderComponent;
