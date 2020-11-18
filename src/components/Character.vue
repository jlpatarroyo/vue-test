<template>
  <el-row class="character-row" type="flex" justify="center">
    <el-col :span="8">
      <el-card>
        <img :src="character.image" class="image" />
        <div style="padding: 14px;">
          <div><strong>Name: </strong>{{character.name}}</div>
          <strong>Created: </strong><time class="time">{{character.created}}</time>
          <div><strong>Status:  </strong>{{character.status}}</div>
          <div><strong>Gender: </strong>{{character.gender}}</div>
          <div><strong>Origin: </strong>{{character.origin.name}}</div>
          <div><strong>Location: </strong>{{character.location.name}}</div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterDataService from "../services/CharactersDataService";

@Component
export default class Character extends Vue {
  private character = {};

  retrieveCharacter(): void {
    this.character = this.$store.state.character.character;
    console.log(this.character);
  }

  mounted() {
    this.retrieveCharacter();
  }
}
</script>

<style>
    .character-row{
        margin-top: 20px;
    }
</style>
