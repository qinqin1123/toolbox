/**
 * ============================================
 * generate_social.js — 社交媒体文案自动生成脚本（v2.0）
 * ============================================
 *
 * 功能说明：
 *   根据 resources.json 中的资源列表，自动生成「本周推荐资源清单」
 *   的社交媒体文案，适配小红书和抖音两个平台。
 *   v2.0 支持9大板块，文案会从不同板块中精选。
 *
 * 输出文件：weekly_post.txt
 *
 * ============================================
 */

const SOCIAL_CONFIG = {
    platforms: {
        xiaohongshu: {
            name: '小红书',
            style: {
                titleEmoji: '🔥',
                maxResources: 6,
                includeHashtags: true,
                callToAction: '收藏起来慢慢用！记得点赞关注不迷路~'
            },
            hashtags: ['#万能百宝箱', '#效率工具', '#大学生必备', '#免费资源', '#PPT模板', '#论文工具', '#AI工具', '#求职干货'],
            titleTemplates: [
                '🔥大学生必备！{count}个神仙网站，一个顶一百个',
                '别再到处找了！这{count}个效率工具网站够用大学四年',
                '室友问我凭什么效率这么高，我没告诉他这{count}个网站',
                '偷偷卷！{count}个宝藏效率工具，学霸都在用',
                '大学四年只用这{count}个网站就够了，全免费！'
            ],
            itemTemplate: '{index}. {name}（{category}）— {desc}'
        },
        douyin: {
            name: '抖音',
            style: {
                titleEmoji: '⚡',
                maxResources: 4,
                includeHashtags: true,
                callToAction: '关注我，每周分享实用工具！'
            },
            hashtags: ['#效率工具', '#大学生', '#免费网站', '#实用工具'],
            titleTemplates: [
                '⚡ 大学生必备的{count}个网站，第{highlight}个绝了',
                '室友以为我开了挂，其实我只会用这{count}个网站',
                '这{count}个免费网站不收藏，大学白读了'
            ],
            itemTemplate: '▸ {name}（{category}）：{desc}'
        }
    },

    outputPath: './weekly_post.txt',
    resourcesPath: './resources.json',

    // 板块中文名映射
    categoryNames: {
        ppt: 'PPT模板', word: 'Word文档', excel: 'Excel表格', mindmap: '思维导图',
        academic: '学术科研', ai: 'AI工具', resume: '简历求职', exam: '公考考编', coding: '编程学习'
    }
};

/**
 * ============================================
 * WorkBuddy 自动化工作流说明
 * ============================================
 *
 * 步骤 1 - 读取 resources.json
 * 步骤 2 - 从不同板块中各选取 1-2 个未推荐资源，确保板块多样性
 * 步骤 3 - 按小红书配置生成文案（含板块标签）
 * 步骤 4 - 按抖音配置生成文案
 * 步骤 5 - 写入 weekly_post.txt
 * 步骤 6 - 标记已推荐资源
 *
 * ============================================
 */

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SOCIAL_CONFIG };
}
