import React from 'react';
import ResponsiveDrawer from "./ResposiveDrawerV2";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Landing from "../Landing/Landing";
import P404 from "../P404";
import FAQ from "../FAQ/FAQ";
import GettingStarted from "../GettingStarted/GettingStarted";
import Terms from "../Terms/Terms";
import Products from "./Products";
import {FilterPage} from "./FilterPage";
import ProductsWrapper from "./ProductsWrapper";


const router = createBrowserRouter([


    {
        path: "/",
        element:< ResponsiveDrawer />,
        errorElement: < P404/>,
        children: [
            {
                exact: true,
                path: "/",
                element: < Landing/>
            },
            {
                exact: true,
                path: "/bienvenida",
                element: < Landing/>,
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
                path: "all/",
                element: <FilterPage/>,
                errorElement: < P404 />,
                children: [{
                    path: "*",
                    element: < P404 />,
                },{
                    path: "",
                    element: <Products props={{option: 0,}} filters={{system: 0, resourceType: 'all'}}/>,
                    errorElement: < P404 />,
                },{
                    path: "all",
                    element: <Products props={{option: 0,}} filters={{system: 0, resourceType: 'all'}}/>,
                    errorElement: < P404 />,
                },{
                    path: "api",
                    element: <Products props={{option: 0,}} filters={{system: 0, resourceType: 'api'}}/>,
                    errorElement: < P404 />,
                },{
                    path: "sys",
                    element: <Products props={{option: 0,}} filters={{system: 0, resourceType: 'sys'}}/>,
                    errorElement: < P404 />,
                },{
                    path: "doc",
                    element: <Products props={{option: 0,}} filters={{system: 0, resourceType: 'doc'}}/>,
                    errorElement: < P404 />,

                },

                ]

            },
            {
                path: "S1/*",
                element: <FilterPage/>,
                children: [{
                    path: "",
                    element: <Products props={{option: 0,}} filters={{system: 1, resourceType: 'all'}}/>
                },{
                    path: "all",
                    element: <Products props={{option: 0,}} filters={{system: 1, resourceType: 'all'}}/>
                },{
                    path: "api",
                    element: <Products props={{option: 0,}} filters={{system: 1, resourceType: 'api'}}/>
                }, {
                    path: "sys",
                    element: <Products props={{option: 0,}} filters={{system: 1, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <Products props={{option: 0,}} filters={{system: 1, resourceType: 'doc'}}/>
                },

                ]
            },
            {
                path: "S2/*",
                element: <FilterPage/>,
                children: [{
                    path: "",
                    element: <Products props={{option: 0,}} filters={{system: 2, resourceType: 'all'}}/>
                },{
                    path: "all",
                    element: <Products props={{option: 0,}} filters={{system: 2, resourceType: 'all'}}/>
                },{
                    path: "api",
                    element: <Products props={{option: 0,}} filters={{system: 2, resourceType: 'api'}}/>
                }, {
                    path: "sys",
                    element: <Products props={{option: 0,}} filters={{system: 2, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <Products props={{option: 0,}} filters={{system: 2, resourceType: 'doc'}}/>
                },

                ]
            },
            {
                path: "S3/*",
                element: <FilterPage/>,
                children: [{
                    path: "",
                    element: <Products props={{option: 7,}} filters={{system: 3, resourceType: 'all'}}/>
                },{
                    path: "all",
                    element: <Products props={{option: 7,}} filters={{system: 3, resourceType: 'all'}}/>
                },{
                    path: "api",
                    element: <Products props={{option: 7,}} filters={{system: 3, resourceType: 'api'}}/>
                }, {
                    path: "sys",
                    element: <Products props={{option: 7,}} filters={{system: 3, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <Products props={{option: 7,}} filters={{system: 3, resourceType: 'doc'}}/>
                },

                ]
            },
            {
                path: "S6/*",
                element: <FilterPage />,
                children: [{
                    path: "",
                    element: <Products props={{option: 8,}} filters={{system: 6, resourceType: 'all'}}/>
                },{
                    path: "all",
                    element: <Products props={{option: 8,}} filters={{system: 6, resourceType: 'all'}}/>
                },{
                    path: "api",
                    element: <Products props={{option: 8,}} filters={{system: 6, resourceType: 'api'}}/>
                }, {
                    path: "sys",
                    element: <Products props={{option: 8,}} filters={{system: 6, resourceType: 'sys'}}/>
                }, {
                    path: "doc",
                    element: <Products props={{option: 8,}} filters={{system: 6, resourceType: 'doc'}}/>
                },

                ]
            },
            {
                path: "/producto/:id",
                element: <ProductsWrapper />,
                errorElement: < P404/>,
            },

        ]
    },


]);


const Home = () => {
    return <div>
        <RouterProvider router={router} use/>
    </div>;
}

export default Home;
