<template>
  <label class="o-range-field">
    <span v-if="slots.default" class="o-range-field__label"><slot /></span>

    <span v-if="slots.output" class="o-range-field__calculated"
      ><slot name="output"
    /></span>
    <input
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
    <output v-if="slots.max" class="o-range-field__calculated"
      ><slot name="max"
    /></output>

    <datalist :id="dataListName" v-if="dataListRecords.length">
      <option
        v-for="(value, index) in dataListRecords"
        :key="index"
        :value="value.value"
        :label="value.label"
      ></option>
    </datalist>
  </label>
</template>

<script setup lang="ts">
import { DataListRecord } from "~/types/datalist";
import { instanceOfDataListRecord } from "~/utilities/typeGuards";
import { type } from "../.nuxt/types/imports";

export interface Props {
  values: DataListRecord[] | string[] | number[] | number | string;
  min?: number;
  step?: number;
  max?: number;
  modelValue?: number;
  name: string;
}

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

  #{&}__calculated {
    border: 1px solid var(--fg);
    border-radius: 4px;
    padding: 0.25rem;
    font-size: 1.5rem;
    background-color: var(--bg);
    color: var(--fg);
    margin: 0 0;
    flex: 0 0 auto;
  }

  #{&}__input {
    flex: 0 0 auto;
  }

  input[type="range"] {
    appearance: none;
    margin: 10px;
    display: block;
    width: 200px;
    height: 10px;
    position: relative;
    border: 1px solid #fff;
    border-radius: 5px;
    background: repeating-linear-gradient(
      90deg,
      #000 0,
      #000 2px,
      #fff 2px,
      #fff calc(100% - 2px),
      #000 calc(100% - 2px),
      #000 100%
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
      outline: 1px solid #fff;
      border: 3px solid #000;

      background: #fff;
      cursor: ew-resize;
      // border: 1px solid #000;
      box-shadow: 0 0 2px 3px #000;
      transform: rotate(45deg);

      &:hover {
        background: #fff;
      }
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
