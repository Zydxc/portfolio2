import ActivityBar from "./ActivityBar";
import FileExplorer from "./FileExplorer";
import FileTab from "./FileTab";
import MenuBar from "./MenuBar";

export default function Layout() {
    return(
        <> 
            <MenuBar />
            <div className="grid grid-cols-12">
                <ActivityBar />
                <FileExplorer />
                <FileTab />
            </div>
            
        </>
    
    )
}