import axios from 'axios'
import menu from '~/api/menu.json'
import slider from '~/api/slider.json'
import miniSlider from '~/api/miniSlider.json'
export const state = () => ({
  listMenu:[],
  listSlider:[],
  listMiniSlider:[],

})

export const mutations = {
  setMenu(state,data){
    state.listMenu=data
  },
  setSlider(state,data){
    state.listSlider=data
  },
  setMiniSlider(state,data){
    state.listMiniSlider=data
  }
}

export const actions = {
  getMenu({commit}){
    // axios.get('/api/menu.json')
    // .then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })
    commit('setMenu',menu)

  },
  getSlider({commit}){
    // axios.get('/api/slider.json')
    // .then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })
    commit('setSlider',slider)
  },
  getMiniSlider({commit}){
    // axios.get('/api/miniSlider.json')
    // .then(function (response) {
    //     // handle success
    //     console.log(response);
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log(error);
    // })
    commit('setMiniSlider',miniSlider)
  },
}