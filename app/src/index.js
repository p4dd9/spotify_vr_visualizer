import './stylesheets/main.scss'
import './javascript/AudioContext'
import 'aframe'
import { registerDanceComponent } from './javascript/dance'
import 'aframe-entity-generator-component'
import 'aframe-layout-component'

registerDanceComponent()

const AUDIO = new Audio()
AUDIO.src = './audio/iom_speak_to_me_feat_kerri.mp3'
AUDIO.controls = true
AUDIO.loop = true
AUDIO.autoplay = true

document.addEventListener('DOMContentLoaded', function() {
  initMP3()
}, false)

function initMP3() {
  let source, context, analyser, fbc_array

  document.getElementById('mp3_player').appendChild(AUDIO)
  context = new AudioContext()
  analyser = context.createAnalyser()

  source = context.createMediaElementSource(AUDIO)
  source.connect(analyser)
  analyser.connect(context.destination)

  const SPHERES = document.getElementsByClassName('sphere-dancer')
  const CUBES = document.getElementsByClassName('cube-dancer')

  frameLooper()

  function frameLooper() {
    window.requestAnimationFrame(frameLooper) // looping function for animations
    fbc_array = new Uint8Array(analyser.frequencyBinCount)
    analyser.getByteFrequencyData(fbc_array)

    updateScaleGeometry(SPHERES, fbc_array, 'sphere-dancer')
    updateScaleGeometry(CUBES, fbc_array, 'cube-dancer')
  }

  function updateScaleGeometry(objects, fbc_array, type) {
    for (let i = 0; i < objects.length; i++) {
      const BAR = objects[i]
      const DATA = -fbc_array[i] / 100;

      (type === 'sphere-dancer') ? BAR.setAttribute('scale', {
        x: DATA,
        y: DATA,
        z: DATA
      }) : BAR.setAttribute('scale', { x: 1, y: DATA, z: 1 })
    }
  }
}