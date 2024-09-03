import { getProductById } from "@lib/data"
import ProductActions from "@modules/products/components/product-actions"

/**
 * Fetches real time pricing for a product and renders the product actions component.
 */
export default async function ProductActionsWrapper({ id }: { id: string }) {
  const product = await getProductById(id)

  return <ProductActions product={product} />
}
