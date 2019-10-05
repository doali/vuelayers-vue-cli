<template>
  <div>
    <vl-feature>
      <vl-geom-circle :coordinates="circle" :radius="radius"></vl-geom-circle>
      <vl-style-box>
        <vl-style-stroke :color="colorStroke"></vl-style-stroke>
        <vl-style-fill :color="'rgba(' + colorRed + ',' + colorGreen + ', ' + colorBlue + ', ' + colorAlpha + ')'"></vl-style-fill>
        <vl-style-text :text="legend"></vl-style-text>
      </vl-style-box>
    </vl-feature>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  StyleBox,
  CircleGeom,
  VectorSource,
  VectorLayer,
  StrokeStyle,
  TextStyle,
  FillStyle,
} from 'vuelayers';

import 'vuelayers/lib/style.css';

Vue.use(StyleBox);
Vue.use(CircleGeom);
Vue.use(VectorSource);
Vue.use(VectorLayer);
Vue.use(StrokeStyle);
Vue.use(TextStyle);
Vue.use(FillStyle);

@Component
export default class CompZoneCircle extends Vue {
  @Prop({ required: false, default: [] })
  private propCircle!: [[Latitude, Longitude]];

  @Prop({ required: false, default: 0 })
  private propRadius!: number;

  @Prop({ required: false, default: 'blue' })
  private propColorStroke!: string;

  @Prop({ required: false, default: 0 })
  private propColorRed!: number;

  @Prop({ required: false, default: 0 })
  private propColorGreen!: number;

  @Prop({ required: false, default: 0 })
  private propColorBlue!: number;

  @Prop({ required: false, default: 0.1 })
  private propColorAlpha!: number;

  @Prop({ required: false, default: 'covert zone' })
  private propLegend!: string;

  private circle: [[Latitude, Longitude]] = this.propCircle;
  private radius: number = this.propRadius;

  private colorStroke: string = this.propColorStroke;

  private colorRed: number = this.propColorRed;
  private colorGreen: number = this.propColorGreen;
  private colorBlue: number = this.propColorBlue;

  private colorAlpha: number = this.propColorAlpha;

  private legend: string = this.propLegend;
}
</script>
