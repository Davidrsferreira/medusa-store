import { Text } from "@medusajs/ui"

export default async function PreviewPrice({ price }: { price: number }) {
  return (
    <>
      <Text
        className="line-through text-ui-fg-muted"
        data-testid="original-price"
      >
        {price}
      </Text>
    </>
  )
}
