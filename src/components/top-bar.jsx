import Shopify from '../assets/images/shopify.png'
import Prefix from  '../assets/images/Prefix.png'
import Portrait from '../assets/images/potrait.png'
import Bells from '../assets/images/bells.png'
import Boy from '../assets/images/boy.png'


function Topbar(){
    return(
        <>
        <div className='w-full h-[56px] bg-[#1A1A1A] px-3 flex'>
            <div className='flex items-center h-full w-[60%] justify-between'>
                <img src={Shopify} alt="" className='w-[85px] h-[24px]'/>
                <div className="relative flex items-center">
                    <img
                    src={Prefix}
                    alt=""
                    className="absolute left-2 w-[20px] h-[20px]"
                    />
                    <input
                    type="text"
                    className="bg-transparent w-[450px] pl-8 pr-8 border border-gray-500 rounded text-gray-500"
                    />
                    <p className="absolute right-2 text-[#B5B5B5] text-[13px]">⌘K</p>
                </div>
                
            </div>
            <div className='flex items-center h-full w-[40%] justify-end gap-2'>
                <div className='h-[32px] w-[32px] bg-[#303030] rounded-md flex justify-center items-center cursor-pointer'>
                    <img src={Boy} alt="" className='w-[20px] h-[20px] rounded-lg' />
                </div>

                <div className='h-[32px] w-[32px] bg-[#303030] rounded-md flex justify-center items-center cursor-pointer'>
                    <img src={Bells} alt="" className='w-[25px] h-[25px] rounded-lg' />
                </div>

                <div className='flex items-center gap-2 bg-[#303030] h-[32px] w-[140px] justify-end rounded-md'>
                    <p className='text-xs font-semibold font-sans text-white cursor-pointer'>Stellar Interiors</p>
                    <img src={Portrait} alt="" className='w-[30px] h-[30px] rounded-lg cursor-pointer' />
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Topbar 