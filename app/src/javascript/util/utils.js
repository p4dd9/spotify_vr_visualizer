// Injects audio tag in the current DOM and return an AUDIO instance

import ASSET_PATHS from 'config/assetPaths'

export default function injectAudioSource() {
  const AUDIO = new Audio()

  AUDIO.src = `${ASSET_PATHS.audio}iom_a_sea_of_writing.mp3`
  AUDIO.controls = true
  AUDIO.loop = true
  AUDIO.autoplay = true

  document.getElementById('audio-anchor').appendChild(AUDIO)

  return AUDIO
}
