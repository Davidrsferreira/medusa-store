import { Metadata } from "next"

import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = cache(
  async (): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList()

    if (!collections) {
      return null
    }

    const featuredCollections = collections.slice(0, 4)
    featuredCollections.map(
      (collection) => (collection.products = collection.products.slice(0, 4))
    )

    return featuredCollections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home() {
  const collections = await getCollectionsWithProducts()

  if (!collections) {
    return null
  }

  return (
    <>
      <Hero />
      <ul className="flex flex-col gap-x-6">
        <FeaturedProducts collections={collections} />
      </ul>
    </>
  )
}
