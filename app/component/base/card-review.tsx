
import { Reviews } from "@/app/type/review"
import Image from "next/image"

export default function ReviewCard({title, reviewText, person, job, imageUrl, color} : Reviews) {
    return (
       
            <div className={`${color} w-3/4 min-h-72 p-3 rounded-xl lg:p-8 flex flex-col   gap-4 divide-y-4 divide-base-black justify-evenly`}>
                <div>
                    <p className='text-3xl text-start lg:text-5xl 2xl:text-7xl font-extrabold font-sdisplay tracking-widest'>{title}</p>
                </div>
                <div>
                    <p className='text-center py-2 text-2xl font-sdisplay lg:text-4xl font-sdisplay text-semibold '>{reviewText}</p>
                </div>
                <div className='flex flex-row items-center py-2 gap-4 text-start'>
                    <div className='relative size-14 md:size-24 rounded-full'>
                        <Image style={{width : '100%', height: '100%', borderRadius: '100%', objectFit: 'cover'}} alt={person} src={imageUrl} fill={true} />
                    </div>
                    <div>
                        <p className='text-xl font-sdisplay lg:text-2xl'>{person}</p>
                        <p className='text-xl font-sdisplay lg:text-2xl text-black/80' >{job}</p>
                    </div>
                </div>
            </div>
          
    )
}