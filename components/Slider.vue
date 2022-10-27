<template>
    <div>
        <div id="demo" class="carousel slide p-5 img-blank" data-ride="carousel">

            <!-- Indicators -->
            <ul class="carousel-indicators">
              <button type="button" v-for="(item,index) in data" :key="'dot'+index" data-target="#demo" :data-slide-to="index" :class="index==0?'active':''"></button>
            </ul>
          
            <!-- The slideshow -->
            <div class="carousel-inner">
                <div v-for="(item,index) in data" :key="'slide'+index" :class="index==0?'carousel-item active':'carousel-item'">
                    <div class="container">
                        <div class="row">
                          <div class="col-md-6 p-5">
                            <img :src="require(`~/assets/image/${item.img}`)"  class="w100">
                          </div>
                          <div class="col-md-6">
                            <div class="w100 mt-5 pt-5 px-3">
                              <b-button pill  variant="warning" class="orange" disabled>{{'#'+index+' '+item.tag}}</b-button>
                              <h2 class="pt-3"><b>{{item.title}}</b></h2>
                              <p class="fs-5">{{item.content}}</p>
                              <b-button pill size="lg" variant="purple" >More</b-button>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          
          </div> 
    </div>
</template>
<script>
  import Vue from 'vue';
  export default Vue.extend({
    props:['data'],
    name:'Slider',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    },
    // created(){
    //     console.log(this.data)
    // }
  })
</script>