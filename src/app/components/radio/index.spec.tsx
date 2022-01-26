import React from 'react'
import { mount } from '@cypress/react'
import { expect } from 'chai'
import Radio from './'

interface IRadioTestProps {
  onChangeHandler: () => void
}

function RadioTest(props: IRadioTestProps) {
  const { onChangeHandler } = props

  return (
    <Radio
      selected={false} 
      onChange={onChangeHandler}
      text='Daily'
      dataCy='daily-radio'
    />
  )
}

describe('rendering', () => {
  let onChangeHandler: () => void

  describe('if radio is clicked', () => {
    beforeEach(() => {
      onChangeHandler = cy.stub()
  
      mount(
        <RadioTest onChangeHandler={onChangeHandler} />
      )
    })

    it('check onChange method is called', () => {
      cy.get('[data-cy=daily-radio]').click()
        .wait(1000)
        .then(() => expect(onChangeHandler).to.have.been.called)
    })

    it('check nothing', () => {
      cy.get('[data-cy=daily-radio]').click()
        .wait(1000)
    })
  })
})
