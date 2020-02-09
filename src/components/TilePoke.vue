<template>
    <div id="poketile" :style="{'background-color': 'red'}" >
          <img :src="pokemon.img">
          <h5>{{pokemon.name}}</h5>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Pokemon } from '../interfaces/response-api';

@Component
export default class TilePoke extends Vue {
    @Prop() private readonly pokemon!: Pokemon;

}

</script>

<style scopped>
    #poketile{
        width: 150px;
        padding: 10px;
        margin: 5px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 2px 2px #c2c2c2;
    }

    #pokeball{
        overflow:hidden;
        opacity: 0.5;
        width: 200px;
    }
</style>