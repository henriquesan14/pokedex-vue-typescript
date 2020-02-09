import Vue from 'vue'
import Vuex from 'vuex'
import pokemon from './modules/pokemon';
import storage from "vuejs-storage";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pokemon
  },
  plugins: [
    storage({
      namespace: "pokemonSelecionado",
      storage: window.localStorage,
      keys: [
        "pokemon.pokemonSelecionado",
      ]
    }),
    storage({
      namespace: "favorites",
      storage: window.localStorage,
      keys: [
        "pokemon.favorites",
      ]
    })
  ]
})
