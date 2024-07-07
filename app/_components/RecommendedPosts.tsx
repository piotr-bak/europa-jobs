'use client'

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { ArticleItem } from '../_types';
import { ArticleCard } from './ArticleCard';
import { formatDate } from '../_lib/utils/formatDate';


export function RecommendedPosts( { posts }: { posts: ArticleItem[] } ) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop
            autoplay={{ delay: 2500 }}
        >
            {posts && posts.map( ( item ) => (
                <SwiperSlide>
                    <ArticleCard
                        title={item.title}
                        href={item.key}
                        mediaUrl={item.mediaUrl}
                        date={formatDate( item.addedAt )}
                    />
                </SwiperSlide>
            ) )}
        </Swiper>
    )
}
