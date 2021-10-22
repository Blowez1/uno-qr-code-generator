<template>
  <div v-if="isQrCode">
    <div class="mt-5 d-flex justify-content-center">
      <qrcode-vue
        :value="value"
        :size="size"
        class="qr-code-image-canvas"
        :level="level"
        :render-as="renderAs"
      />
    </div>
    <div class="mt-4 d-flex justify-content-center">
      <button @click="downloadQr()" class="btn btn-primary download-btn">
        İndir
      </button>
    </div>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
import { mapState } from 'vuex'
export default {
  components: {
    QrcodeVue,
  },
  computed: mapState(['isQrCode', 'value', 'level', 'renderAs', 'size']),
  methods: {
    downloadQr() {
      const canvas = document.querySelector('.qr-code-image-canvas canvas')
      const link = document.createElement('a')
      link.download = "uno-" + Date.now() + '-qr.png'
      link.href = canvas.toDataURL()
      link.click()
      link.delete
    },
  },
}
</script>