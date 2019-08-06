import * as home from './action-types'

export const saveFormData = (datatype, value) => {
  return {
    type: home.SAVEFORMDATA,
    datatype,
    value
  }
}
