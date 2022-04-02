import React from "react"
import {Button ,Modal,FloatingLabel,Form} from "react-bootstrap"
import axios from "axios";
export default function DeleteItemModal(props){
    const [show, setShow] = React.useState(props.showModel);
    var [data,setData] = React.useState("")

    function addingItem(){
        axios.post('http://localhost:4500/proxy/',{
            data:{
                content:data
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
             }
             
        })
        .then(data=>{console.log(data.data);props.addingNewitem(data.data)})
        .catch(err=>console.log(err))
    
        setData("")
        props.toggle()
    }



    function inputHandler(event){
        setData(event.target.value)
    }

    return(
        <>
      <Modal centered show={props.show} onHide={props.toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Adding new item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel
    controlId="floatingInput"
    label="Item content"
    className="mb-3"
  >
    <Form.Control value={data} onChange={inputHandler} type="text" placeholder="item content" />
  </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.toggle}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={addingItem}>
            Comfirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )

}