"use client"

import { Button, Text } from "@medusajs/ui"
import { useRef } from "react"
import { Product } from "types/global"
import { formatPrice } from "@lib/data"

type ProductActionsProps = {
  product: Product
}

export default function ProductActions({ product }: ProductActionsProps) {
  const actionsRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div className="flex flex-col text-ui-fg-base">
          <span>{formatPrice(product.price)}</span>
        </div>
        <Text className="txt-compact-small-plus text-ui-fg-subtle">
          Para comprar o item ou obter mais informações, por favor, entre em
          contacto.
        </Text>
        <a
          href="https://wa.me/351933422777?text=Hello%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20products"
          target="_blank"
        >
          <Button disabled={false} variant="primary" className="w-full h-10">
            Entrar em contacto
          </Button>
        </a>
      </div>
    </>
  )
}
