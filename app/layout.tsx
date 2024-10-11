export const metadata = {
  title: "AI/lluminator",
  description: "Using the power of AI, this free-to-use tool will help you keep track of the latest scientific literature in your field."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
