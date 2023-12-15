const app = Vue.createApp({
    data() {
      return {
        checked: [false, false, false, false], // 包含4个boolin的数组，初始值均为 true
        value1_checked: false,
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
    }
})
app.mount('.member_system');

/*
checked: [true, true]。在這個陣列中，checked[0] 和 checked[1] 分別代表陣列中的第一個元素和第二個元素。
這裡的 checked[0] 對應陣列中的第一個元素，即 true，而 checked[1] 對應陣列中的第
二個元素，同樣是 true。
*/
