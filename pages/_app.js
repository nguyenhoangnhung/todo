import "../styles/index.css";
import Head from "next/head";


export default function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <link rel={"stylesheet"} src={"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"}/>
        </Head>
        <Component {...pageProps} />
    </>
}