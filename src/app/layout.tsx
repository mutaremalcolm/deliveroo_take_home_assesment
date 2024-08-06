import React from "react"

export const metadata = {
  title: 'FlipDish Assesment',
  description: 'By Malcolm Mutare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
