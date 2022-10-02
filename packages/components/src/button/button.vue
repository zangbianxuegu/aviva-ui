<template>
  <button :class="styleClass">
    <div :class="bem.b('text')">
      <slot />
    </div>
  </button>
</template>

<script>
import { computed, defineComponent } from "vue";
import { createNamespace } from "@simple/utils/create";
import { buttonProps } from "./types";

export default defineComponent({
  name: "s-button",
  props: buttonProps,
  setup(props) {
    const bem = createNamespace("button");

    const styleClass = computed(() => {
      return [
        bem.b(),
        bem.m(props.type),
        bem.m(props.size),
        bem.is("plain", props.plain),
        bem.is("round", props.round),
        bem.is("disabled", props.disabled),
      ];
    });

    return {
      bem,
      styleClass,
    };
  },
});
</script>
