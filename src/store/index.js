import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import qrDialog from './modules/qr-dialog'
import appNav from './modules/app-nav'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    qrDialog,
    appNav
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})