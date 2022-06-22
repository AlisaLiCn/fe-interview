# fe-interview
A collection of Front-End interview questions and study materials


* [JavaScript](#javascript)
    * [正则表达式：将数字转换为千分位分隔形式](#正则表达式将数字转换为千分位分隔形式)
    * [正则表达式：实现一个queryString方法，来获取URL中的参数](#正则表达式实现一个querystring方法来获取url中的参数)
    * [正则表达式：写一个获取颜色的正则表达式](#正则表达式写一个获取颜色的正则表达式)

## JavaScript
### 正则表达式：将数字转换为千分位分隔形式

### 正则表达式：实现一个queryString方法，来获取URL中的参数

### 正则表达式：写一个获取颜色的正则表达式

参考答案：
```javascript
var regexp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

regexp.test('#333') // true
regexp.test('#d5d5d5') // true
```

参考资料：
- [any-rule](https://github.com/any86/any-rule#16%E8%BF%9B%E5%88%B6%E9%A2%9C%E8%89%B2)
