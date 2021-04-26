
export default function Card({product}) {
  
        return (
            <div class="Card col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                    <a href="#"><img class="card-img-top" src={product.imageAddress} alt=""></img></a>
                    <div class="card-body">
                        <h4 class="card-title">
                            <a href="#">{product.productName}</a>
                        </h4>
                        <h5>{product.price} VND</h5>
                        <p class="card-text">{product.description}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    </div>
                </div>
            </div>
        )
  
}
