<template>
  <div>
    <Slider :data="slide.slider"/>
    <div class="container mt-3">
      <b-card class="card-shadow">
        <div class="row">
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-4">
                  <label>from <span class="danger">*</span></label>
                  <input type="text" class="form-control" placeholder="Home village">
              </div>
              <div class="col-md-4">
                <label>Destination <span class="danger">*</span></label>
                <input type="text" class="form-control" placeholder="Destination Village">
              </div>
              <div class="col-md-4">
                <label>Weight (Grams)<span class="danger">*</span></label>
                <input type="number" class="form-control" placeholder="1000" value="1000">
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <b-button  size="lg" class="mt-4" variant="purple">
              <font-awesome-icon :icon="['fas', 'magnifying-glass']"  />
            </b-button>
          </div>
        </div>
      </b-card>
      <miniSlider />
      <img src="~/assets/image/pesta-pora-new.png" class="w100 m-3 img-shadow">
      <Section1/>
      <Section2/>
      <SignUpHome/>
      <Chat/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default Vue.extend({
    name: "IndexPage",
    data() {
        return {
            slide:[],
            miniSlide: []
        };
    },
    async mounted() {
      await this.$store.dispatch('getSlider')
      // await this.$store.dispatch('getMiniSlider')
      this.slide=await this.$store.state.listSlider
      // this.miniSlide=await this.$store.state.listMiniSlider
      // let arr=[]
      // this.miniSlide.mini_slider.map((val,i)=>{
      //       if(i%5==0){
      //           let n=arr.length!=undefined?0:arr.length
      //           arr.push([this.miniSlide.mini_slider[n],this.miniSlide.mini_slider[n+1],this.miniSlide.mini_slider[n+2],this.miniSlide.mini_slider[n+3],this.miniSlide.mini_slider[n+4]])
      //       }
      // })
      // this.miniSlide=arr
    },
})
</script>
