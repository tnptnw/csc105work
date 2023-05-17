import React from 'react'
import '../App.css'
import Appbar from '../component/Appbar'
import { Filterbar } from '../component/Filterbar'

export const Itemlisting = () => {
  return (
    <div className="App">
        <Appbar></Appbar>      
        <section class="section-content padding-y">
        <div class="container">
        <div class="row">
            <aside class="col-md-3">
                <Filterbar></Filterbar>
            </aside> 
            <main class="col-md-9">
        <header class="border-bottom mb-4 pb-3">
                <div class="form-inline">
                    <span class="mr-md-auto">32 Items found </span>
                    <select class="mr-2 form-control">
                        <option>Latest items</option>
                        <option>Trending</option>
                        <option>Most Popular</option>
                        <option>Cheapest</option>
                    </select>
                    <div class="btn-group">
                        <a href="#" class="btn btn-outline-secondary active" data-toggle="tooltip" title="List view"> 
                            <i class="fa fa-bars"></i></a>
                        <a href="#" class="btn  btn-outline-secondary" data-toggle="tooltip" title="Grid view"> 
                            <i class="fa fa-th"></i></a>
                    </div>
                </div>
        </header>
        <article class="card card-product-list">
            <div class="row no-gutters">
                <aside class="col-md-3">
                    <a href="#" class="img-wrap">
                        <span class="badge badge-danger"> NEW </span>
                        <img src="assets/images/items/3.jpg" />
                    </a>
                </aside> 
                <div class="col-md-6">
                    <div class="info-main">
                        <a href="#" class="h5 title"> Great product name goes here  </a>
                        <div class="rating-wrap mb-3">
                            <ul class="rating-stars">
                                <li  class="stars-active w-80"> 
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                    <i class="fa fa-star"></i> 
                                </li>
                                <li>
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                    <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                    <i class="fa fa-star"></i> 
                                </li>
                            </ul>
                            <div class="label-rating">7/10</div>
                        </div> 
                        
                        <p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                    </div>
                </div> 
                <aside class="col-sm-3">
                    <div class="info-aside">
                        <div class="price-wrap">
                            <span class="price h5"> $140 </span>  
                            <del class="price-old"> $198</del>
                        </div>
                        <p class="text-success">Free shipping</p>
                        <br />
                        <p>
                            <a href="#" class="btn btn-primary btn-block"> Details </a>
                            <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                                <span class="text">Add to wishlist</span>
                            </a>
                        </p>
                    </div> 
                </aside> 
            </div> 
        </article> 
        <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="assets/images/items/4.jpg" /></a>
            </aside> 
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Great product name goes here  </a>
                    <div class="rating-wrap mb-3">
                        <ul class="rating-stars">
                            <li class="stars-active w-80"> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                            <li>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                        </ul>
                        <div class="label-rating">7/10</div>
                    </div> 
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div> 
            </div> 
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $56 </span>  
                        <del class="price-old"> $85</del>
                    </div> 
                    <p class="text-success">Free shipping</p>
                    <br />
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span></a>
                    </p>
                </div> 
            </aside> 
        </div> 
    </article> 
    
    <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="assets/images/items/5.jpg" /></a>
            </aside> 
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Great product name goes here  </a>
                    <div class="rating-wrap mb-3">
                        <ul class="rating-stars">
                            <li  class="stars-active w-80"> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                            <li>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                        </ul>
                        <div class="label-rating">7/10</div>
                    </div>
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div>
            </div> 
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $56.00 </span>  
                    </div>
                    <p class="text-success">Free shipping</p>
                    <br />
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span>
                        </a>
                    </p>
                </div> 
            </aside>
        </div>
    </article> 
    
    <article class="card card-product-list">
        <div class="row no-gutters">
            <aside class="col-md-3">
                <a href="#" class="img-wrap"><img src="assets/images/items/6.jpg" /></a>
            </aside> 
            <div class="col-md-6">
                <div class="info-main">
                    <a href="#" class="h5 title"> Product name can be here  </a>
                    <div class="rating-wrap mb-3">
                        <ul class="rating-stars">
                            <li  class="stars-active w-80"> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                            <li>
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i> 
                            </li>
                        </ul>
                        <div class="label-rating">7/10</div>
                    </div>
                    
                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim veniam </p>
                </div> 
            </div> 
            <aside class="col-sm-3">
                <div class="info-aside">
                    <div class="price-wrap">
                        <span class="price h5"> $62 </span>  
                    </div> 
                    <p class="text-success">Free shipping</p>
                    <br />
                    <p>
                        <a href="#" class="btn btn-primary btn-block"> Details </a>
                        <a href="#" class="btn btn-light btn-block"><i class="fa fa-heart"></i> 
                            <span class="text">Add to wishlist</span> 
                        </a>
                    </p>
                </div> 
            </aside> 
        </div> 
    </article> 
        <nav class="mt-4" aria-label="Page navigation sample">
          <ul class="pagination">
            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
            </main>
        </div>
        </div> 
        </section>
        
        <footer class="section-footer border-top padding-y">
            <div class="container">
                <p class="float-md-right"> 
                    &copy; Copyright 2021 All rights reserved
                </p>
                <p>
                    <a href="#">Terms and conditions</a>
                </p>
            </div>
        </footer>
       
     
    </div>
  )
}
