import { initMixin } from "./init.js" 
function Vue(options) { //options就是用户的选项
  this._init(options);
}

initMixin(Vue)

export default Vue