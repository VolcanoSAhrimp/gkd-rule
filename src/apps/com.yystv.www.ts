import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yystv.www',
  name: '旷野书屋',
  groups: [
    {
      name: '全屏广告-广告跳过',
      key: 1,
      desc: '点击叉叉',
      enable: true,
      fastQuery: true,
      activityIds: [
        'com.beizi.ad.internal.activity.BeiZiInterstitialActivity',
        'com.csdy.yedw.ui.book.read.ReadBookActivity',
      ],
      rules: [
        {
          name: '35',
          key: 1,
          matches: ['@ImageView[width=35][height=35]'],
        },
        {
          name: '58',
          key: 2,
          matches: ['@ImageView[width=58][height=58]'],
        },
        {
          name: '38',
          key: 3,
          matches: ['@ImageView[width=38][height=38]'],
        },
        {
          name: '46',
          key: 4,
          matches: ['@ImageView[width=46][height=46]'],
        },
        {
          name: '57',
          key: 5,
          matches: ['@ImageView[width=57][height=57]'],
        },
        {
          name: '85',
          key: 6,
          matches: ['@ImageView[width=85][height=85]'],
        },
      ],
    },
  ],
});
