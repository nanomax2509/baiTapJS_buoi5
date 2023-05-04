function mainBai1(){
    var diemChuan = document.getElementById("b1InputDC").value;
    var khuVuc = document.getElementById("selectKhuVuc").value;
    var doiTuong = document.getElementById("selectDoiTuong").value;

    var d1 = document.getElementById("b1InputD1").value;
    var d2 = document.getElementById("b1InputD2").value;
    var d3 = document.getElementById("b1InputD3").value;
    
    var total = 0;
    total = tongDiem(d1,d2,d3,khuVuc,doiTuong);
    
    if(total >= diemChuan && d1>0 && d2>0 && d3>0){
        // console.log("Thi đậu");
        document.getElementById("b1TxtResult").innerHTML = "Bạn đã Đậu. Tổng điểm là: "+total;
    }
    else{
        // console.log("Thi rớt");
        document.getElementById("b1TxtResult").innerHTML = "Bạn đã Rớt. Tổng điểm là: " + total;
    }
}

function tongDiem(d1,d2,d3,khuVuc,doiTuong){
    console.log(d1,d2,d3,khuVuc,doiTuong);
    return total = Number(d1)+ Number(d2)+ Number(d3) +Number(khuVuc) + Number(doiTuong);
}

