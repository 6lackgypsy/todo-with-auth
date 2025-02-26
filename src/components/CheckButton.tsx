import { CheckCircleIcon } from '@heroicons/react/16/solid'
import useTodosContext from '../lib/hooks'

type CheckButtonProps = {
	id: string
}

const CheckButton = ({ id }: CheckButtonProps) => {
	const { handleCompleted } = useTodosContext()

	return (
		<button onClick={() => (handleCompleted(id))}>
			<CheckCircleIcon width={20} className='text-[#473A2B] hover:opacity-80 transition-opacity'/>
		</button>
	)
}

export default CheckButton