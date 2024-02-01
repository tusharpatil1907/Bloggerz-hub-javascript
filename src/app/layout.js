import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeProvider from './poviders/themeProvider'
import AuthProviders from './poviders/authProviders'
// import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={inter.className}>
        <AuthProviders>

        <ThemeContextProvider>
          <ThemeProvider>

            <div className='container'>
              <div className='wrapper'>
                <NavBar />
                {children}
                <Footer />
              </div>
            </div>

          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProviders>
      </body>
    </html>
  )
}
