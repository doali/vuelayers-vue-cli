export class ZoneCouverture {

  constructor(public name: string) {
    this.name = name;
  }

  public static getZone1(): any {
    let spotExtern: any =
      [ // définition d'une zone de couverture == spot
        [-1.6292062576940154, 22.366213571793466],
        [14.718449992305986, 29.013792624590593],
        [54.009330729486194, 34.34288004503328],
        [67.14843750000009, 27.683528083787778],
        [52.55859375000002, 16.130262012034734],
        [40.429687499999986, 6.140554782450252],
        [25.968449992305985, 8.163515929658786],
        [5.381860445148243, 8.601038867664911],
      ];
    return spotExtern;
  }
}
