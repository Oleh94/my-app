import React from "react";
import fetchingImg from "../../source/images/389.gif";

let Preloader = (props) => {
   return <div>
   <img src={fetchingImg}/>
   </div>
}

export default Preloader;