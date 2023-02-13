/**
 * Vue Router 的实现思路主要有以下几个方面：

    路由配置：开发者可以在 Vue 应用中配置多个路由，每个路由对应一个 URL 路径和一个组件。

    路由匹配：当用户请求一个 URL 时，Vue Router 会从配置的路由中匹配到对应的路由配置，并根据该路由配置渲染对应的组件。

    路由导航：Vue Router 支持通过编程的方式进行路由导航，从而控制 URL 的变化和组件的渲染。

    状态管理：Vue Router 维护了路由的状态，包括当前路由的信息和导航历史记录，从而方便管理和控制路由的状态。

    实现 Vue Router 主要通过两个重要的概念：路由映射表和路由守卫。路由映射表是把 URL 路径映射到组件的过程，路由守卫则是在每次路由导航时执行的钩子函数，它可以对路由导航进行控制和定制。
 */
class HashRouter {
    constructor({routes=[]}) {
        this.routes = routes // 路由表
        this.currenHash = '' // 当前路由
        this.refresh = this.refresh.bind(this) // hash 改变触发的回调， 这里改this是为调用的时候比较方便
        window.addEventListener('load', this.refresh)
        window.addEventListener('hashchange', this.refresh)
    }
    /**
     * 
     * @param {*} url 根据 url 拿到 # 后面的东西
     * @returns # 后面的东西
     */
    getUrlPath(url='') {
        console.log(url, 'url')
        return url.indexOf('#')>-1 ? url.slice(url.indexOf('#') + 1) : '/'
    }
    refresh(eventCHange) {
        let newHash = '', oldHash = null;
        console.log(eventCHange)
        if (eventCHange.newURL) {
            newHash = this.getUrlPath(eventCHange.newURL || '')
            oldHash = this.getUrlPath(eventCHange.oldURL || '')
        } else {
            newHash = this.getUrlPath(window.location.hash)
        }
        this.currenHash = newHash
        setTimeout(() =>{
            this.machComponent() // 匹配组件
        })
    }
    /**
     * 根据路由匹配对应的页面（组件）
     */
    machComponent() {
        let currenRoute = this.routes.find(item => item.path === this.currenHash)
        if (!currenRoute) {
            currenRoute = this.routes.find(item => item.path === '/')
        }
        const app = document.querySelector('#app')
        console.log(app, currenRoute)
        app && (app.innerHTML = currenRoute.component)
    }
}

