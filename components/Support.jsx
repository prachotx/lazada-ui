import Wrapper from "./Wrapper"

const Support = () => {
    return (
        <section className="bg-white mt-[30px]">
            <Wrapper>
                <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 text-[16px] text-[#183544] py-8">
                    <div>
                        <h4 className="mb-8">Payment Methods</h4>
                        <div className="flex gap-4">
                            <img src="https://placehold.co/53x39" alt="" />
                            <img src="https://placehold.co/53x39" alt="" />
                            <img src="https://placehold.co/53x39" alt="" />
                            <img src="https://placehold.co/53x39" alt="" />
                        </div>
                    </div>
                    <div className="mb-4 md:mb-0">
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

export default Support