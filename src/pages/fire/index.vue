<template>
    <div :class="isShow ? 'fire-container fire-start fire-show' : 'fire-container fire-start'">
        <div class="fire-introduct">
            <div class="fire-bg"></div>
            <div class="fire-marker">
                <p class="fire-text">{{fireText}}</p>
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
            fireText: '喷火作业机',
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
.fire-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .fire-introduct {
        position: relative;
        margin-top: 100px;
        width: 916px;
        height: 289px;
    }
    .fire-bg {
        width: 100%;
        height: 289px;
        background: transparent url('../../assets/imgs/fire-photo@2x.png') no-repeat right center;
        background-size: contain;
    }
    // 图片下标注
    .fire-marker {
        position: absolute;
        bottom: 0;
        width: 700px;
        height: 65px;
        z-index: -1;
        .fire-text {
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
.fire-start {
    .fire-marker {
        .picture-line-wrapper {
            left: -700px;
        }
        .fire-text {
            left: -240px;
        }
    }
}
.fire-show {
    .fire-marker {
        .picture-line-wrapper {
            left: 0;
        }
        .fire-text {
           left: 120px;
        }
    }
}
</style>