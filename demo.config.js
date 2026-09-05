const config = {
  address: '0.0.0.0',
  ipWhitelist: [],
  logLevel: ['INFO', 'LOG', 'WARN', 'ERROR', 'DEBUG'],
  modules: [
    {
      module: 'clock',
      position: 'top_left',
    },
    {
      module: 'MMM-EasyPix',
      position: 'middle_center',
      config: {
        picName: 'moon.gif',
        maxWidth: '75%',
      },
    },
    {
      module: 'MMM-EasyPix',
      position: 'bottom_left',
      config: {
        picName: 'forest.jpg',
        maxWidth: '40%',
      },
    },
  ],
}

/** ************* DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
  module.exports = config
}
