import React, { FC } from "react";
import { Drawer } from "@material-ui/core";
import useAddProductStyles from "./AddProductPageStyles";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import ProductForm from "../../components/ProductForm/ProductForm";
import { addProductAction } from "../../store/actions/product/product.actions";
import { v4 as uuidv4 } from 'uuid';

type Props =
    & {};

const AddProductPage: FC<Props> = () => {
    const dispath = useDispatch();
    const classes = useAddProductStyles();

    function closeDrawer() {
        dispath(push("/"));
    }

    function handleSumbit(product: any) {
        product.id = uuidv4();

        dispath(addProductAction.request(product));
        closeDrawer();
    }

    return (
        <Drawer
            className={classes.root}
            classes={{ paper: classes.drawerPaper }}
            anchor="right"
            onClose={() => closeDrawer()}
            open={true}
        >
            <ProductForm
                onSubmit={handleSumbit}
                formTitle="Add Product"
                title=""
                description=""
                price={""}
                discount={""}
                discountEndDate={new Date(Date.now())}
                image="" />
        </Drawer>

    )
}

export default AddProductPage;