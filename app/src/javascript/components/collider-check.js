export default function initColliderCheck() {
  AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],

    init: function() {
      const THAT = this.el
      THAT.addEventListener('raycaster-intersected', function() {
        console.log('hit')
      })
    }
  })
}