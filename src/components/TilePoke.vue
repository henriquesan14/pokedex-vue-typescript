<template>
    <div @click="navigate(pokemon)" id="poketile" :style="{'background-color': colorPokemon(pokemon.type[0])}" >
          <div class="poke-desc">
              <h5>{{pokemon.name}}</h5>
              <div id="types" v-for="(type, index)  in pokemon.type" :key="index">
                  <span>{{type}}</span>
              </div>
          </div>
          <div class="poke-avatar">
              <img id="avatar" :src="pokemon.img">
          </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from '../interfaces/response-api';
import { getColor }  from '../utils/consts_app';

@Component
export default class TilePoke extends Vue {
    @Prop() private readonly pokemon!: Pokemon;

    colorPokemon(type: string){
        return getColor(type);
    }

    navigate(pokemon: Pokemon){
        this.$store.dispatch("SET_POKEMON", {pokemon: pokemon});
        this.$router.push({path: `/pokemon/${pokemon.id}`});
    }

    
}

</script>

<style scopped>
    #poketile{
        border-radius: 5px;
        width: 160px;
        padding: 20px;
        margin: 5px;
        display: flex;
        cursor: pointer;
    }

    .poke-avatar img{
        width: 100px;
        height: 100px;
    }

    #poketile h5{
        margin-right: 5px;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
    }

    #types{
        padding: 5px;
        margin: 5px 2px;
        opacity: 0.7;
        border-radius: 15px;
        background-color:rgba(255,255,255, 0.3);
        text-align: center;
    }

    #types span{
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
</style>