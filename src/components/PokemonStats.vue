<template>
    <div class="pokemon-stats" :style="{'background-color': colorPokemon(pokemon.type[0])}">
        <div class="box-favoritar">
            <router-link class="btn-voltar" to="/"> <vue-fontawesome icon="arrow-left" size="2" color="white"></vue-fontawesome> </router-link>
            <a @click.prevent="addFavorite(pokemon)"><vue-fontawesome icon="star" size="2" :color="isFavorite ? 'yellow' : 'white'"></vue-fontawesome></a>
        </div>
        <div class="top" >
            <div class="header">
                <h2>{{pokemon.name}}</h2>
                <h5>{{'#' + pokemon.num}}</h5>
                <div class="box-types">
                    <div class="types" v-for="(type, index) in pokemon.type" :key="index">
                        <span>{{type}}</span>
                    </div>
                </div>
                
                <img class="poke-img" :src="pokemon.img">
            </div>

            
            
        </div>
        <div class="stats">
            <ul>
                <li :class="{'category-selected': index == categorySelected}" @click="onChangeCategorySelected(index)" v-for="(category, index) in categories" :key="index">{{category}}</li>
            </ul>
            <div style="display:flex;" v-if="tab == 'about'">
                <div class="poke-prop">
                    <span>Height</span>
                    <span>Weight</span>
                    <span>Candy</span>
                     <span>Candy Count</span>
                    <span>Egg</span>
                    <span>Spawn Chance</span>
                    <span>Avg Spawn</span>
                     <span>Spawn Time</span>
                </div>
                <div class="poke-value">
                    <span>{{pokemon.height}}</span>
                    <span>{{pokemon.weight}}</span>
                    <span>{{pokemon.candy || 'N/A'}}</span>
                    <span>{{pokemon.candy_count || 'N/A'}}</span>
                    <span>{{pokemon.egg || 'N/A'}}</span>
                    <span>{{pokemon.spawn_chance || 'N/A'}}</span>
                    <span>{{pokemon.avg_spawns || 'N/A'}}</span>
                    <span>{{pokemon.spawn_time || 'N/A'}}</span>
                </div>
            </div>

            <div style="display: flex;flex-direction: column;" v-if="tab == 'evolution'">
                <div v-if="pokemon.next_evolution" class="box-evolution">
                    <h3 class="title-evolution">Next Evolution</h3>
                    <span v-for="evolution in pokemon.next_evolution" :key="evolution.num">
                        {{evolution.name}}
                    </span>
                </div>
                <div v-if="pokemon.prev_evolution" class="box-evolution">
                    <h3 class="title-evolution">Prev Evolution</h3>
                    <span v-for="evolution in pokemon.prev_evolution" :key="evolution.num">
                        {{evolution.name}}
                    </span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Pokemon } from '../interfaces/response-api';
import { getColor } from '../utils/consts_app';
import { Getter } from 'vuex-class';

@Component({ 
    name: 'PokemonStats'
})
class PokemonStats extends Vue {
    @Getter('pokemonSelecionado') pokemon: Pokemon;
    private categorySelected = 0;
    private tab = 'about';
    private isFavorite = false;

    colorPokemon(type: string): string{
        return getColor(type);
    }

    private categories: string[] = ['About', 'Evolution'];

    onChangeCategorySelected(e){
        this.categorySelected = e;
        e == 0 ? this.tab = 'about' : this.tab = 'evolution';
    }

    addFavorite(pokemon: Pokemon){
        this.$store.dispatch('ADD_FAVORITE', {pokemon});
        this.isFavorite = !this.isFavorite;
    }

    created(){
        this.verifyFavorite(this.pokemon.id);
    }

    verifyFavorite(id: number){
        const arrayString = JSON.parse(localStorage.getItem('favorites') as string);
        const favorite = arrayString.pokemon.favorites.find(f => f.id ==id);
        this.isFavorite = !!favorite;
    }
}

export default PokemonStats;
</script>

<style scopped>
    .pokemon-stats{
        color: #fff;
        margin: 20px 0;
        border-radius: 20px;
        width: 600px;
        padding-top: 10px;
        height: 600px;
    }

    .top{
        padding: 10px;
    }

    .poke-img{
        width: 220px;
        justify-self: flex-end;
    }

    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header h2 {
        align-self: flex-start;
    }

    .header h5{
        align-self: flex-end;
        font-size: 18px;
    }

    .box-types{
        align-self: flex-start;
        display: flex;
    }

    .header div.types{
        padding: 5px;
        margin: 5px 5px;
        border-radius: 15px;
        background-color:rgba(255,255,255, 0.3);
        text-align: center;
    }

    .header div.types span{
        margin: 10px;
        font-weight: bold;
    }


    .stats{
        color: #000;
        font-weight: bold;
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
        border: 1px solid #c2c2c2;
        height: 230px;
    }

    .stats ul {
        list-style: none;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .stats li {
        font-weight: bold;
        padding: 10px;
        color: #000;
        cursor: pointer;
    }
    
    .btn-voltar{
        margin-left: 10px;
        text-decoration: none;
        color: #fff;
        font-weight: bold;
    }

    .category-selected{
        border-bottom: 3px solid green;
    }

    .poke-prop{
        display:flex;
        flex-direction: column;
        margin-right: 200px;
    }

    .poke-prop span{
        color: #c2c2c2;
    }

    .poke-value{
        display:flex; 
        flex-direction: column;
    }    

    .box-evolution{
        margin-bottom: 20px;
    }

    .title-evolution{
        margin-bottom: 5px;;
    }
    .box-favoritar{
        display: flex; justify-content: space-between
    }

    .box-favoritar i{
        cursor: pointer;
        margin-right: 10px;
    }
    
</style>