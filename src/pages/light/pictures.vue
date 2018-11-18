<template>
    <IntroductBox class="picture-introduct-box">
        <div class="light-picture-wrapper">
            <swiper :options="swiperOption" class="light-picture-swiper">
                <swiper-slide v-for="i in pictureCount" :key="i">
                    <div :class="`light-swiper-item light-swiper-${i}`"></div>
                </swiper-slide>
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
            pictureCount: [1, 2, 3, 4],
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
    margin: 0 auto;
    width: 940px;
    height: 100%;
    opacity: .8;
    .light-picture-swiper {
        height: 100%;
    }
    .light-swiper-item {
        height: 100%;
        background: no-repeat center;
        background-size: contain;
    }
    .light-swiper-1 {
        background-image: url('../../assets/imgs/light/1.jpg')
    }
    .light-swiper-2 {
        background-image: url('../../assets/imgs/light/2.jpg')
    }
    .light-swiper-3 {
        background-image: url('../../assets/imgs/light/3.jpg')
    }
    .light-swiper-4 {
        background-image: url('../../assets/imgs/light/4.jpg')
    }
}
</style>
