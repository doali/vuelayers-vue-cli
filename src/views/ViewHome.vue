<template>
  <div>
    <CompHome msg=""/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CompHome from '@/components/CompHome.vue'; // @ is an alias to /src

@Component({
  components: {
    CompHome,
  },
})
export default class ViewHome extends Vue {}
</script>
