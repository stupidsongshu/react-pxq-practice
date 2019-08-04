import React from 'react'
import { NavLink } from 'react-router-dom'
// import CSSTransitionGroup from 'react-addons-css-transition-group'
import { CSSTransition } from 'react-transition-group'
import { is, fromJS } from 'immutable'
import './index.less'

class Header extends React.Component {
  state = {
    navState: false
  }

  toggleNav = () => {
    this.setState({
      navState: !this.state.navState
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.title !== this.props.title || nextState.navState !== this.state.navState) {
    //   return true
    // }
    // return false
    return !is(fromJS(nextProps), fromJS(this.props)) || !is(fromJS(nextState), fromJS(this.state))
  }

  // css动画组件设置为目标组件
  // FirstChild = props => {
  //   const childrenArray = React.Children.toArray(props.children);
  //   return childrenArray[0] || null;
  // }

  render() {
    console.log('header render')
    return (
      <header className="header-container">
        <span className="header-slide-icon icon-catalog" onClick={this.toggleNav}></span>
        <span className="header-title">{this.props.title}</span>
        {
          this.props.record && <NavLink to="/record" exact className="header-link icon-jilu"></NavLink>
        }
        {
          this.props.confirm && <NavLink to="/" exact className="header-link header-link-confim">确定</NavLink>
        }

        {/* <CSSTransitionGroup
          component={this.FirstChild}
          transitionName="nav"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {
            this.state.navState && <aside key='nav-slide' className="nav-slide-list" onClick={this.toggleNav}>
              <NavLink to="/" exact className="nav-link icon-jiantou-copy-copy">首页</NavLink>
              <NavLink to="/balance" exact className="nav-link icon-jiantou-copy-copy">提现</NavLink>
              <NavLink to="/helpcenter" exact className="nav-link icon-jiantou-copy-copy">帮助中心</NavLink>
            </aside>
          }
        </CSSTransitionGroup> */}

        <CSSTransition
          in={this.state.navState}
          classNames="my-nav"
          timeout={300}
          unmountOnExit
        >
          <aside key='nav-slide' className="nav-slide-list" onClick={this.toggleNav}>
            <NavLink to="/" exact className="nav-link icon-jiantou-copy-copy">首页</NavLink>
            <NavLink to="/balance" exact className="nav-link icon-jiantou-copy-copy">提现</NavLink>
            <NavLink to="/helpcenter" exact className="nav-link icon-jiantou-copy-copy">帮助中心</NavLink>
          </aside>
        </CSSTransition>
      </header>
    )
  }
}

export default Header
