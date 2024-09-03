import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { Collection } from "types/global"

export default function ProductRail({
  collection,
}: {
  collection: Collection
}) {
  const { products } = collection
  if (!products) {
    return null
  }

  return (
    <div className="content-container pt-12">
      <div className="flex justify-between mb-8">
        <Text className="txt-xlarge">{collection.title}</Text>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          Ver todos
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-12 small:gap-y-36">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} isFeatured/>
            </li>
          ))}
      </ul>
    </div>
  )
}
