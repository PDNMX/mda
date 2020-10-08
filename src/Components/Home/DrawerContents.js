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
    const {option} = props;
    return <div>
        <WrappedComponent option={option}/>
    </div>
}

export default DrawerContents;