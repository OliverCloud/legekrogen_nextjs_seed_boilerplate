import Header from "@/components/organisms/header/header";
import Navigasion from "@/components/organisms/navigasion/navigasion";

export default function siteLayout({ children }) {
    return <div>
        <Header />
        {children}
    </div>
}