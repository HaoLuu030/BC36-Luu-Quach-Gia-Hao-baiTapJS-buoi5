/**
 * Bài 1:
 * Input:
 * Điều kiện: Tổng điểm lớn hơn hoặc băng điểm chuẩn; Không có môn nào điểm không
 * Giá trị: Điểm Tổng kết (3 môn), điểm ưu tiên (theo khu vực, theo đối tượng)
 *
 * Process:
 *
 * Lấy input: điểm 3 môn (a, b, c), tổng 3 môn (sum), khu vực (area), đối tượng (individual), điểm theo khu vực (areaGrade) điểm theo đối tượng (individualGrade), điểm chuẩn (requirement)
 *
 * Đối chiếu với điều kiện rồi suy ra điểm cộng tương ứng (ví dụ area = "A" thì areaGrade = 2, v.v.)
 * 
 * Cộng tất cả các điểm lại với nhau totalGrade = a + b + c + areaGrade + individualGrade
 * 
 * So sánh với điểm chuẩn (requirement) và xét xem trong 3 môn có môn nào 0 điểm hay không rồi in ra "đậu" hoặc rớt
 *
 *
 *
 * Output: Tên học sinh, đậu hay không đậu
 */

// handler of the event

function calcareaGrade(area) {
    switch (area) {
      case "A":
        return 2;
      case "B":
        return 1;
      case "C":
        return 0.5;
      default:
        return 0;
    }
  }
  
  function calcindividualGrade(individual) {
    switch (individual) {
      case 1:
        return 2.5;
      case 2:
        return 1.5;
      case 3:
        return 1;
      default:
        return 0;
    }
  }
  
  function ex1() {
    var student = "Trần Văn A"
    var a = 7;
    var b = 7;
    var c = 7;
    var area = "A";
    var individual = 1;
    var requirement = 25;
    var sum = 0;
    var result;
  
    var areaGrade = 0;
    var individualGrade = 0;
  
    areaGrade = calcareaGrade(area);
    individualGrade = calcindividualGrade(individual);
  
    sum = a + b + c + areaGrade + individualGrade;
  
    if (sum >= requirement && a > 0 && b > 0 && c > 0) {
      result = "Đậu";
    } else {
      result = "Rớt";
    }

    console.log("Kết quả bài 1: Học sinh " + student + " "  + result);
  }

  /******************************************** */

  /**
 * Bài 2:
 * Input:
 *Thông tin tiêu thụ điện: Tên, số Kw, giá điện
 *
 * Process:
 *
 * Lấy input: var name =  "Huỳnh Văn Tèo"; var electricity = 1000 kw (số điện); var electricityBill (tiền điện);
 *
 * Xét điều kiện ở từng mốc:
 * 
 * số điện <= 50 thì có giá điện tương ứng là 500d/kw
 * 
 *50 < số điện <= 100 thì 50kw đầu giá 500d/kw và phần còn lại sẽ tương ứng với giá 650d/kw

 Xét tương tự với các mốc còn lại: 200kw (850d/kw), 350kw (1100d/kw), trên 350 (1300d/kw)
 *
 * Cộng dồn
 *
 *
 *
 * Output: Kết quả tiền điện
 */

function ex2() {
    var name = "Huỳnh Văn Tèo";
    var electricity = 1000;
    var electricityBill = "";
  
    if (electricity <= 50) {
      electricityBill = electricity * 500;
    } else if (electricity <= 100) {
      electricityBill = 50 * 500 + (electricity - 50) * 650;
    } else if (electricity <= 200) {
      electricityBill = 50 * 500 + 50 * 650 + (electricity - 100) * 850;
    } else if (electricity <= 350) {
      electricityBill =
        50 * 500 + 50 * 650 + 100 * 850 + (electricity - 200) * 1100;
    } else {
      electricityBill =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (electricity - 350) * 1300;
    }
  
    console.log("Kết quả bài 2: " + name + ": ", electricityBill + " (VND)");
  }
  