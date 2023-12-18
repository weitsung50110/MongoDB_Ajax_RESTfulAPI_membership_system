# 使用MongoDB結合Express和Fetch來實作RESTful API會員系統
- 本Repo是使用MongoDB Community Server 4.4.26版本
  
根目錄下的public中是直接把RESTful API寫在vue.js當中，而vanilla資料夾下面的RESTful APIi是使用Vanilla JS完成的，vue只有用在一點特效的部分。
比較建議使用根目錄下public的版本，把RESTful API寫在vue.js中看起來較簡潔。

- This repository utilizes MongoDB Community Server version 4.4.26.

The public directory in the root contains the RESTful API directly written within the vue.js file. Meanwhile, the RESTful API in the vanilla folder is implemented using Vanilla JS, with only a few Vue.js components used for specific effects.

Comparatively, it's recommended to use the version in the public directory, where the RESTful API is written inside the vue.js file, making it appear more concise and organized.


**> Tree structure**<br />
 Root Directory<br>
  ├── models<br>
  │---└── user_shchema.js<br>
  ├── app.js<br>
  ├── public<br>
  │---└── index.html<br>
  │---└── vue.js<br>
  │---└── styles.css<br>
  ├── mongoDB_exported_data<br>
  │---└── exported_data.json<br>
  ├── vanilla<br>
  │---└── models<br>
  │------└── user_shchema.js<br>
  │---└── app.js<br>
  │---└── public<br>
  │------└── index.html<br>
  │---------└── vue.js<br>
  │---------└── script.js<br>
  │---------└── styles.css<br>


**> npm list** <br />
+-- express@4.18.2 <br />
`-- mongoose@8.0.2 <br />

## RWD

## MongoDB

## RESTfulAPI

## AJAX fetch

## 實作講解
#### 首頁
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/33.png)

#### 新增會員
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/35.png)

#### 更新會員資料
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/36.png)

#### 尋找各別單一會員
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/37.png)

#### 尋找所有會員
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/34.png)

#### 刪除會員
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/38.png)
