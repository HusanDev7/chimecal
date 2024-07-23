import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },

    {
      path: '/menu/',
      name: 'menu',
      component: () => import('@/views/MenuView/MenuView.vue')
    },

    {
      path: '/info/',
      name: 'info',
      component: () => import('@/pages/Info.vue')
    },

    {
      path: '/thems/',
      name: 'thems',
      component: () => import('@/pages/Thems.vue')
    },

    {
      path: '/control-work/',
      name: 'control-work',
      component: () => import('@/pages/ControlWork.vue')
    },

    {
      path: '/practices/',
      name: '/practices/',
      component: () => import('@/pages/Practices.vue')
    },

    {
      path: '/labs/',
      name: 'labs',
      component: () => import('@/pages/Labs.vue')
    },

    {
      path: '/control-work-1/',
      name: '/control-work-1/',
      component: () => import('@/views/ControlWorkView/ControlWork-1/ControlWorkOne.vue')
    },

    {
      path: '/control-work-2/',
      name: '/control-work-2/',
      component: () => import('@/views/ControlWorkView/ControlWork-2/ControlWorkTwo.vue')
    },

    {
      path: '/control-work-3/',
      name: '/control-work-3/',
      component: () => import('@/views/ControlWorkView/ControlWork-3/ControlWorkThree.vue')
    },

    {
      path: '/control-work-4/',
      name: '/control-work-4/',
      component: () => import('@/views/ControlWorkView/ControlWork-4/ControlWorkFour.vue')
    },

    {
      path: '/control-work-5/',
      name: '/control-work-5/',
      component: () => import('@/views/ControlWorkView/ControlWork-5/ControlWorkFive.vue')
    },

    {
      path: '/control-work-6/',
      name: '/control-work-6/',
      component: () => import('@/views/ControlWorkView/ControlWork-6/ControlWorkSix.vue')
    },

    {
      path: '/control-work-7/',
      name: '/control-work-7/',
      component: () => import('@/views/ControlWorkView/ControlWork-7/ControlWorkSeven.vue')
    },

    {
      path: '/control-work-8/',
      name: '/control-work-8/',
      component: () => import('@/views/ControlWorkView/ControlWork-8/ControlWorkEight.vue')
    },

    {
      path: "/video-1",
      name: "video-1",
      component: () => import("@/components/videoOne/VideoOne.vue")
    },

    {
      path: "/video-2/",
      name: "video-2",
      component: () => import("@/components/videoTwo/VideoTwo.vue")
    },

    {
      path: "/video-3/",
      name: "video-3",
      component: () => import("@/components/videoThree/VideoThree.vue")
    },


    {
      path: "/video-4/",
      name: "video-4",
      component: () => import("@/components/videoThree/VideoThree.vue")
    },

    {
      path: "/video-5/",
      name: "video-5",
      component: () => import("@/components/videoFive/VideoFive.vue")
    },

    {
      path: "/video-6/",
      name: "video-6",
      component: () => import("@/components/videoSix/VideoSix.vue")
    },

    {
      path: "/video-7/",
      name: "video-7",
      component: () => import("@/components/videoSevan/VideoSevan.vue")
    },

    {
      path: "/video-8/",
      name: "video-8",
      component: () => import("@/components/videoEifght/VideoEifght.vue")
    },

    {
      path: "/video-9/",
      name: "video-9",
      component: () => import("@/components/videoNine/VideoNine.vue")
    },

    {
      path: "/video-10/",
      name: "video-10",
      component: () => import("@/components/videoTen/VideoTen.vue")
    },

  ]
})

export default router
