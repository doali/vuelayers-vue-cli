<template>
  <div class="borderLayout">
    <div class="top">
      <CompMenuInfo></CompMenuInfo>
    </div>
    <div class="center">
      <CompInventaire></CompInventaire>
      <CompStation></CompStation>
      <CompTopologie></CompTopologie>
      <CompCouverture></CompCouverture>
    </div>
  </div>
</template>

<script lang='ts'>
  import {Vue, Component, Prop} from 'vue-property-decorator';

  import CompInventaire from '@/components/menu/CompInventaire.vue';
  import CompStation from '@/components/menu/CompStation.vue';
  import CompTopologie from '@/components/menu/CompTopologie.vue';
  import CompCouverture from '@/components/menu/CompCouverture.vue';
  import CompMenuInfo from '@/components/menu/CompMenuInfo.vue';

  @Component({
    components: {
      CompMenuInfo,
      CompInventaire,
      CompStation,
      CompTopologie,
      CompCouverture,
    },
  })
  export default class InfoMap extends Vue {

  }
</script>

<style scoped lang='less'>

  .borderLayout {
    display: table;
    border: 1px solid #FF0000;
    height: 100vh;
  }

  .borderLayout .top {
    display: table-row;
    border: 1px solid #FF0000
  }

  .borderLayout .center {
    display: table-cell;
    vertical-align: middle;
    background: #3b3b4e;
    border: 1px solid #FF0000;
    height: 100%;
  }

</style>
