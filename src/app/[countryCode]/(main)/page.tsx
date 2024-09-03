import { getCollections, getProductsByCollectionId } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { Collection } from "types/global"
import { cache } from "react"

const getCollectionsWithProducts = cache(
  async (): Promise<Collection[] | null> => {
    const collections = await getCollections()

    if (!collections) {
      return null
    }

    const featuredCollections = collections.slice(0, 4)

    featuredCollections.map((collection) => {
      getProductsByCollectionId(collection.id).then(
        (products) => (collection.products = products.slice(0, 4))
      )
    })

    return featuredCollections as unknown as Collection[]
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
