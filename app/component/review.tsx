'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/style.css';
import ReviewCard from './base/card-review';
import { Reviews } from '../type/review';
interface ReviewsCard {
    title: string;
    reviewText: string;
    person: string;
    job: string;
    imageUrl: string;
    color: string;

}
export default function Review() {
    let reviewsAll = [
        {
            title: 'CREATIVE',
            reviewText: 'From motion graphic, editing and art he basically can do everything. Man behind the gun is best word define him',
            person: 'Dwi Aji',
            job: 'Front End | Data Analyst',
            imageUrl: '/avatar/review-5.jpg',
            color: 'bg-pastel-yellow'
        },
        {
            title: 'CREATIVE',
            reviewText: 'I have been working in industry for years, Fikri one of the best art director we can find. Her craftwork is amazing.',
            person: 'Rivenskly',
            job: 'Director Of Photography',
            imageUrl: '/avatar/review-1.svg',
            color: 'bg-pastel-beige'
        },
        {
            title: 'HARD WORKING',
            reviewText: 'When he design and motion graphic it`s always mesmerizing me, especially the color can make the design so lively',
            person: 'Muhaimin Atmaja',
            job: 'Gaffer',
            imageUrl: '/avatar/review-3.jpg',
            color: 'bg-pastel-brown'
        },
        {
            title: 'CONSISTEN',
            reviewText: 'He can become everything because consistent always produce advertising, indie film even motion graphic for our client',
            person: 'Fuad',
            job: 'Editor | Drone Pilot',
            imageUrl: '/avatar/review-4.jpg',
            color: 'bg-pastel-green'
        },
        

    ]
    return (
        <div className='w-screen flex justify-center p-8 bg-base-black'>
            <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper bg-base-black">

                {reviewsAll.map(datas =>
                    <SwiperSlide className='bg-base-black'>
                        <ReviewCard title={datas.title} job={datas.job} person={datas.person}
                            imageUrl={datas.imageUrl} reviewText={datas.reviewText} color={datas.color} />

                    </SwiperSlide>
                )}
            </Swiper>

        </div>
    )
}