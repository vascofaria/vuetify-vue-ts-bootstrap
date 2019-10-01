import Vue from 'vue';
import VueRouter from 'vue-router';
import { constantRouterMap } from '@/config/router.config';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: BASE_PATH,
    routes: constantRouterMap,
});

export function resetRouter() {
    const newRouter = new VueRouter({
        mode: 'history',
        base: BASE_PATH,
        routes: constantRouterMap,
    });
    // @ts-ignore
    router.matcher = newRouter.matcher;
}

export default router;
