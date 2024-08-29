import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-center w-full h-full text-small-regular">
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              Back2Brazil Shop
            </LocalizedClientLink>
          </div>
        </nav>
      </header>
    </div>
  )
}
