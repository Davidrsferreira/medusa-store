import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Link from "next/link"
import { ArrowUpRightMini } from "@medusajs/icons"

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px]">
        <div className="flex flex-row gap-2">
          <LocalizedClientLink
            href={`/store`}
            className="gap-x-2 text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            Todos os Produtos
          </LocalizedClientLink>
          <p className="text-ui-fg-muted">/</p>
          <LocalizedClientLink
            href={`/collections/${product.collection?.handle}`}
            className="gap-x-2 text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection?.title}
          </LocalizedClientLink>
        </div>
        <Heading
          level="h2"
          className="text-3xl leading-10 text-ui-fg-base"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        {product.subtitle && (
          <Heading
            level="h3"
            className="text-medium text-ui-fg-muted"
            data-testid="product-title"
          >
            <Link
              href={product.subtitle}
              className="flex items-start hover:text-ui-fg-subtle"
              target="_blank"
            >
              Veja onde o produto foi comprado
              <ArrowUpRightMini />
            </Link>
          </Heading>
        )}

        <Text
          className="text-medium text-ui-fg-subtle"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
