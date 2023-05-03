<template>
  <div id="container">
    <main>
      <h1>Hello from the edge!</h1>
    </main>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

body {
  --fg: black;
  --bg: white;
  --primary: #00dc82;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: var(--bg);
  color: var(--fg);
}

#__nuxt,
#container {
  height: 100%;
  overflow: hidden;
}

::selection {
  background: var(--primary);
  color: var(--bg);
}

@media (prefers-color-scheme: dark) {
  body {
    --fg: white;
    --bg: black;
  }
}

/* main */

main {
  position: relative;
  width: 100vw;
  height: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
}

main h1 {
  font-size: min(16vw, 4rem);
  font-weight: 600;
  margin: 0;
  text-align: center;
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  padding: 0 2.5rem;
  box-sizing: border-box;
  line-height: 1;
}

@media (min-width: 640px) {
  main h1 {
    font-size: min(8vw, 4rem);
  }
}
</style>
