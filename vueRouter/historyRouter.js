/**
 * hashRouter 实现思路：
 * 1.监听 hashchange 、load 事件
 * 2.触发事件的时候：拿到新的hash
 * 3.根据新的hash 到路由表匹配对应的路由组件（页面）
 * 4.把vue 根组件替换成 匹配上的路由组件(页面)
 * 
 * historyRouter 主要依靠的 全局的 history对象 
 * 1.  pushState replaceState新方法
 */