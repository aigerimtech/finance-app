import { Link } from "react-router-dom"
import AdditionalPost from "../components/AdditionalPost"
import Category from "../components/category"
import TagButton from "../components/TagButton"
import { useStore } from "../store/useStore"

const Transactions=()=>{
    const sections=useStore(state=>state.sections);
    const activeSection=useStore(state=>state.activeSection);
    
    return(
        <div className="h-screen relative">
            {activeSection ? (
                <header className='mx-8 flex pt-4 pb-7'>
                  <div style={{backgroundColor: activeSection.bgColor}}
                   className="w-[48px] h-[48px] bg-[#B0755370] bg-primary-green rounded-full  flex flex-rounded-full justify-center items-center">
                    {activeSection.emoji}
                  </div>
                  <h5 className='font-bold tetx-lg mt-[13px] ml-[12px]'>{activeSection.name}</h5>
                </header>
            ) : null}
            
            <main className={`mx-8 ${activeSection ? '' : 'mt-10'}`}>
                <div className='grid w-full grid-cols-4 gap-5 mb-8'>
                    {sections.map(section=>(
                        <Category label={section.name} icon={section.emoji} bgIcon={section.bgColor}/>
                    ))}
        
                </div>
                <AdditionalPost label={'Комментарий'}>
                <input type="text" className="outline-none text-lg" placeholder="Супермаркеты"/>
                </AdditionalPost>

                <AdditionalPost label={'Метки'}>
                <div className="flex flex-wrap gap-3">
                    <TagButton label={'Для FetchLab'}/>
                </div>
                </AdditionalPost>

                <AdditionalPost label={'Дата'}>
                <input type="date" className="outline-none text-lg" placeholder="Сегодня, 12 июня 2020"/>
                </AdditionalPost>

            </main>

            <div className={'w-full fixed bottom-0 h-[160px] rounded-t-2xl bg-primary-green'}>
                <div className="mx-8 pt-6">
                    <p className="text-sm text-[#ffffff50]">Сумма</p>
                    <div className="flex justify-between">
                        <p className='text-white font-medium text-2xl'>740 ₽</p>
                        <Link to={'./transaction'}
                        className='rounded-full bg-[#ffffff50] w-[64px] h-[44px] flex items-center justify-center'>
                            <img src='./iconsBudget/rightArrowIcon.png'></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions