import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MiscsManager from "@/views/MiscsManager";
import AddMisc from "@/views/AddMisc";
import EditMisc from "@/views/EditMisc";
import ViewMisc from "@/views/ViewMisc";
import PageNotFound from "@/views/PageNotFound";

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/Miscs",
    component: HomeView
  },
  {
    path: '/Miscs',
    name: 'MiscsManager',
    component: MiscsManager
  },
  {
    path: '/Miscs/add',
    name: 'AddMisc',
    component: AddMisc
  },
  {
    path: '/Miscs/edit/:MiscId',
    name: 'EditMisc',
    component: EditMisc
  },
  {
    path: '/Miscs/view/:MiscId',
    name: 'ViewMisc',
    component: ViewMisc
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
