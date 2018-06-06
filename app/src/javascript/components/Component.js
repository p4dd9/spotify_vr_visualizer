import initAudioCube from './init-audio-cube'
import initColliderCheck from './collider-check'

export default class Component {
  static registerAllComponents() {
    Component.registerAudioCubeComponent()
  }

  static registerAudioCubeComponent() {
    initAudioCube()
    initColliderCheck()
  }
}