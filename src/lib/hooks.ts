import { useContext } from 'react'
import { TodoContext } from '../context/TodoContextProvider'

const useTodosContext = () => {
	const context = useContext(TodoContext)

	if (!context) {
		throw new Error('Context not provided')
	}

	return context
}

export default useTodosContext