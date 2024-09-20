import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiaohua_browser',
  name: 'JMComic2',
  groups: [
    {
      name: '关闭个人界面广告',
      key: 0,
      desc: '76*75',
      rules: [
        {
          matches: ['@TextView[text=""][width=76][height=75]'],
          quickFind: true,
          activityIds: ['com.jiaohua_browser.MainActivity'],
        },
      ],
    },
  ],
});
