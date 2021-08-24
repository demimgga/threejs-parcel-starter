import { Group } from "three";
import { TestObj } from "./TestObj";
import {BasicLights} from "./Lights";

export class SeedScene extends Group {
  constructor() {
    super();

    this.testObj = new TestObj();
    this.add(this.testObj, new BasicLights());
  }

  update(ts) {
    this.testObj.rotateY(0.01)
  }
}