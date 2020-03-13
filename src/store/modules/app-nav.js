import { TOGGLE_NAV_DROPDOWN } from '../types'

const state = {
    // 通过使用 this.$store.state.appNav.opened 访问
    opened: false
}

const getters = {}

const mutations = {
    // 通过使用 this.$store.commit('appNav/toggleNavDropdown') 改变弹出框显示状态
    [TOGGLE_NAV_DROPDOWN] (state) {
        state.opened = !state.opened
    }
}

const actions = {
    // 通过 Action 提交 mutation，而不是直接变更状态
    // 通过 this.$store.dispatch('appNav/toggleNavDropdown') 分发
    toggleNavDropdown ({ commit }) {
        commit('TOGGLE_NAV_DROPDOWN')
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
