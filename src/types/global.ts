import { Cart, ProductCategory, ProductVariant, Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductCollection } from "@medusajs/product"

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
}

export type Image = {
  id: string
  url: string
}

export type FeaturedProduct = {
  id: string
  title: string
  handle: string
  thumbnail?: string
}

export type ProductPreviewType = {
  id: string
  title: string
  handle: string | null
  thumbnail: string | null
  price: number
  isFeatured?: boolean
}

export type ProductCollectionWithPreviews = Omit<
  ProductCollection,
  "products"
> & {
  products: ProductPreviewType[]
}

export type InfiniteProductPage = {
  response: {
    products: PricedProduct[]
    count: number
  }
}

export type ProductVariantInfo = Pick<ProductVariant, "prices">

export type RegionInfo = Pick<Region, "currency_code" | "tax_code" | "tax_rate">

export type CartWithCheckoutStep = Omit<
  Cart,
  "beforeInsert" | "beforeUpdate" | "afterUpdateOrLoad"
> & {
  checkout_step: "address" | "delivery" | "payment"
}

export type ProductCategoryWithChildren = Omit<
  ProductCategory,
  "category_children"
> & {
  category_children: ProductCategory[]
  category_parent?: ProductCategory
}
