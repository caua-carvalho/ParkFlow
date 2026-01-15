import './App.css'
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <Navbar />

    <div className="grid grid-flow-col grid-rows-4 gap-4 h-screen w-screen pt-23 p-7">
      <div className="row-span-1 col-span-1 bg-blue-400 p-4">Content Area 1</div>
      <div className="row-span-1 col-span-1 bg-blue-400 p-4">Content Area 2</div>
      <div className="row-span-1 col-span-1 bg-blue-400 p-4">Content Area 3</div>
      <div className="row-span-1 col-span-1 bg-blue-400 p-4">Content Area 3</div>

      <div className="row-span-4 col-span-1 bg-blue-400 p-4">Content Area 4</div>

      <div className="row-span-1 col-span-1 bg-blue-400 p-4">Content Area 1</div>
      <div className="row-span-1 col-span-1 bg-blue-400 p-4">Content Area 2</div>
      <div className="row-span-2 col-span-1 bg-blue-400 p-4">Content Area 3</div>
    </div>
    </>
  )
}

export default App
