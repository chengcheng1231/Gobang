## 【React】：五子棋
### 以 React 來製作兩人對弈的純策略型棋類游戲-五子棋
- [網站 Demo](https://chengcheng1231.github.io/Gobang/)
### 使用技術：
- funciton component 來建立元件
- JSX 語法撰寫元件並以 styled-component 做切版
- 支援 RWD
- useState 管理狀態
- 使用 Prettier 讓程式碼格式統一

![](https://imgur.com/AzlStnv.gif)

### 五子棋功能
- 以二維陣列來存取棋盤
- 使用偽元素將棋子下在交叉點而非正中央
- 能看到目前的狀態，顯示下個玩家或是遊戲贏家
- 具有悔棋、取消悔棋的功能
- 具分享功能，以 html2canvas 套件去下載棋盤截圖
- 重新開新棋盤
- 具能返回任意步驟的功能，讓玩家能查看歷史紀錄

![](https://imgur.com/1KDYGP5.jpg)

---

### 專案結構
- /src
    - /components
        - App.js
        - GameBoard.js
        - Square.js
    - /pages
        - App.js
        - GameBoard.js
        - Square.js
    - index.js
    - index.css
    - App.css
    - utills.js: All Utility functions

#### 1. components 放置 styled-component 版面
#### 2. pages 放置 funciton component 以及觸發事件