import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { CollectionOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  collectionId,
}: {
  collectionId?: CollectionOptions
}) => {
  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList collectionId={collectionId || "all"} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">Todos os produtos</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts collectionId={collectionId || "all"} />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
