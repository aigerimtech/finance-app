import React, { useState } from 'react';

type TagButtonProps={
    label:string
}

const TagButton=({label}: TagButtonProps)=>{

    const [isActive, setIsActive]=useState(false);

    return(
        <button onClick={()=>setIsActive(old=>!old)} 
        style={{background: isActive ? '#236F57' : '', color: isActive ? '#FFFFFF' : '',}} 
        className='bg-[#F2F4F7] px-[10px] py-[6px] text-sm rounded-full'>
            {label}
        </button>
    );
}

export default TagButton;