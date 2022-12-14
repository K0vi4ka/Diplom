import { createRouter,createWebHashHistory } from "vue-router";
import UnautorizedPage from '@/components/Unautorized/UnautorizedPage.vue'
import EditorMain from '@/components/EditorComponent/EditorMain'

const routes = [
  {
    path: "",
    component: UnautorizedPage
  },
  {
    path: "/editorMain",
    component: EditorMain
  },
  // {
  //   path: "/NewsTime",
  //   component: 
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router





