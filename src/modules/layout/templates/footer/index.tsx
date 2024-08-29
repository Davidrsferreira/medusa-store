import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="border-t border-ui-border-base w-full mt-2">
      <div className="content-container flex flex-col items-center w-full my-8 text-ui-fg-muted">
        <LocalizedClientLink
          href="/"
          className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
        >
          Back2Brazil Shop
        </LocalizedClientLink>
      </div>
    </footer>
  )
}
