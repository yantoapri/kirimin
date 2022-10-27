<template>
  <div>
      <b-navbar fixed="top" toggleable="lg" type="light" :class="scrollPosition>50?'bg-white':'bg-transparant'">
          <div class="container">
            <b-navbar-brand href="#">
              <img src="./../assets/image/svg-logo-primary.svg" class="logo">
            </b-navbar-brand>
      
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                  <div v-for="(menu,i) in listMenu.menu" >
                    <b-nav-item v-if="menu.sub==null" :class="menu.id==9?'bl pl-2':''" :href="menu.url" >{{menu.title}}</b-nav-item>
                    <b-nav-item-dropdown v-if="menu.sub!=null" :text="menu.title"  right>
                      <b-dropdown-item v-for="sub in menu.sub" :href="sub.url">
                        <span class="mx-2 text-purple">
                          <font-awesome-icon :icon="['fas', sub.icon]"  />
                        </span>
                        {{sub.title}}
                      </b-dropdown-item>
                    </b-nav-item-dropdown>
                  </div>
                </b-navbar-nav>
                <b-navbar-nav class="">
                    <b-nav-item href="#" >
                      <b-button pill size="lg" variant="purple">Enter</b-button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
          </div>
        </b-navbar>
  </div>
</template>
<script>
import Vue from 'vue';
export default Vue.extend({
  name: "Navbar",
  data() {
      return {
        listMenu:[],
        scrollPosition: 0
      }
  },
  async created() {
    await this.$store.dispatch('getMenu')
    this.listMenu=this.$store.state.listMenu
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
      updateScroll() {
        this.scrollPosition = window.scrollY
      }
  }
})
</script>