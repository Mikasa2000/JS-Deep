export function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    // vm.$options 获取用户的配置
    this.$options = options
  }
}