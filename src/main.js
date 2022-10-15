import { createApp } from 'vue'
import router from "@/router/router";

import App from './App.vue'
import UI from '@/components/UI'

import directives from '@/directives';
import store from "@/store";

const app = createApp(App);

UI.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive);
})

app
    .use(router)
    .use(store)
    .mount('#app')
