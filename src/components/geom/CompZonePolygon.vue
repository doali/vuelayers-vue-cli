<template>
  <div v-if="propVisible">
    <vl-layer-vector>
      <vl-source-vector>
        <vl-feature>
          <vl-geom-polygon :coordinates='[polygon]'></vl-geom-polygon>
          <vl-style-box>
            <vl-style-stroke :color='colorStroke'></vl-style-stroke>
            <vl-style-fill :color="'rgba(' + colorRed + ',' + colorGreen + ', ' + colorBlue + ', 0.1)'"></vl-style-fill>
            <vl-style-text :text='legend'></vl-style-text>
          </vl-style-box>
        </vl-feature>
      </vl-source-vector>
    </vl-layer-vector>
  </div>
</template>

<script lang='ts'>
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import {
    StyleBox,
    PolygonGeom,
    VectorSource,
    VectorLayer,
    StrokeStyle,
    TextStyle,
    FillStyle,
  } from 'vuelayers';

  import 'vuelayers/lib/style.css';

  Vue.use(StyleBox);
  Vue.use(PolygonGeom);
  Vue.use(VectorSource);
  Vue.use(VectorLayer);
  Vue.use(StrokeStyle);
  Vue.use(TextStyle);
  Vue.use(FillStyle);

  @Component
  export default class CompZonePolygon extends Vue {
    @Prop({required: false, default: []})
    private propPolygon!: [[Latitude, Longitude]];

    @Prop({required: false, default: 'red'})
    private propColorStroke!: string;

    @Prop({required: false, default: 0})
    private propColorRed!: number;

    @Prop({required: false, default: 0})
    private propColorGreen!: number;

    @Prop({required: false, default: 0})
    private propColorBlue!: number;

    @Prop({required: false, default: 0.1})
    private propColorAlpha!: number;

    @Prop({required: false, default: 'covert zone'})
    private propLegend!: string;

    @Prop({required: false, default: 'true'})
    private propVisible!: boolean;

    private polygon: [[Latitude, Longitude]] = this.propPolygon;
    private colorStroke: string = this.propColorStroke;
    private colorRed: number = this.propColorRed;
    private colorGreen: number = this.propColorGreen;
    private colorBlue: number = this.propColorBlue;
    private colorAlpha: number = this.propColorAlpha;
    private legend: string = this.propLegend;

    public get visible(): boolean {
      return this.visible;
    }

    public set visible(argVisible: boolean) {
      this.visible = argVisible;
    }
  }
</script>
