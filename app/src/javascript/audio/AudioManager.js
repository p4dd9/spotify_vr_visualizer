import ASSET_PATHS from '../config/assetPaths'
import AUDIO_SOURCES from './audioSources'

class AudioManager {
  constructor() {
    if (!AudioManager.instance) {
      this.name = 'Heideltraut'
      this.context = new window.AudioContext || null
      this.analyser = this.context.createAnalyser()
      this.source = this.context.createMediaElementSource(AudioManager.injectAudioSource())

      this.source.connect(this.analyser)
      this.analyser.connect(this.context.destination)

      AudioManager.instance = this
    }

    return AudioManager.instance
  }

  // Injects audio tag in the current DOM and return an AUDIO instance
  static injectAudioSource() {
    const AUDIO = new Audio()

    AUDIO.src = `${ASSET_PATHS.audio}iom_a_sea_of_writing.mp3`
    AUDIO.controls = true
    AUDIO.loop = true
    AUDIO.autoplay = true

    document.getElementById('audio-anchor').appendChild(AUDIO)

    return AUDIO
  }

  getAudioSources() {
    return AUDIO_SOURCES
  }
}

const Audio_Manager = new AudioManager()
export default Audio_Manager
