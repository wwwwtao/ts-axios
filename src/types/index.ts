export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'Delete' //删除
  | 'head'
  | 'HEAD' //头
  | 'options'
  | 'OPTIONS' //选项
  | 'put'
  | 'PUT' //放
  | 'patch'
  | 'PATCH' //补丁

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
}
