const mongoose = require('mongoose');

// 定義模型 Schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  email: String,
  age: Number
}, { collection: 'my_custom_users' }); // 在這裡指定集合名稱為 my_custom_users collection;

// 創建 User 模型
const User = mongoose.model('User', userSchema); 
/*創建 User 模型：透過 mongoose.model('User', userSchema) 來創建名為 User 的 Mongoose 模型。
使用 mongoose.model 方法將定義的模式 userSchema 轉換為模型 User */

module.exports = User;
/*匯出模型：module.exports = User;
將創建的 User 模型透過 module.exports 導出，使其可以在其他文件中引入和使用。 */
