import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点阅读',
  groups: [
    {
      name: '关闭倒计时广告',
      key: 0,
      desc: '左上角叉叉',
      rules: [
        {
          matches: ['@ImageView[index=1][width=86]'],
          activityIds: ['com.qq.e.tg.RewardvideoPortraitADActivity'],
        },
      ],
    },
    {
      name: '功能类-漫画券使用',
      key: 4,
      desc: '点击使用-确认',
      rules: [
        {
          name: '点击漫画券使用',
          key: 0,
          matches: ['[text="使用漫画券订阅本话"]'],
          exampleUrls: [
            'https://m.gkd.li/57941037/6654679e-58a9-4d6c-85a3-11bd2f82c15e',
          ],
        },
        {
          name: '确认漫画券使用',
          key: 1,
          preKeys: [0],
          matches: ['[text="使用"]'],
          exampleUrls: [
            'https://m.gkd.li/57941037/6654679e-58a9-4d6c-85a3-11bd2f82c15e',
          ],
        },
      ],
    },
    {
      name: '关闭广告',
      key: 6,
      desc: '观看n秒立即关闭广告',
      rules: [
        {
          matches: [
            '@TextView + TextView[text~="已观看视频\\\\d{2}秒，可获得奖励"]',
          ],
          quickFind: true,
          activityIds: ['com.qq.e.tg.RewardvideoPortraitADActivity'],
        },
      ],
    },
    {
      name: '红包-马上抢',
      key: 7,
      desc: '红包-马上抢',
      actionDelay: 1000,
      rules: [
        {
          matches: ['@TextView[text="马上抢"]'],
          quickFind: true,
          activityIds: ['com.qidian.QDReader.ui.activity.QDReaderActivity'],
        },
      ],
    },
    {
      name: '红包奖励领取',
      key: 8,
      desc: '红包奖励领取',
      rules: [
        {
          matches: ['@TextView[text="立即领取"]'],
          quickFind: true,
          activityIds: ['com.qidian.QDReader.ui.activity.QDReaderActivity'],
        },
      ],
    },
    {
      name: '自动点击阅读积分',
      key: 9,
      desc: '自动点击阅读积分',
      rules: [
        {
          matches: ['@TextView[text~="\\\\d{1,3}"][height=63]'],
          activityIds: [
            'com.qidian.QDReader.ui.activity.ReadTimeMainPageActivity',
            'com.qidian.QDReader.ui.activity.MainGroupActivity',
          ],
        },
      ],
    },
    {
      name: '首页-抽奖-自动抽奖',
      key: 10,
      desc: '首页抽奖自动抽奖',
      enable: true,
      activityIds: [
        'com.qidian.QDReader.ui.activity.QDBrowserActivity',
        'com.qidian.QDReader.ui.activity.SplashActivity',
      ],
      rules: [
        {
          name: '点击签到',
          key: 0,
          matches: [
            '@View[desc="点击抽奖+1"]',
            '[vid="webViewContainer"] >7 View[desc="看视频，得抽奖机会"]',
          ],
        },
        {
          name: '关闭签到后的弹窗',
          key: 1,
          matches: ['@View[desc="抽 奖"]'],
          activityIds: ['com.qidian.QDReader.ui.activity.QDBrowserActivity'],
        },
        {
          name: '返回上一个页面',
          key: 2,
          matches: ['@View[desc="看视频抽奖喜+1"]'],
        },
      ],
    },
    {
      name: '福利中心-自动看视频',
      key: 11,
      desc: '自动看视频',
      enable: true,
      actionDelay: 1000,
      forcedTime: 2000,
      activityIds: [
        'com.qidian.QDReader.ui.activity.MainGroupActivity',
        'com.qidian.QDReader.ui.activity.QDBrowserActivity',
      ],
      rules: [
        {
          name: '点击看视频领福利',
          key: 0,
          matches: ['@Button[text="看视频领福利"]'],
          forcedTime: 2000,
        },
        {
          name: '点击看视频',
          key: 1,
          matches: ['@View[desc="看视频"]'],
        },
        {
          name: '点击福利中心的宝箱',
          key: 2,
          matches: ['@View[desc="看视频开宝箱"]'],
        },
      ],
    },
  ],
});
