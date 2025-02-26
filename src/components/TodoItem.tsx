import DeleteButton from './DeleteButton'
import CheckButton from './CheckButton'
import Todo from '../lib/types'


type TodoItemProps = {
	todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => { 
	return (
		<li 
			className='flex justify-between items-center px-8 h-[50px] text-[0.9rem] cursor-pointer border-b border-black-[8%]'
		>
			<span className={`${todo.completed ? 'line-through text-[#CCC]': ''} `}>{todo.text}</span>
			<div className='space-x-2'>
				<DeleteButton id={todo.id} /> 
				<CheckButton id={todo.id} />
			</div>
		</li>
	)
}

export default TodoItem