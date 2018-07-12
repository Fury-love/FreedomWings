<template>
  <div>
    <header-top />
    <section>
      <section class="profile-number">
        <van-button size="large" @click="rechargePage">RECHARGE</van-button>
      </section>
      <section class="profile-list-group">
        <van-cell-group>
          <van-cell title="常见问题" icon="records" is-link />
        </van-cell-group>
      </section>
    </section>
    <footer-guide />
  </div>
</template>
<script type="text/babel">
  import HeaderTop from '../../components/header.vue'; import FooterGuide from '../../components/footer.vue'; export default { data(){ return { } }, components: { HeaderTop, FooterGuide }, methods: { rechargePage(){ console.log('click'); console.log(this.$router); this.$router.push({path: '/profile/recharge'}); } } }
</script>
