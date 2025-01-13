import Wrapper from "./Wrapper"

const Footer = () => {
    return (
        <footer className="md:bg-white">
            <Wrapper>
                <div className="flex justify-between py-[20px] md:py-[40px]">
                    <div className="hidden md:block">
                        <h4 className="text-[16px] text-[#2a2a2a]">Lazada Southeast Asia</h4>
                        <div className="flex gap-2 mt-2">
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <h4 className="text-[16px] text-[#2a2a2a]">Follow Us</h4>
                        <div className="flex gap-2 mt-2">
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                            <img className="rounded-full cursor-pointer" src="https://placehold.co/34x34" alt="" />
                        </div>
                    </div>
                    <div className="text-[14px] text-[#606060]">© Lazada 2024</div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer