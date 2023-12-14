//Post新增用戶
document.getElementById('Posting_userForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // 阻止表單默認提交行為

    const formData = {
        // 獲取表單中的數據並添加到 FormData 對象中
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    };
    console.log('requestOptions:',requestOptions);
    console.log('formData:',formData);
    
    await fetch('/users', requestOptions)
        .then((response) => {
                return response.json();
        })
        .then((response) => {
            console.log('New user created:',response);
            document.querySelector("#error_txt").textContent = JSON.stringify(response);
            alert('New user created:'+document.querySelector("#error_txt").textContent)
        })
        .catch((error) => {
                console.log(`Error花: ${error}`);
                document.querySelector("#error_txt").textContent = "Post Error花"+JSON.stringify(error);
                alert(document.querySelector("#error_txt").textContent)
            })
        }
);

//Put更新用戶
document.getElementById('submit2').addEventListener('click', async function(event) {
    event.preventDefault(); // 阻止表單默認提交行為
    const updateUser2 = {
        //userid2v: document.getElementById('userid2').value,
        username2v: document.getElementById('username2').value,
        age2v: document.getElementById('age2').value,
        email2v: document.getElementById('email2').value
    }
    const requestOptions2 = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser2)
    };
    console.log('requestOptions2:',requestOptions2);
    
    await fetch(`/users/${document.getElementById('userid2').value}`,requestOptions2)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log('New updateUser created:',response);
            document.querySelector("#error_txt").textContent = JSON.stringify(response);
            alert(document.querySelector("#error_txt").textContent)
        })
        .catch((error) => {
            console.log(`Error花: ${error}`);
            document.querySelector("#error_txt").textContent = "Put你ID連輸入都沒輸入"+JSON.stringify(error);
            alert(document.querySelector("#error_txt").textContent)
        })
    }
);

//delete刪除用戶
document.getElementById('delete').addEventListener('click', async function(event) {
    event.preventDefault(); // 阻止表單默認提交行為
    const deleteUserOptions = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        }
    };
    await fetch(`/users/${document.getElementById('delete_id').value}`,deleteUserOptions)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log('New delete created:',response);
            document.querySelector("#error_txt").textContent = JSON.stringify(response);
            alert(document.querySelector("#error_txt").textContent)
        })
        .catch((error) => {
            console.log(`Error花: ${error}`);
            document.querySelector("#error_txt").textContent = "delete你ID連輸入都沒輸入"+JSON.stringify(error);
            alert(document.querySelector("#error_txt").textContent)
        })
})

//Get個別別用戶
document.getElementById('find_one_btn').addEventListener('click', async function(event) {
    event.preventDefault(); // 阻止表單默認提交行為
    let userText = ''; // 用于保存所有用户信息的字符串
    await fetch(`/users/${document.getElementById('find_one_id').value}`)
        .then((response) => {
                return response.json();
        })
        .then((response) => {
            console.log('New find_one created:',response);

            // response 是包含多个用户对象的数组，您需要遍历数组来获取每个用户的 属性
            response.forEach((res_user) => {
                userText += `_id: ${res_user._id}; username: ${res_user.username}; email: ${res_user.email}; age: ${res_user.age} <br>`;
                // 将每个用户对象的属性添加到字符串中，使用换行符或其他分隔符分隔每个用户信息
                document.querySelector("#find_OneOrAll_txt").innerHTML = userText;
                // 将包含所有用户信息的字符串设置为 textContent
            });
        })
        .catch((error) => {
                console.log(`Error花: ${error}`);
        })
})

//Get全部用戶
//FindUser(); //連進function
document.getElementById('find_all_btn').addEventListener('click', FindUser)
async function FindUser(event) {
    event.preventDefault(); // 阻止表單默認提交行為
    let userText = ''; // 用于保存所有用户信息的字符串
    await fetch('/users')
        .then((response) => {
                return response.json();
        })
        .then((response) => {
            console.log('New Find created:',response);
            // response 是包含多个用户对象的数组，您需要遍历数组来获取每个用户的 属性
            response.forEach((res_user) => {
                userText += `_id: ${res_user._id}; username: ${res_user.username}; email: ${res_user.email}; age: ${res_user.age} <br>`;
                // 将每个用户对象的属性添加到字符串中，使用换行符或其他分隔符分隔每个用户信息
                document.querySelector("#find_OneOrAll_txt").innerHTML = userText;
                // 将包含所有用户信息的字符串设置为 textContent
            });
        })
        .catch((error) => {
                console.log(`Error花: ${error}`);
        })
}