import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Countercom from '../components/Counter.jsx';
import * as Actions from '../actions/action';

//ReactとReduxを繋げる部分

//mapStateToPropsはReactに対してStoreの情報を渡すための関数
//stateが変更されて，それがstoreに伝えられたときに呼び出される
function mapStateToProps(state) {
  console.log(state.count)
  return {
    count: state.count
  };
}

//mapDispatchToPropsはReactがStoreの情報を変更するための関数
//storeにstateの変更を伝える
function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps")
  return bindActionCreators(Actions, dispatch)
}

//connectによりCommentBoxコンポーネントのpropsで使えるようになる
export default connect(mapStateToProps, mapDispatchToProps)(Countercom)
