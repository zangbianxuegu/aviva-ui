<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script>
import { computed, defineComponent } from "vue";
import { createNamespace } from "@simple/utils/create";
import { iconProps } from "./types";

export default defineComponent({
  name: "s-icon",
  props: iconProps,
  setup(props) {
    const bem = createNamespace("icon");
    const style = computed(() => {
      if (!props.color && !props.size) {
        return {};
      }
      return {
        ...(props.color ? { color: props.color } : {}),
        ...(props.size ? { "font-size": props.size + "px" } : {}),
      };
    });

    return {
      bem,
      style,
    };
  },
});
</script>
