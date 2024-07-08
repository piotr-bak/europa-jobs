'use client'

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { ArticleCard } from './ArticleCard';
import { formatDate } from '../_lib/utils/formatDate';
import { ArticleItem } from '../_types';


export function RecommendedPosts( { posts }: { readonly posts: ArticleItem[] } ) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={2}
            loop
            autoplay={{ delay: 2500 }}
        >
            {posts && posts.map( ( item, index ) => (
                <SwiperSlide key={`slide-item-${index}`}>
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
