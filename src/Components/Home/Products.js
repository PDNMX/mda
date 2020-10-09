import React from "react";
import {withStyles, Box} from "@material-ui/core";
import NavigationButtons from "./NavigationButtons";
import ProductCard from "./ProductCard";
import products from "./../../products.json";
import ProductDetails from "../ProductDetails/ProductDetails";

const styles = theme => ({
    root: {
        minHeight: 700
    },
    box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
});

const Products = props => {
    const {classes, filters, setFilters} = props;

    let prods = products.filter(p => {
        if (filters.system === 0){
            return true;
        }
        return p.systems.includes(filters.system);
    });

    prods = prods.filter(p => {
        if (filters.resourceType === "all"){
            return true;
        }
        return p.resourceType === filters.resourceType
    });

    const [selected, setSelected] = React.useState(null);

    if (selected){
        return <ProductDetails product={selected} setSelected={setSelected}/>
    }

    return <div className={classes.root}>
        <NavigationButtons filters={filters} setFilters={setFilters}/>
        <Box className={classes.box}>
            {
                prods.map((p, i) => {
                    return <Box key={i} m={2}>
                        <ProductCard product={p} key={i} setSelected={setSelected}/>
                    </Box>
                })
            }

        </Box>
    </div>
}

export default withStyles(styles)(Products);