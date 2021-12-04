 <template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: rgb(209, 133, 18);
  border: 1px solid rgb(209, 133, 18);
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgb(209, 133, 18);
  border-color: rgb(209, 133, 18);
}

.flat {
  background-color: transparent;
  color: rgb(209, 133, 18);
  border: none;
}

.outline {
  background-color: transparent;
  border-color: rgb(209, 133, 18);
  color: rgb(209, 133, 18);
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #dfc89fc5;
}
</style>