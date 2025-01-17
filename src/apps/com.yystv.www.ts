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
      activityIds: [],
      rules: [
        {
          anyMatches: [
            '@TextView <4 ViewGroup <2 ViewGroup <2 ViewGroup < ViewGroup < ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid="ksad_tk_view"]',
            '@ImageView < ViewGroup < ViewGroup <3 ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [vid="ksad_tk_view"]',
            '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
            '@TextView <4 ViewGroup <2 ViewGroup <4 ViewGroup <2 ViewGroup < ViewGroup < ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < FrameLayout < [vid="ksad_tk_view"]',
            '@ViewGroup < ViewGroup <3 ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [vid="ksad_tk_view"]',
            '@TextView[text="跳过"]',
            '[vid="ksad_kwad_web_navi_close"]',
            '[vid="ksad_web_exit_intercept_negative_btn"]',
            '[vid="anythink_myoffer_btn_close_id"]',
            '@ImageView < FrameLayout <2 FrameLayout <2 FrameLayout <2 FrameLayout <6 FrameLayout < FrameLayout < [id="android:id/content"]',
            '@ImageView < FrameLayout <3 FrameLayout < LinearLayout < FrameLayout < FrameLayout < [vid="bannerContainer"]',
            '@ImageView < FrameLayout <4 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@TextView <3 LinearLayout < FrameLayout < FrameLayout <4 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@ImageView < FrameLayout < FrameLayout <2 LinearLayout <2 FrameLayout <6 FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@TextView < LinearLayout <3 LinearLayout < [id="android:id/content"]',
            '@ImageView <2 FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
  ],
});
