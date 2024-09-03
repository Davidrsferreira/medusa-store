"use client"

import { Button, Heading, Text } from "@medusajs/ui"
import { useRef, useState } from "react"
import Modal from "@modules/common/components/modal"
import useToggleState from "@lib/hooks/use-toggle-state"
import Input from "@modules/common/components/input"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { Product } from "types/global"
import { formatPrice } from "@lib/data"

type ProductActionsProps = {
  product: Product
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { state, open, close: closeModal } = useToggleState(false)
  const [input, setInput] = useState({
    name: "",
    email: "",
    fone: "",
    productId: product.title,
  })
  const [error, setError] = useState({
    email: false,
    required: false,
  })

  const actionsRef = useRef<HTMLDivElement>(null)

  const close = () => {
    closeModal()
  }

  const formAction = async () => {
    if (!input.name || !input.email || !input.fone) {
      setError({ ...error, required: true })
      return
    } else if (error.email) {
      return
    } else {
      setError({ ...error, required: false })
    }

    const serviceID = "service_ds1z9ar"
    const templateID = "template_u34l35k"
    const options = { publicKey: "6L45PT2kfCbBuXoU2" }

    try {
      const res = await emailjs.send(serviceID, templateID, input, options)

      if (res.status === 200) {
        setInput({
          name: "",
          email: "",
          fone: "",
          productId: product.title,
        })
        close()
      }
    } catch (error) {
      toast.error("Deu merda no emailJs")
    }
  }

  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div className="flex flex-col text-ui-fg-base">
          <span>{formatPrice(product.price)}</span>
        </div>
        <Text className="txt-compact-small-plus text-ui-fg-subtle">
          Para comprar o item ou obter mais informações, por favor, solicite
          contacto.
        </Text>
        <Button
          onClick={open}
          disabled={false}
          variant="primary"
          className="w-full h-10"
          data-testid="add-product-button"
        >
          Solicitar contacto
        </Button>
        <Modal isOpen={state} close={close}>
          <Modal.Title>
            <Heading className="mb-2">Solicitar contacto</Heading>
          </Modal.Title>
          <form action={formAction}>
            <Modal.Body>
              <div className="flex flex-col w-full gap-2">
                <Input
                  label="Nome"
                  name="name"
                  required
                  autoComplete="given-name"
                  type="text"
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                ></Input>
                <Input
                  label="Email"
                  name="email"
                  required
                  autoComplete="given-email"
                  type="email"
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                ></Input>
                <Input
                  label="Telemóvel"
                  name="fone"
                  required
                  autoComplete="given-fone"
                  type="number"
                  onChange={(e) => setInput({ ...input, fone: e.target.value })}
                ></Input>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="flex gap-3 mt-6">
                <Button
                  type="reset"
                  variant="secondary"
                  onClick={close}
                  className="h-10"
                  data-testid="cancel-button"
                >
                  Cancelar
                </Button>
                <SubmitButton>Enviar</SubmitButton>
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </>
  )
}
