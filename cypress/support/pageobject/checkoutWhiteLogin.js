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

     // Pilih Produk
     cy.get('img[alt="SOUNDTECH Lite Condenser Microphone Stand Table for PC Recording Streaming"]').click();
     cy.contains('button', 'Beli').should('be.visible');
     cy.wait(1500);

     // Lakukan Pembayaran
     cy.contains('button', 'Beli').click();
     cy.contains('h4', 'Jumlah').should('be.visible');
     cy.wait(4000);

     // Klik Beli
     cy.get('button[data-umami-event-label="Direct Order"]').click();
     cy.contains('p', 'Metode Pembayaran');
     cy.wait(4000);

     // Klik ganti alamat
     cy.contains('button', 'Ganti').click();
     cy.contains('p', 'Ganti Alamat Pengiriman').should('be.visible');

     // Masukan Data Penerima
     cy.get('input[id="fullName"]').type(fakeData.name); 
     cy.get('input[id="phoneNumber"]').type(fakeData.phone);
     cy.get('textarea[name="address"]').type(fakeData.address);
     
     //cy.get('button[id="district"]').click();
     //cy.get('button[id="district"]').type('Kiaracondong, Bandung, Jawa Barat');
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
     cy.wait(2000);

     // Pilih kurir
     cy.get('button[class="flex items-center text-start w-full p-3 justify-between"]').click();
     cy.wait(1000)
     cy.contains('p[class="flex items-center text-start w-full p-3 justify-between"]').should('be.visible');
     cy.get('button[data-cy="drawer-checkoutShipment-courierSelect-0-methodType-2"]').click();
     cy.wait(1000);
     cy.contains('p', 'Pilih Kurir Next Day').should('be.visible');
     cy.wait(1000);
     cy.get('img[alt="JNE Express"]').click();

     // Pilih metode pembayaran
     cy.contains('p', 'Lihat Semua').click();
     cy.wait(1000);
     cy.contains('p', 'Pilih Metode Pembayaran').should('be.visible');
     cy.contains('label', 'Qris').click();
     cy.wait(1000);

     // Bayar 
     cy.contains('button', 'Bayar').click();
     cy.wait(4000);



















        
    }
}
export default new checkoutLogin();