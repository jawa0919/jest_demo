/*
 * @FilePath     : \jest_demo\src\services\__mocks__\api.ts
 * @Date         : 2021-03-22 16:20:12
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  :
 */

export const netConfig = async function() {
  return {
    status: 200,
    data: {
      name: "高安屯小程序内外网api",
      scheme: "https",
      host: "__mocks__.api.netConfig",
      port: "80",
    },
  };
};

// 调用情况
// Matcher error: received value must be a mock or spy function
// 只有 mock/spy 函数是才可获取调用情况
// export const netConfig = async function() {
//   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//   const myMock = jest.fn();
//   myMock.mockReturnValue({
//     status: 200,
//     data: {
//       name: "高安屯小程序内外网api",
//       scheme: "https",
//       host: "__mocks__.api.netConfigJestMock",
//       port: "80",
//     },
//   });
//   return myMock;
// };
