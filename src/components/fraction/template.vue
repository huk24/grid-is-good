<template>
    <div class="page">
        <h1 class="title">fr</h1>
        <div>
            Единица измерения fr(фракция) это гибкая величина позволяющая задать
            треку размер пропорциональный свободному пространству в контейнере.
            <br>
            Формула: 1fr = свободной пространство / сумма всех фракций треков
        </div>
        <div>
            grid-template-columns: repeat(3, auto);
        </div>
        <div class="fr1">
            <div class="item">asdjasjdjasjdajsdjasasdasdasdasdasd</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
        <div>
            grid-template-columns: repeat(3, 1fr);
        </div>
        <div class="fr1 with-fr">
            <div class="item">asdjasjdjasjdajsdjasasdasdasdasdasd</div>
            <div class="item">2</div>
            <div class="item">3</div>
        </div>
        <div>
            grid-template-columns: 1fr 2fr 3fr;
        </div>
        <div class="fr1 test3">
            <div
                v-for="n in 3"
                :key="`fr1t2-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
        <div>
            grid-template-columns: repeat(4, 0.2fr);
        </div>
        <div class="fr1 test2">
            <div
                v-for="n in 4"
                :key="`fr2-${n}`"
                class="item"
            >
                {{ n }}
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>
