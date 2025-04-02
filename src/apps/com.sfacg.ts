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
      name: '功能类-刷点券5次',
      key: 1,
      desc: '点击领取任务',
      enable: true,
      activityIds: [
        'com.sf.ui.main.MainActivity',
        'com.qq.e.ads.PortraitADActivity',
      ],
      rules: [
        {
          name: '免费领3代券',
          key: 0,
          actionDelay: 500,
          matches: ['[vid="sign_in_ad_goto"]'],
        },

        {
          name: '放弃福利',
          key: 1,
          anyMatches: [
            '@TextView < FrameLayout <2 LinearLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@TextView[text="放弃福利"]',
            '@ImageView < FrameLayout < FrameLayout <3 FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@ImageView < FrameLayout <2 FrameLayout < FrameLayout <2 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          name: '继续看视频',
          key: 2,
          anyMatches: [
            '@TextView <2 LinearLayout <6 FrameLayout <2 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@TextView[text="继续看视频"]',
            '@FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
            'TextView[text="关闭广告 "]',
          ],
        },
        {
          name: '最终点击',
          key: 3,
          matches: [
            '@FrameLayout < FrameLayout <2 LinearLayout <2 FrameLayout <3 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
  ],
});
