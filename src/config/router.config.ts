import { HomeLayout, BoardLayout } from '@/layouts/index.ts';

import NotFoundView from '@/views/NotFoundView.vue';

export const constantRouterMap = [
  {
    path: '/',
    component: BoardLayout,
    name: 'index',
    meta: { title: '', },
    children: [
      {
        path: 'welcome',
        component: HomeLayout,
        name: 'WELCOME',
        meta: { title: 'WELCOME', icon: 'list', fullpath: '/welcome', },
      },
    ],
  },
  {
      path: '*',
      name: 'http404',
      component: NotFoundView,
      meta: { title: 'Page Not Found', },
  },
];
