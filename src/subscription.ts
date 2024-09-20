import { defineGkdSubscription } from '@gkd-kit/define';
import categories from './categories';
import globalGroups from './globalGroups';
import { batchImportApps } from '@gkd-kit/tools';
import { RawApp, RawAppGroup } from '@gkd-kit/api';
import { OPEN_AD_ORDER } from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (!g.name.startsWith('开屏广告')) {
      g.enable = false;
    } else {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});
// 订阅详情
export default defineGkdSubscription({
  id: 557,
  name: '火山虾的GKD订阅',
  version: 0,
  author: 'author',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/gkd-kit/subscription-template',
  categories,
  globalGroups,
  // apps: await batchImportApps(`${import.meta.dirname}/apps`),
  apps: rawApps,
});
// build 编译相关的修改，例如发布版本，对项目构建或者依赖的改动
// chore 其他的修改，比如改变构建流程，或者增加依赖库，工具等等
// ci 持续集成修改
// docs 文档修改
// feat 新特性，新功能
// fix 修bug
// perf 优化相关
// refactor 代码重构
// revert 回到上一个版本
// style 代码格式修改
// test 测试
