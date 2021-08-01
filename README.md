# react 项目搭建

我们一般使用 eslint 来验证代码风格， 使用 prettir 来格格式化代码，所以我们先安装这两个东西，然后两个东西结合，再一步结合 react 使用

```bash
yarn add eslint  --dev
# 然后执行 eslint init
```

"extends": "eslint:recommended" 表示继承了 eslint 推荐的规则，可以在 http://eslint.cn/docs/rules/ 页面查看，规则前面有一个绿色对勾的就是推荐的规则。

大概会安装下面这些包：

```diff
+ eslint-plugin-jsx-a11y@6.4.1 # 一些 jsx 的 rules 规范
+ eslint-config-airbnb@18.2.1 # 一套定义好的eslint的配置，后面会换成alloyTeam 团队的规范
+ eslint-plugin-react@7.24.0 # 使用 eslint-plugin-react 来支持 tsx 语法
+ eslint-plugin-import@2.23.4 # 在使用 import 的时候，一些 rules 规范
+ eslint-plugin-react-hooks@4.2.0 # 在使用 hooks 时候一些规范
+ @typescript-eslint/parser@4.28.5 # ESLint的解析器，用于解析ts，从而检查和规范ts代码
+ @typescript-eslint/eslint-plugin@4.28.5 # 这是一个ESLint插件，包含了各类定义好的检测ts代码的规范
+ eslint@7.32.0
```

## 替代上述方案

使用腾讯 [alloyteam 团队的 eslint-config-alloy 规范](https://github.com/AlloyTeam/eslint-config-alloy/blob/HEAD/README.zh-CN.md)

```bash
yarn add eslint-config-alloy --dev
```

stylelint

```bash
yarn add stylelint stylelint-scss stylelint-config-standard stylelint-config-recess-order --dev
```

## preitter

```bash
yarn add prettier  --dev
```

## 代码提交

```bash
yarn add lint-staged husky --dev
```

在 pacage.json 中添加

```json
"scripts":{
  // 每次 install 前检查 huskey 是否初始化钩子
  "prepare":"husky instll"
}
```

添加 husky 钩子

```bash
# 每次提交前执行pretty命令
npx husky add .husky/pre-commit "lint-staged"

#  对 git 提交信息拦截 yarn commitlint --edit $1
npx husky add .husky/commit-msg "yarn commitlint --edit $1"
```

## 自定义 webpack 配置

umi 和 craco 还有 react-app-rewired

[更骚的 create-react-app 开发环境配置 craco](https://segmentfault.com/a/1190000038221692)

[create-react-app 优雅定制指南](https://zhuanlan.zhihu.com/p/96103181)
