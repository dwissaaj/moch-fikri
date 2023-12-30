import Link from "next/link";
import Company from "./company";

export default function Head() {
    return (
        <div className="bg-home-pattern font-sinline ">
            <div className="flex flex-col justify-between h-screen">
                <div className=" flex flex-col justify-center gap-8 items-center ">
                    <div className="text-center p-4">
                        <h1 className="text-5xl md:text-6xl lg:text-9xl text-white font-sdisplay font-extrabold">MOCHAMAD FIKRI</h1>
                        <p className="text-lg md:text-xl lg:text-3xl text-white/80 font-sdisplay text-center">Don`t need to see my
                            face just look at my content. Won`t eat or sleep until I finished my death-line</p>
                    </div>
                    <div className="flex items-center gap-9 backdrop-blur-xl font-sdisplay">
                        <Link href='' className='w-44 lg:w-52 text-lg lg:text-2xl shadow-md shadow-neutral-100 text-center transition ease-in-out hover:bg-neutral-200  bg-neutral-500 px-8 py-2 text-black rounded-2xl'>Contact </Link>
                        <Link href='' className="text-lg lg:text-2xl
                    transition duration-300 ease-in-out hover:-translate-y-2 text-white underline"> Explore my Project</Link>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col md:flex-row gap-3 items-start justify-start">
                            <div className="flex items-center gap-3">
                                <canvas className="size-6 lg:size-12 2xl:size-16  bg-pastel-blue rounded-full"></canvas>
                                <p className="font-sdisplay font-extrabold text-white text-2xl lg:text-4xl 2xl:text-6xl">EDITOR</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <canvas className="size-6 lg:size-12 2xl:size-16  bg-pastel-pink rounded-full"></canvas>
                                <p className="font-sdisplay font-extrabold text-white text-2xl lg:text-4xl 2xl:text-6xl">VIDEOGRAPHER</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <canvas className="size-6 lg:size-12 2xl:size-16  bg-pastel-orange rounded-full"></canvas>
                                <p className="font-sdisplay font-extrabold text-white text-2xl lg:text-4xl 2xl:text-6xl">MOTION GRAPHIHC</p>
                            </div>

                        </div>

                    </div>
                    <div className=" flex justify-around ">
                        <div>
                            <p className="text-white font-sdisplay text-2xl lg:text-4xl 2xl:text-6xl">Collaboration With</p>
                        </div>
                        <div>
                            <Link className="text-4xl lg:text-6xl 2xl:text-8xl text-teal-500 font-extrabold  transition duration-300 ease-in-out hover:text-teal-300" href="https://www.kisetsu.tech/" >KISETSU.TECH</Link>
                        </div>
                    </div>
                    {/* <div className="absolute bottom-0 overflow-hidden">
                    <Company />
                </div> */}

                </div>
                <div>
                    <Company />
                </div>
            </div>
        </div>
    )
}