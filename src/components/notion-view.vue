<template>
    <div class="container">
        <div class="summary">
            <div class="title">
                Innomation赋能创业者
            </div>
            <div class="description">
                创新在技术和资本之间存在现实鸿沟，据统计，全球仅3%的创业企业可以成功获得早期投资，大量的创新理念无法实现。Innomation通过整合区块链技术并将其应用于孵化领域，实现创新资产化、价值显性化，拉近技术和资本的距离，让创业不再困难。
            </div>
        </div>
        <div class="infomations">
            <div>
                <div class="item">
                    <img src="../assets/zwt.jpg" alt="">
                    <span>可信可靠的团队合作</span>
                </div>
                <div class="item">
                    <img src="../assets/zwt.jpg" alt="">
                    <span>数据化的价值评估</span>
                </div>
                <div class="item">
                    <img src="../assets/zwt.jpg" alt="">
                    <span>通畅的股权代币化融资通道</span>
                </div>
                <div class="item">
                    <img src="../assets/zwt.jpg" alt="">
                    <span>持续的创新创业导师服务</span>
                </div>
                <div class="item">
                    <img src="../assets/zwt.jpg" alt="">
                    <span>公开可信的项目空间</span>
                </div>
                <div class="item">
                    <img src="../assets/zwt.jpg" alt="">
                    <span>托管可信的资金使用</span>
                </div>
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

    .container {
        height: 300px;
        width: 80%;
        margin: 30px auto 0;
        .layout-flex;
        flex-wrap: wrap;
        .summary {
            flex: 1;
            .title {
                width: 75%;
                margin: 30px auto 0;
                font-size: 28px;
                font-weight: 600;
            }
            .description {
                width: 75%;
                margin: 30px auto 0;
            }
        }
        .infomations {
            flex: 1;
            >div {
                .layout-flex;
                flex-wrap: wrap;
                .item {
                    min-width: 50%;
                    .layout-flex;
                    .align-items(center);
                    img {
                        width: 100px
                    }
                    span {}
                }
            }
        }
    }
    
</style>