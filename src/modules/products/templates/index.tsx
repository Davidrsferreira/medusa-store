import { Region } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import ProductInfo from "@modules/products/templates/product-info"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: PricedProduct
  region: Region
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container flex flex-col small:flex-row pt-6 relative"
        data-testid="product-container"
      >
        <div className="block w-full relative small:w-2/5 small:mr-8">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 w-full py-8 gap-y-6 small:w-2/5 small:mr-8">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 w-full py-8 gap-y-12 small:w-1/6">
          <Suspense
            fallback={<ProductActions product={product} region={region} />}
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default ProductTemplate
