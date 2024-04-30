import { createApp } from "vue";
import Cookies from 'js-cookie'

// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/components/SvgIcon/svgicon'

import './permission.js'
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import router from '@/router/index'

import App from "./App.vue";

const app = createApp(App);
app.use(router)
app.use(elementIcons)
app.component('svg-icon', SvgIcon)
app.use(ElementPlus, {
    locale: locale,
    // 支持 large、default、small
    size: Cookies.get('size') || 'default'
  })
app.mount("#app");
