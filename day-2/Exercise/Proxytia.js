//Proxytia by Muhammad Faisal Firdani

// Declare Variabel nama dan peran.
let nama = "Faisal";

let peran = "Penyihir";

// Membuat kondisi apakah nama sudah diisi atau belum ?
if (nama.length === 0){
    // Jika belum maka Nama harus Diisi terlebih dahulu.
    console.log("Nama harus diisi!");
    // membuat kondisi tertentu, apakah nama sudah diisi dan peran diisi sebagai ksatria ?
}else if (nama.length > 0 && peran === "Ksatria"){
    // Jika iya , maka game akan mulai sebagai ksatria
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
    // membuat kondisi tertentu, apakah nama sudah diisi dan peran diisi sebagai Tabib ?
} else if (nama.length > 0 && peran === "Tabib") {
    // Jika iya , maka game akan mulai sebagai Tabib
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`)
    // membuat kondisi tertentu, apakah nama sudah diisi dan peran diisi sebagai Penyihir ?
} else if (nama.length > 0 && peran === "Penyihir"){
    // Jika iya , maka game akan mulai sebagai Penyihir
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
    // kode ini akan terekseuksi jika kalian mengisi nama tetapi tidak mengisi perannya
} else {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
}
