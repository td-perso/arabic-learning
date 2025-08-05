/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

router.addRoute({ path: '/:catchAll(.*)', redirect: { path: '/' } })

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
