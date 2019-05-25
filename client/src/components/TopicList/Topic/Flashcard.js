import React from 'react'
import './Flashcard.css'
import { setTimeout } from 'timers';

class Flashcard extends React.Component {
  constructor(props) {
    super(props)
    const style2 = {
      width: '200px',
      height: '200px',
      float: 'left',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
    const style1 = {
      ...style2,
      margin: '10px',
    }
    this.state = {
      flashcard: this.props.flashcard,
      onWord: true,
      style1,
      style2
    }
  }

  onChange = async () => {
    let t = 200
    const tempFunc = async () => {
      if (t > -200) {
        setTimeout(async () => {
          t = t - 10

          await this.setState({
            style2: {
              ...this.state.style2,
              height: `${Math.abs(t)}px`
            },
            flashcard: {}
          })
          tempFunc(t)
        }, 1)
      } else {
        this.setState({
          flashcard: this.props.flashcard,
          onWord: !this.state.onWord,
          style2: {
            ...this.state.style2,
            backgroundColor: !this.state.onWord ? '#e0a800' : 'inherit'
          }
        })
      }
    }

    tempFunc()
  }

  render() {
    const { flashcard } = this.state
    return (
      <div style={this.state.style1}>
        <button type="button" className="btn btn-warning flashcard" style={this.state.style2} onClick={this.onChange}>
          <h2>{this.state.onWord ? <p>{flashcard.word}</p> : (
            <p>
              {flashcard.meaning}
            </p>
          )}</h2>
        </button>
      </div>
    )
  }
}

export default Flashcard