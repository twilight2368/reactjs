import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditFood(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  return (
    <>
      <button className='bg-red-600 rounded-3xl w-1/2 ' onClick={handleShow}>Edit</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form id = 'EditFood' className="w-full max-w-sm" 
                        onSubmit={(e) => {
                            e.preventDefault();
                            props.EditFood(props.id, name, price);
                        }}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                        Name
                    </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                                id="name_1" type="text" value= {name}
                                onChange={(e)=> {
                                    setName(e.target.value);
                                }}
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="price">
                            Price
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-600" 
                                id="price_1" type="text" value = {price}
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }}
                        />
                    </div>
                </div>
                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
           <button form='EditFood' onClick={handleClose}  className='bg-red-600 rounded h-10 text-white px-1'>Save changes</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditFood;