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
