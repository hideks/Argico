import Footer from './components/footer'
import Header from './components/header'
import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <head>
                <title>Argico | Empréstimo Consignado no Zap</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className='bg-white leading-relaxed overflow-x-hidden text-argico-dark'>
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    )
}
