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
          matches: [
            '@TextView <2 LinearLayout <2 [vid="top_menu_login_layout"]',
            '@TextView[text="签到"]',
          ],
        },
        {
          name: '点击日期',
          key: 1,
          preKeys: [0],
          matches: ['LinearLayout > TextView[text="点击签到"]'],
        },
        {
          name: '返回上一个页面',
          key: 2,
          preKeys: [1],
          matches: ['[text=""]'],
        },
      ],
    },
    {
      name: '功能类-自动领取任务',
      key: 1,
      desc: '点击领取任务',
      enable: true,
      activityIds: ['com.sf.ui.my.welfare.WelfareActivity'],
      actionCd: 500,
      actionMaximum: 8,
      rules: [
        {
          name: '领取任务',
          key: 0,
          matches: ['@TextView[text="领取任务"]'],
        },
      ],
    },
  ],
});
