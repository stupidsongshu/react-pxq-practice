import React from 'react'
import { connect } from 'react-redux'
import { saveFormData } from '@/store/home/action'
import PublicHeader from '@/components/header'

import './index.less'

class Home extends React.Component {
  handleInput(type, event) {
    let value = event.target.value
    console.log(value)
    switch(type) {
      case 'orderSum':
        value = value.replace(/\D/, '')
        break
      case 'name':
        break
      case 'phoneNo':
        break
      default:
    }
    this.props.saveFormData(type, value)
  }

  toProduct() {
    // console.log(this.props)
    this.props.history.push('/product')
  }

  render() {
    const { formData } = this.props
    return (
      <main className="home-container common-con-top">
        <PublicHeader title="首页" record />

        <p className="common-title">请录入您的信息</p>
        <form className="home-form">
          <div className="home-form-item">
            <span>销售金额：</span>
            <input
              type="text"
              placeholder="请输入订单金额"
              value={formData.orderSum}
              onChange={this.handleInput.bind(this,'orderSum')}
            />
          </div>
          <div className="home-form-item">
            <span>客户姓名：</span>
            <input
              type="text"
              placeholder="请输入客户姓名"
              value={formData.name}
              onChange={this.handleInput.bind(this, 'name')}
            />
          </div>
          <div className="home-form-item">
            <span>客户电话：</span>
            <input
              type="text"
              maxLength="13"
              placeholder="请输入客户电话"
              value={formData.phoneNo}
              onChange={this.handleInput.bind(this, 'phoneNo')}
            />
          </div>
          <button onClick={this.toProduct.bind(this)}>product</button>
        </form>
      </main>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    formData: state.formData,
    proData: state.proData
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     saveFormData: function(datatype, value) {
//       dispatch({ type: 'SAVEFORMDATA', datatype, value })
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)

export default connect(mapStateToProps, {
  saveFormData
})(Home)
