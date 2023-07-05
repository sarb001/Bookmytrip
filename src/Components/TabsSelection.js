import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import TabsOptional from './TabsOptional';


const TabsSelection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
     <h1>  Tabs Selection Here   </h1>

      <div className="modal-container" style = {{textAlign:'center'}} >
      <Button  onClick={onOpen}> Click here </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody> 
                <TabsOptional />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </>
  )
}
export default TabsSelection