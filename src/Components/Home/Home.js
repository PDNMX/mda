import React from 'react';
import ResponsiveDrawer from "./ResposiveDrawerV2";
import {BrowserRouter, createBrowserRouter, Navigate, NavLink, Route, RouterProvider, Routes} from "react-router-dom";
import Landing from "../Landing/Landing";
import P404 from "../P404";
import FAQ from "../FAQ/FAQ";
import GettingStarted from "../GettingStarted/GettingStarted";
import Terms from "../Terms/Terms";
import Products from "./Products";
import {ProductDetails} from "../ProductDetails/ProductDetails";
import DrawerContents from "./DrawerContents";
//import MiniDrawer from "./MiniDrawer";
const  funcionTest = x =>{
    return x===0
}


const router = createBrowserRouter([


    {
        path: "/",
        element: < ResponsiveDrawer/>,
        errorElement: < P404/>,
        children: [
            {

                path: "/bienvenida",
                element: < Landing/>
            },
            {
                path: "/inicio",
                element: < GettingStarted/>
            },
            {
                path: "/FAQ",
                element: < FAQ/>
            },

            {
                path: "/terminos",
                element: < Terms/>
            },
            {
                path: "/all/*",
                element: <Products props={{option: 0,}} filters={{system: 0, resourceType: 'all'}}/>,
                errorElement: < P404/>,
                children: [{
                    path: "api",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 0, resourceType: 'api'}}/>
                }, {
                    path: "sys",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 0, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 0, resourceType: 'doc'}}/>
                },

                ]

            },
            {
                path: "S1/*",
                element: <Products props={{option: 0,}} filters={{system: 1, resourceType: 'all'}}/>,
                children: [{
                    path: "api",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 1, resourceType: 'api'}} setSelected ={funcionTest()}/>
                }, {
                    path: "sys",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 1, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 1, resourceType: 'doc'}}/>
                },

                ]
            },
            {
                path: "S2/*",
                element: <Products props={{option: 0,}} filters={{system: 2, resourceType: 'all'}}/>,
                children: [{
                    path: "api",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 2, resourceType: 'api'}}/>
                }, {
                    path: "sys",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 2, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <DrawerContents props={{option: 0,}} filters={{system: 2, resourceType: 'doc'}}/>
                },

                ]
            },
            {
                path: "S3/*",
                element: <Products props={{option: 7,}} filters={{system: 3, resourceType: 'all'}}/>,
                children: [{
                    path: "api",
                    element: <DrawerContents props={{option: 7,}} filters={{system: 3, resourceType: 'api'}}/>
                }, {
                    path: "sys",
                    element: <DrawerContents props={{option: 7,}} filters={{system: 3, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <DrawerContents props={{option: 7,}} filters={{system: 3, resourceType: 'doc'}}/>
                },

                ]
            },
            {
                path: "S6/*",
                element: <Products props={{option: 8,}} filters={{system: 6, resourceType: 'all'}}/>,
                children: [{
                    path: "api",
                    element: <DrawerContents props={{option: 8,}} filters={{system: 6, resourceType: 'api'}}/>
                }, {
                    path: "sys",
                    element: <DrawerContents props={{option: 8,}} filters={{system: 6, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <DrawerContents props={{option: 8,}} filters={{system: 6, resourceType: 'doc'}}/>
                },

                ]
            },
            {
                path: "/producto/:id",
                element: <ProductDetails props={{option: 0, selected: 1}} filters={{system: 0, resourceType: 'all'}}/>,
                errorElement: < P404/>,
            },

        ]
    },


]);


const Home = () => {
    return <div>
        <RouterProvider router={router}/>
        {/*<MiniDrawer/>*/}
    </div>;
}

export default Home;