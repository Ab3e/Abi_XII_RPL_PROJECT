let saldo = {
    nama: "Riki",
    sandi: 1234,
    Pin: 4321,
    saldo: 20000
}

//Ambil Saldo

let inputSandi = prompt("Masukkan Sandi Anda!")
let inputPin = 0

function ambilSaldo(){
    let ambil = parseInt(prompt("Berapa Yang Mau Anda Ambil?"))
    let sisa = rekening.saldo - ambil
    alert(`Saldo Anda Sisa: $${sisa}`)
}

//Input Sandi
if(inputSandi == 1234){
    inputPin = prompt("Masukkan Pin")
}else{
    alert("Sandi Salah")
}

// Input Pin
if(inputpin == 4321){
    ambilSaldo()
}else{
    alert("Pin Salah")
}

ambilSaldo()