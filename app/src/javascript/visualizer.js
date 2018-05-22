import injectAudioSource from './util/utils'
import audioBox from 'a-components/audio-box'

(function () {
  audioBox();
})();


export default function initVisualizer() {
  // HINT: webkitAudioContext is deprecated - Safari supports that too!!
  let context = new window.AudioContext || null

  // Initialize analyser and set MediaSource for AudioContext
  let analyser = context.createAnalyser()
  let source = context.createMediaElementSource(injectAudioSource())

  // Connect MediaSource as analyzer node
  source.connect(analyser)
  analyser.connect(context.destination)

  // Get A-Frame components by ClassName
  const SPHERES = document.getElementsByClassName('sphere-dancer')
  const CUBES = document.getElementsByClassName('cube-dancer')

  frameLooper()

  // Looping function for rendering
  function frameLooper() {
    window.requestAnimationFrame(frameLooper)

    // Get frequency domain data
    let fbc_array = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(fbc_array)

    updateScaleGeometry(SPHERES, fbc_array, 'sphere-dancer')
    updateScaleGeometry(CUBES, fbc_array, 'cube-dancer')

  }

  // Update an array of A-Frame/DOMElements based on scaling properties
  // and frequency domain data
  function updateScaleGeometry(objects, fbc_array, type) {
    for (let i = 0; i < objects.length; i++) {
      const BAR = objects[i]
      const DATA = fbc_array[i] / 10000;

      (type === 'sphere-dancer') ? BAR.setAttribute('scale', {
        x: DATA,
        y: DATA,
        z: DATA
      }) : BAR.setAttribute('scale', { x: 1, y: DATA, z: 1 })
    }
  }
}