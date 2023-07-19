<template>
  <InputField :size="size">
    <template #label v-if="slots.label || label">
      <slot name="label">
        {{ label }}
      </slot>
    </template>

    <div class="o-field__inputs" v-if="!pending">
      <SelectInput
        :name="name"
        :disable="disable"
        :readonly="readonly"
        v-model="value"
        :values="values"
      />
      <slot name="inputs" />
    </div>
  </InputField>
</template>

<script setup lang="ts">
import { DataListRecord, InputFontSize } from "~/types/html";
import { Race } from "~/types/race";
import { slugify } from "~/utilities/slugify";

export interface Props {
  name: string;
  size?: InputFontSize;
  label?: string;
  disable?: boolean;
  readonly?: boolean;
  modelValue: Race | null;
}

const props = withDefaults(defineProps<Props>(), {
  size: "big",
  disable: false,
  readonly: false,
});

const emit = defineEmits(["update:modelValue"]);

const slots = useSlots();

const value = computed({
  get() {
    if (!props.modelValue) {
      return null;
    }

    const { name, source } = props.modelValue;
    let id = slugify(name);

    if (source) {
      id = `${slugify(source)}/${id}`;
    }

    return id;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const { data: values, pending } = await useAsyncData<DataListRecord[]>(async () => {
  const values: DataListRecord[] = [];

  try {
    const races = await $fetch("/api/races");
    for (const race of races) {
      const { name, source, id: value } = race;
      let label = name;

      if (source) {
        label += ` (${source})`;
      }

      values.push({
        value,
        label,
      });
    }
  } catch (error) {
    console.error(error);
  }

  return values;
});
</script>
