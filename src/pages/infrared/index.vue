<template>
    <div :class="isShow ? 'infrared-container infrared-start infrared-show' : 'infrared-container infrared-start'">
        <div class="infrared-introduct">
            <div class="infrared-bg"></div>
            <div class="infrared-marker">
                <p class="infrared-text">{{infraredText}}</p>
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
            infraredText: '红外作业机',
            isShow: false
        };
    },
    mounted() {
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
.infrared-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .infrared-introduct {
        position: relative;
        margin-top: 100px;
        width: 916px;
        height: 289px;
    }
    .infrared-bg {
        width: 100%;
        height: 289px;
        background: transparent url('../../assets/imgs/infrared-photo@2x.png') no-repeat right center;
        background-size: contain;
    }
    // 图片下标注
    .infrared-marker {
        position: absolute;
        bottom: 0;
        width: 700px;
        height: 65px;
        z-index: -1;
        .infrared-text {
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
.infrared-start {
    .infrared-marker {
        .picture-line-wrapper {
            left: -700px;
        }
        .infrared-text {
            left: -240px;
        }
    }
}
.infrared-show {
    .infrared-marker {
        .picture-line-wrapper {
            left: 0;
        }
        .infrared-text {
           left: 120px;
        }
    }
}
</style>