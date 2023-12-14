<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-6">
          <form @submit.prevent="login">
            <h2 class="text-center mb-4">Sign Up</h2>
  
            <div class="mb-3">
              <label for="Email" class="form-label">Email address</label>
              <input type="email" v-model="data.email" class="form-control" id="Email" required>
            </div>
  
            <div class="mb-3">
              <label for="Nama" class="form-label">Nama</label>
              <input type="text" v-model="data.nama" class="form-control" id="Nama" required>
            </div>

            <div class="mb-3">
              <label for="AsalSekolah" class="form-label">Asal Sekolah</label>
              <input type="text" v-model="data.AsalSekolah" class="form-control" id="AsalSekolah" required>
            </div>

            <div class="mb-3">
              <label for="Tanggal_Pendaftaran" class="form-label">Tanggal Pendaftaran</label>
              <input type="date" v-model="data.Tanggal_Pendaftaran" class="form-control" id="Tanggal_Pendaftaran" required>
            </div>
  
            <button type="submit" class="btn btn-primary w-100 mb-5">Daftar</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
    data() {
      return {
        data: {
          Nama: '',
          Email: '',
          AsalSekolah: '',
          Tanggal_Pendaftaran: '',
        },
      };
    },
    methods: {
      async submitForm() {
        try {
          const apiUrl = 'http://localhost:8000/api/pendaftaran';
  
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.data),
          });
  
          const responseData = await response.json();
  
          console.log('Data Pendaftaran Berhasil Dikirim:', responseData);
  
          // Reset form setelah pengiriman
          this.data = {
            Nama: '',
            Email: '',
            Asal_Sekolah: '',
            Tanggal_Pendaftaran: '',
          };
        } catch (error) {
          console.error('Terjadi kesalahan saat mengirim data:', error);
        }
      },
    },
  };
  </script>
  
  <style>
  /* You can add custom styles here if needed */
  </style>
  