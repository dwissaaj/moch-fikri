import Image from 'next/image'
export default function Company () {
    return (
        <div className="flex flex-col items-center justify-center bg-neutral-700 ">
                    <div className="">
                        <p className=" font-sdisplay italic text-white/80 text-2xl">CLIENT OF MINE</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4">
                        <div className="relative size-32 md:size-52">
                            <Image style={{ width: '100%' }} alt="harf media" src="/home/company/6.svg" fill={true} />
                        </div>
                        <div className="relative size-32 md:size-52">
                            <Image style={{ width: '100%' }} alt="harf media" src="/home/company/7.svg" fill={true} />
                        </div>
                        <div className="relative size-32 md:size-52">
                            <Image style={{ width: '100%' }} alt="harf media" src="/home/company/8.svg" fill={true} />
                        </div>
                        <div className="relative size-32 md:size-52">
                            <Image style={{ width: '100%' }} alt="harf media" src="/home/company/9.svg" fill={true} />
                        </div>
                    </div>

                </div>
    )
}