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
        // matches: [
        //   '@ImageView[width=35][height=35]',
        //   '@ImageView[width=58][height=58]',
        // ],
        // activityIds: [
        //     'com.csdy.yedw.ui.book.read.ReadBookActivity'
        // ]
      ],
    },
  ],
});
