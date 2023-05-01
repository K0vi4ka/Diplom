import { createRouter,createWebHashHistory } from "vue-router";
import UnautorizedPage from '@/components/Unautorized/UnautorizedPage.vue'
import EditorMain from '@/components/EditorComponent/EditorMain';
import PersonalPage from "@/components/PersonlPage"
import PageComponent from '@/components/PageComponent';

const routes = [
  {
    path: "/",
    component:UnautorizedPage,
  },
  {
    path: "/newsTime",
    component: UnautorizedPage,
  },
  {
    path: "/newsTime/editorMain",
    component: EditorMain
  },
  {
    path: "/newsTime/news/:value",
    component: PageComponent
  },
  {
    path : "/newsTime/profile",
    component: PersonalPage

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router





