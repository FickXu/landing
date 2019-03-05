<template>
    <div class="header">
        <a href="javascript:void(0)" class="logo">
            <!-- <img src="../assets/logo.png" alt="logo"> -->
        </a>
        <div class="menu">
            <div class="item">路由一</div>
            <div class="item">路由二</div>
            <div class="item">路由三</div>
            <div class="item">路由四</div>
        </div>
        <div class="language">
            国际化
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="less" scoped>
    @import url('../public/landing.less');

    .header {
        width: 100%;
        height: @header-h;
        line-height: @header-h;
        box-shadow: @box-shadow;
        .layout-flex;
        .logo {
            flex: 2;
            background-color: @bg-color1;
            color: @assisted-color;
            text-align: center;
            background-image: url('../assets/logo.png');
            .bg-img-center;
        }
        .menu {
            flex: 7;
            background-color: @bg-color2;
            color: @assisted-color;
            .layout-flex;
            .justify-content(flex-end);
            .item {
                padding: 0 3%;
                &:nth-child(odd) {
                    background-color: @bg-color3;
                }
                &:nth-child(even) {
                    background-color: @bg-color1;
                }
            }
        }
        .language {
            flex: 1;
            background-color: @bg-color3;
            color: @assisted-color;
            text-align: center;
        }
    }
</style>