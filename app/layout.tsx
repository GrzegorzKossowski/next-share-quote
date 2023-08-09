import Navbar from '@components/Navbar';
import Provider from '@components/Provider';
import '@styles/globals.css';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
export const metadata: Metadata = {
    title: 'ShareQuote',
    description: 'Discover & Share Your Quotes',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <Navbar />
                    <main>{children}</main>
                </Provider>
                <ToastContainer position='bottom-right' />
            </body>
        </html>
    );
}
