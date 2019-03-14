import { TOGGLE_QR_DIALOG } from '../types'

const state = {
    // 通过使用 this.$store.state.qrDialog.opened 访问
    opened: false
}

const getters = {}

const mutations = {
    // 通过使用 this.$store.commit('qrDialog/TOGGLE_QR_DIALOG') 改变弹出框显示状态
    [TOGGLE_QR_DIALOG] (state) {
        state.opened = !state.opened
    }
}

const actions = {
    // 通过 Action 提交 mutation，而不是直接变更状态
    // 通过 this.$store.dispatch('qrDialog/toggleQrDialog') 分发
    toggleQrDialog ({ commit }) {
        commit('TOGGLE_QR_DIALOG')
    }
}

const namespaced = true

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced,
}
