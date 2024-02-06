<template>
  <div class="footer">
    <div class="author">
      <p class="link"><a href="https://github.com/SergeyLeichenko">GitHub Sergey Leichenko</a></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #000;
  padding: 15px 0;

  .author {
    display: flex;
    justify-content: center;
    align-items: center;

    .link {
      a {
        font-size: 18px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>