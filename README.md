# COPYRIGHT BY Biimmss

Nama : Arya Bima
Kelas : XII PPLG
Task : UJI KOMPETENSI PPLG

<img src="../img/israruddinimg.jpg" width="300" style="border-radius: 50%;">

# CASE PROJECT : Sistem Manajemen Petshop 🐾

## 🐾 Deskripsi Proyek
RPL Petshop adalah sebuah aplikasi e-commerce berbasis web yang dikembangkan untuk mempermudah penjualan dan pembelian produk-produk hewan peliharaan. Aplikasi ini menyediakan berbagai fitur seperti katalog produk, keranjang belanja, dan manajemen pesanan. Dengan menggunakan teknologi **React.js** di frontend dan **Node.js dengan Express.js** di backend, proyek ini dirancang untuk memberikan pengalaman pengguna yang responsif dan efisien.

## 📥 Cara Menjalankan Proyek

### 1️⃣ Clone Repository
1. Buka **Git Bash** atau terminal.
2. Jalankan perintah berikut:
   ```sh
   git clone https://github.com/indobims/ujikom_eksternal.git
   ```
3. Tekan **Enter** untuk mulai mengunduh repository.

---

### 2️⃣ Instalasi Dependency

#### 🖥️ Backend
1. Masuk ke direktori backend:
   ```sh
   cd backend
   ```
2. Instal semua dependency yang diperlukan:
   ```sh
   npm install
   ```
3. Pastikan Anda memiliki API Key Stripe. Anda bisa mengeditnya di `PaymentController`.
4. Jalankan backend dengan perintah:
   ```sh
   npm run start
   ```

#### 🎨 Frontend
1. Masuk ke direktori frontend:
   ```sh
   cd frontend
   ```
2. Instal semua dependency frontend:
   ```sh
   npm install
   ```
3. Jalankan aplikasi frontend:
   ```sh
   npm run petshop
   ```

---

# DESKRIPSI CASE 🤳

Dalam project ini terdapat beberapa entitas utama yang berhubungan satu sama lain:

## Hubungan Antar Tabel:
### 1. Users (Pengguna): Pengguna yang dapat melakukan transaksi dan membeli produk.
### 2. Admin: Pengguna dengan hak akses untuk mengelola produk, pesanan, dan transaksi.
### 3. Product (Produk): Daftar produk hewan peliharaan yang tersedia.
### 4. Order (Pesanan): Menyimpan informasi tentang pesanan yang dilakukan pengguna.
### 5. Transaksi (Pembayaran): Menyimpan informasi pembayaran dari pesanan pengguna.

# RELASI ANTAR ENTITAS ✍

## 1. Admin ke Produk (Mengelola Produk):
Admin bertanggung jawab atas manajemen produk dalam sistem. <br>
Relasi: One-to-Many

## 2. Pengguna ke Pesanan (Melakukan Pemesanan):
Setiap pengguna dapat melakukan satu atau lebih pesanan. <br>
Relasi: One-to-Many

## 3. Pesanan ke Produk (Memesan Produk):
Setiap pesanan dapat berisi satu atau lebih produk. <br>
Relasi: Many-to-Many

## 4. Pesanan ke Transaksi (Pembayaran):
Setiap pesanan memiliki satu transaksi pembayaran yang terkait. <br>
Relasi: One-to-One


## Dependecies / Teknologi yang digunakan 💻

1. npm init -y
   ```sh
   npm init -y
   ```

2. express
   ```sh
   npm i express
   ```

3. mysql
   ```sh
   npm i mysql2
   ```

4. Axios
   ```sh
   npm i axios
   ```

---

# CLASS DIAGRAM
![Class Diagram](https://github.com/indobims/Ujikom_External/blob/main/img/ClassDiagram.png?raw=true)

# ERD DIAGRAM
![ERD Diagram](https://github.com/indobims/Ujikom_External/blob/main/img/ERD.png?raw=true)

# USECASE DIAGRAM
![Use Case Diagram](../img/UseCase.png)




<img src="../img/logobims.png" width="300" style="border-radius: 50%;">
