/*
 * @FilePath     : \jest_demo\src\services\api.ts
 * @Date         : 2021-03-22 16:20:12
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  :
 */

import axios from "axios";

export const netConfig = async function(args?: any) {
  let path = `./config/net.json`;
  return axios.get(path);
};
