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
    return `<a-scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
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
          
                    <a-asset-item id="blob-a" src="${ASSET_PATH.objects}BlobA.obj"></a-asset-item>
                    <a-asset-item id="blob-a-mtl" src="${ASSET_PATH.objects}BlobA.mtl"></a-asset-item>
          
                    <a-asset-item id="blob-b" src="${ASSET_PATH.objects}BlobB.obj"></a-asset-item>
                    <a-asset-item id="blob-b-mtl" src="${ASSET_PATH.objects}BlobB.mtl"></a-asset-item>
          
                    <a-mixin id="blob-dancer-a" class="cube-dancer" obj-model="obj: #blob-a" position="15 5 15" material="src: #blob-a-texture" scale="0.1 0.1 0.1">
                    </a-mixin>
                </a-assets>
          
                <a-entity id='cameraWrapper' position="0 3.77 8.31">
                    <a-camera></a-camera>
                </a-entity>
          
                <a-entity entity-generator="mixin: sphere-dancer; num: 7"
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
                </a-entity>
          
                <a-entity class="sphere-dancer" obj-model="obj: #blob-a" position="15 5 15" material="src: #blob-a-texture">
                  <a-animation attribute="rotation" dur="5000" easing="linear"
                               repeat="indefinite" to="0 360 0">
                  </a-animation>
                </a-entity>
                
                <a-entity class="sphere-dancer" obj-model="obj: #blob-b" position="15 5 15" material="src: #blob-b-texture"></a-entity>
          
                <a-sky src="#sky" radius="10000"></a-sky>
            </a-scene>`
  }

  injectScene() {
    document.getElementById('app').insertAdjacentHTML('afterend', this.initScene())
  }
}

const manager = new SceneManager()
export default manager
