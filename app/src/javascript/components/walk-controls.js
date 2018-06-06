export default function initWalkControls() {
  AFRAME.registerComponent('walk-controls', {

    init: function() {
      const VIVE_CONTROLS = this.el
      let RIG = document.getElementById('camera-rig')

      VIVE_CONTROLS.addEventListener('trackpaddown', function(e) {
        console.log('Walk')

        const ANGLE = RIG.getAttribute('rotation')

        let x = 1 * Math.cos(ANGLE.y * Math.PI / 180)
        let y = 1 * Math.sin(ANGLE.y * Math.PI / 180)

        let pos = RIG.getAttribute('position')

        pos.x -= y
        pos.z -= x

        RIG.setAttribute('position', pos)
      })
    }
  })
}
