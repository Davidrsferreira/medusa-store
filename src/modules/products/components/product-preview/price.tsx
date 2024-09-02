import { Text } from "@medusajs/ui"

export default async function PreviewPrice({ price }: { price: string }) {
  return (
    <>
      <Text
        className="text-ui-fg-muted"
      >
        {price}
      </Text>
    </>
  )
}
