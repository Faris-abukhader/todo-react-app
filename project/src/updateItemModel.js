import React from "react"
import {Button ,Modal,FloatingLabel,Form} from "react-bootstrap"
import axios from "axios";
export default function DeleteItemModal(props){

    const [show, setShow] = React.useState(props.showModel);

    var [data,setData] = React.useState({content:props.data.content,isDone:props.data.isDone== true ? "true":'false'})

    function deleteItem(){
        var finished = data.isDone == 'true' ? true:false
        axios.put('http://localhost:4500/proxy/',{
            data:{
                id:props.data.id,
                content:data.content,
                currentDate:new Date(),
                isDone:finished
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
             }
             
        })
        .then(data=>{console.log(data.data)})
        .catch(err=>console.log(err))
    
        props.updateView(props.data.id,data.content,finished)
        props.modalToggle()
    }



    function inputHandler(event){
        const {value ,name } = event.target

        setData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
        console.log(data)
    }

    return(
        <>
      <Modal centered show={props.showModal} onHide={props.modalToggle}>
        <Modal.Header closeButton>
          <Modal.Title>Updating item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel
    controlId="floatingInput"
    label="Item content"
    className="mb-3"
  >
    <Form.Control value={data.content} onChange={inputHandler} name="content" type="email" placeholder="item content" />
  </FloatingLabel>

<div className="text-center">
    <small>Is done</small><br/><br/>
<Button variant={data.isDone == 'true' ? "success":"outline-success"} onClick={inputHandler} value="true" name="isDone">True</Button>
      <Button variant={data.isDone == 'false' ? "danger":"outline-danger"} onClick={inputHandler}value="false" name="isDone">False</Button> 

</div>


        </Modal.Body>
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