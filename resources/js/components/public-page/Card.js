import "../../../sass/Card.scss";
export default function Card({ product }) {
    return (
        <div className="Container">
            <div className="row"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid4">
                        <div className="product-image4">
                            <a href="#">
                                <img
                                    className="pic-1"
                                    src={product.imageAddress}
                                ></img>
                            </a>
                            <ul className="social">
                                <li>
                                    <a href="#" data-tip="Add to Wishlist">
                                        <i className="fa fa-shopping-bag"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-tip="Add to Cart">
                                        <i className="fa fa-shopping-cart"></i>
                                    </a>
                                </li>
                            </ul>
                            <span className="product-new-label">New</span>
                            <span className="product-discount-label">-10%</span>
                        </div>
                        <div className="product-content">
                            <h3 className="title">
                                <a href="#">{product.productName}</a>
                            </h3>
                            <div className="price">{product.price} VND</div>
                            <a className="add-to-cart" href="">
                                ADD TO CART
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
