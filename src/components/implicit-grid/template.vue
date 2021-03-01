<template>
    <div class="page">
        <h1 class="title">Неявный грид</h1>
        <div>
            Нельзя использовать repeat()
            <br>
            <br>
            grid-auto-rows: 100px 50px 80px;<br>
            grid-auto-columns: 1fr;
        </div>
        <div class="row-example">
            <div class="auto">
                <div
                    v-for="n in cols"
                    :key="`lines1-${n}`"
                    class="item"
                >
                    {{ n }}
                </div>
            </div>
            <div class="vertical-line"/>
            <div>
                <div class="auto columns">
                    <div
                        v-for="n in cols"
                        :key="`lines1-${n}`"
                        class="item"
                    >
                        {{ n }}
                    </div>
                </div>
                <button @click="cols--">
                    -
                </button>
                <button @click="cols++">
                    +
                </button>
            </div>
        </div>
        <img src="./gta.png" alt="">
        <div class="auto with-gta">
            <div class="item zone1">
                zone1
            </div>
            <div class="item zone2">
                zone2
            </div>
            <div class="item zone3">
                zone3
            </div>
            <div class="item zone4">
                zone4
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>
