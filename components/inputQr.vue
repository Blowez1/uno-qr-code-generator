<template>
  <div class="qr-inputs">
    <input
      placeholder="Örn: https://www.github.com/blowez1"
      type="text"
      v-model="value"
      class="form-control"
      required
    />
    <button @click="generateQr({ value })" class="form-control mt-2">
      Oluştur
    </button>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      value: "",
    }
  },
  methods: {
    ...mapActions(['generateQr']),
  },
  computed: mapState(['valuee']),
}
</script>