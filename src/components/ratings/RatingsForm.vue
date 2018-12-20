<template>
    <div>
        <form @submit.prevent="handleSubmit">
            1<input type="radio" value="1" name="vote" v-model="voteValue">
            2<input type="radio" value="2" name="vote" v-model="voteValue">
            3<input type="radio" value="3" name="vote" v-model="voteValue">
            4<input type="radio" value="4" name="vote" v-model="voteValue">
            5<input type="radio" value="5" name="vote" v-model="voteValue">
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
      let currentRating = { userName: this.randomName, score: this.voteValue };
      this.onAdd(currentRating);
      this.voteValue = null;
    }
  },
  props: {
    randomName: String,
    onAdd: Function
  }
};
</script>

<style>

</style>
