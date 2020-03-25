<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    input: {
      type: String
    }
  }
};
</script>
