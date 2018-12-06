import { toggleMessageDetail, TOGGLE_MESSAGE_DETAIL } from '../actions/ui'

import uiReducer, { getInitialState } from './ui'

/*

What BEHAVIOUR do we have to test?

Task 1, write the describe and its
Task 2, implement the expectations

*/
describe('UI reducer', () => {
  it(`should return the initial state if the state passed is undefined`, () => {
    const actualState = { isMessageDetailOpen: false }
    const expectedState = getInitialState()

    expect(expectedState).toEqual(actualState)
  })

  it(`should a new state if ${TOGGLE_MESSAGE_DETAIL} is provided`, () => {
    const actualState = uiReducer(undefined, toggleMessageDetail())
    const expectedState = getInitialState()
    expectedState.isMessageDetailOpen = true

    expect(expectedState).toEqual(actualState)
  })
})
