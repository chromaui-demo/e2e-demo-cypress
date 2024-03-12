import { defineConfig } from 'cypress'
import { installPlugin } from '@chromatic-com/cypress'

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      installPlugin(on, config)
    },
  },
})
