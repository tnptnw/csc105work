import React from 'react'
import { Box ,Grid, Typography } from '@mui/material'
import "../App.css"

export const Filterbar = () => {
  return (
    <div style={{backgroundColor : '#1F2022' , borderRadius : '10px'}}>
    <article class="filter-group">
   
        <div >
            <div class="card-body">
                <form class="pb-3">
                <div class="input-group" >
                  <input type="text" class="form-control" placeholder="Game Search" style={{backgroundColor : '#1F2022'}}/>                  
                  <div class="input-group-append">
                    <button class="btn btn-light" type="button"><i class="fa fa-search" ></i></button>
                  </div>
                </div>
                <br/>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Product Search" style={{backgroundColor : '#1F2022'}} />                  
                  <div class="input-group-append">
                    <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                  </div>
                </div>
                </form>                       
            </div>
             
        </div>
    </article>
    {/* <article class="filter-group">
        <header class="card-header">
            <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                <i class="icon-control fa fa-chevron-down"></i>
                <h6 class="title">Brands </h6>
            </a>
        </header>
        <div class="filter-content collapse show" id="collapse_2">
            <div class="card-body">
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" />
                  <div class="custom-control-label">Mercedes  
                      <b class="badge badge-pill badge-light float-right">120</b>  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" />
                  <div class="custom-control-label">Toyota 
                      <b class="badge badge-pill badge-light float-right">15</b>  </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" />
                  <div class="custom-control-label">Mitsubishi 
                      <b class="badge badge-pill badge-light float-right">35</b> </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" />
                  <div class="custom-control-label">Nissan 
                      <b class="badge badge-pill badge-light float-right">89</b> </div>
                </label>
                <label class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" />
                  <div class="custom-control-label">Honda 
                      <b class="badge badge-pill badge-light float-right">30</b>  </div>
                </label>
    </div> 
        </div>
    </article>  */}
    <article class="filter-group">
        <Box sx={{ padding : '15px'}}>            
                <Typography sx={{color: 'white'}}>Price range </Typography>            
        </Box>
        <div class="filter-content collapse show" id="collapse_3">
            <div class="card-body">                
                <div class="form-row">
                <div class="form-group col-md-6">
                  <label>Min</label>
                  <input class="form-control" placeholder="$0" type="number" />
                </div>
                <div class="form-group text-right col-md-6">
                  <label>Max</label>
                  <input class="form-control" placeholder="$1,0000" type="number" />
                </div>
                </div> 
                <button class="btn btn-block btn-primary">Apply</button>
            </div>
        </div>
    </article> 
    <article class="filter-group">
        <header class="card-header">
            <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                <i class="icon-control fa fa-chevron-down"></i>
                <h6 class="title">Sizes </h6>
            </a>
        </header>
        <div class="filter-content collapse show" id="collapse_4">
            <div class="card-body">
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> XS </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> SM </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> LG </span>
              </label>
              <label class="checkbox-btn">
                <input type="checkbox" />
                <span class="btn btn-light"> XXL </span>
              </label>
        </div>
        </div>
    </article> 
    <article class="filter-group">
        <header class="card-header">
            <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                <i class="icon-control fa fa-chevron-down"></i>
                <h6 class="title">More filter </h6>
            </a>
        </header>
        <div class="filter-content collapse in" id="collapse_5">
            <div class="card-body">
                <label class="custom-control custom-radio">
                  <input type="radio" name="myfilter_radio" checked="" class="custom-control-input" />
                  <div class="custom-control-label">Any condition</div>
                </label>
                <label class="custom-control custom-radio">
                  <input type="radio" name="myfilter_radio" class="custom-control-input" />
                  <div class="custom-control-label">Brand new </div>
                </label>
                <label class="custom-control custom-radio">
                  <input type="radio" name="myfilter_radio" class="custom-control-input" />
                  <div class="custom-control-label">Used items</div>
                </label>
                <label class="custom-control custom-radio">
                  <input type="radio" name="myfilter_radio" class="custom-control-input" />
                  <div class="custom-control-label">Very old</div>
                </label>
            </div>
        </div>
    </article> 
</div>
  )
}
