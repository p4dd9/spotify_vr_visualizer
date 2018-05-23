import ASSET_PATH from 'config/assetPaths'
import TEMPLATES from 'config/templates'

class SceneManager {
  static initScene() {
    return `<a-scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
 
        <!-- Asset Management -->
        <a-assets>

            <!-- Textures and Images -->
            <img id="sky" src="${ASSET_PATH.images}sky.jpg">
            <img id="blob-a-texture" src="${ASSET_PATH.objects}BlobA.png">
            <img id="blob-b-texture" src="${ASSET_PATH.objects}BlobB.png">
            <img id="cr_18" src="${ASSET_PATH.images}cr_18_white.png">
            <img id="mma" src="${ASSET_PATH.images}mma.png">
            <img id="mmt" src="${ASSET_PATH.images}mmt.png">

            <!-- 3D Objects -->
            <a-asset-item id="blob-a" src="${ASSET_PATH.objects}BlobA.obj"></a-asset-item>
            <a-asset-item id="blob-a-mtl" src="${ASSET_PATH.objects}BlobA.mtl"></a-asset-item>

            <a-asset-item id="blob-b" src="${ASSET_PATH.objects}BlobB.obj"></a-asset-item>
            <a-asset-item id="blob-b-mtl" src="${ASSET_PATH.objects}BlobB.mtl"></a-asset-item>

        </a-assets>

        <!-- Camera -->
        <a-entity id='camera' position="0 3.77 13.42" camera look-controls>
            <a-entity cursor="fuse: true; fuseTimeout: 500"
                      position="0 0 -1"
                      geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
                      material="color: black; shader: flat">
            </a-entity>
        </a-entity>

        <!-- Animated CR_18 Cube -->
        <a-entity geometry="primitive: box; depth: 5; height: 5; width: 5" material="shader: standard; src: #cr_18;" position="0 5 0">
            <a-animation attribute="rotation" dur="10000" easing="linear"
                         repeat="indefinite" to="360 360 360">
            </a-animation>
        </a-entity>

        <!-- Dancing Blobs -->
        <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="15 33.82 -59.29" material="src:#blob-b-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="41.62 33.82 -31.08" material="src:#blob-a-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="-4.5 47.79 -37.57" material="src:#blob-b-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="-54.11 25.16 -32.39" material="src:#blob-a-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="-16.99 12.76 71.35" material="src:#blob-a-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="20.41 33.71 63.11" material="src:#blob-b-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="-14.53 45.69 52.18" material="src:#blob-a-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="17.17 58.54 37.05" material="src:#blob-b-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="56.55 36.09 56.61" material="src:#blob-a-texture"></a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="56.55 7.77 56.61" material="src:#blob-b-texture"></a-entity>
        
        <a-entity class="sphere-dancer" obj-model="obj:#blob-b" position="-49.91 25.16 40.7" material="src:#blob-b-texture">
            <a-animation attribute="rotation" dur="5000" easing="linear"
                         repeat="indefinite" to="0 360 0">
            </a-animation>
        </a-entity>
        <a-entity class="sphere-dancer" obj-model="obj:#blob-a" position="-27.78 22.72 -58.44" material="src:#blob-a-texture">
            <a-animation attribute="rotation" dur="5000" easing="linear"
                         repeat="indefinite" to="0 360 0">
            </a-animation>
        </a-entity>

        <!-- Ground -->
        <a-cylinder radius="50" color="red" height="1"></a-cylinder>

        <!-- Arch -->
        <a-torus color="white" arc="180" radius="50" radius-tubular="10" positiong="0 0 0"></a-torus>
        
        <!-- Groundborder -->
        <a-torus color="green" arc="360" radius="50" radius-tubular="2" positiong="0 0 0" rotation="90 0 0"></a-torus>
        
        <!-- Interactive AudioCubes -->
        <a-entity template="src: ${TEMPLATES.audioBox}; type: handlebars" data-title="Speak to me" data-id="1" data-color="orange" data-x="20" data-y="0" data-z="-20"></a-entity>
        <a-entity template="src: ${TEMPLATES.audioBox}; type: handlebars" data-title="A sea of writing" data-id="2" data-color="blue" data-x="20" data-y="0" data-z="20"></a-entity>
        <a-entity template="src: ${TEMPLATES.audioBox}; type: handlebars" data-title="Matryoshka" data-id="3" data-color="pink"  data-x="-20" data-y="0" data-z="20""></a-entity>
        <a-entity template="src: ${TEMPLATES.audioBox}; type: handlebars" data-title="Bop" data-id="4" data-color="pink"  data-x="-20" data-y="0" data-z="-20""></a-entity>

        <!-- Skybox -->
        <a-sky material="color: black;" radius="10000"></a-sky>

        <!-- MMA/MMT Signs -->
        <a-entity template="src: ${TEMPLATES.sign}; type: handlebars" data-cubeposition="25" data-position="24 10 0" data-material="#mmt" data-rotation="0 -90 0"></a-entity>
        <a-entity template="src: ${TEMPLATES.sign}; type: handlebars" data-cubeposition="-25" data-position="-24 10 0" data-material="#mma" data-rotation="0 90 0"></a-entity>

        <!-- Lights -->
        <a-entity light="type: spot; angle: 25; penumbra:0.75;" position="0 20 0;" target="src#cr_18" rotation="270 0 0"></a-entity>
        <a-entity light="type: ambient; color: #CCC"></a-entity>
    </a-scene>`
  }

  static injectScene() {
    document.getElementById('app').insertAdjacentHTML('afterend', SceneManager.initScene())
  }
}

export default SceneManager
