import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.copymanga.app',
  name: '拷貝漫畫',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      enable: true,
      activityIds: [
        'com.copymanga.app.MainActivity',
        'com.reaper.flutter.reaper_flutter_plugin.activity.ReaperSplashActivity',
      ],
      actionDelay: 400,
      rules: [
        {
          key: 0,
          name: '快手广告-1',
          activityIds: 'com.copymanga.app.MainActivity',
          matches: [
            'ViewGroup > [text="广告"]',
            'ViewGroup[childCount=3] > TextView + TextView + ImageView[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13259085',
        },
        {
          key: 1,
          name: '快手广告-2',
          activityIds: [
            'com.copymanga.app.MainActivity',
            'com.kwad.components.ad.interstitial',
          ],
          matches:
            '[text="广告"] <2 ViewGroup -(2,3) ViewGroup > ViewGroup[clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625486',
            'https://i.gkd.li/i/12504486',
            'https://i.gkd.li/i/12504488',
            'https://i.gkd.li/i/13344156',
          ],
        },
        {
          key: 2,
          name: '快手广告-3',
          activityIds: 'com.copymanga.app.MainActivity',
          matches: [
            'ViewGroup > [text="广告"]',
            '@ViewGroup[clickable=true] > [text="跳过"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13696292',
        },
        {
          key: 3,
          name: '腾讯广告-1',
          activityIds: 'com.copymanga.app.MainActivity',
          matches:
            'ImageView -(1,2) FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/12504520',
            'https://i.gkd.li/i/12661019',
            'https://i.gkd.li/i/13193877',
            'https://i.gkd.li/i/12892156',
            'https://i.gkd.li/i/12504501',
            'https://i.gkd.li/i/13259082',
          ],
        },
        {
          key: 4,
          name: '腾讯广告-2',
          matches:
            'ImageView <2 FrameLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/13246786',
        },
        {
          key: 5,
          name: '腾讯广告-3',
          matches:
            '[id="com.copymanga.app:id/interact_ad_root"] > [id="com.copymanga.app:id/iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13521801',
            'https://i.gkd.li/i/13332719',
          ],
        },
        {
          key: 6,
          name: '腾讯广告-4',
          matches:
            'ImageView - ImageView - FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13233178',
        },
        {
          key: 7,
          name: '字节广告-1',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: [
            '[desc^="logoad"] > [text="广告"]',
            '[desc^="webview-close"] > View[clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13372542',
        },
        {
          key: 8,
          name: '字节广告-2',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -2 @View - Image',
          snapshotUrls: 'https://i.gkd.li/i/12925052',
        },
        {
          key: 9,
          name: '字节广告-3',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] -4 @View < View[childCount=7]',
          snapshotUrls: 'https://i.gkd.li/i/12925095',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      enable: true,
      rules: [
        {
          key: 0,
          name: '快手广告-1',
          activityIds: 'com.copymanga.app.MainActivity',
          matches:
            '[id^="com.copymanga.app:id/ad_flag_source"] - * > [id="com.copymanga.app:id/close"]',
          snapshotUrls: 'https://i.gkd.li/i/12504525',
        },
        {
          key: 1,
          name: '快手广告-2',
          activityIds: 'com.copymanga.app.MainActivity',
          fastQuery: true,
          matches:
            '[id="com.copymanga.app:id/close_m_image_left_text_right_no_compliance"]',
          snapshotUrls: 'https://i.gkd.li/i/13761154',
        },
        {
          key: 2,
          name: '腾讯广告',
          activityIds: 'com.copymanga.app.MainActivity',
          matches:
            'FrameLayout[childCount=3] > LinearLayout + FrameLayout[childCount=1] > ImageView[id=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/12851671',
            'https://i.gkd.li/i/12909005',
          ],
        },
        {
          key: 3,
          name: '其它游戏广告',
          activityIds: 'com.copymanga.app.MainActivity',
          matches: '[desc="关闭" || width=43 && height=43]',
        },
        {
          key: 4,
          name: '游戏广告',
          activityIds: 'com.copymanga.app.MainActivity',
          matches: '[desc="关闭" || width=43 && height=43]',
        },
        {
          key: 5,
          name: '百度广告',
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches: '@ImageView - RelativeLayout >2 [text="反馈"] ',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-关闭赞助提示',
      enable: true,
      activityIds: 'com.copymanga.app.MainActivity',
      rules: [
        {
          matches: '@[desc="就这样吧"] + [desc^="赞助免广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12851627',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动确认线路',
      enable: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="进入拷贝漫画"]',
          snapshotUrls: 'https://i.gkd.li/i/13233179',
        },
      ],
    },
    {
      key: 5,
      name: '权限提示-通知权限',
      matchTime: 30000,
      enable: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[desc="系统提示"] +n [desc="确定"]',
          exampleUrls:
            'https://m.gkd.li/57941037/7577dafa-9e3e-44de-bd20-c52f8a30e9c6',
          snapshotUrls: 'https://i.gkd.li/i/13233180',
        },
      ],
    },
    {
      name: '全屏广告-广告跳过',
      key: 6,
      desc: '58,41',
      enable: true,
      rules: [
        {
          anyMatches: [
            '@ImageView[width=58][height=58]',
            '@Image[width=41]',
            '@ImageView[width=69][height=69]',
            '@ImageView[desc="关闭"][vid="ad_close"]',
          ],
        },
        {
          name: '| 跳过',
          key: 0,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: ['@TextView[text="| 跳过"]'],
        },
      ],
    },
    {
      name: '局部广告-弹出广告关闭',
      key: 7,
      desc: '点击中心广告-无法关闭',
      enable: true,
      activityIds: [
        'com.yifan.yf_ads.activity.YFSplashActivity',
        'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
      ],
      rules: [
        {
          name: '点击中心广告',
          key: 0,
          matches: [
            'ViewGroup[desc*="close" || desc*="btn"]',
            'ViewGroup[desc*="skip" || desc*="btn"]',
          ],
        },
      ],
    },
  ],
});
