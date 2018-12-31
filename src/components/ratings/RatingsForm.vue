<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label v-for="n in 5" :key="n">
        {{n}}<input type="radio" :value="n" name="vote" v-model="voteValue">
      </label>
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

  props: {
    randomName: String,
    onAdd: Function
  },

  methods: {
    handleSubmit() {
      let currentRating = { userName: this.randomName, score: this.voteValue };
      this.onAdd(currentRating);
      // hmm, not sure why you have this
      this.voteValue = null;
    }
  }
};
</script>