export type CartType = {
  id: string
  userId: string
  date: Date
  products: ItemCartType[]
}

export type ItemCartType = {
  productId: string
  quantity: number
}

export type ItemCartDetailsType = {
  id: string
  title: string
  price: number
  category: string
  description: string
  imgUrl: string
  quantity: number
}