<template>
  <div>
    <vl-map
      :load-tiles-while-animating='true'
      :load-tiles-while-interacting='true'
      data-projection='EPSG:4326'>

      <vl-view :zoom.sync='zoom' :center.sync='center' :rotation.sync='rotation'></vl-view>

      <!-- fond carto geoserver -->
<!--      <vl-layer-tile>-->
<!--        <vl-source-osm :url="url" :crossOrigin='null'></vl-source-osm>-->
<!--      </vl-layer-tile>      -->

      <!-- fond carto osm online -->
      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <!-- positionnement des images -->
      <div v-for='itemStationNaval in lstStationNaval'>
        <vl-feature>
          <vl-geom-point :coordinates='itemStationNaval'></vl-geom-point>
          <vl-style-box>
            <div>
              <vl-style-icon src='@/assets/NLV_AG_GRAPHE.svg' :scale='0.5' :anchor='[0.5, 0.5]'></vl-style-icon>
            </div>
          </vl-style-box>
        </vl-feature>
      </div>

      <!-- positionnement des images -->
      <div v-for='itemStationGround in lstStationGround'>
        <vl-feature>
          <vl-geom-point :coordinates='itemStationGround'></vl-geom-point>
          <vl-style-box>
            <div>
              <vl-style-icon src='@/assets/STM_GRAPHE_REVERT.svg' :scale='0.5' :anchor='[0.5, 0.5]'></vl-style-icon>
            </div>
          </vl-style-box>
        </vl-feature>
      </div>

      <!-- zones de couvertures --->

      <CompZoneCircle :propCircle="this.$store.getters.getSpotNational.center" :propRadius="this.$store.getters.getSpotNational.radius" :propColorBlue="255" :propLegend="'National zone'"></CompZoneCircle>

<!--      <CompZonePolygon :propPolygon="this.$store.getters.getSpotInterNational" :propColorRed="255" propLegend="'International zone'"></CompZonePolygon>-->
      <CompZonePolygon :propPolygon="zoneMobilityGroundNational" :propColorRed="255" propLegend="'Mobility Ground zone'"></CompZonePolygon>
      <CompZonePolygon :propPolygon="zoneMobilityGroundInternational" :propColorRed="255" propColorGreen="255" :propLegend="'Mobility Ground zone'"></CompZonePolygon>
      <CompZonePolygon :propPolygon="zoneMobilityNaval" :propColorRed="255" :propColorGreen="255" propLegend="'Mobility Sea zone'"></CompZonePolygon>

      <!-- zone draw couvertures -->
      <div v-if="lstZoneCouverture.length > 0">
      <div v-for='itemCouverture in lstZoneCouverture'>
        {{ itemCouverture.getZone1 }} in {{ lstZoneCouverture }}
        <CompZonePolygon :propPolygon="itemCouverture"></CompZonePolygon>
      </div>
      </div>

      <button @click="ajout">ajouter zone</button>
      <button @click="supprimer">supprimer zone</button>
      <button @click="changeAfficher">afficher {{ afficher }}</button>

      <CompZonePolygon v-if='afficher' :propPolygon="this.$store.getters.getSpotInterNational" :propColorRed="255" propLegend="'International zone'"></CompZonePolygon>

      <!-- Links entre les stations -->

      <vl-feature>
        <vl-geom-line-string :coordinates='linkStationGroundNaval'></vl-geom-line-string>
      </vl-feature>

      <vl-feature>
        <vl-geom-line-string :coordinates='lstLinkStationNaval'></vl-geom-line-string>
      </vl-feature>

      <vl-feature>
        <vl-geom-line-string :coordinates='lstLinkStationGround'></vl-geom-line-string>
      </vl-feature>

      <vl-layer-vector>
        <vl-feature>
          <vl-geom-line-string :coordinates='lstLinktStationGroundHome'></vl-geom-line-string>
          <vl-style-box>
            <vl-style-fill color='white'></vl-style-fill>
            <vl-style-stroke color='red' :width='1' :line-dash='[3, 5, 30, 5]'></vl-style-stroke>
          </vl-style-box>
        </vl-feature>
      </vl-layer-vector>
    </vl-map>

    <!-- Longitude, Latitude, Zoom -->
    <div class='dash-map'>
      <span class='dash-map-info'>{{center[0]}}</span>
      <span class='dash-map-info'>{{center[1]}}</span>
      <span class='dash-map-info'>{{zoom}}</span>
    </div>

  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  Map,
  TileLayer,
  OsmSource,
  Feature,
  PointGeom,
  IconStyle,
  StyleBox,
  CircleGeom,
  PolygonGeom,
  LineStringGeom,
  VectorSource,
  VectorLayer,
  StrokeStyle,
  TextStyle,
  FillStyle,
  Overlay,
} from 'vuelayers';

import 'vuelayers/lib/style.css';

Vue.use(Map);
Vue.use(TileLayer);
Vue.use(OsmSource);
Vue.use(Feature);
Vue.use(PointGeom);
Vue.use(IconStyle);
Vue.use(StyleBox);
Vue.use(CircleGeom);
Vue.use(PolygonGeom);
Vue.use(LineStringGeom);
Vue.use(VectorSource);
Vue.use(VectorLayer);
Vue.use(StrokeStyle);
Vue.use(TextStyle);
Vue.use(FillStyle);
Vue.use(Overlay);

import CompZoneCircle from '@/components/geom/CompZoneCircle.vue';
import CompZonePolygon from '@/components/geom/CompZonePolygon.vue';
import {ZoneCouverture} from '@/logic/ZoneCouverture';

@Component({
  components: {
    CompZonePolygon,
    CompZoneCircle,
  },
})
export default class CompMap extends Vue {

  private afficher: boolean = true;
  private changeAfficher(): void {
    this.afficher = !this.afficher;
  }

  private ajout() {
    this.$store.commit('ajouterZoneCouverture', ZoneCouverture.getZone1());
  }

  private supprimer() {
    this.$store.commit('supprimerZoneCouverture', ZoneCouverture.getZone1());
  }

  private zoom: number = 3;
  private center: any = [21.416930349914605, 30.493955061340955];
  private rotation: number = 0;

  private station: [Latitude, Longitude] = this.$store.getters.getSpotNational
    .center;
  private spotInterNational: [[Latitude, Longitude]] = this.$store.getters
    .getSpotInterNational;

  private lstStationNaval: [[Latitude, Longitude]] = this.$store.getters
    .getLstStationNaval;
  private lstStationGround: [[Latitude, Longitude]] = this.$store.getters
    .getLstStationGround;
  private lstLinkStationNaval: [[Latitude, Longitude]] = this.$store.getters
    .getLstLinkStationNaval;
  private lstLinkStationGround: [[Latitude, Longitude]] = this.$store.getters
    .getLstLinkStationGround;
  private linkStationGroundNaval: [Latitude, Longitude] = this.$store.getters
    .getLinkStationGroundNaval;
  private lstLinktStationGroundHome: [Latitude, Longitude] = this.$store.getters
    .getLstLinktStationGroundHome;

  private zoneMobilityGroundNational: [[Latitude, Longitude]] = this.$store.getters
    .getZoneMobilityGroundNational;
  private zoneMobilityGroundInternational: [[Latitude, Longitude]] = this.$store
    .getters.getZoneMobilityGroundInternational;
  private zoneMobilityNaval: [[Latitude, Longitude]] = this.$store.getters
    .getZoneMobilityNaval;

  private lstZoneCouverture: [ZoneCouverture] = this.$store.getters
    .getLstCouverture;
    /**
     * Sets geoserver url.
     */
    private url: string = 'http://199.0.53.212:8080/osm_tiles/{z}/{x}/{y}.png';
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<!--<style scoped lang='less'>-->
<!--.overlay-content {-->
<!--  border: 2px ridge rgba(170, 50, 220, 0.6);-->
<!--  color: #000000;-->
<!--  background: rgba(255, 255, 255, 0.6);-->
<!--}-->

<!--.dash-map {-->
<!--    bottom: 2.4em;-->
<!--    position: relative;-->
<!--    background-color: rgba(255, 255, 255, 0.4);-->
<!--    border-radius: 4px;-->
<!--    padding: 6px;-->
<!--    margin-left: 0.5em;-->
<!--    margin-right: 79em;-->
<!--}-->

<!--.dash-map-info {-->
<!--  background: rgba(0, 60, 136, 0.5);-->
<!--  border-radius: 4px;-->
<!--  padding: 2px;-->
<!--  margin: 5px;-->
<!--  color: #ffffff;-->
<!--  font-family: sans-serif;-->
<!--  font-size: 1em;-->
<!--}-->
<!--</style>-->
