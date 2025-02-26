import Logo from './Logo'
import TodoCounter from './TodoCounter'


const MainHeader = () => {
	return (
		<header className='col-[1/3] row-[1/2] bg-[#FBF5ED] border-b border-black/[0.08] flex justify-between items-center px-[28px]'>
			<Logo />
			<TodoCounter />
		</header>
	)
}

export default MainHeader