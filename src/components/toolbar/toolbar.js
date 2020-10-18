export default class Toolbar {
  static className = 'editor__left_panel'

  constructor() {

  }

  toHTML() {
    return `
        <div class="edit_section">
            <h3>Edit</h3>
            <div class="resize_section">
                <input class="resize" name="resize" type="checkbox">
                Resize
                <div class="resize_tools">
                    <div class="method_tool">
                        Method:
                        <select name="method" id="method">
                            <option value="Mitchel">Mitchel</option>
                            <option value="Catmull-Rom">Catmull-Rom</option>
                            <option value="Triangle">Triangle</option>
                            <option value="hqx">hqx</option>
                        </select>
                    </div>
                    <div class="preset_tool">
                        Preset:
                        <select name="preset" id="preset">
                            <option value="100%">100%</option>
                            <option value="200%">200%</option>
                            <option value="300%">300%</option>
                            <option value="400%">400%</option>
                            <option value="Custom">Custom</option>
                        </select>
                    </div>
                    <div class="width_tool">
                        Width:
                        <input type="number" value="900" min="1" required>
                    </div>
                    <div class="height_tool">
                        Height:
                        <input type="number" value="300" min="1" required>
                    </div>
                    <div class="chanel_tol">
                        <input class="alpha-channel" 
                        name="alphaChannel" type="checkbox">
                        Premultiply alpha channel
                    </div>
                    <div class="linear_tol">
                        <input class="linear-RGB" 
                        name="linearRGB" type="checkbox">
                        Linear RGB
                    </div>
                    <div class="maintain_tol">
                        <input class="maintain-aspect" 
                        name="maintainAspect" type="checkbox">
                        Maintain aspect ratio
                    </div>
                </div>
            </div>
            <div class="reduce_section">
                <input class="reduce-palette" name="reduce" type="checkbox">
                Reduce palette
                <div class="reduce_tools">
                    <div class="colors_tool">
                        <div class="tool_slide-resize">
                            <span>Colors:</span>
                            <input type="text" name="slideResize" value="50">
                        </div>
                        <br />
                        <input type="range" 
                        min="1" max="256" step="1" value="50"> 
                    </div>
                    <div class="dithering_tool">
                        <div class="tool_slide-resize">
                            <span>Dithering:</span>
                            <input type="text" name="slideResize" value="0.5">
                        </div>
                        
                        <br />
                        <input type="range" 
                        min="0" max="1" step="1" value="0.5" step="0.01"> 
                    </div>
                </div>
            </div>
        </div>

        <div class="compress_section">
            <h3>Compress</h3>
            <div class="compress_tools">
                <div class="selection_tool">
                    <select name="format" id="format">
                        <option value="WebP">WebP</option>
                        <option value="MozJPEG">MozJPEG</option>
                        <option value="AVIF">AVIF</option>
                        <option value="Browser PNG">Browser PNG</option>
                    </select>
                </div>
            </div>
            <div class="quality_tools">
                <div class="tool_slide-resize">
                    <span>Quality:</span>
                    <input type="text" name="slideResize" value="50">
                </div>
                <input type="text" name="slideResize" value="50">
            </div>
        </div>
        
        <div class="footer_section">
            <div class="download_image">
                <button class="download-img bg-blue">
                    <i class="material-icons">system_update_alt</i>
                </button>
            </div>
            <div class="size-image">
                <span class="size">107 kB</span>
            </div>
        </div>
    `
  }
}
