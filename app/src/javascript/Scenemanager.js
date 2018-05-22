import ASSET_PATH from './config/asset_paths'

class SceneManager {
  constructor() {
    if (!SceneManager.instance) {
      this.name = 'heideltraut' // this is the stateManager's name, deal with it
      SceneManager.instance = this
    }

    return SceneManager.instance
  }

  initScene() {
    return `<a-scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js" vr-mode-ui="enabled: true">
                <a-assets>
                    <img id="sky" src="${ASSET_PATH.images}sky.jpg">
          
                    <a-mixin id="sphere-dancer" class="sphere-dancer" geometry="primitive: sphere"
                             material="color: orange" height="3" radius="1" position="3 0 0">
                    </a-mixin>
                        
                    <a-mixin id="cube-dancer" class="cube-dancer" geometry="primitive: box"
                             material="color: blue" height="3" radius="1" position="3 0 0">
                    </a-mixin>
                    
                    <img id="blob-a-texture" src="${ASSET_PATH.objects}BlobA.png">
                    <img id="blob-b-texture" src="${ASSET_PATH.objects}BlobB.png">
                    <img id="cr_18" src="${ASSET_PATH.images}cr_18_white.png">
                    <img id="mma" src="${ASSET_PATH.images}mma.png">
                    <img id="mmt" src="${ASSET_PATH.images}mmt.png">
                    
                    <a-asset-item id="blob-a" src="${ASSET_PATH.objects}BlobA.obj"></a-asset-item>
                    <a-asset-item id="blob-a-mtl" src="${ASSET_PATH.objects}BlobA.mtl"></a-asset-item>
          
                    <a-asset-item id="blob-b" src="${ASSET_PATH.objects}BlobB.obj"></a-asset-item>
                    <a-asset-item id="blob-b-mtl" src="${ASSET_PATH.objects}BlobB.mtl"></a-asset-item>
          
                    <a-mixin id="blob-dancer-a" class="cube-dancer" obj-model="obj: #blob-a" position="15 5 15" material="src: #blob-a-texture" scale="0.1 0.1 0.1">
                    </a-mixin>
                    
                </a-assets>
          
                <a-entity id='camera' position="0 3.77 13.42" camera look-controls>
                 <a-entity cursor="fuse: true; fuseTimeout: 500"
                    position="0 0 -1"
                    geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                    material="color: black; shader: flat">
                  </a-entity>
                </a-entity>
                
                <!--<a-entity entity-generator="mixin: sphere-dancer; num: 7"
                          layout="type: circle; radius: 5; angle: 50;" position="-15 5 -15">
                    <a-animation attribute="rotation" dur="5000" easing="linear"
                                 repeat="indefinite" to="0 360 360">
                    </a-animation>
                </a-entity>
          
                <a-entity entity-generator="mixin: sphere-dancer; num: 6"
                          layout="type: line; margin: 5; align: start" position="-15 5 15">
                </a-entity>
          
                <a-entity entity-generator="mixin: cube-dancer; num: 30"
                          layout="type: circle; radius: 10; angle: 30" position="-15 5 -15">
                    <a-animation attribute="rotation" dur="5000" easing="linear"
                                 repeat="indefinite" to="0 360 360">
                    </a-animation>
                </a-entity>
          
                <a-entity entity-generator="mixin: sphere-dancer; num: 6"
                          layout="type: line; margin: 5; align: start" position="15 5 15" rotation="0 90 0">
                </a-entity>-->
                    
                <a-entity geometry="primitive: box; depth: 5; height: 5; width: 5" material="shader: standard; src: #cr_18;" position="0 5 0">
                  <a-animation attribute="rotation" dur="10000" easing="linear"
                                 repeat="indefinite" to="360 360 360">
                  </a-animation>
                </a-entity>
                
                <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="-27.78 22.72 -58.44" material="src:#blob-a-texture">
                    <a-animation attribute="rotation" dur="5000" easing="linear"
                               repeat="indefinite" to="0 360 0">
                    </a-animation>
                </a-entity>
                
                <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="15 33.82 -59.29" material="src:#blob-b-texture"></a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="41.62 33.82 -31.08" material="src:#blob-a-texture"></a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="-4.5 47.79 -37.57" material="src:#blob-b-texture"></a-entity>   
                <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="-54.11 25.16 -32.39" material="src:#blob-a-texture"></a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="-49.91 25.16 40.7" material="src:#blob-b-texture">
                    <a-animation attribute="rotation" dur="5000" easing="linear"
                               repeat="indefinite" to="0 360 0">
                    </a-animation>
                </a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="-16.99 12.76 71.35" material="src:#blob-a-texture"></a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="20.41 33.71 63.11" material="src:#blob-b-texture"></a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="-14.53 45.69 52.18" material="src:#blob-a-texture"></a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="17.17 58.54 37.05" material="src:#blob-b-texture"></a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="56.55 36.09 56.61" material="src:#blob-a-texture"></a-entity>
                <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="56.55 7.77 56.61" material="src:#blob-b-texture"></a-entity>
                             
                <a-cylinder radius="50" color="red" height="1"></a-cylinder>
                
                <a-torus color="white" arc="180" radius="50" radius-tubular="10" positiong="0 0 0"></a-torus>
                <a-torus color="green" arc="360" radius="50" radius-tubular="2" positiong="0 0 0" rotation="90 0 0"></a-torus>
                
                <a-box material="color: white" height="15" width="9" position="-25 7 0" rotation="0 90 0"></a-box>
                <a-box material="color: white" height="15" width="9" position="25 7 0" rotation="0 90 0"></a-box>
                
                <a-box id="track-box-1" class="audio-box" material="color: orange" depth="5" height="10" width="5" position="10 0 -12" rotation="0 0 0" audio-box="on: click"></a-box>
                <a-box id="track-box-2" class="audio-box" material="color: blue" depth="5" height="10" width="5" position="-16 0 -12" rotation="0 0 0" audio-box="on: click"></a-box>
                <a-box id="track-box-3" class="audio-box" material="color: pink" depth="5" height="10" width="5" position="0 0 -20" rotation="0 0 0" audio-box="on: click"></a-box>
                
                <a-sky material="color: black;" radius="10000"></a-sky>
                
                <a-plane position="24 10 0" material="src: #mmt" width="7" height="7" rotation="0 -90 0"></a-plane>
                <a-plane position="-24 10 0" material="src: #mma" width="7" height="7" rotation="0 90 0"></a-plane>
                
                <a-entity light="type: spot; angle: 25; penumbra:0.75;" position="0 20 0;" target="src#cr_18" rotation="270 0 0"></a-entity>
                <a-entity light="type: ambient; color: #CCC"></a-entity>
            </a-scene>`
  }

  injectScene() {
    document.getElementById('app').insertAdjacentHTML('afterend', this.initScene())
  }
}

const manager = new SceneManager()
export default manager
