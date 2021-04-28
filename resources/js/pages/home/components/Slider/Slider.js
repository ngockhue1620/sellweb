<<<<<<< HEAD:resources/js/components/public-page/Slider.js
import React, { Component } from "react";

export default class Slider extends Component {
    render() {
        return (
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
            >
=======


import React from 'react'

export default function Slider() {
    return (
        <div id="carouselExampleIndicators" class="Slider carousel slide my-4" data-ride="carousel">
>>>>>>> faa864778fc8f56f38ebb88cd7bac15685a1822d:resources/js/pages/home/components/Slider/Slider.js
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
                            src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/175730374_781907649177721_7950261944294065524_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=4Zixj2Ql62UAX8By_nx&tn=XWTZH-DLU9CnmfrH&_nc_ht=scontent-hkg4-2.xx&oh=8594c2e031e67c8fde54b0866d048510&oe=60A89614"
                            alt="First slide"
                        ></img>
                    </div>
                    <div class="carousel-item">
                        <img
                            class="d-block w-100"
                            src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.15752-9/175966836_145656510838909_6576812888662737737_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=5HLMfeT7lvsAX-43WqY&_nc_ht=scontent.fdad3-2.fna&oh=834ecbecff8d3c86e41ee2058bdaaf3c&oe=60ABE8C6"
                            alt="Second slide"
                        ></img>
                    </div>
                    <div class="carousel-item">
                        <img
                            class="d-block w-100"
                            src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.15752-9/175621423_231040025453312_344613714851686083_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=-iVIAtD1eFgAX8K3f3y&_nc_ht=scontent.fdad3-2.fna&oh=c793c2c82d56c8b94a13f49a40fa6e49&oe=60AEA80A"
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
<<<<<<< HEAD:resources/js/components/public-page/Slider.js
        );
    }
=======
    )
>>>>>>> faa864778fc8f56f38ebb88cd7bac15685a1822d:resources/js/pages/home/components/Slider/Slider.js
}

