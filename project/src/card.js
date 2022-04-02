import React from "react";
import { Card ,Button} from "react-bootstrap";
import DeleteItemModal from "./deleteItemModel";
import UpdateItemModal from "./updateItemModel"
export default function (props){
    var[updateModal,showUpdateModal] = React.useState(false)
    var[deleteModal,showDeleteModal] = React.useState(false)

    function updateModalToggle(){
        showUpdateModal(!updateModal)
    }

    function deleteModalToggle(){
        showDeleteModal(!deleteModal)
    }

    return(
        <div className="px-2 mb-2 sketelon">
        <Card style={{ width: '100%'}} className={props.state}>
  <Card.Body>
      <div className="row">
          <div className="col-1 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={props.data.isDone === true ? "green":"red"} class="bi bi-circle-fill" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8"/>
</svg>

          </div>
          <div className="col-8 col-lg-8 col-md-8 col-sm-8 text-start">
              <div style={{'display':'flex','flexDirection':'column'}}>

                <h4 style={{'font-weight':'bold'}}>{props.index}- userID : {props.data.content}</h4>
                <small style={{'font-size':'10px','color':'black'}}> create at : {props.data.createdAt}</small>
                <small style={{'font-size':'10px','color':'black'}}> last update at : {props.data.updatedAt}</small>
              </div>
          </div>
          <div className="col-3 col-lg-3 col-md-3 col-sm-3 text-end mt-3">
             <Button onClick={updateModalToggle} variant="dark" size="sm" style={{'border':'none','border-radius':'50%'}} ><i style={{'fontSize':'14px'}} class="bi bi-pencil-fill"></i></Button>
             <Button onClick={deleteModalToggle} variant="dark" size="sm" style={{'border':'none','border-radius':'50%','margin-left':'4px'}} ><i style={{'fontSize':'14px'}} class="bi bi-x"></i></Button>
       </div>
 

      </div>

  </Card.Body>
</Card>

<DeleteItemModal showModal={deleteModal} data={props.data} modalToggle={deleteModalToggle} updateView={props.updateAfterDelete}/>
<UpdateItemModal showModal={updateModal} data={props.data} modalToggle={updateModalToggle} updateView={props.updateData}/>
</div>
    )
}