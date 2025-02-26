import { createContext, useEffect, useState } from 'react'
import Todo from '../lib/types'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'


type TodoContextType = {
	todos: Todo[]
	todoCount: number
	completedTodos: number
	handleDelete: (id: string) => void
	handleCompleted: (id: string) => void
	handleAddTodo: (text: string) => void
}
 
type TodoContextProviderProps = { 
	children: React.ReactNode
}

export const TodoContext = createContext<TodoContextType | null>(null)

const TodoContextProvider = ({ children }: TodoContextProviderProps) => { 
	const { isAuthenticated } = useKindeAuth()

	const getInitialTodos = () => {
		const savedTodos = localStorage.getItem('todos')

		return savedTodos ? JSON.parse(savedTodos) : [] 
	}

	const [todos, setTodos] = useState<Todo[]>(getInitialTodos) 

	useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)) 
  }, [todos])

	const todoCount: number = todos.length
	const completedTodos: number = todos.filter((todo) => todo.completed).length

	const handleDelete = (id: string) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	const handleCompleted = (id: string) => {
		setTodos(todos.map((todo) => (
			todo.id === id ? { ...todo, completed: !todo.completed } :
			todo
		)))
	}

  const handleAddTodo = (text: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert('Please login to add more todos')
      return
    }

    const newTodo: Todo = { id: self.crypto.randomUUID(), text, completed: false }
    setTodos([newTodo, ...todos]) 
  }

	return <TodoContext.Provider value={{
		todos,
		todoCount,
		completedTodos,
		handleDelete,
		handleCompleted,
		handleAddTodo
	}}>
		{children}
	</TodoContext.Provider>
}

export default TodoContextProvider