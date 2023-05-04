const LESS_60 = 0.05;
const LESS_120 = 0.1;
const LESS_210 = 0.15;
const LESS_384 = 0.2;
const LESS_624 = 0.25;
const LESS_960 = 0.3;
const HIGH_960 = 0.35;

function mainBai3() {
    var name = document.getElementById("b3InputName").value;
    var thuNhap = document.getElementById("b3InputMoney").value;
    var nguoi = document.getElementById("b3InputHuman").value;

    console.log(name, thuNhap, nguoi);

    var total = calcThue(thuNhap,nguoi,LESS_60,LESS_120,LESS_210,LESS_384,LESS_624,LESS_960,HIGH_960);
    
    show(name,total);
}
function show(name,total){
    document.getElementById("b3TxtResult").innerHTML = "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(total);
}
function calcThue(thuNhap,nguoi,less_60,less_120,less_384,less_624,less_960,high_960){
    // Thu nhập thấp hơn 60tr
    var sauPhuThuoc =(thuNhap - 4e+6 - nguoi*1600000);
    if(0< sauPhuThuoc && sauPhuThuoc <= 60e+6){
        return sauPhuThuoc * less_60;
    }
    // Thu nhập thấp hơn 120tr
    else if(sauPhuThuoc <= 120e+6){
        return 60e+6 * less_60 + (sauPhuThuoc -60e+6)*less_120;
    }
    // Thu nhập thấp hơn 384tr
    else if(sauPhuThuoc <= 384e+6){
        return 60e+6 * less_60 + 60*less_120 +(sauPhuThuoc - 120)*less_384;
    }
    // Thu nhập thấp hơn 624tr
    else if(sauPhuThuoc <= 624e+6){
        return 60e+6 * less_60 + 60e+6*less_120 +264e+6*less_384 + (sauPhuThuoc-384e+6)*less_624;
    }
    // Thu nhập thấp hơn 960tr
    else if(sauPhuThuoc <= 960e+6){
        return 60e+6 * less_60 + 60e+6*less_120 +264e+6*less_384 + 240e+6*less_624 +(sauPhuThuoc * less_960);
    }
    // Thu nhập cao hơn 960tr
    else{
        return 60e+6 * less_60 + 60e+6 * less_120 +264e+6 * less_384 + 240e+6 * less_624 + 336e+6 * less_960 + (sauPhuThuoc -960)*high_960;
    }
}