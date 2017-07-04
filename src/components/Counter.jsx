import React from 'react'

//親コンポーネントの作成
//export defaultで複数の関数を扱いたいときはclassで宣言すると良い
export default class Countercom extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment.bind(this)}>+</button>
        <button onClick={this.props.decrement.bind(this)}>-</button>
      </div>
    );
  }
};
