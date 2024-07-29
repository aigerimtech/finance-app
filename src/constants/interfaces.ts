
export interface CardProps{
    name: string,
    description: string,
    price: number,
    tags: string[]
}

export interface data<T>{
    status: number,
    data: T
}

export interface car{
    color: string,
    name: string,
    mileage: number
}