<template>
    <div>
        <div id="mini" class="carousel slide p-5 " data-ride="carousel">
            <!-- The slideshow -->
            <div class="carousel-inner">
                <div v-for="(item,index) in slide" :key="'slide'+index" :class="index==0?'carousel-item active':'carousel-item'">
                    <div class="container">
                        <div class="row w100" >
                          <div class="col-2 m-3" v-for="(itemSlider,i) in item" :key="'item'+i">
                            <img :src="require(`~/assets/image/${itemSlider.img}`)"  class="w100">
                          </div>
                         
                        </div>
                    </div>
                </div>
            </div>
          
          </div> 
    </div>
</template>
<script>
  import Vue from 'vue';
  export default Vue.extend({
    name:'Slider',
    data() {
      return {
        slide: [],
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
    async created(){
      await this.$store.dispatch('getMiniSlider')
      let slider=await this.$store.state.listMiniSlider
      console.log(slider)
      let arr=[]
      slider.mini_slider.map((val,i)=>{
              if(i%5==0){
                  let n=arr.length!=undefined?0:arr.length
                  arr.push([slider.mini_slider[n],slider.mini_slider[n+1],slider.mini_slider[n+2],
                  slider.mini_slider[n+3],slider.mini_slider[n+4]])
              }
      })
      this.slide=arr
    }
  })
</script>