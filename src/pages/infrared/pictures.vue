<template>
    <IntroductBox class="picture-introduct-box">
        <div class="infrared-picture-wrapper">
            <swiper :options="swiperOption" class="infrared-picture-swiper">
                <swiper-slide v-for="i in pictureCount" :key="i">
                    <div :class="`infrared-swiper-item infrared-swiper-${i}`"></div>
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
.infrared-picture-wrapper {
    margin: 0 auto;
    width: 940px;
    height: 100%;
    opacity: .8;
    .infrared-picture-swiper {
        height: 100%;
    }
    .infrared-swiper-item {
        height: 100%;
        background: no-repeat center;
        background-size: contain;
    }
    .infrared-swiper-1 {
        background-image: url('../../assets/imgs/infrared/1.jpg')
    }
    .infrared-swiper-2 {
        background-image: url('../../assets/imgs/infrared/2.jpg')
    }
    .infrared-swiper-3 {
        background-image: url('../../assets/imgs/infrared/3.jpg')
    }
    .infrared-swiper-4 {
        background-image: url('../../assets/imgs/infrared/4.jpg')
    }
}
</style>
