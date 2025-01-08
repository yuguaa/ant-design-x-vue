
# XStream 流

转换可读数据流。

## 何时使用

* 将 SSE 协议的 `ReadableStream` 转换为 `Record`
* 将任何协议的 `ReadableStream` 解码并读取

## 使用说明

常见的 `ReadableStream` 实例，如 `await fetch(...).body` 使用示例:

```js
import { XStream } from '@ant-design/x';

async function request() {
  const response = await fetch();
  // .....

  for await (const chunk of XStream({
    readableStream: response.body,
  })) {
    console.log(chunk);
  }
}
```

## 代码演示

### 默认协议 - SSE

> SSE - https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events

:::demo XStream 默认的 `transformStream` 是用于 SSE 协议的流转换器。`readableStream` 接收一个 `new ReadableStream(...)` 实例，常见的如 `await fetch(...).body`

x-stream/default-protocol

:::
