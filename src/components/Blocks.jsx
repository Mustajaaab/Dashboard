
import Prefix from '../assets/images/Prefix.png'
import Coolions from '../assets/images/coolionss.png'
import Frame from '../assets/images/Frame.png'

function Blocks() {
    return (
        <>
        <div className='w-[25%]'>
                    <div className='border-[2px] border-b-0 border-[#DEDEDE] px-4 py-6'>
                        <h1 className='font-sans font-bold text-xl'>Blocks inventory</h1>
                        <p className='text-[#616161] text-sm mt-2'>Drag, drop max 5 blocks per design.</p>
                        <div className='flex items-center gap-[14px] mt-[16px]'>
                            <div className='flex items-center px-3 h-[32px] rounded-md border-[1px] border-[#DEDEDE]'>
                                <img src={Prefix} alt="" className='w-[20px] h-[20px] mr-[4px]'/>
                                <input type="text" name="" id="" placeholder='Search' className='text-[13px] font-semibold font-sans outline-none w-[240px]'/>
                            </div>
                            <button className='bg-gradient-to-b from-[#4a4a4a] to-[#1a1a1a] rounded-md h-[32px] px-4 text-[12px] text-white font-semibold font-sans  ring-1 ring-inset ring-gray-500 hover:from-[#5a5a5a] hover:to-[#2a2a2a] active:shadow-inner active:translate-y-[2px]'>
                             Search
                            </button>

                        </div>
                    </div>
                    <div className='py-4 px-3 border-[2px] border-[#DEDEDE] '>
                        <div className='border-[2px] border-[#DEDEDE] rounded-lg py-5 '>
                            
                            <div className='flex justify-between '>
                                <span className='bg-[#F5F4F4] h-32 w-[3%] rounded-tr-xl rounded-br-xl'></span>
                                <div className='h-32 w-[88%] flex justify-center items-center rounded-xl bg-[#F5F4F4]'>
                                    <img src={Frame} alt="" className='w-[48px] h-[48px] mx-auto'/>
                                </div>
                                <span className='bg-[#F5F4F4] h-32 w-[3%] rounded-tl-xl rounded-bl-xl'></span>
                            </div>
                            <div className='px-3'>
                            <img src={Coolions} alt="" className='w-[44px] h-[8px] cursor-pointer mx-auto mt-2' />
                            <h3 className='text-sm text-[#616161] font-semibold font-sans mt-[24px]'>Banner Slider</h3>
                            <p className='text-[#616161] font-sans font-normal text-sm '>Drag & Drop to your Design</p>
                            </div>
                        </div>

                        <div className='border-[2px] border-[#DEDEDE] rounded-lg py-6 mt-[16px]'>
                            <div className='h-32 w-[88%] flex justify-center items-center rounded-xl bg-[#F5F4F4] mx-auto'>
                                <img src={Frame} alt="" className='w-[48px] h-[48px] mx-auto'/>
                            </div>
                            <div className='px-3'>
                            <h3 className='text-sm text-[#616161] font-semibold font-sans mt-[24px]'>Full Width Single Banner</h3>
                            <p className='text-[#616161] font-sans font-normal text-sm '>Drag & Drop to your Design</p>
                            </div>
                        </div>

                        <div className='border-[2px] border-[#DEDEDE] rounded-lg py-6 px-3 mt-[16px]'>
                            <div className=' flex justify-center items-center gap-2'>
                                <p className='bg-[#F5F4F4] font-sans px-5 py-3 text-xs rounded-md text-[#616161]'>Text 1</p>
                                <p className='bg-[#F5F4F4] font-sans px-5 py-3 text-xs rounded-md text-[#616161]'>Text 2</p>
                                <p className='bg-[#F5F4F4] font-sans px-5 py-3 text-xs rounded-md text-[#616161]'>Text 3</p>
                                <p className='bg-[#F5F4F4] font-sans px-5 py-3 text-xs rounded-md text-[#616161]'>Text 4</p>
                            </div>
                            <h3 className='text-sm text-[#616161] font-semibold font-sans mt-[24px]'>Four Category Labels</h3>
                            <p className='text-[#616161] font-sans font-normal text-sm mt-1'>Drag & Drop to your Design</p>
                        </div>

                        <div className='border-[2px] border-[#DEDEDE] rounded-lg py-5 px-3 mt-[16px]'>
                            <div className=' flex justify-center items-center gap-4'>
                                <div className='text-center'>
                                    <div className='px-6 py-6 rounded-full bg-[#F5F4F4]'>
                                        <img src={Frame} alt="" className='w-[19px] h-[19px] '/>
                                    </div>
                                    <p className='font-sans text-[12px] text-[#616161] mt-2'>Text</p>
                                </div>
                                <div className='text-center'>
                                    <div className='px-6 py-6 rounded-full bg-[#F5F4F4]'>
                                        <img src={Frame} alt="" className='w-[19px] h-[19px] '/>
                                    </div>
                                    <p className='font-sans text-[12px] text-[#616161] mt-2'>Text</p>
                                </div>
                                <div className='text-center'>
                                    <div className='px-6 py-6 rounded-full bg-[#F5F4F4]'>
                                        <img src={Frame} alt="" className='w-[19px] h-[19px] '/>
                                    </div>
                                    <p className='font-sans text-[12px] text-[#616161] mt-2'>Text</p>
                                </div>
                                <div className='text-center'>
                                    <div className='px-6 py-6 rounded-full bg-[#F5F4F4]'>
                                        <img src={Frame} alt="" className='w-[19px] h-[19px] '/>
                                    </div>
                                    <p className='font-sans text-[12px] text-[#616161] mt-2'>Text</p>
                                </div>
                            </div>
                            <h3 className='text-sm text-[#616161] font-semibold font-sans mt-[24px]'>Image with text for categories</h3>
                            <p className='text-[#616161] font-sans font-normal text-sm mt-1'>Drag & Drop to your Design</p>
                        </div>
                        <div className='border-[2px] border-[#DEDEDE] rounded-lg py-5 px-3 mt-[16px]'>
                            <div className=' flex justify-evenly items-center gap-2'>
                                <div>
                                    <div className='bg-[#F5F4F4] w-[159px] h-[178px] flex justify-center items-center rounded-lg'>
                                        <img src={Frame} alt="" className='w-[38px] h-[38px]'/>
                                    </div>
                                    <h1 className='text-sm text-[#616161] font-semibold mt-3'>Product name</h1>
                                    <p className='text-[#616161] text-sm mt-1'>Price</p>
                                </div>
                                <div>
                                    <div className='bg-[#F5F4F4] w-[159px] h-[178px] flex justify-center items-center rounded-lg'>
                                        <img src={Frame} alt="" className='w-[38px] h-[38px]'/>
                                    </div>
                                    <h1 className='text-sm text-[#616161] font-semibold mt-3'>Product name</h1>
                                    <p className='text-[#616161] text-sm mt-1'>Price</p>
                                </div>
                            </div>
                            <h3 className='text-sm text-[#616161] font-semibold font-sans mt-[24px]'>New Arrival - Product Tiles</h3>
                            <p className='text-[#616161] font-sans font-normal text-sm mt-1'>Drag & Drop to your Design</p>
                        </div>
                        <div className='border-[2px] border-[#DEDEDE] rounded-lg py-5 px-3 mt-[16px]'>
                            <div className=' flex justify-center items-center gap-2'>
                                <div>
                                    <div className='bg-[#F5F4F4] w-[330px] h-[178px] flex justify-center items-center rounded-lg'>
                                        <img src={Frame} alt="" className='w-[38px] h-[38px]'/>
                                    </div>
                                    <h1 className='text-sm text-[#616161] font-semibold mt-3'>Product name</h1>
                                    <p className='text-[#616161] text-sm mt-1'>Price</p>
                                </div>
                            </div>
                            <h3 className='text-sm text-[#616161] font-semibold font-sans mt-[24px]'>New Arrival - Product Tiles</h3>
                            <p className='text-[#616161] font-sans font-normal text-sm mt-1'>Drag & Drop to your Design</p>
                        </div>
                    </div>  
                </div>
        </>
    )
}
export default Blocks