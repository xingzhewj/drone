<template>
    <IntroductBox>
        <div class="light-video-container">
            <video
                class="video-element"
                src="../../assets/media/video.mp4"
                poster="../../assets/imgs/fire-photo@2x.png"
                :preload="true"
                :autoplay="true"
                ref="videoEle"
                @click="playControl"
                @ended="playEnd"
            >
            </video>
            <div class="video-play-btn" v-show="isShowPlayBtn" @click="playControl"></div>
        </div>
    </IntroductBox>
</template>

<script>
import IntroductBox from '@/components/IntroductBox';
import Video from '@/components/Video';
export default {
    components: {
        IntroductBox,
        Video
    },
    data() {
        return {
            isShowPlayBtn: false
        };
    },
    methods: {
        playControl() {
            if (this.$refs.videoEle.paused) {
                this.isShowPlayBtn = false;
                this.$refs.videoEle.play();
            }
            else {
                this.isShowPlayBtn = true;
                this.$refs.videoEle.pause();
            }
        },
        playEnd() {
            this.$refs.videoEle.load();
            this.$refs.videoEle.pause();
        }
    }
}
</script>

<style lang="less" scoped>
.light-video-container {
    position: relative;
    width: 100%;
    height: 100%;
    .video-element {
        width: 994px;
        height: 470px;
        object-fit: fill;
    }
    .video-play-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 64px;
        height: 64px;
        transform: translate(-50%, -50%);
        background: rgba(234, 234, 234, 0.6) url('../../assets/imgs/play.png') no-repeat center;
        background-size: contain;
        border-radius: 100%;
        cursor: pointer;
    }
}
</style>

