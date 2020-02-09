<template>
    <div class="home">
      <input v-model="search" @keyup="onSearch" placeholder="Pesquise um pokemon..."/>
      <div class="list-pokemons">
        <TilePoke :pokemon="pokemon" v-for="(pokemon, index) in pokemonsFiltered" :key="index"></TilePoke>
      </div>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import api from '../services/api';
import { Pokemon } from '../interfaces/response-api';
import TilePoke from '@/components/TilePoke.vue';


@Component({
  name: 'Home',
  components: {
    TilePoke
  }
})
class Home extends Vue {
  private pokemons: Pokemon[] = [];
  private pokemonsFiltered: Pokemon[] =  [];
  private limit = 151;
  private search = "";

  public mounted(){
    this.getPokemons();
  }

  async getPokemons(){
    const res = await api.get('');
    this.pokemons = res.data.pokemon;
    this.pokemonsFiltered = this.pokemons;
  }

  public onSearch(){
    this.pokemonsFiltered = this.pokemons.filter(p => {
      return p.name.toUpperCase().startsWith(this.search.toUpperCase());
    });
  }
}

export default Home;
</script>

<style scopped>
    .home{
      display: flex;
      flex-direction: column;
    }

    .list-pokemons{
      padding: 5px;
      display: flex;
      flex-wrap: wrap;
    }

    input {
      width: auto;
      height: 30px;
      margin: 10px;
      border-radius: 5px;
      padding: 2px;
      font-size: 20px;
    }
</style>