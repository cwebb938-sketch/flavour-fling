export const metadata = {
  title: 'Flavour Fling — Restaurant-quality cooking at home',
  description: 'Chef-developed recipes that teach you the techniques behind great food.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
