import React from "react";
import { Link } from "react-router-dom";

type addItemsProps={
    plusColor: string,
    useOverlay?:boolean,
    plusIcon: string,
    plusBackgroundIcon: string,
}

const addItems =({plusColor, plusBackgroundIcon, plusIcon, useOverlay=false}:addItemsProps)=>{
    return(
       <Link to={'/transactions'} className="absolute top-[580px] left-[279px] ">
        <div className="mt-[6px] relative">
            <img src={plusBackgroundIcon}/>
              {useOverlay && plusIcon && (
            <img src={plusIcon} width={25} height={25} style={{color:plusColor}} className="absolute top-0 left-0 ml-[35px] mt-[18px]" />)}
        </div>
    
       </Link>
    )
}

export default addItems; 
