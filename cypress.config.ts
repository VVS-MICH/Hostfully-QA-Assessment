import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
  baseUrl: "https://computer-database.gatling.io/computers",
  viewportWidth: 1920,
  viewportHeight: 1000,
  testIsolation: false,
  }
})