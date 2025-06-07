// 例：目標が QR で指定された方向（仮で 320° とする）
const targetAngle = 320;

// correctedAlpha は今スマホが向いてる向き（北からの角度）
// ⬇️ ここを修正（時計回りの計算）
const direction = (correctedAlpha - targetAngle + 360) % 360;

// 矢印をその方向に回す
document.getElementById("arrow").style.transform = `rotate(${direction}deg)`;

// 表示も更新
document.getElementById("info").textContent =
  `現在の向き: ${correctedAlpha.toFixed(1)}° → 目的地: ${targetAngle}° → 矢印: ${direction.toFixed(1)}°`;
