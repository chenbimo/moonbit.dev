import DefaultTheme from 'vitepress/theme';
import './styles/variables.scss';
import './styles/custom.scss';
import homeMore from './components/homeMore.vue';

export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from createApp()
        // router is VitePress' custom router (see `router.js`)
        // siteData is a ref of current site-level metadata
        app.component('homeMore', homeMore);
    }
};
