import React from "react";
import {Box} from "@mui/material";
import {withStyles} from "@mui/styles"
import ProductCard from "./ProductCard";
import DisabledCard from "./DisabledCard";
import products from "../../products.json";
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

export const Products = props => {
    const {classes, filters, setFilters, selected, setSelected} = props;

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

    if (selected){
        return <ProductDetails product={selected} setSelected={setSelected}/>
    }

    return <div className={classes.root}>
       {/* <NavigationButtons filters={filters} setFilters={setFilters}/>*/}
        <Box className={classes.box}>
            {
                prods.map((p, i) => {
                    return <Box key={i} m={2}>
                        {
                            p.disabled ?
                            <DisabledCard product={p} key={i}/>:
                            <ProductCard product={p} key={i} setSelected={setSelected}/>
                        }
                    </Box>
                })
            }

        </Box>
    </div>
}

export default withStyles(styles)(Products);