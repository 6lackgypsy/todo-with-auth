type ButtonProps = {
	children: React.ReactNode
	type?: 'primary' | 'secondary'
	onClick: () => Promise<void>
}

const Button = ({ children, type, onClick }: ButtonProps) => {
	return (
		<button 
			className={`h-[45px] bg-[#473A2B] hover:bg-[#322618]  transition-bg w-full text-white rounded-[5px] 
				cursor-pointer ${type === 'secondary' ? 'opacity-[85%]' : ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button