// pendaftaran.js

const pendaftaran = {
    slug: 'pendaftaran',
    admin: {
      useAsTitle: 'Nama', // Sesuaikan dengan field yang menjadi judul
    },
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true,
    },
    fields: [
      {
        name: 'Nama',
        type: 'text',
        required: true,
      },
      {
        name: 'Email',
        type: 'text',
        unique: true,
        required: true,
      },
      {
        name: 'AsalSekolah',
        type: 'text',
        required: true,
      },
      {
        name: 'Status',
        type: 'select',
        required: true,
        defaultValue: 'Waiting',
        options: [
            {
                label: 'Waiting', 
                value: 'waiting',
            },
            {
                label: 'Rejected',
                value: 'rejected',
            },
            {
                label: 'Accepted',
                value: 'accepted',
            }, 
        ],    
      },
      {
        name: 'Tanggal_Pendaftaran',
        type: 'date',
        required: true,
        admin: {
            date: {
                pickerAppearance: 'dayOnly',
                displayFormat: 'd MMM yyy',
            },
        },
      },
    ],
  };
  
  export default pendaftaran;
  