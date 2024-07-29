import Tags from "../components/tags";
import AddItems from '../components/addItems';
import DateHistory from "../components/dateHistory";
import {useStore} from "../store/useStore";

const History=()=>{
  const history=useStore(state=>state.history);
    return(
        <div>
       <header className='mx-8 box-border pt-5 pb-7'>
        <div className='flex justify-between w-full items-center'>
          <h5 className='font-bold text-lg text-black'>Траты за <span className='text-primary-green'>июнь</span></h5>
          <span className='font-light text-primary-green text-base'>65 099,76 ₽</span>
        </div>
        <div className="flex justify-center items-center mt-[15px] relative">
            <img src='./iconsBudget/leftArrowIcon.png' className='absolute left-0' />
            <img src='./iconsBudget/circleBudget.png' />
            <img src='./iconsBudget/rightArrowIcon.png' className='absolute right-0' />
        </div>
        

        <div className='flex flex-wrap w-full gap-2 mt-[25px]'>
          <Tags label={'Переводы'} color={'#236F57'} sum={27600} textColor ={'#FFFFFF'} />
          <Tags label={'Транспорт'} color={'#EDDCD8'} sum={27600} textColor ={'#001026'}/>
          <Tags label={'Остальное'} color={'#F15931'} sum={27600} textColor ={'#FFFFFF'}/>
        </div>
       </header>
       <div className='w-full h-[1px] bg-primary-gray'></div>
       <main className='mx-5'>
        <h4 className='font-bold text-lg text-black mb-[12px]'> История</h4>
        
        {history.map(item=>(
          <DateHistory label ={item.datePurchase.data} sum={item.datePurchase.sum} items={item.historyPurchase}/>
        ))}
        


        {/* <DatePurchase date={'Сегодня'} dateColor={'#616C7A'} totalSpent={2635.12} totalSpentColor={'#616C7A'} currency={'₽'}/> */}

        {/* <HistoryPurchase 
        backgroundIcon={'./iconsHistoryPurchase/businessIcon.png'} title={'Бизнес'} titleColor={'#001026'} subtitle={'Dribbble'} subTitleColor={'#616C7A'} price={-12} currency={'$'} priceColor={'#001026'} />

        <HistoryPurchase 
        backgroundIcon={'./iconsHistoryPurchase/transportIcon.png'} title={'Транспорт'} titleColor={'#001026'} subtitle={'Яндекс. Такси'} subTitleColor={'#616C7A'} price={-560} currency={'₽'} priceColor={'#001026'}/>

        <HistoryPurchase 
        backgroundIcon={'./iconsHistoryPurchase/transferIcon.png'} foregroundIcon={'./iconsHistoryPurchase/curveTransferIcon.png'} title={'Бизнес'} titleColor={'#001026'} subtitle={'Перевод Егору'} subTitleColor={'#616C7A'} price={-18} currency={'₽'} priceColor={'#001026'} useOverlay={true}/>

        <div className='mt-[15px]'>
          <DatePurchase date={'Вчера'} dateColor={'#616C7A'} totalSpent={2635.12} totalSpentColor={'#616C7A'} currency={'₽'}/>
        </div>

        <HistoryPurchase 
        backgroundIcon={'./iconsHistoryPurchase/deliveryIcon.png'} title={'Фастфуд'} titleColor={'#001026'} subtitle={'Delivery food'} subTitleColor={'#616C7A'} price={-830} currency={'₽'} priceColor={'#001026'}/>


        <HistoryPurchase 
        backgroundIcon={'./iconsHistoryPurchase/transportIcon.png'} title={'Транспорт'} titleColor={'#001026'} subtitle={'Яндекс. Такси'} subTitleColor={'#616C7A'} price={-560} currency={'₽'} priceColor={'#001026'}/> */}
        
        <AddItems plusIcon={'./iconsAddItems/plusIcon.png'} plusColor={'#FFFFFF'} useOverlay={true} plusBackgroundIcon={'./iconsAddItems/plusBackgroundIcon.png'}/>
       </main>
    </div>
    )
}

export default History;