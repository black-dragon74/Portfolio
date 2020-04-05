<template>
    <section>
        <div id="main">
            <div class="fof">
                <h1 class="red--text">Four-oh-Four</h1>

                <div>
                    Sorry but the content you were looking cannot be found.
                </div>

                <div>
                    <br>
                    <v-btn to="/" class="text-uppercase elevation-3" dark color="cyan">
                        <span class="mdi mdi-home mr-2"></span>GO BACK TO HOME
                    </v-btn>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: '404',
    }
</script>

<style scoped>
    *{
        transition: all 0.6s;
    }

    html {
        height: 100%;
    }

    body{
        font-family: 'Lato', sans-serif;
        color: red;
        margin: 0;
    }

    #main{
        display: table;
        width: 100%;
        height: 100vh;
        text-align: center;
    }

    .fof{
        display: table-cell;
        vertical-align: middle;
    }

    .fof h1{
        font-size: 50px;
        display: inline-block;
        padding-right: 12px;
        animation: type .5s alternate infinite;
    }

    @keyframes type{
        from{box-shadow: inset -3px 0px 0px red;}
        to{box-shadow: inset -3px 0px 0px transparent;}
    }
</style>