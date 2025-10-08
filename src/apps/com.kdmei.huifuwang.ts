import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kdmei.huifuwang',
  name: '一键书阁',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text$="跳过"]', '[text^="跳过"]'],
        },
      ],
    },
    {
      key: 2,
      name: '功能类-广告跳过',
      enable: true,
      rules: [
        'ImageView[desc$="关闭"]',
        'TextView[text="跳过"][text.length=2]',
        'ViewGroup[desc="top_close_button"]',
        'ImageView[vid="ad_close"]',
        'ImageView[vid*="close" || vid*="btn"]',
      ],
    },
    {
      key: 3,
      name: '功能类-章节最后的广告死吧',
      desc: '还是单独开一个解决每个章节最后的广告好了',
      enable: true,
      rules: [
        '@ImageView < FrameLayout <3 FrameLayout < LinearLayout < FrameLayout < FrameLayout < [vid="bannerContainer"]',
      ],
    },
  ],
});
