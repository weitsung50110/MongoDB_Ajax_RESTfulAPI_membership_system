const app = Vue.createApp({
    data() {
      return {
        checked: [false, false, false, false], // 包含4个boolin的数组，初始值均为 true
        value1_checked: true,
        errorText: '',
        userText: '',

        formData: {
            username: '',
            email: '',
            age: '',
        },

        formData2v: {
            userid2v: '',
            username2v: '',
            email2v: '',
            age2v: ''
        },

        deleteId: '',
        findOneId: ''
      };
    },
    methods: {
        checked_toggle (index) {
            this.checked[index] = !this.checked[index]; // 切换相应表单的显示状态
        },
        value1_toggle () {
            this.value1_checked = !this.value1_checked; // 切换相应表单的显示状态
            if (this.value1_checked===true){
                document.querySelector("#find_OneOrAll_toggle").textContent = "Finding close";
            }else{
                document.querySelector("#find_OneOrAll_toggle").textContent = "Finding open";
            }
        },
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
        async updateUser() {
            let requestOptions2 = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.formData2v)
            };
            
            await fetch(`/users/${this.formData2v.userid2v}`, requestOptions2)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('New updateUser created:', data);
                    this.errorText = JSON.stringify(data);
                    alert(this.errorText);
                })
                .catch(error => {
                    console.error('Error花:', error);
                    this.errorText = 'Put你ID連輸入都沒輸入' + JSON.stringify(error);
                    alert(this.errorText);
                });
        },
        async deleteUser() {
            const deleteUserOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            };
        
            await fetch(`/users/${this.deleteId}`, deleteUserOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('New delete created:', data);
                    this.errorText = JSON.stringify(data);
                    alert(this.errorText);
                })
                .catch(error => {
                    console.error('Error花:', error);
                    this.errorText = 'delete你ID連輸入都沒輸入' + JSON.stringify(error);
                    alert(this.errorText);
                });
        },
        async findOneUser() {
            await fetch(`/users/${this.findOneId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('New find_one created:', data);
                let userText = '';
                data.forEach((res_user) => {
                    userText += `_id: ${res_user._id}; username: ${res_user.username}; email: ${res_user.email}; age: ${res_user.age} </br>`;
                });
                this.userText = userText;
            })
            .catch(error => {
                console.error('Error花:', error);
            });
        },
        async findAllUsers() {
            await fetch('/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('New Find created:', data);
                let userText = '';
                data.forEach((res_user) => {
                    userText += `_id: ${res_user._id}; username: ${res_user.username}; email: ${res_user.email}; age: ${res_user.age} </br>`;
                });
                this.userText = userText;
            })
            .catch(error => {
                console.error('Error花:', error);
            });
    }}
})
app.mount('.member_system');

/*
checked: [true, true]。在這個陣列中，checked[0] 和 checked[1] 分別代表陣列中的第一個元素和第二個元素。
這裡的 checked[0] 對應陣列中的第一個元素，即 true，而 checked[1] 對應陣列中的第二個元素，同樣是 true。
*/