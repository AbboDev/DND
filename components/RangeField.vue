<template>
  <div class="o-range-field" @click="focusInput">
    <label v-if="slots.default" class="o-range-field__label"><slot /></label>

    <div class="o-range-field__bar">
      <slot name="output" />

      <input
        ref="input"
        class="o-range-field__input"
        type="range"
        :name="name"
        @input="
          $emit(
            'update:modelValue',
            parseFloat(($event.target as HTMLInputElement).value)
          )
        "
        :list="dataListName"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        :style="{ '--min': min, '--max': max, '--step': modelValue }"
      />

      <slot name="max" />
    </div>

    <datalist :id="dataListName" v-if="dataListRecords.length">
      <option
        v-for="(value, index) in dataListRecords"
        :key="index"
        :value="value.value"
        :label="value.label"
      ></option>
    </datalist>
  </div>
</template>

<script setup lang="ts">
import { DataListRecord } from "~/types/html";
import { instanceOfDataListRecord } from "~/utilities/typeGuards";

export interface Props {
  values: DataListRecord[] | string[] | number[] | number | string;
  min?: number;
  step?: number;
  max?: number;
  modelValue?: number;
  name: string;
}

const input = ref(null);

const props = withDefaults(defineProps<Props>(), {
  values: () => [],
  min: 0,
  step: 1,
  value: 0,
});

defineEmits(["update:modelValue"]);

const slots = useSlots();

const dataListName = computed(() => {
  return `values-for-${props.name}`;
});

const dataListRecords = computed(() => {
  const records: DataListRecord[] = [];
  let values = parseInt(props.values.toString());

  if (!isNaN(values)) {
    let index = values;
    for (; index >= 0; index--) {
      records.push({
        value: index,
        label: index.toString(),
      });
    }

    return records;
  }

  // @ts-ignore
  // The exclusion of not iterable types is made with isNaN method
  for (const value of props.values) {
    let record: DataListRecord | null = null;

    if (instanceOfDataListRecord(value)) {
      record = {
        value: value.value,
        label: (value.label || value.value).toString(),
      };
    } else if (Array.isArray(value)) {
      if (value.length === 1) {
        record = {
          value: value[0],
          label: value[0].toString(),
        };
      } else if (value.length > 1) {
        record = {
          value: value[0],
          label: value[1].toString(),
        };
      }
    }

    if (record) {
      records.push(record);
    }
  }

  return records;
});
</script>

<style lang="scss">
.o-range-field {
  display: flex;
  text-align: center;
  font-size: 1rem;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  position: relative;
  border: 1px solid var(--fg);
  background-color: var(--bg);
  color: var(--fg);

  #{&}__label {
    width: 100%;
    margin: 0 auto 0.5rem;
    display: block;
  }

  #{&}__input {
    flex: 0 0 auto;
  }

  #{&}__bar {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  input[type="range"] {
    appearance: none;
    margin: 10px;
    display: block;
    width: 200px;
    height: 10px;
    position: relative;
    border: 1px solid var(--fg);
    border-radius: 5px;
    background: repeating-linear-gradient(
      90deg,
      var(--bg) 0,
      var(--bg) 2px,
      var(--fg) 2px,
      var(--fg) calc(100% - 2px),
      var(--bg) calc(100% - 2px),
      var(--bg) 100%
    );
    background-size: calc(100% / var(--max, 1)) 4px;
    background-position: center left;
    background-repeat: repeat-x;

    /* Input Thumb */
    @mixin thumb {
      box-sizing: border-box;
      appearance: none;
      height: 12px;
      width: 12px;

      border-radius: 3px;
      outline: 1px solid var(--fg);
      border: 3px solid var(--bg);

      background: var(--fg);
      cursor: ew-resize;
      // border: 1px solid var(--bg);
      box-shadow: 0 0 2px 3px var(--bg);
      transform: rotate(45deg);
    }

    &::-webkit-slider-thumb,
    &::-moz-range-thumb {
      @include thumb;
    }

    &::-ms-thumb {
      @include thumb;
    }

    /* Input Track */
    @mixin track {
      appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
    }

    &::-webkit-slider-runnable-track,
    &::-moz-range-track {
      @include track;
    }

    &::-ms-track {
      @include track;
    }
  }
}
</style>
~/types/html
