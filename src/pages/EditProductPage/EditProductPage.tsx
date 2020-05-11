import React, { FC, useEffect } from "react";
import { Drawer } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import ProductForm from "../../components/ProductForm/ProductForm";
import { getProductAction, updateProductAction } from "../../store/actions/product/product.actions";
import useEditProductStyles from "./EditProductPageStyles";
import { useParams } from "react-router";
import { RootState } from "../../store/reducers";

type Props =
    & {};

const EditProductPage: FC<Props> = () => {
    let { productId } = useParams();
    const dispath = useDispatch();
    const classes = useEditProductStyles();
    const product = useSelector((state: RootState) => state.catalog.products?.find(product => product.id === productId))

    useEffect(() => {
        if (!product) {
            dispath(getProductAction.request());
        }
    }, [])

    function closeDrawer() {
        dispath(push("/"));
    }

    function handleSumbit(formData: any) {
        formData.id = product?.id;
        
        dispath(updateProductAction.request(formData));
        closeDrawer();
    }

    if (!product) {
        return <></>
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
                formTitle="Edit Product"
                title={product!.title}
                description={product!.description}
                price={product!.price}
                discount={product!.discount}
                discountEndDate={product!.discountEndDate}
                image={product!.image} />
        </Drawer>

    )
}

export default EditProductPage;