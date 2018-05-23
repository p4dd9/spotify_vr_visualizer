import ASSET_PATHS from './assetPaths';

const AUDIO_TAGS = [
  {
    src: `${ASSET_PATHS.audio}iom_speak_to_me_feat_kerri.mp3`,
    controls: false,
    loop: true,
    autoplay: false
  },
  {
    src: `${ASSET_PATHS.audio}iom_a_sea_of_writing.mp3`,
    controls: false,
    loop: true,
    autoplay: false
  },
  {
    src: `${ASSET_PATHS.audio}iom_matryoshka.mp3`,
    controls: false,
    loop: true,
    autoplay: false
  },
  {
    src: `${ASSET_PATHS.audio}ahtoxa_mc_bop.mp3`,
    controls: false,
    loop: true,
    autoplay: false
  }
]

export default Object.freeze(AUDIO_TAGS);