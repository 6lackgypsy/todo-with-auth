import TodoItem from './TodoItem'
import useTodosContext from '../lib/hooks'


const TodoList = () => {
	const { todos } = useTodosContext()

	return (
		<ul>
			{todos.length === 0 ? (
				<p className='text-[#473A2B] h-full grid place-content-center font-semibold'>
					Start by adding a todo
				</p>
			) : (
				todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} /> 			
				))
			)
		}
		</ul>
	)
}

export default TodoList