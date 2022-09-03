<template>
  <section class="home-page">
    <p class="description">
      A collection of Front-End interview questions and study materials
    </p>
    <p class="actions">
      <a class="get-started" href="/html/">
        Get Started
        <svg
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
          />
        </svg>
      </a>
    </p>
  </section>
</template>
<style scoped>
section {
  padding: 42px 32px;
}
.home-page {
  padding: 96px 32px;
  text-align: center;
}
.description {
  max-width: 960px;
  line-height: 1.5;
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}
.actions a {
  font-size: 16px;
  display: inline-block;
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}
.actions .get-started {
  margin-right: 18px;
}
.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}
.actions .get-started:hover {
  transition-duration: 0.2s;
}
.actions .get-started:hover .icon {
  transform: translateX(2px);
}
.actions .get-started{
  color: #476582;
  background-color: #f1f1f1;
}
.actions .get-started:hover {
  background-color: #e5e5e5;
  transition-duration: 0.2s;
}
.dark .actions .get-started:hover {
  background-color: #3a3a3a;
}
</style>
