<template>
    <div :class="isShow ? 'light-container light-start light-show' : 'light-container light-start'">
        <div class="light-introduct">
            <div class="light-bg"></div>
            <div class="light-marker">
                <p class="light-text">{{lightText}}</p>
                <div class="picture-line-wrapper">
                    <div class="picture-line"></div>
                    <div class="picture-line-tail"></div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lightText: '可见光作业机',
            isShow: false
        };
    },
    mounted() {
        this.$router.push({
            name: 'lightList'
        });
        setTimeout(() => {
            this.isShow = true;
        });
    },
    updated() {
        setTimeout(() => {
            this.isShow = true;
        });
    }
}
</script>

<style lang="less" scoped>
.light-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .light-introduct {
        position: relative;
        margin-top: 100px;
        width: 812px;
        height: 403px;
    }
    .light-bg {
        width: 100%;
        height: 375px;
        background: transparent url('../../assets/imgs/light-photo@2x.png') no-repeat right center;
        background-size: contain;
    }
    // 图片下标注
    .light-marker {
        position: absolute;
        bottom: 0;
        width: 700px;
        height: 65px;
        z-index: -1;
        .light-text {
            position: absolute;
            left: 120px;
            bottom: 42px;
            font-size: 35px;
            line-height: 35px;
            height: 35px;
            font-weight: 600;
            color: #333;
            letter-spacing: 5px;
            transition: left .25s ease;
        }
    }
    .picture-line-wrapper {
        position: absolute;
        width: 700px;
        height: 65px;
        transition: left .25s ease .25s;
        .picture-line {
            height: 100%;
            background: transparent url('../../assets/imgs/picture-line.png') no-repeat center;
            background-size: contain;
        }
        .picture-line-tail {
            position: absolute;
            right: 0;
            top: 0;
            width: 73px;
            height: 65px;
            background: transparent url('../../assets/imgs/picture-line-tail@2x.png') no-repeat center;
            background-size: contain;
        }
    }
}
.light-start {
    .light-marker {
        .picture-line-wrapper {
            left: -700px;
        }
        .light-text {
            left: -240px;
        }
    }
}
.light-show {
    .light-marker {
        .picture-line-wrapper {
            left: 0;
        }
        .light-text {
           left: 120px;
        }
    }
}
</style>