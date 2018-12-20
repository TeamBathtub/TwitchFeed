<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <input v-model="keyword" placeholder="Ninja">
    <button>Search</button>
  </form>
</template>

<script>
export default {
  props: {
    search: String,
    onSearch: Function
  },
  data() {
    return {
      keyword: this.search || ''
    };
  },
  watch: {
    search(newSearch) {
      if(this.keyword !== newSearch) {
        this.keyword = newSearch;
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        query: {
          search: encodeURIComponent(this.keyword)
        }
      });
    }
  }
};
</script>

<style scoped>
.search-form {
  text-align: center;
  margin-bottom: 40px;
}
input {
  margin-right: 5px;
  font-size: 20px;
  padding: 1vw;
  border: black solid 1px; 
}
button {
  font-size: 2vh;
}
</style>
