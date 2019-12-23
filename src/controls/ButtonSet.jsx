import React from 'react'

import Button from './Button'

export default class ButtonSet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { set, value, handleClick } = this.props
    let buttons = []

    set.map((option, i) => {
      buttons.push(
        <Button
          option={option}
          current={value}
          handleClick={handleClick}
          key={i}
        />
      )
    })

    return (
      <div className="ButtonSet">
        <div className="content">
          <h3>Маска</h3>
          <div className="buttons">{buttons}</div>
        </div>
      </div>
    )
  }
}
