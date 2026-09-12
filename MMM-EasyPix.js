/* global Module */

Module.register('MMM-EasyPix', {
  defaults: {
    picName: 'face.gif', // .jpg, .gif, .png, etc. (animated gif's too!)
    maxWidth: '100%',
    updateInterval: 30 * 60 * 1000, // Updates display (in milliseconds) - Default: 30 minutes
    animationSpeed: 3000, // Speed of the update animation (in milliseconds).
    cacheBuster: false // Disable cache to update pictures updated under the same file name e.g. from cameras
  },

  start() {
    this.updateTimer = setInterval(() => {
      this.updateDom(this.config.animationSpeed || 0) // Use config.animationSpeed or revert to zero
    }, this.config.updateInterval)
  },

  stop() {
    clearInterval(this.updateTimer)
    this.updateTimer = null
  },

  getStyles() {
    return ['MMM-EasyPix.css']
  },

  getDom() {
    const wrapper = document.createElement('div')
    const image = document.createElement('img')
    const picName = typeof this.config.picName === 'string' && this.config.picName
      ? this.config.picName
      : this.defaults.picName

    if (picName.startsWith('http')) {
      // disable cache to update pictures updated under the same file name e.g. from cameras
      if (this.config.cacheBuster) {
        image.src = picName + "?cb=" + new Date().getTime()
      } else {
        image.src = picName
      }
    }
    else {
      image.src = `/modules/MMM-EasyPix/pix/${picName}`
    }

    image.className = 'mmm-easypix-photo'
    image.style.maxWidth = this.config.maxWidth
    wrapper.appendChild(image)
    return wrapper
  },
})
