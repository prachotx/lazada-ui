import Wrapper from "./Wrapper"
import { FaStar } from "react-icons/fa"

const TopContent = () => {
    return (
        <section className="bg-[#e7e8ec]">
            <Wrapper>
                <div className="flex justify-between">
                    <div className="w-full">
                        <img className="h-full" src="https://img.lazcdn.com/us/domino/31d3a0dd-60d7-4c46-920c-b84fea1555f2_TH-1976-688.jpg_2200x2200q80.jpg" />
                    </div>
                    <div className="bg-gradient-to-r from-[#1e1b18] to-[#ffc3e3] w-[230px] h-[344px] p-[6px] hidden lg:block">
                        <div className="flex items-center mb-2">
                            <img className="w-[42px] h-[42px]" src="https://img.lazcdn.com/us/domino/47866b83cc0d0a3c74d429f89ff42423.png_2200x2200q80.png_.webp" data-spm-anchor-id="a2o4m.homepage.4159995340.i0.11257f6dEndZqQ" />
                            <span className="uppercase text-[14px] ml-[6px] text-[#6c1d00] font-medium">try lazada app</span>
                        </div>
                        <div className="relative text-white">
                            <img src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01tceZus1IewufOY1tZ_!!6000000000919-2-tps-364-316.png" alt="bg" />
                            <div className="absolute top-0 left-0 w-full h-full">
                                <div className="flex items-center text-[10px] font-medium ml-[10px] mt-[7px]">
                                    <FaStar />
                                    <span className="ml-[2px]">4.8 Rated</span></div>
                                <div className="text-[12px] font-medium ml-[10px] mt-[10px]">Get the Lazada app to enjoy</div>
                                <div className="pl-[30px] pt-[20px]">
                                    <div className="flex items-center mb-[4px]">
                                        <img className="w-[36px] h-[36px]z" src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_2200x2200q80.png_.webp" />
                                        <span className="text-[14px] font-medium ml-2 max-w-[82px] leading-[16px]">FREE SHIPPING</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img className="w-[36px] h-[36px]" src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_2200x2200q80.png_.webp" />
                                        <span className="text-[14px] font-medium ml-2 max-w-[82px] leading-[16px]">EXCLUSIVE VOUCHERS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mt-[7px]">
                            <img className="max-w-[90px] max-h-[90px]" src="https://img.lazcdn.com/us/domino/ae0097cdb1eceff6a1c6c8e67b5c09f7.png_2200x2200q80.png_.webp" />
                            <div className="ml-[5px]">
                                <img className="mb-[12px] cursor-pointer" src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01uAl8kB1wEv2DNjdhB_!!6000000006277-2-tps-125-36.png" alt="" />
                                <img className="cursor-pointer" src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01QJGFfc1S0mKngu4rQ_!!6000000002185-2-tps-125-36.png" alt="" />
                            </div>
                        </div>
                        <div className="mt-[4px] text-[10px] font-medium leading-[12px]">Download the app now by scanning the QR code</div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default TopContent