import { PropsWithChildren } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header/>

            <div>
                {children}
            </div>
            
            <Footer/>
        </>
    );
}