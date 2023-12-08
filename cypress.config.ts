import { defineConfig } from 'cypress'
import { archiveCypress } from '@chromaui/test-archiver/cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        archiveCypress,
      })
    },
  },
})
