import { Text } from "@medusajs/ui"

import { Product } from "types/global"

import { getProductById } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
}: {
  product: Product
  isFeatured?: boolean
}) {
  const productPreview = await getProductById(product.id).then(
    (product) => product
  )

  if (!product) {
    return null
  }

  const amount = product.price

  const formatPrice = (amount: number): string => {
    const price = Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "eur",
    }).format(amount)

    return price
  }

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="square"
          isFeatured={isFeatured}
        />
        <div className="flex txt-compact-medium mt-4 justify-between">
          <Text className="text-ui-fg-subtle" data-testid="product-title">
            {productPreview.title}
          </Text>
          <div className="flex items-center gap-x-2">
            <PreviewPrice price={formatPrice(amount)} />
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
