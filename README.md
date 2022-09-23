# 簡單心得

## 建立 tsconfig
[tsconfig 說明](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)
```
tsc --init
```

## tsc compiler 出現錯誤

[TypeScript 新手指南](https://willh.gitbook.io/typescript-tutorial/) 看這個教學，在使用 tsc 這個名命出現以下錯誤

```
tsc hello.ts
```

```
PS D:\WorkDocument\practice\TypescriptBeginning> tsc app.ts
error TS6053: File 'app.ts' not found.
  The file is in the program because:
    Root file specified for compilation

```

### 解決方法
1. 新增一個資料夾，並將要 compiler 的檔案放到該資料夾內
2. command line 切換到該資料夾
3. 執行 tsc app.ts 即可



## 使用 interface 定義有回傳值的 function 型別

* 定義 function getProduct 的型別
```
interface Product{
    id: number,
    name: string,
    price: number
};
```

* 指定 getProduct 的型別
```
function getProduct(id) : Product{
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5
  }
}
```