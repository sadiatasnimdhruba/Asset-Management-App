
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Add-user', component: () => import('pages/Add-user.vue') },
      { path: '/Assign-equipments', component: () => import('pages/Assign-equipments.vue') },
      { path: '/Category-delete', component: () => import('pages/Category-delete.vue') },
      { path: '/Category-edit', component: () => import('pages/Category-edit.vue') },
      { path: '/Delete-item', component: () => import('pages/Delete-item.vue') },
      { path: '/Discard-item', component: () => import('pages/Discard-item.vue') },
      { path: '/Edit-equipment', component: () => import('pages/Edit-equipment.vue') },
      { path: '/Equipments-category', component: () => import('pages/Equipments-category.vue') },
      { path: '/Equipments', component: () => import('pages/Equipments.vue') },
      { path: '/Login', component: () => import('pages/Login.vue') },
      { path: '/Mark-defective', component: () => import('pages/Mark-defective.vue') },
      { path: '/Navigation', component: () => import('pages/Navigation.vue') },
      { path: '/User-equipments', component: () => import('pages/User-equipments.vue') },
      { path: '/Add-equipment', component: () => import('pages/Add-equipment.vue') },
      { path: '/Users', component: () => import('pages/Users.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
