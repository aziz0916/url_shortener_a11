# 短網址產生器
使用者可以在表單輸入原始網址，送出表單之後，畫面會回傳格式化後的短網址

## 專案畫面
![Index](https://github.com/aziz0916/url_shortener_a11/blob/main/public/images/index.png)
![Original URL](https://github.com/aziz0916/url_shortener_a11/blob/main/public/images/original_url.png)
![Short URL](https://github.com/aziz0916/url_shortener_a11/blob/main/public/images/short_url.png)

## 專案功能
1. 使用者可以在表單輸入原始網址，按Shorten送出表單之後，畫面會回傳格式化後的短網址
2. 使用者可以按Copy來複製縮短後的網址
3. 在伺服器啟動期間，使用者可以在瀏覽器的網址列，輸入提供的短網址，瀏覽器就會導向原本的網站
4. 使用者可以按Back回到表單輸入畫面

## 使用工具
- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [MongoDB](https://www.mongodb.com/) - 資料庫
- [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB 的 ODM 可以在程式中與資料庫溝通

## 安裝
1. 開啟終端機(Terminal)，Clone 此專案至本機電腦

```
git clone https://github.com/aziz0916/url_shortener_a11.git
```
2. 進入存放此專案的資料夾

```
cd url_shortener_a11
```
3. 安裝 npm 套件

```
npm install
```
4. 引入種子資料

```
npm run seed
```
5. 執行程式

```
npm run dev
```
