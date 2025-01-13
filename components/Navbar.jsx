import Wrapper from "./Wrapper"
import { IoSearchSharp } from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi"

const Navbar = () => {
    return (
        <nav className="bg-white">
            <Wrapper>
                <div className="flex items-center justify-between h-[75px] gap-2">
                    <img 
                    src="//laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png" 
                    alt="Online Shopping Lazada.co.th Logo" 
                    data-spm-anchor-id="a2o4m.homepage.dhome.i0.20437f6daxMNn5" 
                    className="hidden sm:block w-[127px] cursor-pointer" />
                    <div className="flex items-center h-[45px] w-[650px]">
                        <input className="bg-[#e7e8ec] text-[#999] h-full outline-none text-[14px] pl-[20px] w-full rounded-l" type="text" placeholder="Search in Lazada" />
                        <div className="flex items-center justify-center bg-[#f36d00] h-full w-[45px] text-white text-[25px] rounded-r cursor-pointer"><IoSearchSharp /></div>
                    </div>
                    <div className="hidden sm:block text-[33px] text-blue-950 cursor-pointer"><FiShoppingCart /></div>
                    <img 
                    src="//laz-img-cdn.alicdn.com/images/ims-web/TB18s7ESBr0gK0jSZFnXXbRRXXa.jpg" 
                    alt="Special for New users" 
                    data-spm-anchor-id="a2o4m.homepage.dewallet.i0.20437f6daxMNn5"
                    className="hidden sm:block w-[188px] cursor-pointer"
                    /> 
                </div>
            </Wrapper>
        </nav>
    )
}

export default Navbar