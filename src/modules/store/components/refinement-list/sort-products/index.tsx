"use client"

import { ChangeEvent } from "react"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type CollectionOptions =
  | "all"
  | "cozinha"
  | "decoracao"
  | "eletrodomesticos"
  | "escritorio"
  | "iluminacao"
  | "organizacao"
  | "plantas"
  | "prateleiras"
  | "outros"

type SortProductsProps = {
  collection: CollectionOptions
  setQueryParams: (value: CollectionOptions) => void
}

const collectionOptions = [
  {
    value: "all",
    label: "Todos os produtos",
  },
  {
    value: "cozinha",
    label: "Cozinha",
  },
  {
    value: "decoracao",
    label: "Decoração",
  },
  {
    value: "eletrodomesticos",
    label: "Eletrodomésticos",
  },
  {
    value: "escritorio",
    label: "Escritório",
  },
  {
    value: "iluminacao",
    label: "Iluminação",
  },
  {
    value: "organizacao",
    label: "Organização",
  },
  {
    value: "plantas",
    label: "Plantas",
  },
  {
    value: "prateleiras",
    label: "Prateleiras/Armários",
  },
  {
    value: "outros",
    label: "Outros",
  },
]

const SortProducts = ({
  collection: collection,
  setQueryParams,
}: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newCollection = e.target.value as CollectionOptions
    setQueryParams(newCollection)
  }

  return (
    <FilterRadioGroup
      title="Categorias"
      items={collectionOptions}
      value={collection}
      handleChange={handleChange}
    />
  )
}

export default SortProducts
