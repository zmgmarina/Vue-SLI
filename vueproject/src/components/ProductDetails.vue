<template>
  <div>
    <input class="input" type="text" placeholder="name" v-model="product.name">
    <input class="input" type="text" placeholder="price" v-model.number="product.price">
    <p>{{ formattedPrice }}</p>
    <p>{{ product.available ? "Available" : "Out of stock" }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        price: 0,
        available: true,
      },
    };
  },
  computed: {
    formattedPrice() {
      return `Name product: ${this.product.name},  Price: $${this.product.price}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
