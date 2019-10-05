<template>
  <div>

    <div class="selection-mode">
      <div class="input-mode">
        <input type="radio" id="navigation" value="Navigation" v-model="mode">
        <label for="navigation">Navigation</label>
      </div>
      <div class="input-mode">
        <input type="radio" id="createPolygon" value="Create polygonal zones" v-model="mode">
        <label for="createPolygon">Create polygonal zones</label>
      </div>
      <div class="input-mode">
        <input type="radio" id="dragAnddrop" value="Drag and drop stations" v-model="mode">
        <label for="dragAnddrop">Drag and drop stations</label>
      </div>
      <div class="input-mode">
        <input type="radio" id="moveStation" value="Move stations" v-model="mode">
        <label for="moveStation">Move stations</label>
      </div>
      <div class="input-mode">
        <input type="radio" id="drawLinks" value="Draw links" v-model="mode">
        <label for="drawLinks">Draw links</label>
      </div>
    </div>

    <div>
      <span>Mode => {{ mode }}</span>
    </div>

  </div>
</template>

<script lang='ts'>
  import {Vue, Component, Prop } from 'vue-property-decorator';

  @Component
  export default class CompMenuInfo extends Vue {
    @Prop({required: false, default: 'Navigation'})
    private propMode!: string;

    private mode: string = this.propMode;
  }
</script>

<style scoped lang='less'>
  .selection-mode {
    .input-mode {
      text-align: left;
    }
  }
</style>
