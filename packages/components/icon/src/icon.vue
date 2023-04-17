<template>
  <i class="m-icon" :style="style">
    <slot></slot>
  </i>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { iconProps } from './icon'
export default defineComponent({
  name: 'MIcon',
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {}
      }
      const style = {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { 'color': props.color } : {}),
      }
      return style
    })
    return { style }
  }

})
</script>