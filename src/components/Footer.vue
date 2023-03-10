<template>
  <div class="block block-f">
    <h1 class="title-secondary">Контакты</h1>

    <div class="footer">
      <div class="block">
        <h2 class="title-secondary">
          Председатели ОО помощи детям с особенностями развития и их семьям
          «Особое детство»
        </h2>
        <p class="text">Пашкевич Оксана Николаевна 8-0162-53-07-75</p>
        <p class="text">
          Заместитель председателя Пашкевич Елена Александровна
        </p>
        <p class="text">
          Директор УПП Учебно-ремесленный центр» «Особая жизнь» Пашкевич Оксана
          Николаевна +375 29 529-15-56 мтс
        </p>
      </div>
      <div class="block">
        <h2 class="title-secondary">
          Мастера УПП Учебно-ремесленный центр» "Особая жизни":
        </h2>
        <p class="text">
          Пашкевич Елена Александровна +375333236614 (заместитель директора);
        </p>
        <p class="text">Сапон Людмила Васильевна +375298216084 (технолог);</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBlock",
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.header-right {
  display: flex;
  align-items: center;

  a {
    margin: 0 1rem;
  }
}

.button {
  padding: 14px 30px;
  background: #47ea68;
  text-decoration: none;
  border-radius: 10px;
  font-size: 18px;
  margin: 0 0 0 1rem;
}

.header-wrap {
  display: flex;
  align-items: center;

  h2 {
    margin: 0 0 0 1rem;
  }
}

img {
  max-width: 50%;
  margin: 0 auto;
}

.block-f {
  background: #d6f2ff;
  margin: 6rem 0 0 0;
  padding: 0 2rem 6rem 2rem;
}

.footer {
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.wrapper {
  display: grid;
  align-items: center;
  gap: 2rem;
  grid-template-columns: 1fr;
  text-align: center;
  flex-direction: column;
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.block {
  padding: 1rem;
  text-align: center;
}

.logo {
  margin: 3rem auto;
  max-width: 10rem;
}

.title {
  color: #e0254a;
  margin: 4rem 0 0 0;
}

.title-secondary {
  color: #699681;
  margin: 6rem 0 0 0;
}

.text {
  line-height: 170%;
}

@media screen and (max-width: 1440px) {
  .wrapper {
    grid-template-columns: 1fr;
    padding: 0;
  }
  .container {
    padding: 1rem;
  }
  img {
    max-width: 60%;
    margin: 0 auto;
  }
}
</style>
