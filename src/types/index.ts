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
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
/* 数据：any
  状态：number
  状态文本：string
  标题：any
  配置：axiosrequestconfig
  请求：any */
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {

}
