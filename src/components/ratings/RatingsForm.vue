<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="radio" value="1" name="vote" v-model="voteValue">
            <input type="radio" value="2" name="vote" v-model="voteValue">
            <input type="radio" value="3" name="vote" v-model="voteValue">
            <input type="radio" value="4" name="vote" v-model="voteValue">
            <input type="radio" value="5" name="vote" v-model="voteValue">
            <button>Vote</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      voteValue: null,
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.voteValue, this.randomName);
      this.voteValue = null;
      this.getRandomStreamer();
    }
  },
  props: {
    getRandomStreamer: Function,
    randomName: String
  }
};
</script>

<style>

</style>
