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
          name: '点击免费领3代券',
          key: 0,
          actionDelay: 2000,
          matches: [
            '@TextView - LinearLayout > TextView[text~="今日还剩[1-9]次"]',
          ],
        },
        {
          name: '点击收下点券',
          key: 1,
          preKeys: [0],
          matches: ['@TextView[text="开心收下"]'],
        },
        {
          name: '玩游戏直接退出',
          key: 2,
          anyMatches: [
            '@ImageView < FrameLayout <4 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },

        {
          name: '放弃福利',
          key: 3,
          anyMatches: [
            '@TextView < FrameLayout <2 LinearLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@TextView[text="放弃福利" || text="继续看视频" || text="立即退出"]',
          ],
        },
        {
          name: '最终点击',
          key: 4,
          matches: [
            '@ImageView < FrameLayout < FrameLayout - LinearLayout >2 TextView[text="恭喜获得奖励"]',
            '@ImageView < FrameLayout < FrameLayout <2 LinearLayout <2 FrameLayout <4 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@ImageView < FrameLayout < FrameLayout <2 LinearLayout <2 FrameLayout <6 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@ImageView < FrameLayout < FrameLayout <3 FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
  ],
});
