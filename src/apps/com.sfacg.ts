import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sfacg',
  name: '菠萝包轻小说',
  groups: [
    {
      name: '功能类-自动签到',
      key: 0,
      desc: '点击签到-关闭弹窗-返回',
      enable: true,
      forcedTime: 2000,
      activityIds: ['com.sf.ui.main.MainActivity'],
      rules: [
        {
          name: '点击签到',
          key: 0,
          matches: ['[vid="sign_container"] > TextView[text="签到"]'],
          snapshotUrls: ['https://i.gkd.li/snapshot/1719278408254'],
          exampleUrls: [
            'https://m.gkd.li/57941037/6654679e-58a9-4d6c-85a3-11bd2f82c15e',
          ],
        },
        {
          name: '点击日期',
          key: 1,
          preKeys: [0],
          matches: ['LinearLayout > TextView[text="点击签到"]'],
          snapshotUrls: ['https://i.gkd.li/snapshot/1719278418977'],
          exampleUrls: [
            'https://m.gkd.li/57941037/b02eca70-f7d3-4169-99d6-9906c534392a',
          ],
        },
        {
          name: '返回上一个页面',
          key: 2,
          preKeys: [1],
          matches: ['[text=""]'],
          snapshotUrls: ['https://i.gkd.li/snapshot/1719279052475'],
          exampleUrls: [
            'https://m.gkd.li/57941037/c232ba4c-d50e-4887-85ab-91739928119e',
          ],
        },
      ],
    },
  ],
});
