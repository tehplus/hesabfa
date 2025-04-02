# エラーレポート

## 概要

- 生成日時: 2025-04-02T08:32:50.795Z
- 検出された問題の総数: 8

### 重要度別の内訳

| 重要度 | 件数 |
|--------|------|
| エラー | 8 |

## ファイル別の詳細

### src/theme/index.ts

| 行 | 重要度 | メッセージ | 該当コード |
|-----|----------|-------------|-------------|
| 218 | エラー | Type '["none", string, string, string, string, string, ...any[]]' is not assignable to type '["none", string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]'.   Target requires 25 element(s) but source may have fewer. |   shadows: [ |

### src/components/Sidebar/styles.ts

| 行 | 重要度 | メッセージ | 該当コード |
|-----|----------|-------------|-------------|
| 106 | エラー | Property 'subMenuBackground' does not exist on type '{ background: string; menuBackground: string; text: string; border: string; activeText: string; activeBackground: string; hoverBackground: string; iconColor: string; activeIconColor: string; boxShadow: string; }'. Did you mean 'menuBackground'? |   background: theme.palette.sidebar.subMenuBackground, |

### src/store/index.ts

| 行 | 重要度 | メッセージ | 該当コード |
|-----|----------|-------------|-------------|
| 10 | エラー | Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`. |     devTools: process.env.NODE_ENV !== 'production' |

### src/pages/Dashboard/index.tsx

| 行 | 重要度 | メッセージ | 該当コード |
|-----|----------|-------------|-------------|
| 11 | エラー | No overload matches this call.   Overload 1 of 2, '(props: { component: ElementType<any, keyof IntrinsicElements>; } & GridBaseProps & { sx?: SxProps<Theme> \| undefined; } & SystemProps<...> & Omit<...>): Element \| null', gave the following error.     Property 'component' is missing in type '{ children: Element; item: true; xs: number; md: number; lg: number; }' but required in type '{ component: ElementType<any, keyof IntrinsicElements>; }'.   Overload 2 of 2, '(props: DefaultComponentProps<GridTypeMap<{}, "div">>): Element \| null', gave the following error.     Type '{ children: Element; item: true; xs: number; md: number; lg: number; }' is not assignable to type 'IntrinsicAttributes & GridBaseProps & { sx?: SxProps<Theme> \| undefined; } & SystemProps<Theme> & Omit<...>'.       Property 'item' does not exist on type 'IntrinsicAttributes & GridBaseProps & { sx?: SxProps<Theme> \| undefined; } & SystemProps<Theme> & Omit<...>'. |         <Grid item xs={12} md={6} lg={3}> |

### src/components/Sidebar/index.tsx

| 行 | 重要度 | メッセージ | 該当コード |
|-----|----------|-------------|-------------|
| 206 | エラー | 'item.children' is possibly 'undefined'. |                         {item.children.map((child) => ( |

### src/components/Header/index.tsx

| 行 | 重要度 | メッセージ | 該当コード |
|-----|----------|-------------|-------------|
| 76 | エラー | Type '"ADMIN"' is not assignable to type 'UserRole'. |         role: 'ADMIN' |

### src/components/Layout/index.tsx

| 行 | 重要度 | メッセージ | 該当コード |
|-----|----------|-------------|-------------|
| 36 | エラー | 'transition' is specified more than once, so this usage will be overwritten. |     transition: theme.transitions.create(['margin', 'padding'], { |

### src/App.tsx

| 行 | 重要度 | メッセージ | 該当コード |
|-----|----------|-------------|-------------|
| 12 | エラー | Property 'children' is missing in type '{}' but required in type 'LayoutProps'. |       <Route path="/" element={<Layout />}> |

