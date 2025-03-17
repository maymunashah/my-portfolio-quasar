const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/techfolio', component: () => import('components/TechfolioPage.vue') },
      { path: '/portfolio', component: () => import('components/PortfolioPage.vue') },
      { path: '/services', component: () => import('components/ServicesPage.vue') },
      { path: '/contactme', component: () => import('components/ContactMe.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
