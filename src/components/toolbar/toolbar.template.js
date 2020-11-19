export function createToolbar(download) {
  return `
        <div class="edit_section">
            <div class="title bg-dark">
                <h3>Edit</h3>
            </div>
            <div class="panel__resize">
                <div class="panel__tool_title">
                    <input class="resize" name="resize" type="checkbox"
                        data-type="deploy">
                    Resize
                </div>
                <div class="panel__tools none">
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
                            <option value="25%">25%</option>
                            <option value="33.3%">33.3%</option>
                            <option value="50%">50%</option>
                            <option value="100%"
                                selected="selected">100%</option>
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
                    <input class="reduce-palette" name="reduce" type="checkbox"
                        data-type="deploy">
                    Reduce palette
                </div>
                <div class="panel__tools none">
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
                    <select name="format" id="format" data-type="format">
                        <option value="Original">Original image</option>
                        <option value="PNG">Browser PNG</option>
                        <option value="JPEG">Browser JPEG</option>
                        <option value="WebP">Browser WebP</option>
                    </select>
                </div>
                <div class="tool__quality">
                    <div class="panel__tool quality">
                        <span>Quality:</span>
                        <input 
                            class="input-size" 
                            type="text" name="slideResize" 
                            value="0.75"
                            data-range="input"
                        >
                    </div>
                    <input type="range" class="input-range" data-type="range"
                            min="0" max="1" value="0.75" step="0.01">
                </div>
            </div>
        </div>
        
        <div class="size__section bg-dark">
            ${download}
        </div>
    `
}
