import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.css'
import App from "next/app"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    const res = await fetch(`https://shkapp.vercel.app/api/brands/GetBrands`)
    const brands = await res.json();
    appProps.pageProps = { brands }
    return { ...appProps }
}

export default MyApp
