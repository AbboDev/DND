<template>
  <div id="container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  min-height: 100%;
}

body {
  --fg: black;
  --bg: white;
  --primary: #00dc82;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: var(--bg);
  color: var(--fg);
}

#app,
#container {
  height: 100%;
  overflow: hidden;
}

::selection {
  background: var(--primary);
  color: var(--bg);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

@media (prefers-color-scheme: dark) {
  body {
    --fg: white;
    --bg: black;
  }
}
</style>
