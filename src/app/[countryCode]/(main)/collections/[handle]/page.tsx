import { notFound } from "next/navigation"

import { getCollectionByHandle } from "@lib/data"
import CollectionTemplate from "@modules/collections/templates"

type Props = {
  params: { handle: string }
}

export default async function CollectionPage({ params }: Props) {
  const collection = await getCollectionByHandle(params.handle).then(
    (collection) => collection
  )

  if (!collection) {
    notFound()
  }

  return <CollectionTemplate collection={collection} />
}
