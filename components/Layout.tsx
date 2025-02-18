import ActivityBar from "./ActivityBar";
import FileExplorer from "./FileExplorer";
import FileTab from "./FileTab";
import Footer from "./Footer";
import MenuBar from "./MenuBar";

// h-screen sucks
export default function Layout() {
    return(
        <> 
            <MenuBar />
            <div className="flex flex-row h-screen overflow-hidden"> 
                <ActivityBar />
                <FileExplorer />
                <FileTab />
            </div>
            <Footer />
        </>
    
    )
}