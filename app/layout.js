export const metadata = {
  title: 'AI-Powered Website Development | Modern Web Solutions',
  description: 'Professional website development services powered by cutting-edge AI technology. Transform your digital presence with intelligent, responsive, and scalable web solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
