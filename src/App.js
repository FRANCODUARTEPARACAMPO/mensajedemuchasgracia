import React, {useState} from "react";
import Button from'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  
function Comprar() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Comprar
      </Button>
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Gracias por su compra!!!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Volver Al Inicio
          </Button>
            
        </Modal.Footer>
      </Modal>
    </>
  );
}
  
export default Comprar;