export interface Product {
    id: string,
    img?: string,
    title: string,
    description?: string,
    arrayImgs?: string[],
    review?: {
        stars: number,
        description?: string
    },
    quantity?: number,
    unit_price: number
}