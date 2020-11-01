import {EditorComponent} from '@/core/EditorComponent'

export class RightToolbar extends EditorComponent {
    static className = 'right_panel'

    constructor($root, options) {
      super($root, options = {
        name: 'RightPanel',
        ...options
      })
    }

    toHTML() {
      return `
          <div class="edit_section">
              <div class="title bg-dark">
                  <h3>Edit</h3>
              </div>
              <div class="panel__resize">
                  <div class="panel__tool_title">
                      <input class="resize" name="resize" type="checkbox">
                      Resize
                  </div>
                  <div class="panel__tools">
                      <div class="panel__tool method">
                          Method:
                          <select name="method" id="method">
                              <option value="Mitchel">Mitchel</option>
                              <option value="Catmull-Rom">Catmull-Rom</option>
                              <option value="Triangle">Triangle</option>
                              <option value="hqx">hqx</option>
                          </select>
                      </div>
                      <div class="panel__tool preset">
                          Preset:
                          <select name="preset" id="preset">
                              <option value="100%">100%</option>
                              <option value="200%">200%</option>
                              <option value="300%">300%</option>
                              <option value="400%">400%</option>
                              <option value="Custom">Custom</option>
                          </select>
                      </div>
                      <div class="panel__tool width">
                          Width:
                          <input type="number" value="900" min="1" required>
                      </div>
                      <div class="panel__tool height">
                          Height:
                          <input type="number" value="300" min="1" required>
                      </div>
                      <div class="panel__tool_checkbox chanel">
                          <input class="alpha-channel" 
                          name="alphaChannel" type="checkbox">
                          Premultiply alpha channel
                      </div>
                      <div class="panel__tool_checkbox linear">
                          <input class="linear-RGB" 
                          name="linearRGB" type="checkbox">
                          Linear RGB
                      </div>
                      <div class="panel__tool_checkbox maintain">
                          <input class="maintain-aspect" 
                          name="maintainAspect" type="checkbox">
                          Maintain aspect ratio
                      </div>
                  </div>
              </div>
              <div class="panel__reduce">
                  <div class="panel__tool_title">
                      <input class="reduce-palette" 
                        name="reduce" type="checkbox">
                      Reduce palette
                  </div>
                  <div class="panel__tools">
                      <div class="panel__tool colors">
                          <span>Colors:</span>
                          <input class="input-size" 
                              type="text" name="slideResize" value="50">
                      </div>
                      <input type="range" class="input-range"
                                  min="1" max="256" step="1" value="50"> 
                      <div class="panel__tool dithering">
                          <span>Dithering:</span>
                          <input class="input-size" 
                              type="text" name="slideResize" value="0.5">
                      </div>
                      <input type="range" class="input-range"
                          min="0" max="1" value="0.5" step="0.01"> 
                  </div>
              </div>
          </div>
  
          <div class="compress__section">
              <div class="title bg-dark">
                  <h3>Compress</h3>
              </div>
              <div class="panel__tools">
                  <div class="panel__tool selection">
                      <select name="format" id="format">
                          <option value="WebP">WebP</option>
                          <option value="MozJPEG">MozJPEG</option>
                          <option value="AVIF">AVIF</option>
                          <option value="Browser PNG">Browser PNG</option>
                      </select>
                  </div>
                  <div class="panel__tool quality">
                      <span>Quality:</span>
                      <input class="input-size" 
                          type="text" name="slideResize" value="50">
                  </div>
                  <input type="range" class="input-range"
                          min="0" max="1" value="0.5" step="0.01">
              </div>
          </div>
          
          <div class="size__section bg-dark">
                <span class="size__size">107 kB</span>
              <div class="size__image">
                  <button class="download-img bg-blue">
                      <i class="material-icons">system_update_alt</i>
                  </button>
              </div>
          </div>
      `
    }
}
