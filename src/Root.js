import { Outlet } from "react-router-dom"
import { Headers } from "./Sections"

const Root = ()=>{
    return(
        <>
    <Headers />
    <div className="App">
        <Outlet />
    </div>
        </>
    )
}
export default Root