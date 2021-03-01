<template>
  <div id="app">
      <router-view/>
      <fixed-nav />
  </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100%;
    padding: 50px;
    display: flex;
    font-size: 36px;
}

.nobr {
    white-space: nowrap;
}

.page {
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px;
    grid-auto-rows: auto;
    grid-gap: 30px;
    place-content: start;

    .item {
        background-color: #908e8e;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active {
            background-color: #a9a96d;
        }
    }

    .example {
        display: grid;
        grid-template: 50px 50px / repeat(3, 1fr);
        place-content: center;
        grid-gap: 1px;

        .center {
            place-self: center;
        }
    }

    .title {
        text-align: center;
        margin: 0;
        font-weight: 500;
        font-size: 50px;
        grid-row: 1;
    }

    .text {
        margin: 0;
    }

    .row-example {
        display: flex;
        justify-content: center;

        & > *:not(:last-child) {
            margin-right: 30px;
        }

        .vertical-line {
            width: 2px;
            background-color: black;
        }
    }
}
</style>
