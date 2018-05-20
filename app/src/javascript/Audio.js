export default class Audio {
  constructor(src, controls = false, loop = false, autoplay = true) {
      this.src = src;
      this.controls = controls;
      this.loop = loop;
      this.autoplay = autoplay;
  }
}