import './stylesheets/main.scss'
import 'aframe'
import 'aframe-entity-generator-component'
import 'aframe-layout-component'
import initVisualizer from 'javascript/visualizer'
import SceneManager from 'javascript/SceneManager'

document.addEventListener('DOMContentLoaded', function() {
  SceneManager.injectScene()
  initVisualizer()
})