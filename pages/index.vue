<template>
  <div>
    <video autoplay muted loop id="background-video">
      <source src="../assets/videos/background-video.mp4" type="video/mp4" />
    </video>
    <div class="overlay-video"></div>

    <section class="qr-code-section">
      <div class="qr-code-modal">
        <h2 class="logo">Uno Qr Code Oluşturucu</h2>
        <inputQr />
        <qrCodeSection />
      </div>
    </section>
  </div>
</template>
<script>
const title = 'Uno Qr Kod Oluşturucu'
const desc =
  'Uno Qr Kod Oluşturucu sayesinde istediğiniz yerde kullanabileceğiniz şekilde hızlıca Qr Kodu oluşturabileceksiniz.'
export default {
  head() {
    return {
      title: 'Uno Qr Kod Oluşturucu',
      meta: [
        {
          hid: 'description',
          property: 'description',
          name: 'description',
          content: desc,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          name: 'og:description',
          content: desc,
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          name: 'twitter:description',
          content: desc,
        },
      ],
    }
  },
}
</script>