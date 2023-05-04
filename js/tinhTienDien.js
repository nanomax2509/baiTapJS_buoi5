const KW_DAU_50 = 500;
const KW_KE_50 = 650;
const KW_KE_100 = 850;
const KW_KE_150 = 1100;
const KW_CONLAI = 1300;

function mainBai2(){
    var name = document.getElementById("b2InputName").value;
    var kw = document.getElementById("b2InputKw").value;

    // console.log(name,kw);

    var total = calcDien(kw,KW_DAU_50,KW_KE_50,KW_KE_100,KW_KE_150,KW_CONLAI);
    console.log(KW_DAU_50,KW_KE_50,KW_KE_100,KW_KE_150,KW_CONLAI);
    // console.log(total);

    show(name,total);
}
function calcDien(b2InputKw,kw_dau,kw_50,kw_100,kw_150,kw_conlai){
    // KW ĐẦU TIÊN
    if(0<b2InputKw && b2InputKw <= 50){
        return b2InputKw * kw_dau;
    }
    // KW KẾ 50
    else if(b2InputKw <= 100){
        return kw_dau*50 + (b2InputKw - 50) * kw_50;
    }
    // KW KẾ 100
    else if(b2InputKw <=200){
        return kw_dau*50 + kw_50*50 + (b2InputKw - 100)*kw_100;
    }
    // KW KẾ 150
    else if(b2InputKw <=350){
        return kw_dau*50 + kw_50*50 + 100*kw_100 +(b2InputKw - 200)*kw_150;
    } 
    // KW CÒN LẠI
    else{
        return kw_dau*50 + kw_50*50 + 100*kw_100 + 150*kw_150 + (b2InputKw - 350)*kw_conlai;
    }
}

// Hiển thị
function show(name,total){
    document.getElementById("b2TxtResult").innerHTML = "Họ tên: " + name + "; Tiền điện: " + total.toLocaleString();
}