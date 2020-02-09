import { Module } from "vuex";

const pokemonModule: Module<any, any> = {
    state: {
        pokemonSelecionado: {type: []}
    },
    
    mutations: {
        RECEIVE_POKEMON(state, payload){
            state.pokemonSelecionado = payload.pokemon;
            console.log(state.pokemonSelecionado)
        }
    },
    
    actions: {
        SET_POKEMON({commit}, payload){
            commit('RECEIVE_POKEMON', payload);
        }
    },
    
    getters: {
        pokemonSelecionado(state: any) {
            return state.pokemonSelecionado;
        }
    }
}




export default pokemonModule;