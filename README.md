# Restaurant List 餐廳清單
這是一個餐廳清單的模擬網站

## Features
* 使用者可以註冊及登入帳號
* 使用者可以透過 Facebook 直接登入
* 使用者可以建立專屬的餐廳清單
* 使用者可以瀏覽餐廳清單
* 使用者可以瀏覽特定餐廳的詳細資訊
* 使用者可以修改特定餐廳的詳細資訊
* 使用者可以刪除特定餐廳
* 使用者可以搜尋特定餐廳

## Getting Started

### Prerequisites
* node.js @14.16.0
* express @4.16.4
* express-handlebars @3.0.0
* express-session@1.17.1
* bootstrap @4.3.1
* MongoDB
* mongoose@5.9.7
* body-parser@1.20.0
* method-override@3.0.0
* bcryptjs@2.4.3
* connect-flash@0.1.1
* dotenv@8.2.0
* passport@0.4.1
* passport-facebook@3.0.0
* passport-local@1.0.0

### Installing
1. 開啟終端機(Terminal)，clone 此專案至本機電腦

```
git clone https://github.com/youjheng/Restaurant-List.git
```

2. cd 到存放專案本機位置並執行：

```
cd Restaurant-List
```

3. 安裝 npm 套件：

```
npm install
```

4. 安裝 nodemon 套件

```
npm i nodemon
```

5. 設定環境變數連線 MongoDB
```
MONGODB_URI=Your MongoDB connection string
```

6. 參考 .env.example 設定環境變數

7. 載入種子資料
```
npm run seed
```

8. 啟動伺服器

```
npm run dev
```

9. 在瀏覽器輸入 http://localhost:3000 ，瀏覽網頁