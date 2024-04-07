import { createApp } from "vue";
import Cookies from 'js-cookie'

import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import router from '@/router/index'

import App from "./App.vue";

const app = createApp(App);
app.use(router)
app.use(ElementPlus, {
    locale: locale,
    // 支持 large、default、small
    size: Cookies.get('size') || 'default'
  })
app.mount("#app");
