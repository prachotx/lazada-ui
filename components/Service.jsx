import Wrapper from "./Wrapper";

export default function Service() {
    return (
        <header>
            <Wrapper>
                <div className="bg-white text-[#999] text-[12px] grid grid-cols-4 py-[10px] rounded-xl">

                    <div className="pl-[30px] border-r-[1px] border-[#eee] cursor-pointer group">
                        <img className="w-[120px] h-[18px]" src="https://img.lazcdn.com/us/domino/b91bbd59-54e7-47e6-96aa-21d17deceda1_TH-240-36.png_500x500q80.png" />
                        <p className="mt-[2px] group-hover:text-red-700">Lazmall</p>
                    </div>

                    <div className="pl-[30px] border-r-[1px] border-[#eee] cursor-pointer group">
                        <img className="w-[120px] h-[18px]" src="https://img.lazcdn.com/us/domino/d682a139-c8d5-4082-8b08-a7623fd117d3_TH-240-36.png_500x500q80.png" />
                        <p className="mt-[2px] group-hover:text-red-700">Voucher</p>
                    </div>

                    <div className="pl-[30px] border-r-[1px] border-[#eee] cursor-pointer group">
                        <img className="w-[120px] h-[18px]" src="https://img.lazcdn.com/us/domino/f6f50d22f023e55215fbb3db0eddcbfd.png_500x500q80.png" />
                        <p className="mt-[2px] group-hover:text-red-700">Travel</p>
                    </div>

                    <div className="pl-[30px] cursor-pointer group">
                        <img className="w-[120px] h-[18px]" src="https://img.lazcdn.com/us/domino/b8fbdde3-0483-4c0d-a837-eca3dbe6bdcc_TH-240-36.jpg_500x500q80.jpg" />
                        <p className="mt-[2px] group-hover:text-red-700">Topup</p>
                    </div>

                </div>
            </Wrapper>
        </header>
    )
}