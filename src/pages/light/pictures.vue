<template>
    <IntroductBox class="picture-introduct-box">
        <div class="light-picture-wrapper">
            <swiper :options="swiperOption" class="light-picture-swiper">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </IntroductBox>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import IntroductBox from '@/components/IntroductBox';
export default {
    components: {
        swiper,
        swiperSlide,
        IntroductBox
    },
    data() {
        return {
            swiperOption: {
                autoplayDisableOnInteraction: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.light-picture-wrapper {
    margin: 18px auto 0;
    width: 940px;
    height: 520px;
    opacity: .8;
    .light-picture-swiper {
        height: 100%;
    }
}
</style>
