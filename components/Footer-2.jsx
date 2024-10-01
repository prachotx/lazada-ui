import Wrapper from "./Wrapper";

export default function Footer_2() {
    return (
        <section className="bg-white mt-[30px]">
            <Wrapper>
                <div className="grid grid-cols-3 text-[16px] text-[#183544] py-8">
                    <div>
                        <h4 className="mb-8">Payment Methods</h4>
                        <div className="flex gap-4">
                            <img src="https://placehold.co/53x39" alt="" />
                            <img src="https://placehold.co/53x39" alt="" />
                            <img src="https://placehold.co/53x39" alt="" />
                            <img src="https://placehold.co/53x39" alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-8">Delivery Services</h4>
                   
                            <div className="flex">
                                <img src="https://placehold.co/96x70" alt="" />
                                <img src="https://placehold.co/96x70" alt="" />
                                <img src="https://placehold.co/96x70" alt="" />
                            </div>
                            <div className="flex">
                                <img src="https://placehold.co/96x70" alt="" />
                                <img src="https://placehold.co/96x70" alt="" />
                                <img src="https://placehold.co/96x70" alt="" />
                            </div>
                            <div className="flex">
                                <img src="https://placehold.co/96x70" alt="" />
                                <img src="https://placehold.co/96x70" alt="" />
                                <img src="https://placehold.co/96x70" alt="" />
                            </div>
                          
             
                    </div>
                    <div>
                        <h4 className="mb-8">Verified by</h4>
                        <div className="flex gap-4">
                            <img src="https://placehold.co/102x60" alt="" />
                            <img src="https://placehold.co/102x60" alt="" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}