import Header from "@/components/organisms/header/header";

export default function siteLayout({ children }) {
    return <div>
        <Header />
        {children}
    </div>
}