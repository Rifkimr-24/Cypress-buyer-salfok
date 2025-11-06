// Faker Helper

import { faker } from '@faker-js/faker';

// 🔹 Kumpulan data acak siap pakai
export const fakeData = {
  // 👤 Data User
  name: faker.person.fullName(),                     // Nama lengkap
  email: faker.internet.email(),                     // Email acak
  password: faker.internet.password({ length: 12 }), // Password acak 12 karakter
  phone: faker.phone.number('08##########'),         // Nomor HP lokal
  company: faker.company.name(),                     // Nama perusahaan
  city: faker.location.city(),                       // Nama kota
  address: faker.location.streetAddress(),           // Alamat lengkap
  uuid: faker.string.uuid(),                         // ID unik (UUID)

  // 🛍️ Data Produk
  productName: faker.commerce.productName(),          // Nama produk
  productDesc: faker.commerce.productDescription(),   // Deskripsi produk
  productCategory: faker.commerce.department(),       // Kategori produk
  productPrice: faker.commerce.price({                // Harga produk
    min: 10000,
    max: 1000000,
    dec: 0,
  }),
  productStock: faker.number.int({ min: 1, max: 100 }), // Stok produk acak
  productImage: faker.image.url(),                      // URL gambar produk

  // 💳 Data Keuangan
  bankAccount: faker.finance.accountNumber(10),       // Nomor rekening 10 digit
  bankName: faker.helpers.arrayElement([              // Pilih acak dari daftar bank
    'BCA', 'BNI', 'BRI', 'Mandiri', 'CIMB', 'Permata',
  ]),
  bankHolder: faker.person.fullName(),                // Nama pemilik rekening
  nominalRandom: faker.finance.amount(10000, 1000000, 2), // Nominal random (2 desimal)

  // 🎟️ Data Voucher
  voucherCode: `VCHR${faker.string.alphanumeric(8).toUpperCase().replace(/[^A-Z0-9]/g, '')}`, // Kode unik voucher
  voucherName: faker.commerce.productAdjective() + ' Promo',         // Nama voucher
  discountPercent: faker.number.int({ min: 5, max: 80 }),            // Diskon 5–80%
  discountFixPrice: faker.number.int({ min: 20000, max: 80000 }),    // Diskon Potongan Harga Tetap
  minPurchase: faker.number.int({ min: 50000, max: 500000 }),        // Syarat min belanja
  maxDiscount: faker.number.int({ min: 50000, max: 100000 }),        // Total Kuota Voucher
  kuotaPembeli: faker.number.int({ min: 5, max: 10 }),               // Kuota Setiap Pembeli

  // 📅 Data Tanggal
  startDate: faker.date.past(),   // Tanggal masa lalu
  endDate: faker.date.future(),   // Tanggal masa depan

  // 🔢 Data Numerik umum
  randomNumber: faker.number.int({ min: 1, max: 99999 }), // Angka acak
};