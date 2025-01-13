import Wrapper from "./Wrapper"
import { IoIosArrowForward } from "react-icons/io"
import { FaStar } from "react-icons/fa"
import { IoIosMore } from "react-icons/io"

const Product = () => {
    const products = [
        {
            text: "197.00"
        },
        {
            text: "197.00"
        },
        {
            text: "197.00"
        },
        {
            text: "197.00"
        },
        {
            text: "197.00"
        },
        {
            text: "197.00"
        },
    ]

    const categories = [
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
        {
            text: "Outdoor Lighting"
        },
    ]

    return (
        <section>
            <Wrapper>
                <div className="mt-[30px]">
                    <h2 className="text-[#424242] text-[22px] mb-[4px]">Flash Sale</h2>
                    <div className="bg-white">
                        <div className="flex items-start md:items-center justify-between border-b-[1px] border-[#d5d5d5]">
                            <div className="flex md:items-center flex-col md:flex-row">
                                <span className="text-[#f57224] text-[14px] font-medium p-[20px]">On Sale Now</span>
                                <div className="flex items-center ml-[20px] mb-[20px] md:ml-[50px] md:mb-0">
                                    <span className="text-[14px] text-[#424242] mr-[14px]">Ending in</span>
                                    <div className="flex items-center">
                                        <div className="text-white flex items-center justify-center bg-[#d3232a] w-[40px] h-[35px] rounded-[2px]">11</div>
                                        <div className="mx-[6px]">:</div>
                                        <div className="text-white flex items-center justify-center bg-[#d3232a] w-[40px] h-[35px] rounded-[2px]">00</div>
                                        <div className="mx-[6px]">:</div>
                                        <div className="text-white flex items-center justify-center bg-[#d3232a] w-[40px] h-[35px] rounded-[2px]">10</div>
                                    </div>
                                </div>
                            </div>
                            <a className="mt-[20px] md:mt-0 mr-[20px] px-[10px] py-[6px] text-[#f57224] text-[14px] font-medium uppercase border-[1px] border-[#f57224]" href="">
                                <span className="hidden md:block">shop all products</span>
                                <span className="block md:hidden text-lg"><IoIosMore /></span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 py-[10px]">
                            {products.map((item, index) => (
                                <div key={index} className="cursor-pointer hover:shadow-lg">
                                    <div><img className="w-full h-full" src="https://placehold.co/188x188" alt="" /></div>
                                    <div className="py-[4px] px-[8px]">
                                        <p className="text-[14px] line-clamp-2">VISTRA Zinc 15mg ( 45 caps) -  วิสทร้า ซิงก์ 15 มก. ( 45 เม็ด)</p>
                                        <div className="text-[18px] text-[#f57224]">
                                            <span>฿</span>
                                            <span>{item.text}</span>
                                        </div>
                                        <div className="text-[12px] text-[#9e9e9e]">
                                            <span>฿</span>
                                            <span className="line-through">197.00</span>
                                            <span className="text-[#212121] ml-[4px]">-27%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-[30px]">
                    <h2 className="flex justify-between items-center mb-[4px]">
                        <div className="text-[#424242] text-[22px]">Lazmall</div>
                        <a className="flex items-center text-[14px] text-[#1a9cb7]">
                            <span>Shop More</span>
                            <span className="text-[20px]"><IoIosArrowForward /></span>
                        </a>
                    </h2>
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                        {products.map((index) => (
                            <div key={index} className="cursor-pointer hover:shadow-lg">
                                <div className="relative">
                                    <img className="w-full h-full" src="https://placehold.co/188x188" alt="" />
                                    <div className="border-2 border-white absolute w-[44px] h-[44px] shadow-lg left-1/2 transform -translate-x-1/2 bottom-[-20px]">
                                        <img className="w-full h-full" src="https://placehold.co/44x44" alt="" />
                                    </div>
                                </div>
                                <div className="bg-white text-center pt-[30px] pb-[10px]">
                                    <p className="text-[14px] text-[#212121]">CB Cotton</p>
                                    <p className="text-[12px] text-[#9e9e9e]">CB Cotton</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-[30px]">
                    <h2 className="text-[#424242] text-[22px]">Categories</h2>
                    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 bg-white">
                        {categories.map((item, index) => (
                            <div key={index} className="border-[1px] border-gray-100 cursor-pointer hover:shadow-lg">
                                <div className="w-[80px] h-[80px] mx-auto pt-[16px]"><img className="w-full h-full" src="https://placehold.co/80x80" alt="" /></div>
                                <div className="pt-[5px] pb-[20px] text-[14px] text-[#212121] text-center">{item.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-[30px]">
                    <h2 className="text-[#424242] text-[22px] mb-[4px]">Just For You</h2>
          
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                            {products.map((item, index) => (
                                <div key={index} className="cursor-pointer hover:shadow-lg">
                                    <div><img className="w-full h-full" src="https://placehold.co/188x188" alt="" /></div>
                                    <div className="pt-[4px] pb-[10px] px-[8px]">
                                        <p className="text-[14px] line-clamp-2">VISTRA Zinc 15mg ( 45 caps) -  วิสทร้า ซิงก์ 15 มก. ( 45 เม็ด)</p>
                                        <div className="text-[18px] text-[#f57224]">
                                            <span>฿</span>
                                            <span>{item.text}</span>
                                            <span className="text-[12px] text-[#212121] ml-[4px] opacity-[0.8]">-54%</span>
                                        </div>
                                        <div className="flex items-center mt-[4px]">
                                            <span className="text-[#faca51] text-[11px]"><FaStar /></span>
                                            <span className="text-[#faca51] text-[11px]"><FaStar /></span>
                                            <span className="text-[#faca51] text-[11px]"><FaStar /></span>
                                            <span className="text-[#faca51] text-[11px]"><FaStar /></span>
                                            <span className="text-[#faca51] text-[11px]"><FaStar /></span>
                                            <span className="text-[12px] text-[#9e9e9e]">(342)</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="mt-[50px]">
                    <div className="mx-auto flex items-center justify-center w-[387px] h-[40px] text-[#1a9cb8] border-[1px] border-[#1a9cb8] cursor-pointer" href="">LOAD MORE</div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Product