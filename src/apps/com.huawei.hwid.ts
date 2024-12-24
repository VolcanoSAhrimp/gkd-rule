import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
      // 我不知道这个广告从哪里来的，它出乎意料地跳出并覆盖在Gspace上面
      key: 0,
      name: '全屏广告-弹窗广告',
      desc: '广告必死',
      enable: true,
      activityIds: ['com.huawei.openalliance.ad.ppskit.activity.PPSActivity'],
      rules: [
        {
          matches: '[id="android:id/icon1"]',
        },
      ],
    },
  ],
});
