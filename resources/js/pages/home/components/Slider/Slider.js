import React from "react";

export default function Slider() {
    return (
        <div
            id="carouselExampleIndicators"
            class="Slider carousel slide my-4"
            data-ride="carousel"
        >
            <ol class="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        class="d-block w-100"
                        src="https://ipx.image-gmkt.com/imageproxy/?src=http%3A%2F%2Fvisualkorea0.cafe24.com%2Fshare%2F0609_banner_10_980.jpg&scw=-1&remake=Y"
                        alt="First slide"
                    ></img>
                </div>
                <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="https://martina.com.vn/image/cache/catalog/mau-dam-dong-phuc-cong-so-09-900x350.png"
                        alt="Second slide"
                    ></img>
                </div>
                <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="https://www.danielamiller.com/wp-content/uploads/2012/02/image-1-900x350.png"
                        alt="Third slide"
                    ></img>
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}
