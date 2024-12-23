import Logo from '../assets/images/logooo.png'
import Pin from '../assets/images/pin.png'
import Cooilon from '../assets/images/coolicon.png'
import Sidebar from './side-bar'
import Blocks from './Blocks'
import Homescreen from './Homescreen'
import Banner from './Banner'

function Centre() {
    return (
        <>
        <div className='flex'>
        <Sidebar/>
            <div className='w-full'>
                {/* 2nd Navbar */}
                <div className='flex h-16 items-center justify-between w-full px-6'>
                    <img src={Logo} alt="" className='w-[120px] h-7' />
                    <div className='flex items-center gap-7'>
                        <button className='py-2 px-4 text-sm bg-[#303030] rounded-md text-white font-semibold bg-gradient-to-b from-[#4a4a4a] to-[#1a1a1a] ring-1 ring-inset ring-gray-500 hover:from-[#5a5a5a] hover:to-[#2a2a2a] active:shadow-inner active:translate-y-[2px]'>Publish App</button>
                        <button className='py-1 px-1 bg-[#303030] rounded-md bg-gradient-to-b from-[#4a4a4a] to-[#1a1a1a] ring-1 ring-inset ring-gray-500 hover:from-[#5a5a5a] hover:to-[#2a2a2a] active:shadow-inner active:translate-y-[2px] '>
                            <img src={Pin} alt="" className='w-[17px] h-[17px]'/>
                        </button>
                        <img src={Cooilon} alt="" className='w-[20px] h-[6px] cursor-pointer'/>
                    </div>
                </div>
                {/* Blocks Inventory Section */}
                <div className='flex'>
                    <Blocks/>  
                    <Homescreen/>
                    <Banner/>
                </div>
            </div>
        </div>
        
            
        </>
    )
}
export default Centre