/**
 * ============================================
 * update_resources.js — 资源自动更新脚本（v2.0）
 * ============================================
 *
 * 功能说明：
 *   本脚本用于从指定信息源抓取新的效率工具资源网站信息，
 *   并自动追加到 resources.json 中，同时同步更新 script.js。
 *
 * 使用方式：通过 WorkBuddy 定期自动执行。
 *
 * ============================================
 * 配置区域
 * ============================================
 */

const UPDATE_CONFIG = {
    // 信息源列表
    sources: [
        {
            type: 'rss',
            name: '优设网 RSS',
            url: 'https://www.uisdc.com/feed',
            keywords: ['PPT模板', 'Word模板', 'Excel技巧', '思维导图', 'AI工具', '简历模板', '效率工具', '办公软件'],
            description: '国内顶级设计社区'
        },
        {
            type: 'rss',
            name: '少数派 RSS',
            url: 'https://sspai.com/feed',
            keywords: ['效率', '工具', '办公', 'AI', '写作', '笔记', '模板', '开发'],
            description: '效率工具和数码产品推荐'
        },
        {
            type: 'web',
            name: '知乎话题 - 效率工具',
            url: 'https://www.zhihu.com/topic/19559920/hot',
            keywords: ['免费工具', '效率网站', 'PPT', '简历', '论文'],
            description: '知乎效率工具话题'
        },
        {
            type: 'web',
            name: 'GitHub Trending',
            url: 'https://github.com/trending',
            keywords: ['tool', 'utility', 'productivity', 'ai-tool', 'template'],
            description: 'GitHub 热门项目（发现开发工具）'
        }
    ],

    // 自动分类规则（扩展9大板块）
    categoryRules: {
        'ppt':      ['PPT', '幻灯片', '演示文稿', 'PowerPoint', 'slides', 'presentation', 'keynote'],
        'word':     ['Word', '文档', '论文模板', '简历模板', '合同范本', 'doc'],
        'excel':    ['Excel', '表格', '数据分析', '图表', 'spreadsheet', '函数', '公式'],
        'mindmap':  ['思维导图', '脑图', 'mindmap', '流程图', 'flowchart', 'outline'],
        'academic': ['论文', '查重', '文献', '学术', '引用', '知网', 'paper', 'citation', 'reference'],
        'ai':       ['AI', 'GPT', '人工智能', '机器学习', '深度学习', 'LLM', 'ChatGPT', 'Midjourney'],
        'resume':   ['简历', '求职', '招聘', '面试', 'resume', 'cv', 'job', 'career'],
        'exam':     ['公考', '考编', '公务员', '行测', '申论', '教师招聘', '考研'],
        'coding':   ['编程', '代码', '开发', 'GitHub', '编程学习', 'coding', 'programming', 'tutorial']
    },

    // 自动类型判断
    typeRules: {
        'free':    ['免费', 'free', '开源', 'open source'],
        'vip':     ['付费', '会员', 'premium', 'pro'],
        'student': ['学生', '教育优惠', 'edu', 'student']
    },

    defaultCategory: 'ai',
    defaultType: 'free',
    maxNewResources: 5,
    resourcesJsonPath: './resources.json',
    scriptJsPath: './js/script.js'
};

/**
 * ============================================
 * WorkBuddy 自动化工作流说明
 * ============================================
 *
 * 当 WorkBuddy 执行此任务时：
 *
 * 1. 读取 update_resources.js 中的 UPDATE_CONFIG
 * 2. 读取 resources.json 获取现有 URL 列表用于去重
 * 3. 遍历 sources，用 web_fetch 获取内容
 * 4. 根据关键词筛选相关内容
 * 5. 识别新资源网站（提取名称、URL、描述）
 * 6. 根据 categoryRules 自动分类，根据 typeRules 判断类型
 * 7. 追加到 resources.json（id 递增）和 js/script.js
 * 8. 输出更新报告
 *
 * ============================================
 */

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UPDATE_CONFIG };
}
