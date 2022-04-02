import logo from './logo.svg';
import './App.css';
import Card from "./card"
import Nav from "./Nav"
import React from 'react';
import axios from 'axios';
import AddNewItemButton from './AddNewItemButton';
function App() {

  var [listItems,setListItems] = React.useState([])
  var [isLoaded,setLoaded] = React.useState(false)
  
  React.useEffect(()=>{
    axios.get('http://localhost:4500/proxy')
    .then(data=>{setListItems(data.data);setLoaded(true);console.log(data.data)})
    .catch(err=>console.log(err))
  },[])


  function deleteItem(id){
    let newList = listItems.filter(item => item.id !== id);
    setListItems(newList)
  }
  function updateItem(id,content,isDone){
  const newList = listItems.map((item) => {
    if (item.id === id) {
      const updatedItem = {
        ...item,
        content: content,
        isDone:isDone
      };
      return updatedItem;
    }

    return item;
  });
  setListItems(newList);

  }

    function addNewItem(newItem){
      let newList = listItems
      newList.push(newItem)
      setListItems(newList)
    }
  


  return (
    <div className="App">
     <Nav/>
     {isLoaded && listItems.map((item,index)=><Card data={item} index={index+1} updateAfterDelete={deleteItem} updateData={updateItem}/>)}      
    <AddNewItemButton addingNewitem={addNewItem}/>
    </div>
  );
}

export default App;
