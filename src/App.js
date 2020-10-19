import React, { useEffect } from 'react'
import WebsitePage from './components/WebsitePage'
import BetaAccessPage from './components/BetaAccessPage'
import { useDispatch, useSelector } from 'react-redux'
import { getIsBetaAuth } from './reducers/appReducer'
import { firstPageLoad } from './reducers/actions'

function App() {
	const dispatch = useDispatch()
	const isBetaAuth = useSelector(getIsBetaAuth)

	useEffect(() => {
		dispatch(firstPageLoad())
	}, [dispatch])

	if (!isBetaAuth) {
		return <BetaAccessPage/>
	}

	return (
		<div className="App">
			<WebsitePage/>
		</div>
	)
}

export default App
