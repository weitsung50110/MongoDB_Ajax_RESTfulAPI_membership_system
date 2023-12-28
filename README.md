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

## MongoDB
    show dbs
>my_database  0.000GB

    use my_database
>switched to db my_database

    show collections
>my_custom_users

    db.my_custom_users.find()
        
>{ "_id" : ObjectId("65796b2d69ba374cd3b6dfb8"), "username" : "qwq", "email" : "qwq@vvvvv", "age" : 23, "__v" : 0 } <br />
{ "_id" : ObjectId("6579678969ba374cd3b6dfa3"), "username" : "乎花", "email" : "aa@aaa", "age" : 11, "__v" : 0 }

![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/39.png)

### - Mongoose
Mongoose 是一個 Node.js 環境中的 JavaScript 庫，它提供了對 MongoDB 的物件建模工具，讓開發者能夠更方便地在 Node.js 中操作和管理 MongoDB。

Mongoose is a JavaScript library within the Node.js environment that offers an object modeling tool for MongoDB. It enables developers to conveniently operate and manage MongoDB within Node.js.

#### 創建新文檔 Creating New Documents:
    User.create(newUser)

#### 查詢文檔 Querying Documents:
-Get個別別用戶 Get Individual User

    User.findOne({"_id": req.params.id})

-Get全部用戶 Get All Users

    User.find({})
    
#### 更新文檔 Updating Documents:
    User.findOneAndUpdate(
        { 
            "_id": req.params.id, //req.params.id 的值，因為它是在路由中 :id 的位置提供的值。
        }, // 條件，選擇要更新的文檔 
        { $set: 
            updatedFields // 使用包含有輸入值的欄位的物件進行更新
        }, 
        { new: true } // 選項，返回更新後的文檔
    )

#### 刪除文檔 Deleting Documents:
    User.findOneAndDelete({ _id: req.params.id })

## RESTfulAPI
在伺服器端使用 Node.js 的 Express 框架建立 RESTful API，供前端或其他應用程式使用。<br />
而在前端，是使用 Fetch API 來向伺服器發送請求，從而對這些 RESTful API 進行操作和獲取數據，實現前後端之間的數據交換和通信。

On the server-side, I use the Node.js Express framework to establish RESTful APIs for use by the frontend or other applications.<br />
On the frontend, I employ the Fetch API to send requests to the server, thereby interacting with and retrieving data from these RESTful APIs, facilitating data exchange and communication between the frontend and backend.

#### - Post新增用戶, POST請求的路由處理<br />
For adding a new user via a POST request, handle the route.

    app.post('/users', async (req, res)
  
#### - Put更新用戶<br />
For updating a user, use a PUT request.
    
    app.put('/users/:id', async function (req, res) 

#### - delete刪除用戶 <br />
For deleting a user, handle the DELETE request.
    
    app.delete('/users/:id', async (req, res)

#### - Get個別別用戶<br />
For fetching an individual user, use a GET request for a specific user.
    
    app.get('/users/:id', async function (req, res) 

#### - Get全部用戶<br />
For fetching all users, use a GET request to retrieve the entire list of users.
    
    app.get('/users', async function (req, res) 
     
## AJAX fetch
fetch() 函式提供了發送網路請求的能力，可以完成類似於AJAX XMLHttpRequest (XHR) 的功能，<br />
相較於 XHR，fetch() 提供了更簡潔的 API，並支援 Promise 物件作為回傳，使其在處理非同步任務時更方便。

The fetch() function provides the ability to send network requests, performing functions similar to AJAX XMLHttpRequest (XHR). Compared to XHR, fetch() offers a more concise API and supports the use of Promise objects as returns, making it more convenient when handling asynchronous tasks.

EX:

    async addUser() {
      const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData)
        };
      
        await fetch('/users', requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('New user created:', data);
            this.errorText = JSON.stringify(data);
            alert('New user created:' + this.errorText);
          })
          .catch(error => {
            console.error('Error花:', error);
            this.errorText = 'Post Error花' + JSON.stringify(error);
            alert(this.errorText);
          });
    },

## RWD
/* 在螢幕寬度小於 767px 時使用以下 CSS 規則 */<br />
>@media screen and (max-width: 767px) <br />
      font-size: 0.8em;<br />
      background-color: #c1f6fa;

/* 在螢幕寬度小於 447px 時使用以下 CSS 規則 */<br />
>@media screen and (max-width: 447px) <br />
      font-size: 0.5em;<br />
      background-color: #fdf07b;
>
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/rwd0.gif)

## 實作講解 Practical demonstration
### - 首頁 Homepage
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/33.png)

### - 新增會員 Add Member
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/35.png)

### - 更新會員資料 Update Member Information
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/36.png)

### - 尋找各別單一會員 Search for Individual Member
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/37.png)

### - 尋找所有會員 Search for All Members
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/34.png)

### - 刪除會員 Delete Member
![](https://github.com/weitsung50110/MongoDB_Ajax_RESTfulAPI/blob/main/github_images/38.png)
