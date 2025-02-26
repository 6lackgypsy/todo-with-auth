import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import AddTodoForm from './AddTodoForm'
import Button from './Button'


const Sidebar = () => {
 	const { 
		login, 
		logout, 
		register, 
		isLoading,
		isAuthenticated, 
		user 
	} = useKindeAuth()

	return (
		<section className='flex flex-col col-[2/3] row-[2/3] bg-[#FFFCF9] border-l border-black/[0.08] p-[25px] pt-[18px] pb-[28px]'>
			<AddTodoForm />
			<div className='mt-auto space-y-2'>
				{isLoading ? <p>Authenticating</p> : isAuthenticated ? (	
					<>
						<p>Logged in as {user?.email}</p>
						<Button onClick={logout}>Log Out</Button>
					</>
				) : (
					<>
						<Button type='secondary' onClick={login}>Log In</Button>
						<Button type='secondary' onClick={register} >Register</Button>
					</>
				)}

			</div>
		</section>
	)
}

export default Sidebar