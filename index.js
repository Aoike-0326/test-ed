// QRの中身: cp03,320,図書室,135
// [チェックポイントID, QR角度, 目的地, 目的地方位]
const [cpId, qrAngleStr, destName, targetAngleStr] = qrData.split(",");
const qrAngle = parseFloat(qrAngleStr);
const targetAngle = parseFloat(targetAngleStr);

// 保存
localStorage.setItem("northOffset", qrAngle);
localStorage.setItem("targetAngle", targetAngle);
