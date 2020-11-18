<template>
  <div v-loading="loading">
    <el-row type="flex" class="search-row" justify="center">
      <el-col :span="6" justify="center">
        <el-input placeholder="Search by name" v-model="input"></el-input>
      </el-col>
      <el-button
        icon="el-icon-search"
        circle
        style="margin-left:10px;"
        @click="searchCharacterByName()"
      ></el-button>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(character, index) in characters" :key="index">
        <el-card>
          <div class="character-card" @click="goToCharacterDetail(index)">
            <div><img :src="character.image" /></div>
            <div class="character-name">
              {{ character.name }}
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharactersDataService from "../services/CharactersDataService";

@Component
export default class CharactersList extends Vue {
  private characters: any[] = [];
  private currentCharacter: any = null;
  private currentIndex = -1;
  private character_name = "";
  private input = "";
  private loading = false;

  retrieveCharacters() {
    this.loading = true;
    CharactersDataService.getAll()
      .then((response) => {
        this.characters = response.data.results;
        this.loading = false;
      })
      .catch((e) => {
        console.log(e);
        this.loading = false;
      });
  }

  refreshList() {
    this.retrieveCharacters();
    this.currentCharacter = null;
    this.currentIndex = -1;
  }

  searchCharacterByName() {
    this.loading = true;
    CharactersDataService.getCharactersByName(this.input)
      .then((response) => {
        this.characters = response.data.results;
        this.loading = false;
      })
      .catch((e) => {
        console.log(e);
        this.loading = false;
      });
  }

  goToCharacterDetail(index: number) {
    const character = this.characters[index];
    const characterId = character.id;

    this.$store.commit("setCharacter", {
      character: character,
    });
    this.$router.push(`/characters/${characterId}`);
  }

  mounted() {
    this.retrieveCharacters();
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

img {
  max-width: 100%;
}

.character-card {
  cursor: pointer;
}

.search-row {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
