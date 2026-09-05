import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import vm from 'node:vm'

const moduleSource = await readFile(new URL('../MMM-EasyPix.js', import.meta.url), 'utf8')

function loadModule({ setInterval: setIntervalFunction = setInterval, clearInterval: clearIntervalFunction } = {}) {
  let registeredModule
  const context = {
    clearInterval: clearIntervalFunction,
    document: {
      createElement(tagName) {
        return {
          tagName,
          style: {},
          appendChild(child) {
            this.child = child
          },
        }
      },
    },
    Module: {
      register(name, moduleDefinition) {
        registeredModule = moduleDefinition
      },
    },
    setInterval: setIntervalFunction,
  }

  vm.runInNewContext(moduleSource, context)
  return registeredModule
}

function createModule(config = {}, timerFunctions) {
  const moduleDefinition = loadModule(timerFunctions)
  return {
    ...moduleDefinition,
    config: {
      ...moduleDefinition.defaults,
      ...config,
    },
  }
}

test('renders a local picture', () => {
  const moduleInstance = createModule({ picName: 'moon.gif' })
  const dom = moduleInstance.getDom()

  assert.equal(dom.child.src, '/modules/MMM-EasyPix/pix/moon.gif')
})

test('renders an external picture URL', () => {
  const moduleInstance = createModule({ picName: 'https://example.com/picture.jpg' })
  const dom = moduleInstance.getDom()

  assert.equal(dom.child.src, 'https://example.com/picture.jpg')
})

test('falls back to the default picture for an invalid name', () => {
  const moduleInstance = createModule({ picName: null })
  const dom = moduleInstance.getDom()

  assert.equal(dom.child.src, '/modules/MMM-EasyPix/pix/face.gif')
})

test('clears the update timer when stopped', () => {
  let updateCallback
  let clearedTimer
  const timer = { id: 1 }

  const moduleInstance = createModule({}, {
    setInterval(callback) {
      updateCallback = callback
      return timer
    },
    clearInterval(timerToClear) {
      clearedTimer = timerToClear
    },
  })

  moduleInstance.start()
  moduleInstance.stop()

  assert.equal(typeof updateCallback, 'function')
  assert.equal(clearedTimer, timer)
  assert.equal(moduleInstance.updateTimer, null)
})
