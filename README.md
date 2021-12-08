## React 入門：井字遊戲及五子棋
以 React 來製作經典的策略棋盤遊戲，易於學習及上手，從簡單的 3x3 井字遊戲到有趣的 19x19 五子棋
- [Demo](https://#/)

![Imgur](https://imgur.com/AzlStnv.gif)

### 五子棋功能
- 基本棋盤切版，將棋子畫在交叉點而不是正中央
- 以 `::after` 繪製棋盤背景
- 將 3x3 棋盤擴展成 19x19 棋盤，且調整棋格大小
- 以二維陣列存取棋盤狀態，記錄遊戲過程
- 返回任意步驟的功能，允許玩家查看遊戲的歷史紀錄
- 具有悔棋、取消悔棋的功能
- 重新開始
- 歷史紀錄會標示高亮顯示當前的版本
- 紀錄棋譜的功能，點擊分享會以 html2canvas 擷取棋盤截圖
![](https://imgur.com/1KDYGP5.jpg)

---

### 使用技術
- 以 React 搭配 React-router 建立棋盤遊戲
- 以 JSX 語法撰寫元件
- 支援 RWD，使用 styled-component 以 Sass 進行排版
- 使用 funciton component 及 useState 管理狀態
- 導入 Prettier 讓程式碼格式統一


### 專案結構
- /src
    - /components
        - App.js
        - Home.js
        - Gobang.js
        - Tictactoe.js
    - /constants
        - gameType.js
        - style.js
    - /pages
        - GobangPage.js
        - TictactoePage.js
    - index.js
    - index.css
    - utills.js: All Utility functions