import { BasketContextProvider } from '@/context/basket';
import './globals.css'
import { quicksandFont, squarepegFont } from '@/utils/fonts';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksandFont.className} ${squarepegFont.variable}`}>
        <BasketContextProvider>
          {children}
        </BasketContextProvider>
      </body>
    </html>
  )
}
