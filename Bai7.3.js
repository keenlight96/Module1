function funcBai1() {
    let scoreVL = Number(prompt("Điểm môn Vật lý: "));
    let scoreH = Number(prompt("Điểm môn Hóa học: "));
    let scoreS = Number(prompt("Điểm môn Sinh học: "));
    let averageScore = (scoreVL + scoreH + scoreS) / 3;
    document.write("<b>Bài 1:</b><br> Điểm trung bình 3 môn là: " + averageScore);
}

function funcBai2() {
    let doC = Number(prompt("Nhập độ C: "));
    let doF = doC * 9/5 + 32;
    document.write("<b>Bài 2</b><br>" + doC + " độ C bằng " + doF + " độ F");
}

function funcBai34() {
    let radius = Number(prompt("Nhập bán kính: "));
    let area = Math.PI * Math.pow(radius, 2);
    let perimeter = 2 * Math.PI * radius;
    document.write("<b>Bài 3 + 4:</b><br>");
    document.write("Diện tích của hình tròn: " + area.toFixed(2) + "<br>");
    document.write("Chu vi của hình tròn: " + perimeter.toFixed(2));
}