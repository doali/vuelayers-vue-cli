<template>
  <div>
    <p>{{ msg }}</p>
    <ul>
      <li>
        <div class='label'>Center national spot</div>
        <div class='data'>{{ this.$store.getters.getSpotNational.center }}</div>
      </li>
      <li>
        <div class='label'>Ground stations</div>
        <div class='data'>{{ this.$store.getters.getLstStationGround }}</div>
      </li>
      <li>
        <div class='label'>Naval stations</div>
        <div class='data'>{{ this.$store.getters.getLstStationNaval }}</div>
      </li>
      <li>
        <div class='label'>National spot</div>
        <div class='data'>{{ this.$store.getters.getSpotNational }}</div>
      </li>
      <li>
        <div class='label'>International spot</div>
        <div class='data'>{{ this.$store.getters.getSpotInterNational }}</div>
      </li>
      <li>
        <div class='label'>Links : naval stations</div>
        <div class='data'>{{ this.$store.getters.getLstLinkStationNaval }}</div>
      </li>
      <li>
        <div class='label'>Links : ground stations</div>
        <div class='data'>{{ this.$store.getters.getLstLinkStationGround }}</div>
      </li>
      <li>
        <div class='label'>Link : ground and naval stations</div>
        <div class='data'>{{ this.$store.getters.getLinkStationGroundNaval }}</div>
      </li>
      <li>
        <div class='label'>Link : internal ground stations</div>
        <div class='data'>{{ this.$store.getters.getLstLinktStationGroundHome }}</div>
      </li>
      <li>
        <div class='label'>Mobility zone for ground stations</div>
        <div class='data'>{{ this.$store.getters.getZoneMobilityGroundNational }}</div>
      </li>
      <li>
        <div class='label'>Mobility zone for international ground stations</div>
        <div class='data'>{{ this.$store.getters.getZoneMobilityGroundInternational }}</div>
      </li>
      <li>
        <div class='label'>Mobility zone for naval stations</div>
        <div class='data'>{{ this.$store.getters.getZoneMobilityNaval }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CompHome extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  border: solid 1px;
  margin-left: 10em;
  margin-right: 10em;
}
li {
  //display: inline-block;
  margin: 0 0px;
}
a {
  color: #42b983;
}

.label {
  text-align: left; 
  padding-left: 1em; 
  background: #3b3b4e;
  color: rgb(227, 231, 230);
  font-weight: lighter;
}

.data {
  text-align: left;
  padding-left: 25em;
  background: #2c2c2e;
}
</style>
