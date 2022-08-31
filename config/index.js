export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxcaae6b68c36e9ede
",

    // 公众号APP_SECRET
    APP_SECRET: "1af79442b5a3df81be7571e7265f58a9
",

    // 模板消息id
    TEMPLATE_ID: "4ZhkxgA7I1NvxPA5JoRtxAs5eT6zJPIiaKpgPdsb7LE",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "4ZhkxgA7I1NvxPA5JoRtxAs5eT6zJPIiaKpgPdsb7LE",

    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
    // [{
    //   name: "龚雨",
    //   id: "ombMm6tJhjWX6-XOVAfdGsEN9rXw"
    // },
    // {
    //   name: "张赛",
    //   id: "ombMm6uEY_siJkmbg-YicD_qGVBk"
    // }]
    USERS: [
      {name: '宝贝龚雨', id: "ombMm6tJhjWX6-XOVAfdGsEN9rXw"}, 
      {name: '张赛', id: "ombMm6uEY_siJkmbg-YicD_qGVBk"}, 
       
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '自己',id: "ombMm6uEY_siJkmbg-YicD_qGVBk"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "江苏",
    // 所在城市
    CITY: "宿迁",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "生日", "name": "宝贝龚雨", "year": "2000", "date": "08-02"},
      {"type": "节日", "name": "在一起纪念日", "year": "2021", "date": "07-01"},
      {"type": "生日", "name": "张赛", "year": "2002", "date": "09-03"},
      {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "06-03"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 0,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2021-07-01",
    // 结婚纪念日
    MARRY_DATE: "2020-01-04",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 "
"
    LITERARY_PREFERENCE: "今天又是元气满满的一天呐[庆祝]，亲爱的宝贝龚雨每天都要开开心心[爱心][爱心]，不管遇到什么烦心事，都不要放在心上，要永远记得，学会做情绪的管理者不要被情绪控制，这样才能每天开开心心[烟花]，无论我在不在你的身边，宝贝都要相信，张赛最爱你[嘿哈][玫瑰]
"
    }
// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}
// {{note_en.DATA}}  
// {{note_ch.DATA}}
// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
