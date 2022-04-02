import React from "react"
export default function Nav(props){

    return(
        <>
<div className=" bg-dark m-0 p-0" style={{'width':'100%','position':'sticky','margin':'0','top':'0','zIndex':'1000'}}>
    <header className="row align-items-center justify-content-center justify-content-md-between py-3 mb-1 " style={{'width':'100%','height':'80px','border':'none'}}>     
      <ul className="nav col-6 col-lg-6 col-md-6 col-sm-6 justify-content-center mb-md-0" style={{'position':'absolute','left':'50%','transform':'translate(-50%,0)'}}>
        <li><a href="#" className="nav-link px-2 link-light" style={{'fontFamily': 'Roboto','fontWeight':'bold'}}>Todo list</a></li>
      </ul>
    </header>
  </div> 
  </>  
   )
}