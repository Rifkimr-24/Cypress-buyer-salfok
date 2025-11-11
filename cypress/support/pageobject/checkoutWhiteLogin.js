const loginPage = require ('../pageobject/login');
import { fakeData } from '../faker';

class checkoutLogin {
    checkoutLog (){
     //Login
     cy.loginPage();

     // Pilih Toko
     cy.wait(4000);
     cy.contains('div', 'Toko Ngakak')
     .should('be.visible')
     .click();

     cy.contains('p', 'Tentang Toko').should('be.visible');
     cy.wait(2000);

     // Pastikan produk terlihat sebelum diklik
     cy.get('img[alt="SOUNDTECH Lite Condenser Microphone Stand Table for PC Recording Streaming"]', { timeout: 10000 })
     .should('be.visible')
     .click();

     // Tunggu tombol "Beli" muncul dan siap diklik
     cy.contains('button', 'Beli', { timeout: 10000 })
     .should('be.visible')
     .click();

     // Pastikan halaman jumlah barang sudah tampil
     cy.contains('h4', 'Jumlah', { timeout: 10000 })
     .should('be.visible');

     // Klik tombol “Beli” di halaman jumlah (Direct Order)
     cy.get('button[data-umami-event-label="Direct Order"]', { timeout: 15000 })
     .should('be.visible')
     .click();

     // Pastikan halaman Metode Pembayaran benar-benar muncul
     cy.contains('p', 'Metode Pembayaran', { timeout: 15000 })
     .should('be.visible');


     // Klik ganti alamat
     cy.contains('button', 'Ganti').click();
     cy.contains('p', 'Ganti Alamat Pengiriman').should('be.visible');

     // Masukan Data Penerima
     cy.get('input[id="fullName"]').type(fakeData.name); 
     cy.get('input[id="phoneNumber"]')
     .should('be.visible')
     .clear()               // hapus semua teks yang ada di input
     .type('082123456789'); // ketik nomor baru

     cy.get('textarea[name="address"]').type(fakeData.address);
     
     cy.get('button[id="district"]').click();
     cy.get('button[id="district"]').type('Kiaracondong, Bandung, Jawa Barat');
     // Klik kecamatan
     cy.get('button[id="district"]', { timeout: 10000 })
     .should('be.visible')
     .click();

     // Type Kecamatan
     cy.get('button[data-cy="select-checkoutUserInfo-district"]', { timeout: 10000 })
     .should('be.visible')
     .type('Kiaracondong, Bandung, Jawa Barat');


     // Pilih 
     cy.contains('div', 'Kiaracondong, Bandung, Jawa Barat')
     .should('be.visible')
     .click();
     cy.wait(5000);

     // Klik Button Simpan
     cy.contains('button', 'Simpan').click();
     cy.wait(2000);


     // Pilih kurir
     cy.get('svg[class="lucide lucide-chevron-right w-4 h-4"]').click();
     cy.wait(1000)
     cy.contains('p', 'Pilih Metode Pengiriman').should('be.visible');
     cy.get('button[data-cy="drawer-checkoutShipment-courierSelect-0-methodType-2"]').click();
     cy.wait(3000);
     cy.contains('p', 'Pilih Kurir Next Day').should('be.visible');
     cy.wait(3000);
     cy.get('img[alt="JNE Express"]').click();

     // Pilih metode pembayaran
     // Klik "Lihat Semua" hanya setelah terlihat & bisa diklik
     cy.contains('p', 'Lihat Semua', { timeout: 10000 })
     .should('be.visible')
     .click();

     // Pastikan modal pembayaran muncul
     cy.contains('p', 'Pilih Metode Pembayaran', { timeout: 10000 })
     .should('be.visible');

     // Tunggu elemen "Qris" benar-benar siap diklik
     cy.contains('label', 'Qris', { timeout: 10000 })
     .click();

     


     

     // Bayar 
     cy.contains('button', 'Bayar').click();
     cy.wait(4000);
    }
}















export default new checkoutLogin();