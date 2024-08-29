"use client"

import { ChangeEvent } from "react"

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type SortOptions =
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
  sortBy: SortOptions
  setQueryParams: (value: SortOptions) => void
  "data-testid"?: string
}

const sortOptions = [
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
    label: "Prateleiras",
  },
  {
    value: "outros",
    label: "Outros",
  },
]

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    const newSortBy = e.target.value as SortOptions
    setQueryParams(newSortBy)
  }

  return (
    <FilterRadioGroup
      title="Categorias"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default SortProducts
