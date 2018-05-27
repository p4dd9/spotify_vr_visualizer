import initAudioCube from 'components/init-audio-cube'

export default class Component {
  static registerAllComponents() {
    Component.registerAudioCubeComponent()
  }

  static registerAudioCubeComponent() {
    initAudioCube()
  }
}