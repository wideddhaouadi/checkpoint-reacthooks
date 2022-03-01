import React ,{useState} from 'react'
import { Modal ,Button} from 'react-bootstrap';





function Addmovie({addnewmovie}) {
    const [show, setShow] = useState(false);
    const [name, setname] = useState("");
    const [realisateur, setrealisateur] = useState("");
  const [rating, setrating] = useState("");
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  
    return (
      <>
        <Button  variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>movie title</Modal.Title>
          </Modal.Header>
          
          <Modal.Body>
          <input type="text" placeholder='name'  on onChange={(e)=>setname(e.target.value)}/>
          <input type="text" placeholder='réalisateur'  on onChange={(e)=>setrealisateur(e.target.value)}/>
          <input type="text" placeholder='rating'  on onChange={(e)=>setrating(e.target.value)}/>
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>{handleClose(); addnewmovie(name,realisateur,rating)}}>
            Save Changes
            </Button>
            <Button variant="primary" onClick={handleClose}>
              close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Addmovie