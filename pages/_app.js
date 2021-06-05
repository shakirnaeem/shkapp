import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'nprogress/nprogress.css'
import '../styles.css'
import App from "next/app"
import NProgress from 'nprogress'
import Router from 'next/router'
const { API_URI } = process.env

//NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });
//NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch(`${API_URI}brands/GetBrands`)
  const brands = await res.json();
  appProps.pageProps = { brands }
  return { ...appProps }
}

export default MyApp
