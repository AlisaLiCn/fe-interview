
### 将数字转换为千分位分隔形式
参考题解：
```javascript
const reg = /(\d)(?=(?:\d{3})+$)/g

console.log('12345678'.replace(reg, '$1,')) // 12,345,678
console.log('666'.replace(reg, '$1,')) // 666
```

参考资料：
- [正则表达式 - 断言](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions#%E5%85%B6%E4%BB%96%E6%96%AD%E8%A8%80)
- [字符串替换](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E4%BD%BF%E7%94%A8%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0)

### 实现一个获取URL中参数的queryString方法
参考题解：
```javascript
function getQueryString(url, key) {
  const regexp = new RegExp('(?:\\?|&)' + key + '=([^&=#]*)(?:&|#|$)')
  const result = url.match(regexp)

  if(!result) return ''

  return result[1] ? decodeURIComponent(result[1]) : ''
}

getQueryString('https://example.com/?name=111&key=222', 'name') // 111
getQueryString('https://example.com/?name=111&key=222#hash', 'key') // 222
```

### 写一个获取颜色的正则表达式
参考题解：
```javascript
var regexp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

regexp.test('#333') // true
regexp.test('#d5d5d5') // true
```

参考资料：
- [any-rule](https://github.com/any86/any-rule#16%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2)
