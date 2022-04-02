import React from "react"
import {Button ,Modal} from "react-bootstrap"
import axios from "axios";
export default function DeleteItemModal(props){

    const [show, setShow] = React.useState(props.showModel);

    function deleteItem(){

        axios.delete('http://localhost:4500/proxy/'+props.data.id,{
            method:"DELETE"
        })
        .then(data=>{console.log(data.data)})
        .catch(err=>console.log(err))
    

        props.updateView(props.data.id)
        props.modalToggle()
    }

    return(
        <>
      <Modal centered show={props.showModal} onHide={props.modalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Deleting item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item ?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.modalToggle}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={deleteItem}>
            Comfirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )

}