## About
Sistem Point of Sales sederhana yang dibangun menggunakan framework Laravel sebagai backend, React.js sebagai frontend, dan MySQL sebagai database.

## Usage
Clone repository ini, lalu jalankan perintah berikut di terminal. Pastikan node.js dan composer sudah terinstal.

```
$ cd point-of-sales-asesmen
$ composer install
$ npm install
```
Selanjutnya, copy file .env.exampe ke .env dan generate APP_KEY
```
$ cp .env.example .env
$ php artisan key:generate
```
Selanjutnya, buat database dengan nama `tes_asesmen`, lalu jalankan migration
```
$ php artisan migrate
```
Terakhir, jalankan sistem dalam mode pengembangan
```
$ php artisan serve
```
Di terminal lain, jalankan 
```
$ npm run dev
```