import { create } from "zustand"

interface datePurchase{
    data: string,
    sum: number,
    currency: string
}

interface section{
    bgColor: string,
    emoji: string,
    name: string
}

export interface historyPurchase{
    icon: string,
    title: string,
    subtitle: string,
    sum: number, 
    currency: string
}

interface purchase{
    datePurchase:datePurchase,
    historyPurchase: historyPurchase[] 
}

interface IState{
    history: purchase[],
    sections: section[],
    activeSection: section | null
    setActiveSection: (sectionProps: section)=>void
}

export const useStore=create<IState>()((set)=>({
    history: [
        {
            datePurchase: 
            {
                data:"Сегодня",
                sum:2635.12,
                currency:'₽',
            },
            historyPurchase: [
                {
                    icon: '/iconsHistoryPurchase/businessIcon.png',
                    title:'Бизнес',
                    subtitle:'Dribble',
                    sum:1116,
                    currency:'₽',
                },
                {
                    icon: '/iconsHistoryPurchase/transportIcon.png',
                    title:'Транспорт',
                    subtitle:'Яндекс. Такси',
                    sum:560,
                    currency:'₽',
                },
                {
                    icon: '/iconsHistoryPurchase/curveTransferIcon.png',
                    title:'Бизнес',
                    subtitle:'Перевод Егору',
                    sum:1350,
                    currency:'₽',
                },
                
            ]
        }
    ],
    sections:[
        {
            bgColor: '#B0755330',
            emoji: '💼',
            name: 'Бизнес'
        },
        {
            bgColor: '#FF534230',
            emoji: '🕹',
            name: 'Развлечение'
        },
        {
            bgColor: '#FFCF3330',
            emoji: '🚖',
            name: 'Транспорт'
        },
        {
            bgColor: '#B0755330',
            emoji: '💼',
            name: 'Бизнес'
        },
        {
            bgColor: '#FF534230',
            emoji: '🥕',
            name: 'Продукты'
        },
        {
            bgColor: '#B0755330',
            emoji: '💳',
            name: 'Переводы'
        },
        {
            bgColor: '#FF534230',
            emoji: '🎁',
            name: 'Подарки'
        },
        {
            bgColor: '#FFA32530',
            emoji: '🍔',
            name: 'Фастфуд'
        },
    ],
    activeSection: null,
    setActiveSection: (sectionProps)=> set(()=>({activeSection: sectionProps}))
    
}))


