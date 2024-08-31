import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { ProductPreviewType } from "types/global"
import { CalculatedVariant } from "types/medusa"

const transformProductPreview = (
  product: PricedProduct
): ProductPreviewType => {
  const variants = product.variants as unknown as CalculatedVariant[]

  let cheapestVariant = undefined

  if (variants?.length > 0) {
    cheapestVariant = variants.reduce((acc, curr) => {
      if (acc.calculated_price > curr.calculated_price) {
        return curr
      }
      return acc
    }, variants[0])
  }

  return {
    id: product.id!,
    title: product.title!,
    handle: product.handle!,
    thumbnail: product.thumbnail!,
    price: cheapestVariant?.prices[0].amount,
  }
}

export default transformProductPreview
