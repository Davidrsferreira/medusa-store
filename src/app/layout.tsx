import "styles/globals.css"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <title>Back2Brazil Shop</title>
        <meta property="og:title" content="Back2Brazil" />
        <meta property="og:image" content="/images/wide.jpg" />
        <meta property="og:url" content="https://medusa-store-two-phi.vercel.app" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
