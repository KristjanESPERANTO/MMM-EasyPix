/* global Module */

Module.register("MMM-EasyPix", {
  defaults: {
    picName: "face.gif", // .jpg, .gif, .png, etc. (animated gif's too!)
    maxWidth: "100%",
    sounds: ["1.mp3", "me2.mp3"], // mp3 audio file names in quotes separated by commas
    updateInterval: 30 * 60 * 1000, //  Updates display (in milliseconds) - Default: 30 * 60 * 1000 = 30 minutes
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
  },

  /* Add this function to the modules you want to control with voice.
     Must be the same as in "sentences" array in MMM-voice.js.
     Replace audio file with your own greeting.
  */

  notificationReceived (notification) {
    if (notification === "HIDE_LUCY") {
      this.hide(500);
    } else if (notification === "SHOW_LUCY") {
      this.show(1000);
    }

    if (notification === "HELLO_THERE_LUCY") {
      const sound = new Audio();
      sound.src = "modules/MMM-EasyPix/hello.mp3";
      sound.play();
    }

    /* So you don't hear the same greeting every time:
       Randomized sound files.
    */
    if (notification === "SHOW_LUCY") {
      const audioFiles = this.config.sounds;
      const randomFile =
        audioFiles[Math.floor(Math.random() * audioFiles.length)];
      const audio = new Audio(randomFile);
      audio.src = `modules/MMM-EasyPix/sounds/${randomFile}`;
      audio.play();
    }
  }
});
