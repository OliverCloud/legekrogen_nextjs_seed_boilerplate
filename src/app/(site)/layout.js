import Header from "@/components/(site)/organisms/header/header";


export default function siteLayout({ children }) {
    return <div>
        <Header />
        {children}
    </div>
}