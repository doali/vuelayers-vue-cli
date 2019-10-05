<template>
  <div class="borderLayout">
    <div class="center">
      <CompMap/>
    </div>
    <div class="right">
      <InfoMap/>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import CompMap from '@/components/CompMap.vue';
  import InfoMap from '@/components/menu/InfoMap.vue'; // @ is an alias to /src

  @Component({
    components: {
      InfoMap,
      CompMap,
    },
  })
  export default class ViewMap extends Vue {
  }
</script>

<style scoped lang='less'>

  .borderLayout {
    display: table;
    min-height: 100%;
    min-width: 100%;
    border: 1px solid #FF0000
  }

  .borderLayout .top {
    display: table-row;
    height: 30%;
    border: 1px solid #FF0000
  }

  .borderLayout .left {
    display: table-cell;
    vertical-align: middle;
    width: 30%;
    background: #333333;
    border: 1px solid #FF0000
  }

  .borderLayout .center {
    display: table-cell;
    vertical-align: middle;
    background: #333333;
    border: 1px solid #FF0000
  }

  .borderLayout .right {
    display: table-cell;
    vertical-align: middle;
    width: 22%;
    background: #333333;
    border: 1px solid #FF0000
  }

  .borderLayout .bottom {
    display: table-row;
    height: 30%;
    background: #333333;
    border: 1px solid #FF0000
  }
</style>
