<template>
    <div class="introduct-box">
        <div class="introlduct-head">
            <i class="introduct-close-btn" @click="closeBox"></i>
        </div>
        <div class="introduct-box-content">
            <div class="introduct-content-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeBox() {
            this.$router.go(-1);
        }
    }
}
</script>


<style lang="less" scoped>
.introduct-box {
    position: relative;
    margin-top: 20px;
    background-color: #85DADF;
    border-radius: 20px;
    border: 3px solid #42CBD2;

    .introduct-close-btn {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 30px;
        height: 30px;
        background: transparent url('../assets/imgs/close@2x.png') no-repeat center;
        background-size: contain;
        cursor: pointer;
    }
    .introduct-box-content {
        padding: 100px;
        height: 551px;
        box-sizing: border-box;
        font-size: 16px;
        color: #323232;
        line-height: 20px;
        font-family: 'Microsoft Yahei';
        img {
            display: block;
            margin: 0 auto;
        }
    }
    .introduct-content-wrapper {
        height: 100%;
        overflow: auto;
    }
}
</style>

