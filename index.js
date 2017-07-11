import presetEnv from 'babel-preset-env'
import presetStage0 from 'babel-preset-stage-0'
import presetReact from 'babel-preset-react'
import pluginAddModuleExports from 'babel-plugin-add-module-exports'
import pluginTransformDecoratorsLegacy from 'babel-plugin-transform-decorators-legacy'

export default {
  presets: [presetEnv, presetStage0, presetReact],
  plugins: [pluginAddModuleExports, pluginTransformDecoratorsLegacy],
}
