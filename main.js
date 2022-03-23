console.log("------------------BÀI 1-------------------------");

/*
- Nhập vào: điểm chuẩn, điểm 3 môn thi, khu vực, đối tượng
- điểm tổng kết = điểm 3 môn + điểm ưu tiên (điểm đối tượng + điểm khu vực)

- xuất ra kết quả thi và tổng điểm.
*/

//viết hàm xử lý:
function tinhDiemThi(toan, ly, hoa, khuvuc, doituong, diemchuan)
{
    var tongDiemThi = toan + ly + hoa + khuvuc + doituong;
    
    if ((tongDiemThi >= diemchuan) && (toan > 0) && (ly > 0) && (hoa > 0))
    {
        return true;
    }
    else 
    {
        return false;
    }
}

//DOM
document.getElementById("btnTinhDiemThi").onclick = function()
{
    var diemToan = document.getElementById("txtToan").value *1;
    var diemLy = document.getElementById("txtLy").value *1;
    var diemHoa = document.getElementById("txtHoa").value *1;
    var diemKhuVuc = document.getElementById("slKhuVuc").value *1;
    var diemDoiTuong = document.getElementById("slDoiTuong").value *1;
    var diemChuan = document.getElementById("txtDiemChuan").value *1;
    var tongDiem = diemToan + diemHoa + diemLy + diemKhuVuc + diemDoiTuong;
    var thongBaoDiemThi;

    var kqTinhDiem = tinhDiemThi(diemToan, diemHoa, diemLy, diemKhuVuc, diemDoiTuong, diemChuan);

    if(kqTinhDiem == true)
    {   
        thongBaoDiemThi = "Tổng điểm: " + tongDiem + ". Kết quả: ĐẠT."
    }
    else
    {
        thongBaoDiemThi = "Tổng điểm: " + tongDiem + ". Kết quả: TRƯỢT."
    }

    document.getElementById("divThongBaoDiemThi").innerHTML = thongBaoDiemThi;
}


console.log("------------------BÀI 2-------------------------");
/**
- Nhập vào tên, số Kw;
- Cho a = tổng số điện tiêu thụ
    a <= 50: 500*50
    50 < a <= 100: 500*50 + 650 * (a-50)
    100 < a <= 200: 850 * (a - 100) + (650 * 50) + (500 * 50)
    200 < a <= 350: 1100 * (a - 200) + (850 * 100) + (650 * 50) + (500 * 50)
    a < 350: 1300 * (a - 350) + (1100 * 150) + (850 * 100) + (650 * 50) + (500 * 50)
-viết hàm xử lý
-xuất kết qủa
 */

//viết hàm
function tinhTienDien(soDienTieuThu_f)
{
    var tongTienDien;

    if(soDienTieuThu_f <= 50)
    {
        tongTienDien = soDienTieuThu_f * 500;
        return tongTienDien;
    }
    if (50 < soDienTieuThu_f <= 100)
    {
        tongTienDien = ((soDienTieuThu_f - 50) * 650) + (500 * 50);
        return tongTienDien;
    }
    if (100 < soDienTieuThu_f <= 200)
    {
        tongTienDien = ((soDienTieuThu_f - 100) * 850) + (650 * 50) + (500 * 50);
        return tongTienDien;
    }
    if (200 < soDienTieuThu_f <= 350)
    {
        tongTienDien = ((soDienTieuThu_f - 200) * 1100) + (850 * 100) + (650 * 50) + (500 * 50);
        return tongTienDien;
    }
    if (soDienTieuThu_f < 350)
    {
        tongTienDien = ((soDienTieuThu_f - 350) * 1300) + (1100 * 150) + (850 * 100) + (650 * 50) + (500 * 50);
        return tongTienDien;
    }
};

//DOM
document.getElementById("btnTinhTienDien").onclick = function()
{
    var ten = document.getElementById("txtTen").value;
    var dienTieuThu = document.getElementById("txtDienTieuThu").value * 1;

    var tongTienDien = tinhTienDien(dienTieuThu);

    document.getElementById("divThongBaoTienDien").innerHTML = "Người dùng: "+ ten + " đã sử dụng: "+ dienTieuThu + "Kw. </br>" +
    " Tổng số tiền phải trả: " +  tongTienDien + "VND";
};


console.log("------------------BÀI 3-------------------------");
/**
    - Nhập: họ tên, tổng thu nhập, số người phụ thuộc
    - Tính thuế:
    thuNhapChiuThue = txtTongThuNhap - 4 - (txtSoNguoiPhuThuoc * 1.6)
    thueThuNhapCaNhan = thuNhapChiuThue / thuế suất.
 */

//hàm
function tinhThue(tongThuNhap_f, soNguoiPhuThuoc_f)
{
    var thuNhapChiuThue = (tongThuNhap_f - 4) - (soNguoiPhuThuoc_f * 1.6);
    var thueThuNhapCaNhan;

    if(thuNhapChiuThue < 60)
    {
        thueThuNhapCaNhan = "Không cần trả thuế TNCN";
        return thueThuNhapCaNhan;
    }
    if(thuNhapChiuThue == 60)
    {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.05;
        return thueThuNhapCaNhan;
    }
    if(60 < thuNhapChiuThue <= 120)
    {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.1;
        return thueThuNhapCaNhan;
    }
    if(120 < thuNhapChiuThue <= 210)
    {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.15;
        return thueThuNhapCaNhan;
    }
    if(210 < thuNhapChiuThue <= 384)
    {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.2;
        return thueThuNhapCaNhan;
    }
    if(384 < thuNhapChiuThue <= 624)
    {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.25;
        return thueThuNhapCaNhan;
    }
    if(624 < thuNhapChiuThue <= 960)
    {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.3;
        return thueThuNhapCaNhan;
    }
    if(thuNhapChiuThue > 960)
    {
        thueThuNhapCaNhan = thuNhapChiuThue * 0.35;
        return thueThuNhapCaNhan;
    }
}

//DOM
document.getElementById("btnTinhThue").onclick = function()
{
    var hoTen = document.getElementById("txtHoTen").value;
    var tongThuNhap = document.getElementById("txtTongThuNhap").value * 1;
    var soNguoiPhuThuoc = document.getElementById("txtSoNguoiPhuThuoc").value * 1;

    var thueTNCaNhan = tinhThue(tongThuNhap, soNguoiPhuThuoc);

    var kqTinhThue = "Công dân: "+ hoTen +"</br>" + "Tổng thu nhập: " + tongThuNhap +" triệu đồng. </br>" + "Số tiền thuế TNCN phải trả: "+thueTNCaNhan;
    document.getElementById("divThongBaoTienThue").innerHTML = kqTinhThue;
}

console.log("------------------BÀI 4-------------------------");

/**
    - NHẬP: mã kh, loại kh, số kết nối, số kênh cao cấp.
    - nếu kh là dân: phí xử lý + phí dịch vụ + số kênh cao cấp
    - nếu kh là doanh nghiệp: phí xử lý, phí dịch vụ (nhiều kênh) + số kênh cao cấp
 */
//hàm

function tinhTienCap(loaiKH_f, soKetNoi_f, soKenhCaoCap_f)
{
    var tongTienCap;
    var tienSoKetNoi = tienTheoSoKetNoi(soKetNoi_f);
    

    function tienTheoSoKetNoi(soKetNoi_f)
    {
        if(soKetNoi_f <= 10)
        {
            tienSoKetNoi  = soKetNoi_f * 75;
            return tienSoKetNoi;
        }
        if(soKetNoi_f > 10)
        {
            tienSoKetNoi = (75 * 10) + ((soKetNoi_f - 10) * 5);
            return tienSoKetNoi;
        }
    }


    if(loaiKH_f == 1)
    {
        tongTienCap = 4.5 + 20.5 + (soKenhCaoCap_f * 7.5);
        return tongTienCap;
    }
    if(loaiKH_f == 2)
    {
        tongTienCap = 15 + tienSoKetNoi + (soKenhCaoCap_f * 50);
        return tongTienCap;
    }
}


//DOM
document.getElementById("btnTinhTienCap").onclick = function()
{
    var maKH = document.getElementById("txtMaKH").value;
    var loaiKH = document.getElementById("slLoaiKH").value;
    var soKetNoi = document.getElementById("txtSoKetNoi").value * 1;
    var soKenhCaoCap = document.getElementById("txtSoKenhCaoCap").value * 1;

    var tienCap = tinhTienCap(loaiKH, soKetNoi, soKenhCaoCap);
    var kqTinhTienCap = "Mã khách hàng: "+ maKH +"</br>"+"Tổng tiền cáp phải trả: "+tienCap+"$";

    document.getElementById("divThongBaoTienCap").innerHTML = kqTinhTienCap;
}