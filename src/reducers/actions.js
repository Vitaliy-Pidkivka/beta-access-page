import { FIRST_PAGE_LOAD, SET_IS_BETA_AUTH } from './types'
import { fetchWords } from '../api/wordsApi'

export const setBetaAuth = () => ({ type: SET_IS_BETA_AUTH, auth: true})
export const firstPageLoad = () => ({type: FIRST_PAGE_LOAD})

export const checkWord = newWord => async (dispatch) =>{
	const words = await fetchWords()
	const found = words.filter(word => word === newWord)
	if (found.length) {
		localStorage.setItem('isBetaAuth', 'true')
		dispatch(setBetaAuth(true))
	}
}



