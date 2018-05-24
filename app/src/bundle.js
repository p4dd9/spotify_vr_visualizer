import './stylesheets/main.scss'
import 'aframe'
import 'aframe-entity-generator-component'
import 'aframe-layout-component'
import 'aframe-template-component'
import SceneManager from 'javascript/SceneManager'
import Audio_Manager from 'javascript/audio/AudioManager'
import initAudioCube from 'components/init-audio-cube'

(function () {
  initAudioCube();
})();

document.addEventListener('DOMContentLoaded', function() {
  console.log(`I am you friendly AudioManager called ${Audio_Manager.name}.`)

  SceneManager.injectScene()
  SceneManager.initVisualizer()
})
