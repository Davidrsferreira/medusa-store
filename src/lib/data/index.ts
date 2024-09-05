import { Collection, Product } from "types/global"

import database from "../../db/database.json"

export const getCollections = async function (): Promise<Collection[]> {
  return database.collections as unknown as Collection[]
}

export const getCollectionByHandle = async function (
  handle: string
): Promise<Collection> {
  const collection = database.collections.find(
    (x) => x.handle == handle
  ) as unknown as Collection

  return collection
}

export const getProducts = async function (): Promise<Product[]> {
  return database.products as unknown as Product[]
}

export const getProductById = async function (id: string): Promise<Product> {
  const product = database.products.find(
    (x) => x.id == id
  ) as unknown as Product

  return product
}

export const getProductByHandle = async function (
  handle: string
): Promise<Product> {
  const product = database.products.find(
    (x) => x.handle == handle
  ) as unknown as Product

  return product
}

export const getProductsByCollectionId = async function (
  collectionId: string
): Promise<Product[]> {
  if (collectionId === "all") {
    return database.products as unknown as Product[]
  }

  return database.products.filter(
    (x) => x.collectionId == collectionId
  ) as unknown as Product[]
}

export const formatPrice = (amount: number): string => {
  const price = Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "eur",
  }).format(amount)

  return price
}
