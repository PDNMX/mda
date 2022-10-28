import React from "react";
import Products from "./Products";
import GettingStarted from "../GettingStarted/GettingStarted";
import Landing from "../Landing/Landing";
import FAQ from "../FAQ/FAQ";
import Terms from "../Terms/Terms";

const WrappedComponent = props => {
    const {option} = props;

    console.log("pasa por el Wrapped ")

    switch (option){
        case 0:
            return <Landing {...props}/>;
        case 1:
            return <GettingStarted {...props}/>
        case 2:
            return <FAQ {...props}/>
        case 3:
            return <Terms/>
        case 4: //todos los sistemas
            return <Products {...props}/>;
        case 5: //s1
            return <Products {...props}/>;
        case 6: //s2
            return <Products {...props}/>;
        case 7: //s3
            return <Products {...props}/>;
        case 8: //s6
            return <Products {...props}/>;
        default:
            return <Landing {...props}/>
    }
}

const DrawerContents = props => {
    window.scroll(0,0);
    return <div>
        <WrappedComponent {...props}/>
    </div>
}

export default DrawerContents;