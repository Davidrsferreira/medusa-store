import { ShoppingBag } from "@medusajs/icons"
import { Button } from "@medusajs/ui"

const Hero = () => {
  return (
    <div
      className="h-[45vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle"
      style={{
        backgroundImage: "url('/images/wide.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <a href="/store">
          <Button variant="secondary">
            Ver todos os produtos
            <ShoppingBag />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
