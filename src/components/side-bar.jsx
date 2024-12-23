import Home from '../assets/images/home.png'
import Orders from '../assets/images/orders.png'
import Products from '../assets/images/Product.png'
import Customer from '../assets/images/customers.png'
import Content from '../assets/images/content.png'
import Finance from '../assets/images/Finances.png'
import Analytics from '../assets/images/Analytics.png'
import Marketing from '../assets/images/marketing.png'
import Discounts from '../assets/images/discounts.png'
import Builder from '../assets/images/builder.png'
import Mail from '../assets/images/mail.png'

function Sidebar(){
    return(
        <>
        <div className='w-[19%] p-6 bg-[#EBEBEB] h-[1027px]'>
            <div className='flex gap-3 '>
                <img src={Home} alt="" className='w-4 h-4'/>
                <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Home</h1>
            </div>
            
            <div className='flex items-center justify-between mt-[15px]'>
                <div className='flex gap-3'>
                    <img src={Orders} alt="" className='w-4 h-4 '/>
                    <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Orders</h1>
                </div>
                <h2 className=' px-2 py-[2px] bg-[#616161] rounded-lg cursor-pointer'>15</h2>
            </div>
            <div className='flex gap-3 mt-[15px]'>
                <img src={Products} alt="" className='w-4 h-4 '/>
                <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Products</h1>
            </div>
            <div className='flex gap-3 mt-[15px]'>
                <img src={Customer} alt="" className='w-4 h-4 '/>
                <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Customers</h1>
            </div>
            <div className='flex gap-3 mt-[15px]'>
                <img src={Content} alt="" className='w-4 h-4 '/>
                <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Content</h1>
            </div>
            <div className='flex gap-3 mt-[15px]'>
                <img src={Finance} alt="" className='w-4 h-4 '/>
                <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Finances</h1>
            </div>
            <div className='flex gap-3 mt-[15px]'>
                <img src={Analytics} alt="" className='w-4 h-4 '/>
                <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Analytics</h1>
            </div>
            <div className='flex gap-3 mt-[15px]'>
                <img src={Marketing} alt="" className='w-4 h-4 '/>
                <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Marketing</h1>
            </div>
            <div className='flex gap-3 mt-[15px]'>
                <img src={Discounts} alt="" className='w-4 h-4 '/>
                <h1 className='text-[14px] font-semibold font-sans text-[#303030] cursor-pointer'>Discounts</h1>
            </div>

            {/* Sales Channels */}

            <p className='text-xs font-semibold text-[#616161] mt-7 font-sans'>Sales Channels</p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 mt-3'>
                    <img src={Builder} alt="" className='w-4 h-4'/>
                    <h1 className='text-[13px] font-semibold font-sans cursor-pointer'>Our App Builder</h1>
                </div>
                <p className='cursor-pointer'>⮝</p>
            </div>
            <div className='px-7'>
                <h2 className='text-[#616161] font-sans text-xs mt-4 hover:font-bold ease-in-out duration-200 cursor-pointer'>Themes</h2>
                <h2 className='text-[#616161] font-sans text-xs font-bold ease-in-out duration-200 hover:font-bold mt-4 cursor-pointer'>Design Editor</h2>
                <h2 className='text-[#616161] font-sans text-xs mt-4 hover:font-bold ease-in-out duration-200 cursor-pointer'>Personalize Branding</h2>
                <h2 className='text-[#616161] font-sans text-xs mt-4 hover:font-bold ease-in-out duration-200 cursor-pointer'>Navigation</h2>
                <h2 className='text-[#616161] font-sans text-xs mt-4 hover:font-bold ease-in-out duration-200 cursor-pointer'>Push Campaigns</h2>
                <h2 className='text-[#616161] font-sans text-xs mt-4 hover:font-bold ease-in-out duration-200 cursor-pointer'>Plugins</h2>
                <h2 className='text-[#616161] font-sans text-xs mt-4 hover:font-bold ease-in-out duration-200 cursor-pointer'>Billing</h2>
                <h2 className='text-[#616161] font-sans text-xs mt-4 hover:font-bold ease-in-out duration-200 cursor-pointer'>Analytics</h2>
                <h2 className='text-[#616161] font-sans text-xs mt-4 hover:font-bold ease-in-out duration-200 cursor-pointer'>Settings</h2>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <p className='text-[#616161] font-sans text-xs font-bold mt-4 cursor-pointer'>Apps</p>
                <p className='text-[#616161] font-sans text-sm font-bold mt-4 cursor-pointer'>⮞</p>
            </div>
            <div className='flex gap-2 items-center mt-3'>
                <img src={Mail} alt="" className='w-4 h-4'/>
                <p className='text-[#616161] font-sans text-sm font-semibold cursor-pointer'>Shopify Email</p>
            </div>
        </div>
        </>
    )
}
export default Sidebar 