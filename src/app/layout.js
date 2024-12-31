import Footer from '@/components/india/common/Footer';
import Header from '@/components/india/common/Header';
import ReactQueryProvider from '@/components/ReactQueryProvider';
import { FormProvider } from '@/context/formContext';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Home',
  description: 'Visa Application',
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN_URL),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} flex flex-col min-h-screen antialiased bg-background`}
      >
        <FormProvider>
          <ReactQueryProvider>
            <div className="min-h-screen flex flex-col">
              <div className="relative bg-gradient-to-r from-primary to-secondary text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
                <Header />
              </div>
              <main className="flex-1 relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"></div>
                  <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full rounded-full bg-gradient-to-tl from-secondary/20 to-transparent blur-3xl"></div>
                </div>
                <div className="relative container mx-auto px-4 py-8">
                  <div className="bg-white/90 backdrop-blur-lg shadow-lg rounded-xl border border-gray-100/20 overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                    {children}
                  </div>
                </div>
              </main>
              <Footer />
            </div>
            <ToastContainer
              position="top-left"
              autoClose={3500}
              hideProgressBar={false}
              closeOnClick
              pauseOnHover
              theme="light"
              toastClassName="rounded-lg shadow-lg border-l-4 border-primary"
            />
          </ReactQueryProvider>
        </FormProvider>
        <GoogleTagManager gtmId="G-LC9MZM89N4" />
        <GoogleAnalytics gaId="G-LC9MZM89N4" />
      </body>
    </html>
  );
}
