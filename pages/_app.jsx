import { Roboto_Flex, Montserrat } from '@next/font/google'
import { ThemeProvider } from '../components/ThemeProvider';
import { LocaleProvider } from '../components/LocaleProvider';
import Layout from '../components/Layout';

import 'normalize.css/normalize.css'
import '../styles/globals.css'


const roboto = Roboto_Flex();
const montserrat = Montserrat();

export default function App({ Component, pageProps }) {
  return <>
    <style jsx global>
      {`
        html {
          font-family: ${roboto.style.fontFamily}
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: ${montserrat.style.fontFamily}
        }
      `}
    </style>

    <ThemeProvider>
      <LocaleProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocaleProvider>
    </ThemeProvider>
  </>
}
