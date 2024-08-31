import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const price = pricedProduct.variants[0].prices[0].amount

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
            <PreviewPrice price={price} />
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
