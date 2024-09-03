export type Collection = {
  id: string
  title: string
  handle: string
  products: Product[]
}

export type Product = {
  id: string
  title: string
  subtitle?: string
  description?: string
  handle: string | null
  thumbnail: string | null
  price: number
  images: Image[]
  material?: string
  length?: number
  width?: number
  height?: number
  collectionId: string
  collectionTitle: string
}

export type Image = {
  id: string
  url: string
}
