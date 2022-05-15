function tinhDiem() {
    // B1: Dom tới ô input để lấy giá trị
    var diem1 = +document.getElementById('diem_1').value
    var diem2 = +document.getElementById('diem_2').value
    var diem3 = +document.getElementById('diem_3').value
    var diemChuan = +document.getElementById('diem_chuan').value
    var diemVung = +document.getElementById('khuVuc').value
    var doiTuong = +document.getElementById('doiTuong').value
    // B2: tính tổng điểm
    var tongDiem = diem1 + diem2 + diem3 + diemVung + doiTuong
    // B3: xét điều kiện nếu có điểm 0 thì bị rớt 
    if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        // Xuất kết quả ra màn hình
        document.getElementById('result').style.display = 'block'
        var ketQua = document.getElementById('resultEl')
        ketQua.innerHTML = 'Bạn bị trượt. Do có điểm liệt (0 điểm)'
    // xét điểm Nếu điểm lớn hơn hoặc bằng điểm chuẩn thì đậu
    } else if (tongDiem >= diemChuan) {
        document.getElementById('result').style.display = 'block'
        var ketQua = document.getElementById('resultEl')
        ketQua.innerHTML = 'Bạn đã đậu. Tổng điểm' + tongDiem
    } else {
        document.getElementById('result').style.display = 'block'
        var ketQua = document.getElementById('resultEl')
        ketQua.innerHTML = 'Bạn bị trượt. Tổng điểm' + tongDiem
    }
}
function tinhTienDien() {
    // B1: Dom tới ô input để lấy giá trị
    var hoTen = document.getElementById('hoTen').value
    var soKw = +document.getElementById('soDien').value
    var tienDien = 0
    // B2: Xét điều kiện với số kw khác nhau cho ra giá điện khác nhau 
    if (soKw == 0) {
        alert("Số kw không hợp lệ, vui lòng nhập lại")
    } else if (soKw <= 50) {
        tienDien += soKw * 500
    } else if (50 < soKw && soKw <= 100) {
        tienDien += 50 * 500 + (soKw - 50) * 650
    } else if (100 < soKw && soKw <= 200) {
        tienDien += 50 * 500 + 50 * 650 + (soKw - 100) * 850
    } else if (200 < soKw && soKw <= 350) {
        tienDien += 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100
    } else {
        tienDien += 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300
    }
    //B3: Xuất kết quả
    document.getElementById('tinhTien').style.display = 'block'
    var ketQua = document.getElementById('tinhTienEl')
    ketQua.innerHTML = ("Họ tên: ") + hoTen + ("; tiền điện: ") + tienDien
}