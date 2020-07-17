import { faMedal } from '@fortawesome/free-solid-svg-icons'
// import the theme
import themeFile from './plugins/theme-file'
export default {
    modules: [
        '@chakra-ui/nuxt',
        '@nuxtjs/emotion'
    ],
    chakra: {
        // add it to chakra config
        extendTheme: themeFile,
        icons: {
            iconPack: 'fa',
            iconSet: { faMedal }
        }
    }
}