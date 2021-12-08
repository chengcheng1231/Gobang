import html2canvas from "html2canvas";

//判斷勝負
export function calculateWinner(data, newChessPosition) {
  var [x, y] = newChessPosition;
  //檢查列
  for (var i = x - 4; i <= x; i++) {
    if (i < 0 || i > 14) continue;
    if (
      data[i][y] === data[i + 1][y] &&
      data[i + 1][y] === data[i + 2][y] &&
      data[i + 2][y] === data[i + 3][y] &&
      data[i + 3][y] === data[i + 4][y] &&
      data[i + 4][y] === data[i][y]
    ) {
      return data[i][y];
    }
  }
  // 檢查行
  for (let i = y - 4; i <= y; i++) {
    if (i < 0 || i > 14) continue;
    if (
      data[x][i] === data[x][i + 1] &&
      data[x][i + 1] === data[x][i + 2] &&
      data[x][i + 2] === data[x][i + 3] &&
      data[x][i + 3] === data[x][i + 4] &&
      data[x][i + 4] === data[x][i]
    ) {
      return data[x][i];
    }
  }
  //檢查右斜
  var j = 0;
  for (let i = x + 4; i >= x; i--) {
    if (i > 18 || i - 4 < 0 || y - 4 + j < 0 || y - 4 + j + 4 > 18) {
      j += 1;
      continue;
    }
    if (
      data[i][y - 4 + j] === data[i - 1][y - 4 + j + 1] &&
      data[i - 1][y - 4 + j + 1] === data[i - 2][y - 4 + j + 2] &&
      data[i - 2][y - 4 + j + 2] === data[i - 3][y - 4 + j + 3] &&
      data[i - 3][y - 4 + j + 3] === data[i - 4][y - 4 + j + 4] &&
      data[i - 4][y - 4 + j + 4] === data[i][y - 4 + j]
    ) {
      return data[i][y - 4 + j];
    }
    j += 1;
  }

  //檢查左斜
  var k = 0;
  for (let i = x - 4; i <= x; i++) {
    if (i + 4 > 18 || i < 0 || y - 4 + k < 0 || y - 4 + k + 4 > 18) {
      k += 1;
      continue;
    }
    if (
      data[i][y - 4 + k] === data[i + 1][y - 4 + k + 1] &&
      data[i + 1][y - 4 + k + 1] === data[i + 2][y - 4 + k + 2] &&
      data[i + 2][y - 4 + k + 2] === data[i + 3][y - 4 + k + 3] &&
      data[i + 3][y - 4 + k + 3] === data[i + 4][y - 4 + k + 4] &&
      data[i + 4][y - 4 + k + 4] === data[i][y - 4 + k]
    ) {
      return data[i][y - 4 + k];
    }
    k += 1;
  }
  return null;
}

export const handleShare = () => {
  html2canvas(document.getElementById("canva")).then((canvas) => {
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const a = document.createElement("a");
    a.setAttribute("download", "GobangRecord.png");
    a.setAttribute("href", image);
    a.click();
  });
};
