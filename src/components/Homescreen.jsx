import Dropdown from "./dropdown"
import Signal from '../assets/images/signal.png'
import Wifi from '../assets/images/wifi.png'
import Battery from '../assets/images/battery.png'
import Prefix from '../assets/images/Prefix.png'
import Play from '../assets/images/playbutton.png'
import Frame from '../assets/images/Frame.png'
import Dust from '../assets/images/dustbin.png'
import Eye from '../assets/images/eye.png'

function Homescreen(){
    return (
        <div className="w-[50%] bg-[#EBEBEB]">
            <Dropdown/>
            <div className="w-[600px] bg-[#181A20] mx-auto mt-6">
                <div className="px-6 py-2">
                    <div className="flex justify-between items-center">
                        <p className="text-white font-sans">9:41</p>
                        <div className="flex gap-[6px]">
                            <img src={Signal} alt="" className="w-[18px] h-[10px]"/>
                            <img src={Wifi} alt="" className="w-[15px] h-[10px]"/>
                            <img src={Battery} alt="" className="w-[27px] h-[13px]"/>
                        </div>
                    </div>

                    <div className="flex border-[2px] border-gray-700 rounded-xl px-4 h-[80px] bg-[#424242] justify-between items-center mt-[38px]">
                        
                         <div className="flex items-center">
                            <img src={Prefix} alt="" className="w-[35px] h-[35px]" />
                            <input
                             type="text"
                             placeholder="Search Trends..."
                             name="search" id="" 
                             className="placeholder:text-[#BDBDBD] text-xl  bg-transparent outline-none text-white ml-3" />
                         </div>
                         <div className="bg-[#1A1A1A] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                            <img src={Play} alt="" className="w-[18px] h-[18px] ml-[4px]" />
                         </div>
                    </div>
                </div>
                <div className='w-[95%] ml-auto flex justify-between mt-7'>
                    <div className=" bg-[#F5F4F4] w-[95%] pt-20 rounded-xl x-auto pb-7">
                        <img src={Frame} alt="" className="w-16 h-16 mx-auto"/>
                        <div className="flex bg-[#181A20] py-3 justify-center items-center gap-4 w-[80px] mx-auto rounded-xl mt-5 ">
                            <img src={Eye} alt="" className="w-[19px] h-[15px]"/>
                            <img src={Dust} alt="" className="w-[17px] h-[19px]"/>
                        </div>
                    </div>
                    <div></div>

                    <div className="bg-[#F5F4F4] w-[2%] rounded-tl-xl rounded-bl-xl">
                        <p className="text-[#F5F4F4]">.</p>
                    </div>
                </div>

                <div className="relative w-full h-12">
                    <div className="absolute inset-0"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                        <div className="w-[7px] h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-[#424242] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#424242] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#424242] rounded-full"></div>
                    </div>
                </div>

                <div className="flex justify-center gap-10 mt-9">
                    <div>
                        <div className="p-9 bg-white rounded-full">
                            <img src={Frame} alt="" className="w-7 h-7"/>
                        </div>
                        <h1 className="text-white text-sm font-sans text-center mt-3">Category 1</h1>
                    </div>
                    <div>
                        <div className="p-9 bg-white rounded-full">
                            <img src={Frame} alt="" className="w-7 h-7"/>
                        </div>
                        <h1 className="text-white text-sm font-sans text-center mt-3">Category 2</h1>
                    </div>
                    <div>
                        <div className="p-9 bg-white rounded-full">
                            <img src={Frame} alt="" className="w-7 h-7"/>
                        </div>
                        <h1 className="text-white text-sm font-sans text-center mt-3">Category 3</h1>
                    </div>
                    <div>
                        <div className="p-9 bg-white rounded-full">
                            <img src={Frame} alt="" className="w-7 h-7"/>
                        </div>
                        <h1 className="text-white text-sm font-sans text-center mt-3">Category 4</h1>
                    </div>
                </div>

                <div className="flex justify-between items-center px-6 mt-9">
                    <h1 className="font-bold text-xl font-sans text-white">New Arrival</h1>
                    <h2 className="font-bold text-lg font-sans text-[#528F65]">View All</h2>
                </div>

                <div className="px-6 mt-5 flex justify-between">
                    <div>
                        <div className="w-[263px] h-[287px] flex justify-center items-center rounded-t-xl bg-white">
                            <img src={Frame} alt="" className="w-14 h-14"/>
                        </div>
                        <h1 className="font-semibold text-base text-white font-sans mt-2">Urban Blend Long...</h1>
                        <h2 className="font-semibold text-sm text-[#528F65] font-sans mt-1">$185.00</h2>
                    </div>
                    <div>
                        <div className="w-[263px] h-[287px] flex justify-center items-center rounded-t-xl bg-white">
                            <img src={Frame} alt="" className="w-14 h-14"/>
                        </div>
                        <h1 className="font-semibold text-base text-white font-sans mt-2">Urban Blend Long...</h1>
                        <h2 className="font-semibold text-sm text-[#528F65] font-sans mt-1">$185.00</h2>
                    </div>
                </div>

                <div className="px-6 mt-5 flex justify-between">
                    <div>
                        <div className="w-[263px] h-[287px] flex justify-center items-center rounded-t-xl bg-white">
                            <img src={Frame} alt="" className="w-14 h-14"/>
                        </div>
                        <h1 className="font-semibold text-base text-white font-sans mt-2">Urban Blend Long...</h1>
                        <h2 className="font-semibold text-sm text-[#528F65] font-sans mt-1">$185.00</h2>
                    </div>
                    <div>
                        <div className="w-[263px] h-[287px] flex justify-center items-center rounded-t-xl bg-white">
                            <img src={Frame} alt="" className="w-14 h-14"/>
                        </div>
                        <h1 className="font-semibold text-base text-white font-sans mt-2">Urban Blend Long...</h1>
                        <h2 className="font-semibold text-sm text-[#528F65] font-sans mt-1">$185.00</h2>
                    </div>
                </div>

                <div className="flex justify-between items-center px-6 mt-9">
                    <h1 className="font-bold text-xl font-sans text-white">Collections</h1>
                    <h2 className="font-bold text-lg font-sans text-[#528F65]">View All</h2>
                </div>

                <div className="px-6 mt-5 flex justify-between">
                    <div>
                        <div className="w-[263px] h-[287px] flex justify-center items-center rounded-t-xl bg-white">
                            <img src={Frame} alt="" className="w-14 h-14"/>
                        </div>
                        <h1 className="font-semibold text-base text-white font-sans mt-2">Urban Blend Long...</h1>
                    </div>
                    <div>
                        <div className="w-[263px] h-[287px] flex justify-center items-center rounded-t-xl bg-white">
                            <img src={Frame} alt="" className="w-14 h-14"/>
                        </div>
                        <h1 className="font-semibold text-base text-white font-sans mt-2">Urban Blend Long...</h1>
                    </div>
                </div>

                <div className="px-6 mt-5 flex justify-between">
                    <div>
                        <div className="w-[263px] h-[287px] flex justify-center items-center rounded-t-xl bg-white">
                            <img src={Frame} alt="" className="w-14 h-14"/>
                        </div>
                        <h1 className="font-semibold text-base text-white font-sans mt-2">Urban Blend Long...</h1>
                    </div>
                    <div>
                        <div className="w-[263px] h-[287px] flex justify-center items-center rounded-t-xl bg-white">
                            <img src={Frame} alt="" className="w-14 h-14"/>
                        </div>
                        <h1 className="font-semibold text-base text-white font-sans mt-2">Urban Blend Long...</h1>
                    </div>
                </div>

                <div className="flex justify-between items-center px-6 mt-9">
                    <h1 className="font-bold text-xl font-sans text-white">Our Stores</h1>
                    <h2 className="font-bold text-lg font-sans text-[#528F65]">View All</h2>
                </div>

                <div className="flex justify-center gap-10 mt-9 pb-16">
                    <div>
                        <div className="p-9 bg-white rounded-full">
                            <img src={Frame} alt="" className="w-7 h-7"/>
                        </div>
                        <h1 className="text-white text-sm font-sans text-center mt-3">Store 1</h1>
                    </div>
                    <div>
                        <div className="p-9 bg-white rounded-full">
                            <img src={Frame} alt="" className="w-7 h-7"/>
                        </div>
                        <h1 className="text-white text-sm font-sans text-center mt-3">Store 2</h1>
                    </div>
                    <div>
                        <div className="p-9 bg-white rounded-full">
                            <img src={Frame} alt="" className="w-7 h-7"/>
                        </div>
                        <h1 className="text-white text-sm font-sans text-center mt-3">Store 3</h1>
                    </div>
                    <div>
                        <div className="p-9 bg-white rounded-full">
                            <img src={Frame} alt="" className="w-7 h-7"/>
                        </div>
                        <h1 className="text-white text-sm font-sans text-center mt-3">Store 4</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homescreen