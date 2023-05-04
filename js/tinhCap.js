const HD_ND = 4.5;
const dichVu_ND = 20.5;
const caoCap_ND = 7.5;
const HD_DN = 15;
const dichVu_DN = 75;
const caoCap_DN = 50;
const ketNoiThem =5;

function mainBai4(){
    var id = document.getElementById("b4InputID").value;
    var kenh = document.getElementById("b4InputKenh").value;
    var KH = document.getElementById("b4mySelect").value;
    var soKN = document.getElementById("showKN").value;
    var total = 0;
    
    if(KH == "nhaDan"){
        total = HD_ND + dichVu_ND +thueCaoCap(kenh,caoCap_ND);
    }
    else if(KH == "doanhNghiep"){
        total = HD_DN + thueKetNoi(soKN) + thueCaoCap(kenh,caoCap_DN);
    }
    // console.log(total,thueKetNoi(soKN),thueCaoCap(kenh,caoCap_ND))
    show(id,total);
}
function khachHang(){
    var choose = document.getElementById("b4mySelect").value;
    console.log(choose);
    if(choose == "doanhNghiep"){
    document.getElementById("showKN").style.display = "block";
    }
    else
    document.getElementById("showKN").style.display = "none";
}
function thueCaoCap(kenh,caoCap_ND){
    if(kenh>=0){
        return kenh * caoCap_ND;
    }
    else{
        alert("Kênh phải lớn hơn bằng 0")
    }
}
function thueKetNoi(soKetNoi){
    if(soKetNoi > 0 && soKetNoi <=10){
        return dichVu_DN;
    }
    else if(soKetNoi>10){
        return dichVu_DN + (soKetNoi-10)*ketNoiThem;
    }
    else{
        return dichVu_DN;
    }
}
function show(id,total){
    document.getElementById("b4TxtResult").innerHTML = "Mã khách hàng: " + id + "; Tiền cáp: " + new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
}