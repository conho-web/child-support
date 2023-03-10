<template>
  <div class="container">
    <header>
      <div class="header-wrap">
        <img src="../assets/logo.png" alt="logo" class="logo" />
        <div>
          <h2 class="">ОО "Особое детсво"</h2>
          <h2 class="">УПП "Особая жизнь"</h2>
        </div>
      </div>
      <div class="header-right">
        <router-link to="/items" class="link">Товары</router-link>
        <router-link to="/reports" class="link">Отчёты</router-link>
        <router-link to="/register" class="link"
          >Зарегистрироваться</router-link
        >
        <div v-if="this.user">{{ this.user.username }}</div>
        <router-link to="/login" class="button" v-else>Войти</router-link>
      </div>
    </header>
    <div class="wrapper">
      <div class="block">
        <h1 class="title">
          Общественное объединение помощи детям с особенностями развития и их
          семьи "Особое детство"
        </h1>
        <p class="text">
          В настоящее время в объединении состоят на учете 50 человек. Из них
          детей с особенностями развития 20 человек, молодых людей с
          особенностями развития З0 человек. Для выхода на новый уровень
          реабилитации молодых инвалидов, объединение в 2013 году открыло
          учебно-ремесленный центр “Особая жизнь”, в котором ребята овладевают
          профессиональными навыками. Предлагаем Вам перечень продукции,
          изготавливаемой молодыми людьми с ограниченными возможностями:
        </p>
        <p>-открытки, приглашения, визитки, магниты разной тематики и т.п.</p>
        <p>-пошив постельного белья</p>
        <p>-изделия из ткани, бисера, бумаги. ниток и тд.</p>
      </div>

      <img src="../assets/1.jpg" alt="" />

      <div class="block">
        <h1 class="title">
          УПП “Учебно-ремесленный центр "Особая жизнь” г. Брест 2013
        </h1>
        <p class="text">
          1 марта 2013года открыт учебно- ремесленный центр “Особая жизнь" ‘для
          ‘для инвалидов, учредителем которого является ОО помощи детям с
          особенностями развития и их семьям “Особое детство".
        </p>
      </div>

      <div class="block">
        <h1 class="title">Наша цель:</h1>
        <p class="text">
          -оказание содействия социально- ‘бытовой, социально-трудовой,
          социально-психологической реабилитации людей с психо- физическими
          особенностями
        </p>
      </div>

      <img src="../assets/2.jpg" alt="" />

      <div class="block">
        <h1 class="title">Основные задачи учебно-ремесленного центра</h1>
        <p class="text">
          -развитие и поддержание у людей с ограни. чениями навыков поведения,
          самоконтроля, ‘общения, приобретенных в ЦКРО и О, а также пользования
          техническими средствами ^ ‘социальной реабилитации; -развитие
          способностей и интересов у молодых ‘людей к трудовой деятельности,
          трудовых навыков, обеспечивающих реализацию их прав и потенциальных
          трудовых возможностей; -работа с родственниками в целях организации
          преемственности реабилитационных мероприятий в семье; -создание
          условий для удовлетворения потреб- ностей молодых людей и членов их
          семей; - трудоустройство в мастерские учебно- ремесленного центра
          “Особая жизнь” и содействия в трудоустройстве на предприятия и
          организации города.
        </p>
      </div>

      <img src="../assets/3.jpg" alt="" />

      <div class="block">
        <h1 class="title">ДЛЯ ЗАЧИСЛЕНИЯ НЕОБХОДИМЫ СЛЕДУЮЩИЕ ДОКУМЕНТЫ:</h1>
        <p class="text">
          - Письменное заявление инвалида, либо его законных представителей;
        </p>
        <p class="text">- копия документа, удостоверяющего личность;</p>
        <p class="text">
          - копия удостоверения инвалида (заключёние медико-реабилитационной
          экспертной комиссии);
        </p>
        <p class="text">- копия свидетельства об образовании;</p>
        <p class="text">
          - пакет сопроводительных документов, составляемого ЦКРО и Р на каждого
          выпускника и включающего : свидетельство о специальном образовании;
          психолого-педагогическую характеристику; профиль овладения
          социально-бытовыми навыками; профиль овладения элементарными трудовыми
          навыками; карточку выпускника центра коррекционно-развивающего
          обучения и реабилитации.
        </p>
      </div>
    </div>
    <div class="block">
      <h1 class="title">
        Покупая продукцию людей - не совсем таких как ты, учишься понимать их
        мир, который устроен, мягко говоря, не особо справедливо. НО ЛЮБОЙ
        ЧЕЛОВЕК В ЭТОМ МИРЕ ВАЖЕН!
      </h1>
    </div>

    <div class="block">
      <p class="text">
        Ждем Вас по адресу: г. Брест, ул. Гродненская, 6 Тел. (0162) 53-07-75
        e-mail: tсаг2013@уапаех.ги группа ВКонтакте и Facebook: «Особое детство
        Особая жизнь»
      </p>
    </div>

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
            Директор УПП Учебно-ремесленный центр» «Особая жизнь» Пашкевич
            Оксана Николаевна +375 29 529-15-56 мтс
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
  </div>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || null,
    };
  },
  mounted() {
    setInterval(() => {
      this.user = JSON.parse(localStorage.getItem("user"));
      if (Math.round(new Date().getTime() / 1000.0) > this.user.exp) {
        window.console.log("access истек");
        store.dispatch("updateAccess");
      }
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
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
