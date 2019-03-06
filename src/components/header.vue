<template>
    <div class="header">
        <div class="h-layout">
            <a href="javascript:void(0)" class="logo">
                <!-- <img src="../assets/logo.png" alt="logo"> -->
            </a>
            <div class="menu">
                <router-link tag="div" class="item" :to='{path: "/"}'>路由一</router-link>
                <router-link tag="div" class="item" :to='{path: "/"}'>路由二</router-link>
                <router-link tag="div" class="item" :to='{path: "/"}'>路由三</router-link>
                <router-link tag="div" class="item" :to='{path: "/"}'>路由四</router-link>
            </div>
            <div class="language">
                国际化
            </div>
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
        background-color: #ffffff;
        .h-layout {
            width: 95%;
            margin: 0 auto;
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
                color: @assisted-color;
                .layout-flex;
                .justify-content(flex-end);
                .item {
                    cursor: pointer;
                    padding: 0 3%;
                    &:nth-child(odd) {
                        background-color: @bg-color2;
                    }
                    &:nth-child(even) {
                        background-color: @bg-color1;
                    }
                }
            }
            .language {
                flex: 1;
                cursor: pointer;
                background-color: @bg-color3;
                color: @assisted-color;
                text-align: center;
            }
        }
    }
</style>