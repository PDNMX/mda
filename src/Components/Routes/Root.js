import React from 'react';
import ResponsiveDrawer from "./ResposiveDrawerV2";
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Landing from "../Landing/Landing";
import P404 from "../P404";
import FAQ from "../FAQ/FAQ";
import GettingStarted from "../GettingStarted/GettingStarted";
import Terms from "../Terms/Terms";
import Products from "./Products";
import {ProductDetails} from "../ProductDetails/ProductDetails";
//import MiniDrawer from "./MiniDrawer";


const router = createBrowserRouter([



    {
        path: "/",
        element: < Landing/>,
        errorElement: < P404 />,
        children : [
            {
                path: "/bienvenida",
                element: < Landing />
            },
            {
                path: "/inicio",
                element: < GettingStarted />
            },
            {
                path: "/FAQ",
                element: < FAQ />
            },

            {
                path: "/terminos",
                element: < Terms />
            },
            {
                path: "/all/",
                element: <Products props={{option:0,}} filters={{system:0, resourceType:'all'}}/>,
                errorElement: < P404 />,
                children:[
                    {
                        path:"/all/filter/all",
                        element: < Products props={{option:0,}} filters={{system:0, resourceType:'all'}} />,
                    },
                    {
                        path:"/all/filter/api",
                        element: < Products props={{option:0,}} filters={{system:0, resourceType:'api'}}/>,
                    },
                    {
                        path:"/all/filter/sys",
                        element: < Products props={{option:0,}} filters={{system:0, resourceType:'sys'}}/>,
                    },
                    {
                        path:"/all/filter/doc",
                        element: < Products props={{option:0,}} filters={{system:0, resourceType:'doc'}}/>,
                    },

                ]
            },
            {
                path:"S1",
                element:  <Products props={{option:0,}} filters={{system:1, resourceType:'all'}}/>,
            },
            {
                path:"S1",
                element:  <Products props={{option:0,}} filters={{system:1, resourceType:'all'}}/>,
            },
            {  path:"S1",
                element:  <Products props={{option:0,}} filters={{system:1, resourceType:'all'}}/>,
            },

            {
                path: "/producto/1",
                element: <Products props={{option:0,selected:1}} filters={{system:0, resourceType:'all'}}/>,
                errorElement: < P404 />,
            },

        ]},




]);


const Home = () => {
    return <div>
        <RouterProvider router={router} />
        {/*<MiniDrawer/>*/}
    </div>;
}

export default Home;