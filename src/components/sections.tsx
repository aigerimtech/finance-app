import React from "react";

type SectionsProps={
    bgIcon: string,
    fgIcon: string,
    title: string,
}

const Sections=({bgIcon, fgIcon, title}:SectionsProps)=>{
    return(
        <div className='flex flex-col'>
            <div className="relative">
               <img src={bgIcon} />
               <img src={fgIcon} width={25} height={25} className='absolute top-0 left-0 ml-[11px] mt-[11px] '/>
            </div>
            <span className='text-base'>{title}</span>
        </div>
    )
}

export default Sections