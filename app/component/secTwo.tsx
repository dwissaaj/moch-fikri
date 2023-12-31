'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/style.css';

export default function SecTwo() {
    const dataPartOne = [
        {
            imageUrl : '/home/section/one/1.png'
        },
        {
            imageUrl : '/home/section/one/2.png'
        },
        {
            imageUrl : '/home/section/one/3.png'
        },
        {
            imageUrl : '/home/section/one/4.png'
        },
        {
            imageUrl : '/home/section/one/5.png'
        }
    ]
    
    const dataPartTwo = [
        {
            imageUrl : '/home/section/two/1.png'
        },
        {
            imageUrl : '/home/section/two/2.png'
        },
        {
            imageUrl : '/home/section/two/3.png'
        },
        {
            imageUrl : '/home/section/two/4.png'
        },
        {
            imageUrl : '/home/section/two/5.png'
        }
    ]
    return (
        <div className="bg-cover bg-home-gradient-two bg-no-repeat text-white ">
            <div className="w-full lg:w-3/4 mx-auto ">
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border-2 bg-base-black-mid border-maroon rounded-xl shadow-[7px_7px_0px_0px_rgb(125,10,10)]">
                        <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper bg-base-black-mid">
                            {dataPartOne.map(datas =>
                                <SwiperSlide key={datas.imageUrl} className='bg-base-black'>
                                    <div  className="bg-base-black-mid relative w-full h-44 lg:w-full lg:h-80 rounded-2xl ">
                                        <Image style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px' }} src={datas.imageUrl} alt="" fill={true} />
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                    <div>
                        <div>
                            <h2 className="text-3xl lg:text-6xl font-stmono">Sequence</h2>
                        </div>
                        <p className="font-st lg:text-2xl"> Wide range project advertising, indie film, short film to Content Creation.Clip by clip, frame by frame, key by key to produce amazing modern art</p>
                    </div>
                </div>

            </div>
            <div className="w-full lg:w-3/4 mx-auto ">
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div>
                            <h2 className="text-3xl lg:text-6xl font-stmono">Lenses</h2>
                        </div>
                        <p className="font-st lg:text-2xl">Wide range project advertising, indie film, short film to Content Creation. Capturing moment, idea and creative to perfection. Camera is just tools man behind of it is the art itself.
                        </p>
                    </div>
                    <div className="p-6 border-2 bg-maroon border-maroon rounded-xl shadow-[7px_7px_0px_0px_rgb(230,9,9)]">
                        <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper bg-base-black-mid">
                            {dataPartTwo.map(datas =>
                                <SwiperSlide key={datas.imageUrl} className=''>
                                    <div className=" relative w-full h-44 lg:w-full lg:h-80 rounded-2xl ">
                                        <Image style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px' }} src={datas.imageUrl} alt="" fill={true} />
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>

                </div>

            </div>
            <div className="text-center p-6 w-full lg:w-3/4 lg:h-1/2 mx-auto  ">
                <div>
                    <h2 className="text-3xl lg:text-6xl font-stmono">ART</h2>
                    <p className="font-st lg:text-2xl">With After Effect creating absolute modern art, perfect for fast information delivery. Motion graphic consist typography , logic, art and color palette
                        </p>
                </div>
                <div className="p-6 border-2 bg-base-black-mid border-maroon rounded-xl shadow-[7px_7px_0px_0px_rgb(230,9,9)]">
                    <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper bg-base-black-mid">
                        <SwiperSlide>
                            <video className="rounded-2xl " muted={true} autoPlay={true} loop={true}>
                                <source src="/home/section/three/1.mp4" type="video/mp4" />
                            </video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <video className="rounded-2xl " muted={true} autoPlay={true} loop={true}>
                                <source src="/home/section/three/2.mp4" type="video/mp4" />
                            </video>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}