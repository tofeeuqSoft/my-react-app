import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
    const swiperRef = useRef(null);

    // High-quality travel images from Unsplash with locations
    const travelPhotos = [
        {
            id: 1,
            location: "Rajshahi,BD",
            image: "https://plus.unsplash.com/premium_photo-1681255760839-6581e2eb3e96?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Whitewashed buildings with blue domes overlooking the Aegean Sea"
        },
        {
            id: 2,
            location: "Dhaka, BD",
            image: "https://plus.unsplash.com/premium_photo-1680994646524-f220fc600ad0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Traditional Japanese temples during cherry blossom season"
        },
        {
            id: 3,
            location: "Chattogram, BD",
            image: "https://plus.unsplash.com/premium_photo-1700578056461-12908feb766f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg4fHx8ZW58MHx8fHx8",
            description: "Towering mountains and glacial lakes in Torres del Paine"
        },
        {
            id: 4,
            location: "Seint Martin, BD",
            image: "https://plus.unsplash.com/premium_photo-1691938887399-e969643a517f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Golden sand dunes stretching to the horizon"
        },
        {
            id: 5,
            location: "Sylhet, BD",
            image: "https://images.unsplash.com/photo-1592396355679-1e2a094e8bf1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Emerald lakes surrounded by the Canadian Rockies"
        },
        {
            id: 6,
            location: "Putiya Rajbari, Rajshahi",
            image: "https://images.unsplash.com/photo-1645551519404-ffbef68bf4be?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Tropical beaches and lush rice terraces"
        }
    ];

    return (
        <section id="travel-gallery" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                         <span className="text-blue-600 dark:text-blue-400">Travel Gallery</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        A visual journey through my favorite destinations around the world
                    </p>
                </div>

                <div className="relative">
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true
                        }}
                        grabCursor={true}
                        centeredSlides={true}
                        spaceBetween={30}
                        slidesPerView={'auto'}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        className="!pb-16 h-[500px]"
                    >
                        {travelPhotos.map((photo) => (
                            <SwiperSlide
                                key={photo.id}
                                className="!w-[300px] !h-[400px] rounded-xl overflow-hidden shadow-xl"
                            >
                                <div className="relative h-full group">
                                    <img
                                        src={photo.image}
                                        alt={photo.location}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="flex items-center text-white mb-2">
                                                <FiMapPin className="mr-2" />
                                                <h3 className="font-bold text-lg">{photo.location}</h3>
                                            </div>
                                            <p className="text-white/90 text-sm">{photo.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom Navigation Arrows */}
                    <button
                        onClick={() => swiperRef.current?.swiper.slidePrev()}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
                        aria-label="Previous photo"
                    >
                        <FiChevronLeft className="text-xl text-gray-800 dark:text-white" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.swiper.slideNext()}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300"
                        aria-label="Next photo"
                    >
                        <FiChevronRight className="text-xl text-gray-800 dark:text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;








