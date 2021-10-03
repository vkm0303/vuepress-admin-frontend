import { createRouter, createWebHistory } from "vue-router";
import Layout from "../views/Layout.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard"
    }, {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: "首页"
                },
                component: () => import(
                    /* webpackChunkName: "dashboard" */
                    "../views/Dashboard.vue")
            }, {
                path: "/markdown",
                name: "markdown",
                meta: {
                    title: "写博客"
                },
                component: () => import(
                    /* webpackChunkName: "charts" */
                    "../views/Markdown.vue")
            }, {
                path: "/404",
                name: "404",
                meta: {
                    title: "找不到页面"
                },
                component: () => import(/* webpackChunkName: "404" */
                    "../views/404.vue")
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: "登录"
        },
        component: () => import(
            /* webpackChunkName: "login" */
            "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vuepress博客管理`;
    const role = localStorage.getItem("username");
    if (!role && to.path !== "/login") {
        next("/login");
    } else {
        next();
    }
});

export default router;