import Image from "next/image"

export default function Positive() {
    return (
        <div className="">
            <div className=" w-full lg:w-1/2 mx-auto bg-base-black">
            <div className="grid grid-rows-1 p-4 gap-6 lg:gap-12">
                <div className="grid grid-cols-12 gap-4 ">
                    <div className="col-span-4 p-4 bg-base-black-low rounded-xl text-white ">
                        <div className="flex flex-col justify-evenly items-start  gap-2">
                            <div>
                                <Image alt='reliable' src='/home/grid/1.svg' width={50} height={50} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-stmono">Reliable</h3>
                            </div>
                            <div>
                                <p className="font-st">There is no abonden project in my dictionary 💵</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-8 p-4 bg-base-black-low rounded-xl text-white ">
                        <div className="flex flex-col justify-evenly items-start  gap-2">
                            <div>
                                <Image alt='reliable' src='/home/grid/4.svg' width={50} height={50} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-stmono">Need More Crew?</h3>
                            </div>
                            <div>
                                <p className="font-st">If you think want to scale your production? call me. I have been networking with dozens of professional in agency, production house and freelance from variance of job and production type. Director of Photography, Gaffer, Animator to 3D Artist ready for help our content 👥</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* split into 2 grid */}
                <div className=" grid grid-cols-3 gap-3 ">
                    <div className=" p-4 bg-base-black-low rounded-xl text-white ">
                        <div className="flex flex-col justify-evenly items-start  gap-2">
                            <div>
                                <Image alt='reliable' src='/home/grid/3.svg' width={50} height={50} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-stmono">Pro</h3>
                            </div>
                            <div>
                                <p className="font-st">Small business or owner I still dedicated for creating amazing product 👷</p>
                            </div>
                        </div>
                    </div>
                    <div className=" p-4 bg-base-black-low rounded-xl text-white ">
                        <div className="flex flex-col justify-evenly items-start  gap-2">
                            <div>
                                <Image alt='reliable' src='/home/grid/2.svg' width={50} height={50} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-stmono">Fast</h3>
                            </div>
                            <div>
                                <p className="font-st">Content creation is about Speed and against time. We can do lighting for you ⚡</p>
                            </div>
                        </div>
                    </div>
                    <div className=" p-4 bg-base-black-low rounded-xl text-white ">
                        <div className="flex flex-col justify-evenly items-start  gap-2">
                            <div>
                                <Image alt='reliable' src='/home/grid/5.svg' width={50} height={50} />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-stmono">Legal</h3>
                            </div>
                            <div>
                                <p className="font-st">I support music and artist for providing
music for content result in free copyright. All our app also premium
for supporting developer 🎵</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}