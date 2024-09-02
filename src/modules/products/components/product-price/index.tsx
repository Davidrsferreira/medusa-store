export default function ProductPrice({ price }: { price: number }) {
  return (
    <div className="flex flex-col text-ui-fg-base">
      <span>{price}</span>
    </div>
  )
}
