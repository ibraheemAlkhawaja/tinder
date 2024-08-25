import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import { FinMaterials, Home } from "../Sections";
import {About ,Contact,Departments ,Projects} from "../Pages";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Root/>,
        children : [{
            path : "/",
            element: <Home />
        },{
            path : "/about",
            element : <About />
        },{
            path : "/departments",
            element : <Departments />
        },{
            path : "/finmaterials",
            element : <FinMaterials />
        },{
            path : "/projects",
            element : <Projects />
        },{
            path :"/contact",
            element : <Contact />
        }]
    }
])
export default router