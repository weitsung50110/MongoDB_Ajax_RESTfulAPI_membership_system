const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user_shchema'); // 假設已經建立了User模型

// 連接至 MongoDB
mongoose.connect('mongodb://localhost:27017/my_database')
  .then(() => {
    console.log('成功連接至 MongoDB');
  })
  .catch((err) => {
    console.error('連接失敗:', err);
  });

// 設置靜態資源目錄（假設HTML檔案存放在 public 目錄下）
const path = require("path")
const static_path = path.join(__dirname, "public") //變成絕對路徑 D:\qqq\public，nodejs使用絕對路徑較安全可靠，在 Node 中使用相對路徑進行檔案讀取是很危險的, 建議一律都透過絕對路徑的方式來處理
app.use(express.static(static_path)) 
//app.use(express.static('.'));
app.use(express.urlencoded({ extended: true })); // 處理 URL 編碼的資料
app.use(express.json()); //這個必須存在

//Post新增用戶, POST請求的路由處理
app.post('/users', async (req, res) => {
    var newUser = {
        username: req.body.username,
        email: req.body.email,
        age: req.body.age,}
      
    console.log("newUser",newUser);
    await User.create(newUser)
    .then(createdUser => {
        console.log(createdUser);
        res.status(201).json(createdUser); // 返回從資料庫返回的新建用戶資料
    })
    .catch (error => {
        res.status(500).json({ message: "qqq POST 錯誤" });
    })    
});

//Put更新用戶
app.put('/users/:id', async function (req, res) {
    await User.findOneAndUpdate(
        { 
            "_id": req.params.id, //req.params.id 的值，因為它是在路由中 :id 的位置提供的值。
        }, // 條件，選擇要更新的文檔 
        { $set: { 
            "username": req.body.username2v,
            "age": req.body.age2v, // 更新年齡
            "email": req.body.email2v // 更新email
        }}, 
        { new: true } // 選項，返回更新後的文檔
    )
    .then(updatedUser => {
        // ...處理更新後的用戶
        console.log('更新後的用戶：', updatedUser);
        res.status(201).json(updatedUser);
    })
    .catch(error => {
        console.error('更新用戶時出錯：', error);
        res.status(500).json({ message: "qqq put更新 ID出錯ㄌ" ,id: req.params.id});
    });
 })

//delete刪除用戶
app.delete('/users/:id', async (req, res) => {
    await User.deleteOne({ _id: req.params.id })
    .then(delete_user => {
        console.log("delete: "+JSON.stringify(delete_user),"delete_ID: "+req.params.id);
        res.status(201).json(delete_user); // 返回從資料庫返回的新建用戶資料
    })
    .catch (error => {
        res.status(500).json({ message: "Delete qqq 沒有這個ID啦" });
    })    
});

//Get個別別用戶
app.get('/users/:id', async function (req, res) {
    await User.find({"_id": req.params.id})
    .then(FindUser => {
        console.log('用戶：', FindUser);
        res.status(201).json(FindUser);
    }) 
    .catch (error => {
        console.error('更新用戶時出錯：', error);
        res.status(500).json({ message: "qqq Get個別 沒有這個用戶" });
    })
})

 //Get全部用戶
 app.get('/users', async function (req, res) {
    await User.find({})
    .then(FindUser => {
        console.log('用戶列表：', FindUser);
        res.status(201).json(FindUser);
    }) 
    .catch (error => {
        console.error('更新用戶時出錯：', error);
        res.status(500).json({ message: "qqq Get全部 出錯了" });
    })
})

// 監聽端口
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Express 伺服器已啟動，監聽在端口 ${PORT}`);
});
