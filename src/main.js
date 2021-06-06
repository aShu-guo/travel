// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// App.vue App.js App.json
// import App from './App'
import router from './router'
// import home from '@/components/'
// import List from '@/components/list'
// 解决移动端点击事件延迟300ms的问题
import FastClick from 'fastclick'
// 解决标签默认style的问题
import '@/assets/style/reset.css'
import 'styles/style/iconfont.css'

// 解决1像素边框的问题
import '@/assets/style/border.css'
import TplHeader from '@/components/header'
Vue.config.productionTip = false
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app-test',
  router,
  components: {TplHeader},
  template: '<tpl-header/>'
})
