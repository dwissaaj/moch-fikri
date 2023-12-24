import Link from "next/link";

export default function Head() {
    return (
        <div className="h-dvh bg-home-pattern font-sinline py-8 ">
            <div className="w-screen flex flex-col justify-center gap-8 items-center ">
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
                            <canvas className="size-6 lg:size-12 2xl:size-16  bg-pastel-purple rounded-full"></canvas>
                            <p className="font-sdisplay font-extrabold text-white text-2xl lg:text-4xl 2xl:text-6xl">MOTION GRAPHIHC</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}