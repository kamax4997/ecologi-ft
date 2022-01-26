import React from 'react'
import PropTypes from 'prop-types'

export interface IRadioProps {
  selected: boolean
  onChange: () => void
  text: string
  dataCy: string
}

function Radio (props: IRadioProps) {
  const { selected, onChange, text, dataCy } = props

  return (
    <div className="radio-container" onClick={onChange} data-cy={dataCy}>
      <div className={`radio-outer-circle ${selected && "unselected"}`}>
        <div className={`radio-inner-circle ${selected && "unselected-circle"}`} />
      </div>
      <div className="helper-text">{text}</div>
    </div>
  )
}

Radio.propTypes = {
  text: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
}

export default Radio
