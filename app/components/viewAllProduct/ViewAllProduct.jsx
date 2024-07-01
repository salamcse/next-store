import Image from "next/image"
import ViewAllProductItems from "./ViewAllProductItems"


const ViewAllProduct = ({ viewProductData }) => {
    return (
        <div className="row just-for-random-product view-all-product-area">
            <div className="col-md-12">
                <div className="flash-sale-content-area">
                    {
                        viewProductData?.length ? viewProductData.map((viewProductItem) => (
                            <ViewAllProductItems
                                key={viewProductItem.id}
                                items={viewProductItem}
                            />
                        )) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewAllProduct