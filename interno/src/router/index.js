import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue';
import NotFound from '@/pages/NotFound.vue';




const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectPage,
  },
    {
    path: '/projectDetails',
    name: 'ProjectDetails',
    component: ProjectDetailsPage,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
  },
    {
    path: '/blogDetails',
    name: 'BlogDetails',
    component: BlogDetailsPage,
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFound,
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router