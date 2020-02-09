import { Module } from "vuex";

const pokemonModule: Module<any, any> = {
    state: {
        pokemonSelecionado: {type: []},
        favorites: []
    },
    
    mutations: {
        RECEIVE_POKEMON(state, payload){
            state.pokemonSelecionado = payload.pokemon;
        },
        RECEIVE_FAVORITES(state, payload){
            state.favorites = [...state.favorites, payload.pokemon];
        }
    },
    
    actions: {
        SET_POKEMON({commit}, payload){
            commit('RECEIVE_POKEMON', payload);
        },
        ADD_FAVORITE({commit}, payload){
            commit('RECEIVE_FAVORITES', payload);
        }
    },
    
    getters: {
        pokemonSelecionado(state: any) {
            return state.pokemonSelecionado;
        },
        favorites(state: any){
            return state.favorites;
        }
    }
}




export default pokemonModule;