<p style="text-align: center;"><img alt="ESLint logo" src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" width="60" /></p>

# <p style="text-align: center;">eslint-config-gbx</p>

![NPM](https://img.shields.io/npm/l/eslint-config-gbx?style=flat-square)
![npm](https://img.shields.io/npm/v/eslint-config-gbx?style=flat-square)
![npm](https://img.shields.io/npm/dw/eslint-config-gbx?style=flat-square)

## 👋 Introduction

I was tired of playing around with eslint configs with each project of mine, and the rules being inconsistent. Thus, eslint-config-gbx was born. I use it for all my projects to keep consistent linting rules.

## ⚒️ Installation and Usage

### Node

```bash
npm install --save-dev eslint eslint-config-prettier eslint-config-gbx eslint-plugin-import eslint-plugin-prettier eslint-plugin-simple-import-sort prettier
```

```json
"extends": ["gbx"]
```

### Node with Typescript

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-gbx eslint-plugin-import eslint-plugin-prettier eslint-plugin-simple-import-sort prettier typescript
```

```json
"extends": ["gbx", "gbx/typescript"]
```

### React

```bash
npm install --save-dev eslint eslint-config-prettier eslint-config-gbx eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort prettier
```

```json
"extends": ["gbx", "gbx/react"]
```

### React with Typescript

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-config-gbx eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort prettier typescript
```

```json
"extends": ["gbx", "gbx/react", "gbx/typescript"]
```

## 📖 Changelog

Wondering what we've shipped recently? Check out our [changelog](./CHANGELOG.md) for key highlights, performance improvements, new features, and notable bugfixes.

## 📝 License

Licensed under the [MIT License](./LICENSE).

## ❤️ Thanks

Thanks to [ESlint](https://eslint.org/) and [Prettier](https://prettier.io/) for making such great tools.
