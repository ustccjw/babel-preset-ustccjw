const env = process.env.NODE_ENV || 'development'

module.exports = (context, opts = {}) => {
  const { modules = 'commonjs', browsers = ['iOS >= 6.0', 'Android >= 4.0'] } = opts
  const presets = [
    require.resolve('@babel/preset-stage-0'),
    require.resolve('@babel/preset-react'),
  ]
  const plugins = []

  if (env === 'test') {
    presets.unshift([
      require.resolve('@babel/preset-env'), {
        targets: {
          node: '9.0.0',
        },
      },
    ])
  } else {
    presets.unshift([
      require.resolve('@babel/preset-env'), {
        targets: {
          browsers,
        },
        modules,
      },
    ])

    plugins.push([
      require.resolve('@babel/plugin-transform-runtime'), {
        helpers: false,
        polyfill: false,
        regenerator: true,
      },
    ])
  }
  return { presets, plugins }
}
