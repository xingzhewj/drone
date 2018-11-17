<template>
    <div class="home-container">
        <router-view></router-view>
        <SwitchControl></SwitchControl>
    </div>
</template>

<script>
import SwitchControl from '@/components/SwitchControl';
import Video from '@/components/Video';
export default {
    components: {
        SwitchControl,
        Video
    },
    data() {
        return {};
    }
}
</script>

<style lang="less" scoped>
.home-container {
    position: relative;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
}
</style>

