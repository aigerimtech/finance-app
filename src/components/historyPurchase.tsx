// import React from "react";

// type historyPurchaseProps={
//     backgroundIcon: string,
//     foregroundIcon?: string,
//     title: string,
//     subtitle: string,
//     price: number,
//     currency: string,
//     titleColor: string,
//     subTitleColor: string,
//     priceColor: string,
//     useOverlay?:boolean,
// }

// const historyPurchase=({backgroundIcon, foregroundIcon, title, subtitle, price, currency, titleColor, subTitleColor, priceColor, useOverlay=false}: historyPurchaseProps)=>{
//     return(
//         <div>
//             <div className='flex'>
//               <div className="mt-[6px] relative">
//                <img src={backgroundIcon} width={48} height={48} className="w-full h-full" />
//                 {useOverlay && foregroundIcon && (
//                <img src={foregroundIcon} width={24} height={24} className="absolute top-0 left-0 ml-[11px] mt-[14px] " />
//                 )}
//             </div>
//               <div className='flex flex-col w-[180px] h-[40px] gap-1 ml-[12px] mt-[12px]' >
//                 <span className='text-base' style={{color: titleColor}}>{title}</span>
//                 <span className='text-sm' style={{color: subTitleColor}}>{subtitle}</span>
//               </div>
//               <div className='mt-[20px] ml-[33px]'><span className='text-base' style={{color: priceColor}}>{price}</span></div>
//               <div className='mt-[20px] ml-[3px]'><span className='text-base' style={{color: priceColor}}>{currency}</span></div>
//             </div>
//         </div>
//     )
// }

// export default historyPurchase;

import React from "react";
import {historyPurchase} from "../store/useStore";


const HistoryPurchase = ({icon, title, subtitle, currency, sum}: historyPurchase) =>{
    return(
        <div>
            <div className='flex w-full items-center'>
                <div className="mt-[6px] relative">
                    <img src={icon} width={48} height={48} className="w-full h-full" />
                </div>
                <div className='flex flex-col w-[180px] ml-4  gap-1' >
                    <span className='text-base'>{title}</span>
                    <span className='text-sm'>{subtitle}</span>
                </div>
                <div className='flex ml-auto'>
                    <div className=''><span className='text-base'
                                                               style={{color: '#000000'}}>{sum}</span></div>
                    <div className=''><span className='text-base'
                                                              style={{color: '#000000'}}>{currency}</span></div>
                </div>

            </div>
        </div>
    )
}

export default HistoryPurchase;