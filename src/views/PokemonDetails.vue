<template>
    <div class="pokemon-details">
        <PokemonStats />
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import PokemonStats from '@/components/PokemonStats.vue';

@Component({ 
    name: 'PokemonDetails',
    components: {
        PokemonStats
    }
})
class PokemonDetails extends Vue {

}

export default PokemonDetails;
</script>

<style scopped>
    .pokemon-details{
        display: flex;
        justify-content: center;
    }
</style>