<template>
    <div class="pokemon-stats">
        <div class="header" :style="{'background-color': colorPokemon(pokemonSelecionado.type[0])}">
            {{pokemonSelecionado.name}}
        </div>
        <div class="stats">
            
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
    @Prop() private pokemon!: Pokemon;
    @Getter('pokemonSelecionado') pokemonSelecionado: Pokemon;

    colorPokemon(type: string): string{
        return getColor(type);
    }
}

export default PokemonStats;
</script>

<style scopped>
    .pokemon-stats{
        margin-top: 20px;
        border-radius: 20px;
        border:1px solid red;
        width: 600px;
        height: 600px;
    }
</style>