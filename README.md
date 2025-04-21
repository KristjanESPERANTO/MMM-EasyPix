# MMM-EasyPix

**MMM-EasyPix** is a module for [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror). It's the easiest way to show pictures on your screen.

Supported file formats: JPG, PNG, SVG and GIF (even animated GIFs).

Pi 1 users should use static pictures or small sized GIFs.

## Where your picture files go

Your picture files go in the "pix" folder inside the MMM-EasyPix module folder.

## Installation

Clone this module into your MagicMirror² modules folder:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/KristjanESPERANTO/MMM-EasyPix
```

## Configuration

```js
  {
    module: "MMM-EasyPix",
    position: "top_center",
    config: {
      picName: "moon.gif",            // Enter the picture file name. You can even use a direct internet URL to an image.
      maxWidth: "75%",                // Size picture precisely. Retains aspect ratio.
      sounds: ["1.mp3", "me2.mp3"],   // mp3 audio file names in quotes separated by commas for Hello-Lucy
      updateInterval: 30 * 60 * 1000, // Updates display (Milliseconds) - Default: 30 * 60 * 1000 = 30 minutes
      animationSpeed: 3000,           // Speed of the update animation. (Milliseconds)
      }
    },
```

## Update

Go to the module’s directory and pull the latest version from GitHub:

```bash
cd ~/MagicMirror/modules/MMM-EasyPix
git pull
```

## How to use it multiple times

- Simply make multiple entries in your config and name a different picture.

## Works with Hello-Lucy

This module works also with [Hello-Lucy](https://github.com/mykle1/Hello-Lucy) voice enhancement (required for sound).

## Example images

| name                                             | source                                                                                                     | creator        | license                                                                 |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------- |
| [earth.gif](pix/earth.gif)                       | [pixabay](https://pixabay.com/gifs/earth-world-planet-space-rotation-4590/)                                | placidplace    | [Pixabay Content License](https://pixabay.com/service/license-summary/) |
| [forest.jpg](pix/forest.jpg)                     | [unsplash](https://unsplash.com/photos/silhouette-of-forest-during-nighttime-g9qwoPiS0nY)                  | bekmanis       | [Unsplash License](https://unsplash.com/license)                        |
| [lunar-eclipse.jpg](pix/lunar-eclipse.jpg)       | [unsplash](https://unsplash.com/photos/timelapse-photo-of-total-lunar-eclipse-0hgiQQEi4ic)                 | jakehills      | [Unsplash License](https://unsplash.com/license)                        |
| [moon.gif](pix/moon.gif)                         | [pixabay](https://pixabay.com/gifs/moon-space-rotation-star-earth-4589/)                                   | placidplace    | [Pixabay Content License](https://pixabay.com/service/license-summary/) |
| [plant.jpg](pix/plant.jpg)                       | [unsplash](https://unsplash.com/photos/green-plant-in-clear-glass-vase-Faf6gzEI3Do)                        | alexkondratiev | [Unsplash License](https://unsplash.com/license)                        |
| [solar-eclipse.jpg](pix/solar-eclipse.jpg)       | [unsplash](https://unsplash.com/photos/solar-eclipse-VIcTzkzNZR8)                                          | jordonsconner  | [Unsplash License](https://unsplash.com/license)                        |
| [standing-on-hill.jpg](pix/standing-on-hill.jpg) | [unsplash](https://unsplash.com/photos/silhouette-of-man-standing-on-hill-during-starry-night-C6duwascOEA) | joshuaearle    | [Unsplash License](https://unsplash.com/license)                        |
| [tropical-beach.gif](pix/tropical-beach.gif)     | [pixabay](https://pixabay.com/gifs/tropical-beach-nature-cinemagraph-10201/)                               | MXJfiles       | [Pixabay Content License](https://pixabay.com/service/license-summary/) |
| [world-peace.jpg](pix/world-peace.jpg)           | [unsplash](https://unsplash.com/photos/world-peace-text-printed-on-wall-L4jb3ubqsmM)                       | good_citizen   | [Unsplash License](https://unsplash.com/license)                        |

## Project status

Since the original author of the module, [mykle1](https://github.com/mykle1), is no longer active, I forked the module. I fixed a few issues and will try to keep the module working in the future.

**This module is in maintenance mode.**

## Contributing

If you find any problems, bugs or have questions, please [open a GitHub issue](https://github.com/KristjanESPERANTO/MMM-EasyPix/issues) in this repository.

Pull requests are of course also very welcome 🙂

### Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

### Developer commands

- `npm install` - Install development dependencies.
- `npm run lint` - Run linting and formatter checks.
- `npm run lint:fix` - Fix linting and formatter issues.
- `npm run test` - Run linting and formatter checks + run spelling check.
- `npm run test:spelling` - Run spelling check.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Changelog

All notable changes to this project will be documented in the [CHANGELOG.md](./CHANGELOG.md) file.
