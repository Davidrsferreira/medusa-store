import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { CollectionOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { Collection } from "types/global"

export default function CollectionTemplate({
  collection,
}: {
  collection: Collection
}) {
  return (
    <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
      <RefinementList
        collectionId={(collection.handle as CollectionOptions) || "all"}
      />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1>{collection.title}</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts collectionId={collection.id} />
        </Suspense>
      </div>
    </div>
  )
}
