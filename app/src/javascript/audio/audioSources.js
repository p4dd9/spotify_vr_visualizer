import ASSET_PATHS from '../config/assetPaths';

const AUDIO_PATH = ASSET_PATHS.audio;

const AUDIO_SOURCES = [
  {
    src: `${AUDIO_PATH}iom_speak_to_me_feat_kerri.mp3`,
    controls: false,
    loop: true,
    autoplay: false
  },
  {
    src: `${AUDIO_PATH}iom_a_sea_of_writing.mp3`,
    controls: false,
    loop: true,
    autoplay: false
  },
  {
    src: `${AUDIO_PATH}iom_matryoshka.mp3`,
    controls: false,
    loop: true,
    autoplay: false
  },
  {
    src: `${AUDIO_PATH}ahtoxa_mc_bop.mp3`,
    controls: false,
    loop: true,
    autoplay: false
  }
]

export default Object.freeze(AUDIO_SOURCES);