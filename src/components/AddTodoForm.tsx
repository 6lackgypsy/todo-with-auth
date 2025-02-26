import useTodosContext from '../lib/hooks'
import Button from './Button'
import { useState } from 'react'

const AddTodoForm = () => {
	const [text, setText] = useState('')

	const { handleAddTodo } = useTodosContext()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		handleAddTodo(text)
		setText('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2 className='font-medium text-[#231D15] '>Add a todo</h2>
			<input 
				type="text" 
				className='h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[0.9rem] block w-full px-[16px] focus:outline-none focus:ring-2 ring-[#473A2B] transition-ring'
				value={text}	
				onChange={(e) => setText(e.target.value)}
			/>
			<Button>Add To List</Button>
		</form>
	)
}

export default AddTodoForm