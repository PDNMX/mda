import React from "react";
import Products from "./Products";
import GettingStarted from "../GettingStarted/GettingStarted";

const WrappedComponent = props => {
    const {option} = props;

    switch (option){
        case 1:
            return <GettingStarted {...props}/>
        case 2: //todos los sistemas
            return <Products {...props}/>;
        case 3: //s1
            return <Products {...props}/>;
        case 4: //s2
            return <Products {...props}/>;
        case 5: //s3
            return <Products {...props}/>;
        case 6: //s6
            return <Products {...props}/>;
        default:
            return <GettingStarted {...props}/>
    }
}

const DrawerContents = props => {
    window.scroll(0,0);
    return <div>
        <WrappedComponent {...props}/>
    </div>
}

export default DrawerContents;