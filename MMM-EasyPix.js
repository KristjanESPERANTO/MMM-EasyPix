/* global Module */

Module.register("MMM-EasyPix", {
  defaults: {
    picName: "face.gif", // .jpg, .gif, .png, etc. (animated gif's too!)
    maxWidth: "100%",
    updateInterval: 30 * 60 * 1000, // Updates display (in milliseconds) - Default: 30 minutes
    animationSpeed: 3000 // Speed of the update animation (in milliseconds).
  },

  start () {
    const that = this;
    this.url = "";

    setInterval(() => {
      that.updateDom(that.config.animationSpeed || 0); // use config.animationSpeed or revert to zero
    }, this.config.updateInterval);
  },

  getStyles () {
    return ["MMM-EasyPix.css"];
  },

  getDom () {
    const wrapper = document.createElement("div");
    const image = document.createElement("img");

    if (this.config.picName.startsWith("http")) {
      image.src = this.config.picName;
    } else {
      image.src = `/modules/MMM-EasyPix/pix/${this.config.picName}`;
    }

    image.className = "mmm-easypix-photo";
    image.style.maxWidth = this.config.maxWidth;
    wrapper.appendChild(image);
    return wrapper;
  },

  randomImgLink () {
    const myImages = "/modules/MMM-EasyPix/pix/";

    let ry = Math.floor(Math.random() * "/modules/MMM-EasyPix/pix/".length);
    if (ry === 0) {
      ry = 1;
    }
    document.write(`<img src="${myImages[ry]}" border=0>`);
  }
});
