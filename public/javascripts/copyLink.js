function copyLink() {
  // document.execCommand()方法，已淘汰
  // const copyText = document.querySelector('#copyText')
  // const selection = window.getSelection() // 表示當前使用者選取的範圍或光標當前位置，回傳selection物件
  // const range = document.createRange() // 創建一個新的range物件

  // range.selectNodeContents(copyText) // 設置copyText節點的內容範圍
  // selection.removeAllRanges() // 清空當前選取範圍
  // selection.addRange(range) // 將range加入
  // document.execCommand('copy') // 執行複製操作

  // Clipboard API方法，取代document.execCommand()方法
  const copyText = document.querySelector('#copyText').innerText
  navigator.clipboard.writeText(copyText) // 將copyText寫入剪貼簿
    .then(() => {
      console.log('內容已複製')
      alert('內容已複製')
    })
    .catch((error) => {
      console.log(error)
    })
}