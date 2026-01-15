import { CgProfile } from "react-icons/cg";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-gray-800">
            <div className="flex flex-row w-full h-full items-center justify-between px-5">
                <div className=" flex items-center align-items text-white font-bold text-2xl">
                    <span className='w-10 h-10 flex justify-center items-center bg-gray-700 mr-3 rounded-sm'>P</span> <div className='text-5x1'>ParkFlow</div>
                </div>
            

                <div className="user-profile flex items-center">
                    <div className="font-bold">Admin User</div>
                    <CgProfile className="inline-block w-8 h-8 text-white ml-2" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar