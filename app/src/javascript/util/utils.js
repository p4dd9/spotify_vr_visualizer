// Injects audio tag in the current DOM and return an AUDIO instance

export default function injectAudioSource() {
  const AUDIO = new Audio()

  AUDIO.src = './assets/audio/iom_speak_to_me_feat_kerri.mp3'
  AUDIO.controls = true
  AUDIO.loop = true
  AUDIO.autoplay = true

  document.getElementById('audio-anchor').appendChild(AUDIO)

  return AUDIO
}
