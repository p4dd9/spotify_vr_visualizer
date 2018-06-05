import './stylesheets/main.scss'
import 'aframe'
import 'aframe-entity-generator-component'
import 'aframe-template-component'
import 'aframe-animation-component'
import SceneManager from 'javascript/SceneManager'
import AudioManager from 'javascript/audio/AudioManager'
import Component from 'javascript/components/Component'

document.addEventListener('DOMContentLoaded', function() {

  // Say Hello!
  console.log(`I am you friendly AudioManager called ${AudioManager.name}.`)

  // Register all Components
  Component.registerAllComponents()

  // Inject A-Frame scene in DOM
  SceneManager.injectScene()

  // Initialize Audio Visualization
  SceneManager.initVisualizer()

})
