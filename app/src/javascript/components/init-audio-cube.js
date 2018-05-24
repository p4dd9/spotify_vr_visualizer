import Audio_Manager from '../audio/AudioManager'

export default function initAudioCube() {
  AFRAME.registerComponent('audio-box', {
    schema: {
      on: { type: 'string' }
    },

    init: function() {
      const data = this.data
      const el = this.el

      el.addEventListener(data.on, function() {
        const AudioTag = document.getElementsByTagName('audio')[0]
        AudioTag.pause()

        switch (el.id) {
          case 'track-box-1': {
            AudioTag.setAttribute('src', Audio_Manager.getAudioSources()[0].src)
            break
          }
          case 'track-box-2': {
            AudioTag.setAttribute('src', Audio_Manager.getAudioSources()[1].src)
            break
          }
          case 'track-box-3': {
            AudioTag.setAttribute('src', Audio_Manager.getAudioSources()[2].src)
            break
          }
          case 'track-box-4': {
            AudioTag.setAttribute('src', Audio_Manager.getAudioSources()[3].src)
            break
          }
          default:
            alert('Yikes, i dont know thiz box.')
        }

        AudioTag.play()
      })
    }
  })
}
