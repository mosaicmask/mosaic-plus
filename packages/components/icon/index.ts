/*
 * @Author: jing.chen
 * @Date: 2021-10-28 19:41:31
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-28 20:39:12
 * @Description: 入口
 */
import Icon from "./src/icon.vue";
import { withInstall } from "@mosaic-plus/utils/with-install";
const MIcon = withInstall(Icon);
export {
  MIcon
}
export default MIcon;