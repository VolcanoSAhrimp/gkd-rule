import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '更新提示',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches:
            '[text$="新版本"] +2 * >2 [id="com.qidian.QDReader:id/cancel"]',
          snapshotUrls: ['https://i.gkd.li/i/12641026'],
        },
        {
          matches: '[id="com.qidian.QDReader:id/upgrade_dialog_close_btn"]',
          snapshotUrls: ['https://i.gkd.li/i/13116821'],
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式',
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules:
        '[id="com.qidian.QDReader:id/btnEnterTeen"] + [id="com.qidian.QDReader:id/btnCancel"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12640241',
        'https://i.gkd.li/i/12709168',
        'https://i.gkd.li/i/12905817',
      ],
    },
    {
      key: 3,
      name: '全屏广告-活动弹窗',
      activityIds: [
        'com.qidian.QDReader.ui.activity.MainGroupActivity',
        'com.tencent.mm.plugin.webview.ui.tools.SDKOAuthUI',
        'com.qidian.QDReader.framework.widget.dialog.judian',
        'com.qidian.QDReader.ui.activity.BookLastPageNewActivity',
      ],
      rules:
        '[id="com.qidian.QDReader:id/imgBKT"] + [id="com.qidian.QDReader:id/imgClose"]',
      snapshotUrls: [
        'https://i.gkd.li/i/12640195',
        'https://i.gkd.li/i/12640158',
        'https://i.gkd.li/i/12818198',
        'https://i.gkd.li/i/13469004', // .ui.activity.BookLastPageNewActivity
      ],
    },
    {
      key: 4,
      name: '权限提示-通知权限',
      desc: '点击顶部提醒左侧x按钮',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: '@[id="com.qidian.QDReader:id/ivClose"] + [text^="开启推送"]',
      snapshotUrls: 'https://i.gkd.li/i/12640242',
    },
    {
      key: 5,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          name: '书架页面右侧悬浮广告',
          activityIds: 'com.qidian.QDReader.ui.activity.MainGroupActivity',
          fastQuery: true,
          matches:
            '[id="com.qidian.QDReader:id/ivAd"] + [id="com.qidian.QDReader:id/ivAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/12717032',
        },
        {
          key: 1,
          name: '详情页右侧悬浮广告',
          activityIds: 'com.qidian.QDReader.ui.activity.QDBookDetailActivity',
          matches:
            '[id="com.qidian.QDReader:id/floatingView"] + [id="com.qidian.QDReader:id/ivAdClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13459031',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-起点中文网登录自动确认',
      desc: '自动点击"登录"',
      activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
      rules: '[id="scanLogin"]',
      snapshotUrls: 'https://i.gkd.li/i/12903081',
    },
    {
      key: 11,
      name: '局部广告-信息流广告',
      desc: '自动点击"x"',
      activityIds: 'com.qidian.QDReader.flutter.DailyReadingMainPageActivity',
      rules: 'View[desc="更多游戏"] - ImageView[clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/13406169',
    },
    {
      key: 12,
      name: '功能类-福利中心看视频后获得奖励',
      desc: '自动点击“我知道了”',
      activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
      actionMaximum: 1,
      resetMatch: 'activity',
      matchTime: 10000,
      rules: 'View[desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/13606901',
    },
    {
      key: 13,
      fastQuery: true,
      name: '全屏广告-红包弹窗',
      desc: '点击X',
      rules: [
        {
          activityIds:
            'com.qidian.QDReader.ui.activity.hongbao_square.NewHongBaoSquareActivity',
          matches:
            '[id="com.qidian.QDReader:id/rootView"] > [id="com.qidian.QDReader:id/btnHongbaoClose"]',
          snapshotUrls: 'https://i.gkd.li/i/13918466',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-移动网络下自动点击播放视频',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
          matches: '[text^="当前处于移动网络"]',
          exampleUrls:
            'https://m.gkd.li/57941037/ea612e44-12a9-405f-aa03-60a19cebef57',
          snapshotUrls: 'https://i.gkd.li/i/15857381',
        },
      ],
    },
    {
      key: 15,
      name: '全屏广告-关闭倒计时广告',
      desc: '左上角叉叉',
      rules: [
        {
          fastQuery: true,
          matches: ['@ImageView[index=1][width=86]'],
          activityIds: ['com.qq.e.tg.RewardvideoPortraitADActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '功能类-漫画券使用',
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
      key: 17,
      name: '全屏广告-关闭广告',
      desc: '观看n秒立即关闭广告',
      rules: [
        {
          name: '关闭广告-老版倒计时广告',
          key: 0,
          anyMatches: [
            '@TextView + TextView[text~="已观看视频\\\\d{2}秒，可获得奖励"]',
            '@TextView[text="| 跳过"] - TextView[text="领取成功" || text="奖励已领取"]',
            '@LinearLayout <2 LinearLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
            '@LinearLayout <3 LinearLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.qq.e.tg.RewardvideoPortraitADActivity',
            '.ui.activity.QDBrowserActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
        {
          name: '关闭微信广告',
          key: 1,
          matchDelay: 5000,
          matches: ['@TextView - TextView[text="奖励已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
        {
          name: '关闭广告-新版倒计时广告',
          key: 2,
          actionDelay: 16000,
          anyMatches: [
            '@ViewGroup < ViewGroup <2 ViewGroup <3 ViewGroup <2 ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
            '@ViewGroup < ViewGroup <2 ViewGroup <4 ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
            '@LinearLayout <2 LinearLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout + FrameLayout >6 TextView[text="咨询更多活动详情"]',
          ],
          activityIds: [
            'com.qq.e.tg.RewardvideoPortraitADActivity',
            'com.qidian.QDReader.ui.activity.QDBrowserActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '功能类-红包-马上抢',
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
      key: 19,
      name: '功能类-红包奖励领取',
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
      key: 20,
      name: '功能类-自动点击阅读积分',
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
      key: 21,
      name: '功能类-首页-抽奖-自动抽奖',
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
      key: 22,
      name: '功能类-签到-领福利-自动看视频',
      desc: '自动看视频',
      enable: true,
      rules: [
        {
          name: '点击签到',
          key: 0,
          matches: ['@TextView[vid="button_text_id"][text="签到"]'],
          activityIds: ['.ui.activity.MainGroupActivity'],
          actionDelay: 2000,
        },
        {
          name: '点击领福利',
          preKeys: [0],
          key: 1,
          matches: ['@TextView[vid="button_text_id"][text="领福利"]'],
          activityIds: ['.ui.activity.MainGroupActivity'],
        },
        {
          name: '点击看视频',
          key: 2,
          matches: ['@TextView[text="去完成"]'], //起点那群吊人随时可能改变按钮名称
          actionDelay: 1500,
          activityIds: [
            '.ui.activity.QDBrowserActivity',
            'com.qidian.QDReader.ui.activity.QDBrowserActivity',
          ],
        },
        {
          name: '点击知道了',
          preKeys: [2, 4],
          key: 3,
          matchTime: 2000,
          matches: [
            '@TextView < View <4 View < View <2 WebView < WebView < FrameLayout < [vid="webViewContainer"]',
          ],
          forcedTime: 1000,
          activityIds: ['.ui.activity.QDBrowserActivity'],
        },
        {
          name: '点击去抽奖+1',
          key: 4,
          matches: [
            '@TextView <2 View <3 View <5 View <3 View < WebView < WebView < FrameLayout < [vid="webViewContainer"]',
          ],
          actionDelay: 1000,
          activityIds: ['.ui.activity.QDBrowserActivity'],
        },
        {
          name: '看视频抽奖机会+1',
          key: 5,
          matches: [
            '@TextView <5 View <4 View < WebView < WebView < FrameLayout < [vid="webViewContainer"]',
          ],
          activityIds: ['.ui.activity.QDBrowserActivity'],
        },
        {
          name: '抽奖抽完了直接关掉',
          key: 6,
          matches: [
            '@View -3 [text="明天再来"]',
            '@TextView < View -3 [text="明天再来"]',
          ],
          activityIds: ['com.qq.e.tg.RewardvideoPortraitADActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '功能类-继续观看',
      desc: '广告内有时候会弹出是否继续观看的弹窗',
      enable: true,
      activityIds: [
        'com.qq.e.tg.RewardvideoPortraitADActivity',
        '.ui.activity.QDBrowserActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          name: '点击继续观看',
          key: 0,
          anyMatches: [
            '@ViewGroup < ViewGroup <3 ViewGroup <4 ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
            '@ViewGroup +2 ViewGroup <5 ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
            '@TextView <3 LinearLayout < [id="android:id/content"]',
            '@View -4 TextView[text^="视频将于"][text$="后续播"]',
            'Button[text="继续观看"]',
            '@View < View + View[id="touchGuide"]',
          ],
        },
        {
          name: '点击关闭广告',
          key: 1,
          preKeys: [0],
          anyMatches: [
            '@View < ViewGroup <5 ViewGroup < ViewGroup < ViewGroup < ViewGroup <2 ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
  ],
});
