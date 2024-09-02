"use client"

import { useRouter } from "next/navigation"

import SortProducts, { CollectionOptions } from "./sort-products"

type RefinementListProps = {
  collectionId: CollectionOptions
}

const RefinementList = ({ collectionId: collectioId }: RefinementListProps) => {
  const router = useRouter()

  const setQueryParams = (value: CollectionOptions) => {
    if (value === "all") {
      router.replace("/store")
    } else {
      router.replace(`/collections/${value}`)
    }
  }

  return (
    <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
      <SortProducts collection={collectioId} setQueryParams={setQueryParams} />
    </div>
  )
}

export default RefinementList
