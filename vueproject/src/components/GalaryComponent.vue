<template>
    <h1>{{ msg }}</h1>
    <img class="big" :src="selectImg">
    <div><img @click="selectCat(cat)" v-for="cat in cats" :key="cat" :src="cat"></div>
</template>

<script>
    export default {
        name: 'GalaryComponent',
        props: {
            msg: String
        },
        data() {
            return {
                selectImg: require('@/assets/image/1.jpg'),
                cats: {
                    cat1:require('@/assets/image/1.jpg'),
                    cat2:require('@/assets/image/2.jpg'),
                    cat3:require('@/assets/image/3.jpg'),
                }
            }
        },
        methods: {
            selectCat(cat) {
                this.selectImg = cat
            }
        },
    }
</script>

<style lang="scss" scoped>
     div {
    display: flex;
    gap: 10px;
  }

  img {
    width: 100px;
  }

  .big {
    width: 300px;
    height: 300px;
  }
</style>