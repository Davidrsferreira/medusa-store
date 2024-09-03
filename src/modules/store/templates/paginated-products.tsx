import { getProductsByCollectionId } from "@lib/data"
import ProductPreview from "@modules/products/components/product-preview"

export default async function PaginatedProducts({
  collectionId,
}: {
  collectionId: string
}) {
  const { products } = await getProductsByCollectionId(collectionId)

  return (
    <>
      <ul className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {products.map((p) => {
          return (
            <li key={p.id}>
              <ProductPreview product={p} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
