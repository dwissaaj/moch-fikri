'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/style.css';
import ReviewCard from './base/card-review';


export default function Review() {
    const reviewsAll = [
        {
            title: 'CREATIVE',
            reviewText: 'From motion graphic, editing and art he basically can do everything. Man behind the gun is best word define him',
            person: 'Dwi Aji',
            job: 'Front End | Data Analyst',
            imageUrl: '/avatar/review-5.jpg',
            color: 'bg-maroon'
        },
        {
            title: 'CREATIVE',
            reviewText: 'I have been working in industry for years, Fikri one of the best art director we can find. Her craftwork is amazing.',
            person: 'Rivenskly',
            job: 'Director Of Photography',
            imageUrl: '/avatar/review-1.svg',
            color: 'bg-neutral-100'
        },
        {
            title: 'HARD WORKING',
            reviewText: 'When he design and motion graphic it`s always mesmerizing me, especially the color can make the design so lively',
            person: 'Muhaimin Atmaja',
            job: 'Gaffer',
            imageUrl: '/avatar/review-3.jpg',
            color: 'bg-maroon'
        },
        {
            title: 'CONSISTEN',
            reviewText: 'He can become everything because consistent always produce advertising, indie film even motion graphic for our client',
            person: 'Fuad',
            job: 'Editor | Drone Pilot',
            imageUrl: '/avatar/review-4.jpg',
            color: 'bg-neutral-100'
        },
        
    
    ]
    
    return (
        
            <div className=' flex justify-center p-8 '>
            <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
                {reviewsAll.map(datas =>
                    <SwiperSlide  key={datas.title} className=''>
                        <ReviewCard title={datas.title} job={datas.job} person={datas.person}
                            imageUrl={datas.imageUrl} reviewText={datas.reviewText} color={datas.color} />

                    </SwiperSlide>
                )}
            </Swiper>

        </div>
   
    )
}