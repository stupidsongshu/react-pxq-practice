import * as home from './action-types'

let defaultState = {
  orderSum: '', //金额
  name: '', //姓名
  phoneNo: '', //手机号
  imgpath: '', //图片地址
}

export const formData = (state = defaultState, action = {}) => {
  console.log('reducer formData:', action.type)
  switch(action.type) {
    case home.SAVEFORMDATA:
      return {
        ...state,
        ...{
          [action.datatype]: action.value
        }
      }
      // break
    default:
      return state
  }
}
