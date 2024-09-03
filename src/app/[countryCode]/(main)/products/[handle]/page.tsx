import { notFound } from "next/navigation"

import { getProductByHandle } from "@lib/data"
import ProductTemplate from "@modules/products/templates"

type Props = {
  params: { handle: string }
}

const getProduct = async (handle: string) => {
  const product = await getProductByHandle(handle).then((product) => product)
  return product
}

export default async function ProductPage({ params }: Props) {
  const pricedProduct = await getProduct(params.handle)

  if (!pricedProduct) {
    notFound()
  }

  return <ProductTemplate product={pricedProduct} />
}
