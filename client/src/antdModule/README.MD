# 注意
**在添加新模块时，需要在index根文件中添加相应的引用方法，可模仿已有的**

# antdModule 使用 (在兼容IE8的基础上，antd中方法有些无法使用，这个模块是将antd中的模块单独copy出来的)
1. Anchor模块 
    ``` 
    import { Anchor } from 'antdModule/index.js'; // 引入使用的模块
    import 'antdModule/Anchor/style/css.js' // Anchor模块的样式
    const { Link } = Anchor; // 此与antd的使用相同
    ```