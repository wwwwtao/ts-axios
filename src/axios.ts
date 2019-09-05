import { AxiosStatic, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'
import CancelToken from './cancel/CancelToken'
import Cancel, { isCancel } from './cancel/Cancel'

function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosStatic
}

const axios = createInstance(defaults)

axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config))
}

axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel

export default axios

/* 在 createInstance 工厂函数的内部，我们首先实例化了 Axios 实例 context，
接着创建instance 指向 Axios.prototype.request 方法，并绑定了上下文 context；
接着通过 extend 方法把 context 中的原型方法和实例方法全部拷贝到 instance 上，这样就实现了一个混合对象：
instance 本身是一个函数，又拥有了 Axios 类的所有原型和实例属性，
最终把这个 instance 返回。由于这里 TypeScript 不能正确推断 instance 的类型，我们把它断言成 AxiosInstance 类型。

这样我们就可以通过 createInstance 工厂函数创建了 axios，
当直接调用 axios 方法就相当于执行了 Axios 类的 request 方法发送请求，
当然我们也可以调用 axios.get、axios.post 等方法 */
