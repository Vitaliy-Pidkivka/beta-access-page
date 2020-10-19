import { FIRST_PAGE_LOAD, SHOW_LOADER, HIDE_LOADER, SET_IS_BETA_AUTH, SHOW_ALERT, HIDE_ALERT } from './types'

const initialState = {
	isBetaAuth: false,
	loading: false,
	alert: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_BETA_AUTH :
			return { ...state, isBetaAuth: action.auth }
		case SHOW_LOADER:
			return { ...state, loading: true }
		case HIDE_LOADER:
			return { ...state, loading: false }
		case SHOW_ALERT:
			return { ...state, alert: action.payload }
		case HIDE_ALERT:
			return { ...state, alert: false }
		case FIRST_PAGE_LOAD :
			return state
		default:
			return state
	}
}

//selectors
export const getIsBetaAuth = state => state.app.isBetaAuth

export default appReducer
