import BackgroundHeading from './components/BackgroundHeading'
import Footer from './components/Footer'
import MainHeader from './components/MainHeader'
import Sidebar from './components/Sidebar'
import TodoList from './components/TodoList'
import TodoContextProvider from './context/TodoContextProvider'


function App() {
  return (
    <div className='grid place-content-center font-sans bg-[#F1D4B3] min-h-screen'>
      <BackgroundHeading />
      <TodoContextProvider>
        <main 
          className='w-[972px] h-[636px] bg-white relative rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden'
        >
          <MainHeader />
          <TodoList /> 
          <Sidebar />
        </main>
      </TodoContextProvider>
      <Footer /> 
    </div>
  )
}

export default App
