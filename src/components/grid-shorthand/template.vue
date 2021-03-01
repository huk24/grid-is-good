<template>
    <div class="page">
        <h1 class="title">Shorthand: grid</h1>
        <div>
            <b>grid</b>: [ auto-flow && dense? ] &lt;'grid-auto-rows'&gt;? / &lt;'grid-template-columns'&gt;;
            <br>
            <br>
            <b>grid</b>: auto-flow 50px 40px 60px / repeat(3, 1fr);
            <br>
            <button
                @click="rows--"
            >
                -
            </button>
            <button
                @click="rows++"
            >
                +
            </button>
        </div>
        <div class="grid-rows">
            <div
                v-for="item in rows"
                :key="`row${item}`"
                class="item"
            >
                {{ item }}
            </div>
        </div>
        <div>
            <b>grid</b>: \&lt;'grid-template-rows'\&gt; / [ auto-flow && dense? ] \&lt;'grid-auto-columns'\&gt;?;
            <br>
            <br>
            <b>grid</b>: repeat(3, 50px) / auto-flow 1fr 2fr;
            <br>
            <button
                @click="columns--"
            >
                -
            </button>
            <button
                @click="columns++"
            >
                +
            </button>
        </div>
        <div class="grid-columns">
            <div
                v-for="item in columns"
                :key="`row${item}`"
                class="item"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script src="./script.js" />

<style scoped lang="scss" src="./style.scss"/>
