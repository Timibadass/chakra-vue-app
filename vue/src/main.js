import Vue from 'vue'
import App from './App.vue'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

import { faMedal } from '@fortawesome/free-solid-svg-icons'

Vue.use(Chakra, {
    icons: {
        iconPack: 'fa',
        iconSet: { faMedal }
    }
})

Vue.config.productionTip = false

new Vue({
    render: (h) => h(CThemeProvider, [h(CReset), h(App)]),
}).$mount('#app')