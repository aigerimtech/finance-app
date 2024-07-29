import React from "react";

type datePurchaseProps={
    date: string,
    totalSpent: number,
    dateColor: string,
    totalSpentColor: string,
    currency: string
}

const datePurchase =({date, totalSpent, dateColor, totalSpentColor, currency}: datePurchaseProps)=>{
    return(
        <div className=' flex flex-col w-[375px]'>
          <div className='w-[375px] h-[36px] flex flex-row gap-52'>
            <span className='text-sm' style={{color: dateColor}}>{date}</span>
            <div>
              <span className='text-sm' style={{color: totalSpentColor}}>{totalSpent}</span>
              <span className='text-sm ml-[3px]' style={{color: totalSpentColor}}>{currency}</span>
            </div>
          </div>
        </div>
    )
}


export default datePurchase;