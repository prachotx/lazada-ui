import Wrapper from "./Wrapper";

export default function Footer_1() {
    return (
        <section>
            <Wrapper>
                <div className="grid grid-cols-3 gap-3 border-t-[1px] border-[#e2e2e2] pt-[30px] mt-[10px]">
                    <img className="cursor-pointer hover:shadow-md" alt="Lazada e-gift card" src="https://img.lazcdn.com/us/domino/f5e6399b7b9299c0f332788e8c0cfe9b.jpg_2200x2200q80.jpg" />
                    <img className="cursor-pointer hover:shadow-md" alt="UOB" src="https://img.lazcdn.com/us/domino/473d34116f76f14b7fa5b37df814c587.jpg_2200x2200q80.jpg" />
                    <img className="cursor-pointer hover:shadow-md" alt="JCB" src="https://img.lazcdn.com/us/domino/566a5c876e234698b25ac2c5276c5660.jpg_2200x2200q80.jpg" />
                </div>
                <div className="flex text-[#0f136d] pt-[50px]">

                    <div className="w-[25%]">
                        <h3 className="text-[16px] mb-2">Customer Care</h3>
                        <ul className="text-[13px]">
                            <li><a href="">Help Center</a></li>
                            <li><a href="">How to Buy</a></li>
                            <li><a href="">Shipping & Delivery</a></li>
                            <li><a href="">International Product Policy</a></li>
                            <li><a href="">How to Return</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="w-[25%]">
                        <h3 className="text-[16px] mb-2">Lazada</h3>
                        <ul className="text-[13px]">
                            <li><a href="">About Lazada</a></li>
                            <li><a href="">Afﬁliate Program</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Press & Media</a></li>
                            <li><a href="">Security</a></li>
                            <li><a href="">Popular Products</a></li>
                            <li><a href="">Intellectual Property Protection</a></li>
                        </ul>
                    </div>

                    <div className="flex items-start w-[50%]">
                        <div className="flex items-center mr-10">
                            <img className="w-[42px] h-[42px] mr-3" src="https://img.lazcdn.com/us/domino/47866b83cc0d0a3c74d429f89ff42423.png_2200x2200q80.png_.webp" data-spm-anchor-id="a2o4m.homepage.4159995340.i0.11257f6dEndZqQ" />
                            <div>
                                <div className="text-[#f36f36] text-[16px]">Always Better</div>
                                <div className="text-[14px]">Download the App</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img className="rounded-sm cursor-pointer" src="https://placehold.co/126x42" alt="" />
                            <img className="rounded-sm cursor-pointer" src="https://placehold.co/126x42" alt="" />
                            <img className="rounded-sm cursor-pointer" src="https://placehold.co/126x42" alt="" />
                        </div>
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}