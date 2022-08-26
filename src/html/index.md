

### 如何提高web可访问性
参考题解：  

提高web可访问性是一种能让更多的人使用我们的网站的做法，比如：让有视觉或听觉障碍的人群、移动设备用户、处于低速网络环境的人群也能正常使用网站。

web开发人员在开发的初期，就需要考虑可访问性相关的内容，以避免在后期难以改善。

提升可访问性的一些措施：
- 书写语义化的HTML结构：例如：正确使用标题、段落等元素来构建文本内容；使用HTML5的语义元素进行页面布局(如`<nav>` `<footer>`等)；
- 保证键盘的可访问性：表单元素、按钮、超链接等本身能被键盘访问，如果为了更好的UI效果而使用其他元素来代替，可以利用tabindex属性来重新建立键盘的可访问性；
- 为非语义化元素添加WAI-ARIA属性，来提供额外的语义化和可访问性，例如：role="button"等；
- 使用工具进行测试：例如：使用Mac系统自带的旁白功能，可以进行屏幕阅读效果的测试；使用在线工具或自动化工具对网站进行检测。

参考资料：
- [MDN - 无障碍](https://developer.mozilla.org/zh-CN/docs/Web/Accessibility)