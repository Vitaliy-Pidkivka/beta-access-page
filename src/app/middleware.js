import { setBetaAuth } from '../reducers/actions'
import { FIRST_PAGE_LOAD } from '../reducers/types'

export const checkAllowedWords = ({dispatch}) => next => action => {
	if(action.type === FIRST_PAGE_LOAD){
		const isBetaAuth = localStorage.getItem('isBetaAuth')
		isBetaAuth && dispatch(setBetaAuth())
	}
	return next(action)
}