import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCounts: 0,
    headsCounts: 0,
    tailsCounts: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 1) {
      this.setState(prevState => ({
        totalCounts: prevState.totalCounts + 1,
        tailsCounts: prevState.tailsCounts + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    } else {
      this.setState(prevState => ({
        totalCounts: prevState.totalCounts + 1,
        headsCounts: prevState.headsCounts + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    }
  }

  render() {
    const {totalCounts, headsCounts, tailsCounts, imageUrl} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} className="head-tail-img" alt="toss result" />
          <button
            type="button"
            onClick={this.onClickTossCoin}
            className="tossCoinButton"
          >
            Toss Coin
          </button>
          <div className="discription-container">
            <p className="counts">Total:{totalCounts}</p>
            <p className="counts">Heads:{headsCounts}</p>
            <p className="counts">Tails:{tailsCounts}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
