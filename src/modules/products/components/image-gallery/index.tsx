"use client"

import { Container } from "@medusajs/ui"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Image } from "types/global"

type ImageGalleryProps = {
  images: Image[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      <Carousel
        className="flex flex-col flex-1"
        infiniteLoop
        showStatus={false}
      >
        {images.map((image, index) => (
          <Container key={image.id} id={image.id} className="p-0">
            <img
              key={image.url}
              src={`/images/${image.url}`}
              className="rounded-rounded"
              alt={`Product image ${index + 1}`}
            />
          </Container>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageGallery
