import AUDIO_TAGS from 'config/audioTags'

export default function audioBox() {
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
            AudioTag.setAttribute('src', AUDIO_TAGS[0].src)
            break
          }
          case 'track-box-2': {
            AudioTag.setAttribute('src', AUDIO_TAGS[1].src)
            break
          }
          case 'track-box-3': {
            AudioTag.setAttribute('src', AUDIO_TAGS[2].src)
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
