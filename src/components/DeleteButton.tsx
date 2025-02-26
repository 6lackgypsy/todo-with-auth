import { TrashIcon } from '@heroicons/react/16/solid'
import useTodosContext from '../lib/hooks'

type DeleteButtonProps = {
	id: string
}

const DeleteButton = ({ id }: DeleteButtonProps) => {
	const { handleDelete } = useTodosContext()

	return (
		<button onClick={() => (handleDelete(id))}>
			<TrashIcon width={20} className='text-[#473A2B] hover:opacity-80 transition-opacity'/>
		</button>
	)
}

export default DeleteButton