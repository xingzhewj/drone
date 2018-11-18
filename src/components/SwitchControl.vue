<template>
    <div :class="controlClass">
        <div class="fire-control" @click="moveRightDown('fire')"></div>
        <router-link to="/" @click.native="restore">
            <div class="main-control"></div>
        </router-link>
        <div class="light-control" @click="moveRightDown('light')"></div>
        <div class="infrared-control" @click="moveRightDown('infrared')"></div>
        <div class="hide-control" @click="hideDroneBtn"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // normal-正常,zoom-缩小至右下角,hidden-隐藏
            controlStatus: 'normal',
            controlClass: 'control-container'
        };
    },
    methods: {
        timeamp() {
            return Date.now();
        },
        restore() {
            this.controlStatus = 'normal';
        },
        moveRightDown(name) {
            this.controlStatus = 'zoom';
            this.$router.push({
                name,
                query: {
                    t: this.timeamp()
                }
            })
        },
        hideDroneBtn() {
            if (this.controlStatus === 'hidden') {
                this.controlStatus = 'zoom';
            }
            else {
                this.controlStatus = 'hidden';
            }
        }
    },
    watch: {
        controlStatus() {
            let cls = 'control-container';
            if (this.controlStatus === 'zoom') {
                cls = cls + ' control-zoom';
            }
            else if (this.controlStatus === 'hidden') {
                cls = cls + ' control-hidden'
            }
            this.controlClass = cls;
        }
    }
}
</script>

<style lang="less" scoped>
.control-container {
    position: relative;
    .fire-control {
        position: absolute;
        top: 1094px;
        left: 95px;
        z-index: 999;
        width: 383px;
        height: 303px;
        background: transparent url('../assets/imgs/fire@2x.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
        transition: width 1s ease, top 1s ease, height 1s ease, left 1s ease, right 1s ease;
    }
    .main-control {
        position: absolute;
        top: 733px;
        left: 262px;
        width: 393px;
        height: 446px;
        background: transparent url('../assets/imgs/main@2x.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
        transition: width 1s ease, top 1s ease, height 1s ease, left 1s ease, right 1s ease;
    }
    .light-control {
        position: absolute;
        top: 554px;
        left: 526px;
        z-index: 999;
        width: 242px;
        height: 257px;
        background: transparent url('../assets/imgs/light@2x.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
        transition: width 1s ease, top 1s ease, height 1s ease, left 1s ease, right 1s ease;
    }
    .infrared-control {
        position: absolute;
        top: 773px;
        left: 673px;
        z-index: 999;
        width: 285px;
        height: 322px;
        background: transparent url('../assets/imgs/infrared@2x.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
        transition: width 1s ease, top 1s ease, height 1s ease, left 1s ease, right 1s ease;
    }
    .hide-control {
        display: none;
    }
}
// 按钮缩小动画
.control-zoom {
    .fire-control {
        top: 1575px;
        left: 731px;
        width: 228px;
        height: 180px;
    }
    .main-control {
        left: 715px;
        top: 1209px;
        width: 233px;
        height: 264px;
    }
    .light-control {
        top: 1103px;
        left: 872px;
        width: 144px;
        height: 154px;
    }
    .infrared-control {
        left: 875px;
        top: 1422px;
        width: 169px;
        height: 191px;
    }
    .hide-control {
        display: block;
        position: absolute;
        left: 877px;
        top: 1730px;
        width: 99px;
        height: 111px;
        background: transparent url('../assets/imgs/hide@2x.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
    }
}
// 隐藏按钮
.control-hidden {
    .fire-control {
        left: 827px;
        top: 1640px;
        width: 0;
        height: 0;
        z-index: -1;
    }
    .main-control {
        left: 712px;
        top: 1508px;
        width: 233px;
        height: 264px;
    }
    .light-control {
        left: 827px;
        top: 1640px;
        width: 0;
        height: 0;
        z-index: -1;
    }
    .infrared-control {
        left: 827px;
        top: 1640px;
        width: 0;
        height: 0;
        z-index: -1;
    }
    .hide-control {
        display: block;
        position: absolute;
        left: 877px;
        top: 1730px;
        width: 99px;
        height: 111px;
        background: transparent url('../assets/imgs/show@2x.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
    }
}
</style>
