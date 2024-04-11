
import { createRouter, createWebHistory } from 'vue-router';
export const constantRoutes = [
  {
    path:'',
    redirect:'/index',
    children:[
      {
        path:'index',
        component:()=>import("@/views/index/index"),
        name:'Index',
        meta:{title:"首页",icon:"dashboard",affix:true}
      }
    ]
  },
  {
    path:"/login",
    component: () => import("@/views/login")
  },
  {
    path:"/register",
    component: () => import("@/views/register")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
