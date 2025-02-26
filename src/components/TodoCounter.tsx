import useTodosContext from '../lib/hooks'

const TodoCounter = () => {
	const { todoCount, completedTodos } = useTodosContext()

	return (
		<p>
			<b>{completedTodos}</b> / {todoCount} todos completed
		</p> 
	)
}

export default TodoCounter