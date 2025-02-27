import type { UserConfig } from 'vite'

export default {
  base: './',
  build: {
    outDir: 'docs'
  },
  test: {
    browser: {
      enabled: true,
      instances: [
        {browser: 'chromium'}
      ]
    }
  }
} satisfies UserConfig