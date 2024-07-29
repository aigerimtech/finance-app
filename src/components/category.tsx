import React from "react";
import { useStore } from '../store/useStore';

type categoryProps={
    icon: string, 
    bgIcon: string,
    label: string
}

const Category=({icon, bgIcon, label}: categoryProps)=>{
    const setActiveSection = useStore(state=>state.setActiveSection)
    
    return(
        <div className='flex flex-col items-center' 
        onClick={()=>{
            setActiveSection({name: label, bgColor: bgIcon, emoji: icon})
        }}>
            <div style={{backgroundColor: bgIcon}}
                 className='w-[48px] h-[48px] bg-[#B0755370] bg-primary-green rounded-full flex flex-rounded-full justify-center items-center'>
                {icon}
            </div>
            <p className="text-xs">{label}</p>
        </div>
    )
}

export default Category;