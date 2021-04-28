import "../../../sass/Card.scss";
export default function Card({ product }) {
    return (
        <div class="Container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="product-grid4">
                        <div class="product-image4">
                            <a href="#">
                                <img
                                    class="pic-1"
                                    src={product.imageAddress}
                                ></img>
                            </a>
                            <ul class="social">
                                <li>
                                    <a href="#" data-tip="Add to Wishlist">
                                        <i class="fa fa-shopping-bag"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-tip="Add to Cart">
                                        <i class="fa fa-shopping-cart"></i>
                                    </a>
                                </li>
                            </ul>
                            <span class="product-new-label">New</span>
                            <span class="product-discount-label">-10%</span>
                        </div>
                        <div class="product-content">
                            <h3 class="title">
                                <a href="#">{product.productName}</a>
                            </h3>
                            <div class="price">{product.price} VND</div>
                            <a class="add-to-cart" href="">
                                ADD TO CART
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
