/**
 * 万能百宝箱 - 核心脚本 v5.0
 * 14大板块 · 500+ 精选资源 · 全类目导航站
 */

// ============================================
// 板块定义
// ============================================
const CATEGORIES = [
    { id: 'all',           name: '全部',       icon: '🗂️' },
    { id: 'search',        name: '搜索引擎',   icon: '🔍' },
    { id: 'entertainment', name: '影视娱乐',   icon: '🎬' },
    { id: 'tool',          name: '在线工具',   icon: '🛠️' },
    { id: 'design',        name: '设计素材',   icon: '🎨' },
    { id: 'finance',       name: '金融财经',   icon: '💰' },
    { id: 'life',          name: '生活服务',   icon: '🏪' },
    { id: 'netdisk',       name: '网盘资源',   icon: '☁️' },
    { id: 'ppt',           name: 'PPT模板',    icon: '📊' },
    { id: 'word',          name: 'Word文档',   icon: '📝' },
    { id: 'excel',         name: 'Excel表格',  icon: '📈' },
    { id: 'mindmap',       name: '思维导图',   icon: '🧠' },
    { id: 'academic',      name: '学术科研',   icon: '🎓' },
    { id: 'ai',            name: 'AI工具',     icon: '🤖' },
    { id: 'resume',        name: '简历求职',   icon: '💼' },
    { id: 'exam',          name: '公考考编',   icon: '📋' },
    { id: 'coding',        name: '编程学习',   icon: '💻' },
    { id: 'startup',       name: '创业工具',   icon: '🚀' },
    { id: 'gov',           name: '政府官网',   icon: '🏛️' },
    { id: 'brands',        name: '品牌官网',   icon: '🌐' },
];

// 政府官网多级行政区划
// level: 'province' | 'city' | 'district' | 'town'
const GOV_REGIONS = [
    { id: 'national',  name: '国家级', level: 'national' },
    { id: 'beijing',   name: '北京市', level: 'province', short: '京' },
    { id: 'shanghai',  name: '上海市', level: 'province', short: '沪' },
    { id: 'tianjin',   name: '天津市', level: 'province', short: '津' },
    { id: 'chongqing', name: '重庆市', level: 'province', short: '渝' },
    { id: 'hebei',     name: '河北省', level: 'province', short: '冀' },
    { id: 'shanxi',    name: '山西省', level: 'province', short: '晋' },
    { id: 'neimenggu', name: '内蒙古自治区', level: 'province', short: '蒙' },
    { id: 'liaoning',  name: '辽宁省', level: 'province', short: '辽' },
    { id: 'jilin',     name: '吉林省', level: 'province', short: '吉' },
    { id: 'heilongjiang', name: '黑龙江省', level: 'province', short: '黑' },
    { id: 'jiangsu',   name: '江苏省', level: 'province', short: '苏' },
    { id: 'zhejiang',  name: '浙江省', level: 'province', short: '浙' },
    { id: 'anhui',     name: '安徽省', level: 'province', short: '皖' },
    { id: 'fujian',    name: '福建省', level: 'province', short: '闽' },
    { id: 'jiangxi',   name: '江西省', level: 'province', short: '赣' },
    { id: 'shandong',  name: '山东省', level: 'province', short: '鲁' },
    { id: 'henan',     name: '河南省', level: 'province', short: '豫' },
    { id: 'hubei',     name: '湖北省', level: 'province', short: '鄂' },
    { id: 'hunan',     name: '湖南省', level: 'province', short: '湘' },
    { id: 'guangdong', name: '广东省', level: 'province', short: '粤' },
    { id: 'guangxi',   name: '广西壮族自治区', level: 'province', short: '桂' },
    { id: 'hainan',    name: '海南省', level: 'province', short: '琼' },
    { id: 'sichuan',   name: '四川省', level: 'province', short: '川' },
    { id: 'guizhou',   name: '贵州省', level: 'province', short: '黔' },
    { id: 'yunnan',    name: '云南省', level: 'province', short: '滇' },
    { id: 'xizang',    name: '西藏自治区', level: 'province', short: '藏' },
    { id: 'shaanxi',   name: '陕西省', level: 'province', short: '陕' },
    { id: 'gansu',     name: '甘肃省', level: 'province', short: '甘' },
    { id: 'qinghai',   name: '青海省', level: 'province', short: '青' },
    { id: 'ningxia',   name: '宁夏回族自治区', level: 'province', short: '宁' },
    { id: 'xinjiang',  name: '新疆维吾尔自治区', level: 'province', short: '新' },
    { id: 'hongkong',  name: '香港特别行政区', level: 'province', short: '港' },
    { id: 'macao',     name: '澳门特别行政区', level: 'province', short: '澳' },
    { id: 'taiwan',    name: '台湾地区', level: 'province', short: '台' },
];

// 省级下辖城市（全国31省完整地级市映射）
// 实际为 [regionId] → [{ id, name }] 的映射
const GOV_CITIES = {
    // ===== 直辖市（无下级地级市） =====
    beijing: [],
    shanghai: [],
    tianjin: [],
    chongqing: [],
    // ===== 华北 =====
    hebei: [
        { id: 'shijiazhuang', name: '石家庄市' },
        { id: 'tangshan', name: '唐山市' },
        { id: 'qinhuangdao', name: '秦皇岛市' },
        { id: 'handan', name: '邯郸市' },
        { id: 'xingtai', name: '邢台市' },
        { id: 'baoding', name: '保定市' },
        { id: 'zhangjiakou', name: '张家口市' },
        { id: 'chengde', name: '承德市' },
        { id: 'cangzhou', name: '沧州市' },
        { id: 'langfang', name: '廊坊市' },
        { id: 'hengshui', name: '衡水市' },
    ],
    shanxi: [
        { id: 'taiyuan', name: '太原市' },
        { id: 'datong', name: '大同市' },
        { id: 'yangquan', name: '阳泉市' },
        { id: 'changzhi', name: '长治市' },
        { id: 'jincheng', name: '晋城市' },
        { id: 'shuozhou', name: '朔州市' },
        { id: 'jinzhong', name: '晋中市' },
        { id: 'yuncheng', name: '运城市' },
        { id: 'xinzhou', name: '忻州市' },
        { id: 'linfen', name: '临汾市' },
        { id: 'lvliang', name: '吕梁市' },
    ],
    neimenggu: [
        { id: 'huhehaote', name: '呼和浩特市' },
        { id: 'baotou', name: '包头市' },
        { id: 'wuhai', name: '乌海市' },
        { id: 'chifeng', name: '赤峰市' },
        { id: 'tongliao', name: '通辽市' },
        { id: 'ordos', name: '鄂尔多斯市' },
        { id: 'hulunbeier', name: '呼伦贝尔市' },
        { id: 'bayannaoer', name: '巴彦淖尔市' },
        { id: 'wulanchabu', name: '乌兰察布市' },
    ],
    // ===== 东北 =====
    liaoning: [
        { id: 'shenyang', name: '沈阳市' },
        { id: 'dalian', name: '大连市' },
        { id: 'anshan', name: '鞍山市' },
        { id: 'fushun', name: '抚顺市' },
        { id: 'benxi', name: '本溪市' },
        { id: 'dandong', name: '丹东市' },
        { id: 'jinzhou', name: '锦州市' },
        { id: 'yingkou', name: '营口市' },
        { id: 'fuxin', name: '阜新市' },
        { id: 'liaoyang', name: '辽阳市' },
        { id: 'panjin', name: '盘锦市' },
        { id: 'tieling', name: '铁岭市' },
        { id: 'chaoyangln', name: '朝阳市' },
        { id: 'huludao', name: '葫芦岛市' },
    ],
    jilin: [
        { id: 'changchun', name: '长春市' },
        { id: 'jilincity', name: '吉林市' },
        { id: 'siping', name: '四平市' },
        { id: 'liaoyuan', name: '辽源市' },
        { id: 'tonghua', name: '通化市' },
        { id: 'baishan', name: '白山市' },
        { id: 'songyuan', name: '松原市' },
        { id: 'baicheng', name: '白城市' },
        { id: 'yanbian', name: '延边朝鲜族自治州' },
    ],
    heilongjiang: [
        { id: 'haerbin', name: '哈尔滨市' },
        { id: 'qiqihaer', name: '齐齐哈尔市' },
        { id: 'jixi', name: '鸡西市' },
        { id: 'hegang', name: '鹤岗市' },
        { id: 'shuangyashan', name: '双鸭山市' },
        { id: 'daqing', name: '大庆市' },
        { id: 'yichunhlj', name: '伊春市' },
        { id: 'jiamusi', name: '佳木斯市' },
        { id: 'qitaihe', name: '七台河市' },
        { id: 'mudanjiang', name: '牡丹江市' },
        { id: 'heihe', name: '黑河市' },
        { id: 'suihua', name: '绥化市' },
        { id: 'daxinganling', name: '大兴安岭地区' },
    ],
    // ===== 华东 =====
    jiangsu: [
        { id: 'nanjing', name: '南京市' },
        { id: 'wuxi', name: '无锡市' },
        { id: 'xuzhou', name: '徐州市' },
        { id: 'changzhou', name: '常州市' },
        { id: 'suzhoujs', name: '苏州市' },
        { id: 'nantong', name: '南通市' },
        { id: 'lianyungang', name: '连云港市' },
        { id: 'huaian', name: '淮安市' },
        { id: 'yancheng', name: '盐城市' },
        { id: 'yangzhou', name: '扬州市' },
        { id: 'zhenjiang', name: '镇江市' },
        { id: 'taizhoujs', name: '泰州市' },
        { id: 'suqian', name: '宿迁市' },
    ],
    zhejiang: [
        { id: 'hangzhou', name: '杭州市' },
        { id: 'ningbo', name: '宁波市' },
        { id: 'wenzhou', name: '温州市' },
        { id: 'jiaxing', name: '嘉兴市' },
        { id: 'huzhou', name: '湖州市' },
        { id: 'shaoxing', name: '绍兴市' },
        { id: 'jinhua', name: '金华市' },
        { id: 'quzhou', name: '衢州市' },
        { id: 'zhoushan', name: '舟山市' },
        { id: 'taizhouzj', name: '台州市' },
        { id: 'lishui', name: '丽水市' },
    ],
    anhui: [
        { id: 'hefei', name: '合肥市' },
        { id: 'wuhu', name: '芜湖市' },
        { id: 'bengbu', name: '蚌埠市' },
        { id: 'huainan', name: '淮南市' },
        { id: 'maanshan', name: '马鞍山市' },
        { id: 'huaibei', name: '淮北市' },
        { id: 'tongling', name: '铜陵市' },
        { id: 'anqing', name: '安庆市' },
        { id: 'huangshan', name: '黄山市' },
        { id: 'chuzhou', name: '滁州市' },
        { id: 'fuyang', name: '阜阳市' },
        { id: 'suzhouah', name: '宿州市' },
        { id: 'luan', name: '六安市' },
        { id: 'bozhou', name: '亳州市' },
        { id: 'chizhou', name: '池州市' },
        { id: 'xuancheng', name: '宣城市' },
    ],
    fujian: [
        { id: 'fuzhou', name: '福州市' },
        { id: 'xiamen', name: '厦门市' },
        { id: 'putian', name: '莆田市' },
        { id: 'sanming', name: '三明市' },
        { id: 'quanzhou', name: '泉州市' },
        { id: 'zhangzhou', name: '漳州市' },
        { id: 'nanping', name: '南平市' },
        { id: 'longyan', name: '龙岩市' },
        { id: 'ningde', name: '宁德市' },
    ],
    jiangxi: [
        { id: 'nanchang', name: '南昌市' },
        { id: 'jingdezhen', name: '景德镇市' },
        { id: 'pingxiang', name: '萍乡市' },
        { id: 'jiujiang', name: '九江市' },
        { id: 'xinyu', name: '新余市' },
        { id: 'yingtan', name: '鹰潭市' },
        { id: 'ganzhou', name: '赣州市' },
        { id: 'jian', name: '吉安市' },
        { id: 'yichunjx', name: '宜春市' },
        { id: 'fuzhoujx', name: '抚州市' },
        { id: 'shangrao', name: '上饶市' },
    ],
    shandong: [
        { id: 'jinan', name: '济南市' },
        { id: 'qingdao', name: '青岛市' },
        { id: 'zibo', name: '淄博市' },
        { id: 'zaozhuang', name: '枣庄市' },
        { id: 'dongying', name: '东营市' },
        { id: 'yantai', name: '烟台市' },
        { id: 'weifang', name: '潍坊市' },
        { id: 'jining', name: '济宁市' },
        { id: 'taian', name: '泰安市' },
        { id: 'weihai', name: '威海市' },
        { id: 'rizhao', name: '日照市' },
        { id: 'linyi', name: '临沂市' },
        { id: 'dezhou', name: '德州市' },
        { id: 'liaocheng', name: '聊城市' },
        { id: 'binzhou', name: '滨州市' },
        { id: 'heze', name: '菏泽市' },
    ],
    // ===== 华中 =====
    henan: [
        { id: 'zhengzhou', name: '郑州市' },
        { id: 'kaifeng', name: '开封市' },
        { id: 'luoyang', name: '洛阳市' },
        { id: 'pingdingshan', name: '平顶山市' },
        { id: 'anyang', name: '安阳市' },
        { id: 'hebi', name: '鹤壁市' },
        { id: 'xinxiang', name: '新乡市' },
        { id: 'jiaozuo', name: '焦作市' },
        { id: 'puyang', name: '濮阳市' },
        { id: 'xuchang', name: '许昌市' },
        { id: 'luohe', name: '漯河市' },
        { id: 'sanmenxia', name: '三门峡市' },
        { id: 'nanyang', name: '南阳市' },
        { id: 'shangqiu', name: '商丘市' },
        { id: 'xinyang', name: '信阳市' },
        { id: 'zhoukou', name: '周口市' },
        { id: 'zhumadian', name: '驻马店市' },
        { id: 'jiyuan', name: '济源市' },
    ],
    hubei: [
        { id: 'wuhan', name: '武汉市' },
        { id: 'huangshi', name: '黄石市' },
        { id: 'shiyan', name: '十堰市' },
        { id: 'yichang', name: '宜昌市' },
        { id: 'xiangyang', name: '襄阳市' },
        { id: 'ezhou', name: '鄂州市' },
        { id: 'jingmen', name: '荆门市' },
        { id: 'xiaogan', name: '孝感市' },
        { id: 'jingzhou', name: '荆州市' },
        { id: 'huanggang', name: '黄冈市' },
        { id: 'xianning', name: '咸宁市' },
        { id: 'suizhou', name: '随州市' },
        { id: 'enshi', name: '恩施土家族苗族自治州' },
    ],
    hunan: [
        { id: 'changsha', name: '长沙市' },
        { id: 'zhuzhou', name: '株洲市' },
        { id: 'xiangtan', name: '湘潭市' },
        { id: 'hengyang', name: '衡阳市' },
        { id: 'shaoyang', name: '邵阳市' },
        { id: 'yueyang', name: '岳阳市' },
        { id: 'changde', name: '常德市' },
        { id: 'zhangjiajie', name: '张家界市' },
        { id: 'yiyang', name: '益阳市' },
        { id: 'chenzhou', name: '郴州市' },
        { id: 'yongzhou', name: '永州市' },
        { id: 'huaihua', name: '怀化市' },
        { id: 'loudi', name: '娄底市' },
        { id: 'xiangxi', name: '湘西土家族苗族自治州' },
    ],
    // ===== 华南 =====
    guangdong: [
        { id: 'guangzhou', name: '广州市' },
        { id: 'shenzhen', name: '深圳市' },
        { id: 'dongguan', name: '东莞市' },
        { id: 'foshan', name: '佛山市' },
        { id: 'zhuhai', name: '珠海市' },
        { id: 'huizhou', name: '惠州市' },
        { id: 'zhongshan', name: '中山市' },
        { id: 'shantou', name: '汕头市' },
        { id: 'jiangmen', name: '江门市' },
        { id: 'zhanjiang', name: '湛江市' },
        { id: 'zhaoqing', name: '肇庆市' },
        { id: 'meizhou', name: '梅州市' },
        { id: 'maoming', name: '茂名市' },
        { id: 'yangjiang', name: '阳江市' },
        { id: 'qingyuan', name: '清远市' },
        { id: 'shaoguan', name: '韶关市' },
        { id: 'jieyang', name: '揭阳市' },
        { id: 'shanwei', name: '汕尾市' },
        { id: 'chaozhou', name: '潮州市' },
        { id: 'yunfu', name: '云浮市' },
        { id: 'heyuan', name: '河源市' },
    ],
    guangxi: [
        { id: 'nanning', name: '南宁市' },
        { id: 'liuzhou', name: '柳州市' },
        { id: 'guilin', name: '桂林市' },
        { id: 'wuzhou', name: '梧州市' },
        { id: 'beihai', name: '北海市' },
        { id: 'fangchenggang', name: '防城港市' },
        { id: 'qinzhou', name: '钦州市' },
        { id: 'guigang', name: '贵港市' },
        { id: 'yulin', name: '玉林市' },
        { id: 'baise', name: '百色市' },
        { id: 'hechi', name: '河池市' },
        { id: 'laibin', name: '来宾市' },
        { id: 'chongzuo', name: '崇左市' },
    ],
    hainan: [
        { id: 'haikou', name: '海口市' },
        { id: 'sanya', name: '三亚市' },
        { id: 'sansha', name: '三沙市' },
        { id: 'danzhou', name: '儋州市' },
    ],
    // ===== 西南 =====
    sichuan: [
        { id: 'chengdu', name: '成都市' },
        { id: 'zigong', name: '自贡市' },
        { id: 'panzhihua', name: '攀枝花市' },
        { id: 'luzhou', name: '泸州市' },
        { id: 'deyang', name: '德阳市' },
        { id: 'mianyang', name: '绵阳市' },
        { id: 'guangyuan', name: '广元市' },
        { id: 'suining', name: '遂宁市' },
        { id: 'neijiang', name: '内江市' },
        { id: 'leshan', name: '乐山市' },
        { id: 'nanchong', name: '南充市' },
        { id: 'meishan', name: '眉山市' },
        { id: 'yibin', name: '宜宾市' },
        { id: 'guangan', name: '广安市' },
        { id: 'dazhou', name: '达州市' },
        { id: 'yaan', name: '雅安市' },
        { id: 'bazhong', name: '巴中市' },
        { id: 'ziyang', name: '资阳市' },
        { id: 'aba', name: '阿坝藏族羌族自治州' },
        { id: 'ganzi', name: '甘孜藏族自治州' },
        { id: 'liangshan', name: '凉山彝族自治州' },
    ],
    guizhou: [
        { id: 'guiyang', name: '贵阳市' },
        { id: 'liupanshui', name: '六盘水市' },
        { id: 'zunyi', name: '遵义市' },
        { id: 'anshun', name: '安顺市' },
        { id: 'bijie', name: '毕节市' },
        { id: 'tongren', name: '铜仁市' },
        { id: 'qianxinan', name: '黔西南布依族苗族自治州' },
        { id: 'qiandongnan', name: '黔东南苗族侗族自治州' },
        { id: 'qiannan', name: '黔南布依族苗族自治州' },
    ],
    yunnan: [
        { id: 'kunming', name: '昆明市' },
        { id: 'qujing', name: '曲靖市' },
        { id: 'yuxi', name: '玉溪市' },
        { id: 'baoshan', name: '保山市' },
        { id: 'zhaotong', name: '昭通市' },
        { id: 'lijiang', name: '丽江市' },
        { id: 'puer', name: '普洱市' },
        { id: 'lincang', name: '临沧市' },
        { id: 'chuxiong', name: '楚雄彝族自治州' },
        { id: 'honghe', name: '红河哈尼族彝族自治州' },
        { id: 'wenshan', name: '文山壮族苗族自治州' },
        { id: 'xishuangbanna', name: '西双版纳傣族自治州' },
        { id: 'dehong', name: '德宏傣族景颇族自治州' },
        { id: 'nujiang', name: '怒江傈僳族自治州' },
        { id: 'diqing', name: '迪庆藏族自治州' },
    ],
    xizang: [
        { id: 'lasa', name: '拉萨市' },
        { id: 'rikaze', name: '日喀则市' },
        { id: 'changdu', name: '昌都市' },
        { id: 'linzhi', name: '林芝市' },
        { id: 'shannan', name: '山南市' },
        { id: 'naqu', name: '那曲市' },
        { id: 'ali', name: '阿里地区' },
    ],
    // ===== 西北 =====
    shaanxi: [
        { id: 'xian', name: '西安市' },
        { id: 'baoji', name: '宝鸡市' },
        { id: 'xianyang', name: '咸阳市' },
        { id: 'tongchuan', name: '铜川市' },
        { id: 'weinan', name: '渭南市' },
        { id: 'yanan', name: '延安市' },
        { id: 'hanzhong', name: '汉中市' },
        { id: 'yulin', name: '榆林市' },
        { id: 'ankang', name: '安康市' },
        { id: 'shangluo', name: '商洛市' },
    ],
    gansu: [
        { id: 'lanzhou', name: '兰州市' },
        { id: 'jiayuguan', name: '嘉峪关市' },
        { id: 'jinchang', name: '金昌市' },
        { id: 'baiyin', name: '白银市' },
        { id: 'tianshui', name: '天水市' },
        { id: 'wuwei', name: '武威市' },
        { id: 'zhangye', name: '张掖市' },
        { id: 'pingliang', name: '平凉市' },
        { id: 'jiuquan', name: '酒泉市' },
        { id: 'qingyang', name: '庆阳市' },
        { id: 'dingxi', name: '定西市' },
        { id: 'longnan', name: '陇南市' },
        { id: 'linxia', name: '临夏回族自治州' },
        { id: 'gannan', name: '甘南藏族自治州' },
    ],
    qinghai: [
        { id: 'xining', name: '西宁市' },
        { id: 'haidong', name: '海东市' },
        { id: 'haibei', name: '海北藏族自治州' },
        { id: 'huangnan', name: '黄南藏族自治州' },
        { id: 'hainanqh', name: '海南藏族自治州' },
        { id: 'guoluo', name: '果洛藏族自治州' },
        { id: 'yushu', name: '玉树藏族自治州' },
        { id: 'haixi', name: '海西蒙古族藏族自治州' },
    ],
    ningxia: [
        { id: 'yinchuan', name: '银川市' },
        { id: 'shizuishan', name: '石嘴山市' },
        { id: 'wuzhong', name: '吴忠市' },
        { id: 'guyuan', name: '固原市' },
        { id: 'zhongwei', name: '中卫市' },
    ],
    xinjiang: [
        { id: 'wulumuqi', name: '乌鲁木齐市' },
        { id: 'kelamayi', name: '克拉玛依市' },
        { id: 'turpan', name: '吐鲁番市' },
        { id: 'hami', name: '哈密市' },
        { id: 'changji', name: '昌吉回族自治州' },
        { id: 'boertala', name: '博尔塔拉蒙古自治州' },
        { id: 'bayinguoleng', name: '巴音郭楞蒙古自治州' },
        { id: 'akesu', name: '阿克苏地区' },
        { id: 'keshi', name: '克孜勒苏柯尔克孜自治州' },
        { id: 'kashen', name: '喀什地区' },
        { id: 'hetian', name: '和田地区' },
        { id: 'yili', name: '伊犁哈萨克自治州' },
        { id: 'tacheng', name: '塔城地区' },
        { id: 'aletai', name: '阿勒泰地区' },
    ],
    // ===== 港澳台 =====
    hongkong: [],
    macao: [],
    taiwan: [],
};

// 市级下辖区县（模板：广州市，后续批量补充）
const GOV_DISTRICTS = {
    guangzhou: [
        { id: 'tianhe', name: '天河区' },
        { id: 'yuexiu', name: '越秀区' },
        { id: 'haizhu', name: '海珠区' },
        { id: 'liwan', name: '荔湾区' },
        { id: 'baiyun', name: '白云区' },
        { id: 'panyu', name: '番禺区' },
        { id: 'huangpugz', name: '黄埔区' },
        { id: 'huadugz', name: '花都区' },
        { id: 'nansha', name: '南沙区' },
        { id: 'conghua', name: '从化区' },
        { id: 'zengcheng', name: '增城区' },
    ],
};

// 省份按大区分组（方便用户快速定位）
const GOV_AREA_GROUPS = [
    { id: 'municipality', name: '直辖市', ids: ['beijing', 'shanghai', 'tianjin', 'chongqing'] },
    { id: 'north',        name: '华北',   ids: ['hebei', 'shanxi', 'neimenggu'] },
    { id: 'northeast',    name: '东北',   ids: ['liaoning', 'jilin', 'heilongjiang'] },
    { id: 'east',         name: '华东',   ids: ['jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong'] },
    { id: 'central',      name: '华中',   ids: ['henan', 'hubei', 'hunan'] },
    { id: 'south',        name: '华南',   ids: ['guangdong', 'guangxi', 'hainan'] },
    { id: 'southwest',    name: '西南',   ids: ['sichuan', 'guizhou', 'yunnan', 'xizang'] },
    { id: 'northwest',    name: '西北',   ids: ['shaanxi', 'gansu', 'qinghai', 'ningxia', 'xinjiang'] },
    { id: 'special',      name: '港澳台', ids: ['hongkong', 'macao', 'taiwan'] },
];
let collapsedGovAreas = new Set(); // 折叠的大区分组

// 获取按热度排序的分类（AI工具强制置顶，其余按该分类下资源点击量总和排序）
function getSortedCategories() {
    const allCat = CATEGORIES.find(c => c.id === 'all');
    const aiCat = CATEGORIES.find(c => c.id === 'ai');
    const others = CATEGORIES.filter(c => c.id !== 'all' && c.id !== 'ai');
    // 按分类点击热度降序排序
    others.sort((a, b) => {
        const clicksA = resources.filter(r => r.category === a.id).reduce((s, r) => s + (clickStats[r.name] || 0), 0);
        const clicksB = resources.filter(r => r.category === b.id).reduce((s, r) => s + (clickStats[r.name] || 0), 0);
        return clicksB - clicksA;
    });
    return [allCat, aiCat, ...others];
}

// ============================================
// 品牌官网子分类定义
// ============================================
const BRAND_SUBS = [
    { id: 'tech',       name: '科技互联网',   icon: '💻' },
    { id: 'ecommerce',  name: '电商零售',     icon: '🛒' },
    { id: 'social',     name: '社交通讯',     icon: '💬' },
    { id: 'finance',    name: '金融银行',     icon: '🏦' },
    { id: 'travel',     name: '出行旅游',     icon: '✈️' },
    { id: 'food',       name: '餐饮美食',     icon: '🍜' },
    { id: 'hotel',      name: '酒店住宿',     icon: '🏨' },
    { id: 'education',  name: '教育学习',     icon: '📚' },
    { id: 'media',      name: '影视娱乐',     icon: '🎬' },
    { id: 'news',       name: '新闻资讯',     icon: '📰' },
    { id: 'sports',     name: '体育运动',     icon: '⚽' },
    { id: 'auto',       name: '汽车出行',     icon: '🚗' },
    { id: 'life',       name: '生活服务',     icon: '🏠' },
    { id: 'energy',     name: '能源制造',     icon: '🏭' },
];

// ============================================
// 创业板块子分类定义
// ============================================
const STARTUP_SUBS = [
    { id: 'ai_content', name: 'AI内容创作', icon: '🎬' },
    { id: 'ecommerce',  name: '电商平台',   icon: '🛒' },
    { id: 'media',      name: '自媒体/短视频', icon: '📱' },
    { id: 'design',     name: '设计接单',   icon: '🎨' },
    { id: 'knowledge',  name: '知识付费',   icon: '📚' },
    { id: 'crowd',      name: '众包任务',   icon: '📋' },
    { id: 'service',    name: '创业服务',   icon: '🏢' },
];

// ============================================
// 工具箱快入口
// ============================================
const QUICK_TOOLS = [
    { name: '字数统计',   icon: '🔢', img: 'eteste.png',       url: 'https://www.eteste.com', bg: 'linear-gradient(135deg,#4F6EF7,#818CF8)' },
    { name: '格式转换',   icon: '🔄', img: 'convertio.png',    url: 'https://convertio.co/zh/', bg: 'linear-gradient(135deg,#10B981,#34D399)' },
    { name: '在线压缩',   icon: '📦', img: 'tinypng.png',      url: 'https://tinypng.com', bg: 'linear-gradient(135deg,#EF4444,#F87171)' },
    { name: '截图工具',   icon: '📸', img: 'snipaste.png',     url: 'https://snipaste.com', bg: 'linear-gradient(135deg,#3B82F6,#60A5FA)' },
    { name: '二维码生成', icon: '📲', img: 'cli.png',          url: 'https://cli.im', bg: 'linear-gradient(135deg,#7C5CFC,#A78BFA)' },
    { name: 'PDF工具',   icon: '📄', img: 'ilovepdf.png',     url: 'https://ilovepdf.com/zh-cn', bg: 'linear-gradient(135deg,#F59E0B,#FBBF24)' },
    { name: '取色器',     icon: '🎨', img: 'colorhunt.png',    url: 'https://colorhunt.co', bg: 'linear-gradient(135deg,#EC4899,#F472B6)' },
    { name: '正则测试',   icon: '🔍', img: 'regex101.ico',    url: 'https://regex101.com', bg: 'linear-gradient(135deg,#06B6D4,#22D3EE)' },
];

// ============================================
// 资源数据
// type: 'free' 免费 | 'vip' 会员
// sub: 创业板块子分类ID（仅startup板块需要）
// ============================================
const resources = [

    // ============ 搜索引擎 ============
    { name:'百度',            url:'https://www.baidu.com',            desc:'国内最大中文搜索引擎，日均搜索请求数十亿次，中文内容最全面。',           category:'search', type:'free', rating:4.8, icon:'百', img:'baidu.png',
      review:'百度是中文互联网的入口，中文内容覆盖最全，尤其是本地生活、新闻资讯和政务查询。虽然搜索质量有时被诟病（广告多、SEO噪音），但在查国内政策文件、中文教程、地图服务等方面仍是首选。结合"百度学术"使用体验更佳。' },
    { name:'谷歌',            url:'https://www.google.com',           desc:'全球最强搜索引擎，英文技术文档、学术论文和开源资源首选。',               category:'search', type:'free', rating:5.0, icon:'Go',
      review:'谷歌的搜索算法是全球标杆，尤其适合搜索英文技术文档、StackOverflow答案、GitHub项目和国际学术资源。PageRank算法使结果质量普遍高于其他引擎。开发者必备，配合翻墙工具使用。' },
    { name:'必应',            url:'https://www.bing.com',             desc:'微软旗下搜索引擎，国内可直接访问，集成AI对话，图片搜索强。',             category:'search', type:'free', rating:4.5, icon:'Bi', img:'bing.ico',
      review:'必应是国内可稳定访问的国际搜索引擎，图片搜索质量极高，每日更换的壁纸也非常漂亮。集成了Copilot AI对话功能，可以直接在搜索框里问问题得到总结性回答。对英文内容的检索质量不亚于谷歌。' },
    { name:'Perplexity AI',   url:'https://www.perplexity.ai',        desc:'AI驱动搜索引擎，有引用来源，回答准确，取代传统搜索体验。',               category:'search', type:'free', rating:4.8, icon:'PP',
      review:'Perplexity是AI搜索的标杆产品，每次回答都会标注信息来源，可信度比ChatGPT更高。搜索问题会给出结构化总结，还能追问深挖。免费版已经很好用，对于研究型问题和技术查询体验比传统搜索好得多。' },
    { name:'夸克搜索',        url:'https://quark.sm.cn',              desc:'阿里旗下智能搜索，无广告纯净体验，学术论文和资源搜索强。',               category:'search', type:'free', rating:4.6, icon:'夸', img:'quark.ico',
      review:'夸克搜索的最大亮点是干净——首页无广告，搜索结果也相对纯净。对学生党来说，夸克网盘+夸克搜索的组合非常实用，直接搜题、搜资料、搜文件一站解决。手机端体验尤为出色。' },
    { name:'搜狗搜索',        url:'https://www.sogou.com',            desc:'腾讯旗下搜索，微信/公众号内容独家收录，查微信文章首选。',                 category:'search', type:'free', rating:4.3, icon:'搜' , img:'sogou.ico' },
    { name:'360搜索',         url:'https://www.so.com',               desc:'360旗下搜索引擎，中文内容检索，安全过滤较好。',                         category:'search', type:'free', rating:4.0, icon:'36' , img:'so360.ico' },
    { name:'DuckDuckGo',      url:'https://duckduckgo.com',           desc:'注重隐私的搜索引擎，不追踪用户数据，无个性化广告。',                     category:'search', type:'free', rating:4.5, icon:'DG' },
    { name:'Wolfram Alpha',   url:'https://www.wolframalpha.com',     desc:'计算知识引擎，数学运算、科学数据、统计分析神器。',                       category:'search', type:'free', rating:4.7, icon:'WA' },
    { name:'GitHub Search',   url:'https://github.com/search',        desc:'全球最大代码托管平台搜索，找开源项目和代码片段。',                       category:'search', type:'free', rating:4.8, icon:'GH', img:'github_com.ico' },
    { name:'哔哩哔哩搜索',    url:'https://search.bilibili.com',      desc:'B站站内搜索，找视频教程、知识科普、技术讲解最全面。',                    category:'search', type:'free', rating:4.6, icon:'BS', img:'search_bilibili_com.ico' },
    { name:'知乎搜索',        url:'https://www.zhihu.com/search',     desc:'专业问答社区搜索，查行业见解、方法论和深度分析。',                       category:'search', type:'free', rating:4.5, icon:'ZS', img:'zhihu_com.ico' },

    // ============ 在线工具 ============

    // --- 图片处理 ---
    { name:'TinyPNG',         url:'https://tinypng.com',              desc:'最流行的在线图片压缩工具，PNG/JPEG无损压缩，压缩率高达80%。',            category:'tool', type:'free', rating:4.9, icon:'TP',
      review:'TinyPNG是前端开发者和设计师压缩图片的首选工具，算法先进，在肉眼看不出差异的情况下可以压缩70-80%的文件大小。支持批量上传，免费版每月500张。对于网站优化和发邮件附件来说是必备神器。' },
    { name:'Remove.bg',       url:'https://www.remove.bg',            desc:'AI一键智能抠图，背景自动去除，效果专业，秒出结果。',                    category:'tool', type:'free', rating:4.8, icon:'RB', img:'remove_bg.ico',
      review:'Remove.bg的AI抠图效果令人惊艳，尤其对人像抠图准确率极高，头发丝级别处理，完全不需要PS基础。免费版分辨率有限制，付费版可导出高清原图。对于证件照换背景、商品图处理来说效率提升10倍以上。' },
    { name:'Squoosh',         url:'https://squoosh.app',              desc:'谷歌出品在线图片压缩工具，支持WebP转换，本地处理隐私安全。',             category:'tool', type:'free', rating:4.7, icon:'SQ' },
    { name:'图片工厂',        url:'https://www.img.pub',              desc:'国内图片处理平台，压缩/裁剪/格式转换/加水印一站式。',                   category:'tool', type:'free', rating:4.4, icon:'图' },

    // --- 格式转换 ---
    { name:'iLovePDF',        url:'https://www.ilovepdf.com',         desc:'PDF在线处理全能站，合并/拆分/压缩/PDF转Word/Excel全功能。',            category:'tool', type:'free', rating:4.8, icon:'IP',
      review:'iLovePDF是处理PDF的瑞士军刀，合并、分割、压缩、PDF转Word/Excel/PPT，Word转PDF，全都支持且免费。界面简洁易用，处理速度快，对于经常需要转换文件格式的职场人来说是高频工具，强烈推荐。' },
    { name:'SmallPDF',        url:'https://smallpdf.com',             desc:'PDF全能在线工具，压缩/转换/编辑，支持电子签名。',                      category:'tool', type:'free', rating:4.7, icon:'SP', img:'smallpdf_com.ico' },
    { name:'CloudConvert',    url:'https://cloudconvert.com',         desc:'支持200+格式的在线文件转换，视频/音频/文档/图片全支持。',               category:'tool', type:'free', rating:4.6, icon:'CC' },
    { name:'Convertio',       url:'https://convertio.co/zh',          desc:'在线文件格式转换，支持超300种格式，简单快速。',                         category:'tool', type:'free', rating:4.5, icon:'CO', img:'convertio_co.ico' },

    // --- 实用工具 ---
    { name:'二维码生成器',    url:'https://cli.im',                   desc:'草料二维码，功能最全的二维码在线生成和解码工具。',                      category:'tool', type:'free', rating:4.7, icon:'QR', img:'cli_im.ico',
      review:'草料二维码是国内最好用的二维码生具，支持文本、网址、名片、WiFi、地图等多种内容类型。活码功能可以在不改变二维码的情况下修改跳转目标，非常实用。还有统计功能，知道多少人扫了你的码。' },
    { name:'短链接',          url:'https://www.shorturl.at',          desc:'在线短链接生成工具，将长URL压缩成简短易记的链接。',                    category:'tool', type:'free', rating:4.3, icon:'短' , img:'shorturl.ico' },
    { name:'临时邮箱',        url:'https://temp-mail.org',            desc:'一次性临时邮箱，注册账号防骚扰，保护真实邮箱隐私。',                   category:'tool', type:'free', rating:4.6, icon:'临' },
    { name:'OCR文字识别',     url:'https://web.baiducloud.com/ocr',   desc:'百度OCR，图片/扫描件文字识别，准确率高，多语言支持。',                 category:'tool', type:'free', rating:4.5, icon:'OC', img:'web_baiducloud_com.ico' },
    { name:'在线计时器',      url:'https://www.timer.guru',           desc:'简洁的在线计时器，番茄钟/倒计时/正计时，专注工作必备。',               category:'tool', type:'free', rating:4.4, icon:'计' , img:'timer.ico' },
    { name:'JSON格式化',      url:'https://jsonformatter.curiousconcept.com', desc:'在线JSON格式化/验证/美化工具，开发调试必备。',              category:'tool', type:'free', rating:4.7, icon:'JS' },
    { name:'正则表达式测试',  url:'https://regex101.com',             desc:'在线正则表达式测试工具，支持多种语言，有详细解释。',                   category:'tool', type:'free', rating:4.8, icon:'正', img:'regex101_com.ico' },
    { name:'颜色工具',        url:'https://www.colorhexa.com',        desc:'颜色代码查询和转换，HEX/RGB/HSL互转，配色方案生成。',                  category:'tool', type:'free', rating:4.5, icon:'色' },
    { name:'在线截图',        url:'https://screenshot.guru',          desc:'在线截取任意网页截图，支持全页面截图和手机端预览。',                   category:'tool', type:'free', rating:4.3, icon:'截' , img:'screenshot.ico' },
    { name:'Favicon生成器',   url:'https://favicon.io',               desc:'在线生成网站Favicon图标，支持文字/图片/Emoji转ICO。',                  category:'tool', type:'free', rating:4.6, icon:'Fv' },
    { name:'IPIP.NET',        url:'https://www.ipip.net',             desc:'IP查询和网络工具，查本机IP、Ping测试、路由追踪。',                     category:'tool', type:'free', rating:4.5, icon:'IP' , img:'ipip.ico' },
    { name:'在线翻译',        url:'https://fanyi.baidu.com',          desc:'百度翻译，支持200+语言，文档翻译/图片翻译/语音翻译全覆盖。',           category:'tool', type:'free', rating:4.6, icon:'译', img:'fanyi_baidu_com.ico' },
    { name:'DeepL翻译',       url:'https://www.deepl.com',            desc:'AI神经网络翻译，英文翻中文质量远超谷歌翻译，学术写作必备。',            category:'tool', type:'free', rating:4.9, icon:'DL', img:'deepl_com.ico',
      review:'DeepL的翻译质量是目前最接近人工翻译的工具，特别是英译中/中译英，语句通顺自然。翻译学术论文、阅读英文文档非常好用。免费版每次翻译5000字，付费版无限制。比谷歌翻译强太多了。' },
    { name:'有道词典',        url:'https://dict.youdao.com',          desc:'网易旗下词典工具，单词例句/翻译/写作助手，学英语必备。',               category:'tool', type:'free', rating:4.7, icon:'有' , img:'youdao.ico' },
    { name:'ProcessOn',       url:'https://www.processon.com',        desc:'在线流程图和图表绘制，UML/流程图/ER图/架构图模板丰富。',               category:'tool', type:'free', rating:4.7, icon:'Pro', img:'processon_com.ico',
      review:'ProcessOn是国内最流行的在线图表工具，画流程图、UML图、ER图、网络拓扑图等都非常方便。免费版可以保存9个文件，基本够用。模板库丰富，可以直接套用修改。协作功能也很不错，团队一起改图很方便。' },
    { name:'draw.io',         url:'https://app.diagrams.net',         desc:'免费开源流程图工具，本地保存无账号，支持导出多种格式。',               category:'tool', type:'free', rating:4.8, icon:'Di' , img:'drawio.ico' },

    // ============ 设计素材 ============

    // --- 图标素材 ---
    { name:'Iconfont',        url:'https://www.iconfont.cn',          desc:'阿里巴巴矢量图标库，百万图标免费下载，支持SVG/PNG/Font。',            category:'design', type:'free', rating:4.9, icon:'IC', img:'iconfont.ico',
      review:'Iconfont是中国设计师用量最大的图标库，由阿里巴巴维护，质量稳定可靠。不仅是图标下载，还支持将多个图标打包成字体文件用于前端开发。对于UI设计和前端开发者来说是必备资源，免费使用，强烈推荐。' },
    { name:'Flaticon',        url:'https://www.flaticon.com',         desc:'全球最大图标素材库，数百万免费图标，多种格式下载。',                  category:'design', type:'free', rating:4.8, icon:'FI' , img:'flaticon.ico' },
    { name:'Icons8',          url:'https://icons8.com',               desc:'丰富的图标/插画/照片/音乐素材库，设计师一站式素材中心。',             category:'design', type:'free', rating:4.7, icon:'I8' , img:'icons8.ico' },
    { name:'Font Awesome',    url:'https://fontawesome.com',          desc:'Web开发最常用图标字体库，6000+图标，前端必备。',                      category:'design', type:'free', rating:4.8, icon:'FA' , img:'fontawesome.ico' },

    // --- 字体 ---
    { name:'Google Fonts',    url:'https://fonts.google.com',         desc:'谷歌免费字体库，1400+精美字体，商用免费。',                          category:'design', type:'free', rating:4.8, icon:'GF' },
    { name:'字体天下',        url:'https://www.fontke.com',           desc:'国内最全中文字体下载站，商用字体/特效字体/手写字体。',               category:'design', type:'free', rating:4.5, icon:'字' , img:'fontke.ico' },
    { name:'Adobe Fonts',     url:'https://fonts.adobe.com',          desc:'Adobe出品高端字体库，CC套件订阅用户免费使用数千款字体。',            category:'design', type:'free', rating:4.7, icon:'AF' , img:'adobefonts.ico' },

    // --- 设计工具 ---
    { name:'Canva',           url:'https://www.canva.com',            desc:'在线平面设计神器，海量模板一键套用，无需设计基础。',                  category:'design', type:'free', rating:4.9, icon:'Ca', img:'canva_com.ico',
      review:'Canva是非设计师的救星，海量高质量模板覆盖海报、PPT、社媒图片、名片、简历等所有场景。拖拽操作极为简单，免费版已经很强大。国内版也很稳定。做公众号封面、活动宣传图、简历封面等用Canva效率是PS的10倍。' },
    { name:'Figma',           url:'https://www.figma.com',            desc:'专业UI/UX设计工具，云端协作，行业标准设计软件。',                    category:'design', type:'free', rating:4.9, icon:'Fg', img:'figma_com.ico',
      review:'Figma已经成为UI/UX设计的行业标准工具，云端实时协作让设计师和开发者的配合更流畅。免费版支持3个项目，对个人学习和小团队完全够用。如果你想学UI设计，从Figma开始是最正确的选择。' },
    { name:'站酷海洛',        url:'https://www.hellorf.com',          desc:'正版商用图库，高质量图片/视频/音乐，付费可商用。',                  category:'design', type:'vip', rating:4.6, icon:'酷' },
    { name:'Unsplash',        url:'https://unsplash.com',             desc:'全球最大免费高清图库，摄影师贡献，商用免费，无需标注来源。',          category:'design', type:'free', rating:4.9, icon:'US', img:'unsplash.ico',
      review:'Unsplash的图片质量是所有免费图库里最高的，全部由专业摄影师贡献，所有图片商用免费且无需标注来源。做PPT、设计海报、写博客需要配图，首选Unsplash，找到的概率极高，质量远超百度图片。' },
    { name:'Pexels',          url:'https://www.pexels.com',           desc:'免费商用高清图库，图片和视频素材均可免费商用。',                     category:'design', type:'free', rating:4.8, icon:'Px' , img:'pexels.ico' },
    { name:'Pixabay',         url:'https://pixabay.com',              desc:'200万+免费图片/视频/音乐，CCO版权可完全免费商用。',                  category:'design', type:'free', rating:4.7, icon:'PX' , img:'pixabay.ico' },
    { name:'FreePik',         url:'https://www.freepik.com',          desc:'海量免费矢量图/PSD/图标/模板，标注来源可免费使用。',                 category:'design', type:'free', rating:4.7, icon:'FP' , img:'freepik.ico' },
    { name:'Adobe Color',     url:'https://color.adobe.com',          desc:'Adobe配色工具，色轮调色、配色方案生成、从图片提取颜色。',            category:'design', type:'free', rating:4.7, icon:'AC' , img:'adobecolor.ico' },
    { name:'Coolors',         url:'https://coolors.co',               desc:'流行配色方案生成器，按空格键随机生成美观配色，设计师必备。',          category:'design', type:'free', rating:4.8, icon:'CL' , img:'coolors.ico' },
    { name:'阿里云设计',      url:'https://yundesign.aliyun.com',     desc:'阿里云出品设计资源平台，电商设计/Banner/营销物料素材。',             category:'design', type:'free', rating:4.3, icon:'云' },

    // ============ 金融财经 ============
    { name:'东方财富',        url:'https://www.eastmoney.com',        desc:'国内最大财经门户，股票行情/基金净值/财经资讯全覆盖。',               category:'finance', type:'free', rating:4.8, icon:'东', img:'eastmoney_com.ico',
      review:'东方财富是A股散户最高频使用的财经平台，股票行情、基金净值、财经新闻、上市公司公告应有尽有。天天基金也是它旗下的。手机端炒股开户也越来越多，数据更新及时，研究报告多，强烈推荐。' },
    { name:'同花顺',          url:'https://www.10jqka.com.cn',        desc:'老牌股票软件，行情分析/选股工具/量化策略，专业投资者首选。',          category:'finance', type:'free', rating:4.7, icon:'同', img:'10jqka_com_cn.ico' },
    { name:'雪球',            url:'https://xueqiu.com',               desc:'投资者社区，大V分析/组合投资/深度研究，理财学习平台。',              category:'finance', type:'free', rating:4.7, icon:'雪', img:'xueqiu.ico',
      review:'雪球是中国最有深度的投资社区，汇聚了大量有实力的个人投资者和机构人士分享观点。可以关注大V、学习分析方法、看投资组合表现。对于想系统学习投资的人来说，雪球是最好的免费学习平台之一。' },
    { name:'财联社',          url:'https://www.cls.cn',               desc:'专业财经资讯媒体，电报快讯实时推送，机构级信息平台。',              category:'finance', type:'free', rating:4.6, icon:'财' },
    { name:'招商银行',        url:'https://www.cmbchina.com',         desc:'招商银行官网，账户管理/理财产品/贷款申请。',                        category:'finance', type:'free', rating:4.5, icon:'招', img:'cmbchina_com.ico' },
    { name:'支付宝理财',      url:'https://fortune.alipay.com',       desc:'支付宝理财频道，余额宝/基金/保险/黄金投资入口。',                   category:'finance', type:'free', rating:4.6, icon:'宝', img:'fortune_alipay_com.ico' },
    { name:'天天基金',        url:'https://fund.eastmoney.com',       desc:'东方财富旗下基金超市，基金查询/排行/购买一站式。',                  category:'finance', type:'free', rating:4.7, icon:'基' , img:'fund.ico' },
    { name:'理杏仁',          url:'https://www.lixinger.com',         desc:'A股基本面数据平台，财务指标/估值分析/量化选股。',                   category:'finance', type:'free', rating:4.6, icon:'杏' , img:'lixinger.ico' },
    { name:'万得资讯',        url:'https://www.wind.com.cn',          desc:'Wind金融数据，机构首选金融数据终端，数据权威全面。',               category:'finance', type:'vip', rating:4.9, icon:'W', img:'wind.png' },
    { name:'Choice数据',      url:'https://choice.eastmoney.com',     desc:'东方财富旗下金融数据平台，替代Wind的性价比之选。',                  category:'finance', type:'vip', rating:4.7, icon:'CH' , img:'choice.ico' },
    { name:'汇率换算',        url:'https://www.xe.com',               desc:'全球实时汇率换算，支持170+货币，金融出行必备。',                    category:'finance', type:'free', rating:4.8, icon:'汇' , img:'xe.ico' },
    { name:'英为财情',        url:'https://cn.investing.com',         desc:'全球金融数据平台，覆盖股票/期货/外汇/加密货币。',                   category:'finance', type:'free', rating:4.7, icon:'英' , img:'investing.ico' },
    { name:'CoinMarketCap',   url:'https://coinmarketcap.com',        desc:'全球最权威加密货币行情平台，实时价格/市值/涨跌数据。',              category:'finance', type:'free', rating:4.7, icon:'CM' },
    { name:'MacroTrends',     url:'https://www.macrotrends.net',      desc:'美股财务数据和宏观经济数据平台，历史数据丰富可视化。',              category:'finance', type:'free', rating:4.6, icon:'MT' },

    // ============ 生活服务 ============
    { name:'淘宝',            url:'https://www.taobao.com',           desc:'国内最大综合电商平台，海量商品低价，买什么都有。',                   category:'life', type:'free', rating:4.7, icon:'淘', img:'taobao_com.ico' },
    { name:'京东',            url:'https://www.jd.com',               desc:'自营电商，正品保障，物流快，电子产品和家电首选。',                   category:'life', type:'free', rating:4.8, icon:'JD' , img:'jd.ico' },
    { name:'拼多多',          url:'https://www.pinduoduo.com',        desc:'社交拼购电商，工厂直发，低价好物，下沉市场优势明显。',              category:'life', type:'free', rating:4.5, icon:'拼' },
    { name:'美团',            url:'https://www.meituan.com',          desc:'本地生活服务平台，外卖/团购/酒店/电影票一站搞定。',                 category:'life', type:'free', rating:4.8, icon:'美' , img:'meituan.ico' },
    { name:'饿了么',          url:'https://www.ele.me',               desc:'阿里旗下外卖平台，骑手快配送，饿了就叫外卖。',                     category:'life', type:'free', rating:4.6, icon:'饿' , img:'eleme.ico' },
    { name:'12306',           url:'https://www.12306.cn',             desc:'中国铁路官方购票平台，火车票/高铁票/动车票唯一官方渠道。',          category:'life', type:'free', rating:4.7, icon:'12' , img:'12306.ico' },
    { name:'携程',            url:'https://www.ctrip.com',            desc:'综合旅行平台，机票/火车票/酒店/景点/旅游套餐预订。',               category:'life', type:'free', rating:4.7, icon:'程' , img:'ctrip.ico' },
    { name:'去哪儿',          url:'https://www.qunar.com',            desc:'旅行搜索引擎，比价购买机票/酒店，低价出行首选。',                   category:'life', type:'free', rating:4.6, icon:'哪' , img:'qunar.ico' },
    { name:'滴滴出行',        url:'https://www.didiglobal.com',       desc:'国内最大网约车平台，打车/顺风车/代驾/货运全覆盖。',                category:'life', type:'free', rating:4.6, icon:'滴' , img:'didi.ico' },
    { name:'高德地图',        url:'https://www.amap.com',             desc:'阿里旗下地图，导航精准，生活服务信息丰富，推荐使用。',              category:'life', type:'free', rating:4.9, icon:'高' , img:'amap.ico' },
    { name:'百度地图',        url:'https://map.baidu.com',            desc:'百度旗下地图导航，国内覆盖广，公交/骑行路线规划好用。',             category:'life', type:'free', rating:4.7, icon:'地' , img:'mapbaidu.ico' },
    { name:'大众点评',        url:'https://www.dianping.com',         desc:'餐厅/景点评价平台，找好吃的好玩的必备，用户评价真实。',             category:'life', type:'free', rating:4.7, icon:'评' , img:'dianping.ico' },
    { name:'闲鱼',            url:'https://www.goofish.com',          desc:'阿里旗下二手交易平台，买卖二手物品，捡漏淘货神器。',               category:'life', type:'free', rating:4.6, icon:'鱼' , img:'goofish.png' },
    { name:'转转',            url:'https://www.zhuanzhuan.com',       desc:'京东旗下二手交易平台，验货保障，手机数码回收首选。',               category:'life', type:'free', rating:4.5, icon:'转' , img:'zhuanzhuan.ico' },
    { name:'叮咚买菜',        url:'https://www.ddxq.mobi',            desc:'生鲜电商极速达，30分钟送上门，新鲜蔬菜水果肉类。',                category:'life', type:'free', rating:4.5, icon:'叮' , img:'ddxq.ico' },
    { name:'微医',            url:'https://www.guahao.com',           desc:'在线挂号和问诊平台，三甲医院预约挂号，医疗健康服务。',             category:'life', type:'free', rating:4.4, icon:'医' , img:'guahao.ico' },
    { name:'得物',            url:'https://www.dewu.com',             desc:'正品潮流商品鉴别平台，球鞋/潮服/手表防伪验货。',                   category:'life', type:'free', rating:4.5, icon:'物' , img:'dewu.ico' },
    { name:'小米商城',        url:'https://www.mi.com',               desc:'小米官方商城，手机/智能家居/生态链产品，性价比高。',               category:'life', type:'free', rating:4.6, icon:'MI', img:'mi_com.ico' },
    { name:'苏宁易购',        url:'https://www.suning.com',           desc:'家电零售平台，线上线下一体，家电/数码/生活用品。',                 category:'life', type:'free', rating:4.4, icon:'苏' , img:'suning.ico' },
    { name:'贝壳找房',        url:'https://www.ke.com',               desc:'房屋买卖和租赁平台，真实房源，找房租房最专业平台。',               category:'life', type:'free', rating:4.6, icon:'贝' , img:'ke.ico' },

    // ============ 网盘资源 ============
    { name:'百度网盘',        url:'https://pan.baidu.com',            desc:'国内最大网盘，免费2TB存储，分享文件和个人备份首选。',              category:'netdisk', type:'free', rating:4.5, icon:'BP',
      review:'百度网盘是国内用量最大的云存储服务，免费2TB存储对个人来说绰绰有余。主要问题是非会员下载速度被限速，大文件下载体验差。但作为文件归档、分享素材资料来说还是很方便的。资源分享社区也很活跃，能找到很多学习资料。' },
    { name:'阿里云盘',        url:'https://www.alipan.com',           desc:'阿里旗下云盘，不限速下载，免费100GB空间，体验好。',               category:'netdisk', type:'free', rating:4.8, icon:'AP', img:'alipan_com.ico',
      review:'阿里云盘是目前个人用户体验最好的国内云盘，最大亮点是不限速下载！免费100GB空间，手机/电脑端界面都很流畅。分享功能完善，资源社区也在快速成长。强烈推荐替代百度网盘作为主力云盘使用。' },
    { name:'夸克网盘',        url:'https://pan.quark.cn',             desc:'夸克旗下云盘，内置搜索和文档解析，学生党学习神器。',              category:'netdisk', type:'free', rating:4.7, icon:'QK', img:'pan_quark_cn.ico',
      review:'夸克网盘的特色是内置了强大的文档预览和搜索功能，PDF/Word/PPT可以直接在网页上阅读，还支持OCR识别。存储空间免费100GB，配合夸克浏览器用体验更好。学习资料很多，搜索功能方便找资源。' },
    { name:'天翼云盘',        url:'https://cloud.189.cn',             desc:'中国电信旗下云盘，免费60GB，稳定可靠，不限速。',                  category:'netdisk', type:'free', rating:4.4, icon:'天' },
    { name:'坚果云',          url:'https://www.jianguoyun.com',       desc:'专业网盘，WebDAV支持，支持Obsidian/Zotero等工具同步。',           category:'netdisk', type:'free', rating:4.7, icon:'坚', img:'jianguoyun_com.ico',
      review:'坚果云是知识工作者最爱的网盘，最大特色是完整的WebDAV支持，可以和Obsidian笔记、Zotero文献管理、MindNode思维导图等工具无缝同步。免费版每月1GB上传/3GB下载流量，对轻度用户够用。' },
    { name:'OneDrive',        url:'https://onedrive.live.com',        desc:'微软旗下云盘，5GB免费，与Office深度整合，跨设备同步。',           category:'netdisk', type:'free', rating:4.6, icon:'OD' },
    { name:'Google Drive',    url:'https://drive.google.com',         desc:'谷歌云盘，15GB免费，与Google文档/表格/幻灯片深度集成。',          category:'netdisk', type:'free', rating:4.7, icon:'GD' },
    { name:'Dropbox',         url:'https://www.dropbox.com',          desc:'国际主流云盘，跨平台同步流畅，第三方工具集成生态好。',             category:'netdisk', type:'free', rating:4.5, icon:'DP' },
    { name:'蓝奏云',          url:'https://www.lanzou.com',           desc:'免费无限容量文件分享网盘，不限速下载，适合分享资源。',             category:'netdisk', type:'free', rating:4.5, icon:'蓝' , img:'lanzou.ico' },
    { name:'飞猫云',          url:'https://www.feimaoyu.com',         desc:'资源搜索引擎，搜索百度/阿里/夸克等各平台分享的资源。',            category:'netdisk', type:'free', rating:4.3, icon:'猫' },
    { name:'Cloudreve',       url:'https://cloudreve.org',            desc:'开源自建网盘程序，支持多存储后端，可搭建私有云盘。',              category:'netdisk', type:'free', rating:4.6, icon:'CRe' , img:'cloudreve.ico' },

    // ============ 影视娱乐 ============

    // --- 短视频平台 ---
    { name:'抖音',         url:'https://www.douyin.com',        desc:'国内最大短视频平台，日活超6亿，看视频、刷直播必备。',           category:'entertainment', type:'free',    rating:4.9, icon:'抖' , img:'douyin.ico' },
    { name:'快手',         url:'https://www.kuaishou.com',      desc:'国民级短视频平台，真实生活内容丰富，直播生态强。',               category:'entertainment', type:'free',    rating:4.7, icon:'快' , img:'kuaishou.ico' },
    { name:'B站',          url:'https://www.bilibili.com',      desc:'年轻人文化社区，弹幕互动，番剧、游戏、知识内容聚集地。',          category:'entertainment', type:'free',    rating:4.9, icon:'B',  img:'bilibili.ico' },
    { name:'视频号',       url:'https://channels.weixin.qq.com',desc:'微信生态短视频，基于社交推荐，连接公众号和小程序。',              category:'entertainment', type:'free',    rating:4.4, icon:'频' },
    { name:'小红书',       url:'https://www.xiaohongshu.com',   desc:'生活方式分享社区，种草、探店、穿搭、美妆内容丰富。',              category:'entertainment', type:'free',    rating:4.7, icon:'红' , img:'douban.ico' },
    { name:'微博',         url:'https://weibo.com',              desc:'中文社交媒体平台，热搜榜实时追踪热点新闻和娱乐资讯。',             category:'entertainment', type:'free',    rating:4.5, icon:'微' , img:'weibo.ico' },
    { name:'YouTube',      url:'https://www.youtube.com',       desc:'全球最大视频平台，海量内容创作者，音乐MV、教程、Vlog全覆盖。',    category:'entertainment', type:'free',    rating:4.8, icon:'YT' },

    // --- 长视频/流媒体 ---
    { name:'腾讯视频',     url:'https://v.qq.com',              desc:'腾讯旗下视频平台，独播剧、综艺、动漫资源丰富。',                 category:'entertainment', type:'vip',     rating:4.6, icon:'腾' , img:'vqq.ico' },
    { name:'爱奇艺',       url:'https://www.iqiyi.com',         desc:'百度旗下视频平台，自制剧和独播综艺质量高。',                       category:'entertainment', type:'vip',     rating:4.6, icon:'奇' , img:'iqiyi.ico' },
    { name:'优酷',         url:'https://www.youku.com',         desc:'阿里旗下视频平台，老牌流媒体，经典剧集和综艺储备丰富。',          category:'entertainment', type:'vip',     rating:4.4, icon:'优' , img:'youku.ico' },
    { name:'芒果TV',       url:'https://www.mgtv.com',          desc:'湖南卫视旗下视频平台，王牌综艺独播地。',                          category:'entertainment', type:'vip',     rating:4.5, icon:'芒' , img:'mgtv.ico' },

    { name:'Netflix',      url:'https://www.netflix.com',       desc:'全球流媒体巨头，顶级美剧和原创电影，海外剧集首选。',              category:'entertainment', type:'vip',     rating:4.8, icon:'NF' },
    { name:'Disney+',      url:'https://www.disneyplus.com',    desc:'迪士尼流媒体平台，漫威、星战、皮克斯动画独家版权。',              category:'entertainment', type:'vip',     rating:4.7, icon:'D+' , img:'disneyplus.ico' },
    { name:'央视网',       url:'https://tv.cctv.com',           desc:'中央广播电视总台官网，央视节目直播、新闻和纪录片。',               category:'entertainment', type:'free',    rating:4.5, icon:'央' , img:'cctv.ico' },
    { name:'咪咕视频',     url:'https://www.miguvideo.com',     desc:'中国移动旗下视频平台，体育赛事直播资源丰富。',                     category:'entertainment', type:'free',    rating:4.3, icon:'咪' , img:'miguvideo.ico' },
    { name:'1905电影网',   url:'https://www.1905.com',          desc:'CCTV-6电影频道官网，电影资讯、影评和经典影片资源。',               category:'entertainment', type:'free',    rating:4.4, icon:'影' , img:'1905.ico' },

    // --- 音乐平台 ---
    { name:'网易云音乐',   url:'https://music.163.com',         desc:'音乐社区氛围最好的平台，歌单推荐精准，评论区有故事。',            category:'entertainment', type:'free',    rating:4.8, icon:'云' , img:'music163.ico' },
    { name:'QQ音乐',      url:'https://y.qq.com',               desc:'腾讯旗下音乐平台，版权资源丰富，华语音乐库最全。',                 category:'entertainment', type:'free',    rating:4.6, icon:'QQ' , img:'yqq.ico' },
    { name:'酷狗音乐',     url:'https://www.kugou.com',         desc:'老牌音乐平台，用户基数大，K歌和直播功能丰富。',                   category:'entertainment', type:'free',    rating:4.4, icon:'狗' , img:'kugou.ico' },
    { name:'酷我音乐',     url:'https://www.kuwo.cn',           desc:'海量音乐库，DJ舞曲和铃声资源丰富。',                             category:'entertainment', type:'free',    rating:4.3, icon:'我' , img:'kuwo.ico' },
    { name:'Spotify',      url:'https://www.spotify.com',       desc:'全球最大音乐流媒体平台，海外音乐和播客内容丰富。',                 category:'entertainment', type:'free',    rating:4.7, icon:'SP' , img:'spotify.ico' },
    { name:'Apple Music',  url:'https://music.apple.com',       desc:'苹果官方音乐平台，音质优秀，与Apple生态深度整合。',                category:'entertainment', type:'vip',     rating:4.6, icon:'AM' , img:'applemusic.ico' },
    { name:'汽水音乐',     url:'https://qishui.music.163.com',  desc:'字节跳动旗下音乐平台，依托抖音音乐生态，算法推荐精准。',          category:'entertainment', type:'free',    rating:4.3, icon:'汽', img:'qishui_music_163_com.ico' },
    { name:'5sing',        url:'https://5sing.kugou.com',       desc:'中国原创音乐基地，独立音乐人和翻唱作品聚集地。',                   category:'entertainment', type:'free',    rating:4.1, icon:'5S' , img:'5sing.ico' },


    // --- 有声/播客/电台 ---
    { name:'喜马拉雅',     url:'https://www.ximalaya.com',      desc:'国内最大有声内容平台，有声书、播客、相声评书全覆盖。',            category:'entertainment', type:'free',    rating:4.7, icon:'喜' , img:'ximalaya.ico' },
    { name:'蜻蜓FM',      url:'https://www.qingting.fm',       desc:'专业音频平台，广播电台、有声书、脱口秀内容丰富。',                  category:'entertainment', type:'free',    rating:4.4, icon:'蜓' , img:'qingting.ico' },
    { name:'荔枝FM',      url:'https://www.lizhi.fm',          desc:'声音互动平台，语音直播和播客节目社区。',                            category:'entertainment', type:'free',    rating:4.3, icon:'荔' , img:'lizhi.ico' },
    { name:'小宇宙',       url:'https://www.xiaoyuzhoufm.com',  desc:'中文播客App，精品播客内容聚合，听优质深度对谈。',                  category:'entertainment', type:'free',    rating:4.6, icon:'宇' , img:'xiaoyuzhou.ico' },

    // --- 阅读平台 ---
    { name:'番茄小说',     url:'https://fanqienovel.com',       desc:'字节跳动旗下免费小说平台，海量网文免费看。',                       category:'entertainment', type:'free',    rating:4.6, icon:'番' },
    { name:'起点中文网',   url:'https://www.qidian.com',        desc:'阅文集团旗下最大网文平台，正版玄幻修仙小说首选。',                 category:'entertainment', type:'free',    rating:4.7, icon:'起' , img:'qidian.ico' },
    { name:'晋江文学城',   url:'https://www.jjwxc.net',         desc:'女性向原创文学基地，言情、耽美、同人小说聚集地。',                category:'entertainment', type:'free',    rating:4.5, icon:'晋' , img:'jjwxc.ico' },
    { name:'掌阅',         url:'https://www.zhangyue.com',      desc:'数字阅读平台，出版书和网文并重，阅读体验好。',                      category:'entertainment', type:'free',    rating:4.4, icon:'阅' , img:'zhangyue.ico' },
    { name:'微信读书',     url:'https://weread.qq.com',         desc:'腾讯旗下阅读平台，出版书电子版齐全，社交阅读体验好。',              category:'entertainment', type:'free',    rating:4.7, icon:'读' , img:'weread.ico' },
    { name:'豆瓣读书',     url:'https://book.douban.com',       desc:'中文图书评分和书评社区，找好书和看书评必备。',                     category:'entertainment', type:'free',    rating:4.8, icon:'DB', img:'book_douban_com.ico' },
    { name:'纵横中文网',   url:'https://www.zongheng.com',      desc:'百度旗下网文平台，男频玄幻都市小说丰富。',                          category:'entertainment', type:'free',    rating:4.3, icon:'纵' , img:'zongheng.ico' },
    { name:'书旗小说',     url:'https://www.shuqi.com',         desc:'阿里旗下免费小说平台，都市言情和玄幻小说资源多。',                category:'entertainment', type:'free',    rating:4.2, icon:'旗' , img:'shuqi.ico' },
    { name:'七猫小说',     url:'https://www.qimao.com',         desc:'免费网文阅读平台，小说库大，广告模式免费看。',                    category:'entertainment', type:'free',    rating:4.4, icon:'猫' },

    // --- 游戏平台 ---
    { name:'Steam',        url:'https://store.steampowered.com',desc:'全球最大PC游戏平台，3A大作和独立游戏库最全。',                   category:'entertainment', type:'free',    rating:4.9, icon:'Sm' },
    { name:'4399小游戏',   url:'https://www.4399.com',          desc:'老牌小游戏门户，Flash/H5小游戏大全，休闲解压首选。',              category:'entertainment', type:'free',    rating:4.5, icon:'43' , img:'4399.ico' },
    { name:'7k7k小游戏',   url:'https://www.7k7k.com',          desc:'经典小游戏网站，双人小游戏和页游丰富。',                            category:'entertainment', type:'free',    rating:4.3, icon:'7k' , img:'7k7k.ico' },
    { name:'Epic Games',   url:'https://www.epicgames.com',     desc:'虚幻引擎开发商商店，每周送免费游戏，3A大作折扣多。',              category:'entertainment', type:'free',    rating:4.7, icon:'EG' , img:'epicgames.ico' },
    { name:'TapTap',       url:'https://www.taptap.cn',         desc:'精品手游社区平台，游戏评测真实，独立游戏聚集地。',                 category:'entertainment', type:'free',    rating:4.6, icon:'TP' , img:'taptap.ico' },
    { name:'网易游戏',     url:'https://game.163.com',          desc:'网易游戏官网，梦幻西游、阴阳师等经典IP。',                         category:'entertainment', type:'free',    rating:4.5, icon:'网' , img:'game163.ico' },
    { name:'腾讯游戏',     url:'https://game.qq.com',           desc:'腾讯游戏官网，王者荣耀、和平精英等国民游戏入口。',                  category:'entertainment', type:'free',    rating:4.5, icon:'鹅' , img:'gameqq.ico' },
    { name:'3DM游戏网',    url:'https://www.3dmgame.com',       desc:'游戏资讯和单机游戏下载平台，游戏攻略丰富。',                       category:'entertainment', type:'free',    rating:4.4, icon:'3D' , img:'3dmgame.ico' },
    { name:'游民星空',     url:'https://www.gamersky.com',      desc:'老牌游戏媒体，游戏资讯、评测和下载资源丰富。',                    category:'entertainment', type:'free',    rating:4.5, icon:'游' , img:'gamersky.ico' },
    { name:'PlayStation',  url:'https://www.playstation.com',   desc:'索尼PS主机官网，PS5游戏资讯和PS Store。',                          category:'entertainment', type:'free',    rating:4.7, icon:'PS' },
    { name:'Nintendo',     url:'https://www.nintendo.com',      desc:'任天堂官网，Switch游戏和eShop商店。',                               category:'entertainment', type:'free',    rating:4.8, icon:'NW' , img:'nintendo.ico' },
    { name:'Xbox',         url:'https://www.xbox.com',          desc:'微软Xbox官网，Game Pass订阅和Xbox游戏商店。',                       category:'entertainment', type:'free',    rating:4.6, icon:'XB' , img:'xbox.ico' },

    // --- 影视资讯/社区 ---
    { name:'豆瓣',         url:'https://www.douban.com',         desc:'中文影视书籍评分社区，看电影前查评分是标配。',                      category:'entertainment', type:'free',    rating:4.8, icon:'豆' , img:'douban.ico' },
    { name:'IMDb',         url:'https://www.imdb.com',          desc:'全球最大电影数据库，英文影视评分和演员信息权威来源。',              category:'entertainment', type:'free',    rating:4.8, icon:'IM' , img:'imdb.ico' },
    { name:'猫眼电影',     url:'https://www.maoyan.com',        desc:'电影购票和票房数据平台，选座购票和影评社区。',                      category:'entertainment', type:'free',    rating:4.5, icon:'眼' , img:'maoyan.ico' },
    { name:'淘票票',       url:'https://www.taopiaopiao.com',   desc:'阿里旗下电影购票平台，选座购票和优惠活动。',                        category:'entertainment', type:'free',    rating:4.4, icon:'票' , img:'taopiaopiao.ico' },
    { name:'知乎',         url:'https://www.zhihu.com',         desc:'中文问答社区，影视分析和深度讨论聚集地。',                          category:'entertainment', type:'free',    rating:4.5, icon:'HU' , img:'zhihu.ico' },
    { name:'什么值得买',   url:'https://www.smzdm.com',         desc:'消费决策平台，电影票优惠和影音设备选购指南。',                      category:'entertainment', type:'free',    rating:4.4, icon:'值' , img:'smzdm.ico' },

    // ============ PPT模板 ============
    { name:'优品PPT',      url:'https://www.ypppt.com',     desc:'国内知名免费PPT模板下载站，模板质量高、分类齐全。',       category:'ppt', type:'free',    rating:4.8, icon:'品', img:'ypppt.png',
      review:'优品PPT是国内免费PPT模板站中的佼佼者。模板设计水平明显高于大多数同类站点，配色和排版都很专业，更新频率也比较稳定。支持直接下载PPTX源文件可二次编辑。缺点是部分精品模板需要关注公众号获取下载链接，体验略繁琐。整体来说，如果你不想花钱买模板，这里是非常好的首选。' },
    { name:'第一PPT',      url:'https://www.1ppt.com',       desc:'老牌PPT资源站，模板数量庞大，涵盖商务、教育、节日等全品类。',  category:'ppt', type:'free',    rating:4.5, icon:'1', img:'1ppt.png',
      review:'第一PPT是资历最老的中文PPT资源站之一，模板总量非常大，几乎能找到各个场景需要的模板。但网站界面比较老旧，广告较多，模板质量参差不齐，需要花时间筛选。适合对设计要求不高、追求"有就行"的场景。作为补充资源库来用比较合适，不建议作为唯一来源。' },
    { name:'51PPT模板',    url:'https://www.51pptmoban.com', desc:'免费PPT模板合集站，课件模板、汇报模板及图表素材。',       category:'ppt', type:'free',    rating:4.3, icon:'5P', img:'51ppt.ico',
      review:'51PPT模板以课件和汇报类模板见长，模板风格偏实用简洁。网站分类还算清晰，但整体设计水平中等偏上，缺乏让人眼前一亮的高质量作品。胜在模板数量不少且完全免费，适合学生党日常作业、课程汇报使用。模板更新速度一般，偶尔会有重复内容。' },
    { name:'PPT宝藏',      url:'https://www.pptbz.com',      desc:'丰富的PPT模板和素材库，支持按颜色、风格、场景筛选。',    category:'ppt', type:'free',    rating:4.2, icon:'宝', img:'pptbz.png',
      review:'PPT宝藏的特色在于素材丰富——除了模板还有图表、背景、图标等配套资源。按颜色和风格筛选的功能比较贴心，方便快速定位需求。不过模板质量整体偏中等，部分模板存在设计过时的问题。网站界面简洁但加载速度一般。适合需要找PPT素材而不只是模板的用户。' },
    { name:'熊猫办公',      url:'https://www.tukuppt.com',     desc:'一站式办公素材平台，海量PPT模板+AI生成PPT，覆盖商务、教育、汇报等全场景。',      category:'ppt', type:'free',    rating:4.5, icon:'熊', img:'tukuppt.png',
      review:'熊猫办公是国内使用率很高的综合办公素材平台，提供海量PPT模板、Word模板、设计素材等。模板质量整体不错，分类细致，覆盖商务、教育、政务等各类场景。内置AI生成PPT功能，输入主题一键生成。部分精品内容需要会员，但免费内容已经相当丰富。界面简洁，搜索方便，是日常找模板的实用选择。' },
    { name:'Canva可画',    url:'https://www.canva.cn',        desc:'在线设计平台，海量PPT模板和在线编辑功能，小白友好。',    category:'ppt', type:'free',    rating:4.9, icon:'C', img:'canva.ico',
      review:'Canva是目前最推荐的设计平台之一。不仅是PPT，它几乎涵盖所有设计场景——海报、简历、社交媒体封面等。在线编辑器操作流畅，模板质量极高，素材库丰富。免费版已经能满足大部分需求，付费版解锁更多高级模板和素材。上手零门槛，是设计小白的最优解。唯一不足是国内版功能相比国际版略有阉割。' },
    { name:'稿定设计',     url:'https://www.gaoding.com',     desc:'一站式在线设计平台，内置丰富PPT模板，支持在线协作。',    category:'ppt', type:'vip',     rating:4.7, icon:'稿', img:'gaoding.png',
      review:'稿定设计是Canva的有力国产竞品，在中文场景下的模板适配性更好。PPT模板风格偏商务和新媒体，在线编辑体验流畅。支持团队协作是亮点功能。免费模板数量不少但优质内容多在会员区。如果你主要做中文内容且不想被Canva的英文环境困扰，稿定是很值得考虑的选择。' },
    { name:'WPS稻壳儿',   url:'https://www.docer.com',        desc:'WPS官方模板平台，海量专业模板，与WPS无缝对接。',        category:'ppt', type:'vip',     rating:4.5, icon:'W', img:'docer.png',
      review:'稻壳儿作为WPS的官方模板市场，最大的优势是与WPS Office无缝集成，一键套用非常方便。模板数量巨大，涵盖面广，质量整体不错。但优质模板大多需要付费（稻壳币或会员），免费模板质量一般。如果你本身就是WPS重度用户，这个平台很方便；但如果不常用WPS，单独为了模板开会员性价比不高。' },
    { name:'OfficePlus',  url:'https://www.officeplus.cn',   desc:'微软官方Office模板站，适合正式商务和学术场合。',         category:'ppt', type:'free',    rating:4.6, icon:'OP', img:'officeplus.png',
      review:'OfficePlus是微软中国官方模板站，模板风格偏正式、专业，非常适合商务汇报、学术演讲、政府公文等严肃场景。模板质量有保障，格式规范。缺点是模板总数偏少，风格选择面较窄，不太适合需要活泼创意设计的场景。完全免费是加分项。追求专业正式感的首选。' },
    { name:'Slidesgo',    url:'https://slidesgo.com',        desc:'国外免费PPT模板站，支持Google Slides和PowerPoint格式。', category:'ppt', type:'free',    rating:4.7, icon:'Sg', img:'slidesgo.png',
      review:'Slidesgo是Freepik旗下的PPT模板站，设计水平很高，模板风格国际化、现代感强。支持下载Google Slides和PowerPoint两种格式，对使用Google Workspace的用户特别友好。模板分类细致，质量稳定。英文模板为主，但搜索"中文"也能找到一些中文适配的。是寻找高质量英文演示模板的绝佳选择。' },
    { name:'Gamma',       url:'https://gamma.app',           desc:'AI驱动的新一代演示工具，快速生成精美幻灯片。',          category:'ppt', type:'free',    rating:4.8, icon:'G', img:'gamma.png',
      review:'Gamma代表了演示工具的未来方向。输入主题或大纲，AI就能生成排版精美的演示文稿，支持嵌入网页、视频等多媒体内容。与传统PPT相比更像是一个可交互的网页式展示。免费版功能已经足够日常使用。适合追求效率和科技感的用户，但如果是需要高度定制化的正式商务场合，传统PPT可能还是更稳妥的选择。' },
    { name:'iSlide',      url:'https://www.islide.cc',        desc:'专业PPT插件工具，海量素材库+AI一键生成PPT。',          category:'ppt', type:'vip',     rating:4.6, icon:'iS', img:'islide.png',
      review:'iSlide是国内最受欢迎的PPT插件之一，直接嵌入PowerPoint中使用，提供海量图标、图示、色彩方案、图片等素材，一键插入非常方便。内置AI生成PPT功能，输入主题即可快速产出。素材库持续更新，分类细致。免费版可体验基础功能，会员解锁全量素材。适合经常做PPT的职场人提升效率和品质。' },
    { name:'AiPPT',       url:'https://www.aippt.cn',         desc:'AI智能生成PPT平台，输入主题一键生成完整演示文稿。',     category:'ppt', type:'free',    rating:4.5, icon:'Ai', img:'aippt.ico',
      review:'AiPPT是专注AI生成PPT的国产品牌，输入主题或文档即可自动生成结构完整的演示文稿。支持多种模板风格切换，生成速度较快。免费体验额度充足。相比Gamma更贴近传统PPT格式，生成的文件可直接用PowerPoint编辑。适合追求效率、不想从零开始设计的用户快速出稿。' },
    { name:'Beautiful.ai', url:'https://www.beautiful.ai',   desc:'AI自动排版PPT工具，输入内容自动生成美观幻灯片。',       category:'ppt', type:'vip',     rating:4.6, icon:'Ba', img:'beautiful.ai.png',
      review:'Beautiful.ai的核心卖点是"智能排版"——你只需输入内容，AI会自动调整版式保持视觉美感，避免了手动调整布局的烦恼。模板设计感强，现代时尚。特别适合制作汇报、提案等需要高颜值的PPT场景。订阅制收费，有免费试用额度。如果你觉得PPT排版太耗时，Beautiful.ai是很好的解决方案。' },
    { name:'Prezi',       url:'https://prezi.com',            desc:'非线性演示工具，缩放动画效果独特，打破传统幻灯片局限。', category:'ppt', type:'free',    rating:4.4, icon:'Pz', img:'prezi.png',
      review:'Prezi是演示工具中的"异类"，不同于传统线性幻灯片，它基于无限画布和缩放动画，能创造出更有动感的演示体验。适合故事性强、需要展示大局和细节关系的内容。免费版功能有限，付费版解锁更多功能。学习曲线略高于传统PPT工具，但做出来的效果往往让观众印象深刻。' },

    { name:'演界网',       url:'https://www.yanj.cn',          desc:'PPT模板和KEYNOTE模板交易平台，精品模板质量高。',           category:'ppt', type:'free',    rating:4.2, icon:'演' },
    { name:'吾道幻灯片',  url:'https://www.woodo.cn',         desc:'在线PPT制作工具，免费模板和AI生成功能。',                  category:'ppt', type:'free',    rating:4.3, icon:'吾' , img:'woodo.ico' },

    { name:'SlideShare',  url:'https://www.slideshare.net',    desc:'全球最大PPT分享平台，浏览和下载优质演示文稿。',           category:'ppt', type:'free',    rating:4.3, icon:'SL' },

    // ============ Word文档 ============

    { name:'Word联盟',    url:'https://www.wordlm.cn',      desc:'Word教程和模板资源站，涵盖合同范本、公文书信。',        category:'word', type:'free',    rating:4.0, icon:'WL', img:'wordlm.png',
      review:'Word联盟的强项在于Word使用教程和实用文档范本，合同模板、公文书信、工作总结等模板比较全面。但网站界面年代感较强，模板设计水平一般，有些模板格式不太规范需要手动调整。适合找参考格式而不是直接套用的场景。Word新手可以在这里学到不少实用技巧。' },

    { name:'石墨文档',    url:'https://shimo.im',            desc:'在线协作文档工具，支持多人实时编辑和团队协作。',        category:'word', type:'free',    rating:4.7, icon:'石', img:'shimo.png',
      review:'石墨文档是国内做得最好的在线协作文档工具之一。多人实时协作体验流畅，版本管理、评论批注、权限控制等功能成熟。文档编辑体验接近本地Word，支持导出多种格式。免费版对个人用户和小团队已经很慷慨。在国内网络环境下比Google Docs稳定可靠。唯一的不足是表格功能相比专业电子表格工具仍有差距。' },
    { name:'腾讯文档',    url:'https://docs.qq.com',         desc:'腾讯出品在线文档，与微信/QQ深度整合。',                category:'word', type:'free',    rating:4.5, icon:'TD', img:'docsqq.png',
      review:'腾讯文档最大的优势是和微信、QQ的深度整合——微信中直接打开、转发、协作非常方便。作为日常文档协作工具完全够用，基础功能免费且不限量。但在高级功能上相比石墨文档略显单薄，文档编辑能力也不如专业工具。如果你和团队日常沟通主要在微信生态内，腾讯文档是最省心的协作选择。' },
    { name:'语雀',        url:'https://www.yuque.com',       desc:'阿里出品知识管理工具，支持文档、表格、思维导图等。',    category:'word', type:'free',    rating:4.6, icon:'雀', img:'yuque.png',
      review:'语雀是阿里系的知识管理产品，在技术团队和个人知识沉淀方面口碑很好。支持文档、表格、思维导图、画板等多种内容形态，知识库组织方式灵活。文档排版效果美观，Markdown支持好。免费版功能较完整。适合做个人笔记、团队知识库、技术文档等。缺点是协作功能不如石墨文档专业，更适合个人和小团队知识管理。' },
    { name:'Notion',      url:'https://www.notion.so',       desc:'全能型笔记和文档工具，支持数据库、看板、日历。',        category:'word', type:'vip',     rating:4.9, icon:'N', img:'notion.png',
      review:'Notion是目前全球最受欢迎的生产力工具之一。它几乎可以承载所有信息组织需求——笔记、文档、数据库、看板、日历、Wiki。Block式编辑理念非常灵活，模板生态极其丰富。免费版支持个人无限使用。缺点是学习曲线较陡，国内访问偶尔不稳定。对于追求高效信息管理和有整理习惯的用户，Notion几乎是不可替代的存在。' },
    { name:'飞书文档',    url:'https://www.feishu.cn',        desc:'字节跳动出品协作平台，文档/表格/多维表格一体化。',      category:'word', type:'free',    rating:4.7, icon:'飞', img:'feishu.png',
      review:'飞书文档是字节跳动推出的新一代协作平台，文档编辑体验非常流畅，支持富文本、表格、思维导图等多种内容形态。飞书多维表格（类似Airtable）是一大亮点，可以搭建轻量级应用。与飞书IM、日历、视频会议深度整合，协作效率高。免费版对个人和小团队功能已经很完善。适合追求现代协作体验的团队。' },
    { name:'Obsidian',    url:'https://obsidian.md',          desc:'本地优先知识管理工具，双向链接笔记，数据完全掌控。',    category:'word', type:'free',    rating:4.8, icon:'Ob', img:'obsidian.png',
      review:'Obsidian是知识管理工具中的"硬核选手"，以本地Markdown文件为核心，双向链接功能能构建个人知识图谱。所有数据存在本地，隐私安全有保障，不依赖任何云服务。插件生态极其丰富，高度可定制。社区活跃。缺点是上手需要时间，对不喜欢折腾的用户不够友好。适合追求数据主权和深度知识管理的用户。' },
    { name:'Typora',      url:'https://typora.io',            desc:'极简Markdown编辑器，所见即所得，写作体验一流。',        category:'word', type:'vip',     rating:4.7, icon:'Ty', img:'typora.png',
      review:'Typora以"所见即所得"的Markdown编辑体验著称，去掉了传统Markdown编辑器的左右分栏预览，直接在编辑区渲染效果，写作流畅度极高。界面极简优雅，专注写作无干扰。支持丰富的导出格式（PDF、Word、HTML等）。曾经免费现已收费（一次性付费约$15），性价比不错。技术写作者和博主的最爱。' },
    { name:'Logseq',      url:'https://logseq.com',           desc:'开源大纲式知识管理工具，双向链接+日志驱动。',           category:'word', type:'free',    rating:4.6, icon:'Ls', img:'logseq.png',
      review:'Logseq是Obsidian的开源竞品，以大纲式（Outliner）编辑和每日日志为核心设计理念。双向链接和图谱功能完善。完全开源免费，数据本地存储。与Obsidian相比更适合"每日笔记+知识积累"的使用方式。社区活跃，插件持续增长。适合喜欢大纲思维和日记驱动知识管理的用户。' },

    { name:'印象笔记',    url:'https://www.yinxiang.com',      desc:'经典笔记管理工具，剪藏网页和跨设备同步。',              category:'word', type:'free',    rating:4.4, icon:'印' , img:'yinxiang.ico' },
    { name:'有道云笔记',  url:'https://note.youdao.com',      desc:'网易出品笔记工具，OCR扫描和语音速记功能强。',           category:'word', type:'free',    rating:4.3, icon:'有' , img:'youdaonote.ico' },
    { name:'Microsoft Office Online', url:'https://www.office.com', desc:'微软Office在线版，Word/Excel/PPT免费在线使用。',  category:'word', type:'free',    rating:4.6, icon:'MS' , img:'office.ico' },
    { name:'WPS Office',  url:'https://www.wps.cn',            desc:'金山办公套件，Word/Excel/PPT国产替代，个人免费。',      category:'word', type:'free',    rating:4.5, icon:'WP', img:'wps_cn.ico' },

    // ============ Excel表格 ============
    { name:'ExcelHome',   url:'https://www.excelhome.net',   desc:'全球最大Excel中文学习网站，教程全面、社区活跃。',       category:'excel', type:'free',    rating:4.8, icon:'EH', img:'excelhome.png',
      review:'ExcelHome是中文世界最专业的Excel学习社区，论坛沉淀了大量高质量教程和问答。从基础函数到高级VBA、Power Query都有覆盖。教程系统性强，很多技术文章写得很深入。社区活跃度高，提问通常能得到及时解答。网站界面虽然传统但信息密度高。无论是Excel入门还是进阶，这里都是首选学习资源。' },
    { name:'WPS表格',     url:'https://www.wps.cn',          desc:'WPS表格在线版，功能丰富且免费。',                      category:'excel', type:'free',    rating:4.4, icon:'WPx', img:'wps.png',
      review:'WPS表格在线版提供了基本的电子表格功能，与本地WPS文件格式完全兼容。对于简单的数据整理、表格制作已经够用，界面也和桌面版一致，上手零成本。但在复杂数据处理、高级函数、大数据量等方面与专业Excel有差距。适合轻量级使用场景，重度Excel用户还是建议用桌面版。' },
    { name:'简道云',      url:'https://www.jiandaoyun.com',  desc:'零代码数据管理平台，可替代Excel做在线表单。',           category:'excel', type:'free',    rating:4.3, icon:'道', img:'jiandaoyun.png',
      review:'简道云的核心价值在于把Excel式的数据管理搬到了线上，增加了表单收集、流程审批、数据看板等功能。适合需要多人协作填写数据、做报表的企业场景。零代码搭建门槛低。免费版功能有限制，个人用户可能感受不到太多优势。如果你需要的是纯粹的电子表格功能，Excel/WPS反而更直接。适合有数据管理需求但不会编程的小团队。' },
    { name:'Airtable',    url:'https://airtable.com',        desc:'灵活的在线表格数据库，支持视图切换和自动化。',           category:'excel', type:'vip',     rating:4.7, icon:'At', img:'airtable.png',
      review:'Airtable是"电子表格+数据库"的完美融合体。用表格的界面操作数据库，同时支持看板、日历、画廊等多种视图切换。自动化工作流功能强大，可以轻松搭建轻量级应用。但免费版记录数有限制（1000条/表），国内访问可能需要梯子。适合项目管理、内容管理、小型CRM等场景。设计美感是其一大亮点。' },
    { name:'方方格子',    url:'http://www.ffcell.com',       desc:'Excel插件工具箱，上百种实用函数和数据处理功能。',       category:'excel', type:'free',    rating:4.2, icon:'方', img:'ffcell.png',
      review:'方方格子是一款功能丰富的Excel插件，提供了批量操作、文本处理、数据清洗等上百种实用工具，能大幅提升日常Excel操作效率。对于经常处理大量数据的办公族来说是不错的效率工具。但插件安装后会影响Excel启动速度，部分高级功能需要付费。官网设计比较老旧，但工具本身确实实用。' },
    { name:'ExcelJet',    url:'https://exceljet.net',        desc:'英文Excel教程站，公式和函数速查表非常实用。',           category:'excel', type:'free',    rating:4.6, icon:'EJ', img:'exceljet.png',
      review:'ExcelJet的公式速查表是其核心价值——当你知道想要什么效果但不知道用什么函数时，这里能快速找到答案。每个函数都有简洁明了的用法说明和实例，查阅效率极高。网站内容为英文，但对有一定英语基础的Excel用户来说完全不是障碍。是全球Excel用户公认的最实用参考站之一。' },
    { name:'腾讯问卷',    url:'https://wj.qq.com',           desc:'免费在线问卷调查工具，数据自动汇总为Excel。',           category:'excel', type:'free',    rating:4.3, icon:'问', img:'wjqq.png',
      review:'腾讯问卷依托微信生态，问卷分发非常方便，支持微信直接填写。模板库丰富，支持逻辑跳转、多题型设置。数据自动汇总并可导出Excel是亮点。免费版已能满足大多数调查需求。缺点是问卷样式定制空间有限，分析功能不如专业调研工具深入。适合快速发起轻量级调查。' },
    { name:'飞书多维表格', url:'https://www.feishu.cn',      desc:'字节跳动出品新型数据管理工具，表格+数据库+自动化。',    category:'excel', type:'free',    rating:4.7, icon:'FT', img:'feishu.png',
      review:'飞书多维表格是Airtable的国产替代品，以表格界面操作数据库，支持视图切换（表格、看板、甘特图、画册等）、自动化工作流、数据关联等高级功能。免费版功能非常慷慨，协作体验流畅。相比Airtable，国内访问稳定且无需梯子。适合项目管理、数据追踪、轻量级CRM等场景。' },
    { name:'Tableau Public', url:'https://public.tableau.com', desc:'数据可视化分析工具，拖拽式制作专业数据报表。',         category:'excel', type:'free',    rating:4.7, icon:'TB', img:'tableau.png',
      review:'Tableau是数据可视化领域的标杆工具，Public版完全免费。拖拽式操作即可创建交互式图表、地图、仪表盘，无需编程。可视化效果美观专业，支持连接多种数据源。作品可以发布到Tableau Public平台分享。学习曲线相比Excel略高，但上手后效率极大提升。数据分析师和商业分析人员的必备工具。' },
    { name:'Smartbi',     url:'https://www.smartbi.com.cn', desc:'国产商业智能BI工具，报表制作和数据分析一体化。',         category:'excel', type:'vip',     rating:4.3, icon:'SB', img:'smartbi.png',
      review:'Smartbi是国内知名的商业智能（BI）工具，支持电子表格式报表、大屏可视化、自助分析等多种场景。对国内数据源（Oracle、MySQL等）的兼容性好，中文支持完善。产品功能全面，适合企业级数据分析需求。相比Tableau学习曲线更缓，更贴近国内Excel用户的使用习惯。价格对个人用户偏高，适合中大型企业采购。' },
    { name:'Numbers',     url:'https://www.apple.com/numbers/', desc:'苹果Mac/iOS电子表格应用，界面精美，模板丰富。',       category:'excel', type:'free',    rating:4.3, icon:'Nm' , img:'numbers.ico' },
    { name:'Google Sheets', url:'https://sheets.google.com',  desc:'谷歌在线表格，实时协作+插件生态，免费使用。',           category:'excel', type:'free',    rating:4.7, icon:'Sh' },
    { name:'Excel自学网',  url:'https://www.excelzx.com',      desc:'Excel学习网站，函数教程和公式大全。',                    category:'excel', type:'free',    rating:4.3, icon:'EZ' },
    { name:'兰色幻想Excel', url:'https://www.excelb.com.cn',   desc:'Excel技巧和函数教程，图文并茂适合入门。',                category:'excel', type:'free',    rating:4.2, icon:'兰' },
    { name:'Power BI',    url:'https://powerbi.microsoft.com', desc:'微软商业智能工具，交互式数据可视化和报表。',             category:'excel', type:'free',    rating:4.7, icon:'PB' },

    // ============ 思维导图 ============
    { name:'XMind',       url:'https://xmind.cn',            desc:'专业思维导图软件，功能强大，支持多种导图结构。',         category:'mindmap', type:'free',    rating:4.8, icon:'XM', img:'xmind.png',
      review:'XMind是思维导图领域的标杆产品。支持思维导图、鱼骨图、组织架构图等多种导图结构，主题样式丰富，配色方案美观。导出格式全面（PDF、图片、Word等）。免费版功能基本够用，订阅版解锁更多高级功能。桌面端性能出色，移动端也能用。无论学生做读书笔记还是职场人做方案梳理，XMind都是最稳妥的选择。' },
    { name:'ProcessOn',   url:'https://www.processon.com',   desc:'在线作图工具，支持思维导图、流程图、UML图等。',        category:'mindmap', type:'free',    rating:4.6, icon:'PO', img:'processon.png',
      review:'ProcessOn最大的优势是"一鱼多吃"——思维导图、流程图、UML、网络拓扑图等都能画。作为在线工具无需安装，团队协作方便。免费版限制创建文件数量（通常9个），对于轻度使用够用但不够宽松。作图体验流畅但相比专业桌面工具在细节上还有差距。适合需要多种图表类型、又不想装多个软件的用户。' },
    { name:'幕布',        url:'https://mubu.com',            desc:'极简大纲笔记工具，一键生成思维导图。',                  category:'mindmap', type:'free',    rating:4.5, icon:'幕', img:'mubu.png',
      review:'幕布的理念是"先大纲，后导图"——用极简的列表方式整理思路，然后一键转换成思维导图视图。这种工作流很适合梳理逻辑框架和读书笔记。界面简洁清爽，上手极快。免费版有节点数量限制（通常300个），重度用户需要升级。如果你喜欢先列大纲再画图的工作方式，幕布是很好的选择。' },
    { name:'亿图图示',    url:'https://www.edrawmax.cn',     desc:'综合图表制作工具，支持260+种图表类型。',               category:'mindmap', type:'vip',     rating:4.4, icon:'亿', img:'edrawmax.png',
      review:'亿图图示的图表类型覆盖面非常广，除了思维导图还支持工程图、网络图、平面设计图等260多种。内置模板和素材库丰富。但功能过多也导致软件相对臃肿，免费版有水印且导出受限。相比专注思维导图的工具，界面稍显复杂。如果你需要的是一个"全能型"图表工具且预算充足，可以考虑。' },
    { name:'GitMind',     url:'https://gitmind.cn',          desc:'免费在线思维导图，支持多人协作和AI生成。',              category:'mindmap', type:'free',    rating:4.5, icon:'GM', img:'gitmind.png',
      review:'GitMind在免费在线思维导图中算是功能比较全面的。支持多人实时协作，AI辅助生成导图是亮点功能——输入主题就能自动生成框架。免费版提供较多文件数量和节点。界面现代，操作体验不错。导出功能也较完善。作为一款免费的在线工具，性价比很高，适合学生和初创团队。' },
    { name:'知犀',        url:'https://www.zhixi.ai',        desc:'国产在线思维导图，界面清爽，操作简单。',               category:'mindmap', type:'free',    rating:4.3, icon:'犀', img:'zhixi.png',
      review:'知犀走的是极简路线，界面干净清爽，没有多余功能干扰。操作上手简单，核心功能齐全。AI辅助功能可以快速生成导图结构。免费版对个人用户比较友好。缺点是模板和主题样式不如XMind等老牌工具丰富，社区生态也相对薄弱。适合追求简单高效、不需要复杂功能的用户。' },
    { name:'BoardMix',    url:'https://boardmix.cn',         desc:'在线白板协作工具，集思维导图、流程图、原型于一体。',     category:'mindmap', type:'free',    rating:4.7, icon:'BM', img:'boardmix.png',
      review:'BoardMix（原名博思白板）是一个功能强大的在线协作白板。除了思维导图，还集成了流程图、便签、原型设计、PPT展示等功能，在一个无限画布上自由组织。协作功能成熟，适合团队头脑风暴和远程会议。免费版提供充足的使用额度。功能多到甚至有些"重"，如果只是单纯画思维导图可能略显大材小用。' },
    { name:'Markmap',     url:'https://markmap.js.org',       desc:'开源免费思维导图工具，Markdown直接生成思维导图。',      category:'mindmap', type:'free',    rating:4.3, icon:'Mm', img:'markmap.ico',
      review:'Markmap的理念非常程序员——用Markdown语法写大纲，自动渲染成思维导图。完全开源免费，无需注册，支持导出交互式HTML。适合习惯用Markdown做笔记的开发者和技术写作者。缺点是没有在线协作功能，UI也比较朴素。如果你是Markdown重度用户，这个工具会让你感到亲切。' },
    { name:'Miro',        url:'https://miro.com',             desc:'在线协作白板，支持思维导图、流程图和团队头脑风暴。',    category:'mindmap', type:'free',    rating:4.8, icon:'Mi', img:'miro.png',
      review:'Miro是全球最受欢迎的在线协作白板之一，在远程团队协作领域口碑极高。提供思维导图、便签、流程图、用户旅程图等多种工具，无限画布自由扩展。实时协作功能成熟，支持视频通话叠加使用。免费版提供3个白板，付费版价格略高但功能完整。是远程会议、产品规划、设计评审的理想协作工具。' },
    { name:'Whimsical',   url:'https://whimsical.com',        desc:'简洁高效在线工作流工具，支持思维导图、流程图、线框图。', category:'mindmap', type:'free',    rating:4.6, icon:'Wh', img:'whimsical.png',
      review:'Whimsical以界面极简和操作快捷著称，是设计师和产品经理的爱用工具。思维导图、流程图、线框图之间切换流畅，操作逻辑统一。生成的图表视觉简洁美观。免费版功能够用，付费版解锁无限文件。相比Miro更轻量专注，适合个人和小团队快速可视化想法，不需要太多自定义。' },

    { name:'Coggle',      url:'https://coggle.it',             desc:'简洁在线思维导图工具，色彩丰富，自动布局。',             category:'mindmap', type:'free',    rating:4.3, icon:'Co' , img:'coggle.ico' },
    { name:'FreeMind',    url:'https://freemind.sourceforge.net', desc:'开源免费桌面思维导图软件，轻量简洁。',                category:'mindmap', type:'free',    rating:4.1, icon:'FM' },

    // ============ 学术科研 ============
    { name:'中国知网',    url:'https://www.cnki.net',        desc:'国内最大中文学术文献数据库，论文检索和下载必备。',       category:'academic', type:'free', rating:4.6, icon:'CN', img:'cnki.png',
      review:'中国知网是国内学术研究的核心基础设施，中文学术论文覆盖面最广。检索系统强大，支持跨库检索、引文分析等高级功能。但费用较高，个人用户下载论文单价不低（通常2-5元/篇）。部分高校购买了机构账号，在校生可免费使用。近年来知网因定价和版权问题争议较多，但对需要查阅中文文献的研究者来说，仍然是绕不开的核心平台。' },
    { name:'Google Scholar', url:'https://scholar.google.com', desc:'全球最大学术搜索引擎，英文文献检索首选。',             category:'academic', type:'free',    rating:4.9, icon:'GS', img:'scholar.png',
      review:'Google Scholar是学术论文检索的黄金标准。覆盖面极广，支持引文追踪、相关文献推荐、作者主页等。搜索算法精准，能快速定位相关论文。完全免费是最大优势。缺点是需要科学上网访问，且部分论文全文仍需通过出版商付费获取。建议配合Sci-Hub等工具使用。做英文文献调研时，先搜Google Scholar基本不会遗漏。' },
    { name:'万方数据',    url:'https://www.wanfangdata.com.cn', desc:'知名学术数据库，涵盖期刊、学位论文、会议论文。',       category:'academic', type:'free', rating:4.4, icon:'万', img:'wanfang.png',
      review:'万方数据是知网之外最重要的中文学术数据库之一，覆盖期刊论文、学位论文、会议论文等多种文献类型。部分文献是知网没有收录的。和知网一样通常需要机构订阅才能免费下载全文。检索功能不如知网强大，但作为补充检索来源很有价值。建议在知网查不到的时候，来万方交叉检索一下。' },
    { name:'维普期刊',    url:'https://www.cqvip.com',       desc:'中文期刊全文数据库，期刊论文资源丰富。',                 category:'academic', type:'free', rating:4.3, icon:'维', img:'cqvip.png',
      review:'维普（CQVIP）是国内最早的中文期刊数据库之一，在期刊论文收录方面有一定特色。部分期刊是知网和万方没有独家收录的。数据库体量相比知网和万方较小，但作为"第三数据库"补充检索价值明显。同样需要机构订阅下载全文。对于写毕业论文的学生，建议知网为主、万方维普为辅进行交叉检索。' },
    { name:'PaperPass',   url:'https://www.paperpass.com',   desc:'老牌论文查重平台，支持本科、硕博论文查重。',             category:'academic', type:'vip',     rating:4.2, icon:'PP', img:'paperpass.png',
      review:'PaperPass是论文查重领域知名度较高的平台，提供初查和精查两种模式。界面操作简单，报告格式清晰。但价格偏高（精查通常几百元），且查重结果与知网官方查重存在差异，学校最终认的是知网结果。建议先用PaperPass做初查和修改，临近定稿再用知网做最终查重。注意不要把论文上传到不可信的小平台，存在被收录的风险。' },
    { name:'Zotero',      url:'https://www.zotero.org',      desc:'免费文献管理工具，自动生成引用和参考文献列表。',         category:'academic', type:'free',    rating:4.8, icon:'Zt', img:'zotero.png',
      review:'Zotero是学术界最受欢迎的免费文献管理工具。浏览器插件一键保存论文元数据和PDF，自动按各种引用格式（APA、MLA、GB/T等）生成参考文献。支持标签分类、全文检索、PDF标注。Word/LibreOffice插件可直接在文档中插入引用和生成参考文献列表。完全免费且开源。学术写作的必备工具，强烈推荐每个写论文的学生安装。' },
    { name:'Connected Papers', url:'https://www.connectedpapers.com', desc:'可视化论文关系图谱，快速找到相关文献。',          category:'academic', type:'free',    rating:4.6, icon:'CP', img:'connectedpapers.png',
      review:'Connected Papers是论文调研的神器。输入一篇论文，它会生成一张可视化的文献关系图谱，直观展示该论文的前驱文献、衍生文献和相关文献。非常适合文献综述阶段快速了解一个研究领域的全貌。免费使用但需要注册，每次生成图谱需要几十秒。全英文界面，但操作简单不影响使用。' },
    { name:'Sci-Hub',     url:'https://sci-hub.ru',          desc:'免费获取付费学术论文PDF的学术工具。',                   category:'academic', type:'free',    rating:4.7, icon:'SH', img:'scihub.png',
      review:'Sci-Hub是学术界的"罗宾汉"，致力于让所有学术论文自由获取。输入DOI或论文URL就能下载到付费论文的PDF全文。对没有机构订阅的个人研究者来说非常实用。但需要注意：域名经常更换（目前可用sci-hub.ru/se/st等），部分新发表论文可能还没有收录。学术伦理上存在争议，但实际使用中是很多研究者的"刚需"。' },
    { name:'DeepL',       url:'https://www.deepl.com',       desc:'AI翻译工具，学术论文翻译比谷歌翻译更准确。',             category:'academic', type:'free',    rating:4.8, icon:'DL', img:'deepl.png',
      review:'DeepL在学术翻译领域公认优于谷歌翻译。对长难句的处理更自然，专业术语翻译更准确，保留原文段落格式的效果好。支持整篇文档翻译且格式保持较好。免费版每日有字数限制但日常使用足够。对于阅读英文论文的中文用户，DeepL几乎是不可或缺的辅助工具。也建议试试DeepL Write进行学术写作润色。' },
    { name:'Semantic Scholar', url:'https://www.semanticscholar.org', desc:'AI驱动的学术搜索引擎，免费获取论文摘要和引用关系。', category:'academic', type:'free', rating:4.7, icon:'SS', img:'semanticscholar.ico',
      review:'Semantic Scholar是微软联合创始人Paul Allen创立的免费学术搜索平台，使用AI技术理解论文语义。可以免费查看大量论文的摘要、引用关系和影响力指标（TLDR摘要功能非常实用）。完全免费，无需机构订阅。搜索质量很高，特别适合快速了解一个研究领域。是Google Scholar的有力补充。' },
    { name:'Mendeley',    url:'https://www.mendeley.com',     desc:'免费文献管理工具+学术社交网络，Elsevier旗下。',        category:'academic', type:'free',    rating:4.6, icon:'Me', img:'mendeley.png',
      review:'Mendeley是Zotero的主要竞品，由Elsevier运营。提供文献管理、PDF阅读标注、引用自动生成等功能。独特之处在于内置学术社交网络，可以关注同领域研究者、发现相关论文。免费版功能完整。相比Zotero，Mendeley的PDF阅读体验更好，社区功能也更强。建议根据个人习惯在Zotero和Mendeley中二选一。' },
    { name:'秘塔写作猫',  url:'https://xiezuocat.com',       desc:'AI写作辅助工具，支持论文润色、语法检查和改写。',         category:'academic', type:'free',    rating:4.4, icon:'秘', img:'xiezuocat.png',
      review:'秘塔写作猫是国产AI写作辅助工具，擅长中文语境下的文本润色、语法纠错和智能改写。对学术论文的措辞优化比较有帮助，能识别常见语病并提供修改建议。免费版有字数额度，基本够日常使用。适合中文论文写作过程中的语言打磨，但建议不要过度依赖AI润色以保持个人写作风格。' },
    { name:'arXiv',       url:'https://arxiv.org',            desc:'全球最大预印本论文平台，物理/数学/CS最新研究首发。',     category:'academic', type:'free',    rating:4.8, icon:'aX', img:'arxiv.png',
      review:'arXiv是全球学术界最重要的预印本服务器，物理学、数学、计算机科学、人工智能等领域的最新研究论文在正式发表前通常先在这里公开。完全免费访问，无需订阅。对于追踪前沿研究动态，arXiv几乎是每天必看的网站。AI领域的重要论文（如GPT、BERT等）都最先在arXiv上发布。研究者必备。' },
    { name:'ResearchGate', url:'https://www.researchgate.net', desc:'科研社交网络，可直接向作者请求论文全文。',              category:'academic', type:'free',    rating:4.5, icon:'RG', img:'researchgate.png',
      review:'ResearchGate是学术界的"LinkedIn"，研究者在这里建立学术主页、分享论文、关注同行。一大亮点是可以直接向论文作者发送全文请求，通常作者会很快回复并提供PDF——这是获取付费论文全文的合法有效途径。平台也有文献推荐和学术讨论功能。完全免费注册使用。对于查阅学术论文的用户很有帮助。' },
    { name:'PubMed',      url:'https://pubmed.ncbi.nlm.nih.gov', desc:'生命科学和医学文献数据库，查医学论文必备。',           category:'academic', type:'free',    rating:4.7, icon:'PM', img:'pubmed.png',
      review:'PubMed是生命科学和生物医学领域最权威的文献数据库，由美国国立医学图书馆维护，收录超过3500万篇文献。完全免费检索，很多论文有PMC免费全文。医学研究、公共卫生、生物学领域的研究者必用平台。检索功能强大，支持MeSH术语、过滤器等高级检索。如果你研究医学、生物、公卫方向，PubMed是最基础的文献来源。' },
    { name:'百度学术',    url:'https://xueshu.baidu.com',      desc:'百度旗下学术搜索平台，中英文文献一站式检索。',           category:'academic', type:'free',    rating:4.4, icon:'XS' , img:'xueshu.ico' },
    { name:'Sci-Hub镜像', url:'https://sci-hub.se',            desc:'Sci-Hub可用镜像站，免费下载付费学术论文全文。',           category:'academic', type:'free',    rating:4.6, icon:'S2' },

    { name:'OpenAlex',    url:'https://openalex.org',          desc:'开放学术数据集，2.5亿+学术论文和作者信息。',             category:'academic', type:'free',    rating:4.5, icon:'OA' , img:'openalex.ico' },
    { name:'LibreTexts',  url:'https://libretexts.org',        desc:'免费开放教科书平台，覆盖各学科大学教材。',               category:'academic', type:'free',    rating:4.3, icon:'LT' },
    { name:'Google Dataset Search', url:'https://datasetsearch.research.google.com', desc:'谷歌数据集搜索引擎，查找开放科研数据。',  category:'academic', type:'free', rating:4.4, icon:'GD' },
    { name:'Papers With Code', url:'https://paperswithcode.com', desc:'AI/ML论文+代码+数据集一站式平台，追踪前沿必备。',      category:'academic', type:'free',    rating:4.7, icon:'PC' },

    // ============ AI工具 ============
    { name:'ChatGPT',     url:'https://chatgpt.com',         desc:'OpenAI出品AI对话助手，文本生成、翻译、写作全能。',       category:'ai', type:'free',    rating:4.9, icon:'CG', img:'chatgpt.png',
      review:'ChatGPT是目前综合能力最强的AI对话助手。GPT-4o模型在推理、写作、编程、翻译等各方面表现均衡且出色。多模态能力支持图片理解、语音对话、文件分析。免费版使用GPT-4o mini，付费版解锁GPT-4o和更多高级功能。生态成熟，插件丰富。缺点是国内需要科学上网，且中文处理能力相比国产大模型略逊。' },
    { name:'DeepSeek',    url:'https://chat.deepseek.com',   desc:'深度求索AI大模型，开源好用，数学和代码能力突出。',       category:'ai', type:'free',    rating:4.8, icon:'DS', img:'deepseek.png',
      review:'DeepSeek是目前国产AI大模型中的翘楚。V3/R1模型在数学推理和代码生成方面表现惊艳，甚至对标GPT-4级别。完全免费使用（含R1推理模型），API价格极低。开源态度值得赞赏。中文理解和生成能力强。缺点是长文本处理和复杂指令遵循方面还有提升空间。综合来看是目前最推荐的免费国产AI工具。' },
    { name:'文心一言',    url:'https://yiyan.baidu.com',     desc:'百度出品AI对话助手，中文理解和生成能力强。',             category:'ai', type:'free',    rating:4.5, icon:'文', img:'yiyan.png',
      review:'文心一言是百度的大模型产品，中文基础能力扎实，在中国文化、历史、法律等中文领域的知识储备丰富。百度搜索生态的加持使其在信息检索类问题上表现不错。免费使用。但在逻辑推理、代码编写等硬实力方面相比DeepSeek和ChatGPT有差距。适合日常中文问答和简单写作辅助。' },
    { name:'Kimi',        url:'https://kimi.moonshot.cn',    desc:'月之暗面出品AI助手，支持长文档阅读和深度分析。',         category:'ai', type:'free',    rating:4.7, icon:'Ki', img:'kimi.png',
      review:'Kimi最突出的特点是超长上下文处理能力——可以一次上传多篇长文档进行阅读和分析，非常适合文献综述、合同分析、长报告摘要等场景。中文理解精准，总结归纳能力出色。免费版已经很强大。缺点是在纯推理和代码能力上不如DeepSeek。如果你需要AI帮你"读长文"，Kimi是目前最好的选择。' },
    { name:'通义千问',    url:'https://tongyi.aliyun.com',    desc:'阿里出品AI大模型，工具调用和多模态能力强。',             category:'ai', type:'free',    rating:4.6, icon:'TQ', img:'tongyi.png',
      review:'通义千问是阿里云的大模型产品，在工具调用和API集成方面优势明显，适合开发者构建AI应用。多模态能力支持图片理解、语音交互等。中文能力扎实，与阿里系产品生态有联动优势。免费额度慷慨。作为日常对话助手使用体验不错，但相比DeepSeek在推理深度上稍逊。推荐给有开发需求的用户。' },
    { name:'智谱清言',    url:'https://chatglm.cn',          desc:'智谱AI出品，基于GLM大模型，综合能力强。',                category:'ai', type:'free',    rating:4.5, icon:'GL', img:'chatglm.png',
      review:'智谱清言基于清华系GLM大模型，学术根基扎实。综合能力均衡，中文对话、写作、代码都有不错表现。内置智能体（Agent）生态，可以通过应用广场获取各种专用助手。免费使用。在学术写作辅助方面有一定优势。整体属于国产AI的第一梯队，但相比DeepSeek在"惊艳感"上稍弱。' },
    { name:'豆包',        url:'https://www.doubao.com',      desc:'字节跳动出品AI助手，写作、翻译、编程多功能。',           category:'ai', type:'free',    rating:4.5, icon:'包', img:'doubao.png',
      review:'豆包是字节跳动推出的AI助手，最大的特色是与字节系产品的深度整合——抖音创作、飞书办公等场景下使用方便。支持语音通话、角色扮演等娱乐化功能。日常问答和写作辅助能力合格。免费使用。但在专业领域（代码、数学）的表现相比DeepSeek有差距。适合已有字节系产品使用习惯的用户。' },
    { name:'Midjourney',  url:'https://www.midjourney.com',  desc:'AI绘画工具，生成高质量艺术图片和设计素材。',             category:'ai', type:'vip',     rating:4.8, icon:'MJ', img:'midjourney.png',
      review:'Midjourney是目前AI绘画领域的绝对标杆。生成的图片在艺术性、审美和细节方面远超同类产品。V6版本支持文生图、图生图、局部重绘等功能，效果惊艳。通过Discord使用，操作有一定学习成本。按月订阅收费（10-60美元）。国内访问需要科学上网。如果你对AI出图质量有高要求，Midjourney是唯一选择。' },
    { name:'讯飞星火',    url:'https://xinghuo.xfyun.cn',    desc:'科大讯飞AI助手，语音识别和文本处理能力出色。',           category:'ai', type:'free',    rating:4.4, icon:'讯', img:'xinghuo.png',
      review:'讯飞星火依托科大讯飞在语音技术领域的深厚积累，语音识别和语音合成能力是突出优势。支持语音输入和语音播报，适合不想打字的用户。文本处理能力合格但不算顶尖。与讯飞办公本的硬件联动是独特卖点。免费版功能完整。在国产AI中属于第二梯队，但语音交互体验是一大亮点。' },
    { name:'Claude',      url:'https://claude.ai',            desc:'Anthropic出品AI助手，长文分析和写作能力业界领先。',      category:'ai', type:'free',    rating:4.8, icon:'Cl', img:'claude.png',
      review:'Claude是ChatGPT最强劲的竞争对手之一，在长文本理解、精细写作和代码生成方面表现优异。支持上传大量文件进行深度分析，200K上下文窗口可以处理超长文档。安全性和诚实度方面口碑好。国内访问需要科学上网。适合需要深度阅读长文、精细写作的用户。目前免费额度比较慷慨。' },
    { name:'Grok',        url:'https://grok.com',             desc:'xAI出品AI助手，实时接入X平台数据，幽默风趣。',          category:'ai', type:'free',    rating:4.6, icon:'Gr', img:'grok.png',
      review:'Grok由Elon Musk的xAI公司推出，最大特色是实时接入X（原Twitter）平台的最新信息，在时事热点和实时资讯方面远超其他AI助手。回答风格幽默大胆，支持图片生成（基于Flux模型）。Grok-3模型在推理和代码能力方面表现强劲。免费版有一定使用额度，Premium解锁完整功能。国内访问需要科学上网。适合追求实时信息和独特对话体验的用户。' },
    { name:'Gemini',      url:'https://gemini.google.com',    desc:'谷歌出品AI助手，多模态能力和搜索整合出色。',           category:'ai', type:'free',    rating:4.7, icon:'Ge', img:'gemini.ico',
      review:'Gemini是谷歌推出的多模态AI助手，原生支持图片、视频、音频理解。与谷歌搜索深度整合，信息获取能力很强。免费版提供多种模型选择。多模态交互体验出色，可以上传图片问问题。国内需要科学上网。适合需要多模态AI能力的用户，以及已有Google生态使用习惯的人。' },
    { name:'通义万相',    url:'https://tongyi.aliyun.com/wanxiang', desc:'阿里出品AI绘画工具，免费生成高质量中文风格图片。',   category:'ai', type:'free',    rating:4.5, icon:'相', img:'wanxiang.png',
      review:'通义万相是阿里推出的免费AI绘画工具，在中文语境和东方风格图片生成方面表现不错。支持文生图、图生图等多种模式。完全免费使用，额度充足。生成速度快，图片质量较好。适合需要快速生成配图、海报素材的中文用户。相比Midjourney在艺术性上有差距，但免费和中文友好是核心优势。' },
    { name:'Sunno AI',    url:'https://suno.com',             desc:'AI音乐生成工具，输入文字即可生成完整歌曲。',             category:'ai', type:'free',    rating:4.6, icon:'Su', img:'suno.ico',
      review:'Sunno AI是目前最流行的AI音乐生成工具，输入歌词或描述就能生成带有人声、编曲的完整歌曲。音乐风格覆盖流行、摇滚、古典、说唱等。免费版每日可生成一定数量。生成质量令人惊艳，尤其在中文歌曲方面表现越来越好。适合内容创作者为视频配乐、尝试音乐创作的用户。' },
    { name:'Perplexity',  url:'https://www.perplexity.ai',   desc:'AI搜索引擎，结合搜索与AI问答，信息查询更精准。',         category:'ai', type:'free',    rating:4.7, icon:'Pp', img:'perplexity.png',
      review:'Perplexity被誉为"AI时代的谷歌"，将传统搜索与AI对话相结合。提问后会直接给出综合多个来源的结构化答案，并标注引用来源方便核实。相比ChatGPT，信息时效性更强，能获取最新资讯。免费版已非常好用，Pro版解锁更强模型。对于查阅事实性信息、研究调研场景，Perplexity的体验远超传统搜索引擎。' },
    { name:'Coze扣子',    url:'https://www.coze.cn',          desc:'字节跳动出品AI应用搭建平台，零代码构建AI智能体。',       category:'ai', type:'free',    rating:4.5, icon:'CZ', img:'coze.png',
      review:'Coze（扣子）是字节跳动推出的AI Bot搭建平台，无需编程即可创建自定义AI助手、工作流自动化和多智能体应用。可以为Bot配置知识库、工具插件、记忆功能等，搭建出专属于自己领域的AI工具。国内版免费额度慷慨。适合想要搭建特定场景AI助手（如客服Bot、学习助手）的用户，无代码门槛低。' },
    { name:'Runway',      url:'https://runwayml.com',         desc:'AI视频生成和编辑工具，Gen-2模型文字生成视频。',           category:'ai', type:'vip',     rating:4.7, icon:'Rw', img:'runway.png',
      review:'Runway是AI视频生成领域的标杆产品，Gen-2/Gen-3模型可以从文字描述或图片生成高质量短视频。还提供视频超分、背景去除、视频延展等专业AI视频编辑功能。产品设计面向创意人员，界面友好。订阅制收费，免费版有有限的生成额度。对于视频创作者、广告人、电影从业者，Runway代表了AI创作的最前沿。' },

    { name:'笔灵AI',      url:'https://ibiling.cn',           desc:'AI写作生成工具，支持PPT大纲、总结报告、营销文案。',      category:'ai', type:'free',    rating:4.3, icon:'笔' , img:'ibiling.ico' },
    { name:'Stable Diffusion', url:'https://stability.ai',    desc:'开源AI绘画模型，本地部署免费使用，社区生态丰富。',         category:'ai', type:'free',    rating:4.7, icon:'SD' , img:'stability.ico' },
    { name:'天工AI',      url:'https://www.tiangong.cn',      desc:'昆仑万维AI助手，搜索增强生成，信息获取能力强。',           category:'ai', type:'free',    rating:4.3, icon:'TG' , img:'tiangong.ico' },
    { name:'Hugging Face', url:'https://huggingface.co',      desc:'全球AI开源社区，模型/数据集/Spaces托管。',                category:'ai', type:'free',    rating:4.8, icon:'HF' },
    { name:'ComfyUI',     url:'https://github.com/comfyanonymous/ComfyUI', desc:'节点式AI绘图工作流，自由组合Stable Diffusion。', category:'ai', type:'free', rating:4.6, icon:'CF', img:'github_com.ico' },

    // ============ 简历求职 ============
    { name:'超级简历',    url:'https://www.wondercv.com',    desc:'专业简历制作平台，HR认可的简历模板和在线编辑。',         category:'resume', type:'free',    rating:4.7, icon:'超', img:'wondercv.png',
      review:'超级简历是国内做简历最专业的平台之一。模板基于HR视角设计，排版简洁专业，信息层次清晰。在线编辑器好用，支持简历评分和AI优化建议。免费版可创建少量简历，基本够用。很多互联网公司HR推荐求职者使用这个平台。唯一不足是高级模板和功能需要付费。如果你的目标是互联网/科技行业，超级简历是首选。' },
    { name:'木及简历',    url:'https://www.mujicv.com',      desc:'极简风格简历模板，Markdown编辑器，适合技术岗。',         category:'resume', type:'free',    rating:4.4, icon:'木', img:'mujicv.png',
      review:'木及简历的特色是支持Markdown语法编辑简历，对程序员和技术人员非常友好。模板走极简路线，信息密度高，版面专业。支持导出PDF格式。免费使用是加分项。缺点是模板选择较少，对非技术岗位来说风格可能过于朴素。适合追求简洁高效的技术岗求职者。' },
    { name:'全民简历',    url:'https://www.qmjianli.com',     desc:'海量免费简历模板，按行业/岗位分类，一键套用。',          category:'resume', type:'free',    rating:4.3, icon:'全', img:'qmjianli.png',
      review:'全民简历胜在模板数量多且完全免费，覆盖各行各业的简历模板。按行业和岗位分类方便查找。但模板质量参差不齐，部分模板设计感一般。作为免费资源库来挑选模板是可行的，但建议筛选后再使用。适合预算有限、需要多种风格对比选择的求职者。' },
    { name:'牛客网',      url:'https://www.nowcoder.com',    desc:'互联网求职刷题平台，笔试面试题库全。',                  category:'resume', type:'free',    rating:4.8, icon:'牛', img:'nowcoder.ico',
      review:'牛客网是互联网求职者的"题库神器"。笔试真题覆盖BAT、字节、美团等头部公司，题库量大且更新及时。面试经验分享板块非常活跃，用户真实面经价值很高。还提供模拟笔试、编程练习等功能。完全免费使用（部分VIP功能可选）。对于想进互联网大厂的同学来说，牛客网几乎是必刷平台。' },
    { name:'Boss直聘',    url:'https://www.zhipin.com',      desc:'直接和HR/BOSS沟通的求职平台，找工作效率高。',            category:'resume', type:'free',    rating:4.6, icon:'Bo', img:'zhipin.png',
      review:'Boss直聘最大的创新是"直接聊"模式——求职者可以直接和招聘方的Boss或HR在线沟通，跳过海投等待的漫长流程。沟通效率确实比传统招聘平台高很多。岗位覆盖面广，反馈速度较快。但平台也存在部分虚假岗位和过度打扰的问题。建议保持警惕，辨别真伪。总体来说是目前国内找效率最高的求职App。' },
    { name:'拉勾网',      url:'https://www.lagou.com',       desc:'互联网行业求职首选，岗位精准，薪资透明。',               category:'resume', type:'free',    rating:4.5, icon:'拉', img:'lagou.png',
      review:'拉勾网专注互联网行业求职，岗位分类精准，薪资范围透明，是互联网人找工作的传统平台。牛客网偏向校招，拉勾则社招岗位更丰富。也有面试经验和技术文章板块。近年来竞争压力下部分功能开始收费。互联网行业深耕多年，品牌认知度高，仍然是IT从业者找工作的主要渠道之一。' },
    { name:'LinkedIn',    url:'https://www.linkedin.com',    desc:'全球最大职业社交平台，外企求职和职业发展必备。',         category:'resume', type:'free',    rating:4.7, icon:'Li', img:'linkedin.png',
      review:'领英是全球职场的"社交媒体"，对于外企求职、海外求职、职业社交来说是不可或缺的平台。完善个人Profile相当于一份在线简历，猎头和HR会主动联系你。全球职位信息丰富，尤其外企岗位多。但在国内使用体验一般（部分功能限制），且中文岗位数量不如Boss直聘和拉勾。如果目标是外企或海外机会，领英是必用工具。' },
    { name:'前程无忧',    url:'https://www.51job.com',       desc:'老牌综合招聘平台，岗位覆盖全行业。',                    category:'resume', type:'free',    rating:4.3, icon:'51', img:'51job.png',
      review:'前程无忧是国内资历最老的招聘平台之一，岗位覆盖传统行业、制造业、国企等全领域。对于非互联网行业的求职者来说，岗位信息比较全面。但平台界面和体验相比Boss直聘略显老旧，沟通效率不如直聊模式。作为补充渠道使用比较合适——主力用Boss直聘，辅以前程无忧扩大覆盖面。' },
    { name:'猎聘',        url:'https://www.liepin.com',      desc:'中高端人才招聘平台，猎头服务专业。',                    category:'resume', type:'free',    rating:4.5, icon:'猎', img:'liepin.png',
      review:'猎聘定位中高端人才市场，猎头资源丰富，适合有3年以上工作经验的职场人跳槽。岗位质量整体偏高，薪资信息透明。面试评价和公司点评功能有助于判断企业真实情况。对应届生和初级岗位覆盖不如Boss直聘。如果你已有一定工作经验，猎聘是寻找优质跳槽机会的好渠道。' },
    { name:'国家大学生就业服务平台', url:'https://24365.ncss.cn', desc:'教育部官方大学生就业平台，校招信息权威。',         category:'resume', type:'free',    rating:4.5, icon:'就', img:'ncss.png',
      review:'国家大学生就业服务平台是教育部主管的官方就业平台，提供权威的校招信息和就业指导。岗位信息真实可靠，很多国企、央企和事业单位会在这里发布校招公告。还提供职业测评、简历指导和政策解读等服务。完全免费无广告。大学生求职建议把这个平台作为信息来源之一，尤其关注国企央企岗位。' },
    { name:'脉脉',        url:'https://maimai.cn',            desc:'职场社交平台，匿名爆料+职场人脉拓展。',                 category:'resume', type:'free',    rating:4.4, icon:'脉', img:'maimai.png',
      review:'脉脉是国内最大的职场社交平台，以"匿名八卦"区闻名，汇聚了大量企业内部吐槽、薪资爆料和面经分享。这些匿名内容对了解公司文化、真实薪资水平很有参考价值。也有正式的职场人脉拓展功能。同时内嵌招聘功能，有猎头和内推机会。作为求职信息参考和职场情报获取的渠道，脉脉价值很高。' },
    { name:'智联招聘',    url:'https://www.zhaopin.com',      desc:'综合求职招聘平台，校招社招全覆盖，投递方便。',           category:'resume', type:'free',    rating:4.3, icon:'联', img:'zhilian.png',
      review:'智联招聘是国内资历仅次于前程无忧的老牌招聘平台，岗位覆盖广，在传统行业和二三线城市有不错的岗位资源。界面升级后体验有所提升，简历投递操作方便。部分功能（如主动投递简历给HR）需要付费。相比Boss直聘的直聊模式，智联更偏传统单向投递。建议与Boss直聘配合使用，覆盖不同类型的岗位资源。' },
    { name:'58同城',      url:'https://www.58.com',            desc:'综合分类信息平台，兼职、蓝领和本地岗位多。',              category:'resume', type:'free',    rating:4.0, icon:'58' , img:'58.ico' },
    { name:'赶集网',      url:'https://www.ganji.com',         desc:'分类信息平台，兼职和本地服务岗位信息多。',                category:'resume', type:'free',    rating:3.9, icon:'赶' , img:'ganji.ico' },
    { name:'智通招聘',    url:'https://www.job5156.com',       desc:'华南地区知名招聘平台，珠三角工厂和管理岗位多。',         category:'resume', type:'free',    rating:4.0, icon:'通' , img:'job5156.ico' },

    { name:'实习僧',      url:'https://www.shixiseng.com',     desc:'大学生实习招聘平台，大厂实习岗位信息集中。',              category:'resume', type:'free',    rating:4.4, icon:'实' , img:'shixiseng.ico' },
    { name:'应届生求职网', url:'https://www.yingjiesheng.com', desc:'应届生求职论坛，校招信息和笔试面试经验。',               category:'resume', type:'free',    rating:4.3, icon:'应' , img:'yingjiesheng.ico' },
    { name:'中国公共招聘网', url:'https://www.cjob.gov.cn',    desc:'人社部官方公共就业服务平台，公益岗位和信息。',          category:'resume', type:'free',    rating:4.3, icon:'招' },

    // ============ 公考考编 ============
    { name:'粉笔',        url:'https://www.fenbi.com',       desc:'公考培训龙头，题库全面，模考系统好用。',                 category:'exam', type:'free',    rating:4.7, icon:'粉', img:'fenbi.png',
      review:'粉笔是公考培训的头部品牌，其App的免费题库功能非常强大。行测各模块分类刷题、申论范文积累、历年真题解析都很完善。每周模考大赛参与度高，能和全国考生比排名。免费版功能已经很丰富，付费课程质量也公认较好。是公考备考过程中最值得用的免费刷题工具，基本是考公人的标配。' },
    { name:'华图在线',    url:'https://www.huatu.com',       desc:'知名公考培训机构，提供题库、课程和报考指导。',           category:'exam', type:'vip',     rating:4.5, icon:'华', img:'huatu.png',
      review:'华图和粉笔、中公并称公考培训"三巨头"。线上题库和课程体系完善，师资力量雄厚。报考指导、岗位分析等服务对新手比较友好。在线模考功能不错。但免费内容相比粉笔App略少，更多资源需要付费购买课程。如果你倾向系统报班学习，华图是可靠的选择。' },
    { name:'中公教育',    url:'https://www.offcn.com',       desc:'大型公职考试培训机构，师资力量雄厚。',                  category:'exam', type:'vip',     rating:4.4, icon:'中', img:'offcn.ico',
      review:'中公教育是公考培训线下网点最多的机构，在很多城市都有面授班。教材和题库体系成熟，师资规模大。但近年来因退费争议等问题口碑有所下滑。线上App的免费功能不如粉笔丰富。如果你的目标是线下集训班，中公的覆盖面广是一大优势。建议多方比较后再做选择。' },
    { name:'QZZN论坛',    url:'https://bbs.qzzn.com',        desc:'公务员考试交流论坛，经验分享和备考资料丰富。',           category:'exam', type:'free',    rating:4.3, icon:'QZ', img:'qzzn.ico',
      review:'QZZN论坛是公考人的"精神家园"，积累了大量考生的真实经验和备考资料。上岸前辈的面经、各地岗位分析、备考策略分享等帖子价值很高。论坛氛围活跃，互助性强。但网站界面老旧，信息检索不太方便。建议作为获取经验分享和心态调节的社区来逛，而不是主要学习平台。' },
    { name:'永岸公考',    url:'https://www.gwyclass.com',    desc:'公务员考试题库和在线视频课程，国考省考真题+行测申论系统学习。',        category:'exam', type:'free',    rating:4.3, icon:'永', img:'gwyclass.png',
      review:'永岸公考是一个专注公务员考试的在线学习平台，提供题库刷题和视频课程双通道。题库覆盖国考、省考历年真题，按专项分类练习，适合系统备考。视频课程有行测各专项和申论讲解，部分内容免费。界面简洁实用，上手无障碍。与粉笔相比用户规模小，但免费内容覆盖面不错，适合需要多样刷题渠道的考生作为补充备考工具。' },
    { name:'公务员考试网', url:'https://www.chinagwy.org',    desc:'公务员考试资讯和真题下载，招考信息更新及时。',           category:'exam', type:'free',    rating:4.1, icon:'考', img:'chinagwy.ico',
      review:'公务员考试网主要提供考试资讯、招考公告和真题下载服务。信息更新比较及时，各地招考信息汇总方便。但网站设计和交互体验一般，功能较为基础。更适合用来查询考试政策和下载资料，不太适合作为主要刷题平台。作为信息查询的辅助渠道有一定价值。' },
    { name:'一起考教师',  url:'https://www.17kjs.com',       desc:'教师招聘考试备考平台，教综刷题和面试指导。',             category:'exam', type:'free',    rating:4.3, icon:'17', img:'17kjs.png',
      review:'一起考教师是教师编制考试备考的垂直平台，覆盖教育综合知识、学科专业知识、面试试讲等环节。题库和课程体系针对性强，教综刷题功能实用。免费内容有一定量，进阶课程需付费。对于准备考教师编的同学来说，是目前专注度最高的备考平台之一。' },
    { name:'高途公考',    url:'https://www.gaotu.cn',         desc:'高途旗下公考品牌，在线直播课程质量高。',                 category:'exam', type:'vip',     rating:4.4, icon:'高', img:'gaotu.png',
      review:'高途公考背靠高途集团，以在线直播授课为核心特色，老师互动性强，课堂氛围好。课程体系覆盖国考、省考、事业编等各类考试。名师阵容有一定实力。但价格偏高，免费内容相对有限。适合喜欢直播互动学习、有一定预算的考生。' },
    { name:'事业单位考试网', url:'https://www.sydw.cn',      desc:'事业编考试资讯和题库，招考公告汇总及时。',               category:'exam', type:'free',    rating:4.2, icon:'事', img:'sydw.png',
      review:'事业单位考试网专注于事业编考试信息汇总，招考公告、考试时间、报考指南等内容更新及时。对于想考事业编的同学来说，是获取各地招考信息的便捷入口。题库和备考资料也有一定量。界面设计简单但实用，信息检索比较方便。作为考编信息获取的补充平台，值得关注。' },
    { name:'公考加油站',    url:'https://www.gongkaojiayou.com', desc:'公考信息聚合平台，国考省考招考公告全国汇总。',           category:'exam', type:'free',    rating:4.3, icon:'公', img:'gkjy.png',
      review:'公考加油站以招考信息汇总为核心特色，将全国各省市的国考、省考、事业编招考公告集中展示，并提供报考岗位分析和招考日历功能。对于需要同时关注多个省份招考的考生非常实用。免费使用。功能专注于信息聚合，不做课程培训，定位清晰。建议作为了解各地招考动态的信息门户来使用。' },

    // --- 官方考试报名入口 ---
    { name:'国家公务员局',     url:'https://www.scs.gov.cn',            desc:'国家公务员考试官方报名入口，国考公告、职位表、报名缴费。',     category:'exam', type:'free',    rating:5.0, icon:'国' },
    { name:'中国人事考试网',   url:'https://www.cpta.com.cn',           desc:'国家级专业技术人员资格考试平台，各类职业资格考试报名。',        category:'exam', type:'free',    rating:4.9, icon:'人' },
    { name:'国家政务服务平台', url:'https://www.gjzwfw.gov.cn',         desc:'全国一体化政务服务平台，考试成绩查询和证书查验。',              category:'exam', type:'free',    rating:4.8, icon:'政' , img:'gjzwfw_exam.ico' },
    { name:'学信网',           url:'https://www.chsi.com.cn',           desc:'教育部学历查询唯一官网，学历认证、考研报名入口。',              category:'exam', type:'free',    rating:4.9, icon:'学' , img:'chsi.ico' },
    { name:'中国研究生招生网', url:'https://yz.chsi.com.cn',            desc:'考研官方报名入口（研招网），院校信息和调剂系统。',              category:'exam', type:'free',    rating:4.9, icon:'研' , img:'yzchsi.ico' },
    { name:'中国教育考试网',   url:'https://www.neea.edu.cn',           desc:'教育部考试中心官网，四六级、教师资格证、计算机等级考试。',      category:'exam', type:'free',    rating:4.8, icon:'教' , img:'neea.ico' },
    { name:'中小学教师资格网', url:'https://ntce.neea.edu.cn',          desc:'教师资格证考试报名和成绩查询官方入口。',                        category:'exam', type:'free',    rating:4.8, icon:'师' , img:'ntce.ico' },
    { name:'普通话水平测试',   url:'https://www.cltt.org',              desc:'普通话水平测试成绩查询和报名入口。',                            category:'exam', type:'free',    rating:4.5, icon:'普' , img:'cltt.ico' },
    { name:'国家法律职业资格考试', url:'https://sfb.mcneea.com',        desc:'法考（司法考试）官方报名和成绩查询入口。',                       category:'exam', type:'free',    rating:4.8, icon:'法' },
    { name:'注册会计师协会',   url:'https://www.cicpa.org.cn',          desc:'CPA注册会计师考试官方报名和信息发布。',                          category:'exam', type:'free',    rating:4.7, icon:'会' , img:'cicpa.ico' },

    // --- 各省人事考试网 ---
    { name:'北京人事考试网', url:'https://www.bjpta.gov.cn',         desc:'北京市各级机关公务员考试和事业单位招聘。',                     category:'exam', type:'free',    rating:4.5, icon:'京' },
    { name:'上海人事考试网', url:'https://www.shpta.com',            desc:'上海市公务员考试和专业技术人员资格考试。',                     category:'exam', type:'free',    rating:4.5, icon:'沪' },
    { name:'广东人事考试网', url:'https://rsks.gd.gov.cn',           desc:'广东省公务员考试和职业资格考试报名入口。',                     category:'exam', type:'free',    rating:4.5, icon:'粤' },
    { name:'浙江人事考试网', url:'https://www.zjks.gov.cn',          desc:'浙江省公务员考试和各类职业资格考试。',                         category:'exam', type:'free',    rating:4.5, icon:'浙' },
    { name:'江苏人事考试网', url:'https://jsrlzyshbzj.jiangsu.gov.cn/col/col57253', desc:'江苏省公务员和专业技术人员考试。',                  category:'exam', type:'free',    rating:4.5, icon:'苏' },
    { name:'山东人事考试网', url:'https://hrss.shandong.gov.cn/rsks', desc:'山东省公务员和省属事业单位考试。',                            category:'exam', type:'free',    rating:4.5, icon:'鲁' },
    { name:'四川人事考试网', url:'https://www.scpta.gov.cn',          desc:'四川省公务员考试和各类职业资格考试。',                          category:'exam', type:'free',    rating:4.5, icon:'川' },
    { name:'河南人事考试网', url:'https://www.hnrsks.com',           desc:'河南省公务员考试和专业技术人员资格考试。',                      category:'exam', type:'free',    rating:4.5, icon:'豫' },
    { name:'湖北人事考试网', url:'https://www.hbsrsksy.cn',          desc:'湖北省公务员和事业单位考试报名入口。',                         category:'exam', type:'free',    rating:4.5, icon:'鄂' },
    { name:'湖南人事考试网', url:'https://www.hunanpea.com',         desc:'湖南省公务员考试和各类职业资格考试。',                          category:'exam', type:'free',    rating:4.5, icon:'湘' },
    { name:'福建人事考试网', url:'https://www.fjpta.com',            desc:'福建省公务员考试和专业技术人员资格考试。',                      category:'exam', type:'free',    rating:4.5, icon:'闽' , img:'fjpta.ico' },
    { name:'安徽人事考试网', url:'https://www.apta.gov.cn',          desc:'安徽省公务员考试和各类职业资格考试。',                          category:'exam', type:'free',    rating:4.5, icon:'皖' },
    { name:'河北人事考试网', url:'https://www.hebpta.com.cn',        desc:'河北省公务员考试和各类职业资格考试。',                          category:'exam', type:'free',    rating:4.5, icon:'冀' , img:'hebpta.ico' },
    { name:'辽宁人事考试网', url:'https://www.lnrsks.com',           desc:'辽宁省公务员和事业单位考试报名入口。',                          category:'exam', type:'free',    rating:4.5, icon:'辽' },
    { name:'陕西人事考试网', url:'https://www.sxrsks.cn',            desc:'陕西省公务员和各类职业资格考试。',                              category:'exam', type:'free',    rating:4.5, icon:'陕' },
    { name:'重庆人事考试网', url:'https://rlsbj.cq.gov.cn/ywzl/rsks', desc:'重庆市公务员和专业技术人员资格考试。',                        category:'exam', type:'free',    rating:4.5, icon:'渝' },

    // --- 备考辅助 ---
    { name:'粉笔题库',       url:'https://www.fenbi.com/spider/tiku', desc:'粉笔免费在线题库，行测申论分类刷题。',                   category:'exam', type:'free',    rating:4.7, icon:'题', img:'fenbi_com.ico' },
    { name:'题拍拍',         url:'https://www.tippai.com',           desc:'拍照搜题工具，公考行测题目快速搜索答案解析。',                 category:'exam', type:'free',    rating:4.2, icon:'拍' },

    { name:'半月谈',         url:'https://www.banyuetan.org',        desc:'党刊新媒体，申论素材和时事政治热点必备。',                     category:'exam', type:'free',    rating:4.5, icon:'半' },
    { name:'学习强国',       url:'https://www.xuexi.cn',             desc:'时政学习和知识竞赛平台，公考常识积累。',                       category:'exam', type:'free',    rating:4.6, icon:'强' , img:'xuexi.ico' },
    { name:'人民日报',       url:'https://www.people.com.cn',        desc:'中央级党报，申论范文和时政热点权威来源。',                     category:'exam', type:'free',    rating:4.7, icon:'报', img:'people_com_cn.ico' },
    { name:'公考雷达',       url:'https://www.gongkaoleida.com',     desc:'智能选岗工具，根据条件匹配适合的公务员岗位。',                 category:'exam', type:'free',    rating:4.4, icon:'雷', img:'gongkaoleida_com.ico' },
    { name:'华图题库',       url:'https://tiku.huatu.com',           desc:'华图在线免费题库，历年真题和模拟练习。',                       category:'exam', type:'free',    rating:4.3, icon:'图', img:'tiku_huatu_com.ico' },
    { name:'中公题库',       url:'https://www.offcn.com/tiku',       desc:'中公在线题库，覆盖国考省考事业编各科。',                       category:'exam', type:'free',    rating:4.2, icon:'库', img:'offcn_com.ico' },
    { name:'时事一点通',     url:'https://www.ssydt.com',            desc:'时政热点汇总平台，公考常识必看。',                             category:'exam', type:'free',    rating:4.3, icon:'时' , img:'ssydt.ico' },

    // --- 其他考证 ---
    { name:'软考办官网',     url:'https://www.ruankao.org.cn',       desc:'计算机技术与软件专业技术资格考试官方入口。',                   category:'exam', type:'free',    rating:4.6, icon:'软' , img:'ruankao.ico' },

    { name:'医学考试网',     url:'https://www.21wecan.com',          desc:'国家医学考试中心，执业医师/药师/护士考试。',                    category:'exam', type:'free',    rating:4.5, icon:'医' , img:'21wecan.ico' },
    { name:'建造师考试网',   url:'https://www.coc.gov.cn',           desc:'一级/二级建造师考试报名和成绩查询。',                            category:'exam', type:'free',    rating:4.4, icon:'建' },
    { name:'银行从业资格',   url:'https://www.ccbp.org.cn',          desc:'中国银行业从业人员资格认证考试官方入口。',                      category:'exam', type:'free',    rating:4.3, icon:'银' },
    { name:'证券从业资格',   url:'https://www.sac.net.cn',           desc:'证券业从业人员资格考试报名和信息发布。',                        category:'exam', type:'free',    rating:4.3, icon:'证' },
    { name:'会计资格评价网', url:'https://kzp.mof.gov.cn',           desc:'初级/中级/高级会计职称考试报名入口。',                          category:'exam', type:'free',    rating:4.5, icon:'评' },
    { name:'托福官网',       url:'https://toefl.neea.cn',            desc:'TOEFL托福考试中国区报名和成绩查询。',                           category:'exam', type:'free',    rating:4.6, icon:'托' , img:'toefl.ico' },
    { name:'雅思官网',       url:'https://ielts.neea.cn',            desc:'IELTS雅思考试中国区报名和成绩查询。',                           category:'exam', type:'free',    rating:4.6, icon:'雅' , img:'ielts.ico' },

    // ============ 编程学习 ============
    { name:'GitHub',      url:'https://github.com',          desc:'全球最大代码托管平台，开源项目和代码学习资源丰富。',      category:'coding', type:'free',    rating:4.9, icon:'GH', img:'github.png',
      review:'GitHub是全球开发者的"基础设施"，几乎所有知名开源项目都托管在这里。对于学习者来说，阅读优秀项目的源代码、参与开源贡献、使用别人的开源库是成长的重要途径。免费创建公开和私有仓库，协作功能强大。近年来被微软收购后商业化和Copilot AI功能越来越重，但核心的代码托管和开源协作功能依然免费且好用。程序员必备。' },
    { name:'LeetCode',    url:'https://leetcode.cn',         desc:'程序员刷题必备平台，算法面试题库全面。',                 category:'coding', type:'free',    rating:4.8, icon:'LC', img:'leetcode.png',
      review:'LeetCode是算法刷题的"标准答案"。题库覆盖全面，从简单到困难分级清晰，每道题都有高质量题解和讨论区。支持多种编程语言。每周竞赛活跃。国内版界面中文化，体验友好。免费题库已超过2000道，足够准备大部分技术面试。如果目标是互联网大厂的技术岗，系统刷LeetCode基本是标配。' },
    { name:'菜鸟教程',    url:'https://www.runoob.com',      desc:'中文编程入门教程站，覆盖主流编程语言和框架。',           category:'coding', type:'free',    rating:4.7, icon:'菜', img:'runoob.png',
      review:'菜鸟教程是中文编程入门的最佳免费资源。"语言小程"式的教程风格简洁直白，每个知识点都有可运行的代码示例。覆盖HTML/CSS/JS、Python、Java、SQL等几十种语言和框架。界面虽简陋但信息密度高。适合零基础入门者快速上手，但内容深度有限，适合作为入门参考而不是进阶教程。' },
    { name:'MDN Web Docs', url:'https://developer.mozilla.org/zh-CN/', desc:'前端开发权威文档，HTML/CSS/JS参考资料。',      category:'coding', type:'free',    rating:4.9, icon:'MD', img:'mdn.png',
      review:'MDN是前端开发的"圣经"，由Mozilla维护。HTML、CSS、JavaScript的每个属性、方法、事件都有详细文档和兼容性说明。中文版翻译质量高。遇到前端问题先查MDN是每个前端开发者的好习惯。教程部分（学习区）也系统性好，适合从入门到进阶。完全免费无广告。Web开发的权威参考，没有之一。' },
    { name:'Stack Overflow', url:'https://stackoverflow.com', desc:'全球最大编程问答社区，遇到bug先搜这里。',               category:'coding', type:'free',    rating:4.8, icon:'SO', img:'stackoverflow.png',
      review:'Stack Overflow是全球程序员最大的知识库。几乎你遇到的任何编程问题，前人都已经在这里问过并得到了优质回答。高质量答案的投票排序机制确保好答案置顶。全英文内容，但用英文关键词搜索基本能找到答案。建议养成习惯：遇到报错信息直接复制到Google搜索"site:stackoverflow.com"。' },
    { name:'W3Schools',   url:'https://www.w3school.com.cn', desc:'Web技术在线教程，HTML/CSS/JS入门首选。',                category:'coding', type:'free',    rating:4.5, icon:'W3', img:'w3school.png',
      review:'W3Schools和菜鸟教程定位类似，都是中文Web技术入门教程。其特色是每个教程后面都有在线练习题，可以边学边练，加深理解。教程结构清晰，适合系统学习。但内容更新速度不如MDN，部分前沿技术覆盖滞后。建议入门阶段结合W3Schools和菜鸟教程一起学，有深度问题再查MDN。' },
    { name:'CodePen',     url:'https://codepen.io',          desc:'在线前端代码编辑器，实时预览效果。',                     category:'coding', type:'free',    rating:4.6, icon:'CPe', img:'codepen.png',
      review:'CodePen是前端开发者的"游乐场"。在线编写HTML/CSS/JS并实时预览效果，无需任何环境搭建。社区中有大量创意作品和动效代码可以参考学习。Fork别人的Pen进行改造也是很好的学习方式。免费版功能完整。适合前端学习者快速实验、展示作品，以及寻找创意灵感。' },

    { name:'慕课网',      url:'https://www.imooc.com',        desc:'IT技能学习平台，实战视频课程覆盖前后端。',               category:'coding', type:'free',    rating:4.6, icon:'慕', img:'imooc.png',
      review:'慕课网是国内最知名的IT实战学习平台之一，课程以视频+实操为主，覆盖前端、后端、移动端、人工智能等方向。课程质量整体不错，很多由一线大厂工程师录制。免费课程有一定量但精品多需付费。路径式学习体系对入门者友好。适合中文环境下系统学习编程技能。' },
    { name:'Juejin',      url:'https://juejin.cn',            desc:'稀土掘金技术社区，前端后端开发文章质量高。',              category:'coding', type:'free',    rating:4.6, icon:'掘', img:'juejin.png',
      review:'掘金是目前中文技术社区中文章质量最高的平台之一。前端开发者的聚集地，后端、移动端、AI等方向也很活跃。技术文章深度好，很多大厂工程师分享实战经验。排版舒适，阅读体验佳。支持收藏、评论和关注。找技术方案、解决Bug、学习新技术时，掘金是首选搜索阵地之一。' },
    { name:'freeCodeCamp', url:'https://www.freecodecamp.org/chinese/', desc:'完全免费的编程学习平台，从零到就业的系统课程。', category:'coding', type:'free',    rating:4.8, icon:'fC', img:'freecodecamp.png',
      review:'freeCodeCamp是全球最大的免费编程学习平台，提供从HTML/CSS基础到JavaScript全栈、数据科学、机器学习的完整课程体系。每个课程都有大量动手练习，完成项目即可获得证书。完全免费无隐藏收费。中文版翻译完整。自学编程的最佳起点之一，特别适合零基础入门者。' },
    { name:'Replit',      url:'https://replit.com',           desc:'在线云端IDE，无需配置环境即可在浏览器运行代码。',       category:'coding', type:'free',    rating:4.6, icon:'Re', img:'replit.png',
      review:'Replit是云端开发环境（Cloud IDE）的标杆，支持70+编程语言，打开浏览器即可直接写代码并运行，无需任何本地环境配置。内置版本控制、多人协作、一键部署等功能。特别适合编程初学者（不用折腾环境）和需要快速原型开发的场景。免费版功能够用，付费版提升性能和资源。' },
    { name:'Roadmap.sh',  url:'https://roadmap.sh',           desc:'程序员学习路线图，清晰规划各技术方向学习路径。',         category:'coding', type:'free',    rating:4.8, icon:'Rm', img:'roadmap.png',
      review:'Roadmap.sh是程序员学习规划的"北极星"。对每个技术方向（前端、后端、DevOps、Android等）都提供了清晰的学习路线图，明确告诉你应该按什么顺序学什么。图表可交互，每个节点都有学习资源推荐。完全免费开源。对于刚入门、不知道该学什么的新手来说，roadmap.sh是最好的指路工具。' },
    { name:'Vercel',      url:'https://vercel.com',           desc:'前端应用云部署平台，Next.js官方托管，一键部署极快。',    category:'coding', type:'free',    rating:4.8, icon:'Vc', img:'vercel.png',
      review:'Vercel是前端和全栈应用部署的首选平台，特别是对Next.js项目提供原生支持。GitHub仓库一键连接，Push代码自动部署，CDN覆盖全球。免费版对个人项目已经非常慷慨。预览部署功能对开发调试很方便。Serverless Function支持让静态网站也能运行后端逻辑。前端开发者的部署"首选"，配合Next.js几乎是行业标准选择。' },
    { name:'Can I Use',   url:'https://caniuse.com',          desc:'浏览器兼容性查询工具，前端开发必备参考。',               category:'coding', type:'free',    rating:4.5, icon:'CI', img:'caniuse.ico',
      review:'Can I Use是前端开发中查询CSS/JS/HTML特性浏览器兼容性的必备工具。输入任意Web API或CSS属性，就能看到各浏览器的支持情况，数据更新及时。界面简洁直观，绿色表示支持、红色表示不支持。做前端开发时遇到兼容性问题，第一时间查Can I Use是标准做法。完全免费。' },

    // --- 编程语言官网 ---
    { name:'Python官网',     url:'https://www.python.org',         desc:'Python编程语言官网，下载安装和官方文档。',                 category:'coding', type:'free',    rating:4.9, icon:'Py', img:'python.png' },
    { name:'Java官网',       url:'https://www.java.com',           desc:'Java运行环境下载，JDK和JRE官方入口。',                     category:'coding', type:'free',    rating:4.7, icon:'Ja', img:'java.png' },
    { name:'JavaScript MDN', url:'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript', desc:'JavaScript权威文档，ES6+语法参考。', category:'coding', type:'free', rating:4.9, icon:'JS', img:'javascript.png' },
    { name:'TypeScript官网', url:'https://www.typescriptlang.org', desc:'TypeScript语言官网，类型安全的JavaScript超集。',           category:'coding', type:'free',    rating:4.8, icon:'TS', img:'typescript.png' },
    { name:'Go语言官网',     url:'https://go.dev',                 desc:'Google出品编程语言，官网提供文档、教程和Playground。',       category:'coding', type:'free',    rating:4.7, icon:'Go', img:'go.png' },
    { name:'Rust官网',       url:'https://www.rust-lang.org',      desc:'系统编程语言，官网提供文档、Cargo包管理和学习资源。',        category:'coding', type:'free',    rating:4.7, icon:'Rs', img:'rust.png' },
    { name:'PHP官网',        url:'https://www.php.net',            desc:'PHP语言官网，下载安装和函数文档参考。',                       category:'coding', type:'free',    rating:4.5, icon:'PH', img:'php.png' },
    { name:'Ruby官网',       url:'https://www.ruby-lang.org',      desc:'Ruby语言官网，优雅的面向对象脚本语言。',                      category:'coding', type:'free',    rating:4.4, icon:'Rb', img:'ruby.png' },
    { name:'C++参考手册',   url:'https://zh.cppreference.com',     desc:'C/C++标准库权威参考，函数和类文档详尽。',                     category:'coding', type:'free',    rating:4.8, icon:'C+', img:'cppreference.png' },
    { name:'Swift官网',      url:'https://www.swift.org',          desc:'Apple开源编程语言，iOS/macOS开发首选。',                     category:'coding', type:'free',    rating:4.7, icon:'Sw', img:'swift.png' },
    { name:'Kotlin官网',     url:'https://kotlinlang.org',         desc:'JetBrains出品，Android开发官方推荐语言。',                   category:'coding', type:'free',    rating:4.6, icon:'Kt', img:'kotlin.png' },
    { name:'Dart官网',       url:'https://dart.dev',               desc:'Google出品编程语言，Flutter框架的基础语言。',                  category:'coding', type:'free',    rating:4.5, icon:'Da', img:'dart.png' },

    // --- 开发工具/IDE ---
    { name:'VS Code',        url:'https://code.visualstudio.com',  desc:'微软出品代码编辑器，插件生态最强，程序员首选IDE。',            category:'coding', type:'free',    rating:4.9, icon:'VS', img:'vscode.png' },
    { name:'IntelliJ IDEA',  url:'https://www.jetbrains.com/idea', desc:'JetBrains旗舰IDE，Java/Kotlin开发最强工具。',               category:'coding', type:'free',    rating:4.8, icon:'IJ', img:'idea.png' },
    { name:'PyCharm',        url:'https://www.jetbrains.com/pycharm', desc:'JetBrains出品Python IDE，智能代码补全和调试。',            category:'coding', type:'free',    rating:4.8, icon:'PCm', img:'pycharm.png' },
    { name:'WebStorm',       url:'https://www.jetbrains.com/webstorm', desc:'JetBrains前端IDE，JavaScript/TypeScript开发利器。',       category:'coding', type:'free',    rating:4.7, icon:'WS', img:'webstorm.png' },
    { name:'Sublime Text',   url:'https://www.sublimetext.com',    desc:'极速代码编辑器，启动快，界面简洁优雅。',                      category:'coding', type:'vip',     rating:4.5, icon:'ST', img:'sublimetext.png' },
    { name:'Vim官网',        url:'https://www.vim.org',            desc:'经典终端编辑器，高效编辑的终极武器。',                         category:'coding', type:'free',    rating:4.6, icon:'Vi', img:'vim.png' },
    { name:'Cursor',         url:'https://cursor.sh',              desc:'AI代码编辑器，基于VS Code深度集成AI编程助手。',                category:'coding', type:'free',    rating:4.7, icon:'Cu', img:'cursor.png' },
    { name:'Windsurf',       url:'https://codeium.com/windsurf',   desc:'Codeium出品AI编辑器，AI辅助编码体验流畅。',                    category:'coding', type:'free',    rating:4.5, icon:'Wi', img:'windsurf.png' },
    { name:'Xcode',          url:'https://developer.apple.com/xcode/', desc:'Apple官方IDE，iOS/macOS开发必备工具。',                   category:'coding', type:'free',    rating:4.7, icon:'XC', img:'xcode.png' },
    { name:'Android Studio', url:'https://developer.android.com/studio', desc:'Google官方Android开发IDE，模拟器和布局编辑器齐全。',      category:'coding', type:'free',    rating:4.7, icon:'AS', img:'androidstudio.png' },
    { name:'DevDocs',        url:'https://devdocs.io',             desc:'聚合API文档浏览器，汇集各语言/框架的官方文档。',               category:'coding', type:'free',    rating:4.6, icon:'DD', img:'devdocs.png' },

    // --- 版本控制/协作 ---
    { name:'Git官网',        url:'https://git-scm.com',            desc:'分布式版本控制系统官网，下载安装和学习资料。',                  category:'coding', type:'free',    rating:4.9, icon:'Gi', img:'git.png' },
    { name:'Gitee',          url:'https://gitee.com',              desc:'国内代码托管平台，Gitee Pages和GVP开源项目库。',              category:'coding', type:'free',    rating:4.6, icon:'GE', img:'gitee.png' },
    { name:'GitLab',         url:'https://gitlab.com',             desc:'开源代码托管平台，CI/CD集成，企业级DevOps方案。',              category:'coding', type:'free',    rating:4.7, icon:'GLb', img:'gitlab.png' },
    { name:'Bitbucket',      url:'https://bitbucket.org',          desc:'Atlassian旗下Git托管平台，小团队免费私有仓库。',               category:'coding', type:'free',    rating:4.4, icon:'BB', img:'bitbucket.png' },

    // --- 包管理器/构建工具 ---
    { name:'npm官网',        url:'https://www.npmjs.com',          desc:'Node.js默认包管理器，全球最大JS包注册表。',                   category:'coding', type:'free',    rating:4.8, icon:'np', img:'npm.png' },
    { name:'Node.js官网',    url:'https://nodejs.org',             desc:'JavaScript运行时环境，前端全栈开发必备。',                     category:'coding', type:'free',    rating:4.9, icon:'Nj', img:'nodejs.png' },
    { name:'pnpm',           url:'https://pnpm.io',                desc:'高性能Node包管理器，节省磁盘空间，速度快。',                   category:'coding', type:'free',    rating:4.6, icon:'pn', img:'pnpm.png' },
    { name:'Docker Hub',     url:'https://hub.docker.com',         desc:'Docker容器镜像仓库，开发环境容器化部署标准。',                  category:'coding', type:'free',    rating:4.8, icon:'Dk', img:'docker.png' },
    { name:'Maven仓库',      url:'https://mvnrepository.com',      desc:'Java/Maven依赖搜索，查找和下载Jar包。',                       category:'coding', type:'free',    rating:4.5, icon:'Mv', img:'maven.png' },
    { name:'PyPI',           url:'https://pypi.org',               desc:'Python包索引，pip install的包来源。',                          category:'coding', type:'free',    rating:4.7, icon:'PI' , img:'pypi.ico' },
    { name:'Webpack',        url:'https://webpack.js.org',         desc:'前端模块打包工具，大型项目构建标配。',                          category:'coding', type:'free',    rating:4.5, icon:'Wp', img:'webpack.png' },
    { name:'Vite',           url:'https://vitejs.dev',             desc:'下一代前端构建工具，极速冷启动和热更新。',                      category:'coding', type:'free',    rating:4.8, icon:'Vt', img:'vite.png' },
    { name:'ESLint',         url:'https://eslint.org',             desc:'JavaScript代码检查工具，团队代码风格统一利器。',                category:'coding', type:'free',    rating:4.5, icon:'ES' , img:'eslint.ico' },

    // --- API/数据库/后端 ---
    { name:'Postman',        url:'https://www.postman.com',        desc:'API调试和测试工具，前后端接口联调必备。',                      category:'coding', type:'free',    rating:4.8, icon:'Po', img:'postman.png' },
    { name:'Insomnia',       url:'https://insomnia.rest',          desc:'开源API调试工具，轻量高效，GraphQL支持好。',                  category:'coding', type:'free',    rating:4.5, icon:'In', img:'insomnia.png' },
    { name:'MongoDB',        url:'https://www.mongodb.com',        desc:'NoSQL文档数据库官网，下载MongoDB和Atlas云服务。',              category:'coding', type:'free',    rating:4.7, icon:'Mo', img:'mongodb.png' },
    { name:'MySQL官网',      url:'https://www.mysql.com',          desc:'最流行的开源关系数据库，LAMP技术栈标配。',                      category:'coding', type:'free',    rating:4.7, icon:'MY', img:'mysql.png' },
    { name:'Redis官网',      url:'https://redis.io',               desc:'高性能键值缓存数据库，后端缓存和消息队列首选。',                category:'coding', type:'free',    rating:4.7, icon:'Rd', img:'redis.png' },
    { name:'PostgreSQL',     url:'https://www.postgresql.org',     desc:'功能最强大的开源关系数据库，JSON支持好。',                      category:'coding', type:'free',    rating:4.7, icon:'PG', img:'postgresql.png' },
    { name:'Supabase',       url:'https://supabase.com',           desc:'开源Firebase替代品，PostgreSQL + Auth + Storage。',            category:'coding', type:'free',    rating:4.6, icon:'Sb', img:'supabase.png' },
    { name:'Prisma',         url:'https://www.prisma.io',          desc:'下一代Node.js/TypeScript ORM，类型安全的数据库操作。',          category:'coding', type:'free',    rating:4.6, icon:'Pr', img:'prisma.png' },
    { name:'Strapi',         url:'https://strapi.io',              desc:'开源Headless CMS，快速搭建API后端。',                          category:'coding', type:'free',    rating:4.4, icon:'Sr' },

    // --- 前端框架/库 ---
    { name:'React官网',      url:'https://react.dev',              desc:'Meta出品UI库，前端组件化开发事实标准。',                      category:'coding', type:'free',    rating:4.9, icon:'Rc', img:'react.png' },
    { name:'Vue.js官网',     url:'https://vuejs.org',              desc:'渐进式JavaScript框架，中文文档友好，国内使用广泛。',            category:'coding', type:'free',    rating:4.9, icon:'Vu', img:'vue.png' },
    { name:'Angular官网',    url:'https://angular.dev',            desc:'Google出品企业级前端框架，TypeScript深度集成。',                category:'coding', type:'free',    rating:4.6, icon:'Ng', img:'angular.png' },
    { name:'Next.js官网',    url:'https://nextjs.org',             desc:'React全栈框架，SSR/SSG/ISR和App Router。',                     category:'coding', type:'free',    rating:4.8, icon:'Nx', img:'nextjs.png' },
    { name:'Nuxt官网',       url:'https://nuxt.com',               desc:'Vue全栈框架，SSR和静态站点生成，开发体验好。',                 category:'coding', type:'free',    rating:4.6, icon:'Nu' , img:'nuxt.ico' },
    { name:'Svelte官网',     url:'https://svelte.dev',             desc:'编译时框架，无虚拟DOM，性能极致。',                            category:'coding', type:'free',    rating:4.5, icon:'Sv', img:'svelte.png' },
    { name:'TailwindCSS',    url:'https://tailwindcss.com',        desc:'实用优先CSS框架，原子化CSS快速构建界面。',                      category:'coding', type:'free',    rating:4.8, icon:'TW', img:'tailwind.png' },
    { name:'Bootstrap官网',  url:'https://getbootstrap.com',       desc:'最流行的CSS框架，响应式布局和UI组件库。',                       category:'coding', type:'free',    rating:4.5, icon:'BT', img:'bootstrap.png' },
    { name:'Three.js官网',   url:'https://threejs.org',            desc:'3D WebGL库，网页3D可视化和游戏开发。',                           category:'coding', type:'free',    rating:4.6, icon:'3j', img:'threejs.png' },
    { name:'D3.js官网',      url:'https://d3js.org',               desc:'数据可视化JS库，复杂图表和交互式数据展示。',                     category:'coding', type:'free',    rating:4.5, icon:'D3', img:'d3js.png' },
    { name:'Ant Design',     url:'https://ant.design',             desc:'蚂蚁集团企业级UI组件库，React项目常用。',                       category:'coding', type:'free',    rating:4.6, icon:'AD', img:'antdesign.png' },
    { name:'Element Plus',   url:'https://element-plus.org',       desc:'饿了么Vue3组件库，后台管理系统UI首选。',                       category:'coding', type:'free',    rating:4.5, icon:'EP' },
    { name:'jQuery官网',     url:'https://jquery.com',             desc:'经典JavaScript库，DOM操作和事件处理简洁高效。',                  category:'coding', type:'free',    rating:4.2, icon:'jQ', img:'jquery.png' },

    // --- 后端框架/语言 ---
    { name:'Django官网',     url:'https://www.djangoproject.com',  desc:'Python全栈Web框架，快速开发企业级应用。',                      category:'coding', type:'free',    rating:4.7, icon:'Dj', img:'django.png' },
    { name:'Flask官网',      url:'https://flask.palletsprojects.com', desc:'Python轻量Web框架，灵活易扩展，微型项目首选。',              category:'coding', type:'free',    rating:4.6, icon:'Fl', img:'flask.png' },
    { name:'FastAPI官网',    url:'https://fastapi.tiangolo.com',   desc:'Python高性能API框架，自动生成API文档。',                      category:'coding', type:'free',    rating:4.7, icon:'FA', img:'fastapi.png' },
    { name:'Spring Boot',   url:'https://spring.io/projects/spring-boot', desc:'Java企业级开发框架，微服务架构标配。',                    category:'coding', type:'free',    rating:4.8, icon:'Sp', img:'springboot.png' },
    { name:'Express.js',    url:'https://expressjs.com',          desc:'Node.js最流行的Web框架，轻量灵活。',                           category:'coding', type:'free',    rating:4.7, icon:'Ex', img:'express.png' },
    { name:'NestJS官网',    url:'https://nestjs.com',             desc:'Node.js企业级框架，TypeScript深度集成，架构规范。',             category:'coding', type:'free',    rating:4.6, icon:'NS', img:'nestjs.png' },
    { name:'Laravel官网',    url:'https://laravel.com',            desc:'PHP优雅框架，语法简洁，生态丰富。',                             category:'coding', type:'free',    rating:4.6, icon:'Lv' },

    // --- 云服务/部署 ---
    { name:'阿里云',         url:'https://www.aliyun.com',         desc:'国内领先云服务商，ECS服务器和云数据库。',                       category:'coding', type:'free',    rating:4.7, icon:'AL', img:'aliyun.png' },
    { name:'腾讯云',         url:'https://cloud.tencent.com',      desc:'腾讯旗下云平台，轻量服务器和云开发。',                           category:'coding', type:'free',    rating:4.6, icon:'TX', img:'tencentcloud.png' },
    { name:'华为云',         url:'https://www.huaweicloud.com',    desc:'华为旗下云平台，政企服务和AI算力。',                             category:'coding', type:'free',    rating:4.5, icon:'HW', img:'huaweicloud.png' },
    { name:'AWS',            url:'https://aws.amazon.com',         desc:'亚马逊云计算平台，全球最大云服务商。',                          category:'coding', type:'free',    rating:4.8, icon:'AW', img:'aws.png' },
    { name:'Cloudflare',     url:'https://www.cloudflare.com',     desc:'CDN加速和安全防护，免费HTTPS和DNS解析。',                       category:'coding', type:'free',    rating:4.8, icon:'Cf', img:'cloudflare.png' },
    { name:'Netlify',        url:'https://www.netlify.com',        desc:'静态网站自动部署平台，GitHub集成一键上线。',                     category:'coding', type:'free',    rating:4.6, icon:'Nt' },
    { name:'Railway',        url:'https://railway.app',            desc:'全栈应用部署平台，一键部署后端和数据库。',                      category:'coding', type:'free',    rating:4.5, icon:'RW', img:'railway.png' },
    { name:'Firebase',       url:'https://firebase.google.com',    desc:'Google旗下BaaS平台，实时数据库和认证服务。',                    category:'coding', type:'free',    rating:4.6, icon:'FB', img:'firebase_google_com.ico' },

    // --- 设计/协作/效率 ---
    { name:'Figma',          url:'https://www.figma.com',          desc:'在线UI设计工具，团队协作原型设计首选。',                         category:'coding', type:'free',    rating:4.9, icon:'Fi', img:'figma.png' },
    { name:'Notion',         url:'https://www.notion.so',          desc:'全能工作空间，文档+数据库+Wiki，团队协作神器。',                category:'coding', type:'free',    rating:4.8, icon:'NT', img:'notion.png' },
    { name:'语雀',           url:'https://www.yuque.com',          desc:'阿里旗下知识管理平台，文档协作和知识库搭建。',                  category:'coding', type:'free',    rating:4.5, icon:'YQ', img:'yuque.png' },
    { name:'Excalidraw',     url:'https://excalidraw.com',         desc:'手绘风格在线白板，画架构图和流程图利器。',                      category:'coding', type:'free',    rating:4.6, icon:'Xd', img:'excalidraw.png' },
    { name:'Draw.io',        url:'https://app.diagrams.net',       desc:'免费在线绘图工具，流程图/UML/网络图一键导出。',                 category:'coding', type:'free',    rating:4.5, icon:'Dr', img:'app_diagrams_net.ico' },
    { name:'Swagger',        url:'https://swagger.io',             desc:'API文档自动生成工具，前后端协作接口规范。',                      category:'coding', type:'free',    rating:4.4, icon:'SA', img:'swagger.png' },
    { name:'Regex101',       url:'https://regex101.com',           desc:'正则表达式在线测试工具，实时匹配和调试。',                       category:'coding', type:'free',    rating:4.5, icon:'RX', img:'regex101_com.ico' },
    { name:'JSON Editor',    url:'https://jsoneditoronline.org',   desc:'在线JSON编辑器和格式化工具，开发调试必备。',                    category:'coding', type:'free',    rating:4.4, icon:'JE' , img:'jsoneditor.ico' },

    // ============ 大学生创业 ============

    // --- AI内容创作 ---
    { name:'可灵AI',      url:'https://kling.kuaishou.com',  desc:'快手旗下AI视频生成，文字一键生成高质量短视频。',         category:'startup', sub:'ai_content', type:'free',    rating:4.7, icon:'灵', img:'kling.png',
      review:'可灵AI是快手推出的AI视频生成工具，在国内AI视频领域表现突出。生成的视频质量高，运动连贯性和画面真实感都相当不错。支持文生视频和图生视频两种模式。免费额度比较慷慨，对于想尝试AI视频创作的用户来说门槛很低。在国产AI视频工具中属于第一梯队，是普通用户体验AI视频生成的最佳入门选择之一。' },
    { name:'即梦AI',      url:'https://jimeng.jianying.com', desc:'字节跳动AI创作平台，图片和视频生成能力强。',             category:'startup', sub:'ai_content', type:'free',    rating:4.6, icon:'梦', img:'jimeng.png',
      review:'即梦AI背靠字节跳动，与剪映生态打通。图片生成和视频生成能力都不错，生成的图片审美水平较高。免费体验额度充足。和剪映的结合是独特优势——AI生成内容后可以直接在剪映中编辑。适合内容创作者批量生成素材。在国产AI图片生成工具中属于上游水平。' },
    { name:'Sora',        url:'https://sora.com',            desc:'OpenAI文字生成视频模型，创建逼真电影级视频。',             category:'startup', sub:'ai_content', type:'free',    rating:4.8, icon:'So', img:'sora.png',
      review:'Sora是OpenAI推出的视频生成模型，一度让整个AI行业震撼。生成视频的长度、连贯性和物理世界理解能力远超同类产品。但需要ChatGPT Plus或Pro订阅才能使用，费用较高（20美元/月起）。生成速度偏慢。目前国内访问需要科学上网。如果你预算充足且追求最高质量的AI视频，Sora是顶级选择。' },
    { name:'海螺AI',      url:'https://hailuoai.com',        desc:'MiniMax出品，支持AI播客和视频生成。',                   category:'startup', sub:'ai_content', type:'free',    rating:4.5, icon:'螺', img:'hailuoai.png',
      review:'海螺AI由MiniMax推出，特色功能是AI播客——可以基于文字内容生成双人对话式的播客音频，声音自然、节奏感好，适合知识内容传播。视频生成能力也不错。免费使用额度较多。AI播客功能是目前比较独特的差异化卖点，适合内容创作者尝试新的内容形态。' },
    { name:'PixVerse',    url:'https://pixverse.ai',         desc:'AI视频生成平台，支持文字和图片生成高质量视频。',          category:'startup', sub:'ai_content', type:'free',    rating:4.5, icon:'Px', img:'pixverse.png',
      review:'PixVerse是一款专注于AI视频生成的平台，支持文字描述和图片输入生成视频。画面风格多样，支持多种视频参数调节。社区分享功能让用户可以互相观摩作品。免费版有一定使用额度。在国际AI视频生成赛道中属于有竞争力的选手，适合内容创作者用来批量生产短视频素材。' },

    // --- 电商平台 ---
    { name:'淘宝开店',    url:'https://openshop.taobao.com', desc:'淘宝商家入驻，零门槛开网店，大学生创业首选。',           category:'startup', sub:'ecommerce',  type:'free',    rating:4.5, icon:'淘', img:'taobao.png',
      review:'淘宝开店是大学生电商创业最主流的入口。入驻门槛低，个人身份证即可开店。平台流量大，搜索和推荐机制成熟。但竞争也极其激烈，新店铺获取自然流量很难。需要学习直通车、标题优化、主图设计等运营技能。适合有一定运营学习意愿的大学生作为创业起点。' },
    { name:'拼多多商家',  url:'https://jinbao.pinduoduo.com', desc:'拼多多商家后台，适合做低价走量电商模式。',              category:'startup', sub:'ecommerce',  type:'free',    rating:4.3, icon:'拼', img:'pinduoduo.png',
      review:'拼多多商家的核心逻辑是"低价走量"。入驻门槛低，适合有价格优势的货源。平台在下沉市场有巨大流量，单品爆发的可能性比淘宝高。但对价格极度敏感，利润空间薄。商家需要严格控制成本。适合做工厂直供、尾货清仓、低价日用品等模式。新手商家要警惕平台的罚款规则。' },
    { name:'闲鱼',        url:'https://www.goofish.com',      desc:'二手交易平台，闲置物品和手工定制生意。',                category:'startup', sub:'ecommerce',  type:'free',    rating:4.6, icon:'鱼', img:'goofish.png',
      review:'闲鱼是最大的二手交易平台，也适合轻量级创业。无入驻费用，零成本开卖。适合二手闲置、手工定制、信息差等模式。闲鱼引流后转私域是很多小卖家的做法。平台免保证金门槛低，但也意味着信任成本高。适合想低成本试水电商的大学生，从卖闲置开始积累经验。' },
    { name:'小红书开店',  url:'https://ec.xiaohongshu.com/ecommerce/home',  desc:'小红书电商入驻，图文种草和电商带货。',                    category:'startup', sub:'ecommerce',  type:'free',    rating:4.5, icon:'店', img:'xiaohongshu.png',
      review:'小红书电商的商业模式是"内容即交易"——通过笔记种草带动商品销售。用户消费意愿强，客单价相对较高。适合有内容创作能力、做美妆/穿搭/家居等品类的卖家。入驻门槛低，但做好内容运营需要投入大量精力。图文和短视频内容质量决定转化率。适合擅长内容创作的创业者。' },
    { name:'抖音电商',    url:'https://fxg.jinritemai.com',  desc:'抖音商家后台，短视频+直播电商，流量红利期。',            category:'startup', sub:'ecommerce',  type:'free',    rating:4.7, icon:'商', img:'jinritemai.png',
      review:'抖音电商是当前电商最大的增长引擎。短视频种草+直播带货的模式爆发力极强，单品日销过万的案例比比皆是。但竞争也异常激烈，需要优质内容、专业主播或付费投流。入驻门槛不高但做好很难。适合有短视频制作能力或直播天赋的创业者。对大学生来说，可以先从短视频内容入手再转型带货。' },
    { name:'1688',        url:'https://www.1688.com',         desc:'阿里巴巴批发平台，一件代发和货源采购首选。',             category:'startup', sub:'ecommerce',  type:'free',    rating:4.8, icon:'88', img:'1688.png',
      review:'1688是电商创业者的"上游基地"。无论你是做淘宝、拼多多还是闲鱼，1688都是找货源的首选。支持一件代发（无需囤货）、小额批发。价格透明，供应商多，比价方便。货源品质参差不齐需要筛选。几乎所有电商创业者都需要1688来获取货源或供应链信息。建议新手多看多比较再下单。' },

    // --- 自媒体 & 短视频 ---
    { name:'B站创作中心', url:'https://member.bilibili.com',  desc:'B站创作者平台，视频投稿和数据分析。',                   category:'startup', sub:'media',      type:'free',    rating:4.6, icon:'投', img:'bilibili.ico',
      review:'B站是国内最适合做深度内容的中长视频平台。用户社区氛围好，弹幕互动文化独特。中长视频的完播率和社区粘性高于抖音。变现方式包括创作激励、充电计划、商业推广等。但相比短视频平台，起量速度较慢，需要持续产出优质内容。适合有知识分享、技能教学、二次创作等方向的内容创作者。' },
    { name:'抖音创作',    url:'https://creator.douyin.com',   desc:'抖音创作者服务平台，短视频创作和变现。',                 category:'startup', sub:'media',      type:'free',    rating:4.7, icon:'作', img:'douyin.png',
      review:'抖音是国内短视频的绝对霸主，日活用户超6亿。算法推荐机制成熟，普通人也有机会爆款。变现路径清晰：带货、直播、广告、知识付费等。但竞争极度激烈，内容同质化严重。起号需要摸索平台算法和用户偏好。适合执行力强、能快速迭代内容的创作者。大学生可以低成本试错。' },
    { name:'视频号',      url:'https://channels.weixin.qq.com', desc:'微信视频号创作者平台，基于微信生态。',                category:'startup', sub:'media',      type:'free',    rating:4.4, icon:'号', img:'weixin.png',
      review:'视频号背靠微信13亿月活，社交推荐的传播潜力巨大。独特的优势是可以方便地连接公众号、小程序和企业微信，形成私域闭环。适合做知识分享、行业观点等偏"熟人社交"风格的内容。相比抖音公域流量的爆发力，视频号更偏向社交裂变和私域转化。适合微信生态重度用户。' },
    { name:'头条号',      url:'https://mp.toutiao.com',       desc:'今日头条创作平台，图文和微头条都能变现。',               category:'startup', sub:'media',      type:'free',    rating:4.3, icon:'头', img:'toutiao.png',
      review:'头条号基于今日头条的算法推荐分发，图文创作者可以获得阅读量分成。创作门槛低，微头条（类似微博）可以快速产出内容变现。适合擅长写资讯、观点、故事类图文的创作者。但单价持续走低，纯靠阅读量分成收入有限。建议作为流量入口，导流到其他变现渠道。' },
    { name:'百家号',      url:'https://baijiahao.baidu.com',  desc:'百度旗下创作平台，流量大，SEO效果好。',                 category:'startup', sub:'media',      type:'free',    rating:4.2, icon:'百', img:'baijiahao.png',
      review:'百家号的最大优势是百度搜索流量加持——发布的文章在百度搜索中有优先展示权重，长尾流量可观。适合做知识性、教程类内容的长期布局。但内容审核严格，变现机制不如头条号灵活。适合有SEO意识、愿意做长期内容沉淀的创作者。建议和头条号同步发布，多平台覆盖。' },
    { name:'剪映',        url:'https://www.capcut.cn',        desc:'字节跳动免费视频剪辑，模板多，上手快。',                category:'startup', sub:'media',      type:'free',    rating:4.8, icon:'剪', img:'capcut.png',
      review:'剪映是目前最推荐的免费视频剪辑工具。操作直观，功能丰富——剪辑、字幕自动生成、转场特效、音频处理、AI配音等一应俱全。模板库庞大，一键套用即可出片。与抖音无缝对接，直接发布。专业版（付费）功能更强大。几乎所有短视频创作者都在用剪映，大学生做自媒体的必备工具。' },

    // --- 设计接单 ---
    { name:'Fiverr',      url:'https://www.fiverr.com',       desc:'全球最大自由职业外包平台，设计/开发/写作接单。',         category:'startup', sub:'design',     type:'free',    rating:4.5, icon:'Fv', img:'fiverr.png',
      review:'Fiverr是全球最大的自由职业外包平台，服务起价5美元。适合设计、开发、翻译、写作等技能型接单。客户以海外为主，收入为美元结算。需要一定的英语沟通能力。平台抽成20%较高。建立好评和等级需要时间积累。适合想赚取美元收入、有英语基础的设计师和开发者。' },
    { name:'猪八戒网',    url:'https://www.zbj.com/sem/index', desc:'国内老牌服务外包平台，接设计和开发项目。',               category:'startup', sub:'design',     type:'free',    rating:4.3, icon:'猪', img:'zbj.png',
      review:'猪八戒网是国内最早的在线外包平台之一。涵盖设计、开发、文案、营销等多种服务品类。需求方发布任务，服务商竞标接单。但平台竞争激烈，低价竞争严重，新入驻者很难接到优质项目。平台佣金和推广费用较高。适合有一定作品积累和口碑后入驻，纯新手起步较难。' },
    { name:'站酷海洛',    url:'https://www.hellorf.com',      desc:'正版创意素材平台，上传作品赚取版权收入。',               category:'startup', sub:'design',     type:'free',    rating:4.2, icon:'酷', img:'hellorf.png',
      review:'站酷海洛是正版视觉素材交易平台。设计师可以上传摄影、插画、矢量图等作品，每次被下载都能获得分成。被动收入模式，上传一次可以持续收益。但需要高质量的作品才能获得下载量，竞争激烈。适合有摄影或插画技能、想建立被动收入流的设计师。前期积累阶段收入较低，需要耐心。' },
    { name:'特赞',        url:'https://www.tezign.com',       desc:'创意人才接单平台，连接品牌方和设计师。',                 category:'startup', sub:'design',     type:'free',    rating:4.1, icon:'赞', img:'tezign.png',
      review:'特赞定位更高端，主要连接品牌方和优质创意人才。项目单价和质量相对较高，但入驻审核也更严格。适合有一定作品集和行业经验的设计师。平台撮合匹配机制较好，减少无效沟通。对于刚入门的设计学生来说门槛较高，建议先积累作品再尝试。' },

    // --- 知识付费 ---
    { name:'得到',        url:'https://www.dedao.cn',         desc:'罗振宇旗下知识付费平台，做课程和知识内容创业。',         category:'startup', sub:'knowledge',  type:'vip',     rating:4.4, icon:'得', img:'dedao.png',
      review:'得到是国内知识付费领域的标杆平台。用户付费意愿强，课程品质管控严格。如果你是某领域的专家，可以考虑申请成为得到讲师。但审核门槛高，不是随便就能入驻。对于普通创业者，得到更多是作为"学习平台"而不是"创业平台"。适合有深厚专业积累、能产出体系化知识内容的专家。' },
    { name:'千聊',        url:'https://www.qlchat.com',       desc:'知识分享和社群运营平台，一键开通知识店铺。',             category:'startup', sub:'knowledge',  type:'free',    rating:4.3, icon:'聊', img:'qlchat.png',
      review:'千聊的门槛比得到低很多，几乎任何人都可以一键开通自己的知识店铺。支持语音课、直播、专栏等多种形式。适合做社群运营和轻量级知识付费。免费开店，按交易抽成。缺点是平台流量分配不如头部平台，需要自带流量。适合有粉丝基础或特定技能想变现的创作者。' },
    { name:'小鹅通',      url:'https://www.xiaoe-tech.com',   desc:'知识付费和私域运营工具，搭建知识店铺。',                category:'startup', sub:'knowledge',  type:'vip',     rating:4.5, icon:'小', img:'xiaoe.png',
      review:'小鹅通是知识付费领域最主流的SaaS工具之一，为内容创作者提供完整的知识店铺搭建方案。支持课程、直播、训练营、会员等多种变现形式。与微信生态打通，方便私域运营。缺点是需要付费使用（年费），且需要自行解决流量问题。适合有一定用户基础、想做系统化知识付费的创作者或机构。' },
    { name:'知识星球',    url:'https://www.zsxq.com',         desc:'创作者社群工具，付费圈子运营，连接粉丝。',               category:'startup', sub:'knowledge',  type:'vip',     rating:4.4, icon:'星', img:'zsxq.png',
      review:'知识星球（原小密圈）是做付费社群的最佳工具。创建一个星球，设定入圈费用，在里面分享知识和互动。模式简单直接：持续输出有价值的内容就能吸引付费用户。适合各领域的KOL和知识型创作者。缺点是全平台通用导致严重同质化，需要找到差异化内容定位。年费制定价合理。' },

    // --- 众包任务 ---
    { name:'阿里众包',    url:'https://zhongbao.aliyun.com', desc:'阿里旗下众包平台，数据标注和微任务赚零花钱。',           category:'startup', sub:'crowd',      type:'free',    rating:4.2, icon:'阿', img:'alibaba_zhongbao.png',
      review:'阿里众包主要提供数据标注、图片标注、文本审核等微任务。任务来源是阿里系AI项目的数据需求，任务量相对稳定。单价不高但任务持续，适合碎片时间赚点零花钱。需要一定的学习和审核才能接更多任务类型。不适合作为主要收入来源，但作为学生兼职赚零花钱的方式还行。' },
    { name:'百度众测',    url:'https://test.baidu.com',       desc:'百度众包测试平台，数据标注和AI训练任务。',               category:'startup', sub:'crowd',      type:'free',    rating:4.1, icon:'测', img:'baidu_test.png',
      review:'百度众测与阿里众包类似，提供数据标注和AI模型测试任务。依托百度的AI研发需求，任务类型有一定多样性。平台操作相对简单，但单价和任务量不如阿里众包稳定。适合作为补充的兼职渠道。同样不适合期望获得可观收入的用户。' },
    { name:'腾讯搜活帮',  url:'https://soho.qq.com/home',     desc:'腾讯众包数据标注平台，任务多结算快。',                   category:'startup', sub:'crowd',      type:'free',    rating:4.0, icon:'搜', img:'sohuobao.png',
      review:'腾讯搜活帮是腾讯的众包平台，主要做数据标注类任务。界面简洁，操作门槛低。但整体来说任务类型较少，单价也偏低，和其他两家众包平台类似。如果时间充裕且想赚点小钱，可以三家平台都注册做对比。不推荐对收入有任何高期待。' },

    // --- 创业服务 ---
    { name:'企查查',      url:'https://www.qcc.com',          desc:'企业信息查询工具，创业前期市场调研必备。',                category:'startup', sub:'service',    type:'free',    rating:4.5, icon:'企', img:'qcc.png',
      review:'企查查是创业前做市场调研的必备工具。可以查到企业的工商信息、股东结构、经营状况、法律风险等。在调研竞争对手、寻找合作伙伴、评估投资风险时非常有用。免费版提供基础查询，深度信息需要VIP。与天眼查功能高度重叠，二选一即可。数据更新及时，手机App也好用。' },
    { name:'天眼查',      url:'https://www.tianyancha.com',   desc:'企业信息和商业查询平台，了解竞争对手和行业数据。',        category:'startup', sub:'service',    type:'free',    rating:4.5, icon:'天', img:'tianyancha.png',
      review:'天眼查和企查查是直接竞品，功能高度相似。都提供企业工商信息、知识产权、法律诉讼、关联关系等查询。天眼查的可视化呈现（企业关系图谱）做得更直观。免费版功能有限，核心深度数据需付费。建议两个都装，免费查基础信息时互补使用。创业前了解行业格局的好帮手。' },
    { name:'创业邦',      url:'https://www.cyzone.cn',        desc:'创业资讯和投融资平台，了解创业政策和融资动态。',          category:'startup', sub:'service',    type:'free',    rating:4.3, icon:'创', img:'cyzone.png',
      review:'创业邦提供创业相关的资讯、政策解读、融资信息和创业课程。内容覆盖面广，适合了解创业生态和行业动态。也有创业项目路演和投融资对接功能。但内容深度参差不齐，广告较多。作为日常浏览了解创业资讯的渠道还行，不建议付费购买其高价培训课程。' },
    { name:'36氪',        url:'https://36kr.com',             desc:'科技创业媒体，最新创业趋势和行业报告。',                 category:'startup', sub:'service',    type:'free',    rating:4.6, icon:'36', img:'36kr.ico',
      review:'36氪是国内科技和创投领域最有影响力的媒体之一。报道覆盖AI、新能源、消费、出海等热门赛道。行业深度分析和趋势判断质量较高。适合创业者了解行业动态、竞争对手动向和投资热点。内容免费且更新及时。是科技创业者和投资人的必读媒体，手机App体验也很好。' },


    // ============ 政府官网 ============
    // --- 国家级：国务院及组成部门 ---
    { name:'中国政府网',         url:'https://www.gov.cn',              desc:'中华人民共和国国务院门户网站，发布国家政策法规和政务信息。',         category:'gov', region:'national', type:'free', rating:5.0, icon:'政' },
    { name:'全国人大网',         url:'http://www.npc.gov.cn',           desc:'全国人民代表大会官方网站，法律法规、议案审议等立法信息。',           category:'gov', region:'national', type:'free', rating:4.9, icon:'人' },
    { name:'全国政协网',         url:'http://www.cppcc.gov.cn',         desc:'中国人民政治协商会议全国委员会官方网站。',                       category:'gov', region:'national', type:'free', rating:4.8, icon:'协' },
    { name:'最高人民法院',       url:'https://www.court.gov.cn',        desc:'中国最高审判机关，司法解释、裁判文书、案件公开。',               category:'gov', region:'national', type:'free', rating:4.9, icon:'法' },
    { name:'最高人民检察院',     url:'https://www.spp.gov.cn',          desc:'中国最高检察机关，检察公告、法律监督信息。',                   category:'gov', region:'national', type:'free', rating:4.8, icon:'检' },
    { name:'中央纪委国家监委',   url:'https://www.ccdi.gov.cn',         desc:'纪检监察机关官方网站，反腐败、党风建设信息。',                 category:'gov', region:'national', type:'free', rating:4.7, icon:'纪' },
    { name:'国家发展和改革委员会', url:'https://www.ndrc.gov.cn',       desc:'国民经济和社会发展总体规划、经济体制改革、价格管理。',         category:'gov', region:'national', type:'free', rating:4.8, icon:'发' },
    { name:'教育部',             url:'http://www.moe.gov.cn',           desc:'主管教育事业的国务院组成部门，教育政策、招生考试信息。',       category:'gov', region:'national', type:'free', rating:4.8, icon:'教' },
    { name:'科学技术部',         url:'https://www.most.gov.cn',         desc:'主管科技工作的国务院组成部门，科技计划、创新政策。',           category:'gov', region:'national', type:'free', rating:4.7, icon:'科' },
    { name:'工业和信息化部',     url:'https://www.miit.gov.cn',         desc:'主管工业、信息化和通信的国务院组成部门。',                     category:'gov', region:'national', type:'free', rating:4.7, icon:'工' },
    { name:'国家民族事务委员会', url:'https://www.neac.gov.cn',         desc:'主管民族事务的国务院组成部门，民族政策、民族团结。',           category:'gov', region:'national', type:'free', rating:4.5, icon:'民' },
    { name:'公安部',             url:'https://www.mps.gov.cn',          desc:'主管公安工作的国务院组成部门，户政、交管、出入境。',           category:'gov', region:'national', type:'free', rating:4.7, icon:'公' },
    { name:'国家安全部',         url:'https://www.mss.gov.cn',          desc:'主管国家安全工作的国务院组成部门。',                           category:'gov', region:'national', type:'free', rating:4.7, icon:'安' },
    { name:'民政部',             url:'https://www.mca.gov.cn',          desc:'主管社会行政事务的国务院组成部门，社会救助、区划地名。',       category:'gov', region:'national', type:'free', rating:4.5, icon:'民' },
    { name:'司法部',             url:'https://www.moj.gov.cn',          desc:'主管司法行政工作的国务院组成部门，律师、公证、普法。',         category:'gov', region:'national', type:'free', rating:4.6, icon:'司' },
    { name:'财政部',             url:'http://www.mof.gov.cn',           desc:'主管财政收支、税收政策的国务院组成部门。',                     category:'gov', region:'national', type:'free', rating:4.7, icon:'财' },
    { name:'人力资源和社会保障部', url:'http://www.mohrss.gov.cn',   desc:'主管人事、劳动和社会保障的国务院组成部门。',                   category:'gov', region:'national', type:'free', rating:4.7, icon:'劳' },
    { name:'自然资源部',         url:'http://www.mnr.gov.cn',           desc:'主管自然资源管理的国务院组成部门，国土空间规划。',             category:'gov', region:'national', type:'free', rating:4.6, icon:'资' },
    { name:'生态环境部',         url:'https://www.mee.gov.cn',          desc:'主管生态环境保护工作的国务院组成部门，污染防治。',             category:'gov', region:'national', type:'free', rating:4.6, icon:'环' },
    { name:'住房和城乡建设部',   url:'http://www.mohurd.gov.cn',        desc:'主管住房和城乡建设的国务院组成部门，房地产、城市建设。',       category:'gov', region:'national', type:'free', rating:4.6, icon:'住' },
    { name:'交通运输部',         url:'https://www.mot.gov.cn',          desc:'主管交通运输的国务院组成部门，公路、水路、民航。',             category:'gov', region:'national', type:'free', rating:4.6, icon:'交' },
    { name:'水利部',             url:'http://www.mwr.gov.cn',           desc:'主管水利工作的国务院组成部门，防汛抗旱、水资源管理。',         category:'gov', region:'national', type:'free', rating:4.5, icon:'水' },
    { name:'农业农村部',         url:'http://www.moa.gov.cn',           desc:'主管农业和农村工作的国务院组成部门，乡村振兴。',               category:'gov', region:'national', type:'free', rating:4.6, icon:'农' },
    { name:'商务部',             url:'http://www.mofcom.gov.cn',        desc:'主管国内外贸易和国际经济合作的国务院组成部门。',               category:'gov', region:'national', type:'free', rating:4.7, icon:'商' },
    { name:'文化和旅游部',       url:'https://www.mct.gov.cn',          desc:'主管文化和旅游工作的国务院组成部门，文化产业、旅游推广。',     category:'gov', region:'national', type:'free', rating:4.6, icon:'文' },
    { name:'国家卫生健康委',     url:'http://www.nhc.gov.cn',           desc:'主管卫生健康工作的国务院组成部门，医疗卫生、疾病防控。',       category:'gov', region:'national', type:'free', rating:4.7, icon:'卫' },
    { name:'退役军人事务部',     url:'http://www.mva.gov.cn',           desc:'主管退役军人事务的国务院组成部门，优抚安置。',                 category:'gov', region:'national', type:'free', rating:4.5, icon:'退' },
    { name:'应急管理部',         url:'https://www.mem.gov.cn',          desc:'主管应急管理工作的国务院组成部门，安全生产、灾害救援。',       category:'gov', region:'national', type:'free', rating:4.5, icon:'应' },
    { name:'中国人民银行',       url:'http://www.pbc.gov.cn',           desc:'中华人民共和国中央银行，货币政策、金融监管。',                 category:'gov', region:'national', type:'free', rating:4.8, icon:'银' },
    { name:'审计署',             url:'http://www.audit.gov.cn',         desc:'主管审计工作的国务院组成部门，政府审计、经济监督。',           category:'gov', region:'national', type:'free', rating:4.6, icon:'审' },
    // --- 国家级：国务院直属机构 ---
    { name:'海关总署',           url:'http://www.customs.gov.cn',       desc:'主管海关工作的国务院直属机构，进出口监管、关税征收。',         category:'gov', region:'national', type:'free', rating:4.6, icon:'关' },
    { name:'国家税务总局',       url:'https://www.chinatax.gov.cn',     desc:'主管税收工作的国务院直属机构，纳税服务、税务管理。',           category:'gov', region:'national', type:'free', rating:4.8, icon:'税' },
    { name:'国家市场监督管理总局', url:'https://www.samr.gov.cn',      desc:'主管市场综合监管的国务院直属机构，工商登记、质量监管。',       category:'gov', region:'national', type:'free', rating:4.7, icon:'市' },
    { name:'国家金融监督管理总局', url:'https://www.nfra.gov.cn',      desc:'统一负责除证券业之外的金融业监管工作。',                       category:'gov', region:'national', type:'free', rating:4.7, icon:'金' },
    { name:'中国证监会',         url:'http://www.csrc.gov.cn',          desc:'中国证券监督管理委员会，证券期货市场监管。',                   category:'gov', region:'national', type:'free', rating:4.7, icon:'证' },
    { name:'国家广播电视总局',   url:'http://www.nrta.gov.cn',          desc:'主管广播电视行业的国务院直属机构。',                           category:'gov', region:'national', type:'free', rating:4.5, icon:'广' },
    { name:'国家体育总局',       url:'http://www.sport.gov.cn',         desc:'主管体育工作的国务院直属机构，全民健身、竞技体育。',           category:'gov', region:'national', type:'free', rating:4.5, icon:'体' },
    { name:'国家统计局',         url:'http://www.stats.gov.cn',         desc:'主管统计工作的国务院直属机构，经济数据、人口普查。',           category:'gov', region:'national', type:'free', rating:4.7, icon:'统' },
    { name:'国家知识产权局',     url:'https://www.cnipa.gov.cn',        desc:'主管知识产权工作的国务院直属机构，专利、商标、版权。',         category:'gov', region:'national', type:'free', rating:4.7, icon:'知' },
    { name:'国家国际发展合作署', url:'https://www.cidca.gov.cn',        desc:'主管对外援助工作的国务院直属机构。',                           category:'gov', region:'national', type:'free', rating:4.4, icon:'援' },
    { name:'国家医保局',         url:'https://www.nhsa.gov.cn',         desc:'主管医疗保障工作的国务院直属机构，医保政策、药品集采。',       category:'gov', region:'national', type:'free', rating:4.7, icon:'医' },
    { name:'国家信访局',         url:'https://www.gjxfj.gov.cn',        desc:'主管信访工作的国务院直属机构，群众来信来访处理。',             category:'gov', region:'national', type:'free', rating:4.4, icon:'信' },
    { name:'国家公务员局',       url:'http://www.scs.gov.cn',           desc:'公务员录用考试、管理的专门机构。',                             category:'gov', region:'national', type:'free', rating:4.6, icon:'公' },
    { name:'国家档案局',         url:'http://www.saac.gov.cn',          desc:'主管档案工作的国家局，档案管理、档案利用。',                   category:'gov', region:'national', type:'free', rating:4.3, icon:'档' },
    // --- 国家级：国务院直属事业单位 ---
    { name:'新华通讯社',         url:'http://www.xinhuanet.com',        desc:'中国国家通讯社，全球新闻信息采集和发布。',                     category:'gov', region:'national', type:'free', rating:4.8, icon:'新' },
    { name:'中国科学院',         url:'https://www.cas.cn',              desc:'中国自然科学最高学术机构，科研院所、院士信息。',               category:'gov', region:'national', type:'free', rating:4.9, icon:'院' },
    { name:'中国工程院',         url:'https://www.cae.cn',              desc:'中国工程科学技术最高学术机构，院士信息、工程咨询。',           category:'gov', region:'national', type:'free', rating:4.8, icon:'工' },
    { name:'中国社会科学院',     url:'http://www.cass.cn',              desc:'中国哲学社会科学最高学术机构。',                               category:'gov', region:'national', type:'free', rating:4.7, icon:'社' },
    { name:'国务院发展研究中心', url:'https://www.drc.gov.cn',          desc:'国务院直属事业单位，政策咨询研究机构。',                       category:'gov', region:'national', type:'free', rating:4.6, icon:'研' },
    // --- 国家级：部委管理的国家局 ---
    { name:'中国气象局',         url:'http://www.cma.gov.cn',           desc:'主管气象工作的国家局，天气预报、气候监测。',                   category:'gov', region:'national', type:'free', rating:4.5, icon:'气' },
    { name:'国家林草局',         url:'https://www.forestry.gov.cn',     desc:'主管林业和草原工作的国家局，生态保护修复。',                   category:'gov', region:'national', type:'free', rating:4.4, icon:'林' },
    { name:'国家文物局',         url:'http://www.ncha.gov.cn',          desc:'主管文物和博物馆工作的国家局，文物保护。',                     category:'gov', region:'national', type:'free', rating:4.4, icon:'物' },
    { name:'国家邮政局',         url:'https://www.spb.gov.cn',          desc:'主管邮政行业的国家局，快递监管。',                             category:'gov', region:'national', type:'free', rating:4.4, icon:'邮' },
    { name:'国家粮食和物资储备局', url:'http://www.lswz.gov.cn',       desc:'主管粮食流通和物资储备工作的国家局。',                         category:'gov', region:'national', type:'free', rating:4.4, icon:'粮' },
    { name:'国家烟草专卖局',     url:'http://www.tobacco.gov.cn',       desc:'主管烟草专卖工作的国家局。',                                   category:'gov', region:'national', type:'free', rating:4.3, icon:'烟' },
    { name:'国家铁路局',         url:'https://www.nra.gov.cn',          desc:'主管铁路行业管理工作的国家局。',                               category:'gov', region:'national', type:'free', rating:4.5, icon:'铁' },
    { name:'中国民用航空局',     url:'https://www.caac.gov.cn',         desc:'主管民航工作的国家局，航空安全、航线审批。',                   category:'gov', region:'national', type:'free', rating:4.6, icon:'航' },
    { name:'国家能源局',         url:'https://www.nea.gov.cn',          desc:'主管能源工作的国家局，电力、煤炭、石油天然气。',               category:'gov', region:'national', type:'free', rating:4.5, icon:'能' },
    { name:'国家中医药管理局',   url:'http://www.satcm.gov.cn',         desc:'主管中医药工作的国家局，中医药政策、行业标准。',               category:'gov', region:'national', type:'free', rating:4.5, icon:'中' },
    { name:'国家疾控局',         url:'https://www.ndcpa.gov.cn',        desc:'主管疾病预防控制工作的国家局，传染病防控。',                   category:'gov', region:'national', type:'free', rating:4.6, icon:'疾' },
    { name:'国家药品监督管理局', url:'https://www.nmpa.gov.cn',         desc:'主管药品、医疗器械、化妆品监管的国家局。',                     category:'gov', region:'national', type:'free', rating:4.7, icon:'药' },
    // --- 国家级：公共服务平台 ---
    { name:'中国铁路12306',      url:'https://www.12306.cn',            desc:'中国铁路客户服务中心，火车票购买、列车时刻查询。',             category:'gov', region:'national', type:'free', rating:4.9, icon:'铁' },
    { name:'国家政务服务平台',   url:'https://www.gjzwfw.gov.cn',       desc:'全国一体化在线政务服务平台，跨省通办、一网通办。',             category:'gov', region:'national', type:'free', rating:4.8, icon:'务' , img:'gjzwfw_exam.ico' },
    { name:'国家企业信用信息公示系统', url:'https://www.gsxt.gov.cn',  desc:'全国企业信用信息公示系统，企业信息查询。',                   category:'gov', region:'national', type:'free', rating:4.8, icon:'企' },
    { name:'中国执行信息公开网', url:'http://zxgk.court.gov.cn',        desc:'全国法院被执行人信息查询平台。',                               category:'gov', region:'national', type:'free', rating:4.6, icon:'执' },
    { name:'中国裁判文书网',     url:'https://wenshu.court.gov.cn',     desc:'全国法院裁判文书公开查询平台。',                               category:'gov', region:'national', type:'free', rating:4.7, icon:'裁' },
    { name:'信用中国',           url:'https://www.creditchina.gov.cn',  desc:'全国信用信息共享平台，信用记录查询。',                         category:'gov', region:'national', type:'free', rating:4.7, icon:'信' },

    // --- 直辖市：北京 ---
    { name:'北京市人民政府',   url:'https://www.beijing.gov.cn',      desc:'北京市人民政府门户网站，首都政务公开、便民服务。',         category:'gov', region:'beijing', type:'free', rating:4.8, icon:'京' },
    { name:'北京市发改委',     url:'http://fgw.beijing.gov.cn',       desc:'北京市发展和改革委员会，重大项目审批、经济规划。',           category:'gov', region:'beijing', type:'free', rating:4.6, icon:'京' },
    { name:'北京市教委',       url:'http://jw.beijing.gov.cn',        desc:'北京市教育委员会，教育政策、入学升学信息。',               category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市科委',       url:'http://kw.beijing.gov.cn',        desc:'北京市科学技术委员会，科技创新、高新技术企业。',           category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市经信局',     url:'http://jxj.beijing.gov.cn',       desc:'北京市经济和信息化局，数字经济、工业发展。',               category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市公安局',     url:'http://gaj.beijing.gov.cn',       desc:'北京市公安局，户籍管理、交通管理、出入境。',               category:'gov', region:'beijing', type:'free', rating:4.7, icon:'京' },
    { name:'北京市民政局',     url:'http://mzj.beijing.gov.cn',       desc:'北京市民政局，社会救助、社区治理、养老服务。',             category:'gov', region:'beijing', type:'free', rating:4.4, icon:'京' },
    { name:'北京市司法局',     url:'http://sfj.beijing.gov.cn',       desc:'北京市司法局，律师管理、法律援助、公证。',                 category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市财政局',     url:'http://czj.beijing.gov.cn',       desc:'北京市财政局，财政预算、政府采购。',                       category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市人社局',     url:'http://rsj.beijing.gov.cn',       desc:'北京市人力资源和社会保障局，社保、就业、人才服务。',       category:'gov', region:'beijing', type:'free', rating:4.6, icon:'京' },
    { name:'北京市规划自然资源委', url:'http://ghzrzyj.beijing.gov.cn', desc:'北京市规划和自然资源委员会，国土规划、不动产登记。',     category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市生态环境局', url:'http://sthjj.beijing.gov.cn',      desc:'北京市生态环境局，污染防治、环保审批。',                   category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市住建委',     url:'http://zjw.beijing.gov.cn',       desc:'北京市住房和城乡建设委员会，住房保障、房产交易。',         category:'gov', region:'beijing', type:'free', rating:4.6, icon:'京' },
    { name:'北京市交通委',     url:'http://jtw.beijing.gov.cn',       desc:'北京市交通委员会，交通管理、地铁公交、小客车摇号。',       category:'gov', region:'beijing', type:'free', rating:4.7, icon:'京' },
    { name:'北京市水务局',     url:'http://swj.beijing.gov.cn',        desc:'北京市水务局，水资源管理、防汛抗旱。',                     category:'gov', region:'beijing', type:'free', rating:4.4, icon:'京' },
    { name:'北京市农业农村局', url:'http://nyncj.beijing.gov.cn',      desc:'北京市农业农村局，乡村振兴、农产品安全。',                 category:'gov', region:'beijing', type:'free', rating:4.4, icon:'京' },
    { name:'北京市商务局',     url:'http://sw.beijing.gov.cn',         desc:'北京市商务局，外贸促进、消费促进、会展。',                 category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市文旅局',     url:'http://whlyj.beijing.gov.cn',      desc:'北京市文化和旅游局，文化旅游、文物保护。',                 category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市卫健委',     url:'http://wjw.beijing.gov.cn',       desc:'北京市卫生健康委员会，医疗服务、疫情防控。',               category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市应急管理局', url:'http://yjglj.beijing.gov.cn',      desc:'北京市应急管理局，安全生产、应急救援。',                   category:'gov', region:'beijing', type:'free', rating:4.4, icon:'京' },
    { name:'北京市市场监管局', url:'http://scjgj.beijing.gov.cn',      desc:'北京市市场监督管理局，企业登记、食品安全、质量监管。',     category:'gov', region:'beijing', type:'free', rating:4.6, icon:'京' },
    { name:'北京市医保局',     url:'http://ybj.beijing.gov.cn',       desc:'北京市医疗保障局，医保政策、医疗报销。',                   category:'gov', region:'beijing', type:'free', rating:4.5, icon:'京' },
    { name:'北京市统计局',     url:'http://tjj.beijing.gov.cn',       desc:'北京市统计局，经济数据、统计公报。',                       category:'gov', region:'beijing', type:'free', rating:4.4, icon:'京' },
    { name:'北京市园林绿化局', url:'http://yllhj.beijing.gov.cn',      desc:'北京市园林绿化局，公园管理、绿化建设。',                   category:'gov', region:'beijing', type:'free', rating:4.4, icon:'京' },
    { name:'北京市体育局',     url:'http://tyj.beijing.gov.cn',       desc:'北京市体育局，全民健身、体育赛事。',                       category:'gov', region:'beijing', type:'free', rating:4.3, icon:'京' },
    { name:'北京市信访办',     url:'http://xfb.beijing.gov.cn',       desc:'北京市信访办公室，群众来信来访处理。',                     category:'gov', region:'beijing', type:'free', rating:4.3, icon:'京' },

    // --- 直辖市：上海 ---
    { name:'上海市人民政府',   url:'https://www.shanghai.gov.cn',     desc:'上海市人民政府门户网站，上海政务公开、便民服务。',         category:'gov', region:'shanghai', type:'free', rating:4.8, icon:'沪' },
    { name:'上海市发改委',     url:'http://fgw.sh.gov.cn',            desc:'上海市发展和改革委员会，经济规划、重大项目。',               category:'gov', region:'shanghai', type:'free', rating:4.6, icon:'沪' },
    { name:'上海市教委',       url:'http://edu.sh.gov.cn',            desc:'上海市教育委员会，教育政策、入学升学信息。',                 category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市科委',       url:'http://stcsm.sh.gov.cn',          desc:'上海市科学技术委员会，科技创新、项目管理。',                 category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市经信委',     url:'http://sheitc.sh.gov.cn',         desc:'上海市经济和信息化委员会，数字经济、产业促进。',             category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市公安局',     url:'http://gaj.sh.gov.cn',            desc:'上海市公安局，户籍、交通、出入境管理。',                     category:'gov', region:'shanghai', type:'free', rating:4.7, icon:'沪' },
    { name:'上海市民政局',     url:'http://mzj.sh.gov.cn',            desc:'上海市民政局，社会救助、社区治理。',                         category:'gov', region:'shanghai', type:'free', rating:4.4, icon:'沪' },
    { name:'上海市司法局',     url:'http://sfj.sh.gov.cn',            desc:'上海市司法局，律师管理、法律援助。',                         category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市财政局',     url:'http://czj.sh.gov.cn',            desc:'上海市财政局，财政预算、政府采购。',                         category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市人社局',     url:'http://rsj.sh.gov.cn',            desc:'上海市人力资源和社会保障局，社保、就业、人才。',             category:'gov', region:'shanghai', type:'free', rating:4.6, icon:'沪' },
    { name:'上海市规划自然资源局', url:'http://ghzyj.sh.gov.cn',      desc:'上海市规划和自然资源局，国土规划、不动产登记。',             category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市生态环境局', url:'http://sthj.sh.gov.cn',           desc:'上海市生态环境局，污染防治、环保审批。',                     category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市住建委',     url:'http://zjw.sh.gov.cn',            desc:'上海市住房和城乡建设管理委员会，住房保障、城市建设。',       category:'gov', region:'shanghai', type:'free', rating:4.6, icon:'沪' },
    { name:'上海市交通委',     url:'http://jtw.sh.gov.cn',            desc:'上海市交通委员会，交通管理、公共交通。',                     category:'gov', region:'shanghai', type:'free', rating:4.6, icon:'沪' },
    { name:'上海市水务局',     url:'http://swj.sh.gov.cn',            desc:'上海市水务局，水资源管理、供排水。',                         category:'gov', region:'shanghai', type:'free', rating:4.4, icon:'沪' },
    { name:'上海市农业农村委', url:'http://nyncw.sh.gov.cn',          desc:'上海市农业农村委员会，乡村振兴、农产品安全。',               category:'gov', region:'shanghai', type:'free', rating:4.4, icon:'沪' },
    { name:'上海市商务委',     url:'http://sww.sh.gov.cn',            desc:'上海市商务委员会，外贸、消费促进、会展。',                   category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市文旅局',     url:'http://whlyj.sh.gov.cn',          desc:'上海市文化和旅游局，文化旅游、文物保护。',                   category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市卫健委',     url:'http://wsjkw.sh.gov.cn',          desc:'上海市卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市应急管理局', url:'http://yjglj.sh.gov.cn',          desc:'上海市应急管理局，安全生产、应急救援。',                     category:'gov', region:'shanghai', type:'free', rating:4.4, icon:'沪' },
    { name:'上海市市场监管局', url:'http://scjgj.sh.gov.cn',          desc:'上海市市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'shanghai', type:'free', rating:4.6, icon:'沪' },
    { name:'上海市医保局',     url:'http://ybj.sh.gov.cn',            desc:'上海市医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'shanghai', type:'free', rating:4.5, icon:'沪' },
    { name:'上海市统计局',     url:'http://tjj.sh.gov.cn',            desc:'上海市统计局，经济数据、统计公报。',                         category:'gov', region:'shanghai', type:'free', rating:4.4, icon:'沪' },
    { name:'上海市体育局',     url:'http://tyj.sh.gov.cn',            desc:'上海市体育局，全民健身、体育赛事。',                         category:'gov', region:'shanghai', type:'free', rating:4.3, icon:'沪' },
    { name:'上海市信访办',     url:'http://xfb.sh.gov.cn',            desc:'上海市信访办公室，群众来信来访处理。',                       category:'gov', region:'shanghai', type:'free', rating:4.3, icon:'沪' },

    // --- 直辖市：天津 ---
    { name:'天津市人民政府',   url:'https://www.tj.gov.cn',           desc:'天津市人民政府门户网站。',                                 category:'gov', region:'tianjin', type:'free', rating:4.7, icon:'津' },
    { name:'天津市发改委',     url:'http://fzgg.tj.gov.cn',           desc:'天津市发展和改革委员会，经济规划、重大项目。',               category:'gov', region:'tianjin', type:'free', rating:4.5, icon:'津' },
    { name:'天津市教委',       url:'http://jy.tj.gov.cn',             desc:'天津市教育委员会，教育政策、招生考试。',                     category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市科技局',     url:'http://kxjs.tj.gov.cn',           desc:'天津市科学技术局，科技创新、成果转化。',                     category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市工信局',     url:'http://gxj.tj.gov.cn',            desc:'天津市工业和信息化局，工业发展、数字经济。',                 category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市公安局',     url:'http://ga.tj.gov.cn',             desc:'天津市公安局，户籍管理、交通管理。',                         category:'gov', region:'tianjin', type:'free', rating:4.6, icon:'津' },
    { name:'天津市民政局',     url:'http://mz.tj.gov.cn',             desc:'天津市民政局，社会救助、社区治理。',                         category:'gov', region:'tianjin', type:'free', rating:4.3, icon:'津' },
    { name:'天津市司法局',     url:'http://sf.tj.gov.cn',             desc:'天津市司法局，律师管理、法律援助。',                         category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市财政局',     url:'http://cz.tj.gov.cn',             desc:'天津市财政局，财政预算、政府采购。',                         category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市人社局',     url:'http://hrss.tj.gov.cn',           desc:'天津市人力资源和社会保障局，社保、就业、人才。',             category:'gov', region:'tianjin', type:'free', rating:4.5, icon:'津' },
    { name:'天津市规划资源局', url:'http://ghhzrzy.tj.gov.cn',        desc:'天津市规划和自然资源局，国土规划、不动产登记。',             category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市生态环境局', url:'http://sthj.tj.gov.cn',           desc:'天津市生态环境局，污染防治、环保审批。',                     category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市住建委',     url:'http://zjw.tj.gov.cn',            desc:'天津市住房和城乡建设委员会，住房保障、城市建设。',           category:'gov', region:'tianjin', type:'free', rating:4.5, icon:'津' },
    { name:'天津市交通运输委', url:'http://jt.tj.gov.cn',             desc:'天津市交通运输委员会，交通管理、公共交通。',                 category:'gov', region:'tianjin', type:'free', rating:4.5, icon:'津' },
    { name:'天津市水务局',     url:'http://swj.tj.gov.cn',            desc:'天津市水务局，水资源管理、防汛抗旱。',                       category:'gov', region:'tianjin', type:'free', rating:4.3, icon:'津' },
    { name:'天津市农业农村委', url:'http://nync.tj.gov.cn',           desc:'天津市农业农村委员会，乡村振兴、农产品安全。',               category:'gov', region:'tianjin', type:'free', rating:4.3, icon:'津' },
    { name:'天津市商务局',     url:'http://sww.tj.gov.cn',            desc:'天津市商务局，外贸促进、消费促进。',                         category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市文旅局',     url:'http://whly.tj.gov.cn',           desc:'天津市文化和旅游局，文化旅游、文物保护。',                   category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市卫健委',     url:'http://wsjk.tj.gov.cn',           desc:'天津市卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'tianjin', type:'free', rating:4.5, icon:'津' },
    { name:'天津市应急管理局', url:'http://yjgl.tj.gov.cn',           desc:'天津市应急管理局，安全生产、应急救援。',                     category:'gov', region:'tianjin', type:'free', rating:4.3, icon:'津' },
    { name:'天津市市场监管委', url:'http://scjg.tj.gov.cn',           desc:'天津市市场监督管理委员会，企业登记、食品安全。',             category:'gov', region:'tianjin', type:'free', rating:4.5, icon:'津' },
    { name:'天津市医保局',     url:'http://ylbz.tj.gov.cn',           desc:'天津市医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'tianjin', type:'free', rating:4.4, icon:'津' },
    { name:'天津市统计局',     url:'http://stats.tj.gov.cn',          desc:'天津市统计局，经济数据、统计公报。',                         category:'gov', region:'tianjin', type:'free', rating:4.3, icon:'津' },
    { name:'天津市体育局',     url:'http://ty.tj.gov.cn',             desc:'天津市体育局，全民健身、体育赛事。',                         category:'gov', region:'tianjin', type:'free', rating:4.3, icon:'津' },

    // --- 直辖市：重庆 ---
    { name:'重庆市人民政府',   url:'https://www.cq.gov.cn',           desc:'重庆市人民政府门户网站。',                                 category:'gov', region:'chongqing', type:'free', rating:4.7, icon:'渝' },
    { name:'重庆市发改委',     url:'http://fgw.cq.gov.cn',            desc:'重庆市发展和改革委员会，经济规划、重大项目。',               category:'gov', region:'chongqing', type:'free', rating:4.5, icon:'渝' },
    { name:'重庆市教委',       url:'http://jw.cq.gov.cn',             desc:'重庆市教育委员会，教育政策、招生考试。',                     category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市科技局',     url:'http://kjj.cq.gov.cn',            desc:'重庆市科学技术局，科技创新、成果转化。',                     category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市经信委',     url:'http://jxw.cq.gov.cn',            desc:'重庆市经济和信息化委员会，工业发展、数字经济。',             category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市公安局',     url:'http://gaj.cq.gov.cn',            desc:'重庆市公安局，户籍管理、交通管理、出入境。',                 category:'gov', region:'chongqing', type:'free', rating:4.6, icon:'渝' },
    { name:'重庆市民政局',     url:'http://mzj.cq.gov.cn',            desc:'重庆市民政局，社会救助、社区治理。',                         category:'gov', region:'chongqing', type:'free', rating:4.3, icon:'渝' },
    { name:'重庆市司法局',     url:'http://sfj.cq.gov.cn',            desc:'重庆市司法局，律师管理、法律援助。',                         category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市财政局',     url:'http://czj.cq.gov.cn',            desc:'重庆市财政局，财政预算、政府采购。',                         category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市人社局',     url:'http://rlsbj.cq.gov.cn',          desc:'重庆市人力资源和社会保障局，社保、就业、人才。',             category:'gov', region:'chongqing', type:'free', rating:4.5, icon:'渝' },
    { name:'重庆市规划自然资源局', url:'http://ghzrzyj.cq.gov.cn',   desc:'重庆市规划和自然资源局，国土规划、不动产登记。',             category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市生态环境局', url:'http://sthjj.cq.gov.cn',          desc:'重庆市生态环境局，污染防治、环保审批。',                     category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市住建委',     url:'http://zjw.cq.gov.cn',            desc:'重庆市住房和城乡建设委员会，住房保障、城市建设。',           category:'gov', region:'chongqing', type:'free', rating:4.5, icon:'渝' },
    { name:'重庆市交通局',     url:'http://jtj.cq.gov.cn',            desc:'重庆市交通局，交通管理、公共交通。',                         category:'gov', region:'chongqing', type:'free', rating:4.5, icon:'渝' },
    { name:'重庆市水利局',     url:'http://slj.cq.gov.cn',            desc:'重庆市水利局，水资源管理、防汛抗旱。',                       category:'gov', region:'chongqing', type:'free', rating:4.3, icon:'渝' },
    { name:'重庆市农业农村委', url:'http://nyncw.cq.gov.cn',          desc:'重庆市农业农村委员会，乡村振兴、农产品安全。',               category:'gov', region:'chongqing', type:'free', rating:4.3, icon:'渝' },
    { name:'重庆市商务委',     url:'http://sww.cq.gov.cn',            desc:'重庆市商务委员会，外贸促进、消费促进。',                     category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市文旅委',     url:'http://whlyw.cq.gov.cn',          desc:'重庆市文化和旅游发展委员会，文化旅游、文物保护。',           category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市卫健委',     url:'http://wsjkw.cq.gov.cn',          desc:'重庆市卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'chongqing', type:'free', rating:4.5, icon:'渝' },
    { name:'重庆市应急管理局', url:'http://yjj.cq.gov.cn',            desc:'重庆市应急管理局，安全生产、应急救援。',                     category:'gov', region:'chongqing', type:'free', rating:4.3, icon:'渝' },
    { name:'重庆市市场监管局', url:'http://scjgj.cq.gov.cn',          desc:'重庆市市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'chongqing', type:'free', rating:4.5, icon:'渝' },
    { name:'重庆市医保局',     url:'http://ylbzj.cq.gov.cn',          desc:'重庆市医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'chongqing', type:'free', rating:4.4, icon:'渝' },
    { name:'重庆市统计局',     url:'http://tjj.cq.gov.cn',            desc:'重庆市统计局，经济数据、统计公报。',                         category:'gov', region:'chongqing', type:'free', rating:4.3, icon:'渝' },
    { name:'重庆市体育局',     url:'http://tyj.cq.gov.cn',            desc:'重庆市体育局，全民健身、体育赛事。',                         category:'gov', region:'chongqing', type:'free', rating:4.3, icon:'渝' },

    // --- 省级（华北）：河北 ---
    { name:'河北省人民政府',   url:'http://www.hebei.gov.cn',         desc:'河北省人民政府门户网站。',                                 category:'gov', region:'hebei', type:'free', rating:4.6, icon:'冀' },
    { name:'河北省发改委',     url:'http://fgw.hebei.gov.cn',         desc:'河北省发展和改革委员会，经济规划、重大项目。',               category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省教育厅',     url:'http://jyt.hebei.gov.cn',         desc:'河北省教育厅，教育政策、招生考试。',                         category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省科技厅',     url:'http://kjt.hebei.gov.cn',         desc:'河北省科学技术厅，科技创新、项目管理。',                     category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省工信厅',     url:'http://gxt.hebei.gov.cn',         desc:'河北省工业和信息化厅，工业发展、数字经济。',                 category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省公安厅',     url:'http://gat.hebei.gov.cn',         desc:'河北省公安厅，户籍管理、交通管理、出入境。',                 category:'gov', region:'hebei', type:'free', rating:4.5, icon:'冀' },
    { name:'河北省民政厅',     url:'http://mzt.hebei.gov.cn',         desc:'河北省民政厅，社会救助、社区治理。',                         category:'gov', region:'hebei', type:'free', rating:4.3, icon:'冀' },
    { name:'河北省司法厅',     url:'http://sft.hebei.gov.cn',         desc:'河北省司法厅，律师管理、法律援助。',                         category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省财政厅',     url:'http://czt.hebei.gov.cn',         desc:'河北省财政厅，财政预算、政府采购。',                         category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省人社厅',     url:'http://rst.hebei.gov.cn',         desc:'河北省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省自然资源厅', url:'http://zrzy.hebei.gov.cn',        desc:'河北省自然资源厅，国土规划、不动产登记。',                   category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省生态环境厅', url:'http://sthjt.hebei.gov.cn',       desc:'河北省生态环境厅，污染防治、环保审批。',                     category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省住建厅',     url:'http://zjt.hebei.gov.cn',         desc:'河北省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省交通运输厅', url:'http://jtt.hebei.gov.cn',         desc:'河北省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省水利厅',     url:'http://slt.hebei.gov.cn',         desc:'河北省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'hebei', type:'free', rating:4.3, icon:'冀' },
    { name:'河北省农业农村厅', url:'http://nynct.hebei.gov.cn',       desc:'河北省农业农村厅，乡村振兴、农产品安全。',                   category:'gov', region:'hebei', type:'free', rating:4.3, icon:'冀' },
    { name:'河北省商务厅',     url:'http://swt.hebei.gov.cn',         desc:'河北省商务厅，外贸促进、消费促进。',                         category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省文旅厅',     url:'http://whly.hebei.gov.cn',        desc:'河北省文化和旅游厅，文化旅游、文物保护。',                   category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省卫健委',     url:'http://hebwst.gov.cn',            desc:'河北省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省应急管理厅', url:'http://yjglj.hebei.gov.cn',       desc:'河北省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'hebei', type:'free', rating:4.3, icon:'冀' },
    { name:'河北省市场监管局', url:'http://scjgj.hebei.gov.cn',       desc:'河北省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'hebei', type:'free', rating:4.5, icon:'冀' },
    { name:'河北省医保局',     url:'http://ylbzj.hebei.gov.cn',       desc:'河北省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'hebei', type:'free', rating:4.4, icon:'冀' },
    { name:'河北省统计局',     url:'http://tjj.hebei.gov.cn',         desc:'河北省统计局，经济数据、统计公报。',                         category:'gov', region:'hebei', type:'free', rating:4.3, icon:'冀' },
    { name:'河北省体育局',     url:'http://ty.hebei.gov.cn',          desc:'河北省体育局，全民健身、体育赛事。',                         category:'gov', region:'hebei', type:'free', rating:4.3, icon:'冀' },
    { name:'河北省林草局',     url:'http://lyj.hebei.gov.cn',         desc:'河北省林业和草原局，生态保护修复。',                         category:'gov', region:'hebei', type:'free', rating:4.3, icon:'冀' },

    // --- 省级（华北）：山西 ---
    { name:'山西省人民政府',   url:'https://www.shanxi.gov.cn',       desc:'山西省人民政府门户网站。',                                 category:'gov', region:'shanxi', type:'free', rating:4.6, icon:'晋' },
    { name:'山西省发改委',     url:'http://fgw.shanxi.gov.cn',        desc:'山西省发展和改革委员会，经济规划、能源转型。',               category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省教育厅',     url:'http://jyt.shanxi.gov.cn',        desc:'山西省教育厅，教育政策、招生考试。',                         category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省科技厅',     url:'http://kjt.shanxi.gov.cn',        desc:'山西省科学技术厅，科技创新、成果转化。',                     category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省工信厅',     url:'http://gxt.shanxi.gov.cn',        desc:'山西省工业和信息化厅，工业发展、数字经济。',                 category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省公安厅',     url:'http://gat.shanxi.gov.cn',        desc:'山西省公安厅，户籍管理、交通管理。',                         category:'gov', region:'shanxi', type:'free', rating:4.5, icon:'晋' },
    { name:'山西省民政厅',     url:'http://mzt.shanxi.gov.cn',        desc:'山西省民政厅，社会救助、社区治理。',                         category:'gov', region:'shanxi', type:'free', rating:4.3, icon:'晋' },
    { name:'山西省司法厅',     url:'http://sft.shanxi.gov.cn',        desc:'山西省司法厅，律师管理、法律援助。',                         category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省财政厅',     url:'http://czt.shanxi.gov.cn',        desc:'山西省财政厅，财政预算、政府采购。',                         category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省人社厅',     url:'http://rst.shanxi.gov.cn',        desc:'山西省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省自然资源厅', url:'http://zrzyt.shanxi.gov.cn',      desc:'山西省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省生态环境厅', url:'http://sthjt.shanxi.gov.cn',      desc:'山西省生态环境厅，污染防治、环保审批。',                     category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省住建厅',     url:'http://zjt.shanxi.gov.cn',        desc:'山西省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省交通运输厅', url:'http://jt.shanxi.gov.cn',         desc:'山西省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省水利厅',     url:'http://slt.shanxi.gov.cn',        desc:'山西省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'shanxi', type:'free', rating:4.3, icon:'晋' },
    { name:'山西省农业农村厅', url:'http://nynct.shanxi.gov.cn',      desc:'山西省农业农村厅，乡村振兴、农产品安全。',                   category:'gov', region:'shanxi', type:'free', rating:4.3, icon:'晋' },
    { name:'山西省商务厅',     url:'http://swt.shanxi.gov.cn',        desc:'山西省商务厅，外贸促进、消费促进。',                         category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省文旅厅',     url:'http://wlt.shanxi.gov.cn',        desc:'山西省文化和旅游厅，文化旅游、文物保护。',                   category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省卫健委',     url:'http://wjw.shanxi.gov.cn',        desc:'山西省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省应急管理厅', url:'http://yjglt.shanxi.gov.cn',      desc:'山西省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'shanxi', type:'free', rating:4.3, icon:'晋' },
    { name:'山西省市场监管局', url:'http://scjgj.shanxi.gov.cn',      desc:'山西省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省医保局',     url:'http://ylbzj.shanxi.gov.cn',      desc:'山西省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'shanxi', type:'free', rating:4.4, icon:'晋' },
    { name:'山西省统计局',     url:'http://tjj.shanxi.gov.cn',        desc:'山西省统计局，经济数据、统计公报。',                         category:'gov', region:'shanxi', type:'free', rating:4.3, icon:'晋' },
    { name:'山西省体育局',     url:'http://tyj.shanxi.gov.cn',        desc:'山西省体育局，全民健身、体育赛事。',                         category:'gov', region:'shanxi', type:'free', rating:4.3, icon:'晋' },
    { name:'山西省林草局',     url:'http://lcj.shanxi.gov.cn',        desc:'山西省林业和草原局，生态保护修复。',                         category:'gov', region:'shanxi', type:'free', rating:4.3, icon:'晋' },

    // --- 省级（华北）：内蒙古 ---
    { name:'内蒙古自治区人民政府', url:'https://www.nmg.gov.cn',      desc:'内蒙古自治区人民政府门户网站。',                           category:'gov', region:'neimenggu', type:'free', rating:4.5, icon:'蒙' },
    { name:'内蒙古发改委',     url:'http://fgw.nmg.gov.cn',           desc:'内蒙古自治区发展和改革委员会，经济规划、重大项目。',         category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古教育厅',     url:'http://jyt.nmg.gov.cn',           desc:'内蒙古自治区教育厅，教育政策、招生考试。',                   category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古科技厅',     url:'http://kjt.nmg.gov.cn',           desc:'内蒙古自治区科学技术厅，科技创新、成果转化。',               category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古工信厅',     url:'http://gxt.nmg.gov.cn',           desc:'内蒙古自治区工业和信息化厅，工业发展、数字经济。',           category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古公安厅',     url:'http://gat.nmg.gov.cn',           desc:'内蒙古自治区公安厅，户籍管理、交通管理。',                   category:'gov', region:'neimenggu', type:'free', rating:4.5, icon:'蒙' },
    { name:'内蒙古民政厅',     url:'http://mzt.nmg.gov.cn',           desc:'内蒙古自治区民政厅，社会救助、社区治理。',                   category:'gov', region:'neimenggu', type:'free', rating:4.3, icon:'蒙' },
    { name:'内蒙古司法厅',     url:'http://sft.nmg.gov.cn',           desc:'内蒙古自治区司法厅，律师管理、法律援助。',                   category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古财政厅',     url:'http://cz.nmg.gov.cn',            desc:'内蒙古自治区财政厅，财政预算、政府采购。',                   category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古人社厅',     url:'http://rst.nmg.gov.cn',           desc:'内蒙古自治区人力资源和社会保障厅，社保、就业、人才。',       category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古自然资源厅', url:'http://zrzy.nmg.gov.cn',          desc:'内蒙古自治区自然资源厅，国土规划、矿产资源。',               category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古生态环境厅', url:'http://sthjt.nmg.gov.cn',         desc:'内蒙古自治区生态环境厅，污染防治、生态保护。',               category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古住建厅',     url:'http://zjt.nmg.gov.cn',           desc:'内蒙古自治区住房和城乡建设厅，住房保障、城市建设。',         category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古交通运输厅', url:'http://jt.nmg.gov.cn',            desc:'内蒙古自治区交通运输厅，公路水路、交通管理。',               category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古水利厅',     url:'http://slt.nmg.gov.cn',           desc:'内蒙古自治区水利厅，水资源管理、防汛抗旱。',                 category:'gov', region:'neimenggu', type:'free', rating:4.3, icon:'蒙' },
    { name:'内蒙古农牧厅',     url:'http://nmy.nmg.gov.cn',           desc:'内蒙古自治区农牧厅，乡村振兴、农牧业发展。',                 category:'gov', region:'neimenggu', type:'free', rating:4.3, icon:'蒙' },
    { name:'内蒙古商务厅',     url:'http://swt.nmg.gov.cn',           desc:'内蒙古自治区商务厅，外贸促进、口岸管理。',                   category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古文旅厅',     url:'http://wlt.nmg.gov.cn',           desc:'内蒙古自治区文化和旅游厅，文化旅游、文物保护。',             category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古卫健委',     url:'http://wjw.nmg.gov.cn',           desc:'内蒙古自治区卫生健康委员会，医疗服务、公共卫生。',             category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古应急管理厅', url:'http://yjgl.nmg.gov.cn',          desc:'内蒙古自治区应急管理厅，安全生产、应急救援。',               category:'gov', region:'neimenggu', type:'free', rating:4.3, icon:'蒙' },
    { name:'内蒙古市场监管局', url:'http://amr.nmg.gov.cn',           desc:'内蒙古自治区市场监督管理局，企业登记、食品安全。',           category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古医保局',     url:'http://ylbz.nmg.gov.cn',          desc:'内蒙古自治区医疗保障局，医保政策、医疗报销。',               category:'gov', region:'neimenggu', type:'free', rating:4.4, icon:'蒙' },
    { name:'内蒙古统计局',     url:'http://tj.nmg.gov.cn',            desc:'内蒙古自治区统计局，经济数据、统计公报。',                   category:'gov', region:'neimenggu', type:'free', rating:4.3, icon:'蒙' },
    { name:'内蒙古体育局',     url:'http://ty.nmg.gov.cn',            desc:'内蒙古自治区体育局，全民健身、体育赛事。',                   category:'gov', region:'neimenggu', type:'free', rating:4.3, icon:'蒙' },
    { name:'内蒙古林草局',     url:'http://lcj.nmg.gov.cn',           desc:'内蒙古自治区林业和草原局，生态保护修复。',                   category:'gov', region:'neimenggu', type:'free', rating:4.3, icon:'蒙' },

    // --- 省级（东北）：辽宁 ---
    { name:'辽宁省人民政府',   url:'https://www.ln.gov.cn',           desc:'辽宁省人民政府门户网站。',                                 category:'gov', region:'liaoning', type:'free', rating:4.6, icon:'辽' },
    { name:'辽宁省发改委',     url:'http://fgw.ln.gov.cn',            desc:'辽宁省发展和改革委员会，经济规划、老工业基地振兴。',           category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省教育厅',     url:'http://jyt.ln.gov.cn',            desc:'辽宁省教育厅，教育政策、招生考试。',                         category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省科技厅',     url:'http://kjt.ln.gov.cn',            desc:'辽宁省科学技术厅，科技创新、成果转化。',                     category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省工信厅',     url:'http://gxt.ln.gov.cn',            desc:'辽宁省工业和信息化厅，工业发展、数字经济。',                 category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省公安厅',     url:'http://gat.ln.gov.cn',            desc:'辽宁省公安厅，户籍管理、交通管理、出入境。',                 category:'gov', region:'liaoning', type:'free', rating:4.5, icon:'辽' },
    { name:'辽宁省民政厅',     url:'http://mzt.ln.gov.cn',            desc:'辽宁省民政厅，社会救助、社区治理。',                         category:'gov', region:'liaoning', type:'free', rating:4.3, icon:'辽' },
    { name:'辽宁省司法厅',     url:'http://sf.ln.gov.cn',             desc:'辽宁省司法厅，律师管理、法律援助。',                         category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省财政厅',     url:'http://czt.ln.gov.cn',            desc:'辽宁省财政厅，财政预算、政府采购。',                         category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省人社厅',     url:'http://rst.ln.gov.cn',            desc:'辽宁省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省自然资源厅', url:'http://zrzy.ln.gov.cn',           desc:'辽宁省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省生态环境厅', url:'http://sthjt.ln.gov.cn',          desc:'辽宁省生态环境厅，污染防治、环保审批。',                     category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省住建厅',     url:'http://zjt.ln.gov.cn',            desc:'辽宁省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省交通运输厅', url:'http://jt.ln.gov.cn',             desc:'辽宁省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省水利厅',     url:'http://slt.ln.gov.cn',            desc:'辽宁省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'liaoning', type:'free', rating:4.3, icon:'辽' },
    { name:'辽宁省农业农村厅', url:'http://nynct.ln.gov.cn',          desc:'辽宁省农业农村厅，乡村振兴、农产品安全。',                   category:'gov', region:'liaoning', type:'free', rating:4.3, icon:'辽' },
    { name:'辽宁省商务厅',     url:'http://swt.ln.gov.cn',            desc:'辽宁省商务厅，外贸促进、消费促进。',                         category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省文旅厅',     url:'http://wlt.ln.gov.cn',            desc:'辽宁省文化和旅游厅，文化旅游、文物保护。',                   category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省卫健委',     url:'http://wsjk.ln.gov.cn',           desc:'辽宁省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省应急管理厅', url:'http://yjgl.ln.gov.cn',           desc:'辽宁省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'liaoning', type:'free', rating:4.3, icon:'辽' },
    { name:'辽宁省市场监管局', url:'http://scjgj.ln.gov.cn',          desc:'辽宁省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省医保局',     url:'http://ylbzj.ln.gov.cn',          desc:'辽宁省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'liaoning', type:'free', rating:4.4, icon:'辽' },
    { name:'辽宁省统计局',     url:'http://tjj.ln.gov.cn',            desc:'辽宁省统计局，经济数据、统计公报。',                         category:'gov', region:'liaoning', type:'free', rating:4.3, icon:'辽' },
    { name:'辽宁省体育局',     url:'http://tyj.ln.gov.cn',            desc:'辽宁省体育局，全民健身、体育赛事。',                         category:'gov', region:'liaoning', type:'free', rating:4.3, icon:'辽' },
    { name:'辽宁省林草局',     url:'http://lcj.ln.gov.cn',            desc:'辽宁省林业和草原局，生态保护修复。',                         category:'gov', region:'liaoning', type:'free', rating:4.3, icon:'辽' },

    // --- 省级（东北）：吉林 ---
    { name:'吉林省人民政府',   url:'http://www.jl.gov.cn',            desc:'吉林省人民政府门户网站。',                                 category:'gov', region:'jilin', type:'free', rating:4.5, icon:'吉' },
    { name:'吉林省发改委',     url:'http://fgw.jl.gov.cn',            desc:'吉林省发展和改革委员会，经济规划、重大项目。',               category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省教育厅',     url:'http://jyt.jl.gov.cn',            desc:'吉林省教育厅，教育政策、招生考试。',                         category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省科技厅',     url:'http://kjt.jl.gov.cn',            desc:'吉林省科学技术厅，科技创新、成果转化。',                     category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省工信厅',     url:'http://gxt.jl.gov.cn',            desc:'吉林省工业和信息化厅，工业发展、数字经济。',                 category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省公安厅',     url:'http://gat.jl.gov.cn',            desc:'吉林省公安厅，户籍管理、交通管理。',                         category:'gov', region:'jilin', type:'free', rating:4.5, icon:'吉' },
    { name:'吉林省民政厅',     url:'http://mzt.jl.gov.cn',            desc:'吉林省民政厅，社会救助、社区治理。',                         category:'gov', region:'jilin', type:'free', rating:4.3, icon:'吉' },
    { name:'吉林省司法厅',     url:'http://sft.jl.gov.cn',            desc:'吉林省司法厅，律师管理、法律援助。',                         category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省财政厅',     url:'http://czt.jl.gov.cn',            desc:'吉林省财政厅，财政预算、政府采购。',                         category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省人社厅',     url:'http://hrss.jl.gov.cn',           desc:'吉林省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省自然资源厅', url:'http://zrzy.jl.gov.cn',           desc:'吉林省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省生态环境厅', url:'http://sthjt.jl.gov.cn',          desc:'吉林省生态环境厅，污染防治、环保审批。',                     category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省住建厅',     url:'http://zjt.jl.gov.cn',            desc:'吉林省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省交通运输厅', url:'http://jt.jl.gov.cn',             desc:'吉林省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省水利厅',     url:'http://slt.jl.gov.cn',            desc:'吉林省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'jilin', type:'free', rating:4.3, icon:'吉' },
    { name:'吉林省农业农村厅', url:'http://nynct.jl.gov.cn',          desc:'吉林省农业农村厅，乡村振兴、农产品安全。',                   category:'gov', region:'jilin', type:'free', rating:4.3, icon:'吉' },
    { name:'吉林省商务厅',     url:'http://swt.jl.gov.cn',            desc:'吉林省商务厅，外贸促进、消费促进。',                         category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省文旅厅',     url:'http://whhlyt.jl.gov.cn',         desc:'吉林省文化和旅游厅，文化旅游、文物保护。',                   category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省卫健委',     url:'http://wsjkw.jl.gov.cn',          desc:'吉林省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省应急管理厅', url:'http://yjgl.jl.gov.cn',           desc:'吉林省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'jilin', type:'free', rating:4.3, icon:'吉' },
    { name:'吉林省市场监管局', url:'http://scjgj.jl.gov.cn',          desc:'吉林省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省医保局',     url:'http://ylbzj.jl.gov.cn',          desc:'吉林省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'jilin', type:'free', rating:4.4, icon:'吉' },
    { name:'吉林省统计局',     url:'http://tjj.jl.gov.cn',            desc:'吉林省统计局，经济数据、统计公报。',                         category:'gov', region:'jilin', type:'free', rating:4.3, icon:'吉' },
    { name:'吉林省体育局',     url:'http://tyj.jl.gov.cn',            desc:'吉林省体育局，全民健身、体育赛事。',                         category:'gov', region:'jilin', type:'free', rating:4.3, icon:'吉' },
    { name:'吉林省林草局',     url:'http://lcj.jl.gov.cn',            desc:'吉林省林业和草原局，生态保护修复。',                         category:'gov', region:'jilin', type:'free', rating:4.3, icon:'吉' },

    // --- 省级（东北）：黑龙江 ---
    { name:'黑龙江省人民政府', url:'https://www.hlj.gov.cn',          desc:'黑龙江省人民政府门户网站。',                               category:'gov', region:'heilongjiang', type:'free', rating:4.5, icon:'黑' },
    { name:'黑龙江省发改委',   url:'http://fgw.hlj.gov.cn',           desc:'黑龙江省发展和改革委员会，经济规划、重大项目。',             category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省教育厅',   url:'http://jyt.hlj.gov.cn',           desc:'黑龙江省教育厅，教育政策、招生考试。',                       category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省科技厅',   url:'http://kjt.hlj.gov.cn',           desc:'黑龙江省科学技术厅，科技创新、成果转化。',                   category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省工信厅',   url:'http://gxt.hlj.gov.cn',           desc:'黑龙江省工业和信息化厅，工业发展、数字经济。',               category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省公安厅',   url:'http://gat.hlj.gov.cn',           desc:'黑龙江省公安厅，户籍管理、交通管理、出入境。',               category:'gov', region:'heilongjiang', type:'free', rating:4.5, icon:'黑' },
    { name:'黑龙江省民政厅',   url:'http://mzt.hlj.gov.cn',           desc:'黑龙江省民政厅，社会救助、社区治理。',                       category:'gov', region:'heilongjiang', type:'free', rating:4.3, icon:'黑' },
    { name:'黑龙江省司法厅',   url:'http://sft.hlj.gov.cn',           desc:'黑龙江省司法厅，律师管理、法律援助。',                       category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省财政厅',   url:'http://czt.hlj.gov.cn',           desc:'黑龙江省财政厅，财政预算、政府采购。',                       category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省人社厅',   url:'http://hrss.hlj.gov.cn',          desc:'黑龙江省人力资源和社会保障厅，社保、就业、人才。',           category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省自然资源厅', url:'http://zrzyt.hlj.gov.cn',      desc:'黑龙江省自然资源厅，国土规划、矿产资源。',                   category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省生态环境厅', url:'http://sthjt.hlj.gov.cn',      desc:'黑龙江省生态环境厅，污染防治、环保审批。',                   category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省住建厅',   url:'http://zjt.hlj.gov.cn',           desc:'黑龙江省住房和城乡建设厅，住房保障、城市建设。',             category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省交通运输厅', url:'http://jt.hlj.gov.cn',          desc:'黑龙江省交通运输厅，公路水路、交通管理。',                   category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省水利厅',   url:'http://slt.hlj.gov.cn',           desc:'黑龙江省水利厅，水资源管理、防汛抗旱。',                     category:'gov', region:'heilongjiang', type:'free', rating:4.3, icon:'黑' },
    { name:'黑龙江省农业农村厅', url:'http://nynct.hlj.gov.cn',      desc:'黑龙江省农业农村厅，乡村振兴、农业现代化。',                 category:'gov', region:'heilongjiang', type:'free', rating:4.3, icon:'黑' },
    { name:'黑龙江省商务厅',   url:'http://swt.hlj.gov.cn',           desc:'黑龙江省商务厅，外贸促进、对俄合作。',                       category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省文旅厅',   url:'http://wlt.hlj.gov.cn',           desc:'黑龙江省文化和旅游厅，文化旅游、冰雪经济。',                 category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省卫健委',   url:'http://wsjkw.hlj.gov.cn',         desc:'黑龙江省卫生健康委员会，医疗服务、公共卫生。',               category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省应急管理厅', url:'http://yjgl.hlj.gov.cn',        desc:'黑龙江省应急管理厅，安全生产、应急救援。',                   category:'gov', region:'heilongjiang', type:'free', rating:4.3, icon:'黑' },
    { name:'黑龙江省市场监管局', url:'http://amr.hlj.gov.cn',         desc:'黑龙江省市场监督管理局，企业登记、食品安全。',               category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省医保局',   url:'http://ylbz.hlj.gov.cn',          desc:'黑龙江省医疗保障局，医保政策、医疗报销。',                   category:'gov', region:'heilongjiang', type:'free', rating:4.4, icon:'黑' },
    { name:'黑龙江省统计局',   url:'http://tjj.hlj.gov.cn',           desc:'黑龙江省统计局，经济数据、统计公报。',                       category:'gov', region:'heilongjiang', type:'free', rating:4.3, icon:'黑' },
    { name:'黑龙江省体育局',   url:'http://tyj.hlj.gov.cn',           desc:'黑龙江省体育局，全民健身、冰雪运动。',                       category:'gov', region:'heilongjiang', type:'free', rating:4.3, icon:'黑' },
    { name:'黑龙江省林草局',   url:'http://lcj.hlj.gov.cn',           desc:'黑龙江省林业和草原局，生态保护修复。',                       category:'gov', region:'heilongjiang', type:'free', rating:4.3, icon:'黑' },

    // --- 市级（华北）：河北 ---
    { name:'石家庄市人民政府', url:'https://www.sjz.gov.cn',          desc:'石家庄市人民政府门户网站，河北省省会，华北重镇。',         category:'gov', region:'hebei', city:'shijiazhuang', type:'free', rating:4.5, icon:'冀' },
    { name:'唐山市人民政府',   url:'https://www.tangshan.gov.cn',     desc:'唐山市人民政府门户网站，中国近代工业摇篮。',                 category:'gov', region:'hebei', city:'tangshan', type:'free', rating:4.5, icon:'冀' },
    { name:'秦皇岛市人民政府', url:'https://www.qhd.gov.cn',          desc:'秦皇岛市人民政府门户网站，避暑胜地、滨海旅游名城。',         category:'gov', region:'hebei', city:'qinhuangdao', type:'free', rating:4.5, icon:'冀' },
    { name:'邯郸市人民政府',   url:'https://www.hd.gov.cn',           desc:'邯郸市人民政府门户网站，三千年古都，成语典故之乡。',         category:'gov', region:'hebei', city:'handan', type:'free', rating:4.5, icon:'冀' },
    { name:'邢台市人民政府',   url:'https://www.xingtai.gov.cn',      desc:'邢台市人民政府门户网站，华北历史名城。',                     category:'gov', region:'hebei', city:'xingtai', type:'free', rating:4.5, icon:'冀' },
    { name:'保定市人民政府',   url:'https://www.baoding.gov.cn',      desc:'保定市人民政府门户网站，京畿重地，历史文化名城。',           category:'gov', region:'hebei', city:'baoding', type:'free', rating:4.5, icon:'冀' },
    { name:'张家口市人民政府', url:'https://www.zjk.gov.cn',          desc:'张家口市人民政府门户网站，冬奥之城，塞外山城。',             category:'gov', region:'hebei', city:'zhangjiakou', type:'free', rating:4.5, icon:'冀' },
    { name:'承德市人民政府',   url:'https://www.chengde.gov.cn',      desc:'承德市人民政府门户网站，避暑山庄所在地。',                   category:'gov', region:'hebei', city:'chengde', type:'free', rating:4.5, icon:'冀' },
    { name:'沧州市人民政府',   url:'https://www.cangzhou.gov.cn',     desc:'沧州市人民政府门户网站，武术之乡、杂技之乡。',             category:'gov', region:'hebei', city:'cangzhou', type:'free', rating:4.5, icon:'冀' },
    { name:'廊坊市人民政府',   url:'https://www.lf.gov.cn',           desc:'廊坊市人民政府门户网站，京津走廊上的明珠。',                 category:'gov', region:'hebei', city:'langfang', type:'free', rating:4.5, icon:'冀' },
    { name:'衡水市人民政府',   url:'https://www.hengshui.gov.cn',     desc:'衡水市人民政府门户网站，衡水老白干产地，教育名城。',         category:'gov', region:'hebei', city:'hengshui', type:'free', rating:4.5, icon:'冀' },

    // --- 市级（华北）：山西 ---
    { name:'太原市人民政府',   url:'https://www.taiyuan.gov.cn',      desc:'太原市人民政府门户网站，山西省会，龙城太原。',               category:'gov', region:'shanxi', city:'taiyuan', type:'free', rating:4.5, icon:'晋' },
    { name:'大同市人民政府',   url:'https://www.datong.gov.cn',       desc:'大同市人民政府门户网站，煤都，云冈石窟。',                   category:'gov', region:'shanxi', city:'datong', type:'free', rating:4.5, icon:'晋' },
    { name:'阳泉市人民政府',   url:'https://www.yq.gov.cn',           desc:'阳泉市人民政府门户网站，中共第一城。',                       category:'gov', region:'shanxi', city:'yangquan', type:'free', rating:4.5, icon:'晋' },
    { name:'长治市人民政府',   url:'https://www.changzhi.gov.cn',     desc:'长治市人民政府门户网站，太行明珠，上党名城。',               category:'gov', region:'shanxi', city:'changzhi', type:'free', rating:4.5, icon:'晋' },
    { name:'晋城市人民政府',   url:'https://www.jincheng.gov.cn',     desc:'晋城市人民政府门户网站，围棋故乡。',                         category:'gov', region:'shanxi', city:'jincheng', type:'free', rating:4.5, icon:'晋' },
    { name:'朔州市人民政府',   url:'https://www.shuozhou.gov.cn',     desc:'朔州市人民政府门户网站，塞上绿洲。',                         category:'gov', region:'shanxi', city:'shuozhou', type:'free', rating:4.5, icon:'晋' },
    { name:'晋中市人民政府',   url:'https://www.jinzhong.gov.cn',     desc:'晋中市人民政府门户网站，晋商故里，平遥古城。',               category:'gov', region:'shanxi', city:'jinzhong', type:'free', rating:4.5, icon:'晋' },
    { name:'运城市人民政府',   url:'https://www.yuncheng.gov.cn',     desc:'运城市人民政府门户网站，关公故里。',                         category:'gov', region:'shanxi', city:'yuncheng', type:'free', rating:4.5, icon:'晋' },
    { name:'忻州市人民政府',   url:'https://www.xinzhou.gov.cn',      desc:'忻州市人民政府门户网站，五台山所在地。',                     category:'gov', region:'shanxi', city:'xinzhou', type:'free', rating:4.5, icon:'晋' },
    { name:'临汾市人民政府',   url:'https://www.linfen.gov.cn',       desc:'临汾市人民政府门户网站，帝尧故都。',                         category:'gov', region:'shanxi', city:'linfen', type:'free', rating:4.5, icon:'晋' },
    { name:'吕梁市人民政府',   url:'https://www.lvliang.gov.cn',      desc:'吕梁市人民政府门户网站，白酒之乡。',                         category:'gov', region:'shanxi', city:'lvliang', type:'free', rating:4.5, icon:'晋' },

    // --- 市级（华北）：内蒙古 ---
    { name:'呼和浩特市人民政府', url:'https://www.hohhot.gov.cn',    desc:'呼和浩特市人民政府门户网站，内蒙古首府，青色之城。',         category:'gov', region:'neimenggu', city:'huhehaote', type:'free', rating:4.5, icon:'蒙' },
    { name:'包头市人民政府',   url:'https://www.baotou.gov.cn',       desc:'包头市人民政府门户网站，稀土之都、草原钢城。',               category:'gov', region:'neimenggu', city:'baotou', type:'free', rating:4.5, icon:'蒙' },
    { name:'乌海市人民政府',   url:'https://www.wuhai.gov.cn',        desc:'乌海市人民政府门户网站，黄河明珠、书法之城。',               category:'gov', region:'neimenggu', city:'wuhai', type:'free', rating:4.5, icon:'蒙' },
    { name:'赤峰市人民政府',   url:'https://www.chifeng.gov.cn',      desc:'赤峰市人民政府门户网站，红山文化发源地。',                   category:'gov', region:'neimenggu', city:'chifeng', type:'free', rating:4.5, icon:'蒙' },
    { name:'通辽市人民政府',   url:'https://www.tongliao.gov.cn',     desc:'通辽市人民政府门户网站，科尔沁草原腹地。',                   category:'gov', region:'neimenggu', city:'tongliao', type:'free', rating:4.5, icon:'蒙' },
    { name:'鄂尔多斯市人民政府', url:'https://www.ordos.gov.cn',     desc:'鄂尔多斯市人民政府门户网站，天骄圣地、成吉思汗陵。',         category:'gov', region:'neimenggu', city:'ordos', type:'free', rating:4.5, icon:'蒙' },
    { name:'呼伦贝尔市人民政府', url:'https://www.hlbe.gov.cn',      desc:'呼伦贝尔市人民政府门户网站，世界四大草原之一。',             category:'gov', region:'neimenggu', city:'hulunbeier', type:'free', rating:4.5, icon:'蒙' },
    { name:'巴彦淖尔市人民政府', url:'https://www.bynr.gov.cn',      desc:'巴彦淖尔市人民政府门户网站，河套平原。',                     category:'gov', region:'neimenggu', city:'bayannaoer', type:'free', rating:4.5, icon:'蒙' },
    { name:'乌兰察布市人民政府', url:'https://www.wulanchabu.gov.cn', desc:'乌兰察布市人民政府门户网站，中国薯都、草原云谷。',         category:'gov', region:'neimenggu', city:'wulanchabu', type:'free', rating:4.5, icon:'蒙' },

    // --- 市级（东北）：辽宁 ---
    { name:'沈阳市人民政府',   url:'https://www.shenyang.gov.cn',     desc:'沈阳市人民政府门户网站，辽宁省会，东北中心城市。',           category:'gov', region:'liaoning', city:'shenyang', type:'free', rating:4.6, icon:'辽' },
    { name:'大连市人民政府',   url:'https://www.dalian.gov.cn',       desc:'大连市人民政府门户网站，浪漫之都、北方明珠。',               category:'gov', region:'liaoning', city:'dalian', type:'free', rating:4.6, icon:'辽' },
    { name:'鞍山市人民政府',   url:'https://www.anshan.gov.cn',       desc:'鞍山市人民政府门户网站，共和国钢都。',                       category:'gov', region:'liaoning', city:'anshan', type:'free', rating:4.5, icon:'辽' },
    { name:'抚顺市人民政府',   url:'https://www.fushun.gov.cn',       desc:'抚顺市人民政府门户网站，雷锋故乡、煤都。',                   category:'gov', region:'liaoning', city:'fushun', type:'free', rating:4.4, icon:'辽' },
    { name:'本溪市人民政府',   url:'https://www.benxi.gov.cn',        desc:'本溪市人民政府门户网站，枫叶之都、钢铁之城。',               category:'gov', region:'liaoning', city:'benxi', type:'free', rating:4.4, icon:'辽' },
    { name:'丹东市人民政府',   url:'https://www.dandong.gov.cn',      desc:'丹东市人民政府门户网站，中国最大边境城市。',                   category:'gov', region:'liaoning', city:'dandong', type:'free', rating:4.5, icon:'辽' },
    { name:'锦州市人民政府',   url:'https://www.jinzhou.gov.cn',      desc:'锦州市人民政府门户网站，锦绣之州。',                         category:'gov', region:'liaoning', city:'jinzhou', type:'free', rating:4.4, icon:'辽' },
    { name:'营口市人民政府',   url:'https://www.yingkou.gov.cn',      desc:'营口市人民政府门户网站，辽东湾经济中心。',                   category:'gov', region:'liaoning', city:'yingkou', type:'free', rating:4.4, icon:'辽' },
    { name:'阜新市人民政府',   url:'https://www.fuxin.gov.cn',        desc:'阜新市人民政府门户网站，中国玛瑙之都。',                     category:'gov', region:'liaoning', city:'fuxin', type:'free', rating:4.4, icon:'辽' },
    { name:'辽阳市人民政府',   url:'https://www.liaoyang.gov.cn',     desc:'辽阳市人民政府门户网站，东北最古老城市之一。',               category:'gov', region:'liaoning', city:'liaoyang', type:'free', rating:4.4, icon:'辽' },
    { name:'盘锦市人民政府',   url:'https://www.panjin.gov.cn',       desc:'盘锦市人民政府门户网站，湿地之都、鹤乡红海滩。',             category:'gov', region:'liaoning', city:'panjin', type:'free', rating:4.4, icon:'辽' },
    { name:'铁岭市人民政府',   url:'https://www.tieling.gov.cn',      desc:'铁岭市人民政府门户网站，小品之乡、欢乐之城。',               category:'gov', region:'liaoning', city:'tieling', type:'free', rating:4.4, icon:'辽' },
    { name:'朝阳市人民政府',   url:'https://www.chaoyang.gov.cn',     desc:'朝阳市人民政府门户网站，红山文化、化石之都。',               category:'gov', region:'liaoning', city:'chaoyangln', type:'free', rating:4.4, icon:'辽' },
    { name:'葫芦岛市人民政府', url:'https://www.huludao.gov.cn',      desc:'葫芦岛市人民政府门户网站，关外第一市、渤海湾畔。',           category:'gov', region:'liaoning', city:'huludao', type:'free', rating:4.4, icon:'辽' },

    // --- 市级（东北）：吉林 ---
    { name:'长春市人民政府',   url:'https://www.changchun.gov.cn',    desc:'长春市人民政府门户网站，吉林省会，汽车城、电影城。',         category:'gov', region:'jilin', city:'changchun', type:'free', rating:4.6, icon:'吉' },
    { name:'吉林市人民政府',   url:'https://www.jilin.gov.cn',        desc:'吉林市人民政府门户网站，北国江城、雾凇之都。',               category:'gov', region:'jilin', city:'jilincity', type:'free', rating:4.5, icon:'吉' },
    { name:'四平市人民政府',   url:'https://www.siping.gov.cn',       desc:'四平市人民政府门户网站，英雄城。',                           category:'gov', region:'jilin', city:'siping', type:'free', rating:4.4, icon:'吉' },
    { name:'辽源市人民政府',   url:'https://www.liaoyuan.gov.cn',     desc:'辽源市人民政府门户网站，中国袜业名城。',                     category:'gov', region:'jilin', city:'liaoyuan', type:'free', rating:4.4, icon:'吉' },
    { name:'通化市人民政府',   url:'https://www.tonghua.gov.cn',      desc:'通化市人民政府门户网站，中国医药城。',                       category:'gov', region:'jilin', city:'tonghua', type:'free', rating:4.4, icon:'吉' },
    { name:'白山市人民政府',   url:'https://www.baishan.gov.cn',      desc:'白山市人民政府门户网站，长白山腹地。',                       category:'gov', region:'jilin', city:'baishan', type:'free', rating:4.4, icon:'吉' },
    { name:'松原市人民政府',   url:'https://www.songyuan.gov.cn',     desc:'松原市人民政府门户网站，能源新城。',                         category:'gov', region:'jilin', city:'songyuan', type:'free', rating:4.4, icon:'吉' },
    { name:'白城市人民政府',   url:'https://www.baicheng.gov.cn',     desc:'白城市人民政府门户网站，鹤乡白城。',                         category:'gov', region:'jilin', city:'baicheng', type:'free', rating:4.4, icon:'吉' },
    { name:'延边州人民政府',   url:'https://www.yanbian.gov.cn',      desc:'延边朝鲜族自治州人民政府门户网站。',                       category:'gov', region:'jilin', city:'yanbian', type:'free', rating:4.5, icon:'吉' },

    // --- 市级（东北）：黑龙江 ---
    { name:'哈尔滨市人民政府', url:'https://www.harbin.gov.cn',       desc:'哈尔滨市人民政府门户网站，冰城夏都、东方莫斯科。',           category:'gov', region:'heilongjiang', city:'haerbin', type:'free', rating:4.6, icon:'黑' },
    { name:'齐齐哈尔市人民政府', url:'https://www.qiqihaer.gov.cn',   desc:'齐齐哈尔市人民政府门户网站，鹤城、丹顶鹤故乡。',             category:'gov', region:'heilongjiang', city:'qiqihaer', type:'free', rating:4.5, icon:'黑' },
    { name:'鸡西市人民政府',   url:'https://www.jixi.gov.cn',          desc:'鸡西市人民政府门户网站，中国石墨之都。',                     category:'gov', region:'heilongjiang', city:'jixi', type:'free', rating:4.4, icon:'黑' },
    { name:'鹤岗市人民政府',   url:'https://www.hegang.gov.cn',        desc:'鹤岗市人民政府门户网站，界江之都。',                         category:'gov', region:'heilongjiang', city:'hegang', type:'free', rating:4.3, icon:'黑' },
    { name:'双鸭山市人民政府', url:'https://www.shuangyashan.gov.cn',  desc:'双鸭山市人民政府门户网站，煤城、挹娄文化发源地。',           category:'gov', region:'heilongjiang', city:'shuangyashan', type:'free', rating:4.4, icon:'黑' },
    { name:'大庆市人民政府',   url:'https://www.daqing.gov.cn',        desc:'大庆市人民政府门户网站，石油之城、百湖之城。',               category:'gov', region:'heilongjiang', city:'daqing', type:'free', rating:4.5, icon:'黑' },
    { name:'伊春市人民政府',   url:'https://www.yichun.gov.cn',        desc:'伊春市人民政府门户网站，中国林都、红松故乡。',               category:'gov', region:'heilongjiang', city:'yichunhlj', type:'free', rating:4.3, icon:'黑' },
    { name:'佳木斯市人民政府', url:'https://www.jiamusi.gov.cn',       desc:'佳木斯市人民政府门户网站，华夏东极。',                       category:'gov', region:'heilongjiang', city:'jiamusi', type:'free', rating:4.4, icon:'黑' },
    { name:'七台河市人民政府', url:'https://www.qitaihe.gov.cn',       desc:'七台河市人民政府门户网站，奥运冠军之城。',                   category:'gov', region:'heilongjiang', city:'qitaihe', type:'free', rating:4.3, icon:'黑' },
    { name:'牡丹江市人民政府', url:'https://www.mudanjiang.gov.cn',    desc:'牡丹江市人民政府门户网站，雪城、中国雪乡。',                 category:'gov', region:'heilongjiang', city:'mudanjiang', type:'free', rating:4.5, icon:'黑' },
    { name:'黑河市人民政府',   url:'https://www.heihe.gov.cn',         desc:'黑河市人民政府门户网站，中俄边境之窗。',                     category:'gov', region:'heilongjiang', city:'heihe', type:'free', rating:4.4, icon:'黑' },
    { name:'绥化市人民政府',   url:'https://www.suihua.gov.cn',        desc:'绥化市人民政府门户网站，寒地黑土特色农业之都。',             category:'gov', region:'heilongjiang', city:'suihua', type:'free', rating:4.4, icon:'黑' },
    { name:'大兴安岭地区行政公署', url:'https://www.dxal.gov.cn',     desc:'大兴安岭地区行政公署，中国最北端。',                         category:'gov', region:'heilongjiang', city:'daxinganling', type:'free', rating:4.3, icon:'黑' },

    // --- 市级（华东）：江苏 ---
    { name:'南京市人民政府',   url:'https://www.nanjing.gov.cn',      desc:'南京市人民政府门户网站，江苏省会，六朝古都。',               category:'gov', region:'jiangsu', city:'nanjing', type:'free', rating:4.6, icon:'苏' },
    { name:'无锡市人民政府',   url:'https://www.wuxi.gov.cn',         desc:'无锡市人民政府门户网站，太湖明珠、工商名城。',               category:'gov', region:'jiangsu', city:'wuxi', type:'free', rating:4.5, icon:'苏' },
    { name:'徐州市人民政府',   url:'https://www.xz.gov.cn',           desc:'徐州市人民政府门户网站，淮海经济区中心城市。',               category:'gov', region:'jiangsu', city:'xuzhou', type:'free', rating:4.5, icon:'苏' },
    { name:'常州市人民政府',   url:'https://www.changzhou.gov.cn',     desc:'常州市人民政府门户网站，龙城之邦、智造之都。',               category:'gov', region:'jiangsu', city:'changzhou', type:'free', rating:4.5, icon:'苏' },
    { name:'苏州市人民政府',   url:'https://www.suzhou.gov.cn',       desc:'苏州市人民政府门户网站，上有天堂下有苏杭。',                 category:'gov', region:'jiangsu', city:'suzhoujs', type:'free', rating:4.7, icon:'苏' },
    { name:'南通市人民政府',   url:'https://www.nantong.gov.cn',      desc:'南通市人民政府门户网站，江海门户、教育之乡。',               category:'gov', region:'jiangsu', city:'nantong', type:'free', rating:4.5, icon:'苏' },
    { name:'连云港市人民政府', url:'https://www.lyg.gov.cn',          desc:'连云港市人民政府门户网站，新亚欧大陆桥东方桥头堡。',         category:'gov', region:'jiangsu', city:'lianyungang', type:'free', rating:4.4, icon:'苏' },
    { name:'淮安市人民政府',   url:'https://www.huaian.gov.cn',       desc:'淮安市人民政府门户网站，运河之都、淮扬菜发源地。',           category:'gov', region:'jiangsu', city:'huaian', type:'free', rating:4.4, icon:'苏' },
    { name:'盐城市人民政府',   url:'https://www.yancheng.gov.cn',     desc:'盐城市人民政府门户网站，丹顶鹤第二故乡。',                   category:'gov', region:'jiangsu', city:'yancheng', type:'free', rating:4.4, icon:'苏' },
    { name:'扬州市人民政府',   url:'https://www.yangzhou.gov.cn',     desc:'扬州市人民政府门户网站，烟花三月下扬州。',                   category:'gov', region:'jiangsu', city:'yangzhou', type:'free', rating:4.5, icon:'苏' },
    { name:'镇江市人民政府',   url:'https://www.zhenjiang.gov.cn',    desc:'镇江市人民政府门户网站，满眼风光北固楼。',                   category:'gov', region:'jiangsu', city:'zhenjiang', type:'free', rating:4.4, icon:'苏' },
    { name:'泰州市人民政府',   url:'https://www.taizhou.gov.cn',      desc:'泰州市人民政府门户网站，水城慢生活。',                       category:'gov', region:'jiangsu', city:'taizhoujs', type:'free', rating:4.4, icon:'苏' },
    { name:'宿迁市人民政府',   url:'https://www.suqian.gov.cn',       desc:'宿迁市人民政府门户网站，项王故里、中国酒都。',               category:'gov', region:'jiangsu', city:'suqian', type:'free', rating:4.4, icon:'苏' },

    // --- 市级（华东）：浙江 ---
    { name:'杭州市人民政府',   url:'https://www.hangzhou.gov.cn',     desc:'杭州人民政府门户网站，浙江省会，人间天堂。',                 category:'gov', region:'zhejiang', city:'hangzhou', type:'free', rating:4.7, icon:'浙' },
    { name:'宁波市人民政府',   url:'https://www.ningbo.gov.cn',       desc:'宁波市人民政府门户网站，书藏古今、港通天下。',               category:'gov', region:'zhejiang', city:'ningbo', type:'free', rating:4.6, icon:'浙' },
    { name:'温州市人民政府',   url:'https://www.wenzhou.gov.cn',      desc:'温州市人民政府门户网站，中国民营经济发源地。',               category:'gov', region:'zhejiang', city:'wenzhou', type:'free', rating:4.5, icon:'浙' },
    { name:'嘉兴市人民政府',   url:'https://www.jiaxing.gov.cn',      desc:'嘉兴市人民政府门户网站，红船启航地、江南文化之源。',         category:'gov', region:'zhejiang', city:'jiaxing', type:'free', rating:4.5, icon:'浙' },
    { name:'湖州市人民政府',   url:'https://www.huzhou.gov.cn',       desc:'湖州市人民政府门户网站，太湖之滨、丝绸之府。',               category:'gov', region:'zhejiang', city:'huzhou', type:'free', rating:4.5, icon:'浙' },
    { name:'绍兴市人民政府',   url:'https://www.shaoxing.gov.cn',     desc:'绍兴市人民政府门户网站，江南水乡、名士之乡。',               category:'gov', region:'zhejiang', city:'shaoxing', type:'free', rating:4.5, icon:'浙' },
    { name:'金华市人民政府',   url:'https://www.jinhua.gov.cn',       desc:'金华市人民政府门户网站，婺州古城、火腿之乡。',               category:'gov', region:'zhejiang', city:'jinhua', type:'free', rating:4.5, icon:'浙' },
    { name:'衢州市人民政府',   url:'https://www.quzhou.gov.cn',       desc:'衢州市人民政府门户网站，南孔圣地。',                         category:'gov', region:'zhejiang', city:'quzhou', type:'free', rating:4.4, icon:'浙' },
    { name:'舟山市人民政府',   url:'https://www.zhoushan.gov.cn',     desc:'舟山市人民政府门户网站，千岛之城、渔都港城。',               category:'gov', region:'zhejiang', city:'zhoushan', type:'free', rating:4.4, icon:'浙' },
    { name:'台州市人民政府',   url:'https://www.taizhou.gov.cn',      desc:'台州市人民政府门户网站，山海之城、制造之都。',               category:'gov', region:'zhejiang', city:'taizhouzj', type:'free', rating:4.5, icon:'浙' },
    { name:'丽水市人民政府',   url:'https://www.lishui.gov.cn',       desc:'丽水市人民政府门户网站，秀山丽水、养生福地。',               category:'gov', region:'zhejiang', city:'lishui', type:'free', rating:4.4, icon:'浙' },

    // --- 市级（华东）：安徽 ---
    { name:'合肥市人民政府',   url:'https://www.hefei.gov.cn',        desc:'合肥市人民政府门户网站，安徽省会，大湖名城。',               category:'gov', region:'anhui', city:'hefei', type:'free', rating:4.6, icon:'皖' },
    { name:'芜湖市人民政府',   url:'https://www.wuhu.gov.cn',         desc:'芜湖市人民政府门户网站，皖江明珠、创新之城。',               category:'gov', region:'anhui', city:'wuhu', type:'free', rating:4.5, icon:'皖' },
    { name:'蚌埠市人民政府',   url:'https://www.bengbu.gov.cn',       desc:'蚌埠市人民政府门户网站，珍珠之城、淮河明珠。',               category:'gov', region:'anhui', city:'bengbu', type:'free', rating:4.4, icon:'皖' },
    { name:'淮南市人民政府',   url:'https://www.huainan.gov.cn',      desc:'淮南市人民政府门户网站，煤都、豆腐故里。',                   category:'gov', region:'anhui', city:'huainan', type:'free', rating:4.4, icon:'皖' },
    { name:'马鞍山市人民政府', url:'https://www.mas.gov.cn',          desc:'马鞍山市人民政府门户网站，钢城、诗城李白终老之地。',         category:'gov', region:'anhui', city:'maanshan', type:'free', rating:4.4, icon:'皖' },
    { name:'淮北市人民政府',   url:'https://www.huaibei.gov.cn',      desc:'淮北市人民政府门户网站，皖北粮仓、煤城。',                   category:'gov', region:'anhui', city:'huaibei', type:'free', rating:4.4, icon:'皖' },
    { name:'铜陵市人民政府',   url:'https://www.tongling.gov.cn',     desc:'铜陵市人民政府门户网站，中国古铜都。',                       category:'gov', region:'anhui', city:'tongling', type:'free', rating:4.4, icon:'皖' },
    { name:'安庆市人民政府',   url:'https://www.anqing.gov.cn',       desc:'安庆市人民政府门户网站，黄梅戏之乡。',                       category:'gov', region:'anhui', city:'anqing', type:'free', rating:4.4, icon:'皖' },
    { name:'黄山市人民政府',   url:'https://www.huangshan.gov.cn',    desc:'黄山市人民政府门户网站，天下第一奇山。',                     category:'gov', region:'anhui', city:'huangshan', type:'free', rating:4.5, icon:'皖' },
    { name:'滁州市人民政府',   url:'https://www.chuzhou.gov.cn',      desc:'滁州市人民政府门户网站，醉翁亭记故地。',                     category:'gov', region:'anhui', city:'chuzhou', type:'free', rating:4.4, icon:'皖' },
    { name:'阜阳市人民政府',   url:'https://www.fuyang.gov.cn',       desc:'阜阳市人民政府门户网站，皖北重镇。',                         category:'gov', region:'anhui', city:'fuyang', type:'free', rating:4.4, icon:'皖' },
    { name:'宿州市人民政府',   url:'https://www.ahsz.gov.cn',         desc:'宿州市人民政府门户网站，云都、宿州书画之乡。',               category:'gov', region:'anhui', city:'suzhouah', type:'free', rating:4.4, icon:'皖' },
    { name:'六安市人民政府',   url:'https://www.luan.gov.cn',         desc:'六安市人民政府门户网站，皖西革命老区、茶都。',               category:'gov', region:'anhui', city:'luan', type:'free', rating:4.4, icon:'皖' },
    { name:'亳州市人民政府',   url:'https://www.bozhou.gov.cn',       desc:'亳州市人民政府门户网站，中华药都。',                         category:'gov', region:'anhui', city:'bozhou', type:'free', rating:4.4, icon:'皖' },
    { name:'池州市人民政府',   url:'https://www.chizhou.gov.cn',      desc:'池州市人民政府门户网站，千载诗人地。',                       category:'gov', region:'anhui', city:'chizhou', type:'free', rating:4.4, icon:'皖' },
    { name:'宣城市人民政府',   url:'https://www.xuancheng.gov.cn',    desc:'宣城市人民政府门户网站，文房四宝之城。',                     category:'gov', region:'anhui', city:'xuancheng', type:'free', rating:4.4, icon:'皖' },

    // --- 市级（华东）：福建 ---
    { name:'福州市人民政府',   url:'https://www.fuzhou.gov.cn',       desc:'福州市人民政府门户网站，福建省会，有福之州。',               category:'gov', region:'fujian', city:'fuzhou', type:'free', rating:4.6, icon:'闽' },
    { name:'厦门市人民政府',   url:'https://www.xm.gov.cn',           desc:'厦门市人民政府门户网站，鹭岛、海上花园。',                   category:'gov', region:'fujian', city:'xiamen', type:'free', rating:4.7, icon:'闽' },
    { name:'莆田市人民政府',   url:'https://www.putian.gov.cn',       desc:'莆田市人民政府门户网站，妈祖故乡。',                         category:'gov', region:'fujian', city:'putian', type:'free', rating:4.5, icon:'闽' },
    { name:'三明市人民政府',   url:'https://www.sanming.gov.cn',      desc:'三明市人民政府门户网站，中国绿都。',                         category:'gov', region:'fujian', city:'sanming', type:'free', rating:4.4, icon:'闽' },
    { name:'泉州市人民政府',   url:'https://www.quanzhou.gov.cn',     desc:'泉州市人民政府门户网站，世遗之城、海上丝绸之路起点。',       category:'gov', region:'fujian', city:'quanzhou', type:'free', rating:4.6, icon:'闽' },
    { name:'漳州市人民政府',   url:'https://www.zhangzhou.gov.cn',    desc:'漳州市人民政府门户网站，花果之城、鱼米之乡。',               category:'gov', region:'fujian', city:'zhangzhou', type:'free', rating:4.5, icon:'闽' },
    { name:'南平市人民政府',   url:'https://www.nanping.gov.cn',      desc:'南平市人民政府门户网站，武夷茶都。',                         category:'gov', region:'fujian', city:'nanping', type:'free', rating:4.4, icon:'闽' },
    { name:'龙岩市人民政府',   url:'https://www.longyan.gov.cn',      desc:'龙岩市人民政府门户网站，客家祖地、红色摇篮。',               category:'gov', region:'fujian', city:'longyan', type:'free', rating:4.4, icon:'闽' },
    { name:'宁德市人民政府',   url:'https://www.ningde.gov.cn',       desc:'宁德市人民政府门户网站，山海之城、宁德时代。',               category:'gov', region:'fujian', city:'ningde', type:'free', rating:4.5, icon:'闽' },

    // --- 市级（华东）：江西 ---
    { name:'南昌市人民政府',   url:'https://www.nanchang.gov.cn',     desc:'南昌市人民政府门户网站，江西省会，英雄城。',                 category:'gov', region:'jiangxi', city:'nanchang', type:'free', rating:4.6, icon:'赣' },
    { name:'景德镇市人民政府', url:'https://www.jingdezhen.gov.cn',   desc:'景德镇市人民政府门户网站，瓷都。',                           category:'gov', region:'jiangxi', city:'jingdezhen', type:'free', rating:4.5, icon:'赣' },
    { name:'萍乡市人民政府',   url:'https://www.pingxiang.gov.cn',    desc:'萍乡市人民政府门户网站，安源工运发源地。',                   category:'gov', region:'jiangxi', city:'pingxiang', type:'free', rating:4.4, icon:'赣' },
    { name:'九江市人民政府',   url:'https://www.jiujiang.gov.cn',     desc:'九江市人民政府门户网站，庐山天下悠。',                       category:'gov', region:'jiangxi', city:'jiujiang', type:'free', rating:4.5, icon:'赣' },
    { name:'新余市人民政府',   url:'https://www.xinyu.gov.cn',        desc:'新余市人民政府门户网站，钢城、仙女湖畔。',                   category:'gov', region:'jiangxi', city:'xinyu', type:'free', rating:4.4, icon:'赣' },
    { name:'鹰潭市人民政府',   url:'https://www.yingtan.gov.cn',      desc:'鹰潭市人民政府门户网站，铜都、龙虎山。',                     category:'gov', region:'jiangxi', city:'yingtan', type:'free', rating:4.4, icon:'赣' },
    { name:'赣州市人民政府',   url:'https://www.ganzhou.gov.cn',      desc:'赣州市人民政府门户网站，客家摇篮、红色故都。',               category:'gov', region:'jiangxi', city:'ganzhou', type:'free', rating:4.5, icon:'赣' },
    { name:'吉安市人民政府',   url:'https://www.jian.gov.cn',         desc:'吉安市人民政府门户网站，井冈山革命圣地。',                   category:'gov', region:'jiangxi', city:'jian', type:'free', rating:4.5, icon:'赣' },
    { name:'宜春市人民政府',   url:'https://www.yichun.gov.cn',       desc:'宜春市人民政府门户网站，月亮之都、亚洲锂都。',               category:'gov', region:'jiangxi', city:'yichunjx', type:'free', rating:4.4, icon:'赣' },
    { name:'抚州市人民政府',   url:'https://www.fuzhou.gov.cn',       desc:'抚州市人民政府门户网站，才子之乡、文化之邦。',               category:'gov', region:'jiangxi', city:'fuzhoujx', type:'free', rating:4.4, icon:'赣' },
    { name:'上饶市人民政府',   url:'https://www.shangrao.gov.cn',     desc:'上饶市人民政府门户网站，八方通衢、豫章第一门户。',           category:'gov', region:'jiangxi', city:'shangrao', type:'free', rating:4.4, icon:'赣' },

    // --- 市级（华东）：山东 ---
    { name:'济南市人民政府',   url:'https://www.jinan.gov.cn',        desc:'济南市人民政府门户网站，山东省会，泉城。',                   category:'gov', region:'shandong', city:'jinan', type:'free', rating:4.6, icon:'鲁' },
    { name:'青岛市人民政府',   url:'https://www.qingdao.gov.cn',      desc:'青岛市人民政府门户网站，帆船之都、啤酒之城。',               category:'gov', region:'shandong', city:'qingdao', type:'free', rating:4.7, icon:'鲁' },
    { name:'淄博市人民政府',   url:'https://www.zibo.gov.cn',         desc:'淄博市人民政府门户网站，齐国故都、陶瓷之城。',               category:'gov', region:'shandong', city:'zibo', type:'free', rating:4.5, icon:'鲁' },
    { name:'枣庄市人民政府',   url:'https://www.zaozhuang.gov.cn',    desc:'枣庄市人民政府门户网站，铁道游击队故乡。',                   category:'gov', region:'shandong', city:'zaozhuang', type:'free', rating:4.4, icon:'鲁' },
    { name:'东营市人民政府',   url:'https://www.dongying.gov.cn',     desc:'东营市人民政府门户网站，黄河入海口、石油之城。',             category:'gov', region:'shandong', city:'dongying', type:'free', rating:4.4, icon:'鲁' },
    { name:'烟台市人民政府',   url:'https://www.yantai.gov.cn',       desc:'烟台市人民政府门户网站，山海仙境、葡萄酒城。',               category:'gov', region:'shandong', city:'yantai', type:'free', rating:4.6, icon:'鲁' },
    { name:'潍坊市人民政府',   url:'https://www.weifang.gov.cn',      desc:'潍坊市人民政府门户网站，世界风筝都。',                       category:'gov', region:'shandong', city:'weifang', type:'free', rating:4.5, icon:'鲁' },
    { name:'济宁市人民政府',   url:'https://www.jining.gov.cn',       desc:'济宁市人民政府门户网站，孔孟之乡、运河之都。',               category:'gov', region:'shandong', city:'jining', type:'free', rating:4.5, icon:'鲁' },
    { name:'泰安市人民政府',   url:'https://www.taian.gov.cn',        desc:'泰安市人民政府门户网站，五岳独尊泰山。',                     category:'gov', region:'shandong', city:'taian', type:'free', rating:4.5, icon:'鲁' },
    { name:'威海市人民政府',   url:'https://www.weihai.gov.cn',       desc:'威海市人民政府门户网站，宜居之城、海鲜之都。',               category:'gov', region:'shandong', city:'weihai', type:'free', rating:4.5, icon:'鲁' },
    { name:'日照市人民政府',   url:'https://www.rizhao.gov.cn',       desc:'日照市人民政府门户网站，日出先照之地。',                     category:'gov', region:'shandong', city:'rizhao', type:'free', rating:4.4, icon:'鲁' },
    { name:'临沂市人民政府',   url:'https://www.linyi.gov.cn',        desc:'临沂市人民政府门户网站，物流之都、书圣故里。',               category:'gov', region:'shandong', city:'linyi', type:'free', rating:4.5, icon:'鲁' },
    { name:'德州市人民政府',   url:'https://www.dezhou.gov.cn',       desc:'德州市人民政府门户网站，中国太阳城。',                       category:'gov', region:'shandong', city:'dezhou', type:'free', rating:4.4, icon:'鲁' },
    { name:'聊城市人民政府',   url:'https://www.liaocheng.gov.cn',    desc:'聊城市人民政府门户网站，江北水城。',                         category:'gov', region:'shandong', city:'liaocheng', type:'free', rating:4.4, icon:'鲁' },
    { name:'滨州市人民政府',   url:'https://www.binzhou.gov.cn',      desc:'滨州市人民政府门户网站，孙子故里。',                         category:'gov', region:'shandong', city:'binzhou', type:'free', rating:4.4, icon:'鲁' },
    { name:'菏泽市人民政府',   url:'https://www.heze.gov.cn',         desc:'菏泽市人民政府门户网站，牡丹之都。',                         category:'gov', region:'shandong', city:'heze', type:'free', rating:4.4, icon:'鲁' },

    // --- 省级（华东）：江苏 ---
    { name:'江苏省人民政府',   url:'https://www.jiangsu.gov.cn',      desc:'江苏省人民政府门户网站，经济大省、科教强省。',               category:'gov', region:'jiangsu', type:'free', rating:4.7, icon:'苏' },
    { name:'江苏省发改委',     url:'http://fgw.jiangsu.gov.cn',       desc:'江苏省发展和改革委员会，经济规划、重大项目。',               category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省教育厅',     url:'http://jyt.jiangsu.gov.cn',       desc:'江苏省教育厅，教育政策、招生考试。',                         category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省科技厅',     url:'http://kjt.jiangsu.gov.cn',       desc:'江苏省科学技术厅，科技创新、高新技术企业。',                   category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省工信厅',     url:'http://gxt.jiangsu.gov.cn',       desc:'江苏省工业和信息化厅，制造业强省、数字经济。',                 category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省公安厅',     url:'http://gat.jiangsu.gov.cn',       desc:'江苏省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'jiangsu', type:'free', rating:4.6, icon:'苏' },
    { name:'江苏省民政厅',     url:'http://mzt.jiangsu.gov.cn',       desc:'江苏省民政厅，社会救助、社区治理。',                         category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省司法厅',     url:'http://sft.jiangsu.gov.cn',       desc:'江苏省司法厅，律师管理、法律援助。',                         category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省财政厅',     url:'http://czt.jiangsu.gov.cn',       desc:'江苏省财政厅，财政预算、政府采购。',                         category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省人社厅',     url:'http://jshrss.jiangsu.gov.cn',    desc:'江苏省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省自然资源厅', url:'http://zrzy.jiangsu.gov.cn',      desc:'江苏省自然资源厅，国土规划、海洋管理。',                     category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省生态环境厅', url:'http://sthjt.jiangsu.gov.cn',     desc:'江苏省生态环境厅，污染防治、太湖治理。',                     category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省住建厅',     url:'http://jst.jiangsu.gov.cn',       desc:'江苏省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省交通运输厅', url:'http://jt.jiangsu.gov.cn',        desc:'江苏省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省水利厅',     url:'http://jsslt.jiangsu.gov.cn',     desc:'江苏省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省农业农村厅', url:'http://nynct.jiangsu.gov.cn',     desc:'江苏省农业农村厅，乡村振兴、现代农业。',                     category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省商务厅',     url:'http://com.jiangsu.gov.cn',       desc:'江苏省商务厅，外贸促进、开发区建设。',                       category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省文旅厅',     url:'http://wlt.jiangsu.gov.cn',       desc:'江苏省文化和旅游厅，文化旅游、文物保护。',                   category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省卫健委',     url:'http://wjw.jiangsu.gov.cn',       desc:'江苏省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省应急管理厅', url:'http://emc.jiangsu.gov.cn',       desc:'江苏省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省市场监管局', url:'http://scjgj.jiangsu.gov.cn',     desc:'江苏省市场监督管理局，企业登记、食品安全、质量监管。',       category:'gov', region:'jiangsu', type:'free', rating:4.5, icon:'苏' },
    { name:'江苏省医保局',     url:'http://ybj.jiangsu.gov.cn',       desc:'江苏省医疗保障局，医保政策、药品集采。',                     category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省统计局',     url:'http://tj.jiangsu.gov.cn',        desc:'江苏省统计局，经济数据、统计公报。',                         category:'gov', region:'jiangsu', type:'free', rating:4.4, icon:'苏' },
    { name:'江苏省体育局',     url:'http://tyj.jiangsu.gov.cn',       desc:'江苏省体育局，全民健身、体育赛事。',                         category:'gov', region:'jiangsu', type:'free', rating:4.3, icon:'苏' },
    { name:'江苏省林业局',     url:'http://ly.jiangsu.gov.cn',        desc:'江苏省林业局，生态保护修复。',                               category:'gov', region:'jiangsu', type:'free', rating:4.3, icon:'苏' },

    // --- 省级（华东）：浙江 ---
    { name:'浙江省人民政府',   url:'https://www.zj.gov.cn',           desc:'浙江省人民政府门户网站，数字经济高地、共同富裕示范区。',     category:'gov', region:'zhejiang', type:'free', rating:4.7, icon:'浙' },
    { name:'浙江省发改委',     url:'http://fgw.zj.gov.cn',            desc:'浙江省发展和改革委员会，经济规划、重大改革。',                 category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省教育厅',     url:'http://jyt.zj.gov.cn',            desc:'浙江省教育厅，教育政策、招生考试。',                         category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省科技厅',     url:'http://kjt.zj.gov.cn',            desc:'浙江省科学技术厅，科技创新、互联网+。',                       category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省经信厅',     url:'http://jxt.zj.gov.cn',            desc:'浙江省经济和信息化厅，数字经济、民营经济。',                   category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省公安厅',     url:'http://gat.zj.gov.cn',            desc:'浙江省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'zhejiang', type:'free', rating:4.6, icon:'浙' },
    { name:'浙江省民政厅',     url:'http://mzt.zj.gov.cn',            desc:'浙江省民政厅，社会救助、社区治理。',                         category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省司法厅',     url:'http://sft.zj.gov.cn',            desc:'浙江省司法厅，律师管理、法律援助。',                         category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省财政厅',     url:'http://czt.zj.gov.cn',            desc:'浙江省财政厅，财政预算、政府采购。',                         category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省人社厅',     url:'http://rlsbt.zj.gov.cn',          desc:'浙江省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省自然资源厅', url:'http://zrzyt.zj.gov.cn',          desc:'浙江省自然资源厅，国土规划、海洋管理。',                     category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省生态环境厅', url:'http://sthjt.zj.gov.cn',         desc:'浙江省生态环境厅，污染防治、"绿水青山就是金山银山"。',       category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省住建厅',     url:'http://jst.zj.gov.cn',            desc:'浙江省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省交通运输厅', url:'http://jt.zj.gov.cn',             desc:'浙江省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省水利厅',     url:'http://slt.zj.gov.cn',            desc:'浙江省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省农业农村厅', url:'http://nynct.zj.gov.cn',          desc:'浙江省农业农村厅，乡村振兴、美丽乡村。',                     category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省商务厅',     url:'http://sww.zj.gov.cn',            desc:'浙江省商务厅，外贸强省、跨境电商、自贸区。',                   category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省文旅厅',     url:'http://ct.zj.gov.cn',             desc:'浙江省文化和旅游厅，诗画浙江、文旅融合。',                   category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省卫健委',     url:'http://wsjkw.zj.gov.cn',          desc:'浙江省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省应急管理厅', url:'http://emj.zj.gov.cn',            desc:'浙江省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省市场监管局', url:'http://scjgj.zj.gov.cn',          desc:'浙江省市场监督管理局，企业登记、食品安全、知识产权。',       category:'gov', region:'zhejiang', type:'free', rating:4.5, icon:'浙' },
    { name:'浙江省医保局',     url:'http://ybj.zj.gov.cn',            desc:'浙江省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省统计局',     url:'http://tjj.zj.gov.cn',            desc:'浙江省统计局，经济数据、统计公报。',                         category:'gov', region:'zhejiang', type:'free', rating:4.4, icon:'浙' },
    { name:'浙江省体育局',     url:'http://tyj.zj.gov.cn',            desc:'浙江省体育局，全民健身、亚运会遗产。',                       category:'gov', region:'zhejiang', type:'free', rating:4.3, icon:'浙' },
    { name:'浙江省林业局',     url:'http://lyj.zj.gov.cn',            desc:'浙江省林业局，生态保护修复、竹产业。',                       category:'gov', region:'zhejiang', type:'free', rating:4.3, icon:'浙' },

    // --- 省级（华东）：安徽 ---
    { name:'安徽省人民政府',   url:'https://www.ah.gov.cn',           desc:'安徽省人民政府门户网站，长三角一体化、科技创新策源地。',       category:'gov', region:'anhui', type:'free', rating:4.6, icon:'皖' },
    { name:'安徽省发改委',     url:'http://fgw.ah.gov.cn',            desc:'安徽省发展和改革委员会，经济规划、重大项目。',                 category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省教育厅',     url:'http://jyt.ah.gov.cn',            desc:'安徽省教育厅，教育政策、招生考试。',                         category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省科技厅',     url:'http://kjt.ah.gov.cn',            desc:'安徽省科学技术厅，科技创新、大科学装置。',                     category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省工信厅',     url:'http://jx.ah.gov.cn',             desc:'安徽省工业和信息化厅，制造业发展、数字经济。',                 category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省公安厅',     url:'http://gat.ah.gov.cn',            desc:'安徽省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'anhui', type:'free', rating:4.5, icon:'皖' },
    { name:'安徽省民政厅',     url:'http://mzt.ah.gov.cn',            desc:'安徽省民政厅，社会救助、社区治理。',                         category:'gov', region:'anhui', type:'free', rating:4.3, icon:'皖' },
    { name:'安徽省司法厅',     url:'http://sft.ah.gov.cn',            desc:'安徽省司法厅，律师管理、法律援助。',                         category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省财政厅',     url:'http://czt.ah.gov.cn',            desc:'安徽省财政厅，财政预算、政府采购。',                         category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省人社厅',     url:'http://hrss.ah.gov.cn',           desc:'安徽省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省自然资源厅', url:'http://zrzyt.ah.gov.cn',          desc:'安徽省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省生态环境厅', url:'http://sthjt.ah.gov.cn',         desc:'安徽省生态环境厅，污染防治、巢湖治理。',                     category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省住建厅',     url:'http://dohurd.ah.gov.cn',         desc:'安徽省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省交通运输厅', url:'http://jt.ah.gov.cn',             desc:'安徽省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省水利厅',     url:'http://slj.ah.gov.cn',            desc:'安徽省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'anhui', type:'free', rating:4.3, icon:'皖' },
    { name:'安徽省农业农村厅', url:'http://nync.ah.gov.cn',          desc:'安徽省农业农村厅，乡村振兴、农产品安全。',                   category:'gov', region:'anhui', type:'free', rating:4.3, icon:'皖' },
    { name:'安徽省商务厅',     url:'http://sww.ah.gov.cn',            desc:'安徽省商务厅，外贸促进、自贸区建设。',                       category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省文旅厅',     url:'http://ct.ah.gov.cn',             desc:'安徽省文化和旅游厅，徽文化、文旅融合。',                     category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省卫健委',     url:'http://wjw.ah.gov.cn',            desc:'安徽省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省应急管理厅', url:'http://emah.ah.gov.cn',           desc:'安徽省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'anhui', type:'free', rating:4.3, icon:'皖' },
    { name:'安徽省市场监管局', url:'http://amr.ah.gov.cn',            desc:'安徽省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省医保局',     url:'http://ybj.ah.gov.cn',            desc:'安徽省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'anhui', type:'free', rating:4.4, icon:'皖' },
    { name:'安徽省统计局',     url:'http://tjj.ah.gov.cn',            desc:'安徽省统计局，经济数据、统计公报。',                         category:'gov', region:'anhui', type:'free', rating:4.3, icon:'皖' },
    { name:'安徽省体育局',     url:'http://tyj.ah.gov.cn',            desc:'安徽省体育局，全民健身、体育赛事。',                         category:'gov', region:'anhui', type:'free', rating:4.3, icon:'皖' },
    { name:'安徽省林业局',     url:'http://lyj.ah.gov.cn',            desc:'安徽省林业局，生态保护修复。',                               category:'gov', region:'anhui', type:'free', rating:4.3, icon:'皖' },

    // --- 省级（华东）：福建 ---
    { name:'福建省人民政府',   url:'https://www.fujian.gov.cn',       desc:'福建省人民政府门户网站，海峡西岸经济区、数字福建。',           category:'gov', region:'fujian', type:'free', rating:4.6, icon:'闽' },
    { name:'福建省发改委',     url:'http://fgw.fujian.gov.cn',        desc:'福建省发展和改革委员会，经济规划、闽台融合。',                 category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省教育厅',     url:'http://jyt.fujian.gov.cn',        desc:'福建省教育厅，教育政策、招生考试。',                         category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省科技厅',     url:'http://kjt.fujian.gov.cn',        desc:'福建省科学技术厅，科技创新、成果转化。',                     category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省工信厅',     url:'http://gxt.fujian.gov.cn',        desc:'福建省工业和信息化厅，电子信息产业、数字经济。',               category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省公安厅',     url:'http://gat.fujian.gov.cn',        desc:'福建省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'fujian', type:'free', rating:4.5, icon:'闽' },
    { name:'福建省民政厅',     url:'http://mzt.fujian.gov.cn',        desc:'福建省民政厅，社会救助、社区治理。',                         category:'gov', region:'fujian', type:'free', rating:4.3, icon:'闽' },
    { name:'福建省司法厅',     url:'http://sft.fujian.gov.cn',        desc:'福建省司法厅，律师管理、法律援助。',                         category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省财政厅',     url:'http://czt.fujian.gov.cn',        desc:'福建省财政厅，财政预算、政府采购。',                         category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省人社厅',     url:'http://rst.fujian.gov.cn',        desc:'福建省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省自然资源厅', url:'http://zrzyt.fujian.gov.cn',      desc:'福建省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省生态环境厅', url:'http://sthjt.fujian.gov.cn',      desc:'福建省生态环境厅，污染防治、生态省建设。',                   category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省住建厅',     url:'http://zjt.fujian.gov.cn',        desc:'福建省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省交通运输厅', url:'http://jt.fujian.gov.cn',         desc:'福建省交通运输厅，公路水路、港口发展。',                     category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省水利厅',     url:'http://slt.fujian.gov.cn',        desc:'福建省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'fujian', type:'free', rating:4.3, icon:'闽' },
    { name:'福建省农业农村厅', url:'http://nynct.fujian.gov.cn',      desc:'福建省农业农村厅，乡村振兴、茶产业。',                       category:'gov', region:'fujian', type:'free', rating:4.3, icon:'闽' },
    { name:'福建省商务厅',     url:'http://swt.fujian.gov.cn',        desc:'福建省商务厅，外贸促进、自贸区、海上丝绸之路。',               category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省文旅厅',     url:'http://wlt.fujian.gov.cn',        desc:'福建省文化和旅游厅，世遗福建、文旅融合。',                   category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省卫健委',     url:'http://wjw.fujian.gov.cn',        desc:'福建省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省应急管理厅', url:'http://yjglj.fujian.gov.cn',      desc:'福建省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'fujian', type:'free', rating:4.3, icon:'闽' },
    { name:'福建省市场监管局', url:'http://scjgj.fujian.gov.cn',      desc:'福建省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省医保局',     url:'http://ybj.fujian.gov.cn',        desc:'福建省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'fujian', type:'free', rating:4.4, icon:'闽' },
    { name:'福建省统计局',     url:'http://tjj.fujian.gov.cn',        desc:'福建省统计局，经济数据、统计公报。',                         category:'gov', region:'fujian', type:'free', rating:4.3, icon:'闽' },
    { name:'福建省体育局',     url:'http://tyj.fujian.gov.cn',        desc:'福建省体育局，全民健身、体育赛事。',                         category:'gov', region:'fujian', type:'free', rating:4.3, icon:'闽' },
    { name:'福建省林业局',     url:'http://lyj.fujian.gov.cn',        desc:'福建省林业局，生态保护修复、林下经济。',                     category:'gov', region:'fujian', type:'free', rating:4.3, icon:'闽' },

    // --- 省级（华东）：江西 ---
    { name:'江西省人民政府',   url:'https://www.jiangxi.gov.cn',      desc:'江西省人民政府门户网站，红色摇篮、绿色家园。',               category:'gov', region:'jiangxi', type:'free', rating:4.5, icon:'赣' },
    { name:'江西省发改委',     url:'http://drc.jiangxi.gov.cn',       desc:'江西省发展和改革委员会，经济规划、重大项目。',                 category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省教育厅',     url:'http://jyt.jiangxi.gov.cn',       desc:'江西省教育厅，教育政策、招生考试。',                         category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省科技厅',     url:'http://kjt.jiangxi.gov.cn',       desc:'江西省科学技术厅，科技创新、成果转化。',                     category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省工信厅',     url:'http://gxt.jiangxi.gov.cn',       desc:'江西省工业和信息化厅，VR产业、制造业发展。',                   category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省公安厅',     url:'http://gat.jiangxi.gov.cn',       desc:'江西省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'jiangxi', type:'free', rating:4.5, icon:'赣' },
    { name:'江西省民政厅',     url:'http://mzt.jiangxi.gov.cn',       desc:'江西省民政厅，社会救助、社区治理。',                         category:'gov', region:'jiangxi', type:'free', rating:4.3, icon:'赣' },
    { name:'江西省司法厅',     url:'http://sft.jiangxi.gov.cn',       desc:'江西省司法厅，律师管理、法律援助。',                         category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省财政厅',     url:'http://czt.jiangxi.gov.cn',       desc:'江西省财政厅，财政预算、政府采购。',                         category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省人社厅',     url:'http://rst.jiangxi.gov.cn',       desc:'江西省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省自然资源厅', url:'http://zrzy.jiangxi.gov.cn',      desc:'江西省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省生态环境厅', url:'http://sthjt.jiangxi.gov.cn',     desc:'江西省生态环境厅，污染防治、鄱阳湖保护。',                   category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省住建厅',     url:'http://zjt.jiangxi.gov.cn',       desc:'江西省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省交通运输厅', url:'http://jt.jiangxi.gov.cn',        desc:'江西省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省水利厅',     url:'http://slt.jiangxi.gov.cn',       desc:'江西省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'jiangxi', type:'free', rating:4.3, icon:'赣' },
    { name:'江西省农业农村厅', url:'http://nynct.jiangxi.gov.cn',     desc:'江西省农业农村厅，乡村振兴、绿色农业。',                     category:'gov', region:'jiangxi', type:'free', rating:4.3, icon:'赣' },
    { name:'江西省商务厅',     url:'http://swt.jiangxi.gov.cn',       desc:'江西省商务厅，外贸促进、赣南开放。',                         category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省文旅厅',     url:'http://dct.jiangxi.gov.cn',       desc:'江西省文化和旅游厅，庐山井冈山、红色旅游。',                 category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省卫健委',     url:'http://wjw.jiangxi.gov.cn',       desc:'江西省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省应急管理厅', url:'http://emh.jiangxi.gov.cn',       desc:'江西省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'jiangxi', type:'free', rating:4.3, icon:'赣' },
    { name:'江西省市场监管局', url:'http://amr.jiangxi.gov.cn',       desc:'江西省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省医保局',     url:'http://ybj.jiangxi.gov.cn',       desc:'江西省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'jiangxi', type:'free', rating:4.4, icon:'赣' },
    { name:'江西省统计局',     url:'http://tjj.jiangxi.gov.cn',       desc:'江西省统计局，经济数据、统计公报。',                         category:'gov', region:'jiangxi', type:'free', rating:4.3, icon:'赣' },
    { name:'江西省体育局',     url:'http://tyj.jiangxi.gov.cn',       desc:'江西省体育局，全民健身、体育赛事。',                         category:'gov', region:'jiangxi', type:'free', rating:4.3, icon:'赣' },
    { name:'江西省林业局',     url:'http://lyj.jiangxi.gov.cn',       desc:'江西省林业局，生态保护修复。',                               category:'gov', region:'jiangxi', type:'free', rating:4.3, icon:'赣' },

    // --- 省级（华东）：山东 ---
    { name:'山东省人民政府',   url:'https://www.shandong.gov.cn',     desc:'山东省人民政府门户网站，经济大省、人口大省。',                 category:'gov', region:'shandong', type:'free', rating:4.7, icon:'鲁' },
    { name:'山东省发改委',     url:'http://fgw.shandong.gov.cn',      desc:'山东省发展和改革委员会，经济规划、新旧动能转换。',             category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省教育厅',     url:'http://edu.shandong.gov.cn',      desc:'山东省教育厅，教育政策、招生考试。',                         category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省科技厅',     url:'http://kjt.shandong.gov.cn',      desc:'山东省科学技术厅，科技创新、海洋科技。',                     category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省工信厅',     url:'http://gxt.shandong.gov.cn',      desc:'山东省工业和信息化厅，制造业强省、数字经济。',                 category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省公安厅',     url:'http://gat.shandong.gov.cn',      desc:'山东省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'shandong', type:'free', rating:4.6, icon:'鲁' },
    { name:'山东省民政厅',     url:'http://mzt.shandong.gov.cn',      desc:'山东省民政厅，社会救助、社区治理。',                         category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省司法厅',     url:'http://sft.shandong.gov.cn',      desc:'山东省司法厅，律师管理、法律援助。',                         category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省财政厅',     url:'http://czt.shandong.gov.cn',      desc:'山东省财政厅，财政预算、政府采购。',                         category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省人社厅',     url:'http://hrss.shandong.gov.cn',     desc:'山东省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省自然资源厅', url:'http://dnr.shandong.gov.cn',      desc:'山东省自然资源厅，国土规划、海洋强省。',                     category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省生态环境厅', url:'http://sthj.shandong.gov.cn',     desc:'山东省生态环境厅，污染防治、黄河流域生态保护。',               category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省住建厅',     url:'http://zjt.shandong.gov.cn',      desc:'山东省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省交通运输厅', url:'http://sdjt.shandong.gov.cn',     desc:'山东省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省水利厅',     url:'http://wr.shandong.gov.cn',       desc:'山东省水利厅，水资源管理、黄河防汛。',                       category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省农业农村厅', url:'http://nync.shandong.gov.cn',     desc:'山东省农业农村厅，乡村振兴、农业大省。',                     category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省商务厅',     url:'http://swt.shandong.gov.cn',      desc:'山东省商务厅，外贸强省、上合示范区。',                       category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省文旅厅',     url:'http://whly.shandong.gov.cn',     desc:'山东省文化和旅游厅，好客山东、文旅融合。',                   category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省卫健委',     url:'http://wsjkw.shandong.gov.cn',    desc:'山东省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省应急管理厅', url:'http://emh.shandong.gov.cn',      desc:'山东省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省市场监管局', url:'http://amr.shandong.gov.cn',      desc:'山东省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'shandong', type:'free', rating:4.5, icon:'鲁' },
    { name:'山东省医保局',     url:'http://ylbzj.shandong.gov.cn',    desc:'山东省医疗保障局，医保政策、药品集采。',                     category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省统计局',     url:'http://tjj.shandong.gov.cn',      desc:'山东省统计局，经济数据、统计公报。',                         category:'gov', region:'shandong', type:'free', rating:4.4, icon:'鲁' },
    { name:'山东省体育局',     url:'http://tyj.shandong.gov.cn',      desc:'山东省体育局，全民健身、体育赛事。',                         category:'gov', region:'shandong', type:'free', rating:4.3, icon:'鲁' },
    { name:'山东省林业局',     url:'http://lyj.shandong.gov.cn',      desc:'山东省林业局，生态保护修复。',                               category:'gov', region:'shandong', type:'free', rating:4.3, icon:'鲁' },

    // --- 市级（华中）：河南 ---
    { name:'郑州市人民政府',   url:'https://www.zhengzhou.gov.cn',    desc:'郑州市人民政府门户网站，河南省会，中原城市群核心。',         category:'gov', region:'henan', city:'zhengzhou', type:'free', rating:4.6, icon:'豫' },
    { name:'开封市人民政府',   url:'https://www.kaifeng.gov.cn',      desc:'开封市人民政府门户网站，八朝古都、汴京。',                   category:'gov', region:'henan', city:'kaifeng', type:'free', rating:4.5, icon:'豫' },
    { name:'洛阳市人民政府',   url:'https://www.ly.gov.cn',           desc:'洛阳市人民政府门户网站，十三朝古都、牡丹花都。',             category:'gov', region:'henan', city:'luoyang', type:'free', rating:4.6, icon:'豫' },
    { name:'平顶山市人民政府', url:'https://www.pds.gov.cn',          desc:'平顶山市人民政府门户网站，中国鹰城、煤都。',                 category:'gov', region:'henan', city:'pingdingshan', type:'free', rating:4.4, icon:'豫' },
    { name:'安阳市人民政府',   url:'https://www.anyang.gov.cn',       desc:'安阳市人民政府门户网站，殷墟、甲骨文发源地。',               category:'gov', region:'henan', city:'anyang', type:'free', rating:4.5, icon:'豫' },
    { name:'鹤壁市人民政府',   url:'https://www.hebi.gov.cn',         desc:'鹤壁市人民政府门户网站，封神之地、煤化工基地。',             category:'gov', region:'henan', city:'hebi', type:'free', rating:4.4, icon:'豫' },
    { name:'新乡市人民政府',   url:'https://www.xinxiang.gov.cn',     desc:'新乡市人民政府门户网站，牧野大地、先进制造业基地。',         category:'gov', region:'henan', city:'xinxiang', type:'free', rating:4.4, icon:'豫' },
    { name:'焦作市人民政府',   url:'https://www.jiaozuo.gov.cn',      desc:'焦作市人民政府门户网站，太极故里、山水焦作。',               category:'gov', region:'henan', city:'jiaozuo', type:'free', rating:4.4, icon:'豫' },
    { name:'濮阳市人民政府',   url:'https://www.puyang.gov.cn',       desc:'濮阳市人民政府门户网站，中华龙乡。',                         category:'gov', region:'henan', city:'puyang', type:'free', rating:4.4, icon:'豫' },
    { name:'许昌市人民政府',   url:'https://www.xuchang.gov.cn',      desc:'许昌市人民政府门户网站，曹魏故都、花木之都。',               category:'gov', region:'henan', city:'xuchang', type:'free', rating:4.4, icon:'豫' },
    { name:'漯河市人民政府',   url:'https://www.luohe.gov.cn',        desc:'漯河市人民政府门户网站，食品名城。',                         category:'gov', region:'henan', city:'luohe', type:'free', rating:4.4, icon:'豫' },
    { name:'三门峡市人民政府', url:'https://www.smx.gov.cn',          desc:'三门峡市人民政府门户网站，天鹅之城。',                       category:'gov', region:'henan', city:'sanmenxia', type:'free', rating:4.4, icon:'豫' },
    { name:'南阳市人民政府',   url:'https://www.nanyang.gov.cn',      desc:'南阳市人民政府门户网站，宛城、诸葛亮躬耕地。',               category:'gov', region:'henan', city:'nanyang', type:'free', rating:4.5, icon:'豫' },
    { name:'商丘市人民政府',   url:'https://www.shangqiu.gov.cn',     desc:'商丘市人民政府门户网站，商祖圣地。',                         category:'gov', region:'henan', city:'shangqiu', type:'free', rating:4.4, icon:'豫' },
    { name:'信阳市人民政府',   url:'https://www.xinyang.gov.cn',      desc:'信阳市人民政府门户网站，山水茶都。',                         category:'gov', region:'henan', city:'xinyang', type:'free', rating:4.4, icon:'豫' },
    { name:'周口市人民政府',   url:'https://www.zhoukou.gov.cn',      desc:'周口市人民政府门户网站，伏羲故都、老子故里。',               category:'gov', region:'henan', city:'zhoukou', type:'free', rating:4.4, icon:'豫' },
    { name:'驻马店市人民政府', url:'https://www.zhumadian.gov.cn',    desc:'驻马店市人民政府门户网站，豫中之腹、天下之最中。',           category:'gov', region:'henan', city:'zhumadian', type:'free', rating:4.4, icon:'豫' },
    { name:'济源市人民政府',   url:'https://www.jiyuan.gov.cn',       desc:'济源市人民政府门户网站，愚公移山故里。',                     category:'gov', region:'henan', city:'jiyuan', type:'free', rating:4.4, icon:'豫' },

    // --- 市级（华中）：湖北 ---
    { name:'武汉市人民政府',   url:'https://www.wuhan.gov.cn',        desc:'武汉市人民政府门户网站，湖北省会，九省通衢、大武汉。',       category:'gov', region:'hubei', city:'wuhan', type:'free', rating:4.7, icon:'鄂' },
    { name:'黄石市人民政府',   url:'https://www.huangshi.gov.cn',     desc:'黄石市人民政府门户网站，矿冶之都。',                         category:'gov', region:'hubei', city:'huangshi', type:'free', rating:4.4, icon:'鄂' },
    { name:'十堰市人民政府',   url:'https://www.shiyan.gov.cn',       desc:'十堰市人民政府门户网站，车城、南水北调中线源头。',           category:'gov', region:'hubei', city:'shiyan', type:'free', rating:4.4, icon:'鄂' },
    { name:'宜昌市人民政府',   url:'https://www.yichang.gov.cn',      desc:'宜昌市人民政府门户网站，水电之都、屈原故里。',               category:'gov', region:'hubei', city:'yichang', type:'free', rating:4.5, icon:'鄂' },
    { name:'襄阳市人民政府',   url:'https://www.xiangyang.gov.cn',    desc:'襄阳市人民政府门户网站，华夏第一城池。',                     category:'gov', region:'hubei', city:'xiangyang', type:'free', rating:4.5, icon:'鄂' },
    { name:'鄂州市人民政府',   url:'https://www.ezhou.gov.cn',        desc:'鄂州市人民政府门户网站，吴楚咽喉。',                         category:'gov', region:'hubei', city:'ezhou', type:'free', rating:4.4, icon:'鄂' },
    { name:'荆门市人民政府',   url:'https://www.jingmen.gov.cn',      desc:'荆门市人民政府门户网站，荆楚门户。',                         category:'gov', region:'hubei', city:'jingmen', type:'free', rating:4.4, icon:'鄂' },
    { name:'孝感市人民政府',   url:'https://www.xiaogan.gov.cn',      desc:'孝感市人民政府门户网站，中华孝文化名城。',                   category:'gov', region:'hubei', city:'xiaogan', type:'free', rating:4.4, icon:'鄂' },
    { name:'荆州市人民政府',   url:'https://www.jingzhou.gov.cn',     desc:'荆州市人民政府门户网站，楚国故都、三国名城。',               category:'gov', region:'hubei', city:'jingzhou', type:'free', rating:4.5, icon:'鄂' },
    { name:'黄冈市人民政府',   url:'https://www.huanggang.gov.cn',    desc:'黄冈市人民政府门户网站，教育之乡、将军故里。',               category:'gov', region:'hubei', city:'huanggang', type:'free', rating:4.5, icon:'鄂' },
    { name:'咸宁市人民政府',   url:'https://www.xianning.gov.cn',     desc:'咸宁市人民政府门户网站，香城泉都、桂花之乡。',               category:'gov', region:'hubei', city:'xianning', type:'free', rating:4.4, icon:'鄂' },
    { name:'随州市人民政府',   url:'https://www.suizhou.gov.cn',      desc:'随州市人民政府门户网站，炎帝神农故里、编钟之乡。',           category:'gov', region:'hubei', city:'suizhou', type:'free', rating:4.4, icon:'鄂' },
    { name:'恩施州人民政府',   url:'https://www.enshi.gov.cn',        desc:'恩施土家族苗族自治州人民政府门户网站。',                   category:'gov', region:'hubei', city:'enshi', type:'free', rating:4.4, icon:'鄂' },

    // --- 市级（华中）：湖南 ---
    { name:'长沙市人民政府',   url:'https://www.changsha.gov.cn',     desc:'长沙市人民政府门户网站，湖南省会，星城、屈贾之乡。',         category:'gov', region:'hunan', city:'changsha', type:'free', rating:4.7, icon:'湘' },
    { name:'株洲市人民政府',   url:'https://www.zhuzhou.gov.cn',      desc:'株洲市人民政府门户网站，中国动力谷、火车拉来的城市。',       category:'gov', region:'hunan', city:'zhuzhou', type:'free', rating:4.5, icon:'湘' },
    { name:'湘潭市人民政府',   url:'https://www.xiangtan.gov.cn',     desc:'湘潭市人民政府门户网站，伟人故里、红色圣地。',               category:'gov', region:'hunan', city:'xiangtan', type:'free', rating:4.5, icon:'湘' },
    { name:'衡阳市人民政府',   url:'https://www.hengyang.gov.cn',     desc:'衡阳市人民政府门户网站，雁城、南岳衡山。',                   category:'gov', region:'hunan', city:'hengyang', type:'free', rating:4.5, icon:'湘' },
    { name:'邵阳市人民政府',   url:'https://www.shaoyang.gov.cn',     desc:'邵阳市人民政府门户网站，宝庆府、近代民主革命策源地。',       category:'gov', region:'hunan', city:'shaoyang', type:'free', rating:4.4, icon:'湘' },
    { name:'岳阳市人民政府',   url:'https://www.yueyang.gov.cn',      desc:'岳阳市人民政府门户网站，岳阳楼记、洞庭天下水。',             category:'gov', region:'hunan', city:'yueyang', type:'free', rating:4.5, icon:'湘' },
    { name:'常德市人民政府',   url:'https://www.changde.gov.cn',      desc:'常德市人民政府门户网站，桃花源里人家。',                     category:'gov', region:'hunan', city:'changde', type:'free', rating:4.5, icon:'湘' },
    { name:'张家界市人民政府', url:'https://www.zhangjiajie.gov.cn',  desc:'张家界市人民政府门户网站，世界自然遗产、奇峰三千。',         category:'gov', region:'hunan', city:'zhangjiajie', type:'free', rating:4.5, icon:'湘' },
    { name:'益阳市人民政府',   url:'https://www.yiyang.gov.cn',       desc:'益阳市人民政府门户网站，银城、黑茶之乡。',                   category:'gov', region:'hunan', city:'yiyang', type:'free', rating:4.4, icon:'湘' },
    { name:'郴州市人民政府',   url:'https://www.chenzhou.gov.cn',     desc:'郴州市人民政府门户网站，福城、有色金属之都。',               category:'gov', region:'hunan', city:'chenzhou', type:'free', rating:4.4, icon:'湘' },
    { name:'永州市人民政府',   url:'https://www.yongzhou.gov.cn',     desc:'永州市人民政府门户网站，潇湘之源、柳子故里。',               category:'gov', region:'hunan', city:'yongzhou', type:'free', rating:4.4, icon:'湘' },
    { name:'怀化市人民政府',   url:'https://www.huaihua.gov.cn',      desc:'怀化市人民政府门户网站，锦绣潇湘之源。',                     category:'gov', region:'hunan', city:'huaihua', type:'free', rating:4.4, icon:'湘' },
    { name:'娄底市人民政府',   url:'https://www.loudi.gov.cn',        desc:'娄底市人民政府门户网站，湘中明珠。',                         category:'gov', region:'hunan', city:'loudi', type:'free', rating:4.4, icon:'湘' },
    { name:'湘西州人民政府',   url:'https://www.xiangxi.gov.cn',      desc:'湘西土家族苗族自治州人民政府门户网站。',                   category:'gov', region:'hunan', city:'xiangxi', type:'free', rating:4.4, icon:'湘' },

    // --- 省级（华中）：河南 ---
    { name:'河南省人民政府',   url:'https://www.henan.gov.cn',        desc:'河南省人民政府门户网站，中原腹地、人口大省。',                 category:'gov', region:'henan', type:'free', rating:4.6, icon:'豫' },
    { name:'河南省发改委',     url:'http://fgw.henan.gov.cn',         desc:'河南省发展和改革委员会，经济规划、中部崛起。',                 category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省教育厅',     url:'http://jyt.henan.gov.cn',         desc:'河南省教育厅，教育政策、招生考试。',                         category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省科技厅',     url:'http://kjt.henan.gov.cn',         desc:'河南省科学技术厅，科技创新、成果转化。',                     category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省工信厅',     url:'http://gxt.henan.gov.cn',         desc:'河南省工业和信息化厅，制造业发展、数字经济。',                 category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省公安厅',     url:'http://hnga.henan.gov.cn',        desc:'河南省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'henan', type:'free', rating:4.5, icon:'豫' },
    { name:'河南省民政厅',     url:'http://mzt.henan.gov.cn',         desc:'河南省民政厅，社会救助、社区治理。',                         category:'gov', region:'henan', type:'free', rating:4.3, icon:'豫' },
    { name:'河南省司法厅',     url:'http://sft.henan.gov.cn',         desc:'河南省司法厅，律师管理、法律援助。',                         category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省财政厅',     url:'http://czt.henan.gov.cn',         desc:'河南省财政厅，财政预算、政府采购。',                         category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省人社厅',     url:'http://hrss.henan.gov.cn',        desc:'河南省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省自然资源厅', url:'http://dnr.henan.gov.cn',         desc:'河南省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省生态环境厅', url:'http://sthjt.henan.gov.cn',      desc:'河南省生态环境厅，污染防治、黄河流域保护。',                 category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省住建厅',     url:'http://hnjs.henan.gov.cn',        desc:'河南省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省交通运输厅', url:'http://jt.henan.gov.cn',          desc:'河南省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省水利厅',     url:'http://slt.henan.gov.cn',         desc:'河南省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'henan', type:'free', rating:4.3, icon:'豫' },
    { name:'河南省农业农村厅', url:'http://nynct.henan.gov.cn',       desc:'河南省农业农村厅，乡村振兴、粮食生产大省。',                 category:'gov', region:'henan', type:'free', rating:4.3, icon:'豫' },
    { name:'河南省商务厅',     url:'http://swt.henan.gov.cn',         desc:'河南省商务厅，外贸促进、自贸区建设。',                       category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省文旅厅',     url:'http://hct.henan.gov.cn',         desc:'河南省文化和旅游厅，老家河南、文旅融合。',                   category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省卫健委',     url:'http://wsjkw.henan.gov.cn',       desc:'河南省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省应急管理厅', url:'http://emh.henan.gov.cn',         desc:'河南省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'henan', type:'free', rating:4.3, icon:'豫' },
    { name:'河南省市场监管局', url:'http://scjgj.henan.gov.cn',      desc:'河南省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省医保局',     url:'http://ylbzj.henan.gov.cn',       desc:'河南省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'henan', type:'free', rating:4.4, icon:'豫' },
    { name:'河南省统计局',     url:'http://tjj.henan.gov.cn',         desc:'河南省统计局，经济数据、统计公报。',                         category:'gov', region:'henan', type:'free', rating:4.3, icon:'豫' },
    { name:'河南省体育局',     url:'http://tyj.henan.gov.cn',         desc:'河南省体育局，全民健身、体育赛事。',                         category:'gov', region:'henan', type:'free', rating:4.3, icon:'豫' },
    { name:'河南省林业局',     url:'http://lyj.henan.gov.cn',         desc:'河南省林业局，生态保护修复。',                               category:'gov', region:'henan', type:'free', rating:4.3, icon:'豫' },

    // --- 省级（华中）：湖北 ---
    { name:'湖北省人民政府',   url:'https://www.hubei.gov.cn',        desc:'湖北省人民政府门户网站，九省通衢、科教重镇。',                 category:'gov', region:'hubei', type:'free', rating:4.6, icon:'鄂' },
    { name:'湖北省发改委',     url:'http://fgw.hubei.gov.cn',         desc:'湖北省发展和改革委员会，经济规划、长江经济带。',               category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省教育厅',     url:'http://jyt.hubei.gov.cn',         desc:'湖北省教育厅，教育政策、招生考试。',                         category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省科技厅',     url:'http://kjt.hubei.gov.cn',         desc:'湖北省科学技术厅，科技创新、光谷建设。',                     category:'gov', region:'hubei', type:'free', rating:4.5, icon:'鄂' },
    { name:'湖北省工信厅',     url:'http://gxt.hubei.gov.cn',         desc:'湖北省工业和信息化厅，制造业发展、数字经济。',                 category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省公安厅',     url:'http://gat.hubei.gov.cn',         desc:'湖北省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'hubei', type:'free', rating:4.5, icon:'鄂' },
    { name:'湖北省民政厅',     url:'http://mzt.hubei.gov.cn',         desc:'湖北省民政厅，社会救助、社区治理。',                         category:'gov', region:'hubei', type:'free', rating:4.3, icon:'鄂' },
    { name:'湖北省司法厅',     url:'http://sft.hubei.gov.cn',         desc:'湖北省司法厅，律师管理、法律援助。',                         category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省财政厅',     url:'http://czt.hubei.gov.cn',         desc:'湖北省财政厅，财政预算、政府采购。',                         category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省人社厅',     url:'http://rst.hubei.gov.cn',         desc:'湖北省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省自然资源厅', url:'http://zrzyt.hubei.gov.cn',       desc:'湖北省自然资源厅，国土规划、长江保护。',                     category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省生态环境厅', url:'http://sthjt.hubei.gov.cn',      desc:'湖北省生态环境厅，污染防治、长江大保护。',                   category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省住建厅',     url:'http://zjt.hubei.gov.cn',         desc:'湖北省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省交通运输厅', url:'http://jtt.hubei.gov.cn',         desc:'湖北省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省水利厅',     url:'http://slt.hubei.gov.cn',         desc:'湖北省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'hubei', type:'free', rating:4.3, icon:'鄂' },
    { name:'湖北省农业农村厅', url:'http://nync.hubei.gov.cn',        desc:'湖北省农业农村厅，乡村振兴、荆楚农谷。',                     category:'gov', region:'hubei', type:'free', rating:4.3, icon:'鄂' },
    { name:'湖北省商务厅',     url:'http://swt.hubei.gov.cn',         desc:'湖北省商务厅，外贸促进、自贸区建设。',                       category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省文旅厅',     url:'http://wlt.hubei.gov.cn',         desc:'湖北省文化和旅游厅，荆楚文化、文旅融合。',                   category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省卫健委',     url:'http://wjw.hubei.gov.cn',         desc:'湖北省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省应急管理厅', url:'http://emj.hubei.gov.cn',         desc:'湖北省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'hubei', type:'free', rating:4.3, icon:'鄂' },
    { name:'湖北省市场监管局', url:'http://scjgj.hubei.gov.cn',      desc:'湖北省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省医保局',     url:'http://ybj.hubei.gov.cn',         desc:'湖北省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'hubei', type:'free', rating:4.4, icon:'鄂' },
    { name:'湖北省统计局',     url:'http://tjj.hubei.gov.cn',         desc:'湖北省统计局，经济数据、统计公报。',                         category:'gov', region:'hubei', type:'free', rating:4.3, icon:'鄂' },
    { name:'湖北省体育局',     url:'http://tyj.hubei.gov.cn',         desc:'湖北省体育局，全民健身、体育赛事。',                         category:'gov', region:'hubei', type:'free', rating:4.3, icon:'鄂' },
    { name:'湖北省林业局',     url:'http://lyj.hubei.gov.cn',         desc:'湖北省林业局，生态保护修复。',                               category:'gov', region:'hubei', type:'free', rating:4.3, icon:'鄂' },

    // --- 省级（华中）：湖南 ---
    { name:'湖南省人民政府',   url:'https://www.hunan.gov.cn',        desc:'湖南省人民政府门户网站，鱼米之乡、红色热土。',                 category:'gov', region:'hunan', type:'free', rating:4.6, icon:'湘' },
    { name:'湖南省发改委',     url:'http://fgw.hunan.gov.cn',         desc:'湖南省发展和改革委员会，经济规划、长株潭一体化。',             category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省教育厅',     url:'http://jyt.hunan.gov.cn',         desc:'湖南省教育厅，教育政策、招生考试。',                         category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省科技厅',     url:'http://kjt.hunan.gov.cn',         desc:'湖南省科学技术厅，科技创新、成果转化。',                     category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省工信厅',     url:'http://gxt.hunan.gov.cn',         desc:'湖南省工业和信息化厅，制造业发展、工程机械。',                 category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省公安厅',     url:'http://gat.hunan.gov.cn',         desc:'湖南省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'hunan', type:'free', rating:4.5, icon:'湘' },
    { name:'湖南省民政厅',     url:'http://mzt.hunan.gov.cn',         desc:'湖南省民政厅，社会救助、社区治理。',                         category:'gov', region:'hunan', type:'free', rating:4.3, icon:'湘' },
    { name:'湖南省司法厅',     url:'http://sft.hunan.gov.cn',         desc:'湖南省司法厅，律师管理、法律援助。',                         category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省财政厅',     url:'http://czt.hunan.gov.cn',         desc:'湖南省财政厅，财政预算、政府采购。',                         category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省人社厅',     url:'http://rst.hunan.gov.cn',         desc:'湖南省人力资源和社会保障厅，社保、就业、人才。',             category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省自然资源厅', url:'http://zrzyt.hunan.gov.cn',      desc:'湖南省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省生态环境厅', url:'http://sthjt.hunan.gov.cn',      desc:'湖南省生态环境厅，污染防治、洞庭湖保护。',                   category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省住建厅',     url:'http://zjt.hunan.gov.cn',         desc:'湖南省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省交通运输厅', url:'http://jtt.hunan.gov.cn',         desc:'湖南省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省水利厅',     url:'http://slt.hunan.gov.cn',         desc:'湖南省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'hunan', type:'free', rating:4.3, icon:'湘' },
    { name:'湖南省农业农村厅', url:'http://nynct.hunan.gov.cn',       desc:'湖南省农业农村厅，乡村振兴、鱼米之乡。',                     category:'gov', region:'hunan', type:'free', rating:4.3, icon:'湘' },
    { name:'湖南省商务厅',     url:'http://swt.hunan.gov.cn',         desc:'湖南省商务厅，外贸促进、自贸区建设。',                       category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省文旅厅',     url:'http://wlt.hunan.gov.cn',         desc:'湖南省文化和旅游厅，锦绣潇湘、文旅融合。',                   category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省卫健委',     url:'http://wjw.hunan.gov.cn',         desc:'湖南省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省应急管理厅', url:'http://emj.hunan.gov.cn',         desc:'湖南省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'hunan', type:'free', rating:4.3, icon:'湘' },
    { name:'湖南省市场监管局', url:'http://amr.hunan.gov.cn',        desc:'湖南省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省医保局',     url:'http://ybj.hunan.gov.cn',         desc:'湖南省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'hunan', type:'free', rating:4.4, icon:'湘' },
    { name:'湖南省统计局',     url:'http://tjj.hunan.gov.cn',         desc:'湖南省统计局，经济数据、统计公报。',                         category:'gov', region:'hunan', type:'free', rating:4.3, icon:'湘' },
    { name:'湖南省体育局',     url:'http://tyj.hunan.gov.cn',         desc:'湖南省体育局，全民健身、体育赛事。',                         category:'gov', region:'hunan', type:'free', rating:4.3, icon:'湘' },
    { name:'湖南省林业局',     url:'http://lyj.hunan.gov.cn',         desc:'湖南省林业局，生态保护修复。',                               category:'gov', region:'hunan', type:'free', rating:4.3, icon:'湘' },

    // --- 市级（华南）：广西 ---
    { name:'南宁市人民政府',   url:'https://www.nanning.gov.cn',      desc:'南宁市人民政府门户网站，广西首府，绿城、东盟永久举办地。',     category:'gov', region:'guangxi', city:'nanning', type:'free', rating:4.6, icon:'桂' },
    { name:'柳州市人民政府',   url:'https://www.liuzhou.gov.cn',      desc:'柳州市人民政府门户网站，工业城市、螺蛳粉之乡。',             category:'gov', region:'guangxi', city:'liuzhou', type:'free', rating:4.5, icon:'桂' },
    { name:'桂林市人民政府',   url:'https://www.guilin.gov.cn',       desc:'桂林市人民政府门户网站，山水甲天下。',                       category:'gov', region:'guangxi', city:'guilin', type:'free', rating:4.7, icon:'桂' },
    { name:'梧州市人民政府',   url:'https://www.wuzhou.gov.cn',       desc:'梧州市人民政府门户网站，百年商埠、骑楼之城。',               category:'gov', region:'guangxi', city:'wuzhou', type:'free', rating:4.4, icon:'桂' },
    { name:'北海市人民政府',   url:'https://www.beihai.gov.cn',       desc:'北海市人民政府门户网站，珠城、北部湾明珠。',                 category:'gov', region:'guangxi', city:'beihai', type:'free', rating:4.5, icon:'桂' },
    { name:'防城港市人民政府', url:'https://www.fcgs.gov.cn',         desc:'防城港市人民政府门户网站，海上胡志明小道起点。',               category:'gov', region:'guangxi', city:'fangchenggang', type:'free', rating:4.4, icon:'桂' },
    { name:'钦州市人民政府',   url:'https://www.qinzhou.gov.cn',      desc:'钦州市人民政府门户网站，坭兴陶都。',                         category:'gov', region:'guangxi', city:'qinzhou', type:'free', rating:4.4, icon:'桂' },
    { name:'贵港市人民政府',   url:'https://www.guigang.gov.cn',      desc:'贵港市人民政府门户网站，荷城。',                             category:'gov', region:'guangxi', city:'guigang', type:'free', rating:4.4, icon:'桂' },
    { name:'玉林市人民政府',   url:'https://www.yulin.gov.cn',        desc:'玉林市人民政府门户网站，中小企业名城。',                     category:'gov', region:'guangxi', city:'yulin', type:'free', rating:4.4, icon:'桂' },
    { name:'百色市人民政府',   url:'https://www.baise.gov.cn',        desc:'百色市人民政府门户网站，红色革命圣地。',                     category:'gov', region:'guangxi', city:'baise', type:'free', rating:4.4, icon:'桂' },
    { name:'河池市人民政府',   url:'https://www.hechi.gov.cn',        desc:'河池市人民政府门户网站，刘三姐故乡。',                       category:'gov', region:'guangxi', city:'hechi', type:'free', rating:4.4, icon:'桂' },
    { name:'来宾市人民政府',   url:'https://www.laibin.gov.cn',       desc:'来宾市人民政府门户网站，中国糖都。',                         category:'gov', region:'guangxi', city:'laibin', type:'free', rating:4.4, icon:'桂' },
    { name:'崇左市人民政府',   url:'https://www.chongzuo.gov.cn',     desc:'崇左市人民政府门户网站，中国糖都、德天跨国瀑布。',           category:'gov', region:'guangxi', city:'chongzuo', type:'free', rating:4.4, icon:'桂' },

    // --- 市级（华南）：海南 ---
    { name:'海口市人民政府',   url:'https://www.haikou.gov.cn',       desc:'海口市人民政府门户网站，海南省会，椰城。',                   category:'gov', region:'hainan', city:'haikou', type:'free', rating:4.6, icon:'琼' },
    { name:'三亚市人民政府',   url:'https://www.sanya.gov.cn',        desc:'三亚市人民政府门户网站，东方夏威夷。',                       category:'gov', region:'hainan', city:'sanya', type:'free', rating:4.7, icon:'琼' },
    { name:'三沙市人民政府',   url:'https://www.sansha.gov.cn',       desc:'三沙市人民政府门户网站，中国最南端城市。',                   category:'gov', region:'hainan', city:'sansha', type:'free', rating:4.5, icon:'琼' },
    { name:'儋州市人民政府',   url:'https://www.danzhou.gov.cn',      desc:'儋州市人民政府门户网站，千年古郡、东坡故里。',               category:'gov', region:'hainan', city:'danzhou', type:'free', rating:4.5, icon:'琼' },

    // --- 省级（华南）：广东（省级完整 + 市级模板） ---
    { name:'广东省人民政府',   url:'https://www.gd.gov.cn',           desc:'广东省人民政府门户网站，大湾区核心，经济总量全国第一。',       category:'gov', region:'guangdong', type:'free', rating:4.7, icon:'粤' },
    { name:'广东省发改委',     url:'http://drc.gd.gov.cn',            desc:'广东省发展和改革委员会，经济规划、重大项目审批。',             category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省教育厅',     url:'http://edu.gd.gov.cn',            desc:'广东省教育厅，教育政策、招生考试、高等教育。',                 category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省科技厅',     url:'http://kjt.gd.gov.cn',            desc:'广东省科学技术厅，科技创新、高新技术企业认定。',               category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省工信厅',     url:'http://gdei.gd.gov.cn',           desc:'广东省工业和信息化厅，制造业、数字经济。',                     category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省公安厅',     url:'http://gdga.gd.gov.cn',           desc:'广东省公安厅，户籍管理、治安管理、出入境。',                   category:'gov', region:'guangdong', type:'free', rating:4.6, icon:'粤' },
    { name:'广东省民政厅',     url:'http://smzt.gd.gov.cn',           desc:'广东省民政厅，社会救助、养老服务。',                         category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省司法厅',     url:'http://sft.gd.gov.cn',            desc:'广东省司法厅，律师管理、法律援助、普法。',                     category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省财政厅',     url:'http://czt.gd.gov.cn',            desc:'广东省财政厅，财政预算、政府采购。',                         category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省人社厅',     url:'http://hrss.gd.gov.cn',           desc:'广东省人力资源和社会保障厅，社保、就业、人才。',               category:'gov', region:'guangdong', type:'free', rating:4.6, icon:'粤' },
    { name:'广东省自然资源厅', url:'http://lr.gd.gov.cn',             desc:'广东省自然资源厅，国土规划、海洋管理。',                     category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省生态环境厅', url:'http://gdee.gd.gov.cn',           desc:'广东省生态环境厅，污染防治、环保审批。',                     category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省住建厅',     url:'http://zfcxjst.gd.gov.cn',        desc:'广东省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省交通运输厅', url:'http://td.gd.gov.cn',             desc:'广东省交通运输厅，公路水路、交通规划。',                     category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省水利厅',     url:'http://slt.gd.gov.cn',            desc:'广东省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省农业农村厅', url:'http://dara.gd.gov.cn',           desc:'广东省农业农村厅，乡村振兴、农产品安全。',                   category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省商务厅',     url:'http://com.gd.gov.cn',            desc:'广东省商务厅，外贸促进、跨境电商、自贸区。',                   category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省文旅厅',     url:'http://whly.gd.gov.cn',           desc:'广东省文化和旅游厅，文旅融合、文化遗产。',                   category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省卫健委',     url:'http://wsjkw.gd.gov.cn',          desc:'广东省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省应急管理厅', url:'http://yjgl.gd.gov.cn',           desc:'广东省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省市场监管局', url:'http://amr.gd.gov.cn',            desc:'广东省市场监督管理局，企业登记、食品安全、知识产权。',         category:'gov', region:'guangdong', type:'free', rating:4.5, icon:'粤' },
    { name:'广东省医保局',     url:'http://hsa.gd.gov.cn',            desc:'广东省医疗保障局，医保政策、药品集采。',                     category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省统计局',     url:'http://stats.gd.gov.cn',          desc:'广东省统计局，经济数据、统计公报。',                         category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省体育局',     url:'http://ty.gd.gov.cn',             desc:'广东省体育局，全民健身、体育赛事。',                         category:'gov', region:'guangdong', type:'free', rating:4.4, icon:'粤' },
    { name:'广东省林业局',     url:'http://gdf.gd.gov.cn',            desc:'广东省林业局，生态保护修复、自然保护地。',                   category:'gov', region:'guangdong', type:'free', rating:4.3, icon:'粤' },
    { name:'广东省信访局',     url:'http://gdxf.gd.gov.cn',           desc:'广东省信访局，群众来信来访处理。',                           category:'gov', region:'guangdong', type:'free', rating:4.3, icon:'粤' },

    // --- 广东（市级）：广州市 ---
    { name:'广州市人民政府',   url:'https://www.gz.gov.cn',           desc:'广州市人民政府门户网站，千年商都、南国花城。',               category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.7, icon:'穗' },
    { name:'广州市发改委',     url:'http://fgw.gz.gov.cn',            desc:'广州市发展和改革委员会，经济规划、重大项目。',                 category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市教育局',     url:'http://jyj.gz.gov.cn',            desc:'广州市教育局，教育政策、招生考试。',                         category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市科技局',     url:'http://kjj.gz.gov.cn',            desc:'广州市科学技术局，科技创新、科技项目。',                     category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市工信局',     url:'http://gxj.gz.gov.cn',            desc:'广州市工业和信息化局，制造业、数字经济。',                     category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市公安局',     url:'http://gaj.gz.gov.cn',            desc:'广州市公安局，户籍管理、交通管理、出入境。',                   category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.6, icon:'穗' },
    { name:'广州市民政局',     url:'http://mzj.gz.gov.cn',            desc:'广州市民政局，社会救助、社区治理。',                         category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市司法局',     url:'http://sfj.gz.gov.cn',            desc:'广州市司法局，律师管理、法律援助。',                         category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市财政局',     url:'http://czj.gz.gov.cn',            desc:'广州市财政局，财政预算、政府采购。',                         category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市人社局',     url:'http://rsj.gz.gov.cn',            desc:'广州市人力资源和社会保障局，社保、就业、人才。',               category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市规划和自然资源局', url:'http://ghzyj.gz.gov.cn',    desc:'广州市规划和自然资源局，国土规划、不动产登记。',               category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市生态环境局', url:'http://sthjj.gz.gov.cn',          desc:'广州市生态环境局，污染防治、环保审批。',                     category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市住建局',     url:'http://zfcj.gz.gov.cn',           desc:'广州市住房和城乡建设局，住房保障、房产交易。',               category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市交通运输局', url:'http://jtj.gz.gov.cn',            desc:'广州市交通运输局，交通管理、公共交通。',                     category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市水务局',     url:'http://swj.gz.gov.cn',            desc:'广州市水务局，水资源管理、供排水。',                         category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市农业农村局', url:'http://nyncj.gz.gov.cn',          desc:'广州市农业农村局，乡村振兴、农产品安全。',                   category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市商务局',     url:'http://sw.gz.gov.cn',             desc:'广州市商务局，外贸促进、广交会。',                           category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市文化广电旅游局', url:'http://wglj.gz.gov.cn',      desc:'广州市文化广电旅游局，文旅融合、文化活动。',                 category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市卫健委',     url:'http://wjw.gz.gov.cn',            desc:'广州市卫生健康委员会，医疗服务、疫情防控。',                 category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市应急管理局', url:'http://yjglj.gz.gov.cn',          desc:'广州市应急管理局，安全生产、应急救援。',                     category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },
    { name:'广州市市场监管局', url:'http://scjgj.gz.gov.cn',          desc:'广州市市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.5, icon:'穗' },
    { name:'广州市医保局',     url:'http://ybj.gz.gov.cn',            desc:'广州市医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'guangdong', city:'guangzhou', type:'free', rating:4.4, icon:'穗' },

    // --- 广东（市级）：深圳市 ---
    { name:'深圳市人民政府',   url:'https://www.sz.gov.cn',           desc:'深圳市人民政府门户网站，中国特色社会主义先行示范区。',       category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.8, icon:'深' },
    { name:'深圳市发改委',     url:'http://fgw.sz.gov.cn',            desc:'深圳市发展和改革委员会，经济规划、前海合作区。',               category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.6, icon:'深' },
    { name:'深圳市教育局',     url:'http://szeb.sz.gov.cn',           desc:'深圳市教育局，教育政策、学位申请。',                         category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },
    { name:'深圳市科技创新委', url:'http://stic.sz.gov.cn',           desc:'深圳市科技创新委员会，高新技术产业、创新政策。',               category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.6, icon:'深' },
    { name:'深圳市工信局',     url:'http://gxj.sz.gov.cn',            desc:'深圳市工业和信息化局，制造业、5G产业。',                     category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },
    { name:'深圳市公安局',     url:'http://ga.sz.gov.cn',             desc:'深圳市公安局，户籍管理、交通管理、出入境。',                   category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.6, icon:'深' },
    { name:'深圳市民政局',     url:'http://mzj.sz.gov.cn',            desc:'深圳市民政局，社会救助、社区治理。',                         category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.4, icon:'深' },
    { name:'深圳市司法局',     url:'http://sf.sz.gov.cn',             desc:'深圳市司法局，律师管理、法律援助。',                         category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.4, icon:'深' },
    { name:'深圳市财政局',     url:'http://czj.sz.gov.cn',            desc:'深圳市财政局，财政预算、政府采购。',                         category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },
    { name:'深圳市人社局',     url:'http://hrss.sz.gov.cn',           desc:'深圳市人力资源和社会保障局，社保、人才引进。',               category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.6, icon:'深' },
    { name:'深圳市规划和自然资源局', url:'http://pnr.sz.gov.cn',      desc:'深圳市规划和自然资源局，国土规划、城市更新。',                 category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },
    { name:'深圳市生态环境局', url:'http://mee.sz.gov.cn',            desc:'深圳市生态环境局，污染防治、碳达峰碳中和。',                   category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.4, icon:'深' },
    { name:'深圳市住建局',     url:'http://zjj.sz.gov.cn',            desc:'深圳市住房和建设局，住房保障、房地产调控。',                   category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.6, icon:'深' },
    { name:'深圳市交通运输局', url:'http://jtys.sz.gov.cn',           desc:'深圳市交通运输局，交通管理、智慧交通。',                     category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },
    { name:'深圳市水务局',     url:'http://swj.sz.gov.cn',            desc:'深圳市水务局，水资源管理、供水保障。',                       category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.4, icon:'深' },
    { name:'深圳市商务局',     url:'http://commerce.sz.gov.cn',       desc:'深圳市商务局，外贸促进、跨境电商、招商引资。',               category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },
    { name:'深圳市文化广电旅游体育局', url:'http://wtl.sz.gov.cn',   desc:'深圳市文化广电旅游体育局，文旅融合、文体活动。',             category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },
    { name:'深圳市卫健委',     url:'http://wjw.sz.gov.cn',            desc:'深圳市卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },
    { name:'深圳市应急管理局', url:'http://yjglj.sz.gov.cn',          desc:'深圳市应急管理局，安全生产、应急救援。',                     category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.4, icon:'深' },
    { name:'深圳市市场监管局', url:'http://amr.sz.gov.cn',            desc:'深圳市市场监督管理局，企业登记、知识产权、食品安全。',         category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.6, icon:'深' },
    { name:'深圳市医保局',     url:'http://hsa.sz.gov.cn',            desc:'深圳市医疗保障局，医保政策、药品集采。',                     category:'gov', region:'guangdong', city:'shenzhen', type:'free', rating:4.5, icon:'深' },

    // --- 广东（市级）：东莞市 ---
    { name:'东莞市人民政府',   url:'http://www.dg.gov.cn',            desc:'东莞市人民政府门户网站，世界工厂、制造业名城。',               category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.6, icon:'莞' },
    { name:'东莞市发改局',     url:'http://dgb.dg.gov.cn',            desc:'东莞市发展和改革局，经济规划、重大项目。',                     category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市教育局',     url:'http://edu.dg.gov.cn',            desc:'东莞市教育局，教育政策、招生考试。',                         category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市科技局',     url:'http://dgstb.dg.gov.cn',          desc:'东莞市科学技术局，科技创新、科技项目。',                     category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市工信局',     url:'http://im.dg.gov.cn',             desc:'东莞市工业和信息化局，制造业、数字经济。',                     category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市公安局',     url:'http://gaj.dg.gov.cn',            desc:'东莞市公安局，户籍管理、交通管理。',                         category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.5, icon:'莞' },
    { name:'东莞市人社局',     url:'http://dgrcwx.dg.gov.cn',         desc:'东莞市人力资源和社会保障局，社保、就业、人才。',               category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市住建局',     url:'http://zjj.dg.gov.cn',            desc:'东莞市住房和城乡建设局，住房保障、城市建设。',               category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市交通运输局', url:'http://jtj.dg.gov.cn',            desc:'东莞市交通运输局，交通管理、公共交通。',                     category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市商务局',     url:'http://dgboc.dg.gov.cn',          desc:'东莞市商务局，外贸促进、加工贸易。',                         category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市文广旅体局', url:'http://whlytyj.dg.gov.cn',        desc:'东莞市文化广电旅游体育局，文旅融合。',                       category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市卫健委',     url:'http://dgwsj.dg.gov.cn',          desc:'东莞市卫生健康局，医疗服务、公共卫生。',                     category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },
    { name:'东莞市市场监管局', url:'http://amr.dg.gov.cn',            desc:'东莞市市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'guangdong', city:'dongguan', type:'free', rating:4.4, icon:'莞' },

    // --- 广东（市级）：佛山市 ---
    { name:'佛山市人民政府',   url:'https://www.foshan.gov.cn',        desc:'佛山市人民政府门户网站，制造业大市、武术之乡。',               category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.6, icon:'佛' },
    { name:'佛山市发改局',     url:'http://fsdr.foshan.gov.cn',       desc:'佛山市发展和改革局，经济规划、重大项目。',                     category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市教育局',     url:'http://edu.foshan.gov.cn',        desc:'佛山市教育局，教育政策、招生考试。',                         category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市科技局',     url:'http://fskjj.foshan.gov.cn',      desc:'佛山市科学技术局，科技创新、产学研合作。',                     category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市工信局',     url:'http://im.foshan.gov.cn',         desc:'佛山市工业和信息化局，制造业、陶瓷产业。',                     category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市公安局',     url:'http://gaj.foshan.gov.cn',        desc:'佛山市公安局，户籍管理、交通管理。',                         category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.5, icon:'佛' },
    { name:'佛山市人社局',     url:'http://hrss.foshan.gov.cn',       desc:'佛山市人力资源和社会保障局，社保、就业、人才。',               category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市住建局',     url:'http://fszjj.foshan.gov.cn',      desc:'佛山市住房和城乡建设局，住房保障、城市建设。',               category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市交通运输局', url:'http://jtj.foshan.gov.cn',        desc:'佛山市交通运输局，交通管理、公共交通。',                     category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市商务局',     url:'http://sw.foshan.gov.cn',         desc:'佛山市商务局，外贸促进、广佛同城。',                         category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市文广旅体局', url:'http://wtly.foshan.gov.cn',       desc:'佛山市文化广电旅游体育局，文旅融合、武术文化。',               category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市卫健委',     url:'http://wjw.foshan.gov.cn',        desc:'佛山市卫生健康局，医疗服务、公共卫生。',                     category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },
    { name:'佛山市市场监管局', url:'http://amr.foshan.gov.cn',        desc:'佛山市市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'guangdong', city:'foshan', type:'free', rating:4.4, icon:'佛' },

    // --- 广东（市级）：珠海市 ---
    { name:'珠海市人民政府',   url:'https://www.zhuhai.gov.cn',        desc:'珠海市人民政府门户网站，浪漫之城、经济特区。',               category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.5, icon:'珠' },
    { name:'珠海市发改局',     url:'http://fgj.zhuhai.gov.cn',        desc:'珠海市发展和改革局，经济规划、横琴合作区。',                   category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },
    { name:'珠海市教育局',     url:'http://zhjy.zhuhai.gov.cn',       desc:'珠海市教育局，教育政策、招生考试。',                         category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },
    { name:'珠海市公安局',     url:'http://gaj.zhuhai.gov.cn',        desc:'珠海市公安局，户籍管理、交通管理、出入境。',                   category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.5, icon:'珠' },
    { name:'珠海市人社局',     url:'http://zhrsj.zhuhai.gov.cn',      desc:'珠海市人力资源和社会保障局，社保、就业、人才。',               category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },
    { name:'珠海市住建局',     url:'http://zjj.zhuhai.gov.cn',        desc:'珠海市住房和城乡建设局，住房保障、城市建设。',               category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },
    { name:'珠海市交通运输局', url:'http://jtj.zhuhai.gov.cn',        desc:'珠海市交通运输局，交通管理、港珠澳大桥。',                   category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },
    { name:'珠海市商务局',     url:'http://swj.zhuhai.gov.cn',        desc:'珠海市商务局，外贸促进、会展经济。',                         category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },
    { name:'珠海市文广旅体局', url:'http://wlj.zhuhai.gov.cn',        desc:'珠海市文化广电旅游体育局，文旅融合。',                       category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },
    { name:'珠海市卫健委',     url:'http://wsjkj.zhuhai.gov.cn',      desc:'珠海市卫生健康局，医疗服务、公共卫生。',                     category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },
    { name:'珠海市市场监管局', url:'http://amr.zhuhai.gov.cn',        desc:'珠海市市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'guangdong', city:'zhuhai', type:'free', rating:4.4, icon:'珠' },

    // --- 广东（市级）：其他地级市（主要政府门户） ---
    { name:'惠州市人民政府',   url:'https://www.huizhou.gov.cn',       desc:'惠州市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'huizhou', type:'free', rating:4.4, icon:'惠' },
    { name:'中山市人民政府',   url:'https://www.zs.gov.cn',            desc:'中山市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'zhongshan', type:'free', rating:4.4, icon:'中' },
    { name:'汕头市人民政府',   url:'https://www.shantou.gov.cn',       desc:'汕头市人民政府门户网站，经济特区。',                         category:'gov', region:'guangdong', city:'shantou', type:'free', rating:4.4, icon:'汕' },
    { name:'江门市人民政府',   url:'https://www.jiangmen.gov.cn',      desc:'江门市人民政府门户网站，中国侨都。',                         category:'gov', region:'guangdong', city:'jiangmen', type:'free', rating:4.4, icon:'江' },
    { name:'湛江市人民政府',   url:'https://www.zhanjiang.gov.cn',     desc:'湛江市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'zhanjiang', type:'free', rating:4.4, icon:'湛' },
    { name:'肇庆市人民政府',   url:'https://www.zhaoqing.gov.cn',      desc:'肇庆市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'zhaoqing', type:'free', rating:4.4, icon:'肇' },
    { name:'梅州市人民政府',   url:'https://www.meizhou.gov.cn',       desc:'梅州市人民政府门户网站，世界客都。',                         category:'gov', region:'guangdong', city:'meizhou', type:'free', rating:4.4, icon:'梅' },
    { name:'茂名市人民政府',   url:'https://www.maoming.gov.cn',       desc:'茂名市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'maoming', type:'free', rating:4.4, icon:'茂' },
    { name:'清远市人民政府',   url:'https://www.qingyuan.gov.cn',      desc:'清远市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'qingyuan', type:'free', rating:4.4, icon:'清' },
    { name:'韶关市人民政府',   url:'https://www.shaoguan.gov.cn',      desc:'韶关市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'shaoguan', type:'free', rating:4.4, icon:'韶' },
    { name:'揭阳市人民政府',   url:'https://www.jieyang.gov.cn',       desc:'揭阳市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'jieyang', type:'free', rating:4.4, icon:'揭' },
    { name:'潮州市人民政府',   url:'https://www.chaozhou.gov.cn',      desc:'潮州市人民政府门户网站。',                                 category:'gov', region:'guangdong', city:'chaozhou', type:'free', rating:4.4, icon:'潮' },
    { name:'阳江市人民政府',   url:'https://www.yangjiang.gov.cn',      desc:'阳江市人民政府门户网站，中国刀剪之都、滨海旅游城市。',         category:'gov', region:'guangdong', city:'yangjiang', type:'free', rating:4.4, icon:'阳' },
    { name:'汕尾市人民政府',   url:'https://www.shanwei.gov.cn',       desc:'汕尾市人民政府门户网站，红色老区、沿海城市。',               category:'gov', region:'guangdong', city:'shanwei', type:'free', rating:4.4, icon:'汕' },
    { name:'云浮市人民政府',   url:'https://www.yunfu.gov.cn',         desc:'云浮市人民政府门户网站，石材之都、生态城市。',               category:'gov', region:'guangdong', city:'yunfu', type:'free', rating:4.4, icon:'云' },
    { name:'河源市人民政府',   url:'https://www.heyuan.gov.cn',        desc:'河源市人民政府门户网站，客家古邑、万绿湖所在地。',             category:'gov', region:'guangdong', city:'heyuan', type:'free', rating:4.4, icon:'河' },

    // --- 广东（区级）：广州市天河区 ---
    { name:'天河区人民政府',   url:'http://www.thnet.gov.cn',          desc:'广州市天河区人民政府，CBD核心区域。',                       category:'gov', region:'guangdong', city:'guangzhou', district:'tianhe', type:'free', rating:4.4, icon:'天' },
    { name:'天河区教育局',     url:'http://jyj.thnet.gov.cn',          desc:'广州市天河区教育局，教育政策、学位申请。',                   category:'gov', region:'guangdong', city:'guangzhou', district:'tianhe', type:'free', rating:4.3, icon:'天' },
    { name:'天河区人社局',     url:'http://rsj.thnet.gov.cn',          desc:'广州市天河区人力资源和社会保障局。',                         category:'gov', region:'guangdong', city:'guangzhou', district:'tianhe', type:'free', rating:4.3, icon:'天' },
    { name:'天河区住建局',     url:'http://zjj.thnet.gov.cn',          desc:'广州市天河区住房和建设局。',                                 category:'gov', region:'guangdong', city:'guangzhou', district:'tianhe', type:'free', rating:4.3, icon:'天' },
    { name:'天河区市场监管局', url:'http://scjgj.thnet.gov.cn',        desc:'广州市天河区市场监督管理局。',                             category:'gov', region:'guangdong', city:'guangzhou', district:'tianhe', type:'free', rating:4.3, icon:'天' },

    // --- 广东（区级）：广州市越秀区 ---
    { name:'越秀区人民政府',   url:'http://www.yuexiu.gov.cn',         desc:'广州市越秀区人民政府，广州政治文化中心。',                     category:'gov', region:'guangdong', city:'guangzhou', district:'yuexiu', type:'free', rating:4.4, icon:'越' },
    { name:'越秀区教育局',     url:'http://jyj.yuexiu.gov.cn',         desc:'广州市越秀区教育局，教育政策、学位申请。',                   category:'gov', region:'guangdong', city:'guangzhou', district:'yuexiu', type:'free', rating:4.3, icon:'越' },
    { name:'越秀区人社局',     url:'http://rsj.yuexiu.gov.cn',         desc:'广州市越秀区人力资源和社会保障局。',                         category:'gov', region:'guangdong', city:'guangzhou', district:'yuexiu', type:'free', rating:4.3, icon:'越' },

    // --- 广东（区级）：广州市海珠区 ---
    { name:'海珠区人民政府',   url:'http://www.haizhu.gov.cn',         desc:'广州市海珠区人民政府，琶洲数字经济区。',                     category:'gov', region:'guangdong', city:'guangzhou', district:'haizhu', type:'free', rating:4.4, icon:'海' },
    { name:'海珠区教育局',     url:'http://jyj.haizhu.gov.cn',         desc:'广州市海珠区教育局。',                                       category:'gov', region:'guangdong', city:'guangzhou', district:'haizhu', type:'free', rating:4.3, icon:'海' },

    // --- 广东（区级）：深圳市南山区 ---
    { name:'深圳市南山区人民政府', url:'http://www.szns.gov.cn',      desc:'南山区人民政府，深圳科技创新高地。',                         category:'gov', region:'guangdong', city:'shenzhen', district:'nanshan', govLevel:'district', type:'free', rating:4.5, icon:'南' },
    { name:'南山区教育局',     url:'http://jyk.nszk.gov.cn',           desc:'南山区教育局。',                                             category:'gov', region:'guangdong', city:'shenzhen', district:'nanshan', govLevel:'district', type:'free', rating:4.3, icon:'南' },
    { name:'南山区科创局',     url:'http://kjj.szns.gov.cn',           desc:'南山区科技创新局。',                                         category:'gov', region:'guangdong', city:'shenzhen', district:'nanshan', govLevel:'district', type:'free', rating:4.3, icon:'南' },
    // --- 省级（华南）：广西 ---
    { name:'广西壮族自治区人民政府', url:'https://www.gxzf.gov.cn',   desc:'广西壮族自治区人民政府门户网站，面向东盟开放合作前沿。',         category:'gov', region:'guangxi', type:'free', rating:4.5, icon:'桂' },
    { name:'广西发改委',       url:'http://fgw.gxzf.gov.cn',          desc:'广西壮族自治区发展和改革委员会，经济规划、西部陆海新通道。',     category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西教育厅',       url:'http://jyt.gxzf.gov.cn',          desc:'广西壮族自治区教育厅，教育政策、招生考试。',                   category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西科技厅',       url:'http://kjt.gxzf.gov.cn',          desc:'广西壮族自治区科学技术厅，科技创新、成果转化。',               category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西工信厅',       url:'http://gxt.gxzf.gov.cn',          desc:'广西壮族自治区工业和信息化厅，制造业发展、数字经济。',           category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西公安厅',       url:'http://gat.gxzf.gov.cn',          desc:'广西壮族自治区公安厅，户籍管理、交通管理、出入境。',             category:'gov', region:'guangxi', type:'free', rating:4.5, icon:'桂' },
    { name:'广西民政厅',       url:'http://mzt.gxzf.gov.cn',          desc:'广西壮族自治区民政厅，社会救助、社区治理。',                   category:'gov', region:'guangxi', type:'free', rating:4.3, icon:'桂' },
    { name:'广西司法厅',       url:'http://sft.gxzf.gov.cn',          desc:'广西壮族自治区司法厅，律师管理、法律援助。',                   category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西财政厅',       url:'http://czt.gxzf.gov.cn',          desc:'广西壮族自治区财政厅，财政预算、政府采购。',                   category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西人社厅',       url:'http://rst.gxzf.gov.cn',          desc:'广西壮族自治区人力资源和社会保障厅，社保、就业、人才。',         category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西自然资源厅',   url:'http://dnr.gxzf.gov.cn',          desc:'广西壮族自治区自然资源厅，国土规划、矿产资源。',               category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西生态环境厅',   url:'http://sthjt.gxzf.gov.cn',        desc:'广西壮族自治区生态环境厅，污染防治、山清水秀生态美。',         category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西住建厅',       url:'http://zjt.gxzf.gov.cn',          desc:'广西壮族自治区住房和城乡建设厅，住房保障、城市建设。',         category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西交通运输厅',   url:'http://jtt.gxzf.gov.cn',          desc:'广西壮族自治区交通运输厅，公路水路、交通管理。',               category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西水利厅',       url:'http://slt.gxzf.gov.cn',          desc:'广西壮族自治区水利厅，水资源管理、防汛抗旱。',                 category:'gov', region:'guangxi', type:'free', rating:4.3, icon:'桂' },
    { name:'广西农业农村厅',   url:'http://nynct.gxzf.gov.cn',        desc:'广西壮族自治区农业农村厅，乡村振兴、蔗糖产业。',               category:'gov', region:'guangxi', type:'free', rating:4.3, icon:'桂' },
    { name:'广西商务厅',       url:'http://swt.gxzf.gov.cn',          desc:'广西壮族自治区商务厅，外贸促进、东盟合作、自贸区。',             category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西文旅厅',       url:'http://wlt.gxzf.gov.cn',          desc:'广西壮族自治区文化和旅游厅，壮美广西、桂林山水。',               category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西卫健委',       url:'http://wjw.gxzf.gov.cn',          desc:'广西壮族自治区卫生健康委员会，医疗服务、公共卫生。',           category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西应急管理厅',   url:'http://emj.gxzf.gov.cn',          desc:'广西壮族自治区应急管理厅，安全生产、应急救援。',               category:'gov', region:'guangxi', type:'free', rating:4.3, icon:'桂' },
    { name:'广西市场监管局',   url:'http://scjgj.gxzf.gov.cn',        desc:'广西壮族自治区市场监督管理局，企业登记、食品安全。',           category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西医保局',       url:'http://ybj.gxzf.gov.cn',          desc:'广西壮族自治区医疗保障局，医保政策、医疗报销。',               category:'gov', region:'guangxi', type:'free', rating:4.4, icon:'桂' },
    { name:'广西统计局',       url:'http://tjj.gxzf.gov.cn',          desc:'广西壮族自治区统计局，经济数据、统计公报。',                   category:'gov', region:'guangxi', type:'free', rating:4.3, icon:'桂' },
    { name:'广西体育局',       url:'http://tyj.gxzf.gov.cn',          desc:'广西壮族自治区体育局，全民健身、体育赛事。',                   category:'gov', region:'guangxi', type:'free', rating:4.3, icon:'桂' },
    { name:'广西林业局',       url:'http://lyj.gxzf.gov.cn',          desc:'广西壮族自治区林业局，生态保护修复、林下经济。',               category:'gov', region:'guangxi', type:'free', rating:4.3, icon:'桂' },

    // --- 省级（华南）：海南 ---
    { name:'海南省人民政府',   url:'https://www.hainan.gov.cn',       desc:'海南省人民政府门户网站，自由贸易港、南海明珠。',               category:'gov', region:'hainan', type:'free', rating:4.5, icon:'琼' },
    { name:'海南省发改委',     url:'http://fgw.hainan.gov.cn',        desc:'海南省发展和改革委员会，自贸港建设、重大项目。',                 category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省教育厅',     url:'http://edu.hainan.gov.cn',        desc:'海南省教育厅，教育政策、招生考试。',                           category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省科技厅',     url:'http://kjt.hainan.gov.cn',        desc:'海南省科学技术厅，科技创新、南繁硅谷。',                       category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省工信厅',     url:'http://iiit.hainan.gov.cn',       desc:'海南省工业和信息化厅，数字经济、互联网产业。',                 category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省公安厅',     url:'http://gat.hainan.gov.cn',        desc:'海南省公安厅，户籍管理、交通管理、出入境。',                     category:'gov', region:'hainan', type:'free', rating:4.5, icon:'琼' },
    { name:'海南省民政厅',     url:'http://mzt.hainan.gov.cn',        desc:'海南省民政厅，社会救助、社区治理。',                           category:'gov', region:'hainan', type:'free', rating:4.3, icon:'琼' },
    { name:'海南省司法厅',     url:'http://sft.hainan.gov.cn',        desc:'海南省司法厅，律师管理、法律援助。',                           category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省财政厅',     url:'http://czj.hainan.gov.cn',        desc:'海南省财政厅，财政预算、政府采购。',                           category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省人社厅',     url:'http://hrss.hainan.gov.cn',       desc:'海南省人力资源和社会保障厅，社保、就业、人才。',               category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省自然资源厅', url:'http://lr.hainan.gov.cn',         desc:'海南省自然资源厅，国土规划、南海资源管理。',                   category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省生态环境厅', url:'http://hnsthb.hainan.gov.cn',     desc:'海南省生态环境厅，污染防治、热带雨林保护。',                   category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省住建厅',     url:'http://zjt.hainan.gov.cn',        desc:'海南省住房和城乡建设厅，住房保障、城市建设。',                 category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省交通运输厅', url:'http://jt.hainan.gov.cn',         desc:'海南省交通运输厅，公路水路、交通管理。',                       category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省水利厅',     url:'http://water.hainan.gov.cn',      desc:'海南省水利厅，水资源管理、防汛抗旱。',                         category:'gov', region:'hainan', type:'free', rating:4.3, icon:'琼' },
    { name:'海南省农业农村厅', url:'http://agri.hainan.gov.cn',      desc:'海南省农业农村厅，乡村振兴、热带农业。',                       category:'gov', region:'hainan', type:'free', rating:4.3, icon:'琼' },
    { name:'海南省商务厅',     url:'http://swt.hainan.gov.cn',        desc:'海南省商务厅，自贸港政策、国际贸易。',                         category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省文旅厅',     url:'http://wlt.hainan.gov.cn',        desc:'海南省文化和旅游厅，国际旅游消费中心。',                       category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省卫健委',     url:'http://wjw.hainan.gov.cn',        desc:'海南省卫生健康委员会，医疗服务、博鳌乐城国际医疗旅游先行区。',   category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省应急管理厅', url:'http://emj.hainan.gov.cn',        desc:'海南省应急管理厅，安全生产、应急救援。',                       category:'gov', region:'hainan', type:'free', rating:4.3, icon:'琼' },
    { name:'海南省市场监管局', url:'http://amr.hainan.gov.cn',        desc:'海南省市场监督管理局，企业登记、食品安全。',                   category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省医保局',     url:'http://ybj.hainan.gov.cn',        desc:'海南省医疗保障局，医保政策、医疗报销。',                       category:'gov', region:'hainan', type:'free', rating:4.4, icon:'琼' },
    { name:'海南省统计局',     url:'http://stats.hainan.gov.cn',      desc:'海南省统计局，经济数据、统计公报。',                           category:'gov', region:'hainan', type:'free', rating:4.3, icon:'琼' },
    { name:'海南省林业局',     url:'http://lyj.hainan.gov.cn',        desc:'海南省林业局，热带雨林国家公园、生态保护修复。',               category:'gov', region:'hainan', type:'free', rating:4.3, icon:'琼' },

    // --- 市级（西南）：四川 ---
    { name:'成都市人民政府',   url:'https://www.chengdu.gov.cn',     desc:'成都市人民政府门户网站，四川省会，天府之国。',               category:'gov', region:'sichuan', city:'chengdu', type:'free', rating:4.7, icon:'川' },
    { name:'自贡市人民政府',   url:'https://www.zigong.gov.cn',      desc:'自贡市人民政府门户网站，千年盐都、恐龙之乡。',               category:'gov', region:'sichuan', city:'zigong', type:'free', rating:4.4, icon:'川' },
    { name:'攀枝花市人民政府', url:'https://www.panzhihua.gov.cn',   desc:'攀枝花市人民政府门户网站，阳光花城、钢铁之城。',             category:'gov', region:'sichuan', city:'panzhihua', type:'free', rating:4.4, icon:'川' },
    { name:'泸州市人民政府',   url:'https://www.luzhou.gov.cn',      desc:'泸州市人民政府门户网站，中国酒城。',                         category:'gov', region:'sichuan', city:'luzhou', type:'free', rating:4.5, icon:'川' },
    { name:'德阳市人民政府',   url:'https://www.deyang.gov.cn',      desc:'德阳市人民政府门户网站，中国重大技术装备制造业基地。',         category:'gov', region:'sichuan', city:'deyang', type:'free', rating:4.4, icon:'川' },
    { name:'绵阳市人民政府',   url:'https://www.mianyang.gov.cn',    desc:'绵阳市人民政府门户网站，中国科技城。',                       category:'gov', region:'sichuan', city:'mianyang', type:'free', rating:4.5, icon:'川' },
    { name:'广元市人民政府',   url:'https://www.guangyuan.gov.cn',   desc:'广元市人民政府门户网站，蜀道咽喉、女皇故里。',               category:'gov', region:'sichuan', city:'guangyuan', type:'free', rating:4.4, icon:'川' },
    { name:'遂宁市人民政府',   url:'https://www.suining.gov.cn',     desc:'遂宁市人民政府门户网站，观音故里。',                         category:'gov', region:'sichuan', city:'suining', type:'free', rating:4.4, icon:'川' },
    { name:'内江市人民政府',   url:'https://www.neijiang.gov.cn',    desc:'内江市人民政府门户网站，甜城、书画之乡。',                   category:'gov', region:'sichuan', city:'neijiang', type:'free', rating:4.4, icon:'川' },
    { name:'乐山市人民政府',   url:'https://www.leshan.gov.cn',      desc:'乐山市人民政府门户网站，乐山大佛、峨眉山下。',               category:'gov', region:'sichuan', city:'leshan', type:'free', rating:4.5, icon:'川' },
    { name:'南充市人民政府',   url:'https://www.nanchong.gov.cn',    desc:'南充市人民政府门户网站，绸都、嘉陵江畔。',                   category:'gov', region:'sichuan', city:'nanchong', type:'free', rating:4.4, icon:'川' },
    { name:'眉山市人民政府',   url:'https://www.meishan.gov.cn',     desc:'眉山市人民政府门户网站，东坡故里。',                         category:'gov', region:'sichuan', city:'meishan', type:'free', rating:4.4, icon:'川' },
    { name:'宜宾市人民政府',   url:'https://www.yibin.gov.cn',       desc:'宜宾市人民政府门户网站，万里长江第一城、酒都。',             category:'gov', region:'sichuan', city:'yibin', type:'free', rating:4.5, icon:'川' },
    { name:'广安市人民政府',   url:'https://www.guang-an.gov.cn',    desc:'广安市人民政府门户网站，伟人故里。',                         category:'gov', region:'sichuan', city:'guangan', type:'free', rating:4.4, icon:'川' },
    { name:'达州市人民政府',   url:'https://www.dazhou.gov.cn',      desc:'达州市人民政府门户网站，巴人故里。',                         category:'gov', region:'sichuan', city:'dazhou', type:'free', rating:4.4, icon:'川' },
    { name:'雅安市人民政府',   url:'https://www.yaan.gov.cn',        desc:'雅安市人民政府门户网站，雨城、大熊猫故乡。',                 category:'gov', region:'sichuan', city:'yaan', type:'free', rating:4.4, icon:'川' },
    { name:'巴中市人民政府',   url:'https://www.bazhong.gov.cn',     desc:'巴中市人民政府门户网站，巴山蜀水、红色老区。',               category:'gov', region:'sichuan', city:'bazhong', type:'free', rating:4.4, icon:'川' },
    { name:'资阳市人民政府',   url:'https://www.ziyang.gov.cn',      desc:'资阳市人民政府门户网站，成渝门户枢纽。',                     category:'gov', region:'sichuan', city:'ziyang', type:'free', rating:4.4, icon:'川' },
    { name:'阿坝州人民政府',   url:'https://www.abazhou.gov.cn',     desc:'阿坝藏族羌族自治州人民政府门户网站。',                     category:'gov', region:'sichuan', city:'aba', type:'free', rating:4.4, icon:'川' },
    { name:'甘孜州人民政府',   url:'https://www.ganzi.gov.cn',       desc:'甘孜藏族自治州人民政府门户网站，康定情歌故乡。',             category:'gov', region:'sichuan', city:'ganzi', type:'free', rating:4.4, icon:'川' },
    { name:'凉山州人民政府',   url:'https://www.liangshan.gov.cn',   desc:'凉山彝族自治州人民政府门户网站。',                         category:'gov', region:'sichuan', city:'liangshan', type:'free', rating:4.4, icon:'川' },

    // --- 市级（西南）：贵州 ---
    { name:'贵阳市人民政府',   url:'https://www.guiyang.gov.cn',     desc:'贵阳市人民政府门户网站，贵州省会，爽爽贵阳。',               category:'gov', region:'guizhou', city:'guiyang', type:'free', rating:4.6, icon:'黔' },
    { name:'六盘水市人民政府', url:'https://www.gzlps.gov.cn',       desc:'六盘水市人民政府门户网站，中国凉都。',                       category:'gov', region:'guizhou', city:'liupanshui', type:'free', rating:4.4, icon:'黔' },
    { name:'遵义市人民政府',   url:'https://www.zunyi.gov.cn',       desc:'遵义市人民政府门户网站，转折之城、会议之都。',               category:'gov', region:'guizhou', city:'zunyi', type:'free', rating:4.5, icon:'黔' },
    { name:'安顺市人民政府',   url:'https://www.anshun.gov.cn',      desc:'安顺市人民政府门户网站，瀑乡、蜡染之乡。',                   category:'gov', region:'guizhou', city:'anshun', type:'free', rating:4.4, icon:'黔' },
    { name:'毕节市人民政府',   url:'https://www.bijie.gov.cn',       desc:'毕节市人民政府门户网站，花海鹤乡、洞天福地。',               category:'gov', region:'guizhou', city:'bijie', type:'free', rating:4.4, icon:'黔' },
    { name:'铜仁市人民政府',   url:'https://www.tongren.gov.cn',     desc:'铜仁市人民政府门户网站，梵天净土、桃源铜仁。',               category:'gov', region:'guizhou', city:'tongren', type:'free', rating:4.4, icon:'黔' },
    { name:'黔西南州人民政府', url:'https://www.qxn.gov.cn',         desc:'黔西南布依族苗族自治州人民政府门户网站。',                 category:'gov', region:'guizhou', city:'qianxinan', type:'free', rating:4.4, icon:'黔' },
    { name:'黔东南州人民政府', url:'https://www.qdn.gov.cn',         desc:'黔东南苗族侗族自治州人民政府门户网站。',                   category:'gov', region:'guizhou', city:'qiandongnan', type:'free', rating:4.4, icon:'黔' },
    { name:'黔南州人民政府',   url:'https://www.qnz.gov.cn',         desc:'黔南布依族苗族自治州人民政府门户网站。',                     category:'gov', region:'guizhou', city:'qiannan', type:'free', rating:4.4, icon:'黔' },

    // --- 市级（西南）：云南 ---
    { name:'昆明市人民政府',   url:'https://www.km.gov.cn',          desc:'昆明市人民政府门户网站，云南省会，春城。',                   category:'gov', region:'yunnan', city:'kunming', type:'free', rating:4.6, icon:'滇' },
    { name:'曲靖市人民政府',   url:'https://www.qujing.gov.cn',      desc:'曲靖市人民政府门户网站，珠江源头。',                         category:'gov', region:'yunnan', city:'qujing', type:'free', rating:4.4, icon:'滇' },
    { name:'玉溪市人民政府',   url:'https://www.yuxi.gov.cn',        desc:'玉溪市人民政府门户网站，聂耳故乡、烟草之都。',               category:'gov', region:'yunnan', city:'yuxi', type:'free', rating:4.5, icon:'滇' },
    { name:'保山市人民政府',   url:'https://www.baoshan.gov.cn',     desc:'保山市人民政府门户网站，永昌之郡。',                         category:'gov', region:'yunnan', city:'baoshan', type:'free', rating:4.4, icon:'滇' },
    { name:'昭通市人民政府',   url:'https://www.zhaotong.gov.cn',    desc:'昭通市人民政府门户网站，秋城、苹果之城。',                   category:'gov', region:'yunnan', city:'zhaotong', type:'free', rating:4.4, icon:'滇' },
    { name:'丽江市人民政府',   url:'https://www.lijiang.gov.cn',     desc:'丽江市人民政府门户网站，世界文化遗产丽江古城。',             category:'gov', region:'yunnan', city:'lijiang', type:'free', rating:4.6, icon:'滇' },
    { name:'普洱市人民政府',   url:'https://www.puershi.gov.cn',     desc:'普洱市人民政府门户网站，世界茶源。',                         category:'gov', region:'yunnan', city:'puer', type:'free', rating:4.4, icon:'滇' },
    { name:'临沧市人民政府',   url:'https://www.lincang.gov.cn',     desc:'临沧市人民政府门户网站，世界佤乡、恒春之都。',               category:'gov', region:'yunnan', city:'lincang', type:'free', rating:4.4, icon:'滇' },
    { name:'楚雄州人民政府',   url:'https://www.cxs.gov.cn',         desc:'楚雄彝族自治州人民政府门户网站，恐龙之乡。',               category:'gov', region:'yunnan', city:'chuxiong', type:'free', rating:4.4, icon:'滇' },
    { name:'红河州人民政府',   url:'https://www.hh.gov.cn',          desc:'红河哈尼族彝族自治州人民政府门户网站。',                     category:'gov', region:'yunnan', city:'honghe', type:'free', rating:4.4, icon:'滇' },
    { name:'文山州人民政府',   url:'https://www.ynws.gov.cn',        desc:'文山壮族苗族自治州人民政府门户网站。',                     category:'gov', region:'yunnan', city:'wenshan', type:'free', rating:4.4, icon:'滇' },
    { name:'西双版纳州人民政府', url:'https://www.xsbn.gov.cn',     desc:'西双版纳傣族自治州人民政府门户网站。',                     category:'gov', region:'yunnan', city:'xishuangbanna', type:'free', rating:4.5, icon:'滇' },
    { name:'德宏州人民政府',   url:'https://www.dh.gov.cn',          desc:'德宏傣族景颇族自治州人民政府门户网站。',                     category:'gov', region:'yunnan', city:'dehong', type:'free', rating:4.4, icon:'滇' },
    { name:'怒江州人民政府',   url:'https://www.nujiang.gov.cn',     desc:'怒江傈僳族自治州人民政府门户网站。',                       category:'gov', region:'yunnan', city:'nujiang', type:'free', rating:4.4, icon:'滇' },
    { name:'迪庆州人民政府',   url:'https://www.diqing.gov.cn',      desc:'迪庆藏族自治州人民政府门户网站，香格里拉。',                 category:'gov', region:'yunnan', city:'diqing', type:'free', rating:4.5, icon:'滇' },

    // --- 市级（西南）：西藏 ---
    { name:'拉萨市人民政府',   url:'https://www.lasa.gov.cn',        desc:'拉萨市人民政府门户网站，西藏首府，日光城。',                 category:'gov', region:'xizang', city:'lasa', type:'free', rating:4.5, icon:'藏' },
    { name:'日喀则市人民政府', url:'https://www.xzksgl.gov.cn',      desc:'日喀则市人民政府门户网站，珠峰故乡。',                       category:'gov', region:'xizang', city:'rikaze', type:'free', rating:4.4, icon:'藏' },
    { name:'昌都市人民政府',   url:'https://www.changdu.gov.cn',     desc:'昌都市人民政府门户网站，藏东明珠。',                         category:'gov', region:'xizang', city:'changdu', type:'free', rating:4.4, icon:'藏' },
    { name:'林芝市人民政府',   url:'https://www.linzhi.gov.cn',      desc:'林芝市人民政府门户网站，西藏瑞士、桃花之城。',               category:'gov', region:'xizang', city:'linzhi', type:'free', rating:4.5, icon:'藏' },
    { name:'山南市人民政府',   url:'https://www.shannan.gov.cn',     desc:'山南市人民政府门户网站，藏民族发祥地。',                     category:'gov', region:'xizang', city:'shannan', type:'free', rating:4.4, icon:'藏' },
    { name:'那曲市人民政府',   url:'https://www.naqu.gov.cn',        desc:'那曲市人民政府门户网站，万里羌塘。',                         category:'gov', region:'xizang', city:'naqu', type:'free', rating:4.3, icon:'藏' },
    { name:'阿里地区行政公署', url:'https://www.ali.gov.cn',         desc:'阿里地区行政公署，世界屋脊之屋脊。',                         category:'gov', region:'xizang', city:'ali', type:'free', rating:4.3, icon:'藏' },

    // --- 省级（西南）：四川 ---
    { name:'四川省人民政府',   url:'https://www.sc.gov.cn',           desc:'四川省人民政府门户网站，天府之国、西部经济强省。',               category:'gov', region:'sichuan', type:'free', rating:4.6, icon:'川' },
    { name:'四川省发改委',     url:'http://fgw.sc.gov.cn',            desc:'四川省发展和改革委员会，经济规划、成渝双城经济圈。',             category:'gov', region:'sichuan', type:'free', rating:4.5, icon:'川' },
    { name:'四川省教育厅',     url:'http://edu.sc.gov.cn',            desc:'四川省教育厅，教育政策、招生考试。',                           category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省科技厅',     url:'http://kjt.sc.gov.cn',            desc:'四川省科学技术厅，科技创新、西部科学城。',                     category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省经信厅',     url:'http://jxt.sc.gov.cn',            desc:'四川省经济和信息化厅，电子信息产业、数字经济。',                 category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省公安厅',     url:'http://gat.sc.gov.cn',            desc:'四川省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'sichuan', type:'free', rating:4.5, icon:'川' },
    { name:'四川省民政厅',     url:'http://mzt.sc.gov.cn',            desc:'四川省民政厅，社会救助、社区治理。',                         category:'gov', region:'sichuan', type:'free', rating:4.3, icon:'川' },
    { name:'四川省司法厅',     url:'http://sft.sc.gov.cn',            desc:'四川省司法厅，律师管理、法律援助。',                         category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省财政厅',     url:'http://czt.sc.gov.cn',            desc:'四川省财政厅，财政预算、政府采购。',                         category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省人社厅',     url:'http://rst.sc.gov.cn',            desc:'四川省人力资源和社会保障厅，社保、就业、人才。',               category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省自然资源厅', url:'http://zrzyt.sc.gov.cn',          desc:'四川省自然资源厅，国土规划、地质灾害防治。',                   category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省生态环境厅', url:'http://sthjt.sc.gov.cn',         desc:'四川省生态环境厅，污染防治、长江上游保护。',                   category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省住建厅',     url:'http://jst.sc.gov.cn',            desc:'四川省住房和城乡建设厅，住房保障、城市建设。',                 category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省交通运输厅', url:'http://jt.sc.gov.cn',             desc:'四川省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省水利厅',     url:'http://slt.sc.gov.cn',            desc:'四川省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'sichuan', type:'free', rating:4.3, icon:'川' },
    { name:'四川省农业农村厅', url:'http://nynct.sc.gov.cn',          desc:'四川省农业农村厅，乡村振兴、川茶川酒。',                       category:'gov', region:'sichuan', type:'free', rating:4.3, icon:'川' },
    { name:'四川省商务厅',     url:'http://swt.sc.gov.cn',            desc:'四川省商务厅，外贸促进、自贸区建设。',                       category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省文旅厅',     url:'http://wlt.sc.gov.cn',            desc:'四川省文化和旅游厅，天府旅游、大熊猫IP。',                   category:'gov', region:'sichuan', type:'free', rating:4.5, icon:'川' },
    { name:'四川省卫健委',     url:'http://wjw.sc.gov.cn',            desc:'四川省卫生健康委员会，医疗服务、公共卫生。',                   category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省应急管理厅', url:'http://emj.sc.gov.cn',            desc:'四川省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'sichuan', type:'free', rating:4.3, icon:'川' },
    { name:'四川省市场监管局', url:'http://scjgj.sc.gov.cn',          desc:'四川省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省医保局',     url:'http://ybj.sc.gov.cn',            desc:'四川省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'sichuan', type:'free', rating:4.4, icon:'川' },
    { name:'四川省统计局',     url:'http://tjj.sc.gov.cn',            desc:'四川省统计局，经济数据、统计公报。',                         category:'gov', region:'sichuan', type:'free', rating:4.3, icon:'川' },
    { name:'四川省体育局',     url:'http://tyj.sc.gov.cn',            desc:'四川省体育局，全民健身、体育赛事。',                         category:'gov', region:'sichuan', type:'free', rating:4.3, icon:'川' },
    { name:'四川省林草局',     url:'http://lcj.sc.gov.cn',            desc:'四川省林业和草原局，生态保护修复、大熊猫国家公园。',           category:'gov', region:'sichuan', type:'free', rating:4.3, icon:'川' },

    // --- 省级（西南）：贵州 ---
    { name:'贵州省人民政府',   url:'https://www.guizhou.gov.cn',      desc:'贵州省人民政府门户网站，多彩贵州、大数据中心。',                 category:'gov', region:'guizhou', type:'free', rating:4.5, icon:'黔' },
    { name:'贵州省发改委',     url:'http://fgw.guizhou.gov.cn',       desc:'贵州省发展和改革委员会，经济规划、大数据战略。',                 category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省教育厅',     url:'http://jyt.guizhou.gov.cn',       desc:'贵州省教育厅，教育政策、招生考试。',                         category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省科技厅',     url:'http://kjt.guizhou.gov.cn',       desc:'贵州省科学技术厅，科技创新、大数据产业。',                     category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省工信厅',     url:'http://gxt.guizhou.gov.cn',       desc:'贵州省工业和信息化厅，制造业发展、数字经济。',                 category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省公安厅',     url:'http://gat.guizhou.gov.cn',       desc:'贵州省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'guizhou', type:'free', rating:4.5, icon:'黔' },
    { name:'贵州省民政厅',     url:'http://mzt.guizhou.gov.cn',       desc:'贵州省民政厅，社会救助、社区治理。',                         category:'gov', region:'guizhou', type:'free', rating:4.3, icon:'黔' },
    { name:'贵州省司法厅',     url:'http://sft.guizhou.gov.cn',       desc:'贵州省司法厅，律师管理、法律援助。',                         category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省财政厅',     url:'http://czt.guizhou.gov.cn',       desc:'贵州省财政厅，财政预算、政府采购。',                         category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省人社厅',     url:'http://rst.guizhou.gov.cn',       desc:'贵州省人力资源和社会保障厅，社保、就业、人才。',               category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省自然资源厅', url:'http://zrzyt.guizhou.gov.cn',     desc:'贵州省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省生态环境厅', url:'http://sthjt.guizhou.gov.cn',    desc:'贵州省生态环境厅，污染防治、生态文明。',                     category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省住建厅',     url:'http://zjt.guizhou.gov.cn',       desc:'贵州省住房和城乡建设厅，住房保障、城市建设。',                 category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省交通运输厅', url:'http://jt.guizhou.gov.cn',       desc:'贵州省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省水利厅',     url:'http://slt.guizhou.gov.cn',       desc:'贵州省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'guizhou', type:'free', rating:4.3, icon:'黔' },
    { name:'贵州省农业农村厅', url:'http://nynct.guizhou.gov.cn',     desc:'贵州省农业农村厅，乡村振兴、茶产业。',                       category:'gov', region:'guizhou', type:'free', rating:4.3, icon:'黔' },
    { name:'贵州省商务厅',     url:'http://swt.guizhou.gov.cn',       desc:'贵州省商务厅，外贸促进、电商扶贫。',                         category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省文旅厅',     url:'http://wlt.guizhou.gov.cn',       desc:'贵州省文化和旅游厅，多彩贵州、文旅融合。',                   category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省卫健委',     url:'http://wjw.guizhou.gov.cn',       desc:'贵州省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省应急管理厅', url:'http://emj.guizhou.gov.cn',      desc:'贵州省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'guizhou', type:'free', rating:4.3, icon:'黔' },
    { name:'贵州省市场监管局', url:'http://amr.guizhou.gov.cn',      desc:'贵州省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省医保局',     url:'http://ybj.guizhou.gov.cn',      desc:'贵州省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'guizhou', type:'free', rating:4.4, icon:'黔' },
    { name:'贵州省统计局',     url:'http://tjj.guizhou.gov.cn',      desc:'贵州省统计局，经济数据、统计公报。',                         category:'gov', region:'guizhou', type:'free', rating:4.3, icon:'黔' },
    { name:'贵州省体育局',     url:'http://tyj.guizhou.gov.cn',      desc:'贵州省体育局，全民健身、体育赛事。',                         category:'gov', region:'guizhou', type:'free', rating:4.3, icon:'黔' },
    { name:'贵州省林业局',     url:'http://lyj.guizhou.gov.cn',      desc:'贵州省林业局，生态保护修复、石漠化治理。',                   category:'gov', region:'guizhou', type:'free', rating:4.3, icon:'黔' },

    // --- 省级（西南）：云南 ---
    { name:'云南省人民政府',   url:'https://www.yn.gov.cn',           desc:'云南省人民政府门户网站，七彩云南、面向南亚东南亚辐射中心。',     category:'gov', region:'yunnan', type:'free', rating:4.5, icon:'滇' },
    { name:'云南省发改委',     url:'http://fgw.yn.gov.cn',            desc:'云南省发展和改革委员会，经济规划、面向南亚开放。',               category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省教育厅',     url:'http://jyt.yn.gov.cn',            desc:'云南省教育厅，教育政策、招生考试。',                           category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省科技厅',     url:'http://kjt.yn.gov.cn',            desc:'云南省科学技术厅，科技创新、生物多样性保护。',                 category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省工信厅',     url:'http://gxt.yn.gov.cn',            desc:'云南省工业和信息化厅，制造业发展、绿色能源。',                 category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省公安厅',     url:'http://gat.yn.gov.cn',            desc:'云南省公安厅，户籍管理、交通管理、出入境、禁毒。',             category:'gov', region:'yunnan', type:'free', rating:4.5, icon:'滇' },
    { name:'云南省民政厅',     url:'http://mzt.yn.gov.cn',            desc:'云南省民政厅，社会救助、社区治理。',                         category:'gov', region:'yunnan', type:'free', rating:4.3, icon:'滇' },
    { name:'云南省司法厅',     url:'http://sft.yn.gov.cn',            desc:'云南省司法厅，律师管理、法律援助。',                         category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省财政厅',     url:'http://czt.yn.gov.cn',            desc:'云南省财政厅，财政预算、政府采购。',                         category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省人社厅',     url:'http://hrss.yn.gov.cn',           desc:'云南省人力资源和社会保障厅，社保、就业、人才。',               category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省自然资源厅', url:'http://dnr.yn.gov.cn',            desc:'云南省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省生态环境厅', url:'http://sthjt.yn.gov.cn',         desc:'云南省生态环境厅，污染防治、生物多样性保护。',                 category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省住建厅',     url:'http://zjt.yn.gov.cn',            desc:'云南省住房和城乡建设厅，住房保障、城市建设。',                 category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省交通运输厅', url:'http://jt.yn.gov.cn',             desc:'云南省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省水利厅',     url:'http://slt.yn.gov.cn',            desc:'云南省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'yunnan', type:'free', rating:4.3, icon:'滇' },
    { name:'云南省农业农村厅', url:'http://nynct.yn.gov.cn',          desc:'云南省农业农村厅，乡村振兴、高原特色农业。',                   category:'gov', region:'yunnan', type:'free', rating:4.3, icon:'滇' },
    { name:'云南省商务厅',     url:'http://swt.yn.gov.cn',            desc:'云南省商务厅，外贸促进、面向南亚东南亚开放。',                 category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省文旅厅',     url:'http://wlt.yn.gov.cn',            desc:'云南省文化和旅游厅，七彩云南、文旅融合。',                   category:'gov', region:'yunnan', type:'free', rating:4.5, icon:'滇' },
    { name:'云南省卫健委',     url:'http://wjw.yn.gov.cn',            desc:'云南省卫生健康委员会，医疗服务、公共卫生。',                 category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省应急管理厅', url:'http://emj.yn.gov.cn',            desc:'云南省应急管理厅，安全生产、应急救援、地质灾害防治。',         category:'gov', region:'yunnan', type:'free', rating:4.3, icon:'滇' },
    { name:'云南省市场监管局', url:'http://amr.yn.gov.cn',            desc:'云南省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省医保局',     url:'http://ybj.yn.gov.cn',            desc:'云南省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'yunnan', type:'free', rating:4.4, icon:'滇' },
    { name:'云南省统计局',     url:'http://tjj.yn.gov.cn',            desc:'云南省统计局，经济数据、统计公报。',                         category:'gov', region:'yunnan', type:'free', rating:4.3, icon:'滇' },
    { name:'云南省体育局',     url:'http://tyj.yn.gov.cn',            desc:'云南省体育局，全民健身、体育赛事。',                         category:'gov', region:'yunnan', type:'free', rating:4.3, icon:'滇' },
    { name:'云南省林草局',     url:'http://lcj.yn.gov.cn',            desc:'云南省林业和草原局，生态保护修复、亚洲象保护。',               category:'gov', region:'yunnan', type:'free', rating:4.3, icon:'滇' },

    // --- 省级（西南）：西藏 ---
    { name:'西藏自治区人民政府', url:'https://www.xizang.gov.cn',     desc:'西藏自治区人民政府门户网站，世界屋脊、雪域高原。',             category:'gov', region:'xizang', type:'free', rating:4.4, icon:'藏' },
    { name:'西藏发改委',       url:'http://fgw.xizang.gov.cn',        desc:'西藏自治区发展和改革委员会，经济规划、重大项目。',             category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏教育厅',       url:'http://jyt.xizang.gov.cn',        desc:'西藏自治区教育厅，教育政策、招生考试。',                     category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏科技厅',       url:'http://kjt.xizang.gov.cn',        desc:'西藏自治区科学技术厅，科技创新、高原科学。',                   category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏工信厅',       url:'http://xmt.xizang.gov.cn',        desc:'西藏自治区经济和信息化厅，特色产业、数字经济。',               category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏公安厅',       url:'http://gat.xizang.gov.cn',        desc:'西藏自治区公安厅，户籍管理、交通管理。',                     category:'gov', region:'xizang', type:'free', rating:4.4, icon:'藏' },
    { name:'西藏民政厅',       url:'http://mzt.xizang.gov.cn',        desc:'西藏自治区民政厅，社会救助、社区治理。',                     category:'gov', region:'xizang', type:'free', rating:4.2, icon:'藏' },
    { name:'西藏司法厅',       url:'http://sft.xizang.gov.cn',        desc:'西藏自治区司法厅，律师管理、法律援助。',                     category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏财政厅',       url:'http://cz.xizang.gov.cn',         desc:'西藏自治区财政厅，财政预算、政府采购。',                     category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏人社厅',       url:'http://hrss.xizang.gov.cn',       desc:'西藏自治区人力资源和社会保障厅，社保、就业、人才。',           category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏自然资源厅',   url:'http://zrzyt.xizang.gov.cn',      desc:'西藏自治区自然资源厅，国土规划、生态保护。',                 category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏生态环境厅',   url:'http://sthjt.xizang.gov.cn',      desc:'西藏自治区生态环境厅，污染防治、高原生态保护。',               category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏住建厅',       url:'http://zjt.xizang.gov.cn',        desc:'西藏自治区住房和城乡建设厅，住房保障、城市建设。',             category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏交通运输厅',   url:'http://jt.xizang.gov.cn',         desc:'西藏自治区交通运输厅，公路建设、交通管理。',                 category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏水利厅',       url:'http://slt.xizang.gov.cn',        desc:'西藏自治区水利厅，水资源管理、防汛抗旱。',                   category:'gov', region:'xizang', type:'free', rating:4.2, icon:'藏' },
    { name:'西藏农业农村厅',   url:'http://nynct.xizang.gov.cn',      desc:'西藏自治区农业农村厅，乡村振兴、高原农牧业。',                 category:'gov', region:'xizang', type:'free', rating:4.2, icon:'藏' },
    { name:'西藏商务厅',       url:'http://swt.xizang.gov.cn',        desc:'西藏自治区商务厅，边贸促进、南亚开放。',                     category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏文旅厅',       url:'http://wlt.xizang.gov.cn',        desc:'西藏自治区文化和旅游厅，圣洁西藏、文旅融合。',                 category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏卫健委',       url:'http://wjw.xizang.gov.cn',        desc:'西藏自治区卫生健康委员会，医疗服务、高原病防治。',             category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏应急管理厅',   url:'http://emj.xizang.gov.cn',        desc:'西藏自治区应急管理厅，安全生产、应急救援。',                 category:'gov', region:'xizang', type:'free', rating:4.2, icon:'藏' },
    { name:'西藏市场监管局',   url:'http://amr.xizang.gov.cn',        desc:'西藏自治区市场监督管理局，企业登记、食品安全。',               category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏医保局',       url:'http://ybj.xizang.gov.cn',        desc:'西藏自治区医疗保障局，医保政策、医疗报销。',                   category:'gov', region:'xizang', type:'free', rating:4.3, icon:'藏' },
    { name:'西藏统计局',       url:'http://tjj.xizang.gov.cn',        desc:'西藏自治区统计局，经济数据、统计公报。',                     category:'gov', region:'xizang', type:'free', rating:4.2, icon:'藏' },
    { name:'西藏林草局',       url:'http://lcj.xizang.gov.cn',        desc:'西藏自治区林业和草原局，生态保护修复。',                     category:'gov', region:'xizang', type:'free', rating:4.2, icon:'藏' },

    // --- 市级（西北）：陕西 ---
    { name:'西安市人民政府',   url:'https://www.xa.gov.cn',          desc:'西安市人民政府门户网站，陕西省会，十三朝古都。',             category:'gov', region:'shaanxi', city:'xian', type:'free', rating:4.7, icon:'陕' },
    { name:'宝鸡市人民政府',   url:'https://www.baoji.gov.cn',       desc:'宝鸡市人民政府门户网站，青铜器之乡、周秦文明发祥地。',       category:'gov', region:'shaanxi', city:'baoji', type:'free', rating:4.5, icon:'陕' },
    { name:'咸阳市人民政府',   url:'https://www.xianyang.gov.cn',    desc:'咸阳市人民政府门户网站，大秦帝都。',                         category:'gov', region:'shaanxi', city:'xianyang', type:'free', rating:4.5, icon:'陕' },
    { name:'铜川市人民政府',   url:'https://www.tongchuan.gov.cn',   desc:'铜川市人民政府门户网站，药王故里。',                         category:'gov', region:'shaanxi', city:'tongchuan', type:'free', rating:4.4, icon:'陕' },
    { name:'渭南市人民政府',   url:'https://www.weinan.gov.cn',      desc:'渭南市人民政府门户网站，华夏之根、三圣故里。',               category:'gov', region:'shaanxi', city:'weinan', type:'free', rating:4.4, icon:'陕' },
    { name:'延安市人民政府',   url:'https://www.yanan.gov.cn',       desc:'延安市人民政府门户网站，革命圣地。',                         category:'gov', region:'shaanxi', city:'yanan', type:'free', rating:4.5, icon:'陕' },
    { name:'汉中市人民政府',   url:'https://www.hanzhong.gov.cn',    desc:'汉中市人民政府门户网站，汉家发祥地、中华聚宝盆。',           category:'gov', region:'shaanxi', city:'hanzhong', type:'free', rating:4.5, icon:'陕' },
    { name:'榆林市人民政府',   url:'https://www.yulin.gov.cn',       desc:'榆林市人民政府门户网站，塞上明珠、中国煤都。',               category:'gov', region:'shaanxi', city:'yulin', type:'free', rating:4.5, icon:'陕' },
    { name:'安康市人民政府',   url:'https://www.ankang.gov.cn',      desc:'安康市人民政府门户网站，秦巴明珠。',                         category:'gov', region:'shaanxi', city:'ankang', type:'free', rating:4.4, icon:'陕' },
    { name:'商洛市人民政府',   url:'https://www.shangluo.gov.cn',    desc:'商洛市人民政府门户网站，秦岭最美是商洛。',                   category:'gov', region:'shaanxi', city:'shangluo', type:'free', rating:4.4, icon:'陕' },

    // --- 市级（西北）：甘肃 ---
    { name:'兰州市人民政府',   url:'https://www.lanzhou.gov.cn',     desc:'兰州市人民政府门户网站，甘肃省会、黄河穿城而过。',           category:'gov', region:'gansu', city:'lanzhou', type:'free', rating:4.6, icon:'甘' },
    { name:'嘉峪关市人民政府', url:'https://www.jiayuguan.gov.cn',   desc:'嘉峪关市人民政府门户网站，天下第一雄关。',                   category:'gov', region:'gansu', city:'jiayuguan', type:'free', rating:4.5, icon:'甘' },
    { name:'金昌市人民政府',   url:'https://www.jinchang.gov.cn',    desc:'金昌市人民政府门户网站，中国镍都。',                         category:'gov', region:'gansu', city:'jinchang', type:'free', rating:4.4, icon:'甘' },
    { name:'白银市人民政府',   url:'https://www.baiyin.gov.cn',      desc:'白银市人民政府门户网站，铜城。',                             category:'gov', region:'gansu', city:'baiyin', type:'free', rating:4.4, icon:'甘' },
    { name:'天水市人民政府',   url:'https://www.tianshui.gov.cn',    desc:'天水市人民政府门户网站，羲皇故里、陇上江南。',               category:'gov', region:'gansu', city:'tianshui', type:'free', rating:4.5, icon:'甘' },
    { name:'武威市人民政府',   url:'https://www.wuwei.gov.cn',       desc:'武威市人民政府门户网站，天马故乡。',                         category:'gov', region:'gansu', city:'wuwei', type:'free', rating:4.4, icon:'甘' },
    { name:'张掖市人民政府',   url:'https://www.zhangye.gov.cn',     desc:'张掖市人民政府门户网站，金张掖、塞上江南。',                 category:'gov', region:'gansu', city:'zhangye', type:'free', rating:4.5, icon:'甘' },
    { name:'平凉市人民政府',   url:'https://www.pingliang.gov.cn',   desc:'平凉市人民政府门户网站，崆峒山所在。',                       category:'gov', region:'gansu', city:'pingliang', type:'free', rating:4.4, icon:'甘' },
    { name:'酒泉市人民政府',   url:'https://www.jiuquan.gov.cn',     desc:'酒泉市人民政府门户网站，航天之都、敦煌莫高窟。',             category:'gov', region:'gansu', city:'jiuquan', type:'free', rating:4.5, icon:'甘' },
    { name:'庆阳市人民政府',   url:'https://www.qingyang.gov.cn',    desc:'庆阳市人民政府门户网站，周祖农耕文化发祥地。',               category:'gov', region:'gansu', city:'qingyang', type:'free', rating:4.4, icon:'甘' },
    { name:'定西市人民政府',   url:'https://www.dingxi.gov.cn',      desc:'定西市人民政府门户网站，薯都。',                             category:'gov', region:'gansu', city:'dingxi', type:'free', rating:4.4, icon:'甘' },
    { name:'陇南市人民政府',   url:'https://www.longnan.gov.cn',     desc:'陇南市人民政府门户网站，陇上江南。',                         category:'gov', region:'gansu', city:'longnan', type:'free', rating:4.4, icon:'甘' },
    { name:'临夏州人民政府',   url:'https://www.linxia.gov.cn',      desc:'临夏回族自治州人民政府门户网站。',                         category:'gov', region:'gansu', city:'linxia', type:'free', rating:4.4, icon:'甘' },
    { name:'甘南州人民政府',   url:'https://www.gannan.gov.cn',      desc:'甘南藏族自治州人民政府门户网站。',                         category:'gov', region:'gansu', city:'gannan', type:'free', rating:4.4, icon:'甘' },

    // --- 市级（西北）：青海 ---
    { name:'西宁市人民政府',   url:'https://www.xining.gov.cn',      desc:'西宁市人民政府门户网站，青海省会，夏都。',                   category:'gov', region:'qinghai', city:'xining', type:'free', rating:4.6, icon:'青' },
    { name:'海东市人民政府',   url:'https://www.haidong.gov.cn',     desc:'海东市人民政府门户网站，海东门户。',                         category:'gov', region:'qinghai', city:'haidong', type:'free', rating:4.4, icon:'青' },
    { name:'海北州人民政府',   url:'https://www.haibei.gov.cn',      desc:'海北藏族自治州人民政府门户网站，原子城。',                   category:'gov', region:'qinghai', city:'haibei', type:'free', rating:4.4, icon:'青' },
    { name:'黄南州人民政府',   url:'https://www.huangnan.gov.cn',    desc:'黄南藏族自治州人民政府门户网站，热贡艺术之乡。',             category:'gov', region:'qinghai', city:'huangnan', type:'free', rating:4.3, icon:'青' },
    { name:'海南州人民政府',   url:'https://www.hainan.qh.gov.cn',   desc:'海南藏族自治州人民政府门户网站。',                         category:'gov', region:'qinghai', city:'hainanqh', type:'free', rating:4.3, icon:'青' },
    { name:'果洛州人民政府',   url:'https://www.guoluo.gov.cn',      desc:'果洛藏族自治州人民政府门户网站。',                         category:'gov', region:'qinghai', city:'guoluo', type:'free', rating:4.3, icon:'青' },
    { name:'玉树州人民政府',   url:'https://www.yushu.gov.cn',       desc:'玉树藏族自治州人民政府门户网站，三江之源。',                 category:'gov', region:'qinghai', city:'yushu', type:'free', rating:4.4, icon:'青' },
    { name:'海西州人民政府',   url:'https://www.haixi.gov.cn',       desc:'海西蒙古族藏族自治州人民政府门户网站。',                   category:'gov', region:'qinghai', city:'haixi', type:'free', rating:4.4, icon:'青' },

    // --- 市级（西北）：宁夏 ---
    { name:'银川市人民政府',   url:'https://www.yinchuan.gov.cn',    desc:'银川市人民政府门户网站，宁夏首府，塞上江南。',               category:'gov', region:'ningxia', city:'yinchuan', type:'free', rating:4.6, icon:'宁' },
    { name:'石嘴山市人民政府', url:'https://www.shizuishan.gov.cn',  desc:'石嘴山市人民政府门户网站，山水园林之城。',                   category:'gov', region:'ningxia', city:'shizuishan', type:'free', rating:4.4, icon:'宁' },
    { name:'吴忠市人民政府',   url:'https://www.wuzhong.gov.cn',     desc:'吴忠市人民政府门户网站，塞上明珠。',                         category:'gov', region:'ningxia', city:'wuzhong', type:'free', rating:4.4, icon:'宁' },
    { name:'固原市人民政府',   url:'https://www.guyuan.gov.cn',      desc:'固原市人民政府门户网站，丝路重镇。',                         category:'gov', region:'ningxia', city:'guyuan', type:'free', rating:4.4, icon:'宁' },
    { name:'中卫市人民政府',   url:'https://www.zhongwei.gov.cn',    desc:'中卫市人民政府门户网站，沙漠水城、枸杞之乡。',               category:'gov', region:'ningxia', city:'zhongwei', type:'free', rating:4.4, icon:'宁' },

    // --- 市级（西北）：新疆 ---
    { name:'乌鲁木齐市人民政府', url:'https://www.urumqi.gov.cn',   desc:'乌鲁木齐市人民政府门户网站，新疆首府，亚欧之心。',           category:'gov', region:'xinjiang', city:'wulumuqi', type:'free', rating:4.6, icon:'新' },
    { name:'克拉玛依市人民政府', url:'https://www.karamay.gov.cn',   desc:'克拉玛依市人民政府门户网站，石油之城。',                     category:'gov', region:'xinjiang', city:'kelamayi', type:'free', rating:4.5, icon:'新' },
    { name:'吐鲁番市人民政府', url:'https://www.turpan.gov.cn',      desc:'吐鲁番市人民政府门户网站，火洲、葡萄之城。',                 category:'gov', region:'xinjiang', city:'turpan', type:'free', rating:4.5, icon:'新' },
    { name:'哈密市人民政府',   url:'https://www.hamigz.gov.cn',      desc:'哈密市人民政府门户网站，瓜果之乡、新疆东大门。',             category:'gov', region:'xinjiang', city:'hami', type:'free', rating:4.4, icon:'新' },
    { name:'昌吉州人民政府',   url:'https://www.cj.gov.cn',          desc:'昌吉回族自治州人民政府门户网站。',                         category:'gov', region:'xinjiang', city:'changji', type:'free', rating:4.4, icon:'新' },
    { name:'博尔塔拉州人民政府', url:'https://www.xjboz.gov.cn',     desc:'博尔塔拉蒙古自治州人民政府门户网站。',                     category:'gov', region:'xinjiang', city:'boertala', type:'free', rating:4.4, icon:'新' },
    { name:'巴音郭楞州人民政府', url:'https://www.bygl.gov.cn',     desc:'巴音郭楞蒙古自治州人民政府门户网站，中国面积最大地州。',     category:'gov', region:'xinjiang', city:'bayinguoleng', type:'free', rating:4.4, icon:'新' },
    { name:'阿克苏地区行政公署', url:'https://www.aks.gov.cn',      desc:'阿克苏地区行政公署，白水之城、苹果之城。',                   category:'gov', region:'xinjiang', city:'akesu', type:'free', rating:4.4, icon:'新' },
    { name:'克孜勒苏州人民政府', url:'https://www.xjkz.gov.cn',     desc:'克孜勒苏柯尔克孜自治州人民政府门户网站。',                   category:'gov', region:'xinjiang', city:'keshi', type:'free', rating:4.3, icon:'新' },
    { name:'喀什地区行政公署', url:'https://www.kashi.gov.cn',      desc:'喀什地区行政公署，丝路明珠。',                             category:'gov', region:'xinjiang', city:'kashen', type:'free', rating:4.5, icon:'新' },
    { name:'和田地区行政公署', url:'https://www.hotan.gov.cn',       desc:'和田地区行政公署，玉石之都。',                             category:'gov', region:'xinjiang', city:'hetian', type:'free', rating:4.4, icon:'新' },
    { name:'伊犁州人民政府',   url:'https://www.yili.gov.cn',        desc:'伊犁哈萨克自治州人民政府门户网站，塞外江南。',               category:'gov', region:'xinjiang', city:'yili', type:'free', rating:4.5, icon:'新' },
    { name:'塔城地区行政公署', url:'https://www.xjtc.gov.cn',       desc:'塔城地区行政公署。',                                       category:'gov', region:'xinjiang', city:'tacheng', type:'free', rating:4.4, icon:'新' },
    { name:'阿勒泰地区行政公署', url:'https://www.altay.gov.cn',     desc:'阿勒泰地区行政公署，金山银水。',                           category:'gov', region:'xinjiang', city:'aletai', type:'free', rating:4.4, icon:'新' },

    // --- 省级（西北）：陕西 ---
    { name:'陕西省人民政府',   url:'https://www.shaanxi.gov.cn',      desc:'陕西省人民政府门户网站，十三朝古都、西部大开发。',               category:'gov', region:'shaanxi', type:'free', rating:4.6, icon:'陕' },
    { name:'陕西省发改委',     url:'http://fgw.shaanxi.gov.cn',       desc:'陕西省发展和改革委员会，经济规划、关中平原城市群。',             category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省教育厅',     url:'http://jyt.shaanxi.gov.cn',       desc:'陕西省教育厅，教育政策、招生考试。',                           category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省科技厅',     url:'http://kjt.shaanxi.gov.cn',       desc:'陕西省科学技术厅，科技创新、航天航空。',                       category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省工信厅',     url:'http://gxt.shaanxi.gov.cn',       desc:'陕西省工业和信息化厅，能源化工、先进制造。',                   category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省公安厅',     url:'http://gat.shaanxi.gov.cn',       desc:'陕西省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'shaanxi', type:'free', rating:4.5, icon:'陕' },
    { name:'陕西省民政厅',     url:'http://mzt.shaanxi.gov.cn',       desc:'陕西省民政厅，社会救助、社区治理。',                         category:'gov', region:'shaanxi', type:'free', rating:4.3, icon:'陕' },
    { name:'陕西省司法厅',     url:'http://sft.shaanxi.gov.cn',       desc:'陕西省司法厅，律师管理、法律援助。',                         category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省财政厅',     url:'http://czt.shaanxi.gov.cn',       desc:'陕西省财政厅，财政预算、政府采购。',                         category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省人社厅',     url:'http://rst.shaanxi.gov.cn',       desc:'陕西省人力资源和社会保障厅，社保、就业、人才。',               category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省自然资源厅', url:'http://zrzyt.shaanxi.gov.cn',     desc:'陕西省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省生态环境厅', url:'http://sthjt.shaanxi.gov.cn',    desc:'陕西省生态环境厅，污染防治、秦岭保护。',                       category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省住建厅',     url:'http://jst.shaanxi.gov.cn',       desc:'陕西省住房和城乡建设厅，住房保障、城市建设。',                 category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省交通运输厅', url:'http://jtt.shaanxi.gov.cn',       desc:'陕西省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省水利厅',     url:'http://slt.shaanxi.gov.cn',       desc:'陕西省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'shaanxi', type:'free', rating:4.3, icon:'陕' },
    { name:'陕西省农业农村厅', url:'http://nynct.shaanxi.gov.cn',     desc:'陕西省农业农村厅，乡村振兴、苹果产业。',                       category:'gov', region:'shaanxi', type:'free', rating:4.3, icon:'陕' },
    { name:'陕西省商务厅',     url:'http://swt.shaanxi.gov.cn',       desc:'陕西省商务厅，外贸促进、自贸区建设。',                       category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省文旅厅',     url:'http://wlt.shaanxi.gov.cn',       desc:'陕西省文化和旅游厅，兵马俑故乡、文旅融合。',                   category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省卫健委',     url:'http://wjw.shaanxi.gov.cn',       desc:'陕西省卫生健康委员会，医疗服务、公共卫生。',                   category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省应急管理厅', url:'http://emj.shaanxi.gov.cn',      desc:'陕西省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'shaanxi', type:'free', rating:4.3, icon:'陕' },
    { name:'陕西省市场监管局', url:'http://samr.shaanxi.gov.cn',     desc:'陕西省市场监督管理局，企业登记、食品安全。',                 category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省医保局',     url:'http://ybj.shaanxi.gov.cn',      desc:'陕西省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'shaanxi', type:'free', rating:4.4, icon:'陕' },
    { name:'陕西省统计局',     url:'http://tjj.shaanxi.gov.cn',       desc:'陕西省统计局，经济数据、统计公报。',                         category:'gov', region:'shaanxi', type:'free', rating:4.3, icon:'陕' },
    { name:'陕西省体育局',     url:'http://tyj.shaanxi.gov.cn',       desc:'陕西省体育局，全民健身、体育赛事。',                         category:'gov', region:'shaanxi', type:'free', rating:4.3, icon:'陕' },
    { name:'陕西省林业局',     url:'http://lyj.shaanxi.gov.cn',       desc:'陕西省林业局，生态保护修复、秦岭国家公园。',                   category:'gov', region:'shaanxi', type:'free', rating:4.3, icon:'陕' },

    // --- 省级（西北）：甘肃 ---
    { name:'甘肃省人民政府',   url:'https://www.gansu.gov.cn',        desc:'甘肃省人民政府门户网站，丝绸之路、敦煌文化。',                 category:'gov', region:'gansu', type:'free', rating:4.5, icon:'甘' },
    { name:'甘肃省发改委',     url:'http://fgw.gansu.gov.cn',         desc:'甘肃省发展和改革委员会，经济规划、丝路经济带。',                 category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省教育厅',     url:'http://jyt.gansu.gov.cn',         desc:'甘肃省教育厅，教育政策、招生考试。',                           category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省科技厅',     url:'http://kjt.gansu.gov.cn',         desc:'甘肃省科学技术厅，科技创新、成果转化。',                       category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省工信厅',     url:'http://gxt.gansu.gov.cn',         desc:'甘肃省工业和信息化厅，石化产业、装备制造。',                   category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省公安厅',     url:'http://gat.gansu.gov.cn',         desc:'甘肃省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'gansu', type:'free', rating:4.5, icon:'甘' },
    { name:'甘肃省民政厅',     url:'http://mzt.gansu.gov.cn',         desc:'甘肃省民政厅，社会救助、社区治理。',                         category:'gov', region:'gansu', type:'free', rating:4.3, icon:'甘' },
    { name:'甘肃省司法厅',     url:'http://sft.gansu.gov.cn',         desc:'甘肃省司法厅，律师管理、法律援助。',                         category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省财政厅',     url:'http://czt.gansu.gov.cn',         desc:'甘肃省财政厅，财政预算、政府采购。',                         category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省人社厅',     url:'http://rst.gansu.gov.cn',         desc:'甘肃省人力资源和社会保障厅，社保、就业、人才。',               category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省自然资源厅', url:'http://zrzyt.gansu.gov.cn',      desc:'甘肃省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省生态环境厅', url:'http://sthjt.gansu.gov.cn',      desc:'甘肃省生态环境厅，污染防治、祁连山保护。',                   category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省住建厅',     url:'http://zjt.gansu.gov.cn',         desc:'甘肃省住房和城乡建设厅，住房保障、城市建设。',               category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省交通运输厅', url:'http://jt.gansu.gov.cn',         desc:'甘肃省交通运输厅，公路水路、交通管理。',                     category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省水利厅',     url:'http://slt.gansu.gov.cn',         desc:'甘肃省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'gansu', type:'free', rating:4.3, icon:'甘' },
    { name:'甘肃省农业农村厅', url:'http://nynct.gansu.gov.cn',      desc:'甘肃省农业农村厅，乡村振兴、旱作农业。',                       category:'gov', region:'gansu', type:'free', rating:4.3, icon:'甘' },
    { name:'甘肃省商务厅',     url:'http://swt.gansu.gov.cn',         desc:'甘肃省商务厅，外贸促进、兰洽会。',                           category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省文旅厅',     url:'http://wlt.gansu.gov.cn',         desc:'甘肃省文化和旅游厅，丝路文化、敦煌莫高窟。',                   category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省卫健委',     url:'http://wjw.gansu.gov.cn',         desc:'甘肃省卫生健康委员会，医疗服务、公共卫生。',                   category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省应急管理厅', url:'http://emj.gansu.gov.cn',        desc:'甘肃省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'gansu', type:'free', rating:4.3, icon:'甘' },
    { name:'甘肃省市场监管局', url:'http://amr.gansu.gov.cn',        desc:'甘肃省市场监督管理局，企业登记、食品安全。',                   category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省医保局',     url:'http://ybj.gansu.gov.cn',        desc:'甘肃省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'gansu', type:'free', rating:4.4, icon:'甘' },
    { name:'甘肃省统计局',     url:'http://tjj.gansu.gov.cn',         desc:'甘肃省统计局，经济数据、统计公报。',                         category:'gov', region:'gansu', type:'free', rating:4.3, icon:'甘' },
    { name:'甘肃省体育局',     url:'http://tyj.gansu.gov.cn',         desc:'甘肃省体育局，全民健身、体育赛事。',                         category:'gov', region:'gansu', type:'free', rating:4.3, icon:'甘' },
    { name:'甘肃省林草局',     url:'http://lcj.gansu.gov.cn',         desc:'甘肃省林业和草原局，生态保护修复、祁连山国家公园。',           category:'gov', region:'gansu', type:'free', rating:4.3, icon:'甘' },

    // --- 省级（西北）：青海 ---
    { name:'青海省人民政府',   url:'https://www.qinghai.gov.cn',      desc:'青海省人民政府门户网站，大美青海、三江之源。',                   category:'gov', region:'qinghai', type:'free', rating:4.4, icon:'青' },
    { name:'青海省发改委',     url:'http://fgw.qinghai.gov.cn',       desc:'青海省发展和改革委员会，经济规划、清洁能源示范省。',             category:'gov', region:'qinghai', type:'free', rating:4.4, icon:'青' },
    { name:'青海省教育厅',     url:'http://jyt.qinghai.gov.cn',       desc:'青海省教育厅，教育政策、招生考试。',                           category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省科技厅',     url:'http://kjt.qinghai.gov.cn',       desc:'青海省科学技术厅，科技创新、高原科学。',                       category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省工信厅',     url:'http://gxj.qinghai.gov.cn',       desc:'青海省工业和信息化厅，盐湖化工、新能源。',                     category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省公安厅',     url:'http://gat.qinghai.gov.cn',       desc:'青海省公安厅，户籍管理、交通管理、出入境。',                   category:'gov', region:'qinghai', type:'free', rating:4.4, icon:'青' },
    { name:'青海省民政厅',     url:'http://mzt.qinghai.gov.cn',       desc:'青海省民政厅，社会救助、社区治理。',                         category:'gov', region:'qinghai', type:'free', rating:4.2, icon:'青' },
    { name:'青海省司法厅',     url:'http://sft.qinghai.gov.cn',       desc:'青海省司法厅，律师管理、法律援助。',                         category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省财政厅',     url:'http://czj.qinghai.gov.cn',       desc:'青海省财政厅，财政预算、政府采购。',                         category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海人社厅',       url:'http://rst.qinghai.gov.cn',       desc:'青海省人力资源和社会保障厅，社保、就业、人才。',               category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省自然资源厅', url:'http://zrzyt.qinghai.gov.cn',    desc:'青海省自然资源厅，国土规划、矿产资源。',                     category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省生态环境厅', url:'http://sthjt.qinghai.gov.cn',    desc:'青海省生态环境厅，污染防治、三江源保护。',                   category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省住建厅',     url:'http://zjt.qinghai.gov.cn',       desc:'青海省住房和城乡建设厅，住房保障、城市建设。',                 category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省交通运输厅', url:'http://jt.qinghai.gov.cn',        desc:'青海省交通运输厅，公路建设、交通管理。',                     category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省水利厅',     url:'http://slt.qinghai.gov.cn',       desc:'青海省水利厅，水资源管理、防汛抗旱。',                       category:'gov', region:'qinghai', type:'free', rating:4.2, icon:'青' },
    { name:'青海省农业农村厅', url:'http://nynct.qinghai.gov.cn',    desc:'青海省农业农村厅，乡村振兴、高原生态农牧业。',                   category:'gov', region:'qinghai', type:'free', rating:4.2, icon:'青' },
    { name:'青海省商务厅',     url:'http://swt.qinghai.gov.cn',       desc:'青海省商务厅，外贸促进、中欧班列。',                           category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省文旅厅',     url:'http://wlt.qinghai.gov.cn',       desc:'青海省文化和旅游厅，大美青海、文旅融合。',                   category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省卫健委',     url:'http://wjw.qinghai.gov.cn',       desc:'青海省卫生健康委员会，医疗服务、公共卫生。',                   category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省应急管理厅', url:'http://emj.qinghai.gov.cn',      desc:'青海省应急管理厅，安全生产、应急救援。',                     category:'gov', region:'qinghai', type:'free', rating:4.2, icon:'青' },
    { name:'青海省市场监管局', url:'http://amr.qinghai.gov.cn',      desc:'青海省市场监督管理局，企业登记、食品安全。',                   category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省医保局',     url:'http://ybj.qinghai.gov.cn',       desc:'青海省医疗保障局，医保政策、医疗报销。',                     category:'gov', region:'qinghai', type:'free', rating:4.3, icon:'青' },
    { name:'青海省统计局',     url:'http://tjj.qinghai.gov.cn',       desc:'青海省统计局，经济数据、统计公报。',                         category:'gov', region:'qinghai', type:'free', rating:4.2, icon:'青' },
    { name:'青海省林草局',     url:'http://lcj.qinghai.gov.cn',       desc:'青海省林业和草原局，生态保护修复、三江源国家公园。',           category:'gov', region:'qinghai', type:'free', rating:4.2, icon:'青' },

    // --- 省级（西北）：宁夏 ---
    { name:'宁夏回族自治区人民政府', url:'https://www.nx.gov.cn',     desc:'宁夏回族自治区人民政府门户网站，塞上江南。',                   category:'gov', region:'ningxia', type:'free', rating:4.4, icon:'宁' },
    { name:'宁夏发改委',       url:'http://fgw.nx.gov.cn',           desc:'宁夏回族自治区发展和改革委员会，经济规划、宁东能源基地。',         category:'gov', region:'ningxia', type:'free', rating:4.4, icon:'宁' },
    { name:'宁夏教育厅',       url:'http://jyt.nx.gov.cn',           desc:'宁夏回族自治区教育厅，教育政策、招生考试。',                   category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏科技厅',       url:'http://kjt.nx.gov.cn',           desc:'宁夏回族自治区科学技术厅，科技创新、成果转化。',               category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏工信厅',       url:'http://gxt.nx.gov.cn',           desc:'宁夏回族自治区工业和信息化厅，新能源、新材料。',                 category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏公安厅',       url:'http://gat.nx.gov.cn',           desc:'宁夏回族自治区公安厅，户籍管理、交通管理、出入境。',             category:'gov', region:'ningxia', type:'free', rating:4.4, icon:'宁' },
    { name:'宁夏民政厅',       url:'http://mzt.nx.gov.cn',           desc:'宁夏回族自治区民政厅，社会救助、社区治理。',                   category:'gov', region:'ningxia', type:'free', rating:4.2, icon:'宁' },
    { name:'宁夏司法厅',       url:'http://sft.nx.gov.cn',           desc:'宁夏回族自治区司法厅，律师管理、法律援助。',                   category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏财政厅',       url:'http://czt.nx.gov.cn',           desc:'宁夏回族自治区财政厅，财政预算、政府采购。',                   category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏人社厅',       url:'http://hrss.nx.gov.cn',          desc:'宁夏回族自治区人力资源和社会保障厅，社保、就业、人才。',           category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏自然资源厅',   url:'http://zrzyt.nx.gov.cn',         desc:'宁夏回族自治区自然资源厅，国土规划、矿产资源。',               category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏生态环境厅',   url:'http://sthjt.nx.gov.cn',         desc:'宁夏回族自治区生态环境厅，污染防治、黄河保护。',               category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏住建厅',       url:'http://zjt.nx.gov.cn',           desc:'宁夏回族自治区住房和城乡建设厅，住房保障、城市建设。',           category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏交通运输厅',   url:'http://jt.nx.gov.cn',            desc:'宁夏回族自治区交通运输厅，公路建设、交通管理。',               category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏水利厅',       url:'http://slt.nx.gov.cn',           desc:'宁夏回族自治区水利厅，水资源管理、防汛抗旱。',                 category:'gov', region:'ningxia', type:'free', rating:4.2, icon:'宁' },
    { name:'宁夏农业农村厅',   url:'http://nynct.nx.gov.cn',         desc:'宁夏回族自治区农业农村厅，乡村振兴、葡萄酒产业。',               category:'gov', region:'ningxia', type:'free', rating:4.2, icon:'宁' },
    { name:'宁夏商务厅',       url:'http://swt.nx.gov.cn',           desc:'宁夏回族自治区商务厅，外贸促进、中阿合作。',                   category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏文旅厅',       url:'http://wlt.nx.gov.cn',           desc:'宁夏回族自治区文化和旅游厅，塞上江南、文旅融合。',             category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏卫健委',       url:'http://wjw.nx.gov.cn',           desc:'宁夏回族自治区卫生健康委员会，医疗服务、公共卫生。',             category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏应急管理厅',   url:'http://emj.nx.gov.cn',           desc:'宁夏回族自治区应急管理厅，安全生产、应急救援。',               category:'gov', region:'ningxia', type:'free', rating:4.2, icon:'宁' },
    { name:'宁夏市场监管局',   url:'http://scjgj.nx.gov.cn',         desc:'宁夏回族自治区市场监督管理局，企业登记、食品安全。',             category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏医保局',       url:'http://ybj.nx.gov.cn',           desc:'宁夏回族自治区医疗保障局，医保政策、医疗报销。',               category:'gov', region:'ningxia', type:'free', rating:4.3, icon:'宁' },
    { name:'宁夏统计局',       url:'http://tj.nx.gov.cn',            desc:'宁夏回族自治区统计局，经济数据、统计公报。',                 category:'gov', region:'ningxia', type:'free', rating:4.2, icon:'宁' },
    { name:'宁夏林草局',       url:'http://lcj.nx.gov.cn',           desc:'宁夏回族自治区林业和草原局，生态保护修复。',                 category:'gov', region:'ningxia', type:'free', rating:4.2, icon:'宁' },

    // --- 省级（西北）：新疆 ---
    { name:'新疆维吾尔自治区人民政府', url:'https://www.xinjiang.gov.cn', desc:'新疆维吾尔自治区人民政府门户网站，一带一路核心区。',       category:'gov', region:'xinjiang', type:'free', rating:4.4, icon:'新' },
    { name:'新疆发改委',       url:'http://fgw.xinjiang.gov.cn',      desc:'新疆维吾尔自治区发展和改革委员会，经济规划、一带一路。',           category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆教育厅',       url:'http://jyt.xinjiang.gov.cn',      desc:'新疆维吾尔自治区教育厅，教育政策、招生考试。',                   category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆科技厅',       url:'http://kjt.xinjiang.gov.cn',      desc:'新疆维吾尔自治区科学技术厅，科技创新、成果转化。',               category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆工信厅',       url:'http://gxt.xinjiang.gov.cn',      desc:'新疆维吾尔自治区工业和信息化厅，能源化工、纺织产业。',             category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆公安厅',       url:'http://gat.xinjiang.gov.cn',      desc:'新疆维吾尔自治区公安厅，户籍管理、交通管理、反恐维稳。',           category:'gov', region:'xinjiang', type:'free', rating:4.4, icon:'新' },
    { name:'新疆民政厅',       url:'http://mzt.xinjiang.gov.cn',      desc:'新疆维吾尔自治区民政厅，社会救助、社区治理。',                 category:'gov', region:'xinjiang', type:'free', rating:4.2, icon:'新' },
    { name:'新疆司法厅',       url:'http://sft.xinjiang.gov.cn',      desc:'新疆维吾尔自治区司法厅，律师管理、法律援助。',                 category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆财政厅',       url:'http://cz.xinjiang.gov.cn',       desc:'新疆维吾尔自治区财政厅，财政预算、政府采购。',                   category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆人社厅',       url:'http://www.xjrs.gov.cn',          desc:'新疆维吾尔自治区人力资源和社会保障厅，社保、就业、人才。',         category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆自然资源厅',   url:'http://zrzyt.xinjiang.gov.cn',   desc:'新疆维吾尔自治区自然资源厅，国土规划、矿产资源。',               category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆生态环境厅',   url:'http://sthjt.xinjiang.gov.cn',   desc:'新疆维吾尔自治区生态环境厅，污染防治、荒漠化治理。',             category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆住建厅',       url:'http://zjt.xinjiang.gov.cn',      desc:'新疆维吾尔自治区住房和城乡建设厅，住房保障、城市建设。',           category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆交通运输厅',   url:'http://jt.xinjiang.gov.cn',       desc:'新疆维吾尔自治区交通运输厅，公路建设、交通管理。',               category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆水利厅',       url:'http://slt.xinjiang.gov.cn',      desc:'新疆维吾尔自治区水利厅，水资源管理、防汛抗旱。',                 category:'gov', region:'xinjiang', type:'free', rating:4.2, icon:'新' },
    { name:'新疆农业农村厅',   url:'http://nynct.xinjiang.gov.cn',    desc:'新疆维吾尔自治区农业农村厅，乡村振兴、棉花产业。',               category:'gov', region:'xinjiang', type:'free', rating:4.2, icon:'新' },
    { name:'新疆商务厅',       url:'http://swt.xinjiang.gov.cn',      desc:'新疆维吾尔自治区商务厅，外贸促进、口岸经济。',                 category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆文旅厅',       url:'http://wlt.xinjiang.gov.cn',      desc:'新疆维吾尔自治区文化和旅游厅，丝路文化、文旅融合。',             category:'gov', region:'xinjiang', type:'free', rating:4.4, icon:'新' },
    { name:'新疆卫健委',       url:'http://wjw.xinjiang.gov.cn',      desc:'新疆维吾尔自治区卫生健康委员会，医疗服务、公共卫生。',           category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆应急管理厅',   url:'http://emj.xinjiang.gov.cn',      desc:'新疆维吾尔自治区应急管理厅，安全生产、应急救援。',               category:'gov', region:'xinjiang', type:'free', rating:4.2, icon:'新' },
    { name:'新疆市场监管局',   url:'http://scjgj.xinjiang.gov.cn',   desc:'新疆维吾尔自治区市场监督管理局，企业登记、食品安全。',             category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆医保局',       url:'http://ybj.xinjiang.gov.cn',      desc:'新疆维吾尔自治区医疗保障局，医保政策、医疗报销。',               category:'gov', region:'xinjiang', type:'free', rating:4.3, icon:'新' },
    { name:'新疆统计局',       url:'http://tjj.xinjiang.gov.cn',      desc:'新疆维吾尔自治区统计局，经济数据、统计公报。',                 category:'gov', region:'xinjiang', type:'free', rating:4.2, icon:'新' },
    { name:'新疆林草局',       url:'http://lcj.xinjiang.gov.cn',      desc:'新疆维吾尔自治区林业和草原局，生态保护修复。',                 category:'gov', region:'xinjiang', type:'free', rating:4.2, icon:'新' },

    // --- 港澳台 ---
    { name:'香港特别行政区政府', url:'https://www.gov.hk',            desc:'香港特别行政区政府门户网站。',                             category:'gov', region:'hongkong', type:'free', rating:4.7, icon:'港' },
    { name:'澳门特别行政区政府', url:'https://www.gov.mo',            desc:'澳门特别行政区政府门户网站。',                             category:'gov', region:'macao', type:'free', rating:4.6, icon:'澳' },
    { name:'台湾行政当局门户',   url:'https://www.gov.tw',             desc:'中国台湾地区行政门户网站。',                               category:'gov', region:'taiwan', type:'free', rating:4.5, icon:'台' },

    // ============ 品牌官网 ============

    // --- 科技互联网 ---
    { name:'华为',          url:'https://www.huawei.com',       desc:'全球领先的ICT基础设施和智能终端提供商，业务覆盖通信网络、云计算、智能终端和汽车领域，2023年营收超7000亿元。', category:'brands', sub:'tech', type:'free', rating:4.9, icon:'华' , img:'huawei.ico' },
    { name:'小米',          url:'https://www.mi.com',           desc:'小米科技官网，全球第三大智能手机厂商，AIoT平台连接设备超8亿，打造"手机×AIoT"生态体系。', category:'brands', sub:'tech', type:'free', rating:4.8, icon:'米' , img:'mi.ico' },
    { name:'OPPO',          url:'https://www.oppo.com',         desc:'全球领先的智能手机品牌，以影像技术和快充技术见长，ColorOS系统服务全球数亿用户。', category:'brands', sub:'tech', type:'free', rating:4.6, icon:'OP' , img:'oppo.ico' },
    { name:'vivo',          url:'https://www.vivo.com',         desc:'全球智能手机品牌，以音乐手机和影像手机起家，X系列和iQOO子品牌覆盖不同市场。', category:'brands', sub:'tech', type:'free', rating:4.6, icon:'vi' , img:'vivo.ico' },
    { name:'联想',          url:'https://www.lenovo.com',       desc:'全球PC领导品牌，连续多年蝉联全球个人电脑销量第一，业务涵盖PC、服务器、手机和智能设备。', category:'brands', sub:'tech', type:'free', rating:4.7, icon:'联' , img:'lenovo.ico' },
    { name:'大疆创新',      url:'https://www.dji.com',          desc:'全球民用无人机领导者，占据全球消费级无人机70%以上市场份额，产品广泛用于航拍、农业和工业领域。', category:'brands', sub:'tech', type:'free', rating:4.8, icon:'疆' , img:'dji.ico' },
    { name:'TCL',           url:'https://www.tcl.com',          desc:'全球领先的科技产业集团，电视销量全球前二，同时布局半导体显示、新能源光伏等赛道。', category:'brands', sub:'tech', type:'free', rating:4.5, icon:'TC' , img:'tcl.ico' },
    { name:'海康威视',      url:'https://www.hikvision.com',    desc:'全球安防监控领域龙头企业，以视频技术为核心，产品和解决方案覆盖全球150多个国家和地区。', category:'brands', sub:'tech', type:'free', rating:4.5, icon:'海' , img:'hikvision.ico' },
    { name:'科大讯飞',      url:'https://www.iflytek.com',      desc:'中国智能语音与人工智能产业领导者，语音识别准确率国际领先，AI开放平台开发者超500万。', category:'brands', sub:'tech', type:'free', rating:4.6, icon:'讯' , img:'iflytek.ico' },
    { name:'商汤科技',      url:'https://www.sensetime.com',    desc:'中国计算机视觉和深度学习平台公司，在智慧城市、自动驾驶、医疗影像等领域广泛应用。', category:'brands', sub:'tech', type:'free', rating:4.4, icon:'商' , img:'sensetime.ico' },
    { name:'中兴通讯',      url:'https://www.zte.com.cn',       desc:'全球领先的综合通信信息解决方案提供商，5G专利数全球前列，业务覆盖160多个国家。', category:'brands', sub:'tech', type:'free', rating:4.5, icon:'中' , img:'zte.ico' },
    { name:'浪潮',          url:'https://www.inspur.com',       desc:'中国领先的服务器和云计算解决方案提供商，服务器出货量全球前三，AI服务器国内市占率第一。', category:'brands', sub:'tech', type:'free', rating:4.4, icon:'浪' , img:'inspur.ico' },
    { name:'地平线',        url:'https://www.horizon.auto',     desc:'边缘AI芯片领导者，智能驾驶计算方案装机量领先，为比亚迪、理想等车企提供芯片方案。', category:'brands', sub:'tech', type:'free', rating:4.3, icon:'地' , img:'horizon.ico' },
    { name:'寒武纪',        url:'https://www.cambricon.com',    desc:'中国AI芯片领域代表性企业，专注云端和边缘端AI芯片，产品应用于互联网、金融等行业。', category:'brands', sub:'tech', type:'free', rating:4.2, icon:'寒' , img:'cambricon.ico' },
    { name:'优必选',        url:'https://www.ubtrobot.com',     desc:'人形机器人和人工智能教育企业，Walker系列人形机器人技术领先，AI教育覆盖全国数千所学校。', category:'brands', sub:'tech', type:'free', rating:4.3, icon:'优' , img:'ubtrobot.ico' },

    // --- 电商零售 ---
    { name:'淘宝',          url:'https://www.taobao.com',       desc:'中国最大C2C购物平台，拥有超10亿商品和超8亿活跃买家，覆盖各类商品和直播电商。',  category:'brands', sub:'ecommerce', type:'free', rating:4.9, icon:'淘' , img:'taobao.ico' },
    { name:'天猫',          url:'https://www.tmall.com',        desc:'阿里巴巴旗下B2C品牌零售平台，汇聚全球超过25万个品牌，正品保障和物流体验一流。', category:'brands', sub:'ecommerce', type:'free', rating:4.8, icon:'猫' , img:'tmall.ico' },
    { name:'京东',          url:'https://www.jd.com',           desc:'中国最大自营式电商平台，以正品保障和极速物流著称，京东物流覆盖全国绝大部分地区。', category:'brands', sub:'ecommerce', type:'free', rating:4.9, icon:'京' , img:'jd.ico' },
    { name:'拼多多',        url:'https://www.pinduoduo.com',    desc:'社交电商龙头，以拼团模式和百亿补贴闻名，月活超8亿，农产品上行和工厂直供是核心特色。', category:'brands', sub:'ecommerce', type:'free', rating:4.7, icon:'拼' , img:'pinduoduo.ico' },
    { name:'唯品会',        url:'https://www.vip.com',          desc:'品牌特卖电商龙头企业，以"正品特卖+深度折扣"模式著称，专注服装鞋包美妆等品牌折扣。', category:'brands', sub:'ecommerce', type:'free', rating:4.5, icon:'唯' , img:'vip.ico' },
    { name:'苏宁易购',      url:'https://www.suning.com',       desc:'综合家电3C零售平台，以线下门店和线上电商融合为特色，家电品类是核心优势。',     category:'brands', sub:'ecommerce', type:'free', rating:4.4, icon:'苏' , img:'suning.ico' },
    { name:'抖音商城',      url:'https://www.douyin.com',       desc:'兴趣电商开创者，通过短视频和直播种草，实现从内容到消费的闭环，GMV突破万亿。',   category:'brands', sub:'ecommerce', type:'free', rating:4.8, icon:'抖' , img:'douyin.ico' },
    { name:'小红书',        url:'https://www.xiaohongshu.com',  desc:'年轻人的生活方式平台和消费决策入口，3亿+月活用户，"种草"文化发源地，品牌营销重要阵地。', category:'brands', sub:'ecommerce', type:'free', rating:4.8, icon:'红' , img:'xiaohongshu.ico' },
    { name:'当当网',        url:'https://www.dangdang.com',     desc:'综合网上购物商城，图书音像品类最为突出，以图书零售起家，曾是最大的中文网上书店。', category:'brands', sub:'ecommerce', type:'free', rating:4.2, icon:'当' , img:'dangdang.ico' },
    { name:'网易严选',      url:'https://you.163.com',          desc:'网易旗下生活类自营电商品牌，以"好的生活没那么贵"为理念，直连大牌工厂品质好物。', category:'brands', sub:'ecommerce', type:'free', rating:4.4, icon:'严' , img:'163you.ico' },
    { name:'盒马',          url:'https://www.freshippo.com',    desc:'阿里巴巴新零售标杆品牌，融合线上线下一体化运营，以生鲜食品为核心品类。',       category:'brands', sub:'ecommerce', type:'free', rating:4.5, icon:'盒' , img:'freshippo.ico' },

    // --- 社交通讯 ---
    { name:'微信',          url:'https://weixin.qq.com',        desc:'中国最大的即时通讯工具，月活跃用户超13亿，提供聊天、支付、小程序、公众号等全方位服务。', category:'brands', sub:'social', type:'free', rating:4.9, icon:'微' , img:'weixin.ico' },
    { name:'QQ',            url:'https://im.qq.com',            desc:'腾讯旗下即时通讯产品，覆盖年轻用户群体，集聊天、游戏、社交空间于一体。',       category:'brands', sub:'social', type:'free', rating:4.7, icon:'Q' , img:'qq.ico' },
    { name:'微博',          url:'https://weibo.com',            desc:'中国最大的社交媒体平台，热点舆论场，明星、媒体、KOL核心阵地。',          category:'brands', sub:'social', type:'free', rating:4.7, icon:'微' , img:'weibo.ico' },
    { name:'知乎',          url:'https://www.zhihu.com',        desc:'中文互联网高质量问答社区，以专业问答和深度讨论著称，聚集各领域专家和知识型用户。', category:'brands', sub:'social', type:'free', rating:4.7, icon:'知' , img:'zhihu.ico' },
    { name:'豆瓣',          url:'https://www.douban.com',       desc:'书影音评价社区和兴趣小组平台，文艺青年聚集地，电影评分和书评具有广泛影响力。',  category:'brands', sub:'social', type:'free', rating:4.6, icon:'豆' , img:'douban.ico' },
    { name:'百度',          url:'https://www.baidu.com',        desc:'全球最大中文搜索引擎，月活跃用户超6亿，同时布局AI、云计算、自动驾驶等领域。',  category:'brands', sub:'social', type:'free', rating:4.8, icon:'百' , img:'baidu.ico' },
    { name:'快手',          url:'https://www.kuaishou.com',     desc:'短视频和直播平台，在下沉市场拥有广泛用户基础，电商直播发展迅速。',        category:'brands', sub:'social', type:'free', rating:4.7, icon:'快' , img:'kuaishou.ico' },
    { name:'哔哩哔哩',      url:'https://www.bilibili.com',     desc:'中国年轻人最爱的弹幕视频网站，PUGC内容生态繁荣，涵盖知识、游戏、动画等多元内容。', category:'brands', sub:'social', type:'free', rating:4.8, icon:'B' , img:'bilibili.ico' },
    { name:'Soul',          url:'https://www.soulapp.cn',       desc:'基于兴趣图谱的年轻人的灵魂社交App，通过AI推荐匹配志同道合的社交伙伴。',   category:'brands', sub:'social', type:'free', rating:4.3, icon:'So' , img:'soulapp.ico' },
    { name:'陌陌',          url:'https://www.immomo.com',       desc:'基于地理位置的社交App，提供附近的人、群聊、直播等社交功能。',           category:'brands', sub:'social', type:'free', rating:4.2, icon:'陌' , img:'immomo.ico' },
    { name:'百度贴吧',      url:'https://tieba.baidu.com',      desc:'全球最大中文社区，兴趣社交平台，按话题划分的社区覆盖各类兴趣领域。',     category:'brands', sub:'social', type:'free', rating:4.4, icon:'贴' , img:'baidu.ico' },

    // --- 金融银行 ---
    { name:'中国工商银行',  url:'https://www.icbc.com.cn',      desc:'全球资产规模最大的商业银行，总资产超44万亿元，网点覆盖全国，企业金融和个人金融服务全面。', category:'brands', sub:'finance', type:'free', rating:4.8, icon:'工' , img:'icbc.ico' },
    { name:'中国建设银行',  url:'https://www.ccb.com',          desc:'中国第二大商业银行，在基础设施建设贷款领域领先，个人房贷业务市场占有率第一。',       category:'brands', sub:'finance', type:'free', rating:4.8, icon:'建' , img:'ccb.ico' },
    { name:'中国农业银行',  url:'https://www.abchina.com',      desc:'网点最多的商业银行，覆盖全国城乡，三农金融服务是核心特色和竞争优势。',             category:'brands', sub:'finance', type:'free', rating:4.7, icon:'农' , img:'abchina.ico' },
    { name:'中国银行',      url:'https://www.boc.cn',           desc:'中国历史最悠久的银行，国际化程度最高，在外汇兑换和跨境金融服务领域具有独特优势。', category:'brands', sub:'finance', type:'free', rating:4.7, icon:'中' , img:'boc.ico' },
    { name:'交通银行',      url:'https://www.bankcomm.com',     desc:'五大国有银行之一，百年金融老字号，以财富管理和信用卡业务见长。',                 category:'brands', sub:'finance', type:'free', rating:4.6, icon:'交' , img:'bankcomm.ico' },
    { name:'招商银行',      url:'https://www.cmbchina.com',     desc:'股份制银行标杆，零售金融和私人银行业务领先，被誉为"零售之王"。',               category:'brands', sub:'finance', type:'free', rating:4.8, icon:'招' , img:'cmbchina.ico' },
    { name:'中国邮政储蓄银行', url:'https://www.psbc.com',      desc:'网点覆盖全国最多的银行之一，近4万个网点深入县城和乡村，普惠金融服务领先。',     category:'brands', sub:'finance', type:'free', rating:4.6, icon:'邮' , img:'psbc.ico' },
    { name:'中信银行',      url:'https://www.citicbank.com',    desc:'中国中信集团旗下商业银行，以对公金融和投行业务为特色，信用卡品牌影响力较强。',   category:'brands', sub:'finance', type:'free', rating:4.5, icon:'信' , img:'citicbank.ico' },
    { name:'浦发银行',      url:'https://www.spdb.com.cn',      desc:'全国性股份制商业银行，总部位于上海，在绿色金融和科技金融领域持续创新。',       category:'brands', sub:'finance', type:'free', rating:4.5, icon:'浦' , img:'spdb.ico' },
    { name:'支付宝',        url:'https://www.alipay.com',       desc:'全球最大移动支付平台，月活超7亿，提供支付、理财、信用借还、生活缴费等全方位服务。', category:'brands', sub:'finance', type:'free', rating:4.9, icon:'支' , img:'alipay.ico' },
    { name:'微信支付',      url:'https://pay.weixin.qq.com',    desc:'腾讯旗下移动支付平台，依托微信13亿用户基础，是国内使用最广泛的扫码支付方式。',   category:'brands', sub:'finance', type:'free', rating:4.8, icon:'微' , img:'weixin.ico' },
    { name:'蚂蚁集团',      url:'https://www.antgroup.com',     desc:'支付宝母公司，全球领先的数字金融科技企业，业务涵盖支付、理财、保险和科技服务。', category:'brands', sub:'finance', type:'free', rating:4.7, icon:'蚂' , img:'antgroup.ico' },
    { name:'东方财富',      url:'https://www.eastmoney.com',    desc:'中国访问量最大的财经门户，旗下拥有天天基金网和东方财富证券，提供全面的财经资讯和交易服务。', category:'brands', sub:'finance', type:'free', rating:4.6, icon:'东' , img:'eastmoney.ico' },
    { name:'同花顺',        url:'https://www.10jqka.com.cn',    desc:'中国领先的互联网金融信息服务平台，以行情软件和投资工具著称，服务数亿投资者。',   category:'brands', sub:'finance', type:'free', rating:4.6, icon:'同' , img:'10jqka.ico' },

    // --- 出行旅游 ---
    { name:'携程旅行',      url:'https://www.ctrip.com',        desc:'中国最大在线旅游服务平台，提供酒店预订、机票、火车票、门票和旅游度假等一站式旅行服务。', category:'brands', sub:'travel', type:'free', rating:4.8, icon:'携' , img:'ctrip.ico' },
    { name:'飞猪旅行',      url:'https://www.fliggy.com',       desc:'阿里巴巴旗下旅行平台，整合淘宝天猫旅行资源，以年轻用户群体和出境游为特色。',     category:'brands', sub:'travel', type:'free', rating:4.6, icon:'飞' , img:'fliggy.ico' },
    { name:'去哪儿网',      url:'https://www.qunar.com',        desc:'旅游搜索引擎起家，以比价订票和特价机票著称，被携程收购后保持独立运营。',         category:'brands', sub:'travel', type:'free', rating:4.5, icon:'去' , img:'qunar.ico' },
    { name:'马蜂窝',        url:'https://www.mafengwo.cn',      desc:'旅游攻略社区和自由行服务平台，用户创作数亿条游记和攻略，是自由行灵感的重要来源。', category:'brands', sub:'travel', type:'free', rating:4.5, icon:'马' , img:'mafengwo.ico' },
    { name:'同程旅行',      url:'https://www.ly.com',           desc:'一站式在线旅游预订平台，以微信小程序渠道为核心，下沉市场渗透率较高。',           category:'brands', sub:'travel', type:'free', rating:4.5, icon:'同' , img:'ly.ico' },
    { name:'12306',         url:'https://www.12306.cn',         desc:'中国铁路官方唯一售票平台，支持火车票在线购买、改签和退票，春运购票核心渠道。',   category:'brands', sub:'travel', type:'free', rating:4.9, icon:'铁' , img:'12306.ico' },
    { name:'春秋航空',      url:'https://www.ch.com',           desc:'中国最大低成本航空公司，以低价机票和航旅结合模式著称，在上海和东南亚航线优势明显。', category:'brands', sub:'travel', type:'free', rating:4.4, icon:'春' , img:'ch.ico' },
    { name:'南方航空',      url:'https://www.csair.com',        desc:'中国运输飞机最多的航空公司，机队规模超900架，航线网络覆盖国内外主要城市。',       category:'brands', sub:'travel', type:'free', rating:4.6, icon:'南' , img:'csair.ico' },
    { name:'国际航空',      url:'https://www.airchina.com.cn',  desc:'中国唯一载旗航空公司，星空联盟成员，以北京为枢纽运营大量国际航线。',             category:'brands', sub:'travel', type:'free', rating:4.6, icon:'国' , img:'airchina.ico' },
    { name:'东方航空',      url:'https://www.ceair.com',        desc:'中国三大国有航空公司之一，天合联盟成员，以上海为核心枢纽，长三角地区市场份额领先。', category:'brands', sub:'travel', type:'free', rating:4.6, icon:'东' , img:'ceair.ico' },

    // --- 餐饮美食 ---
    { name:'美团',          url:'https://www.meituan.com',      desc:'中国领先的生活服务电子商务平台，提供外卖、到店、酒店、旅游等服务，年活跃商户超900万。', category:'brands', sub:'food', type:'free', rating:4.8, icon:'美' , img:'meituan.ico' },
    { name:'饿了么',        url:'https://www.ele.me',           desc:'阿里巴巴旗下本地生活服务平台，提供外卖、跑腿和本地生活服务，覆盖全国2000多个城市。', category:'brands', sub:'food', type:'free', rating:4.7, icon:'饿' , img:'eleme.ico' },
    { name:'海底捞',        url:'https://www.haidilao.com',     desc:'中国最知名的连锁火锅品牌，以极致服务著称，全球门店超1600家，品牌价值超千亿。',   category:'brands', sub:'food', type:'free', rating:4.8, icon:'海' , img:'haidilao.ico' },
    { name:'星巴克',        url:'https://www.starbucks.com.cn', desc:'全球最大连锁咖啡品牌，在中国拥有超7000家门店，是咖啡文化和"第三空间"理念的引领者。', category:'brands', sub:'food', type:'free', rating:4.7, icon:'星' , img:'starbucks.ico' },
    { name:'瑞幸咖啡',      url:'https://www.luckincoffee.com', desc:'中国领先的连锁咖啡品牌，门店数量超20000家，以性价比和数字化运营模式实现快速增长。', category:'brands', sub:'food', type:'free', rating:4.7, icon:'瑞' , img:'luckin.ico' },
    { name:'麦当劳',        url:'https://www.mcdonalds.com.cn', desc:'全球快餐连锁巨头，在中国拥有超6000家餐厅，汉堡和薯条是全球流行文化符号。',       category:'brands', sub:'food', type:'free', rating:4.6, icon:'M' , img:'mcdonalds.ico' },
    { name:'肯德基',        url:'https://www.kfc.com.cn',       desc:'百胜中国旗下最大快餐连锁品牌，在中国拥有超10000家门店，是中国门店最多的西式快餐品牌。', category:'brands', sub:'food', type:'free', rating:4.6, icon:'K' , img:'kfc.ico' },
    { name:'蜜雪冰城',      url:'https://www.mxbc.com',         desc:'中国门店最多的茶饮品牌，超36000家门店遍布全国，以极致性价比打造"国民奶茶"品牌。', category:'brands', sub:'food', type:'free', rating:4.5, icon:'蜜' , img:'mxbc.ico' },

    // --- 酒店住宿 ---
    { name:'华住酒店',      url:'https://www.hworld.com',       desc:'中国最大的多品牌酒店集团，旗下拥有汉庭、全季、桔子水晶等品牌，全球门店超10000家。', category:'brands', sub:'hotel', type:'free', rating:4.6, icon:'华' , img:'hworld.ico' },
    { name:'锦江酒店',      url:'https://www.jinjianghotels.com',desc:'中国历史最悠久的酒店集团之一，旗下品牌涵盖锦江之星、铂涛、维也纳等，全球超16000家酒店。', category:'brands', sub:'hotel', type:'free', rating:4.5, icon:'锦' , img:'jinjiang.ico' },
    { name:'首旅如家',      url:'https://www.bthhotels.com',    desc:'首旅如家酒店集团官网，旗下如家、和颐、云上四季等多个品牌，覆盖经济型到中高端各档酒店。', category:'brands', sub:'hotel', type:'free', rating:4.5, icon:'如' , img:'homeinn.ico' },
    { name:'亚朵酒店',      url:'https://www.atourhotel.com',   desc:'中高端人文酒店品牌，以"阅读+摄影"为主题，服务和住宿体验在用户中口碑极佳。',     category:'brands', sub:'hotel', type:'free', rating:4.6, icon:'亚' , img:'atour.ico' },
    { name:'洲际酒店',      url:'https://www.ihg.com.cn',       desc:'全球最大酒店集团之一，旗下拥有洲际、皇冠假日、假日、智选假日等19个酒店品牌。',   category:'brands', sub:'hotel', type:'free', rating:4.7, icon:'洲' , img:'ihg.ico' },
    { name:'万豪国际',      url:'https://www.marriott.com.cn',  desc:'全球领先的酒店管理集团，旗下30个品牌包括丽思卡尔顿、万豪、W酒店等奢华品牌。',     category:'brands', sub:'hotel', type:'free', rating:4.7, icon:'万' , img:'marriott.ico' },

    // --- 教育学习 ---
    { name:'新东方',        url:'https://www.neworiental.org',  desc:'中国最大的综合性教育集团之一，从出国考试培训起家，现已覆盖K12、考研、职业教育等全品类。', category:'brands', sub:'education', type:'free', rating:4.7, icon:'新' , img:'neworiental.ico' },
    { name:'好未来',        url:'https://www.100tal.com',       desc:'中国领先的教育科技企业，旗下学而思品牌深耕中小学课外辅导，近年向素质教育方向转型。', category:'brands', sub:'education', type:'free', rating:4.6, icon:'好' , img:'100tal.ico' },
    { name:'网易有道',      url:'https://www.youdao.com',       desc:'网易旗下智能学习公司，有道词典是国内最受欢迎的翻译工具之一，同时布局AI教育和硬件产品。', category:'brands', sub:'education', type:'free', rating:4.6, icon:'有' , img:'youdao.ico' },
    { name:'猿辅导',        url:'https://www.yuanfudao.com',    desc:'在线教育独角兽，K12在线辅导累计用户超4亿，旗下还拥有小猿搜题、斑马等子品牌。',     category:'brands', sub:'education', type:'free', rating:4.5, icon:'猿' , img:'yuanfudao.ico' },
    { name:'作业帮',        url:'https://www.zuoyebang.com',    desc:'K12在线教育平台，以拍照搜题功能起家，累计用户超8亿，提供直播课和AI学习产品。',     category:'brands', sub:'education', type:'free', rating:4.5, icon:'作' , img:'zuoyebang.ico' },
    { name:'学而思',        url:'https://www.xueersi.com',      desc:'好未来旗下中小学课外辅导品牌，以理科教学见长，培优体系完善，家长口碑良好。',       category:'brands', sub:'education', type:'free', rating:4.5, icon:'学' , img:'xueersi.ico' },
    { name:'沪江网校',      url:'https://www.hujiang.com',      desc:'国内知名的互联网学习平台，以语言学习起家，提供12国外语和各类职业技能课程。',       category:'brands', sub:'education', type:'free', rating:4.3, icon:'沪' , img:'hujiang.ico' },
    { name:'学堂在线',      url:'https://www.xuetangx.com',     desc:'清华大学发起的MOOC在线学习平台，汇集国内外顶尖高校课程，注册学习者超8600万。',     category:'brands', sub:'education', type:'free', rating:4.6, icon:'堂' , img:'xuetangx.ico' },
    { name:'中国大学MOOC',  url:'https://www.icourse163.org',   desc:'网易与高教社合作的国家精品课程平台，汇集国内500多所高校的优质课程，免费学习。',   category:'brands', sub:'education', type:'free', rating:4.7, icon:'MO' , img:'icourse163.ico' },

    // --- 影视娱乐 ---
    { name:'爱奇艺',        url:'https://www.iqiyi.com',        desc:'中国领先的在线视频平台，百度旗下，拥有海量电影、电视剧、综艺和动漫内容。',   category:'brands', sub:'media', type:'free', rating:4.7, icon:'爱' , img:'iqiyi.ico' },
    { name:'优酷',          url:'https://www.youku.com',        desc:'阿里巴巴旗下在线视频平台，国内最早的视频网站之一，内容涵盖影视剧和综艺。',   category:'brands', sub:'media', type:'free', rating:4.6, icon:'优' , img:'youku.ico' },
    { name:'腾讯视频',      url:'https://v.qq.com',             desc:'腾讯旗下综合视频平台，拥有NBA独家版权和大量自制剧，用户量位居行业前列。',    category:'brands', sub:'media', type:'free', rating:4.7, icon:'腾' , img:'vqq.ico' },
    { name:'芒果TV',        url:'https://www.mgtv.com',         desc:'湖南广电旗下视频平台，以综艺节目和自制剧见长，年轻用户占比高。',             category:'brands', sub:'media', type:'free', rating:4.5, icon:'芒' , img:'mgtv.ico' },
    { name:'网易云音乐',    url:'https://music.163.com',        desc:'以歌单和社区氛围著称的音乐平台，用户评论文化独特，独立音乐人扶持力度大。',   category:'brands', sub:'media', type:'free', rating:4.8, icon:'云' , img:'music163.ico' },
    { name:'QQ音乐',       url:'https://y.qq.com',             desc:'腾讯旗下数字音乐平台，版权曲库最丰富，与微信、QQ社交生态深度整合。',       category:'brands', sub:'media', type:'free', rating:4.7, icon:'QQ' , img:'yqq.ico' },
    { name:'酷狗音乐',      url:'https://www.kugou.com',        desc:'中国用户量最大的音乐播放器之一，拥有海量曲库和K歌功能。',                 category:'brands', sub:'media', type:'free', rating:4.6, icon:'酷' , img:'kugou.ico' },
    { name:'抖音',          url:'https://www.douyin.com',       desc:'中国最大的短视频和直播平台，日活超6亿，兴趣电商和本地生活服务快速发展。',  category:'brands', sub:'media', type:'free', rating:4.9, icon:'抖' , img:'douyin.ico' },
    { name:'喜马拉雅',      url:'https://www.ximalaya.com',     desc:'中国最大的音频分享平台，拥有海量有声书、播客和知识付费内容，用户超6亿。',   category:'brands', sub:'media', type:'free', rating:4.6, icon:'喜' , img:'ximalaya.ico' },

    // --- 新闻资讯 ---
    { name:'新华网',        url:'https://www.xinhuanet.com',    desc:'新华社主办的国家通讯社网站，是中国最具权威性的综合性新闻网站，覆盖国内外要闻。', category:'brands', sub:'news', type:'free', rating:4.7, icon:'新' , img:'xinhuanet.ico' },
    { name:'人民网',        url:'https://www.people.com.cn',    desc:'人民日报社主办的主流新闻网站，是人民日报的网络版，在时政新闻领域具有最高权威性。', category:'brands', sub:'news', type:'free', rating:4.7, icon:'人' , img:'people.ico' },
    { name:'央视网',        url:'https://www.cctv.com',         desc:'中央广播电视总台官方网站，提供CCTV各频道节目直播和点播，新闻视频内容丰富。',     category:'brands', sub:'news', type:'free', rating:4.8, icon:'央' , img:'cctv.ico' },
    { name:'澎湃新闻',      url:'https://www.thepaper.cn',      desc:'以原创新闻和深度调查为主的全媒体平台，以时政与思想为特色，是中国新型主流媒体代表。', category:'brands', sub:'news', type:'free', rating:4.6, icon:'澎' , img:'thepaper.ico' },
    { name:'界面新闻',      url:'https://www.jiemian.com',      desc:'以商业新闻为核心的新媒体集团，服务于新兴中产阶级和商业人群，报道质量高。',       category:'brands', sub:'news', type:'free', rating:4.5, icon:'界' , img:'jiemian.ico' },
    { name:'虎嗅网',        url:'https://www.huxiu.com',        desc:'聚焦科技和商业的原创资讯平台，以深度观点和行业洞察著称，影响中国商业决策者。',   category:'brands', sub:'news', type:'free', rating:4.5, icon:'虎' , img:'huxiu.ico' },
    { name:'36氪',          url:'https://36kr.com',             desc:'中国领先的科技新媒体，覆盖AI、新能源、出海等前沿赛道，是创业者和投资人的必读媒体。', category:'brands', sub:'news', type:'free', rating:4.6, icon:'36' , img:'36kr.ico' },
    { name:'钛媒体',        url:'https://www.tmtpost.com',      desc:'科技财经领域深度媒体平台，以TMT行业深度报道和分析师文章著称，内容专业度高。',     category:'brands', sub:'news', type:'free', rating:4.4, icon:'钛' , img:'tmtpost.ico' },
    { name:'今日头条',      url:'https://www.toutiao.com',      desc:'字节跳动旗下个性化资讯推荐平台，基于AI算法推荐新闻、视频和内容，日活超3亿。',   category:'brands', sub:'news', type:'free', rating:4.7, icon:'头' , img:'toutiao.ico' },

    // --- 体育运动 ---
    { name:'Nike耐克',      url:'https://www.nike.com.cn',      desc:'全球最大运动鞋服品牌，以"Just Do It"精神闻名，Air Jordan系列是球鞋文化标杆。', category:'brands', sub:'sports', type:'free', rating:4.8, icon:'N' , img:'nike.ico' },
    { name:'Adidas阿迪达斯', url:'https://www.adidas.com.cn',   desc:'全球知名运动品牌，与Nike并列为运动品牌双雄，Boost科技和三叶草系列深受欢迎。',     category:'brands', sub:'sports', type:'free', rating:4.7, icon:'A' , img:'adidas.ico' },
    { name:'安踏',          url:'https://www.anta.com',         desc:'中国领先的运动品牌集团，收购FILA中国后成功转型，市值一度超越阿迪达斯。',       category:'brands', sub:'sports', type:'free', rating:4.6, icon:'安' , img:'anta.ico' },
    { name:'李宁',          url:'https://www.li-ning.com',      desc:'中国体操王子李宁创立的运动品牌，"中国李宁"国潮系列引领运动时尚风潮。',         category:'brands', sub:'sports', type:'free', rating:4.6, icon:'宁' , img:'lining.ico' },
    { name:'Keep',          url:'https://www.gotokeep.com',     desc:'中国最大的运动健身平台，提供健身课程、运动记录和社交功能，用户超4亿。',         category:'brands', sub:'sports', type:'free', rating:4.7, icon:'Ke' , img:'keep.ico' },
    { name:'虎扑',          url:'https://www.hupu.com',         desc:'中国最大的体育社区，以NBA和足球讨论为核心，步数排行是用户最爱的互动功能。',     category:'brands', sub:'sports', type:'free', rating:4.6, icon:'虎' , img:'hupu.ico' },
    { name:'懂球帝',        url:'https://www.dongqiudi.com',    desc:'中国最大的足球资讯和社区平台，覆盖全球足球赛事数据和新闻，球迷必备App。',       category:'brands', sub:'sports', type:'free', rating:4.5, icon:'懂' , img:'dongqiudi.ico' },

    // --- 汽车出行 ---
    { name:'比亚迪',        url:'https://www.byd.com',          desc:'全球新能源汽车领导者，2024年销量超427万辆，刀片电池和DM-i混动技术是核心竞争力。', category:'brands', sub:'auto', type:'free', rating:4.8, icon:'比' , img:'byd.ico' },
    { name:'蔚来汽车',      url:'https://www.nio.com',          desc:'中国高端智能电动汽车品牌，以换电技术和用户社区著称，定位豪华智能电动车市场。',   category:'brands', sub:'auto', type:'free', rating:4.6, icon:'蔚' , img:'nio.ico' },
    { name:'小鹏汽车',      url:'https://www.xpeng.com',        desc:'中国智能电动汽车设计及制造公司，以自动驾驶技术为核心竞争力，NGP智驾系统行业领先。', category:'brands', sub:'auto', type:'free', rating:4.6, icon:'鹏' , img:'xpeng.ico' },
    { name:'理想汽车',      url:'https://www.lixiang.com',      desc:'中国领先的新能源汽车制造商，以增程式电动SUV起家，月交付量稳居新势力前列。',     category:'brands', sub:'auto', type:'free', rating:4.7, icon:'理' , img:'lixiang.ico' },
    { name:'吉利汽车',      url:'https://www.geely.com',        desc:'中国自主品牌汽车领军企业，旗下拥有极氪、领克、沃尔沃等品牌，年销超200万辆。',   category:'brands', sub:'auto', type:'free', rating:4.6, icon:'吉' , img:'ly.ico' },
    { name:'长城汽车',      url:'https://www.gwm.com.cn',       desc:'中国最大的SUV和皮卡制造企业之一，旗下哈弗、坦克、欧拉等品牌各具特色。',         category:'brands', sub:'auto', type:'free', rating:4.5, icon:'长' , img:'gwm.ico' },
    { name:'滴滴出行',      url:'https://www.didiglobal.com',   desc:'中国最大的网约车出行平台，提供快车、专车、顺风车等多元化出行服务。',           category:'brands', sub:'auto', type:'free', rating:4.7, icon:'滴' , img:'didi.ico' },
    { name:'高德地图',      url:'https://www.amap.com',         desc:'中国领先的数字地图和导航服务，月活跃用户超7亿，实时路况和语音导航体验优秀。',   category:'brands', sub:'auto', type:'free', rating:4.8, icon:'高' , img:'amap.ico' },
    { name:'百度地图',      url:'https://map.baidu.com',        desc:'百度旗下地图导航服务，集成Apollo自动驾驶技术和AR实景导航等创新功能。',         category:'brands', sub:'auto', type:'free', rating:4.6, icon:'百' , img:'baidu.ico' },
    { name:'嘀嗒出行',      url:'https://www.didachuxing.com',  desc:'顺风车和出租车网约车平台，以合规顺风车模式为核心，累计用户超3亿。',             category:'brands', sub:'auto', type:'free', rating:4.3, icon:'嘀' , img:'didachuxing.ico' },

    // --- 生活服务 ---
    { name:'58同城',        url:'https://www.58.com',           desc:'中国最大的分类信息服务平台，提供招聘、房产、二手、本地生活等服务。',         category:'brands', sub:'life', type:'free', rating:4.5, icon:'58' , img:'58.ico' },
    { name:'链家',          url:'https://www.lianjia.com',      desc:'中国领先的房产经纪品牌，以真房源和规范服务著称，覆盖全国主要城市。',       category:'brands', sub:'life', type:'free', rating:4.6, icon:'链' , img:'lianjia.ico' },
    { name:'贝壳找房',      url:'https://www.ke.com',           desc:'科技驱动的居住服务平台，提供二手房、新房、租房和装修等一站式服务。',       category:'brands', sub:'life', type:'free', rating:4.6, icon:'贝' , img:'ke.ico' },
    { name:'顺丰速运',      url:'https://www.sf-express.com',   desc:'中国快递行业服务品质标杆，以速度快、服务好著称，拥有自有航空机队。',       category:'brands', sub:'life', type:'free', rating:4.8, icon:'顺' , img:'sfexpress.ico' },
    { name:'中国邮政',      url:'https://www.chinapost.com.cn', desc:'中国历史最悠久的邮政快递服务，网点覆盖全国城乡，国际邮政业务遍及全球。',   category:'brands', sub:'life', type:'free', rating:4.5, icon:'邮' , img:'chinapost.ico' },
    { name:'京东物流',      url:'https://www.jdl.com',          desc:'京东旗下一体化供应链物流服务商，以仓配一体化模式实现极速配送。',           category:'brands', sub:'life', type:'free', rating:4.6, icon:'京' , img:'jdl.ico' },
    { name:'菜鸟',          url:'https://www.cainiao.com',      desc:'阿里巴巴旗下智慧物流平台，整合快递资源，提供物流查询和驿站服务。',         category:'brands', sub:'life', type:'free', rating:4.5, icon:'菜' , img:'cainiao.ico' },
    { name:'丰巢',          url:'https://fcbox.com',            desc:'中国最大的智能快递柜运营平台，覆盖全国社区和写字楼，24小时自助取件。',     category:'brands', sub:'life', type:'free', rating:4.3, icon:'丰' , img:'fengnest.ico' },
    { name:'大众点评',      url:'https://www.dianping.com',     desc:'中国领先的本地生活信息及交易平台，提供餐厅、休闲娱乐等商户点评和优惠。',   category:'brands', sub:'life', type:'free', rating:4.7, icon:'大' , img:'dianping.ico' },

    // --- 能源制造 ---
    { name:'国家电网',      url:'http://www.sgcc.com.cn',       desc:'全球最大的公用事业企业，运营着世界上电压等级最高、规模最大的电网，服务超11亿人口。', category:'brands', sub:'energy', type:'free', rating:4.8, icon:'国' , img:'sgcc.ico' },
    { name:'中国石油',      url:'https://www.cnpc.com.cn',      desc:'中国最大的石油和天然气生产商，在《财富》世界500强中长期位居前列，业务遍布全球。', category:'brands', sub:'energy', type:'free', rating:4.7, icon:'石' , img:'cnpc.ico' },
    { name:'中国石化',      url:'http://www.sinopec.com',       desc:'中国最大的能源化工企业之一，也是亚洲最大的炼油企业，加油站网络遍布全国。',         category:'brands', sub:'energy', type:'free', rating:4.7, icon:'化' , img:'sinopec.ico' },
    { name:'中国海油',      url:'https://www.cnooc.com.cn',     desc:'中国最大的海上原油及天然气生产商，在中国近海拥有最大油气勘探开发实力。',       category:'brands', sub:'energy', type:'free', rating:4.6, icon:'海' , img:'cnooc.ico' },
    { name:'国家能源集团',  url:'https://www.chnenergy.com.cn', desc:'由国电集团和神华集团合并重组的中央企业，全球最大的煤炭生产公司之一。',           category:'brands', sub:'energy', type:'free', rating:4.6, icon:'能' , img:'chnenergy.ico' },
    { name:'中国中车',      url:'https://www.crrcgc.cc',        desc:'全球规模最大的轨道交通装备制造商，"复兴号"高铁列车的核心供应商，产品出口全球。', category:'brands', sub:'energy', type:'free', rating:4.6, icon:'车' , img:'crrcgc.ico' },
    { name:'中国建筑',      url:'https://www.cscec.com',        desc:'全球最大的投资建设集团，承建了大量国内外地标建筑，ENR全球承包商250强榜首。',     category:'brands', sub:'energy', type:'free', rating:4.7, icon:'建' , img:'cscec.ico' },
    { name:'三一重工',      url:'https://www.sanygroup.com',    desc:'中国工程机械行业龙头企业，混凝土机械全球第一，挖掘机国内市占率领先。',         category:'brands', sub:'energy', type:'free', rating:4.5, icon:'三' , img:'sanygroup.ico' },
    { name:'中国船舶',      url:'https://www.cssc.net.cn',      desc:'全球最大的造船集团，造船完工量、新接订单量和手持订单量均位居世界第一。',         category:'brands', sub:'energy', type:'free', rating:4.5, icon:'船' , img:'cssc.ico' },
    { name:'中国航天科技',  url:'https://www.spacechina.com',   desc:'中国航天科技主导企业，载人航天工程、北斗导航和深空探测任务的主力承担者。',       category:'brands', sub:'energy', type:'free', rating:4.7, icon:'航' , img:'spacechina.ico' },
];

// ============================================
// 自动为政府网站补全 govLevel 字段
// ============================================
resources.forEach(r => {
    if (r.category !== 'gov') return;
    if (r.govLevel) return; // 已手动指定则跳过
    if (r.region === 'national') {
        r.govLevel = 'national';
    } else if (r.city) {
        // 有 city 字段的说明是市级资源
        r.govLevel = r.district ? 'district' : 'city';
    } else {
        // 只有 region 的默认为省级
        r.govLevel = 'province';
    }
});

// ============================================
// 友情链接
// ============================================
const FRIEND_LINKS = [
    { name: '优设网', url: 'https://www.uisdc.com' },
    { name: '少数派', url: 'https://sspai.com' },
    { name: 'IT之家', url: 'https://www.ithome.com' },
    { name: '36氪', url: 'https://36kr.com' },
    { name: '人人都是产品经理', url: 'https://www.woshipm.com' },
    { name: 'SegmentFault', url: 'https://segmentfault.com' },
    { name: '知乎', url: 'https://www.zhihu.com' },
    { name: 'B站', url: 'https://www.bilibili.com' },
];

// ============================================
// 分类图标颜色映射
// ============================================
const CAT_COLORS = {
    entertainment: 'linear-gradient(135deg,#E11D48,#F43F5E)',
    ppt:      'linear-gradient(135deg,#4F6EF7,#818CF8)',
    word:     'linear-gradient(135deg,#7C5CFC,#A78BFA)',
    excel:    'linear-gradient(135deg,#10B981,#34D399)',
    mindmap:  'linear-gradient(135deg,#F59E0B,#FBBF24)',
    academic: 'linear-gradient(135deg,#3B82F6,#60A5FA)',
    ai:       'linear-gradient(135deg,#8B5CF6,#C084FC)',
    resume:   'linear-gradient(135deg,#EC4899,#F472B6)',
    exam:     'linear-gradient(135deg,#06B6D4,#22D3EE)',
    coding:   'linear-gradient(135deg,#334155,#64748B)',
    startup:  'linear-gradient(135deg,#EF4444,#F87171)',
    gov:      'linear-gradient(135deg,#DC2626,#B91C1C)',
    brands:   'linear-gradient(135deg,#F97316,#FB923C)',
};

const TYPE_LABELS = {
    free: { text: '免费', cls: 'tag-free' },
    vip:  { text: '会员', cls: 'tag-vip' },
};

// ============================================
// 截图文件名映射
// ============================================
const SCREENSHOT_MAP = {
    '优品PPT': 'ypppt.png',
    '第一PPT': '1ppt.png',
    '51PPT模板': '51ppt.png',
    'PPT宝藏': 'pptbz.png',
    '熊猫办公': 'tukuppt.png',
    'Canva可画': 'canva.png',
    '稿定设计': 'gaoding.png',
    'WPS稻壳儿': 'docer.png',
    'OfficePlus': 'officeplus.png',
    'Slidesgo': 'slidesgo.png',
    'Gamma': 'gamma.png',
    '知网模板': 'cnki.png',
    'Word联盟': 'wordlm.png',
    '全民简历': 'qmjianli.png',
    '石墨文档': 'shimo.png',
    '腾讯文档': 'docsqq.png',
    '语雀': 'yuque.png',
    'Notion': 'notion.png',
    'ExcelHome': 'excelhome.png',
    'WPS表格': 'wps.png',
    '简道云': 'jiandaoyun.png',
    'Airtable': 'airtable.png',
    '方方格子': 'ffcell.png',
    'ExcelJet': 'exceljet.png',
    '腾讯问卷': 'wjqq.png',
    'XMind': 'xmind.png',
    'ProcessOn': 'processon.png',
    '幕布': 'mubu.png',
    '亿图图示': 'edrawmax.png',
    'GitMind': 'gitmind.png',
    '知犀': 'zhixi.png',
    'BoardMix': 'boardmix.png',
    '中国知网': 'cnki.png',
    'Google Scholar': 'scholar.png',
    '万方数据': 'wanfang.png',
    '维普期刊': 'cqvip.png',
    'PaperPass': 'paperpass.png',
    'Zotero': 'zotero.png',
    'Connected Papers': 'connectedpapers.png',
    'Sci-Hub': 'scihub.png',
    'DeepL': 'deepl.png',
    'ChatGPT': 'chatgpt.png',
    'DeepSeek': 'deepseek.png',
    '文心一言': 'yiyan.png',
    'Kimi': 'kimi.png',
    '通义千问': 'tongyi.png',
    '智谱清言': 'chatglm.png',
    '豆包': 'doubao.png',
    'Midjourney': 'midjourney.png',
    '讯飞星火': 'xinghuo.png',
    '超级简历': 'wondercv.png',
    '木及简历': 'mujicv.png',
    '牛客网': 'nowcoder.png',
    'Boss直聘': 'zhipin.png',
    '拉勾网': 'lagou.png',
    'LinkedIn': 'linkedin.png',
    '前程无忧': '51job.png',
    '粉笔': 'fenbi.png',
    '华图在线': 'huatu.png',
    '中公教育': 'offcn.png',
    'QZZN论坛': 'qzzn.png',
    '永岸公考': 'gwyclass.png',
    '公务员考试网': 'chinagwy.png',
    '一起考教师': '17kjs.png',
    'GitHub': 'github.png',
    'LeetCode': 'leetcode.png',
    '菜鸟教程': 'runoob.png',
    'MDN Web Docs': 'mdn.png',
    'Stack Overflow': 'stackoverflow.png',
    'W3Schools': 'w3school.png',
    'CodePen': 'codepen.png',
    '可灵AI': 'kling.png',
    '即梦AI': 'jimeng.png',
    'Sora': 'sora.png',
    '海螺AI': 'hailuoai.png',
    'PixVerse': 'pixverse.png',
    '淘宝开店': 'taobao_shop.png',
    '拼多多商家': 'pinduoduo_shop.png',
    '闲鱼': 'goofish.png',
    '小红书开店': 'xiaohongshu_shop.png',
    '抖音电商': 'jinritemai.png',
    '1688': 'alibaba1688.png',
    'B站创作中心': 'bilibili_create.png',
    '抖音创作': 'douyin_create.png',
    '视频号': 'channels_weixin.png',
    '头条号': 'toutiao_mp.png',
    '百家号': 'baijiahao.png',
    '剪映': 'capcut.png',
    'Fiverr': 'fiverr.png',
    '猪八戒网': 'zbj.png',
    '站酷海洛': 'hellorf.png',
    '特赞': 'tezign.png',
    '得到': 'dedao.png',
    '千聊': 'qlchat.png',
    '小鹅通': 'xiaoe.png',
    '知识星球': 'zsxq.png',
    '阿里众包': 'alibaba_zhongbao.png',
    '百度众测': 'baidu_test.png',
    '腾讯搜活帮': 'sohuobao.png',
    '企查查': 'qcc.png',
    '天眼查': 'tianyancha.png',
    '创业邦': 'cyzone.png',
    '36氪': '36kr.png',
};

// ============================================
// DOM 引用
// ============================================
const grid = document.getElementById('resourceGrid');
const categoryNav = document.getElementById('categoryNav');
const categoryNavWrap = document.getElementById('categoryNavWrap');
const searchInput = document.getElementById('searchInput');
const searchClearBtn = document.getElementById('searchClearBtn');
const totalCountEl = document.getElementById('totalCount');
const categoryCountEl = document.getElementById('categoryCount');
const policyListEl = document.getElementById('policyList');
const quickToolsGrid = document.getElementById('quickToolsGrid');
const friendLinksEl = document.getElementById('friendLinks');

let currentCategory = 'all';
let currentSearch = '';
let currentGovRegion = 'all'; // 政府板块当前地区（省级）
let currentGovCity = 'all';   // 政府板块当前城市（市级）
let currentGovDistrict = 'all'; // 政府板块当前区县（区级）
let currentGovLevel = 'all';  // 政府板块当前层级筛选：all/province/city/district/town
let collapsedSubs = new Set(); // 记录折叠的子分类
let lazyPage = 0;             // 懒加载当前页码
const LAZY_PAGE_SIZE = 50;    // 每批加载条数
let lazyObserver = null;       // Intersection Observer 实例
let lazyFiltered = [];         // 当前筛选结果（供懒加载使用）

// ============================================
// 点击热度数据（localStorage 持久化）
// ============================================
let clickStats = {};
try { clickStats = JSON.parse(localStorage.getItem('resourceClicks') || '{}'); } catch(e) {}

function recordClick(item) {
    clickStats[item.name] = (clickStats[item.name] || 0) + 1;
    localStorage.setItem('resourceClicks', JSON.stringify(clickStats));
}

// ============================================
// 渲染板块 Tab 导航
// ============================================
function renderCategoryNav() {
    const sorted = getSortedCategories();
    // 只渲染 tab 到 inner 容器，使用 emoji 图标
    categoryNav.innerHTML = sorted.map(cat => {
        return `<button class="cat-tab${cat.id === currentCategory ? ' active' : ''}" data-cat="${cat.id}">
            <span class="tab-icon-emoji">${cat.icon}</span>${cat.name}
        </button>`;
    }).join('');

    // 初始化展开/收起状态（操作外层 wrap）
    const isExpanded = localStorage.getItem('toolbox_catnav_expanded') === 'true';
    if (categoryNavWrap) {
        categoryNavWrap.classList.toggle('collapsed', !isExpanded);
        categoryNavWrap.classList.toggle('expanded', isExpanded);
    }

    // 展开/收起按钮事件（按钮在 HTML 中已写好，绑定一次即可）
    const expandBtn = document.getElementById('catExpandBtn');
    if (expandBtn && !expandBtn._bindDone) {
        expandBtn._bindDone = true;
        expandBtn.addEventListener('click', () => {
            const nowExpanded = categoryNavWrap && categoryNavWrap.classList.contains('expanded');
            if (nowExpanded) {
                categoryNavWrap.classList.remove('expanded');
                categoryNavWrap.classList.add('collapsed');
                expandBtn.classList.remove('is-expanded');
                expandBtn.innerHTML = '展开 <span class="expand-icon">▼</span>';
                localStorage.setItem('toolbox_catnav_expanded', 'false');
            } else {
                categoryNavWrap.classList.remove('collapsed');
                categoryNavWrap.classList.add('expanded');
                expandBtn.classList.add('is-expanded');
                expandBtn.innerHTML = '收起 <span class="expand-icon">▼</span>';
                localStorage.setItem('toolbox_catnav_expanded', 'true');
            }
        });
    }

    categoryNav.querySelectorAll('.cat-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentCategory = tab.dataset.cat;
            currentGovRegion = 'all';
            currentGovCity = 'all';
            currentGovDistrict = 'all';
            currentGovLevel = 'all';
            categoryNav.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCards();
        });
    });
}

// ============================================
// 渲染最近访问（快入口区域）
// ============================================
function renderQuickTools() {
    if (recentViewed.length === 0) {
        // 无记录时显示空态引导
        quickToolsGrid.innerHTML = `
            <div class="quick-tools-empty">
                <div class="quick-tools-empty-icon">🔍</div>
                <p>还没有浏览记录</p>
                <p class="quick-tools-empty-hint">点击下方资源卡片，访问记录会自动出现在这里</p>
            </div>`;
        return;
    }
    // 取最近 8 个，生成渐变色
    const gradients = [
        'linear-gradient(135deg,#4F6EF7,#818CF8)', 'linear-gradient(135deg,#10B981,#34D399)',
        'linear-gradient(135deg,#F59E0B,#FBBF24)', 'linear-gradient(135deg,#EF4444,#F87171)',
        'linear-gradient(135deg,#8B5CF6,#A78BFA)', 'linear-gradient(135deg,#EC4899,#F472B6)',
        'linear-gradient(135deg,#06B6D4,#22D3EE)', 'linear-gradient(135deg,#F97316,#FB923C)',
    ];
    quickToolsGrid.innerHTML = recentViewed.slice(0, 8).map((item, i) => {
        let hostname = '';
        try { hostname = new URL(item.url).hostname; } catch(e) {}
        let iconHtml;
        if (item.img) {
            const faviconSrc = hostname ? `https://www.google.com/s2/favicons?domain=${hostname}&sz=64` : '';
            iconHtml = `<img src="images/${item.img}" alt="${item.name}" class="quick-tool-img" onerror="if('${faviconSrc}'){this.src='${faviconSrc}';this.onerror=function(){this.style.display='none';this.parentElement.textContent='${item.icon||'🔗'}';};}else{this.style.display='none';this.parentElement.textContent='${item.icon||'🔗'}';}">`;
        } else {
            const faviconSrc = hostname ? `https://www.google.com/s2/favicons?domain=${hostname}&sz=64` : '';
            iconHtml = faviconSrc
                ? `<img src="${faviconSrc}" alt="${item.name}" class="quick-tool-img" onerror="this.style.display='none';this.parentElement.textContent='${item.icon||'🔗'}';">`
                : (item.icon || '🔗');
        }
        const bg = gradients[i % gradients.length];
        return `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="quick-tool-item">
            <div class="quick-tool-icon" style="background:${bg}">${iconHtml}</div>
            <span class="quick-tool-name">${item.name}</span>
        </a>`;
    }).join('');
}

// ============================================
// 渲染友情链接
// ============================================
function renderFriendLinks() {
    friendLinksEl.innerHTML = FRIEND_LINKS.map(link =>
        `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="friend-link">${link.name}</a>`
    ).join('');
}

// ============================================
// 渲染资源卡片
// ============================================
function getFilteredResources() {
    let list = resources;
    if (currentCategory !== 'all') {
        list = list.filter(r => r.category === currentCategory);
    }
    if (currentSearch) {
        const q = currentSearch.toLowerCase();
        list = list.filter(r =>
            r.name.toLowerCase().includes(q) ||
            r.desc.toLowerCase().includes(q) ||
            r.category.toLowerCase().includes(q)
        );
    }
    // 政府板块多级筛选
    if (currentCategory === 'gov') {
        // 省级筛选
        if (currentGovRegion !== 'all') {
            list = list.filter(r => r.region === currentGovRegion);
        }
        // 层级筛选
        if (currentGovLevel !== 'all') {
            list = list.filter(r => r.govLevel === currentGovLevel);
        }
        // 市级筛选
        if (currentGovCity !== 'all') {
            list = list.filter(r => r.city === currentGovCity);
        }
        // 区级筛选
        if (currentGovDistrict !== 'all') {
            list = list.filter(r => r.district === currentGovDistrict);
        }
    }
    return list;
}

function renderCards() {
    // 断开旧的懒加载 Observer
    if (lazyObserver) { lazyObserver.disconnect(); lazyObserver = null; }
    lazyPage = 0;

    const filtered = getFilteredResources();
    lazyFiltered = filtered;
    grid.innerHTML = '';

    if (filtered.length === 0) {
        // 从全量资源取评分最高的前12名，随机抽3个推荐
        const topPool = [...resources].sort((a, b) => b.rating - a.rating).slice(0, 12);
        const recommended = topPool.sort(() => Math.random() - 0.5).slice(0, 3);

        const wrapper = document.createElement('div');
        wrapper.className = 'no-results';
        wrapper.style.cssText = 'grid-column:1/-1;text-align:left;padding:24px 4px 8px;';

        const hint = document.createElement('div');
        hint.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:16px;';
        hint.innerHTML = `<span style="font-size:1.4rem;opacity:.5;">🔍</span>
            <span style="color:var(--text-light);font-size:0.88rem;">没有找到相关资源，试试这些热门资源吧：</span>`;
        wrapper.appendChild(hint);

        const cardRow = document.createElement('div');
        cardRow.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px;';
        recommended.forEach((item, i) => {
            const c = createCard(item, i);
            cardRow.appendChild(c);
        });
        wrapper.appendChild(cardRow);

        grid.appendChild(wrapper);
        return;
    }

    if (currentCategory === 'all' && !currentSearch) {
        // 全部视图：先展示热门推荐，再按板块热度分组
        // 热门推荐：取评分最高的6个
        const hotPicks = [...resources]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6);

        const hotSection = document.createElement('div');
        hotSection.className = 'category-section-title';
        hotSection.innerHTML = '<span class="sec-icon">🔥</span>热门推荐<span class="sec-line"></span>';
        grid.appendChild(hotSection);

        const hotGrid = document.createElement('div');
        hotGrid.className = 'hot-grid';
        hotPicks.forEach((item, i) => {
            hotGrid.appendChild(createCard(item, i));
        });
        grid.appendChild(hotGrid);

        // 按板块热度分组
        const sorted = getSortedCategories();
        sorted.forEach(cat => {
            if (cat.id === 'all') return;
            const catResources = filtered.filter(r => r.category === cat.id);
            if (catResources.length === 0) return;

            // 板块标题
            const sectionTitle = document.createElement('div');
            sectionTitle.className = 'category-section-title';
            sectionTitle.innerHTML = `<span class="sec-icon">${cat.icon}</span>${cat.name}（${catResources.length}）<span class="sec-line"></span>`;
            grid.appendChild(sectionTitle);

            // 创业板块：按子分类分组
            if (cat.id === 'startup') {
                renderStartupCards(catResources);
            } else if (cat.id === 'brands') {
                // 品牌官网在全部视图只显示前6个，引导点击查看全部
                catResources.slice(0, 6).forEach((item, i) => {
                    grid.appendChild(createCard(item, i));
                });
                if (catResources.length > 6) {
                    const moreHint = document.createElement('div');
                    moreHint.style.cssText = 'grid-column:1/-1;text-align:center;padding:8px 0 4px;';
                    moreHint.innerHTML = `<span style="color:var(--text-light);font-size:0.82rem;cursor:pointer;" onclick="document.querySelector('[data-cat=brands]').click()">🌐 共 ${catResources.length} 个品牌官网，点击「品牌官网」查看全部 →</span>`;
                    grid.appendChild(moreHint);
                }
            } else if (cat.id === 'gov') {
                // 政府板块在全部视图只显示前6个，引导点击查看全部
                catResources.slice(0, 6).forEach((item, i) => {
                    grid.appendChild(createCard(item, i));
                });
                if (catResources.length > 6) {
                    const moreHint = document.createElement('div');
                    moreHint.style.cssText = 'grid-column:1/-1;text-align:center;padding:8px 0 4px;';
                    moreHint.innerHTML = `<span style="color:var(--text-light);font-size:0.82rem;cursor:pointer;" onclick="document.querySelector('[data-cat=gov]').click()">📋 共 ${catResources.length} 个政府网站，点击「政府官网」查看全部 →</span>`;
                    grid.appendChild(moreHint);
                }
            } else {
                catResources.forEach((item, i) => {
                    grid.appendChild(createCard(item, i));
                });
            }
        });
    } else if (currentCategory === 'startup') {
        // 创业板块单独视图：按子分类分组
        renderStartupCards(filtered);
    } else if (currentCategory === 'brands') {
        // 品牌官网：按行业子分类分组
        renderBrandCards(filtered);
    } else if (currentCategory === 'gov') {
        // 政府官网：先渲染地区选择器，再按地区分组
        renderGovRegionSelector(filtered);
    } else {
        filtered.forEach((item, i) => {
            grid.appendChild(createCard(item, i));
        });
    }
}

function renderStartupCards(startupResources) {
    let globalIdx = 0;
    STARTUP_SUBS.forEach(sub => {
        const subResources = startupResources.filter(r => r.sub === sub.id);
        if (subResources.length === 0) return;

        const group = document.createElement('div');
        group.className = 'subcategory-group';

        const isCollapsed = collapsedSubs.has(sub.id);

        group.innerHTML = `
            <div class="subcategory-header${isCollapsed ? ' collapsed' : ''}" data-sub="${sub.id}">
                <span class="sub-icon">${sub.icon}</span>
                <span class="sub-name">${sub.name}</span>
                <span class="sub-count">（${subResources.length}）</span>
                <span class="sub-arrow">▼</span>
            </div>
            <div class="subcategory-body${isCollapsed ? ' hidden' : ''}"></div>
        `;

        const body = group.querySelector('.subcategory-body');
        subResources.forEach(item => {
            body.appendChild(createCard(item, globalIdx++));
        });

        // 折叠/展开事件
        group.querySelector('.subcategory-header').addEventListener('click', () => {
            const header = group.querySelector('.subcategory-header');
            const bodyEl = group.querySelector('.subcategory-body');
            const subId = header.dataset.sub;

            if (collapsedSubs.has(subId)) {
                collapsedSubs.delete(subId);
                header.classList.remove('collapsed');
                bodyEl.classList.remove('hidden');
            } else {
                collapsedSubs.add(subId);
                header.classList.add('collapsed');
                bodyEl.classList.add('hidden');
            }
            localStorage.setItem('collapsedSubs', JSON.stringify([...collapsedSubs]));
        });

        grid.appendChild(group);
    });
}

// ============================================
// 渲染品牌官网（按行业子分类分组）
// ============================================
function renderBrandCards(brandResources) {
    let globalIdx = 0;
    BRAND_SUBS.forEach(sub => {
        const subResources = brandResources.filter(r => r.sub === sub.id);
        if (subResources.length === 0) return;

        const group = document.createElement('div');
        group.className = 'subcategory-group';

        const isCollapsed = collapsedSubs.has('brand_' + sub.id);

        group.innerHTML = `
            <div class="subcategory-header${isCollapsed ? ' collapsed' : ''}" data-sub="brand_${sub.id}">
                <span class="sub-icon">${sub.icon}</span>
                <span class="sub-name">${sub.name}</span>
                <span class="sub-count">（${subResources.length}）</span>
                <span class="sub-arrow">▼</span>
            </div>
            <div class="subcategory-body${isCollapsed ? ' hidden' : ''}"></div>
        `;

        const body = group.querySelector('.subcategory-body');
        subResources.forEach(item => {
            body.appendChild(createCard(item, globalIdx++));
        });

        // 折叠/展开事件
        group.querySelector('.subcategory-header').addEventListener('click', () => {
            const header = group.querySelector('.subcategory-header');
            const bodyEl = group.querySelector('.subcategory-body');
            const subId = header.dataset.sub;

            if (collapsedSubs.has(subId)) {
                collapsedSubs.delete(subId);
                header.classList.remove('collapsed');
                bodyEl.classList.remove('hidden');
            } else {
                collapsedSubs.add(subId);
                header.classList.add('collapsed');
                bodyEl.classList.add('hidden');
            }
            localStorage.setItem('collapsedSubs', JSON.stringify([...collapsedSubs]));
        });

        grid.appendChild(group);
    });
}

// ============================================
// 渲染政府官网多级选择器
// ============================================
function renderGovRegionSelector(govResources) {
    const allGovResources = resources.filter(r => r.category === 'gov');
    const selectorWrap = document.createElement('div');
    selectorWrap.className = 'gov-region-selector';

    // --- 面包屑：显示当前筛选路径 + 结果数 + 一键清除 ---
    const breadcrumb = document.createElement('div');
    breadcrumb.className = 'gov-breadcrumb';
    const regionName = currentGovRegion === 'all' ? null : (GOV_REGIONS.find(g => g.id === currentGovRegion)?.name || currentGovRegion);
    const cityName = currentGovCity === 'all' ? null : ((GOV_CITIES[currentGovRegion] || []).find(c => c.id === currentGovCity)?.name || currentGovCity);
    const levelName = currentGovLevel === 'all' ? null : ({ national:'国家级', province:'省级', city:'市级', district:'区级', town:'镇级' })[currentGovLevel];

    let crumbs = [];
    if (levelName) crumbs.push({ label: levelName, clear: () => { currentGovLevel = 'all'; } });
    if (regionName) crumbs.push({ label: regionName, clear: () => { currentGovRegion = 'all'; currentGovCity = 'all'; currentGovDistrict = 'all'; } });
    if (cityName) crumbs.push({ label: cityName, clear: () => { currentGovCity = 'all'; currentGovDistrict = 'all'; } });

    if (crumbs.length > 0) {
        const countSpan = document.createElement('span');
        countSpan.className = 'gov-breadcrumb-count';
        countSpan.textContent = `${govResources.length} 个结果`;
        breadcrumb.appendChild(countSpan);

        crumbs.forEach(crumb => {
            const tag = document.createElement('span');
            tag.className = 'gov-breadcrumb-tag';
            tag.innerHTML = `${crumb.label}<span class="gov-breadcrumb-x" title="移除此筛选">✕</span>`;
            tag.querySelector('.gov-breadcrumb-x').addEventListener('click', (e) => {
                e.stopPropagation();
                crumb.clear();
                renderCards();
            });
            breadcrumb.appendChild(tag);
        });

        const clearAll = document.createElement('span');
        clearAll.className = 'gov-breadcrumb-clear';
        clearAll.textContent = '清除全部';
        clearAll.addEventListener('click', () => {
            currentGovRegion = 'all';
            currentGovCity = 'all';
            currentGovDistrict = 'all';
            currentGovLevel = 'all';
            renderCards();
        });
        breadcrumb.appendChild(clearAll);
    } else {
        const countSpan = document.createElement('span');
        countSpan.className = 'gov-breadcrumb-count';
        countSpan.textContent = `共 ${allGovResources.length} 个政府网站`;
        breadcrumb.appendChild(countSpan);
    }
    selectorWrap.appendChild(breadcrumb);

    // --- 第一行：层级标签 ---
    const row1 = document.createElement('div');
    row1.className = 'gov-filter-row gov-level-row';

    const levelLabels = [
        { id: 'all', name: '全部层级' },
        { id: 'national', name: '国家级' },
        { id: 'province', name: '省级' },
        { id: 'city', name: '市级' },
        { id: 'district', name: '区级' },
        { id: 'town', name: '镇级' },
    ];
    levelLabels.forEach(lv => {
        const count = lv.id === 'all' ? allGovResources.length :
            allGovResources.filter(r => r.govLevel === lv.id).length;
        if (lv.id !== 'all' && count === 0) return;
        const btn = document.createElement('button');
        btn.className = `gov-level-btn${currentGovLevel === lv.id ? ' active' : ''}`;
        btn.textContent = `${lv.name}${lv.id !== 'all' ? ' ' + count : ''}`;
        btn.addEventListener('click', () => {
            currentGovLevel = lv.id;
            renderCards();
        });
        row1.appendChild(btn);
    });
    selectorWrap.appendChild(row1);

    // --- 第二行：省份/地区选择（按大区分组） ---
    const row2 = document.createElement('div');
    row2.className = 'gov-filter-row gov-region-row';

    const allBtn = document.createElement('button');
    allBtn.className = `gov-region-btn${currentGovRegion === 'all' ? ' active' : ''}`;
    allBtn.textContent = '全部地区';
    allBtn.addEventListener('click', () => {
        currentGovRegion = 'all';
        currentGovCity = 'all';
        currentGovDistrict = 'all';
        renderCards();
    });
    row2.appendChild(allBtn);

    GOV_AREA_GROUPS.forEach(group => {
        const groupRegions = group.ids.map(id => GOV_REGIONS.find(r => r.id === id)).filter(Boolean);
        const groupCount = groupRegions.reduce((sum, r) => sum + allGovResources.filter(res => res.region === r.id).length, 0);
        if (groupCount === 0) return;

        const groupWrap = document.createElement('span');
        groupWrap.className = 'gov-area-group';

        const groupBtn = document.createElement('button');
        groupBtn.className = 'gov-area-btn';
        groupBtn.textContent = `${group.name}`;
        const isCollapsed = collapsedGovAreas.has(group.id);
        if (!isCollapsed) groupBtn.classList.add('expanded');
        groupBtn.addEventListener('click', () => {
            if (collapsedGovAreas.has(group.id)) collapsedGovAreas.delete(group.id);
            else collapsedGovAreas.add(group.id);
            renderCards();
        });
        groupWrap.appendChild(groupBtn);

        const itemsWrap = document.createElement('span');
        itemsWrap.className = `gov-area-items${isCollapsed ? ' collapsed' : ''}`;

        groupRegions.forEach(region => {
            const count = allGovResources.filter(r => r.region === region.id).length;
            if (count === 0) return;
            const btn = document.createElement('button');
            btn.className = `gov-region-btn${currentGovRegion === region.id ? ' active' : ''}`;
            btn.textContent = `${region.name}`;
            btn.title = `${region.name}：${count} 个网站`;
            btn.addEventListener('click', () => {
                currentGovRegion = region.id;
                currentGovCity = 'all';
                currentGovDistrict = 'all';
                renderCards();
            });
            itemsWrap.appendChild(btn);
        });
        groupWrap.appendChild(itemsWrap);
        row2.appendChild(groupWrap);
    });
    selectorWrap.appendChild(row2);

    // --- 第三行：城市选择（仅当选了具体省份且该省有城市数据时显示） ---
    if (currentGovRegion !== 'all' && currentGovRegion !== 'national' && GOV_CITIES[currentGovRegion]) {
        const row3 = document.createElement('div');
        row3.className = 'gov-filter-row gov-city-row';

        const allCityBtn = document.createElement('button');
        allCityBtn.className = `gov-city-btn${currentGovCity === 'all' ? ' active' : ''}`;
        allCityBtn.textContent = '全部城市';
        allCityBtn.addEventListener('click', () => {
            currentGovCity = 'all';
            currentGovDistrict = 'all';
            renderCards();
        });
        row3.appendChild(allCityBtn);

        GOV_CITIES[currentGovRegion].forEach(cityDef => {
            const provinceRes = allGovResources.filter(r => r.region === currentGovRegion);
            const cityCount = provinceRes.filter(r => r.city === cityDef.id).length;
            if (cityCount === 0) return;
            const btn = document.createElement('button');
            btn.className = `gov-city-btn${currentGovCity === cityDef.id ? ' active' : ''}`;
            btn.textContent = cityDef.name;
            btn.title = `${cityDef.name}：${cityCount} 个网站`;
            btn.addEventListener('click', () => {
                currentGovCity = cityDef.id;
                currentGovDistrict = 'all';
                renderCards();
            });
            row3.appendChild(btn);
        });
        selectorWrap.appendChild(row3);
    }

    grid.appendChild(selectorWrap);

    // --- 渲染政府卡片 ---
    if (govResources.length === 0) {
        const hint = document.createElement('div');
        hint.className = 'gov-empty-hint';
        hint.innerHTML = `
            <div class="gov-empty-icon">🔍</div>
            <div class="gov-empty-text">该筛选条件下暂未收录对应政府网站</div>
            <button class="gov-empty-reset" id="govEmptyReset">重置筛选条件</button>
        `;
        grid.appendChild(hint);
        hint.querySelector('#govEmptyReset').addEventListener('click', () => {
            currentGovRegion = 'all';
            currentGovCity = 'all';
            currentGovDistrict = 'all';
            currentGovLevel = 'all';
            renderCards();
        });
        return;
    }

    // 根据当前筛选状态分组显示
    if (currentGovRegion === 'all') {
        // === 全部视图：按省份分组 ===
        const regionGroups = {};
        govResources.forEach(r => {
            const region = GOV_REGIONS.find(g => g.id === r.region);
            const regionName = region ? region.name : '其他';
            if (!regionGroups[regionName]) regionGroups[regionName] = [];
            regionGroups[regionName].push(r);
        });
        Object.keys(regionGroups).forEach(name => {
            const items = regionGroups[name];
            const sectionTitle = document.createElement('div');
            sectionTitle.className = 'category-section-title';
            sectionTitle.innerHTML = `<span class="sec-icon">📍</span>${name}（${items.length}）<span class="sec-line"></span>`;
            grid.appendChild(sectionTitle);
            items.forEach((item, i) => grid.appendChild(createCard(item, i)));
        });
    } else if (currentGovRegion === 'national') {
        // === 国家级视图 ===
        govResources.forEach((item, i) => grid.appendChild(createCard(item, i)));
    } else {
        // === 选了某个省份 ===
        if (currentGovCity === 'all') {
            // 未选城市：显示省级部门 + 按城市分组展示
            const provinceItems = govResources.filter(r => r.govLevel === 'province');
            const cityItems = govResources.filter(r => r.govLevel === 'city');
            const districtItems = govResources.filter(r => r.govLevel === 'district');

            let cardIndex = 0;

            // 省级部门
            if (provinceItems.length > 0) {
                const sectionTitle = document.createElement('div');
                sectionTitle.className = 'gov-tree-section';
                sectionTitle.innerHTML = `<span class="gov-tree-icon">🏛️</span>省级部门（${provinceItems.length}）`;
                grid.appendChild(sectionTitle);
                provinceItems.forEach(item => grid.appendChild(createCard(item, cardIndex++)));
            }

            // 按城市分组（市级 + 区县级平铺）
            const cities = GOV_CITIES[currentGovRegion] || [];
            cities.forEach(cityDef => {
                const cityRes = cityItems.filter(r => r.city === cityDef.id);
                const cityDistRes = districtItems.filter(r => r.city === cityDef.id);
                const totalForCity = cityRes.length + cityDistRes.length;
                if (totalForCity === 0) return;

                const citySection = document.createElement('div');
                citySection.className = 'gov-tree-section gov-tree-city';
                citySection.innerHTML = `<span class="gov-tree-icon">🏙️</span>${cityDef.name}（${totalForCity}）`;
                grid.appendChild(citySection);

                cityRes.forEach(item => grid.appendChild(createCard(item, cardIndex++)));
                cityDistRes.forEach(item => grid.appendChild(createCard(item, cardIndex++)));
            });
        } else {
            // 选了具体城市：govResources 已经过滤好，直接平铺展示
            const cityName = (GOV_CITIES[currentGovRegion] || []).find(c => c.id === currentGovCity)?.name || currentGovCity;
            if (govResources.length > 0) {
                const sectionTitle = document.createElement('div');
                sectionTitle.className = 'gov-tree-section gov-tree-city';
                sectionTitle.innerHTML = `<span class="gov-tree-icon">🏙️</span>${cityName}（${govResources.length}）`;
                grid.appendChild(sectionTitle);
                govResources.forEach((item, i) => grid.appendChild(createCard(item, i)));
            }
        }
    }
}

function createCard(item, index) {
    const card = document.createElement('article');
    card.className = 'resource-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', item.name);
    card.style.animationDelay = `${Math.min(index, 20) * 0.02}s`;

    const typeInfo = TYPE_LABELS[item.type] || TYPE_LABELS.free;
    const catName = CATEGORIES.find(c => c.id === item.category)?.name || item.category;
    const stars = '★'.repeat(Math.floor(item.rating)) + (item.rating % 1 >= 0.5 ? '½' : '');
    let hostname = '';
    try { hostname = new URL(item.url).hostname; } catch(e) { hostname = item.url; }

    const openCard = () => openDetail(item);
    card.addEventListener('click', openCard);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCard(); }
    });

    // 生成图标HTML：本地img → Google Favicon CDN → emoji回退
    // 政府网站统一使用国徽图标
    let iconHtml;
    const isGov = item.category === 'gov';
    if (isGov) {
        // 政府网站统一：红色圆底+国徽emoji
        iconHtml = `<span style="display:flex;">🏛️</span>`;
    } else if (item.img) {
        // 有本地图标：优先用本地，失败后降级到CDN，再失败用emoji
        iconHtml = `<img src="images/${item.img}" alt="${item.name}" width="32" height="32" class="card-icon-img" loading="lazy"
                onerror="this.src='https://www.google.com/s2/favicons?domain=${hostname}&sz=64';this.onerror=function(){this.style.display='none';this.nextElementSibling.style.display='flex';};">
            <span style="display:none;">${item.icon}</span>`;
    } else {
        // 无本地图标：直接用CDN，失败用emoji
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
        iconHtml = `<img src="${faviconUrl}" alt="${item.name}" width="32" height="32" loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <span style="display:none;">${item.icon}</span>`;
    }

    card.innerHTML = `
        <div class="card-header">
            <div class="card-icon" style="background:${isGov ? '#DE2910' : '#fff'}">${iconHtml}</div>
            <div class="card-info">
                <div class="card-title">${item.name}</div>
                <div class="card-tags">
                    <span class="card-tag tag-category">${catName}</span>
                    <span class="card-tag ${typeInfo.cls}">${typeInfo.text}</span>
                </div>
            </div>
        </div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
            <span class="stars">${stars}</span>
            <span class="rating-num">${item.rating}</span>
            <span class="card-url">${hostname}</span>
            <button class="fav-btn${isFavorited(item.name) ? ' active' : ''}" data-name="${item.name.replace(/"/g,'&quot;')}" title="${isFavorited(item.name) ? '取消收藏' : '收藏'}">${isFavorited(item.name) ? '❤️' : '🤍'}</button>
            <a class="card-open-btn" href="${item.url}" target="_blank" rel="noopener noreferrer" title="打开网站">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                打开
            </a>
        </div>
    `;

    // 阻止打开按钮的点击冒泡到卡片（避免同时触发详情弹窗）
    const openBtn = card.querySelector('.card-open-btn');
    openBtn.addEventListener('click', (e) => e.stopPropagation());

    // 收藏按钮
    const favBtn = card.querySelector('.fav-btn');
    favBtn.addEventListener('click', (e) => toggleFavorite(item, e));

    return card;
}

// ============================================
// 渲染热榜（按评分排序取前10）
// ============================================
function renderPolicyNews(newsList) {
    const policyList = document.getElementById('policyList');
    const policyListDrawer = document.getElementById('policyListDrawer');
    if (!policyList) return;

    if (!newsList || newsList.length === 0) {
        policyList.innerHTML = '<div class="policy-empty">暂无新闻数据</div>';
        if (policyListDrawer) policyListDrawer.innerHTML = policyList.innerHTML;
        return;
    }

    const html = newsList.map((item, i) => {
        const rankCls = i === 0 ? 'top1' : i === 1 ? 'top2' : i === 2 ? 'top3' : '';
        const timeStr = item.time || '';
        const source = item.source || '';
        return `<div class="policy-item" data-url="${item.url || ''}">
            <span class="policy-rank ${rankCls}">${i + 1}</span>
            <div class="policy-info">
                <div class="policy-name">${item.title}</div>
                <div class="policy-meta">${source}${source && timeStr ? ' · ' : ''}${timeStr}</div>
            </div>
        </div>`;
    }).join('');

    policyList.innerHTML = html;
    policyList.querySelectorAll('.policy-item[data-url]').forEach(el => {
        el.addEventListener('click', () => {
            if (el.dataset.url) window.open(el.dataset.url, '_blank', 'noopener,noreferrer');
        });
    });

    if (policyListDrawer) {
        policyListDrawer.innerHTML = html;
        policyListDrawer.querySelectorAll('.policy-item[data-url]').forEach(el => {
            el.addEventListener('click', () => {
                if (el.dataset.url) window.open(el.dataset.url, '_blank', 'noopener,noreferrer');
            });
        });
    }
}

// 多个新闻源依次尝试，解析RSS/JSON，提取政策相关新闻
async function fetchPolicyNews() {
    const policyList = document.getElementById('policyList');
    const policyListDrawer = document.getElementById('policyListDrawer');

    // 尝试的RSS源列表（政府政策新闻）
    const rssSources = [
        {
            name: '中国政府网',
            url: 'https://www.gov.cn/rss/govall.rss',
            corsProxy: 'https://api.allorigins.win/raw?url=',
            parse: parseGovRss,
        },
        {
            name: '人民网时政',
            url: 'http://www.people.com.cn/rss/politics.xml',
            corsProxy: 'https://api.allorigins.win/raw?url=',
            parse: parsePeopleRss,
        },
    ];

    for (const source of rssSources) {
        try {
            const resp = await fetch(source.corsProxy + encodeURIComponent(source.url), {
                signal: AbortSignal.timeout(8000),
            });
            if (!resp.ok) continue;
            const text = await resp.text();
            const items = source.parse(text);
            if (items && items.length >= 3) {
                renderPolicyNews(items.slice(0, 10));
                // 缓存到 localStorage，有效期2小时
                const cacheData = { items: items.slice(0, 10), fetchedAt: Date.now() };
                try { localStorage.setItem('policyNewsCache', JSON.stringify(cacheData)); } catch(e) {}
                return;
            }
        } catch(e) {
            console.warn(`政策新闻源 ${source.name} 获取失败:`, e);
            continue;
        }
    }

    // 所有RSS源失败，尝试备用方案：通过RSS2JSON API
    try {
        const backupUrls = [
            'https://www.gov.cn/rss/govall.rss',
            'http://www.people.com.cn/rss/politics.xml',
        ];
        const resp = await fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(backupUrls[0]), {
            signal: AbortSignal.timeout(8000),
        });
        if (resp.ok) {
            const json = await resp.json();
            if (json.items && json.items.length >= 3) {
                const items = json.items.map(item => ({
                    title: item.title,
                    url: item.link,
                    source: '中国政府网',
                    time: formatDate(item.pubDate),
                }));
                renderPolicyNews(items.slice(0, 10));
                const cacheData = { items: items.slice(0, 10), fetchedAt: Date.now() };
                try { localStorage.setItem('policyNewsCache', JSON.stringify(cacheData)); } catch(e) {}
                return;
            }
        }
    } catch(e) {
        console.warn('RSS2JSON 备用方案失败:', e);
    }

    // 全部失败，显示加载失败提示
    const failHtml = '<div class="policy-empty">新闻加载失败，请稍后刷新重试</div>';
    if (policyList) policyList.innerHTML = failHtml;
    if (policyListDrawer) policyListDrawer.innerHTML = failHtml;
}

// 解析日期字符串
function formatDate(dateStr) {
    try {
        const d = new Date(dateStr);
        if (isNaN(d)) return '';
        const now = new Date();
        const diff = now - d;
        if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前';
        if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前';
        if (diff < 172800000) return '昨天';
        return `${d.getMonth() + 1}/${d.getDate()}`;
    } catch(e) {
        return '';
    }
}

// 中国政府网RSS解析
function parseGovRss(xmlText) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'text/xml');
        const items = doc.querySelectorAll('item');
        const result = [];
        items.forEach((item, i) => {
            if (i >= 10) return;
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            if (title && link) {
                result.push({ title: title.replace(/<\!\[CDATA\[|\]\]>/g, '').trim(), url: link, source: '中国政府网', time: formatDate(pubDate) });
            }
        });
        return result;
    } catch(e) { return null; }
}

// 人民网RSS解析
function parsePeopleRss(xmlText) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'text/xml');
        const items = doc.querySelectorAll('item');
        const result = [];
        items.forEach((item, i) => {
            if (i >= 10) return;
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            if (title && link) {
                result.push({ title: title.replace(/<\!\[CDATA\[|\]\]>/g, '').trim(), url: link, source: '人民网', time: formatDate(pubDate) });
            }
        });
        return result;
    } catch(e) { return null; }
}

// 通用RSS解析（新华网等）
function parseGenericRss(xmlText) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'text/xml');
        const items = doc.querySelectorAll('item');
        const result = [];
        items.forEach((item, i) => {
            if (i >= 10) return;
            const title = item.querySelector('title')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            if (title && link) {
                result.push({ title: title.replace(/<\!\[CDATA\[|\]\]>/g, '').trim(), url: link, source: '新华网', time: formatDate(pubDate) });
            }
        });
        return result;
    } catch(e) { return null; }
}

// 加载政策新闻（优先读缓存）
function loadPolicyNews() {
    try {
        const cached = JSON.parse(localStorage.getItem('policyNewsCache') || '{}');
        if (cached && cached.items && cached.fetchedAt && Date.now() - cached.fetchedAt < 7200000) {
            // 缓存未过期（2小时内）
            renderPolicyNews(cached.items);
            return;
        }
    } catch($1) {}
    // 无缓存或已过期，重新获取
    fetchPolicyNews();
}

// ============================================
// 移动端侧边栏抽屉
// ============================================
const floatBtn = document.getElementById('floatBtn');
const drawerOverlay = document.getElementById('drawerOverlay');
const sidebarDrawer = document.getElementById('sidebarDrawer');
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

function openDrawer() {
    drawerOverlay.classList.add('active');
    sidebarDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeDrawer() {
    drawerOverlay.classList.remove('active');
    sidebarDrawer.classList.remove('active');
    document.body.style.overflow = '';
}
if (floatBtn) floatBtn.addEventListener('click', openDrawer);
if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

// ============================================
// 推荐工具表单
// ============================================
const submitResourceBtn = document.getElementById('submitResourceBtn');
const submitOverlay = document.getElementById('submitOverlay');
const submitFormDrawer = document.getElementById('submitFormDrawer');
const submitCloseBtn = document.getElementById('submitCloseBtn');
const submitForm = document.getElementById('submitForm');
const submitSuccess = document.getElementById('submitSuccess');

function openSubmitForm() {
    submitOverlay.classList.add('active');
    submitFormDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeSubmitForm() {
    submitOverlay.classList.remove('active');
    submitFormDrawer.classList.remove('active');
    document.body.style.overflow = '';
}
if (submitResourceBtn) submitResourceBtn.addEventListener('click', openSubmitForm);
if (submitCloseBtn) submitCloseBtn.addEventListener('click', closeSubmitForm);
if (submitOverlay) submitOverlay.addEventListener('click', closeSubmitForm);

if (submitForm) {
    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const entry = {
            name: document.getElementById('submitName').value.trim(),
            url: document.getElementById('submitUrl').value.trim(),
            desc: document.getElementById('submitDesc').value.trim(),
            category: document.getElementById('submitCategory').value,
            reason: document.getElementById('submitReason').value.trim(),
            time: new Date().toISOString()
        };
        // 存入 localStorage
        const submissions = JSON.parse(localStorage.getItem('userSubmissions') || '[]');
        submissions.push(entry);
        localStorage.setItem('userSubmissions', JSON.stringify(submissions));

        // 显示成功提示
        submitSuccess.classList.add('show');
        submitForm.querySelector('.submit-form-btn').style.display = 'none';
        setTimeout(() => {
            submitForm.reset();
            submitSuccess.classList.remove('show');
            submitForm.querySelector('.submit-form-btn').style.display = '';
            closeSubmitForm();
        }, 2000);
    });
}

// ============================================
// 搜索逻辑
// ============================================
let searchHistory = [];
try { searchHistory = JSON.parse(localStorage.getItem('searchHistory') || '[]'); } catch($1) {}

// 创建搜索历史下拉元素
const historyDropdown = document.createElement('div');
historyDropdown.className = 'search-history';
const searchBox = document.querySelector('.search-box');
searchBox.appendChild(historyDropdown);

function saveSearchHistory(keyword) {
    if (!keyword) return;
    searchHistory = searchHistory.filter(k => k !== keyword);
    searchHistory.unshift(keyword);
    if (searchHistory.length > 5) searchHistory = searchHistory.slice(0, 5);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function renderSearchHistory() {
    if (searchHistory.length === 0) {
        historyDropdown.classList.remove('show');
        return;
    }
    historyDropdown.innerHTML = `
        <div class="search-history-header">
            <span>搜索历史</span>
            <button class="search-history-clear" id="clearHistoryBtn">清除</button>
        </div>
        ${searchHistory.map(k => `
            <div class="search-history-item" data-keyword="${k}">
                <span class="hist-icon">🕐</span>
                <span>${k}</span>
            </div>
        `).join('')}
    `;
    historyDropdown.classList.add('show');

    // 点击历史条目
    historyDropdown.querySelectorAll('.search-history-item').forEach(el => {
        el.addEventListener('mousedown', (e) => {
            e.preventDefault(); // 阻止 blur 先触发
            const kw = el.dataset.keyword;
            searchInput.value = kw;
            currentSearch = kw;
            searchClearBtn.classList.toggle('visible', currentSearch.length > 0);
            renderCards();
            historyDropdown.classList.remove('show');
            saveSearchHistory(kw);
        });
    });

    // 清除历史
    document.getElementById('clearHistoryBtn')?.addEventListener('mousedown', (e) => {
        e.preventDefault();
        searchHistory = [];
        localStorage.removeItem('searchHistory');
        historyDropdown.classList.remove('show');
    });
}

searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim() === '' && searchHistory.length > 0) {
        renderSearchHistory();
    }
});
searchInput.addEventListener('blur', () => {
    setTimeout(() => historyDropdown.classList.remove('show'), 150);
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    searchClearBtn.classList.toggle('visible', currentSearch.length > 0);
    if (currentSearch === '' && searchHistory.length > 0) {
        renderSearchHistory();
    } else {
        historyDropdown.classList.remove('show');
    }
    renderCards();
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const kw = searchInput.value.trim();
        if (kw) {
            saveSearchHistory(kw);
            triggerEngineSearch(kw);
        }
        historyDropdown.classList.remove('show');
    }
});

// ============================================
// 多搜索引擎切换
// ============================================
let currentEngine = 'local';
let currentEngineUrl = '';

function initEngineTabs() {
    const tabs = document.querySelectorAll('.engine-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentEngine = tab.dataset.engine;
            currentEngineUrl = tab.dataset.url;
            // 更新搜索框 placeholder
            const placeholders = {
                local: '搜索工具、模板、网站… 例如：论文查重、简历模板、思维导图',
                baidu: '在百度搜索…',
                google: '在 Google 搜索…',
                bing: '在 Bing 搜索…',
                bilibili: '在 B站 搜索教程/视频…',
                github: '在 GitHub 搜索开源项目…',
                zhihu: '在知乎搜索问答…',
            };
            searchInput.placeholder = placeholders[currentEngine] || '搜索…';
        });
    });
    // 搜索按钮
    document.getElementById('searchGoBtn')?.addEventListener('click', () => {
        const kw = searchInput.value.trim();
        if (kw) {
            saveSearchHistory(kw);
            triggerEngineSearch(kw);
        }
    });
}

function triggerEngineSearch(kw) {
    if (currentEngine === 'local' || !currentEngineUrl) {
        // 站内搜索
        currentSearch = kw;
        renderCards();
    } else {
        // 外部搜索引擎
        window.open(currentEngineUrl + encodeURIComponent(kw), '_blank', 'noopener');
    }
}

// 全局分类切换函数（供底部浮动导航等外部调用）
function setCategory(catId) {
    currentCategory = catId;
    currentGovRegion = 'all';
    currentGovCity = 'all';
    currentGovDistrict = 'all';
    currentGovLevel = 'all';
    // 更新 tab 高亮
    const categoryNav = document.getElementById('categoryNav');
    if (categoryNav) {
        categoryNav.querySelectorAll('.cat-tab').forEach(t => {
            t.classList.toggle('active', t.dataset.cat === catId);
        });
    }
    renderCards();
    // 滚动到资源区
    const el = document.getElementById('resources');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}






searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    searchClearBtn.classList.remove('visible');
    renderCards();
});

// ============================================
// 数字递增动画
// ============================================
function animateCount(el, target) {
    let current = 0;
    const step = Math.ceil(target / 25);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
    }, 30);
}

// ============================================
// 产品详情弹窗
// ============================================
const detailOverlay = document.getElementById('detailOverlay');
const detailModal = document.getElementById('detailModal');
const detailClose = document.getElementById('detailClose');
const detailOpenBtn = document.getElementById('detailOpenBtn');
const commentInput = document.getElementById('commentInput');
const commentSubmit = document.getElementById('commentSubmit');
const commentList = document.getElementById('commentList');
const commentEmpty = document.getElementById('commentEmpty');
const rateStars = document.getElementById('rateStars');
let currentDetailItem = null;
let currentRating = 0;

function openDetail(item) {
    currentDetailItem = item;
    recordClick(item);
    recordRecent(item);

    const typeInfo = TYPE_LABELS[item.type] || TYPE_LABELS.free;
    const catInfo = CATEGORIES.find(c => c.id === item.category);
    const catName = catInfo ? catInfo.name : item.category;
    const catColor = CAT_COLORS[item.category] || CAT_COLORS.ppt;

    // 图标：本地img → Google Favicon CDN → emoji回退
    const iconImg = document.getElementById('detailIconImg');
    const iconFallback = document.getElementById('detailIconFallback');
    const iconWrap = document.getElementById('detailIconWrap');
    let detailHostname = '';
    try { detailHostname = new URL(item.url).hostname; } catch(e) { detailHostname = item.url; }
    // 政府网站统一使用国徽emoji+红色背景
    const isDetailGov = item.category === 'gov';
    if (isDetailGov) {
        iconImg.style.display = 'none';
        iconFallback.style.display = 'flex';
        iconFallback.textContent = '🏛️';
        iconWrap.style.background = '#DE2910';
    } else if (item.img) {
        // 有本地图标：优先用本地，失败后降级到CDN，再失败用emoji
        iconImg.src = `images/${item.img}`;
        iconImg.style.display = 'block';
        iconFallback.style.display = 'none';
        iconWrap.style.background = '#fff';
        iconImg.onerror = function() {
            if (detailHostname) {
                this.src = `https://www.google.com/s2/favicons?domain=${detailHostname}&sz=64`;
                this.onerror = function() {
                    this.style.display = 'none';
                    iconFallback.style.display = 'flex';
                    iconFallback.textContent = item.icon;
                    iconWrap.style.background = catColor;
                };
            } else {
                this.style.display = 'none';
                iconFallback.style.display = 'flex';
                iconFallback.textContent = item.icon;
                iconWrap.style.background = catColor;
            }
        };
    } else if (detailHostname) {
        iconImg.src = `https://www.google.com/s2/favicons?domain=${detailHostname}&sz=64`;
        iconImg.style.display = 'block';
        iconFallback.style.display = 'none';
        iconWrap.style.background = '#fff';
        iconImg.onerror = function() {
            this.style.display = 'none';
            iconFallback.style.display = 'flex';
            iconFallback.textContent = item.icon;
            iconWrap.style.background = catColor;
        };
    } else {
        iconImg.style.display = 'none';
        iconFallback.style.display = 'flex';
        iconFallback.textContent = item.icon;
        iconWrap.style.background = catColor;
    }

    // 基本信息
    document.getElementById('detailTitle').textContent = item.name;
    document.getElementById('detailRating').textContent = '★ ' + item.rating;
    const catTag = document.getElementById('detailCatTag');
    catTag.textContent = catInfo ? catInfo.icon + ' ' + catName : catName;
    catTag.className = 'detail-tag tag-category';
    const typeTag = document.getElementById('detailTypeTag');
    typeTag.textContent = typeInfo.text;
    typeTag.className = 'detail-tag ' + typeInfo.cls;

    document.getElementById('detailUrl').textContent = detailHostname;

    // 描述
    document.getElementById('detailDesc').textContent = item.desc;

    // 网站首页截图
    const screenshotEl = document.getElementById('detailScreenshot');
    const screenshotImg = document.getElementById('screenshotImg');
    const screenshotLink = document.getElementById('screenshotLink');
    const shotFile = SCREENSHOT_MAP[item.name];
    if (shotFile) {
        screenshotEl.style.display = 'block';
        screenshotImg.src = 'images/screenshots/' + shotFile;
        screenshotImg.onerror = function() { screenshotEl.style.display = 'none'; };
        screenshotLink.href = item.url;
    } else {
        screenshotEl.style.display = 'none';
    }

    // 标签
    const tagsHtml = [];
    tagsHtml.push(catInfo ? catInfo.icon + ' ' + catName : catName);
    tagsHtml.push(typeInfo.text);
    if (item.sub) {
        const subInfo = STARTUP_SUBS.find(s => s.id === item.sub);
        if (subInfo) tagsHtml.push(subInfo.icon + ' ' + subInfo.name);
    }
    tagsHtml.push(item.rating >= 4.5 ? '🌟 高分推荐' : item.rating >= 4.0 ? '👍 值得尝试' : '📌 可以了解');
    document.getElementById('detailTags').innerHTML = tagsHtml.map(t => `<span class="dtag">${t}</span>`).join('');

    // 评分
    document.getElementById('scoreBig').textContent = item.rating;
    const fullStars = Math.floor(item.rating);
    const halfStar = item.rating % 1 >= 0.5;
    let starsStr = '★'.repeat(fullStars) + (halfStar ? '☆' : '');
    document.getElementById('scoreStars').textContent = starsStr;
    document.getElementById('scoreLabel').textContent = item.rating >= 4.5 ? '强烈推荐' : item.rating >= 4.0 ? '值得一试' : '还不错';

    // 网站信息
    const infoGrid = document.getElementById('infoGrid');
    infoGrid.innerHTML = `
        <div class="info-item"><div class="info-label">网站名称</div><div class="info-value">${item.name}</div></div>
        <div class="info-item"><div class="info-label">访问地址</div><div class="info-value" style="word-break:break-all">${detailHostname}</div></div>
        <div class="info-item"><div class="info-label">所属分类</div><div class="info-value">${catInfo ? catInfo.icon + ' ' + catName : catName}</div></div>
        <div class="info-item"><div class="info-label">收费模式</div><div class="info-value">${typeInfo.text}</div></div>
    `;

    // 百宝箱测评
    const reviewCard = document.getElementById('detailReviewCard');
    const reviewText = document.getElementById('detailReviewText');
    if (item.review) {
        reviewCard.style.display = 'block';
        reviewText.textContent = item.review;
    } else {
        reviewCard.style.display = 'none';
    }

    // 打开按钮
    detailOpenBtn.href = item.url;

    // 重置评论输入
    commentInput.value = '';
    currentRating = 0;
    document.querySelectorAll('.rate-star').forEach(s => s.classList.remove('active'));

    // 加载评论
    loadComments(item.name);

    // 显示弹窗
    detailOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // 绑定截图 lightbox
    setTimeout(() => {
        const sImg = document.getElementById('screenshotImg');
        if (sImg && sImg.src && !sImg.getAttribute('data-lightbox-bound')) {
            sImg.setAttribute('data-lightbox-bound', '1');
            sImg.style.cursor = 'zoom-in';
            sImg.addEventListener('click', (e) => {
                e.preventDefault(); e.stopPropagation();
                openLightbox(sImg.src);
            });
        }
    }, 50);
}

function closeDetail() {
    detailOverlay.classList.remove('active');
    document.body.style.overflow = '';
    currentDetailItem = null;
}

// 关闭事件
detailClose.addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', (e) => {
    if (e.target === detailOverlay) closeDetail();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && detailOverlay.classList.contains('active')) closeDetail();
});

// 评分星星交互
rateStars.addEventListener('click', (e) => {
    const star = e.target.closest('.rate-star');
    if (!star) return;
    currentRating = parseInt(star.dataset.v);
    document.querySelectorAll('.rate-star').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.v) <= currentRating);
    });
});

// ============================================
// 评论系统（localStorage）
// ============================================
function getCommentsKey(name) {
    return 'toolbox_comments_' + name;
}

function loadComments(name) {
    const key = getCommentsKey(name);
    const raw = localStorage.getItem(key);
    const comments = raw ? JSON.parse(raw) : [];
    renderComments(comments);
}

function saveComment(name, comment) {
    const key = getCommentsKey(name);
    const raw = localStorage.getItem(key);
    const comments = raw ? JSON.parse(raw) : [];
    comments.unshift(comment);
    localStorage.setItem(key, JSON.stringify(comments));
}

function renderComments(comments) {
    if (comments.length === 0) {
        commentEmpty.style.display = 'block';
        commentList.innerHTML = '';
        commentList.appendChild(commentEmpty);
        return;
    }
    commentEmpty.style.display = 'none';
    commentList.innerHTML = comments.map(c => {
        const starsHtml = '★'.repeat(c.rating) + '☆'.repeat(5 - c.rating);
        return `<div class="comment-item">
            <div class="c-avatar">${c.avatar}</div>
            <div class="c-body">
                <div class="c-name">${c.name}</div>
                <div class="c-stars">${starsHtml}</div>
                <div class="c-text">${escapeHtml(c.text)}</div>
                <div class="c-time">${c.time}</div>
            </div>
        </div>`;
    }).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

commentSubmit.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (!text) return;
    if (currentRating === 0) { currentRating = 5; }
    if (!currentDetailItem) return;

    const now = new Date();
    const timeStr = now.getFullYear() + '-' +
        String(now.getMonth()+1).padStart(2,'0') + '-' +
        String(now.getDate()).padStart(2,'0') + ' ' +
        String(now.getHours()).padStart(2,'0') + ':' +
        String(now.getMinutes()).padStart(2,'0');

    const comment = {
        name: '匿名用户',
        avatar: '匿',
        text: text,
        rating: currentRating,
        time: timeStr
    };

    saveComment(currentDetailItem.name, comment);
    loadComments(currentDetailItem.name);
    commentInput.value = '';
    currentRating = 0;
    document.querySelectorAll('.rate-star').forEach(s => s.classList.remove('active'));
});

// ============================================
// 暗色模式
// ============================================
const darkModeToggle = document.getElementById('darkModeToggle');

function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (darkModeToggle) darkModeToggle.textContent = dark ? '☀️' : '🌙';
}

function initDarkMode() {
    const saved = localStorage.getItem('toolbox_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;
    applyTheme(isDark);

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const currentDark = document.documentElement.getAttribute('data-theme') === 'dark';
            applyTheme(!currentDark);
            localStorage.setItem('toolbox_theme', !currentDark ? 'dark' : 'light');
        });
    }
}

// ============================================
// 收藏功能
// ============================================
let favorites = [];
try { favorites = JSON.parse(localStorage.getItem('toolbox_favorites') || '[]'); } catch(e) {}

function saveFavorites() {
    localStorage.setItem('toolbox_favorites', JSON.stringify(favorites));
}

function isFavorited(name) {
    return favorites.some(f => f.name === name);
}

function toggleFavorite(item, e) {
    if (e) { e.stopPropagation(); e.preventDefault(); }
    const idx = favorites.findIndex(f => f.name === item.name);
    if (idx >= 0) {
        favorites.splice(idx, 1);
    } else {
        favorites.unshift({ name: item.name, url: item.url, icon: item.icon, img: item.img || '', category: item.category });
    }
    saveFavorites();
    renderFavList();
    // 更新所有同名卡片的收藏按钮状态
    document.querySelectorAll(`.fav-btn[data-name="${CSS.escape(item.name)}"]`).forEach(btn => {
        btn.textContent = isFavorited(item.name) ? '❤️' : '🤍';
        if (isFavorited(item.name)) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

// 收藏列表拖拽排序
function initFavDragSort(container) {
    if (!container) return;
    const items = () => container.querySelectorAll('.fav-item');
    let dragEl = null;

    container.addEventListener('pointerdown', (e) => {
        if (!e.target.classList.contains('fav-drag-handle')) return;
        const item = e.target.closest('.fav-item');
        if (!item) return;
        dragEl = item;
        dragEl.classList.add('fav-item-dragging');
        e.preventDefault();
    });

    document.addEventListener('pointermove', (e) => {
        if (!dragEl || !container.contains(e.target)) return;
        const siblings = [...container.querySelectorAll('.fav-item:not(.fav-item-dragging)')];
        const afterSibling = siblings.find(sibling => {
            const rect = sibling.getBoundingClientRect();
            return e.clientY < rect.top + rect.height / 2;
        });
        container.insertBefore(dragEl, afterSibling || null);
    });

    document.addEventListener('pointerup', () => {
        if (!dragEl) return;
        dragEl.classList.remove('fav-item-dragging');
        // 同步新顺序到 favorites 数组
        const newOrder = [...container.querySelectorAll('.fav-item')].map(el => el.dataset.name);
        const reordered = [];
        newOrder.forEach(name => {
            const item = favorites.find(f => f.name === name);
            if (item) reordered.push(item);
        });
        favorites = reordered;
        saveFavorites();
        dragEl = null;
    });
}

function renderFavList() {
    const favList = document.getElementById('favList');
    const favListDrawer = document.getElementById('favListDrawer');
    const html = favorites.length === 0
        ? '<div class="fav-empty">点击卡片 🤍 收藏资源</div>'
        : favorites.map(f => {
            let hostname = '';
            try { hostname = new URL(f.url).hostname; } catch(e) {}
            const faviconUrl = f.img
                ? `images/${f.img}`
                : `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
            return `<div class="fav-item" data-name="${escapeHtml(f.name)}">
                <span class="fav-drag-handle" title="拖拽排序">≡</span>
                <img src="${faviconUrl}" width="16" height="16" style="border-radius:3px;flex-shrink:0;"
                    onerror="this.style.display='none';">
                <span class="fav-name">${escapeHtml(f.name)}</span>
                <button class="fav-remove" data-name="${escapeHtml(f.name)}" title="取消收藏">✕</button>
            </div>`;
        }).join('');

    if (favList) favList.innerHTML = html;
    if (favListDrawer) favListDrawer.innerHTML = html;

    // 初始化拖拽排序
    initFavDragSort(favList);
    initFavDragSort(favListDrawer);

    // 收藏列表点击：跳转弹窗
    [favList, favListDrawer].forEach(el => {
        if (!el) return;
        el.querySelectorAll('.fav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('fav-remove') || e.target.classList.contains('fav-drag-handle')) return;
                const name = item.dataset.name;
                const res = resources.find(r => r.name === name);
                if (res) openDetail(res);
            });
        });
        el.querySelectorAll('.fav-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const name = btn.dataset.name;
                const res = resources.find(r => r.name === name) || favorites.find(f => f.name === name);
                if (res) toggleFavorite(res);
                else {
                    favorites = favorites.filter(f => f.name !== name);
                    saveFavorites();
                    renderFavList();
                }
            });
        });
    });
}


// ============================================
// 截图 Lightbox 大图预览
// ============================================
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');

function openLightbox(src) {
    if (!lightboxOverlay || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('active');
    // 只有当detail弹窗没打开时才恢复滚动
    if (!detailOverlay.classList.contains('active')) {
        document.body.style.overflow = '';
    }
}

if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) closeLightbox();
    });
}

// 截图图片点击放大（在 openDetail 中的截图区域加监听）
function attachLightboxToScreenshot() {
    const screenshotImg = document.getElementById('screenshotImg');
    const screenshotFrame = screenshotImg?.closest('.screenshot-frame');
    if (!screenshotFrame) return;
    screenshotImg.style.cursor = 'zoom-in';
    screenshotImg.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        if (screenshotImg.src && !screenshotImg.src.endsWith('#')) {
            openLightbox(screenshotImg.src);
        }
    });
}

// ============================================
// 最近浏览（侧边栏）
// ============================================
let recentViewed = [];
try { recentViewed = JSON.parse(localStorage.getItem('toolbox_recent') || '[]'); } catch(e) {}

function recordRecent(item) {
    recentViewed = recentViewed.filter(r => r.name !== item.name);
    recentViewed.unshift({ name: item.name, url: item.url, icon: item.icon, img: item.img || '', category: item.category });
    if (recentViewed.length > 10) recentViewed.pop();
    localStorage.setItem('toolbox_recent', JSON.stringify(recentViewed));
    renderRecentList();
    renderQuickTools();
}

function renderRecentList() {
    const recentList = document.getElementById('recentList');
    const recentListDrawer = document.getElementById('recentListDrawer');
    const html = recentViewed.length === 0
        ? '<div class="fav-empty">暂无浏览记录</div>'
        : recentViewed.slice(0, 6).map(f => {
            let hostname = '';
            try { hostname = new URL(f.url).hostname; } catch(e) {}
            const faviconUrl = f.img
                ? `images/${f.img}`
                : `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
            return `<div class="recent-item" data-name="${escapeHtml(f.name)}">
                <img src="${faviconUrl}" width="16" height="16" style="border-radius:3px;flex-shrink:0;"
                    onerror="this.style.display='none';">
                <span class="recent-name">${escapeHtml(f.name)}</span>
            </div>`;
        }).join('');
    if (recentList) recentList.innerHTML = html;
    if (recentListDrawer) recentListDrawer.innerHTML = html;

    [recentList, recentListDrawer].forEach(el => {
        if (!el) return;
        el.querySelectorAll('.recent-item').forEach(item => {
            item.addEventListener('click', () => {
                const name = item.dataset.name;
                const res = resources.find(r => r.name === name);
                if (res) openDetail(res);
            });
        });
    });
}

// ============================================
// 初始化
// ============================================
function init() {
    // 恢复子分类折叠状态
    try {
        const saved = JSON.parse(localStorage.getItem('collapsedSubs'));
        if (Array.isArray(saved)) collapsedSubs = new Set(saved);
    } catch(e) {}

    initDarkMode();
    renderCategoryNav();
    renderQuickTools();
    renderFriendLinks();
    renderCards();
    // loadPolicyNews();  // 已隐藏政策热点
    renderFavList();
    // 首次访问：展示网站说明 & 免责声明
    if (!localStorage.getItem('toolbox_intro_shown')) {
        const introOverlay = document.getElementById('introOverlay');
        const introConfirmBtn = document.getElementById('introConfirmBtn');
        if (introOverlay) {
            introOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        if (introConfirmBtn) {
            introConfirmBtn.addEventListener('click', () => {
                introOverlay.classList.remove('active');
                document.body.style.overflow = '';
                localStorage.setItem('toolbox_intro_shown', '1');
            });
        }
    }

    // 商务合作弹窗
    const contactOverlay = document.getElementById('contactOverlay');
    const contactClose = document.getElementById('contactClose');
    const contactSendBtn = document.getElementById('contactSendBtn');
    const contactUrl = 'https://mail.163.com/js6/main.jsp#module=compose.ComposeModule%7C%7B%22to%22%3A%22wnbbx01%40163.com%22%7D';

    window.openContactModal = function() {
        if (contactOverlay) {
            contactOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    window.closeContactModal = function() {
        if (contactOverlay) {
            contactOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    if (contactClose) {
        contactClose.addEventListener('click', window.closeContactModal);
    }
    if (contactOverlay) {
        contactOverlay.addEventListener('click', function(e) {
            if (e.target === contactOverlay) window.closeContactModal();
        });
    }
    if (contactSendBtn) {
        contactSendBtn.addEventListener('click', function() {
            window.open(contactUrl, '_blank');
        });
    }

    // 意见反馈弹窗
    const feedbackOverlay = document.getElementById('feedbackOverlay');
    const feedbackClose = document.getElementById('feedbackClose');
    const feedbackSendBtn = document.getElementById('feedbackSendBtn');

    window.openFeedbackModal = function() {
        if (feedbackOverlay) {
            feedbackOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    window.closeFeedbackModal = function() {
        if (feedbackOverlay) {
            feedbackOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    if (feedbackClose) {
        feedbackClose.addEventListener('click', window.closeFeedbackModal);
    }
    if (feedbackOverlay) {
        feedbackOverlay.addEventListener('click', function(e) {
            if (e.target === feedbackOverlay) window.closeFeedbackModal();
        });
    }
    if (feedbackSendBtn) {
        feedbackSendBtn.addEventListener('click', function() {
            window.open(contactUrl, '_blank');
        });
    }
    renderRecentList();
    initEngineTabs();
    animateCount(totalCountEl, resources.length);
    animateCount(categoryCountEl, CATEGORIES.length - 1);

    // lightbox 截图点击
    attachLightboxToScreenshot();

    // 吸顶工具栏滚动阴影（requestAnimationFrame 节流）
    const stickyToolbar = document.querySelector('.sticky-toolbar');
    if (stickyToolbar) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const offset = stickyToolbar.getBoundingClientRect().top;
                    stickyToolbar.classList.toggle('toolbar-scrolled', offset <= 52);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }
}

init();

// ============================================
// Hero 轮播图
// ============================================
(function() {
    const track   = document.getElementById('carouselTrack');
    const dots    = document.querySelectorAll('#carouselDots .cdot');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    if (!track) return;

    const total = dots.length;
    let cur = 0;
    let timer = null;

    function goTo(idx) {
        cur = (idx + total) % total;
        track.style.transform = `translateX(-${cur * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === cur));
    }

    function startAuto() {
        clearInterval(timer);
        timer = setInterval(() => goTo(cur + 1), 4500);
    }

    prevBtn && prevBtn.addEventListener('click', () => { goTo(cur - 1); startAuto(); });
    nextBtn && nextBtn.addEventListener('click', () => { goTo(cur + 1); startAuto(); });
    dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.idx); startAuto(); }));

    // 触摸滑动支持
    let tx = 0;
    track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - tx;
        if (Math.abs(dx) > 40) { goTo(dx < 0 ? cur + 1 : cur - 1); startAuto(); }
    }, { passive: true });

    // 鼠标悬停暂停
    track.closest('.hero-carousel').addEventListener('mouseenter', () => clearInterval(timer));
    track.closest('.hero-carousel').addEventListener('mouseleave', startAuto);

    goTo(0);
    startAuto();
})();

