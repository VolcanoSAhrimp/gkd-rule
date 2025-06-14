import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kdmei.huifuwang',
  name: '一键书阁',
  groups: [
    {
      key: 1,
      name: '广告关闭',
      activityIds: 'io.legado.app.ui.book.read.ReadBookActivity',
      rules: [
        'ImageView[desc$="关闭"]',
        'TextView[text="跳过"][text.length=2]',
        'ViewGroup[desc="top_close_button"]',
        'ImageView[vid="ad_close"]',
      ],
    },
  ],
});
