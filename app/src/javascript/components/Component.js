import initAudioCube from './init-audio-cube'
import initColliderCheck from './collider-check'
import initWalkControls from './walk-controls'

export default class Component {
  static registerAllComponents() {
    Component.registerAudioCubeComponent()
  }

  static registerAudioCubeComponent() {
    initAudioCube()
    initColliderCheck()
    initWalkControls()
  }
}