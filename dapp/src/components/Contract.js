import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';

class Contract extends Component {
  // 將 read contract method 透過 redux 儲存與 saga 非同步呼叫，將 web3 當成 API 使用
  render() {
    const name = this.props.cryptoHerosToken && <p>{this.props.cryptoHerosToken.name}</p>;
    const symbol = this.props.cryptoHerosToken && <p>{this.props.cryptoHerosToken.symbol}</p>;
    const progress = this.props.isFetching && <LinearProgress />
    return (
      <div style={{padding: '1em', margin: '1em', border: '1px solid black'}}>
        <h1>Contract</h1>
        <div>{progress}</div>
        <button onClick={() => this.props.handleCryptoHerosTokenName(this.props.web3.version.network)}>Name</button>
        <button onClick={() => this.props.handleCryptoHerosTokenSymbol(this.props.web3.version.network)}>Symbol</button>
        <div>
          {name}
          {symbol}
        </div>
      </div>
    );
  }
}

export default Contract;