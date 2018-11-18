<template>
    <div :class="isShow ? 'fire-content fire-content-start fire-content-show' : 'fire-content fire-content-start'">
        <router-link to="fireWord">
            <div class="conent-item content-introduction">
                <p class="content-item-text">{{introduction}}</p>
                <div class="content-item-line"></div>
            </div>
        </router-link>
        <router-link to="firePicture">
            <div class="conent-item content-picture">
                <p class="content-item-text">{{picture}}</p>
                <div class="content-item-line"></div>
            </div>
        </router-link>
        <router-link to="fireVideo">
            <div class="conent-item content-video">
                <p class="content-item-text">{{video}}</p>
                <div class="content-item-line"></div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            introduction: '介绍',
            picture: '图片',
            video: '视频',
            isShow: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.isShow = true;
        });
    }
}
</script>


<style lang="less" scoped>
.fire-content {
    margin-top: 28px;
    margin-left: 120px;
    width: 184px;
    height: 185px;
    font-size: 30px;
    font-weight: 600;

    a {
        display: block;
        height: 75px;
        width: 100%;
        text-decoration: none;
        color: #323232;
    }

    .conent-item {
        position: relative;
        height: 75px;
        width: 100%;
        line-height: 75px;
        vertical-align: bottom;
        letter-spacing: 3px;
        overflow-x: hidden;
        .content-item-text {
            position: absolute;
            width: 100%;
        }
        .content-item-line {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 3px;
            background-color: #61D2D8;
        }
    }
}
.fire-content-start {
    .conent-item {
        .content-item-text,
        .content-item-line {
           left: -185px;
           transition: left .25s ease;
        }
    }
    .content-introduction {
        .content-item-text{
            transition-delay: .75s;
        }
        .content-item-line {
            transition-delay: 1s;
        }
    }
    .content-picture {
        .content-item-text{
            transition-delay: 1.25s;
        }
        .content-item-line {
            transition-delay: 1.5s;
        }
    }
    .content-video {
        .content-item-text{
            transition-delay: 1.75s;
        }
        .content-item-line {
            transition-delay: 2s;
        }
    }
}
.fire-content-show {
    .conent-item {
        .content-item-text,
        .content-item-line {
           left: 0;
        }
    }
}
</style>

