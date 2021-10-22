import Swal from 'sweetalert2'

export const state = () => ({
  value: "",
  size: 256,
  renderAs: "canvas",
  level: "H",
  isQrCode: false
})

//actions
export const actions = {
  generateQr({
    commit
  }, payload) {
    if (payload.value === "") {
      Swal.fire({
        title: 'Hata!',
        text: 'Boş bırakamazsın!',
        icon: 'warning',
        confirmButtonText: 'Tamam'
      })
    } else {
      commit('setValue', payload.value)
      commit('setIsQrCode')
    }
  }
}

//mutations
export const mutations = {
  setValue(state, value) {
    state.value = value
  },
  setIsQrCode(state) {
    state.isQrCode = true
  }
}
