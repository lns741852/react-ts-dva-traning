import dva from 'dva'
import router from  './router'
import './index.css'

const app = dva()

app.router(router)

app.start("#root")