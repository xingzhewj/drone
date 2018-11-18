<template>
    <IntroductBox class="picture-introduct-box">
        <div class="fire-picture-wrapper">
            <swiper :options="swiperOption" class="fire-picture-swiper">
                <swiper-slide v-for="i in pictureCount" :key="i">
                    <div :class="`fire-swiper-item fire-swiper-${i}`"></div>
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
.fire-picture-wrapper {
    margin: 0 auto;
    width: 940px;
    height: 100%;
    opacity: .8;
    .fire-picture-swiper {
        height: 100%;
    }
    .fire-swiper-item {
        height: 100%;
        background: no-repeat center;
        background-size: contain;
    }
    .fire-swiper-1 {
        background-image: url('../../assets/imgs/fire/1.jpg')
    }
    .fire-swiper-2 {
        background-image: url('../../assets/imgs/fire/2.jpg')
    }
    .fire-swiper-3 {
        background-image: url('../../assets/imgs/fire/3.jpg')
    }
    .fire-swiper-4 {
        background-image: url('../../assets/imgs/fire/4.jpg')
    }
}
</style>
