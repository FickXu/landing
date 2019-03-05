<template>
    <div class="full-screen">
        <div class="video">
            <video src="http://player.youku.com/player.php/sid/XNDAxODQzMTA2OA==/v.swf" controls='controls' loop="loop" preload="preload"></video>
            <a href="javascript:void(0)" class="download">
                商业计划书
            </a>
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

    .full-screen {
        height: @full-screen-h;
        background-color: @bg-color2;
        .layout-flex;
        .justify-content;
        .align-items;
        text-align: center;
        .video {
            .layout-flex;
            .justify-content;
            .flex-direction(column);
            .download {
                box-shadow: @box-shadow;
                color: @main-color;
                background-color: #fff;
                text-decoration: none;
                padding: 10px 25px;
                border-radius: 5px;
                margin: 50px auto;
            }
        }
    }
    
</style>