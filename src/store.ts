import Vue from 'vue';
import Vuex from 'vuex';

import '@/util/typeAlias';
import {ZoneCouverture} from '@/logic/ZoneCouverture';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    spotNational: {
      center: [2.2851562499999996, 47.159840013044345],
      radius: 800000,
    },
    spotInterNational: [ // définition d'une zone de couverture == spot
      [-1.6292062576940154, 22.366213571793466],
      [14.718449992305986, 29.013792624590593],
      [54.009330729486194, 34.34288004503328],
      [67.14843750000009, 27.683528083787778],
      [52.55859375000002, 16.130262012034734],
      [40.429687499999986, 6.140554782450252],
      [25.968449992305985, 8.163515929658786],
      [5.381860445148243, 8.601038867664911],
    ],
    lstStationGround: [
      [13.189940687705095, 11.926652367098441], // station_T1
      [11.389940687705095, 10.026652367098441], // station_T2
      [10.489940687705095, 10.126652367098441],
      [9.189940687705095, 9.526652367098441],
      [-4.48804037604793, 48.38886784872483], // station_Brest
    ],
    lstStationNaval: [
      [49.570312500000135, 28.62310355452992], // station_M1
      [50.976562500000085, 27.984700118612707], // station_M2
      [49.89990234375008, 29.630771207229074],
    ],
    lstLinkStationNaval: [
      [49.570312500000135, 28.62310355452992],
      [50.976562500000085, 27.984700118612707],
      [49.89990234375008, 29.630771207229074],
    ],
    lstLinkStationGround: [
      [13.189940687705095, 11.926652367098441], // station_T1
      [11.389940687705095, 10.026652367098441], // station_T2
      [10.489940687705095, 10.126652367098441], // station_T3
      [9.189940687705095, 9.526652367098441],
      [-4.48804037604793, 48.38886784872483],
    ],
    lstLinktStationGroundHome: [
      [13.189940687705095, 11.926652367098441], // station_T1
      [10.489940687705095, 10.126652367098441], // station_T3
    ],
    LinkStationGroundNaval: [
      [13.189940687705095, 11.926652367098441], // station_T1
      [49.570312500000135, 28.62310355452992], // station_M1
    ],
    zoneMobilityGroundNational: [
      [-4.488855544526676, 48.388037825079635],
      [-4.4886731543136635, 48.3896266374509],
      [-4.486406213009386, 48.39007015610636],
      [-4.485515719616441, 48.388858968900195],
      [-4.487081833041901, 48.38749567157612],
    ],
    zoneMobilityGroundInternational: [
      [8.318551687146426, 8.88628464352908],
      [8.318551687146426, 11.190383947518399],
      [11.131051687146428, 13.849939170496327],
      [15.76728215589643, 13.497666573033854],
      [16.46734913944127, 9.373174852492],
      [11.995913592566266, 7.155381863090128],
    ],
    zoneMobilityNaval: [
      [48.77511955501408, 29.25440359834377],
      [50.049533617514044, 30.132409559643165],
      [50.126437914389086, 29.832652549987912],
      [51.37887932063919, 27.553684498656693],
      [49.1211888909516, 27.73373078077165],
    ],
    lstCouverture: [ZoneCouverture],//ZoneCouverture.getZone1()],
  },
  getters: {
    getLstStationGround(state) {
      return state.lstStationGround;
    },
    getLstStationNaval(state) {
      return state.lstStationNaval;
    },
    getSpotNational(state) {
      return state.spotNational;
    },
    getSpotInterNational(state) {
      return state.spotInterNational;
    },
    getLstLinkStationNaval(state) {
      return state.lstLinkStationNaval;
    },
    getLstLinkStationGround(state) {
      return state.lstLinkStationGround;
    },
    getLinkStationGroundNaval(state) {
      return state.LinkStationGroundNaval;
    },
    getLstLinktStationGroundHome(state) {
      return state.lstLinktStationGroundHome;
    },
    getZoneMobilityGroundNational(state) {
      return state.zoneMobilityGroundNational;
    },
    getZoneMobilityGroundInternational(state) {
      return state.zoneMobilityGroundInternational;
    },
    getZoneMobilityNaval(state) {
      return state.zoneMobilityNaval;
    },
    getLstCouverture(state) {
      return state.lstCouverture;
    },
  },
  mutations: {
    ajouterZoneCouverture(state, zone) {
      state.lstCouverture.push(zone);
    },
    supprimerZoneCouverture(state, zone) {
      state.lstCouverture.pop();
    },
  },
  actions: {},
});
