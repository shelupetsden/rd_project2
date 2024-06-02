import "@/styles/globals.css";
import AppContext from "@/context/AppContext";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Fotter";

export default function MyApp({Component, pageProps}) {
    return (
        <AppContext>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
        </AppContext>
    )
}
