import { Text } from "@medusajs/ui"

import { Product } from "types/global"

import { formatPrice, getProductById } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"

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
            {product.sale ? (
              <div className="md:flex md:space-x-2">
                <Text className="text-ui-fg-muted line-through">
                  {formatPrice(product.price)}
                </Text>
                <Text className="text-ui-fg-error">
                  {formatPrice(product.sale)}
                </Text>
              </div>
            ) : (
              <Text className="text-ui-fg-muted">
                {formatPrice(product.price)}
              </Text>
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
