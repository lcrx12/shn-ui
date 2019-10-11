import vueDragResize from '../components/vue-drag-resize-demo'
import vueCropper from '../components/vue-cropper-demo'
import vueCookies from '../components/vue-cookies-demo'
import vueWordCloud from '../components/vue-word-cloud-demo'

export default [{
        path: '/component/vue-drag-resize',
        name: 'vueDragResize',
        component: vueDragResize,
        meta: {
            title: '插件| vue-drag-resize'
        }
    },
    {
        path: '/component/vue-cropper',
        name: 'vueCropper',
        component: vueCropper,
        meta: {
            title: '插件| vue-cropper'
        }
    },
    {
        path: '/component/vue-cookies',
        name: 'vueCookies',
        component: vueCookies,
        meta: {
            title: '插件| vue-cookies'
        }
    },
    {
        path: '/component/vue-word-cloud',
        name: 'vueWordCloud',
        component: vueWordCloud,
        meta: {
            title: '插件| vue-word-cloud'
        }
    }
]