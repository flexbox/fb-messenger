import { combineReducers } from 'redux'
import {
  RECEIVE_THREAD,
  TOGGLE_MESSAGE_DETAIL,
  RECEIVE_CONVERSATION,
  RECEIVE_MESSAGE
} from '../actions'

export function uiReducer(state = { isMessageDetailOpen: true }, action) {
  switch (action.type) {
    case TOGGLE_MESSAGE_DETAIL:
      return { ...state, isMessageDetailOpen: !state.isMessageDetailOpen }
    default:
      return state
  }
}

export function threadReducer(state = null, action) {
  switch (action.type) {
    case RECEIVE_THREAD:
      return action.thread
    case RECEIVE_MESSAGE:
      return { ...state, lastMessage: action.message }
    default:
      return state
  }
}

export function conversationReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_CONVERSATION:
      return action.conversation
    case RECEIVE_MESSAGE:
      return [...state, action.message]
    default:
      return state
  }
}

export default combineReducers({
  ui: uiReducer,
  thread: threadReducer,
  conversation: conversationReducer
})
