/**
 * eslint 的主要配置文件，下面分别详述各项功能
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  // 继承哪些规范，这里我们选择继承alloyTeam 的
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],

  // 使用哪个解析器
  parser: '@typescript-eslint/parser',

  // 指定 ESLint 可以解析 JSX 语法
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {},
};
