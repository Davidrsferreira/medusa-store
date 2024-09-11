import "styles/globals.css"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <head>
        <title>Back2Brazil Shop</title>
      </head>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
