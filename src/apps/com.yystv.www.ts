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
      activityIds: [],
      rules: [
        {
          name: '35',
          key: 1,
          matches: [
            '@TextView <4 ViewGroup <2 ViewGroup <2 ViewGroup < ViewGroup < ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid="ksad_tk_view"]',
            '@ImageView < ViewGroup < ViewGroup <3 ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [vid="ksad_tk_view"]',
            '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
            '@ImageView[width=35][height=35]',
            '@ImageView[width=58][height=58]',
            '@ImageView[width=58][height=58]',
            '@ImageView[width=38][height=38]',
            '@ImageView[width=46][height=46]',
            '@ImageView[width=57][height=57]',
            '@ImageView[width=85][height=85]',
            '[vid="ksad_kwad_web_navi_close"]',
          ],
        },
      ],
    },
  ],
});
