import type City from "../../types/City";
import type Company from "../../types/Company";

const CN_CITIES: City[] = [
  { id: "beijing", name: { en: "Beijing", zh: "北京" } },
  { id: "shanghai", name: { en: "Shanghai", zh: "上海" } },
  { id: "shenzhen", name: { en: "Shenzhen", zh: "深圳" } },
  { id: "guangzhou", name: { en: "Guangzhou", zh: "广州" } },
  { id: "chengdu", name: { en: "Chengdu", zh: "成都" } },
  { id: "suzhou", name: { en: "Suzhou", zh: "苏州" } },
  { id: "xian", name: { en: "Xian", zh: "西安" } },
  { id: "wuxi", name: { en: "Wuxi", zh: "无锡" } },
  { id: "hangzhou", name: { en: "Hangzhou", zh: "杭州" } },
  { id: "nanjing", name: { en: "Nanjing", zh: "南京" } },
  { id: "wuhan", name: { en: "Wuhan", zh: "武汉" } },
  { id: "hefei", name: { en: "Hefei", zh: "合肥" } },
  { id: "xiamen", name: { en: "Xiamen", zh: "厦门" } },
  { id: "dalian", name: { en: "Dalian", zh: "大连" } },
  { id: "zhuhai", name: { en: "Zhuhai", zh: "珠海" } },
  { id: "zhengzhou", name: { en: "Zhengzhou", zh: "郑州" } },
  { id: "changsha", name: { en: "Changsha", zh: "长沙" } },
  { id: "changchun", name: { en: "Changchun", zh: "长春" } },
  { id: "chongqing", name: { en: "Chongqing", zh: "重庆" } },
  { id: "tianjin", name: { en: "Tianjin", zh: "天津" } },
  { id: "haikou", name: { en: "Haikou", zh: "海口" } },
  { id: "jiaxing", name: { en: "Jiaxing", zh: "嘉兴" } },
  { id: "foshan", name: { en: "Foshan", zh: "佛山" } },
  { id: "zhongshan", name: { en: "Zhongshan", zh: "中山" } },
  { id: "kunming", name: { en: "Kunming", zh: "昆明" } },
  { id: "qingdao", name: { en: "Qingdao", zh: "青岛" } },
  { id: "daqing", name: { en: "Daqing", zh: "大庆" } },
  { id: "taizhou", name: { en: "Taizhou", zh: "台州" } },
  { id: "kunshan", name: { en: "Kunshan", zh: "昆山" } },
  { id: "zhanjiang", name: { en: "Zhanjiang", zh: "湛江" } },
  { id: "huhehaote", name: { en: "Huhehaote", zh: "呼和浩特" } },
  { id: "dongguan", name: { en: "Dongguan", zh: "东莞" } },
  { id: "changzhou", name: { en: "Changzhou", zh: "常州" } },
  { id: "xiangyang", name: { en: "Xiangyang", zh: "襄阳" } },
  { id: "taiyuan", name: { en: "Taiyuan", zh: "太原" } },
  { id: "taicang", name: { en: "Taicang", zh: "太仓" } },
  { id: "hongkong", name: { en: "Hong Kong", zh: "香港" } },
  { id: "taipei", name: { en: "Taipei", zh: "台北" } },
];

const C = CN_CITIES.reduce<Record<string, City>>((acc, city) => {
  acc[city.id] = city;
  return acc;
}, {});

export const CN_COMPANIES: Company[] = [
  {
    id: "apple-cn",
    name: {
      en: "Apple",
      zh: "Apple/苹果",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路789号兴业太古汇香港兴业中心一座",
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "中国(上海)自由贸易试验区马吉路88号C区6号楼",
        employeeCount: 1200,
      },
      {
        city: C.beijing,
        district: "东城区",
        address: "东长安街1号东方广场东方经贸城东一办公楼20层",
        employeeCount: 800,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街1号国贸写字楼2座",
        employeeCount: 500,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "招商街道沿山路12号万联大厦A座",
        employeeCount: 1000,
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "金鸡湖大道1355号国际科技园",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://jobs.apple.com/zh-cn/search?location=china-CHNC",
    linkedin: "apple",
    discussion: 2,
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "amazon-cn",
    name: {
      en: "Amazon",
      zh: "Amazon/亚马逊",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东四环中路56号远洋国际中心A座",
        employeeCount: 2500,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路789号兴业太古汇香港兴业中心二座",
        employeeCount: 2000,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "深南大道9668号华润城大厦B座15楼",
        employeeCount: 1500,
      },
      {
        city: C.hangzhou,
        district: "滨江区",
        address: "网商路599号网易二期旁/巨星大厦",
        employeeCount: 800,
      },
      {
        city: C.chengdu,
        district: "武侯区",
        address: "交子大道333号中海国际中心E座",
        employeeCount: 600,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路6号周大福金融中心（广州东塔）",
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://www.amazon.jobs/en/search?country[]=CHN",
    linkedin: "amazon",
    discussion: 3,
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "intel-cn",
    name: {
      en: "Intel",
      zh: "英特尔",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "闵行区",
        address: "紫竹科学园区紫日路751号",
        employeeCount: 3500,
      },
      {
        city: C.beijing,
        district: "东城区",
        address: "北三环东路36号环球贸易中心D座20层",
        employeeCount: 1500,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "合作路88号（成都高新综合保税区）",
        employeeCount: 3000,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "沙河西路深圳湾科技生态园11栋",
        employeeCount: 800,
      },
    ],
    careerWebsite:
      "https://jobs.intel.cn/intel/position/index?recruitmentType=SOCIALRECRUITMENT&keyword=&baseProvinceCity=",
    linkedin: "intel",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "oracle-cn",
    name: {
      en: "Oracle",
      zh: "甲骨文",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园16号楼甲骨文大厦",
        employeeCount: 1500,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "碧波路690号张江微电子港8号楼",
        employeeCount: 1200,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "益田路5033号平安金融中心42楼",
        employeeCount: 500,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路6号周大福金融中心（广州东塔）",
        employeeCount: 400,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段1388号美年广场",
        employeeCount: 300,
      },
      {
        city: C.nanjing,
        district: "建邺区",
        address: "江东中路347号南京国金中心（IFC）",
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://www.oracle.com/cn/careers/",
    linkedin: "oracle",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "morgan-stanley-cn",
    name: {
      en: "Morgan Stanley",
      zh: "摩根士丹利",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道100号上海环球金融中心75-77楼",
        employeeCount: 1200,
      },
      {
        city: C.beijing,
        district: "东城区",
        address: "安定门外大街208号玖安广场（原中粮置地广场）A塔12-13层",
        employeeCount: 800,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "中心四路1号嘉里建设广场二座19楼",
        employeeCount: 300,
      },
      {
        city: C.hangzhou,
        district: "上城区",
        address: "富春路701号万象城一期写字楼",
        employeeCount: 150,
      },
    ],
    careerWebsite: "https://www.morganstanley.com/careers",
    linkedin: "morgan-stanley",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 18,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "microsoft-cn",
    name: {
      en: "Microsoft",
      zh: "微软",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "丹棱街5号微软大厦",
        employeeCount: 4500,
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "星湖街328号创意产业园25栋",
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "闵行区",
        address: "紫星路999号微软园区",
        employeeCount: 2500,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新南九道55号微软科通大厦2-6层",
        employeeCount: 1000,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路6号周大福金融中心（广州东塔）",
        employeeCount: 300,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段1388号美年广场",
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://careers.microsoft.com/v2/global/en/home.html?lc=China",
    linkedin: "microsoft",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "zalando-cn",
    name: {
      en: "Zalando",
      zh: "Zalando/嘉兰朵",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科发路91号华润置地大厦D座802",
        employeeCount: 150,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路1266号恒隆广场一期",
        employeeCount: 80,
      },
    ],
    careerWebsite: "https://jobs.zalando.com/en/jobs?locations=China",
    linkedin: "zalando",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "flexport-cn",
    name: {
      en: "Flexport",
      zh: "Flexport/飞协博",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路2666号中国华润大厦（春笋）28楼",
        employeeCount: 400,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路1601号越洋广场1505室",
        employeeCount: 300,
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "丹棱街1号互联网金融中心5层 WeWork 05-112",
        employeeCount: 80,
      },
      {
        city: C.hongkong,
        district: "东区",
        address: "鲗鱼涌英皇道979号太古坊一座43楼",
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://www.flexport.com/careers/jobs/?location=China",
    linkedin: "flexport",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "qualcomm-cn",
    name: {
      en: "Qualcomm",
      zh: "高通",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区亮秀路72号7层",
        employeeCount: 2000,
      },
      {
        city: C.beijing,
        district: "东城区",
        address: "北三环东路36号环球贸易中心C栋6层",
        employeeCount: 1500,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "粤海街道科苑南路3331号阿里巴巴大厦N2座6楼",
        employeeCount: 800,
      },
      {
        city: C.xian,
        district: "雁塔区",
        address: "高新六路38号腾飞创新中心A座201室",
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://www.qualcomm.com/company/careers/jobs?location=China",
    linkedin: "qualcomm",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "siemens-cn",
    name: {
      en: "Siemens",
      zh: "西门子",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京中环南路7号西门子大厦（中国区总部）",
        employeeCount: 3500,
      },
      {
        city: C.shanghai,
        district: "杨浦区",
        address: "大连路500号西门子上海中心",
        employeeCount: 3000,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "拓新东街81号天府软件园C区6号楼",
        employeeCount: 1500,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "天河路208号粤海天河城大厦8楼",
        employeeCount: 1000,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "前湾一路前海嘉里商务中心T1写字楼704",
        employeeCount: 800,
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏华路2号国际大厦1117-1119室",
        employeeCount: 600,
      },
      {
        city: C.wuhan,
        district: "东湖新技术开发区",
        address: "高新大道999号（西门子武汉创新中心）",
        employeeCount: 500,
      },
      {
        city: C.xian,
        district: "雁塔区",
        address: "天谷八路156号西安软件新城研发基地B-2号楼",
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://jobs.siemens.com/jobs?location=China",
    linkedin: "siemens",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "philips-cn",
    name: {
      en: "Philips",
      zh: "飞利浦",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "灵石路718号宁汇广场A1座（大中华区总部）",
        employeeCount: 3500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京东路1号广顺北大街交叉口飞利浦大厦",
        employeeCount: 1500,
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "九华路258号（飞利浦医疗科技苏州基地）",
        employeeCount: 2000,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新技术产业园区粤兴二道6号飞利浦大厦",
        employeeCount: 1200,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段1388号美年广场",
        employeeCount: 600,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "林和西路9号耀中广场A座",
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://www.careers.philips.com/global/en/search-results?m=3&location=China",
    linkedin: "philips",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "schneider-electric-cn",
    name: {
      en: "Schneider Electric",
      zh: "施耐德电气",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京东路6号施耐德电气大厦（中国区总部）",
        employeeCount: 3500,
      },
      {
        city: C.shanghai,
        district: "普陀区",
        address: "云岭东路89号长风国际大厦",
        employeeCount: 3000,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路3099号中国储能大厦7-8楼",
        employeeCount: 1500,
      },
      {
        city: C.wuhan,
        district: "东湖新技术开发区",
        address: "光谷大道77号金融港B11栋（施耐德电气武汉研发中心）",
        employeeCount: 1200,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "金穗路62号侨鑫国际金融中心20楼",
        employeeCount: 800,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "世纪城南路599号天府软件园D区7栋",
        employeeCount: 600,
      },
      {
        city: C.xian,
        district: "雁塔区",
        address: "天谷八路156号西安软件新城研发基地B-2号楼（西安研发中心）",
        employeeCount: 800,
      },
    ],
    careerWebsite:
      "https://se.wd3.myworkdayjobs.com/SchneiderElectricCareers?locationCountry=a220263f350c441c9b2184f4f71a067a",
    linkedin: "schneider-electric",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "afterpay-cn",
    name: {
      en: "Afterpay",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路1266号恒隆广场一座",
        employeeCount: 120,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "粤海街道科苑南路2666号中国华润大厦（春笋）",
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://block.xyz/careers?location=Shanghai%2C%20China",
    linkedin: "afterpay",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "airbnb-cn",
    name: {
      en: "Airbnb",
      zh: "Airbnb/爱彼迎",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "酒仙桥路4号宏源大厦",
        employeeCount: 50,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路789号兴业太古汇",
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://careers.airbnb.com",
    linkedin: "airbnb",
    discussion: 4,
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "amd-cn",
    name: {
      en: "AMD",
      zh: "AMD/超微半导体",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "融科资讯中心 C 座",
        employeeCount: 1000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区科苑路 88 号德国中心",
        employeeCount: 1500,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "深圳湾科技生态园",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://jobs.amd.com/go/Jobs-in-China/2566600/",
    linkedin: "amd",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "arm-cn",
    name: {
      en: "ARM",
      zh: "ARM/安谋",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "申江路 5005 号星现代产业园",
        employeeCount: 500,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路 2666 号中国华润大厦（春笋）",
        employeeCount: 200,
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "知春路 56 号中关村创客总部",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.armchina.com/Joblist.html",
    linkedin: "arm",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "autodesk-cn",
    name: {
      en: "Autodesk",
      zh: "Autodesk/欧特克",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区李冰路 399 号",
        employeeCount: 800,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京街 9 号望京 SOHO",
        employeeCount: 300,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新区南区科技南十二路",
        employeeCount: 100,
      },
    ],
    careerWebsite:
      "https://autodesk.wd1.myworkdayjobs.com/Uni?locationCountry=a220263f350c441c9b2184f4f71a067a",
    linkedin: "autodesk",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "booking-cn",
    name: {
      en: "Booking",
      zh: "Booking/缤客",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "长宁路 1193 号长宁来福士广场 T3 办公楼",
        employeeCount: 600,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 38 号院 1 号楼泰康金融大厦",
        employeeCount: 150,
      },
      {
        city: C.haikou,
        district: "龙华区",
        address: "滨海大道 32 号复兴城互联网信息产业园",
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://careers.booking.com/search-jobs/?location=China",
    linkedin: "booking",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "bosch-cn",
    name: {
      en: "Bosch Group",
      zh: "博世",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "福泉北路 333 号博世中国总部",
        employeeCount: 10000,
      },
      {
        city: C.suzhou,
        district: "工业园区",
        address: "星龙街 455 号",
        employeeCount: 9000,
      },
      {
        city: C.wuxi,
        district: "新吴区",
        address: "长江路 17 号",
        employeeCount: 3000,
      },
      {
        city: C.changsha,
        district: "长沙县",
        address: "经济技术开发区漓湘中路 26 号",
        employeeCount: 2000,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "酒仙桥路 10 号恒通商务园",
        employeeCount: 1000,
      },
    ],
    careerWebsite: "https://jobs.smartrecruiters.com/BoschGroup?search=China",
    linkedin: "bosch-group",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "calix-cn",
    name: {
      en: "Calix",
      zh: "Calix",
    },
    region: "CN",
    offices: [
      {
        city: C.nanjing,
        district: "雨花台区",
        address: "软件大道 170 号天合广场 5 幢",
        employeeCount: 300,
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村东路 1 号院清华科技园科技大厦 D 座",
        employeeCount: 100,
      },
    ],
    careerWebsite:
      "https://calix.wd1.myworkdayjobs.com/Calix_Careers?locationCountry=a220263f350c441c9b2184f4f71a067a",
    linkedin: "calix",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "canva-cn",
    name: {
      en: "Canva",
      zh: "Canva/可画",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 27 号嘉铭中心",
        employeeCount: 150,
      },
      {
        city: C.wuhan,
        district: "洪山区",
        address: "关山大道 332 号保利国际中心",
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.lifeatcanva.com/en/jobs/?location=China",
    linkedin: "canva",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "cisco-cn",
    name: {
      en: "Cisco",
      zh: "思科",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "宜山路 900 号科技绿洲三期 20 号楼",
        employeeCount: 3000,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸写字楼 2 座",
        employeeCount: 1500,
      },
      {
        city: C.hangzhou,
        district: "滨江区",
        address: "江南大道 3850 号创新大厦",
        employeeCount: 800,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "深南大道 9668 号华润置地大厦 B 座",
        employeeCount: 500,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（东塔）",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://careers.cisco.com/global/en/search-results?location=China",
    linkedin: "cisco",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "citrix-cn",
    name: {
      en: "Citrix",
      zh: "Citrix/思杰",
    },
    region: "CN",
    offices: [
      {
        city: C.nanjing,
        district: "雨花台区",
        address: "软件大道 106 号中兴通讯大厦",
        employeeCount: 600,
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "田林路 397 号捷强园区",
        employeeCount: 400,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东方东路 19 号亮马桥外交办公大楼",
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://careers.cloud.com/jobs?location=China",
    linkedin: "citrix",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "continental-cn",
    name: {
      en: "Continental AG",
      zh: "大陆集团",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "杨浦区",
        address: "大连路 538 号大陆集团大楼",
        employeeCount: 3000,
      },
      {
        city: C.changchun,
        district: "净月高新技术产业开发区",
        address: "净月大街 5188 号",
        employeeCount: 2500,
      },
      {
        city: C.hefei,
        district: "高新区",
        address: "习友路 1888 号",
        employeeCount: 2000,
      },
      {
        city: C.chongqing,
        district: "渝北区",
        address: "创新路 1 号",
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "酒仙桥路 10 号恒通商务园",
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://jobs.continental.com/en/",
    linkedin: "continental-ag",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "coupang-cn",
    name: {
      en: "Coupang",
      zh: "Coupang/酷澎",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京街 9 号望京 SOHO",
        employeeCount: 600,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1717 号会德丰国际广场",
        employeeCount: 400,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路 2666 号中国华润大厦（春笋）",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.coupang.jobs/en/jobs/?location=China",
    linkedin: "coupang",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "cstc-cn",
    name: {
      en: "CSTC",
      zh: "花旗金融",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "陆家嘴环路 333 号花旗集团大厦",
        employeeCount: 3000,
      },
      {
        city: C.dalian,
        district: "沙河口区",
        address: "体坛路 22 号诺德英特宜家中心",
        employeeCount: 2000,
      },
      {
        city: C.beijing,
        district: "西城区",
        address: "金融大街 7 号英蓝国际金融中心",
        employeeCount: 800,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "益田路 4068 号卓越时代广场",
        employeeCount: 500,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（东塔）",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://jobs.citi.com/search-jobs/China",
    linkedin: "cstc",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "dell-cn",
    name: {
      en: "Dell",
      zh: "戴尔",
    },
    region: "CN",
    offices: [
      {
        city: C.xiamen,
        district: "湖里区",
        address: "金尚路 2388 号戴尔（中国）有限公司",
        employeeCount: 6000,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场",
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "科苑路 88 号德国中心",
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号环球金融中心",
        employeeCount: 1000,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 7888 号东海国际中心",
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://jobs.dell.com/search-jobs/China",
    linkedin: "dell",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "douban-cn",
    name: {
      en: "Douban",
      zh: "豆瓣",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "酒仙桥路 4 号宏源大厦",
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://jobs.douban.com",
    linkedin: "douban",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 5,
    },
  },
  {
    id: "duolingo-cn",
    name: {
      en: "Duolingo",
      zh: "多邻国",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 38 号院 1 号楼泰康金融大厦",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://careers.duolingo.com/?location=Beijing%2C+China",
    linkedin: "duolingo",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "ebay-cn",
    name: {
      en: "eBay",
      zh: "eBay",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "科苑路 88 号德国中心",
        employeeCount: 1500,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 4011 号香港中旅大厦",
        employeeCount: 300,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 38 号院 1 号楼泰康金融大厦",
        employeeCount: 150,
      },
    ],
    careerWebsite: "https://jobs.ebaymainstreet.com/en/search-jobs/?location=China",
    linkedin: "ebay",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "ehealth-cn",
    name: {
      en: "eHealth",
      zh: "eHealth",
    },
    region: "CN",
    offices: [
      {
        city: C.xiamen,
        district: "思明区",
        address: "软件园二期观日路 24 号",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.ehealthinsurance.com/about-ehealth/careers",
    linkedin: "ehealth",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "ea-cn",
    name: {
      en: "Electronic Arts",
      zh: "EA",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1266 号恒隆广场一期",
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://ea.gr8people.com/jobs?geo_location=CN",
    linkedin: "electronic-arts",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "emc-cn",
    name: {
      en: "EMC",
      zh: "EMC",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "科苑路 88 号德国中心",
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村东路 1 号院清华科技园科技大厦 D 座",
        employeeCount: 1000,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场",
        employeeCount: 800,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（东塔）",
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://www.dell.com/careers/en-us/search-results?location=China",
    linkedin: "emc",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "epam-cn",
    name: {
      en: "EPAM Systems",
      zh: "EPAM/亿磐",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "南山区",
        address: "粤海街道科苑南路 2666 号中国华润大厦（春笋）",
        employeeCount: 800,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "祖冲之路 2277 号世和商务中心",
        employeeCount: 600,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 530 号东方希望天祥广场",
        employeeCount: 400,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 38 号院 1 号楼泰康金融大厦",
        employeeCount: 200,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "林和西路 9 号耀中广场",
        employeeCount: 150,
      },
      {
        city: C.suzhou,
        district: "工业园区",
        address: "星桂街 33 号凤凰国际大厦",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.epam.com/careers/locations/china",
    linkedin: "epam-systems",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "ericsson-cn",
    name: {
      en: "Ericsson",
      zh: "爱立信",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京广顺南大街 16 号爱立信大厦",
        employeeCount: 4000,
      },
      {
        city: C.nanjing,
        district: "江宁区",
        address: "江宁经济技术开发区新兴路 18 号",
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "临虹路 168 号爱立信大楼",
        employeeCount: 1500,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心（西塔）",
        employeeCount: 800,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场",
        employeeCount: 500,
      },
      {
        city: C.xian,
        district: "雁塔区",
        address: "高新六路 38 号",
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://jobs.ericsson.com/search/?q=&locationsearch=China",
    linkedin: "ericsson",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "freewheel-cn",
    name: {
      en: "FreeWheel",
      zh: "FreeWheel",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸写字楼 2 座",
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://jobs.comcast.com/search-jobs?k=FreeWheel&location=China",
    linkedin: "freewheel",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "ge-cn",
    name: {
      en: "GE",
      zh: "通用电气",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "华陀路 1 座通用电气中国科技园区",
        employeeCount: 3000,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "北京经济技术开发区永昌北路 1 号",
        employeeCount: 1500,
      },
      {
        city: C.wuxi,
        district: "新吴区",
        address: "长江路 32 号",
        employeeCount: 1200,
      },
      {
        city: C.wuhan,
        district: "江夏区",
        address: "高新大道 999 号武汉新能源研究院",
        employeeCount: 600,
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "开创大道 1500 号",
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://jobs.gecareers.com/global/en/search-results?location=China",
    linkedin: "ge",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "google-cn",
    name: {
      en: "Google",
      zh: "Google/谷歌",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村东路 1 号院清华科技园科技大厦 6 号楼",
        employeeCount: 1000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 100 号上海环球金融中心",
        employeeCount: 800,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "深南大道 9668 号华润置地大厦 B 座",
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://www.google.com/about/careers/applications/jobs/results/?location=China",
    linkedin: "google",
    discussion: 5,
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "grab-cn",
    name: {
      en: "Grab",
      zh: "Grab",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "启阳路 4 号中轻大厦",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://grab.careers/jobs/?location=China",
    linkedin: "grab",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "honeywell-cn",
    name: {
      en: "Honeywell",
      zh: "霍尼韦尔",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区李时珍路 227 号",
        employeeCount: 3000,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "酒仙桥路 10 号恒通商务园 B21 座",
        employeeCount: 1200,
      },
      {
        city: C.tianjin,
        district: "滨海新区",
        address: "天津经济技术开发区南海路 168 号",
        employeeCount: 1000,
      },
      {
        city: C.suzhou,
        district: "工业园区",
        address: "星海街 188 号",
        employeeCount: 800,
      },
      {
        city: C.chongqing,
        district: "渝北区",
        address: "黄山大道中段 6 号",
        employeeCount: 500,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（东塔）",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://careers.honeywell.com/us/en/search-results?location=China",
    linkedin: "honeywell",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "hp-cn",
    name: {
      en: "HP",
      zh: "HP/惠普",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京广顺南大街 8 号院利星行中心",
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "科苑路 88 号德国中心",
        employeeCount: 1500,
      },
      {
        city: C.chongqing,
        district: "沙坪坝区",
        address: "微电园西永大道 25 号",
        employeeCount: 1200,
      },
      {
        city: C.dalian,
        district: "甘井子区",
        address: "软件园路 1 号软件园 16 号楼",
        employeeCount: 1000,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（东塔）",
        employeeCount: 500,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场",
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://jobs.hp.com/search-jobs/China",
    linkedin: "hp",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "hsbc-cn",
    name: {
      en: "HSBC",
      zh: "汇丰银行",
    },
    region: "CN",
    offices: [
      {
        city: C.guangzhou,
        district: "天河区",
        address: "天河路 381 号",
        employeeCount: 7000,
      },
      {
        city: C.foshan,
        district: "南海区",
        address: "灯湖东路 8 号广东省金融高新区汇丰大厦",
        employeeCount: 4000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 8 号上海国金中心汇丰银行大楼",
        employeeCount: 3000,
      },
      {
        city: C.xian,
        district: "雁塔区",
        address: "锦业路 1 号都市之门 B 座",
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "西城区",
        address: "金融大街 8 号华实大厦",
        employeeCount: 1000,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "益田路 4088 号香格里拉大酒店写字楼",
        employeeCount: 800,
      },
    ],
    careerWebsite: "https://www.hsbc.com",
    linkedin: "hsbc",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "hulu-cn",
    name: {
      en: "Hulu",
      zh: "Hulu",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸写字楼 2 座",
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://www.hulu.com",
    linkedin: "hulu",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "iherb-cn",
    name: {
      en: "iHerb",
      zh: "iHerb",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1601 号越洋广场",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.iherb.com",
    linkedin: "iherb",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "jetbrains-cn",
    name: {
      en: "JetBrains",
      zh: "JetBrains",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "长宁路 1189 号来福士广场 T1 办公楼",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.jetbrains.com/careers/jobs/?location=china",
    linkedin: "jetbrains",
    discussion: 6,
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "kong-cn",
    name: {
      en: "Kong",
      zh: "Kong",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1717 号会德丰国际广场",
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.kong.com",
    linkedin: "kong",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "leetcode-cn",
    name: {
      en: "LeetCode",
      zh: "LeetCode",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "祖冲之路 2277 号世和商务中心",
        employeeCount: 150,
      },
    ],
    careerWebsite: "https://www.leetcode.com",
    linkedin: "leetcode",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "lego-cn",
    name: {
      en: "LEGO Group",
      zh: "乐高",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "淮海中路 999 号环贸广场二期",
        employeeCount: 1200,
      },
      {
        city: C.jiaxing,
        district: "秀洲区",
        address: "桐乡大道 2283 号乐高玩具（嘉兴）有限公司",
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸写字楼 2 座",
        employeeCount: 200,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "深南大道 9668 号华润置地大厦 B 座",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.legogroup.com",
    linkedin: "lego-group",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "linkedin-cn",
    name: {
      en: "LinkedIn",
      zh: "领英",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号环球金融中心西塔",
        employeeCount: 300,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1601 号越洋广场",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.linkedin.com",
    linkedin: "linkedin",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "microfocus-cn",
    name: {
      en: "Micro Focus",
      zh: "Micro Focus",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "科苑路 88 号德国中心",
        employeeCount: 400,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京广顺南大街 8 号院利星行中心",
        employeeCount: 300,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（东塔）",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.microfocus.com",
    linkedin: "micro-focus",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "microstrategy-cn",
    name: {
      en: "MicroStrategy",
      zh: "MicroStrategy",
    },
    region: "CN",
    offices: [
      {
        city: C.hangzhou,
        district: "滨江区",
        address: "网商路 599 号网易大厦二期",
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://www.microstrategy.com",
    linkedin: "microstrategy",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "ni-cn",
    name: {
      en: "National Instruments",
      zh: "NI/国家仪器(美)",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区张衡路 180 号",
        employeeCount: 500,
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "知春路 27 号航天科技大厦",
        employeeCount: 100,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "体育西路 109 号高威大厦",
        employeeCount: 50,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 530 号东方希望天府生机广场",
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.nationalinstruments.com",
    linkedin: "national-instruments",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "nike-cn",
    name: {
      en: "Nike",
      zh: "耐克",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "杨浦区",
        address: "江湾城路 99 号耐克大中华区总部（李娜楼）",
        employeeCount: 4000,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸写字楼 2 座",
        employeeCount: 500,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（东塔）",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.nike.com",
    linkedin: "nike",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "nokia-cn",
    name: {
      en: "Nokia",
      zh: "诺基亚",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "酒仙桥东路 1 号 M8 楼",
        employeeCount: 3000,
      },
      {
        city: C.hangzhou,
        district: "滨江区",
        address: "江陵路 88 号",
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "金科路 2555 号",
        employeeCount: 2500,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场",
        employeeCount: 1000,
      },
      {
        city: C.nanjing,
        district: "雨花台区",
        address: "安德门大街 57 号",
        employeeCount: 800,
      },
    ],
    careerWebsite: "https://www.nokia.com",
    linkedin: "nokia",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "nvidia-cn",
    name: {
      en: "NVIDIA",
      zh: "英伟达",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "申江路 5005 号张江集团创新中心 2 号楼",
        employeeCount: 2000,
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "清华东路 16 号艺海大厦",
        employeeCount: 800,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路 2666 号中国华润大厦",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.nvidia.com",
    linkedin: "nvidia",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "optiver-cn",
    name: {
      en: "Optiver",
      zh: "Optiver",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 8 号上海国金中心二期",
        employeeCount: 150,
      },
    ],
    careerWebsite: "https://www.optiver.com",
    linkedin: "optiver",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "paypal-cn",
    name: {
      en: "PayPal",
      zh: "PayPal/贝宝",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 8 号上海国金中心二期",
        employeeCount: 1000,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号环球金融中心西塔",
        employeeCount: 100,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "益田路 5033 号平安金融中心",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.paypal.com",
    linkedin: "paypal",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "pivotal-cn",
    name: {
      en: "Pivotal",
      zh: "Pivotal",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村东路 1 号院清华科技园科技大厦 B 座",
        employeeCount: 300,
      },
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "西藏中路 268 号来福士广场",
        employeeCount: 150,
      },
    ],
    careerWebsite: "https://www.pivotal.com",
    linkedin: "pivotal",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "rakuten-cn",
    name: {
      en: "Rakuten",
      zh: "乐天",
    },
    region: "CN",
    offices: [
      {
        city: C.dalian,
        district: "高新区",
        address: "软件园路 18 号大连软件园 17 号楼",
        employeeCount: 500,
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "长宁路 1193 号来福士广场 T3 办公楼",
        employeeCount: 200,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 38 号院泰康金融大厦",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.rakuten.com",
    linkedin: "rakuten",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "redhat-cn",
    name: {
      en: "RedHat",
      zh: "RedHat/红帽",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "知春路 6 号锦秋国际大厦 A 座",
        employeeCount: 400,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 1198 号世纪汇广场 1 座",
        employeeCount: 200,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "益田路 5033 号平安金融中心",
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.redhat.com",
    linkedin: "red-hat",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "ringcentral-cn",
    name: {
      en: "RingCentral",
      zh: "RingCentral",
    },
    region: "CN",
    offices: [
      {
        city: C.xiamen,
        district: "思明区",
        address: "软件园二期望海路 63 号号楼",
        employeeCount: 800,
      },
      {
        city: C.hangzhou,
        district: "滨江区",
        address: "江陵路 2028 号星耀城二期 3 幢",
        employeeCount: 300,
      },
      {
        city: C.hongkong,
        district: "中西区",
        address: "皇后大道中 99 号中环中心",
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.ringcentral.com",
    linkedin: "ringcentral",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "rippling-cn",
    name: {
      en: "Rippling",
      zh: "Rippling",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号环球金融中心",
        employeeCount: 150,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路 2666 号中国华润大厦",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.rippling.com",
    linkedin: "rippling",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "sandisk-cn",
    name: {
      en: "SanDisk",
      zh: "闪迪",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "闵行区",
        address: "紫星路 888 号西部数据（SanDisk）上海研发中心",
        employeeCount: 2000,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "深南大道 9968 号汉京金融中心",
        employeeCount: 300,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 79 号华贸中心 2 号写字楼",
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.sandisk.com",
    linkedin: "sandisk",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "sap-cn",
    name: {
      en: "SAP",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "晨晖路 1001 号 SAP 软件系统（中国）有限公司上海分公司",
        employeeCount: 3500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京启阳路 4 号中航资本大厦",
        employeeCount: 1500,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场 D 座",
        employeeCount: 800,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "海德三道 126 号深圳湾一号 T7 座",
        employeeCount: 300,
      },
      {
        city: C.dalian,
        district: "高新区",
        address: "软件园路 18 号大连软件园 15 号楼",
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.sap.com",
    linkedin: "sap",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 25,
    },
  },
  {
    id: "smartnews-cn",
    name: {
      en: "SmartNews",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "工体北路 4 号院 22 号楼 东方东 zone", // 北京研发中心/办公室
        employeeCount: 150,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1266 号恒隆广场一期", // 上海办公室
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.smartnews.com",
    linkedin: "smartnews",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "snap-cn",
    name: {
      en: "Snap",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 79 号华贸中心 2 号写字楼",
        employeeCount: 300,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路 2666 号中国华润大厦（春笋）",
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://www.snap.com",
    linkedin: "snap",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "starbucks-cn",
    name: {
      en: "Starbucks",
      zh: "星巴克",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "桂箐路 65 号新研大厦 B 座", // 星巴克中国总部 / 顾客关怀中心
        employeeCount: 60000,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "滨河大道 9289 号河套科创中心", // 星巴克中国创新科技中心 (SITC)
        employeeCount: 1000,
      },
      {
        city: C.suzhou,
        district: "昆山市",
        address: "综合保税区星巴克咖啡创新产业园", // 星巴克中国咖啡创新产业园 (绿色烘焙工厂)
        employeeCount: 800,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "西大望路 1 号温特莱中心 B 座", // 华北区运营管理办公室/北方总部
        employeeCount: 1500,
      },
    ],
    careerWebsite:
      "https://starbucks.zhiye.com/social/jobs?1=%5B%7B%22id%22%3A%223%22%2C%22label%22%3A%22%E8%81%8C%E8%83%BD%E6%94%AF%E6%8C%81%22%7D%5D",
    linkedin: "starbucks",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "statestreet-cn",
    name: {
      en: "State Street",
      zh: "道富银行",
    },
    region: "CN",
    offices: [
      {
        city: C.hangzhou,
        district: "西湖区",
        address: "西斗门路 3 号天堂软件园 C 座", // 杭州科技与运营中心（西湖园区）
        employeeCount: 2500,
      },
      {
        city: C.hangzhou,
        district: "滨江区",
        address: "聚才路 239 号 5 号楼", // 杭州滨江研发/运营基地
        employeeCount: 1500,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 8 号上海国金中心二期 36 楼", // 上海分行 / 业务据点
        employeeCount: 150,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大道 1 号中国国际贸易中心国贸写字楼 2 座", // 北京代表处/管理团队
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.statestreet.com",
    linkedin: "state-street",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "suse-cn",
    name: {
      en: "SUSE",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 38 号院 1 号楼泰康金融大厦", // 北京 Headquarters / 中国区总部
        employeeCount: 150,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1601 号越洋国际广场", // 上海办公室
        employeeCount: 80,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 7888 号东海国际中心 B 座", // 华南区/深圳办公室
        employeeCount: 40,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（K11）", // 广州办事处
        employeeCount: 30,
      },
    ],
    careerWebsite: "https://www.suse.com",
    linkedin: "suse",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "tradedesk-cn",
    name: {
      en: "The Trade Desk",
      zh: "The Trade Desk",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1601 号越洋国际广场", // 中国区总部
        employeeCount: 120,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大道 1 号中国国际贸易中心国贸写字楼 2 座", // 北京办公室
        employeeCount: 60,
      },
    ],
    careerWebsite: "https://www.thetradedesk.com",
    linkedin: "the-trade-desk",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "thoughtworks-cn",
    name: {
      en: "ThoughtWorks",
      zh: "ThoughtWorks",
    },
    region: "CN",
    offices: [
      {
        city: C.xian,
        district: "雁塔区",
        address: "天府大道 / 锦业一路 11 号西安软件园 H 座", // 西安研发与交付中心
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "东城区",
        address: "东直门外大街 48 号东方银座 B 座", // 北京办公室
        employeeCount: 600,
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "延安西路 2299 号世贸商城 11 楼", // 上海办公室
        employeeCount: 500,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场 A 座", // 成都办公室
        employeeCount: 400,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "深南大道 9668 号华润置地大厦 B 座", // 深圳办公室
        employeeCount: 300,
      },
      {
        city: C.wuhan,
        district: "洪山区",
        address: "关山大道 1 号光谷软件园 E3 栋", // 武汉办公室
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.thoughtworks.com",
    linkedin: "thoughtworks",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "trendmicro-cn",
    name: {
      en: "Trend Micro",
      zh: "趋势科技",
    },
    region: "CN",
    offices: [
      {
        city: C.nanjing,
        district: "雨花台区",
        address: "软件大道 48 号苏美达大厦 / 趋势科技中国研发中心", // 南京中国研发中心
        employeeCount: 600,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 38 号院 1 号楼泰康金融大厦", // 北京办公室 / 商业运营
        employeeCount: 150,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区科苑路 88 号德国中心", // 上海办公室
        employeeCount: 100,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "林和西路 9 号耀中广场", // 广州办公室
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.trendmicro.com",
    linkedin: "trend-micro",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "tubi-cn",
    name: {
      en: "Tubi",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "工体北路 4 号院 22 号楼 东方东 zone", // Tubi 北京研发中心
        employeeCount: 120,
      },
    ],
    careerWebsite: "https://www.tubi.com",
    linkedin: "tubi",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "tusimple-cn",
    name: {
      en: "TuSimple",
      zh: "图森未来",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "东北旺西路 8 号中关村软件园二期 12 号楼", // 北京研发中心/ HQ
        employeeCount: 400,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "环湖西二路 888 号 C 座", // 上海临港自动驾驶研发与测试基地
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.tusimple.com",
    linkedin: "tusimple",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "twosigma-cn",
    name: {
      en: "Two Sigma",
      zh: "Two Sigma",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 8 号上海国金中心二期 38 楼", // 双禧投资 / 上海总部
        employeeCount: 60,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大道 1 号中国国际贸易中心国贸写字楼 2 座", // 北京代表处
        employeeCount: 20,
      },
    ],
    careerWebsite: "https://www.twosigma.com",
    linkedin: "two-sigma",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "ubisoft-cn",
    name: {
      en: "Ubisoft",
      zh: "育碧",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "碧波路 690 号张江微电子港 1 号楼", // 育碧上海工作室 (Ubisoft Shanghai)
        employeeCount: 1000,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场 C 座", // 育碧成都工作室 (Ubisoft Chengdu)
        employeeCount: 400,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号环球金融中心西塔", // 北京发行与市场中心
        employeeCount: 80,
      },
    ],
    careerWebsite: "https://www.ubisoft.com",
    linkedin: "ubisoft",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "unity-cn",
    name: {
      en: "Unity",
      zh: "Unity",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "虹口区",
        address: "东大名路 501 号白玉兰广场 30 楼", // 上海 HQ / 团结引擎研发中心
        employeeCount: 500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "工体北路 4 号院 22 号楼 东方东 zone", // 北京办公室
        employeeCount: 150,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（K11）", // 广州办公室 / 游戏技术支持
        employeeCount: 80,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场 B 座", // 成都办公室 / 工业与技术服务
        employeeCount: 70,
      },
    ],
    careerWebsite: "https://www.unity.com",
    linkedin: "unity",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "vipshop-cn",
    name: {
      en: "Vipshop",
      zh: "唯品会",
    },
    region: "CN",
    offices: [
      {
        city: C.guangzhou,
        district: "海珠区",
        address: "鼎新路 128 号唯品会总部大厦", // 广州总部（琶洲 HQ）
        employeeCount: 6000,
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "长宁路 1193 号来福士广场 T1 座", // 上海运营与研发中心
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大道 1 号中国国际贸易中心国贸写字楼 1 座", // 北京办公室
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://www.vipshop.com",
    linkedin: "vipshop",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 5,
    },
  },
  {
    id: "vmware-cn",
    name: {
      en: "VMware",
      zh: "VMware/威睿",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "融科资讯中心 C 座 10 楼", // 北京 Headquarters / 研发中心
        employeeCount: 1200,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区科苑路 88 号德国中心", // 上海研发中心 / 商业中心
        employeeCount: 800,
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府大道中段 1388 号美年广场 A 座", // 成都研发/服务支持中心
        employeeCount: 300,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "深南大道 9668 号华润置地大厦 B 座", // 深圳办公室
        employeeCount: 150,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 6 号广州周大福金融中心（K11）", // 广州办公室
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.vmware.com",
    linkedin: "vmware",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "wework-cn",
    name: {
      en: "WeWork",
      zh: "WeWork",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "威海路 696 号 WeWork 威海路旗舰店（中国区总部）", // 上海 Headquarters
        employeeCount: 300,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "光华路 9 号光华路 SOHO II 3 楼", // 北京运营总部
        employeeCount: 150,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "海德三道 126 号深圳湾一号 T7 座", // 华南区运营中心
        employeeCount: 80,
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "睿东中心 A 座 28 楼", // 西南区运营中心
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.wework.com",
    linkedin: "wework",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "wish-cn",
    name: {
      en: "Wish",
      zh: "Wish",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "宜山路 810 号库克大厦", // 中国区研发与运营中心
        employeeCount: 400,
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路 2666 号中国华润大厦（春笋）", // 华南商家支持与运营中心
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.wish.com",
    linkedin: "wish",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "worksapps-cn",
    name: {
      en: "Works Applications",
      zh: "Works Applications",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "普陀区",
        address: "凯旋北路 1188 号月星环球港 B 座 20 楼 B-C 单元", // 中国研发中心 / 上海总部
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://www.worksapplications.com",
    linkedin: "works-applications",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "xmind-cn",
    name: {
      en: "XMind",
      zh: "XMind",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路 3099 号中国科技开发院 3 号楼", // 中国总部及核心研发中心
        employeeCount: 150,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 88 号 SOHO 现代城", // 北京分公司 / 市场运营中心
        employeeCount: 50,
      },
    ],
    careerWebsite: "https://www.xmind.com",
    linkedin: "xmind",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 5,
    },
  },
  {
    id: "zhihu-cn",
    name: {
      en: "Zhihu",
      zh: "知乎",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "学院路 35 号世宁大厦", // 知乎北京总部
        employeeCount: 2000,
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "田林路 397 号捷强园区", // 上海研发与商业化中心
        employeeCount: 500,
      },
    ],
    careerWebsite: "https://www.zhihu.com",
    linkedin: "zhihu",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 5,
    },
  },
  {
    id: "zoom-cn",
    name: {
      en: "Zoom",
      zh: "Zoom",
    },
    region: "CN",
    offices: [
      {
        city: C.hangzhou,
        district: "余杭区",
        address: "文一西路 969 号阿里巴巴西溪园区附近 / 核心研发中心", // 杭州研发中心
        employeeCount: 700,
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "星湖街 328 号创意产业园", // 苏州研发中心
        employeeCount: 400,
      },
      {
        city: C.hefei,
        district: "高新区",
        address: "望江西路 800 号创新产业园", // 合肥研发中心
        employeeCount: 300,
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "斜土路 2899A 号光启文化广场 A 座", // 上海分公司 / 运营支持
        employeeCount: 150,
      },
    ],
    careerWebsite: "https://www.zoom.com",
    linkedin: "zoom",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "china-life-cn",
    name: {
      en: "China Life",
      zh: "中国人寿",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "西城区",
        address: "金融大街 17 号中国人寿中心 / 集团总部", // 中国人寿保险（集团）公司 HQ
        employeeCount: 2500,
      },
      {
        city: C.beijing,
        district: "西城区",
        address: "金融大街 16 号中国人寿广场 A 座", // 中国人寿保险股份有限公司总部
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 100 号上海环球金融中心 / 华东业务与投资中心", // 上海分支机构
        employeeCount: 800,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "益田路 6003 号荣超商务中心 A 座", // 深圳分公司 / 南方业务中心
        employeeCount: 600,
      },
    ],
    careerWebsite: "https://www.chinalife.com",
    linkedin: "china-life",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "samsung-cn",
    name: {
      en: "Samsung Electronics",
      zh: "三星电子",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "朝阳门外大街 18 号中国人寿大厦 / 三星（中国）投资有限公司", // 中国总部 (Samsung China HQ)
        employeeCount: 1500,
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "娄山关路 523 号金虹桥国际中心 / 华东销售与半导体技术中心", // 上海分公司与技术中心
        employeeCount: 1200,
      },
      {
        city: C.xian,
        district: "高新区",
        address: "西安高新区综合保税区产业配套区 / 三星半导体存储芯片工厂", // 西安半导体制造基地
        employeeCount: 3500,
      },
      {
        city: C.tianjin,
        district: "西青区",
        address: "微电子工业区微三路 1 号 / 天津三星通信与元器件基地", // 天津制造与研发基地
        employeeCount: 5000,
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 501 号 / 苏州三星电子家电制造基地", // 苏州家电与制造基地
        employeeCount: 6000,
      },
    ],
    careerWebsite: "https://www.samsungelectronics.com",
    linkedin: "samsung-electronics",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "dongfeng-nissan-cn",
    name: {
      en: "Dongfeng Nissan",
      zh: "东风日产",
    },
    region: "CN",
    offices: [
      {
        city: C.guangzhou,
        district: "花都区",
        address: "风神大道 8 号东风日产乘用车公司总部", // 广州花都总部与一工厂
        employeeCount: 15000,
      },
      {
        city: C.wuhan,
        district: "武汉经济技术开发区",
        address: "东风大道特 1 号东风日产武汉工厂", // 武汉工厂
        employeeCount: 5000,
      },
      {
        city: C.zhengzhou,
        district: "经开区",
        address: "航海东路与经开第四大街交汇处东风日产郑州工厂", // 郑州工厂
        employeeCount: 6000,
      },
      {
        city: C.dalian,
        district: "保税区",
        address: "海湾工业区东风日产大连工厂", // 大连工厂
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "云锦路 701 号西岸智慧谷 / 智能网联与前瞻设计中心", // 上海研发/设计前沿窗口
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.dongfengnissan.com",
    linkedin: "dongfeng-nissan",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "pg-cn",
    name: {
      en: "Procter & Gamble",
      zh: "宝洁",
    },
    region: "CN",
    offices: [
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 28 号越秀金融大厦 / 宝洁大中华区总部", // 广州大中华区总部
        employeeCount: 3000,
      },
      {
        city: C.shanghai,
        district: "奉贤区",
        address: "金海公路 4566 号 / 宝洁上海创新中心", // 上海研发与创新中心
        employeeCount: 1200,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "亮马桥路 48 号中信证券大厦 / 北京分公司与公共事务中心", // 北京办公室
        employeeCount: 400,
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "红星路三段 1 号国际金融中心 (IFS) 办公楼", // 西南分公司
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.proctergamble.com",
    linkedin: "procter--gamble",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "watsons-cn",
    name: {
      en: "Watsons",
      zh: "屈臣氏",
    },
    region: "CN",
    offices: [
      {
        city: C.guangzhou,
        district: "荔湾区",
        address: "康王中路 600 号 A 塔屈臣氏中国总部", // 中国区总部
        employeeCount: 2000,
      },
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 283 号香港广场", // 上海华东总部 / 数字化与新零售中心
        employeeCount: 800,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 39 号建外SOHO", // 北区办公室
        employeeCount: 300,
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 4019 号航天大厦", // 华南大区办公室
        employeeCount: 250,
      },
    ],
    careerWebsite: "https://www.watsons.com",
    linkedin: "watsons",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "gac-honda-cn",
    name: {
      en: "GAC Honda",
      zh: "广汽本田",
    },
    region: "CN",
    offices: [
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "广本路 1 号广汽本田汽车有限公司总部 / 黄埔工厂", // 总部及第一工厂
        employeeCount: 6000,
      },
      {
        city: C.guangzhou,
        district: "增城区",
        address: "新塘镇广本路 2 号广汽本田增城工厂", // 增城工厂（绿色环保标杆工厂）
        employeeCount: 4000,
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "黄埔大道东 668 号广汽本田汽车研究开发有限公司（GAC R&D）", // 汽车研发中心
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "光华路 1 号北京嘉里中心", // 北京联络与业务办公室
        employeeCount: 100,
      },
    ],
    careerWebsite: "https://www.gachonda.com",
    linkedin: "gac-honda",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "kimberly-clark-cn",
    name: {
      en: "Kimberly-Clark",
      zh: "金佰利",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 381 号中环广场 / 金佰利中国区总部", // 中国总部 (Kimberly-Clark China HQ)
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 2 号银泰中心", // 北方大区办公室
        employeeCount: 300,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "天河路 208 号天河城广场", // 南方大区办公室
        employeeCount: 250,
      },
      {
        city: C.nanjing,
        district: "江宁开发区",
        address: "苏源大道 108 号 / 金佰利南京工厂", // 南京制造与仓储基地
        employeeCount: 1200,
      },
    ],
    careerWebsite: "https://www.kimberlyclark.com",
    linkedin: "kimberlyclark",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "colgate-cn",
    name: {
      en: "Colgate",
      zh: "高露洁",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "虹桥路 355 号城开国际大厦 / 高露洁棕榄大中华区总部", // 中国区总部
        employeeCount: 1200,
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "永和经济区开发大道 / 广州高露洁棕榄有限公司", // 华南生产与运营基地
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 2 号南银大厦", // 北方大区销售与业务办公室
        employeeCount: 300,
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "东大街芷泉段 99 号时代广场", // 西南大区办公室
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://www.colgate.com",
    linkedin: "colgate",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "mentholatum-cn",
    name: {
      en: "Mentholatum",
      zh: "曼秀雷敦",
    },
    region: "CN",
    offices: [
      {
        city: C.zhongshan,
        district: "三乡镇",
        address: "金涌大道曼秀雷敦路 1 号 / 曼秀雷敦（中国）药业有限公司总部", // 中国总部及主要生产基地
        employeeCount: 1500,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1515 号静安嘉里中心", // 华东区域运营与市场中心
        employeeCount: 400,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "体育东路 116 号财富广场", // 华南大区销售与业务办公室
        employeeCount: 300,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸大厦", // 北方大区销售办公室
        employeeCount: 200,
      },
    ],
    careerWebsite: "https://www.mentholatum.com",
    linkedin: "mentholatum",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "mars-cn",
    name: {
      en: "Mars",
      zh: "玛氏",
    },
    region: "CN",
    offices: [
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC) / 玛氏箭牌大中华区总部", // 玛氏箭牌总部
        employeeCount: 2000,
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "长宁路 1133 号长宁来福士广场 / 玛氏宠物护理中国总部", // 宠物护理中国总部
        employeeCount: 1200,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸写字楼 / 玛氏中国企业事务与北方办公室", // 北京办公室
        employeeCount: 400,
      },
      {
        city: C.tianjin,
        district: "武清区",
        address: "福源道 1 号 / 玛氏天津生产与供应链基地", // 天津制造基地
        employeeCount: 1500,
      },
    ],
    careerWebsite: "https://www.mars.com",
    linkedin: "mars",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "general-mills-cn",
    name: {
      en: "General Mills",
      zh: "通用磨坊",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "淮海中路 1018 号长春大厦 / 通用磨坊中国区总部", // 中国总部 (General Mills China HQ)
        employeeCount: 1500,
      },
      {
        city: C.shanghai,
        district: "闵行区",
        address: "浦江镇恒南路 / 通用磨坊闵行食品制造基地", // 上海生产与研发基地（湾仔码头等）
        employeeCount: 1200,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "林和西路 9 号耀中广场", // 南方大区销售与业务办公室
        employeeCount: 300,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 91 号金地中心", // 北方大区销售与业务办公室
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.generalmills.com",
    linkedin: "general-mills",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "astrazeneca-cn",
    name: {
      en: "AstraZeneca",
      zh: "阿斯利康",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "亮秀路 199 号阿斯利康中国总部 / 上海大厦", // 中国总部 (AstraZeneca China HQ)
        employeeCount: 4000,
      },
      {
        city: C.wuxi,
        district: "无锡新区",
        address: "黄山路 2 号阿斯利康无锡供应基地", // 全球最大生产供应基地之一
        employeeCount: 3500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 5 号财富金融中心", // 北方大区总部 / 商业运营中心
        employeeCount: 1200,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江东路 28 号越秀金融大厦", // 南方大区总部
        employeeCount: 800,
      },
      {
        city: C.chengdu,
        district: "武侯区",
        address: "人民南路四段 19 号威斯顿联邦大厦", // 西部大区总部 / 区域创新中心
        employeeCount: 600,
      },
    ],
    careerWebsite: "https://www.astrazeneca.com",
    linkedin: "astrazeneca",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "firmenich-cn",
    name: {
      en: "Firmenich",
      zh: "Firmenich/芬美意",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "金钟路 968 号临空 SOHO / 芬美意中国总部与创意中心", // 中国总部及香精香料研发中心
        employeeCount: 1200,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "体育西路 103 号维多利广场", // 华南大区销售与应用实验室
        employeeCount: 200,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 2 号银泰中心", // 北方大区销售与业务办公室
        employeeCount: 150,
      },
      {
        city: C.kunming,
        district: "官渡区",
        address: "经开区顺通大道 / 芬美意昆明天然原料加工基地", // 云南天然香料加工与采购基地
        employeeCount: 250,
      },
    ],
    careerWebsite: "https://www.firmenich.com",
    linkedin: "firmenich",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "maersk-cn",
    name: {
      en: "Maersk",
      zh: "马士基",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "杨浦区",
        address: "东大名路 1087 号北外滩来福士广场 / 马士基大中华区与北亚区总部", // 中国总部 (Maersk Greater China HQ)
        employeeCount: 3000,
      },
      {
        city: C.shenzhen,
        district: "盐田区",
        address: "海景二路 1025 号盐田港现代物流中心 / 华南航运与集装箱枢纽", // 华南大区及港口运营中心
        employeeCount: 1500,
      },
      {
        city: C.qingdao,
        district: "市南区",
        address: "香港中路 10 号颐和国际 / 华北大区物流与船务操作中心", // 华北大区办公室
        employeeCount: 800,
      },
      {
        city: C.tianjin,
        district: "河东区",
        address: "海河东路 449 号远洋大厦", // 天津分公司及北方物流中心
        employeeCount: 600,
      },
      {
        city: C.guangzhou,
        district: "越秀区",
        address: "建设六马路 33 号宜安广场", // 广州分公司
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://www.maersk.com",
    linkedin: "maersk",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "abb-cn",
    name: {
      en: "ABB",
      zh: "ABB",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "酒仙桥路 10 号恒通商务园 / ABB（中国）有限公司总部", // 中国总部 (ABB China HQ)
        employeeCount: 2000,
      },
      {
        city: C.shanghai,
        district: "普陀区",
        address: "新会路 452 号 ABB 华东区域总部 / 智能技术研发中心", // 上海业务与技术中心
        employeeCount: 2500,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "康桥工业区康桥东路 458 号 / ABB 机器人超级工厂与研发基地", // 全球最大机器人智造基地
        employeeCount: 2000,
      },
      {
        city: C.xiamen,
        district: "火炬高新区",
        address: "火炬高新区（翔安）产业区舫山南路 / ABB 厦门输配电制造基地", // 核心高压电器制造基地
        employeeCount: 3500,
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "科学城科丰路 31 号 / ABB 广州低压开关制造基地", // 华南低压产品与系统基地
        employeeCount: 1000,
      },
    ],
    careerWebsite: "https://www.abb.com",
    linkedin: "abb",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "volvo-cars-cn",
    name: {
      en: "Volvo Cars",
      zh: "沃尔沃汽车",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "嘉定区",
        address: "绿意路 2088 号沃尔沃汽车亚太区总部 / 研发中心与设计中心", // 亚太区总部与研发中枢
        employeeCount: 3500,
      },
      {
        city: C.chengdu,
        district: "龙泉驿区",
        address: "车城东七路 1 号沃尔沃汽车成都制造基地", // 成都整车工厂
        employeeCount: 2500,
      },
      {
        city: C.daqing,
        district: "高新区",
        address: "让胡路区阳光大街沃尔沃汽车大庆制造基地", // 大庆整车工厂（全球制造卓越中心）
        employeeCount: 2000,
      },
      {
        city: C.taizhou,
        district: "路桥区",
        address: "横街镇吉利大道沃尔沃汽车台州制造基地", // 台州整车工厂
        employeeCount: 1500,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "亮马桥路 39 号第一上海中心 / 北方大区业务与销售办公室", // 北方大区办公室
        employeeCount: 300,
      },
    ],
    careerWebsite: "https://www.volvocars.com.cn/zh-cn/l/about/our-company/careers/",
    linkedin: "volvo-cars",
    params: {
      dailyWorkingHours: 7.5,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "hexagon-cn",
    name: {
      en: "Hexagon",
      zh: "海克斯康",
    },
    region: "CN",
    offices: [
      {
        city: C.qingdao,
        district: "李沧区",
        address: "青岛市李沧区金水路 728 号海克斯康中国总部 / 产业园", // 中国区总部与全球最大计量制造基地
        employeeCount: 2500,
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 海克斯康北京研发中心与地理空间软件基地", // 地理空间与软件研发中心
        employeeCount: 1000,
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区蔡伦路 / 华东应用创新中心与制造智能演示基地", // 华东大区与创新中心
        employeeCount: 800,
      },
      {
        city: C.shenzhen,
        district: "宝安区",
        address: "新安街道尖岗山高新产业园区 / 华南业务与精密测量技术中心", // 华南大区办公室
        employeeCount: 500,
      },
      {
        city: C.qingdao,
        district: "崂山区",
        address: "松岭路 396 号青岛国际创新园 / 智能制造软件与工业互联网研发总部", // 工业软件研发基地
        employeeCount: 600,
      },
    ],
    careerWebsite: "https://www.hexagon.com",
    linkedin: "hexagon-ab",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "pfizer-cn",
    name: {
      en: "Pfizer",
      zh: "辉瑞",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心 / 辉瑞中国区总部", // 中国区总部 (Pfizer China HQ)
        employeeCount: 2500,
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1515 号静安嘉里中心 / 辉瑞投资有限公司及华东运营中心", // 华东区域与投资总部
        employeeCount: 1500,
      },
      {
        city: C.dalian,
        district: "中山区",
        address: "港湾街 1 号辉瑞大连制药有限公司", // 大连全球先进制造与供应基地
        employeeCount: 2000,
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 188 号辉瑞制药苏州工厂", // 苏州无菌注射剂与固体制剂基地
        employeeCount: 1200,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC)", // 南方大区办公室
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://www.pfizer.com",
    linkedin: "pfizer",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "novartis-cn",
    name: {
      en: "Novartis",
      zh: "诺华",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "科苑路 88 号诺华中国总部与研发大楼", // 中国总部及诺华中国生物医学研究中心 (NIBR)
        employeeCount: 3000,
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸写字楼", // 北方大区办公室及商业运营中心
        employeeCount: 1000,
      },
      {
        city: C.beijing,
        district: "昌平区",
        address: "中关村生命科学园科学园路 / 北京诺华制药有限公司", // 北京生产制造基地
        employeeCount: 1200,
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC)", // 南方大区办公室
        employeeCount: 600,
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "红星路三段 1 号国际金融中心 (IFS)", // 西部大区办公室
        employeeCount: 400,
      },
    ],
    careerWebsite: "https://www.novartis.com",
    linkedin: "novartis",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "takeda-cn",
    name: {
      en: "Takeda",
      zh: "武田",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "前滩大道 199 号前滩中心 / 武田中国总部",
        employeeCount: 2000,
        description: "大中华区总部 (Takeda Greater China HQ)",
      },
      {
        city: C.tianjin,
        district: "西青区",
        address: "微山路与绥江道交口 / 天津武田药品有限公司",
        employeeCount: 1500,
        description: "核心生产与制剂基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心",
        employeeCount: 800,
        description: "北方大区办公与商业运营中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "天河路 208 号天河城广场",
        employeeCount: 500,
        description: "南方大区商务与销售办公室",
      },
    ],
    careerWebsite: "https://www.takeda.com",
    linkedin: "takeda",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "ikea-cn",
    name: {
      en: "IKEA",
      zh: "宜家",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "沪南路 2311 号 / 宜家中国总部与英格卡中国中心",
        employeeCount: 3000,
        description: "中国区总部及零售管理中枢",
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "漕溪路 126 号 / 宜家上海徐汇商场及华东区办公点",
        employeeCount: 600,
        description: "华东大区零售运营与首家经典商场",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "阜通东大街 59 号 / 宜家北京大区管理与四元桥商场",
        employeeCount: 800,
        description: "北方大区零售管理与运营中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "林和中路 156 号天誉花园 / 宜家广州商场与华南办公室",
        employeeCount: 700,
        description: "华南大区零售管理与业务办公室",
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "益州大道中段 999 号 / 宜家成都高新商场与西部运营中心",
        employeeCount: 700,
        description: "西部大区零售管理与物流支持中心",
      },
    ],
    careerWebsite: "https://www.ikea.com",
    linkedin: "ikea",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "loreal-cn",
    name: {
      en: "L'Oréal",
      zh: "欧莱雅",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1601 号越洋广场 / 欧莱雅中国总部",
        employeeCount: 4000,
        description: "中国区总部及核心研发与商业运营中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "金科路 456 号 / 欧莱雅中国研发和创新中心",
        employeeCount: 1000,
        description: "亚太及中国区前沿美妆科研与测试中心",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 188 号 / 欧莱雅苏州尚美制造基地",
        employeeCount: 2000,
        description: "全球领先的绿色智能化妆品生产与供应链基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心",
        employeeCount: 600,
        description: "北方大区商务与销售运营中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC)",
        employeeCount: 600,
        description: "南方大区商务与销售运营中心",
      },
    ],
    careerWebsite: "https://www.loreal.com",
    linkedin: "loreal",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "edrawsoft-cn",
    name: {
      en: "EdrawSoft",
      zh: "亿图软件",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新南十道 6 号深圳市软件产业基地 / 亿图软件（EdrawSoft）深圳总部",
        employeeCount: 400,
        description: "全球运营总部、品牌营销与核心业务管理中枢",
      },
      {
        city: C.changsha,
        district: "岳麓区",
        address: "麓谷高新区欣盛路 709 号软件园 / 亿图长沙研发与技术支持中心",
        employeeCount: 600,
        description: "核心图形渲染引擎、跨平台客户端研发与技术支持中心",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 北方大区商务与企业级服务中心",
        employeeCount: 150,
        description: "北方大区政企客户数字化协同解决方案与大客户服务中心",
      },
    ],
    careerWebsite: "https://www.edrawsoft.com",
    linkedin: "edrawsoft",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 5,
    },
  },
  {
    id: "western-digital-cn",
    name: {
      en: "Western Digital",
      zh: "西部数据",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "长宁路 1018 号龙之梦大厦 / 西部数据中国区总部",
        employeeCount: 1000,
        description: "中国区总部及商业运营管理中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区碧波路 / 西部数据上海研发中心",
        employeeCount: 800,
        description: "存储技术、固态硬盘（SSD）与闪存系统研发中心",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 6003 号新时代广场 / 华南大区销售与技术支持办公室",
        employeeCount: 400,
        description: "华南大区业务、渠道分销与客户技术支持中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心",
        employeeCount: 300,
        description: "北方大区业务、政企客户及渠道管理办公室",
      },
    ],
    careerWebsite: "https://www.westerndigital.com",
    linkedin: "western-digital",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "dolby-cn",
    name: {
      en: "Dolby",
      zh: "杜比",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "光华路 1 号北京嘉里中心 / 杜比实验室中国总部",
        employeeCount: 400,
        description: "中国区总部及杜比影院/全景声技术体验与商务运营中心",
      },
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 333 号中环广场 / 杜比上海分公司与技术研发支持中心",
        employeeCount: 300,
        description: "华东大区业务运营、内容创作合作伙伴支持与技术研发中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "科苑南路高新园区 / 华南大区硬件与消费电子授权合作办公室",
        employeeCount: 150,
        description: "华南消费电子厂商技术授权、音视频测试与生态合作中心",
      },
    ],
    careerWebsite: "https://www.dolby.com",
    linkedin: "dolby",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "logitech-cn",
    name: {
      en: "Logitech",
      zh: "罗技",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 222 号力宝广场 / 罗技中国区总部",
        employeeCount: 800,
        description: "中国区总部及核心市场营销、电商运营与商务管理中枢",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 188 号 / 罗技苏州生产与物流基地",
        employeeCount: 3000,
        description: "全球最大的核心外设制造、供应链与自动化生产基地",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区南区 / 华南大区业务与硬件生态合作办公室",
        employeeCount: 300,
        description: "华南大区渠道分销、消费电子品牌合作及技术支持中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 88 号现代城 / 北方大区商务与零售运营中心",
        employeeCount: 200,
        description: "北方大区业务开拓、大客户及政企采购服务中心",
      },
    ],
    careerWebsite: "https://www.logitech.com",
    linkedin: "logitech",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "phoenix-contact-cn",
    name: {
      en: "Phoenix Contact",
      zh: "菲尼克斯电气",
    },
    region: "CN",
    offices: [
      {
        city: C.nanjing,
        district: "江宁开发区",
        address: "菲尼克斯路 36 号 / 菲尼克斯（中国）投资有限公司总部",
        employeeCount: 2500,
        description: "中国区总部、亚太区物流中心及全球核心智能制造基地",
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "中山西路 1065 号中信广场 / 菲尼克斯华东大区办事处",
        employeeCount: 400,
        description: "华东大区工业自动化与电气联接技术销售与服务中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 39 号建外SOHO / 菲尼克斯北方大区办事处",
        employeeCount: 300,
        description: "北方大区业务运营、政企合作与新能源行业支持中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 菲尼克斯华南大区办事处",
        employeeCount: 300,
        description: "华南大区电子制造、智能装备及嵌入式系统技术支持中心",
      },
    ],
    careerWebsite: "https://www.phoenixcontact.com",
    linkedin: "phoenix-contact",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "rockwell-automation-cn",
    name: {
      en: "Rockwell Automation",
      zh: "罗克韦尔自动化",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "金钟路 968 号临空经济园区 / 罗克韦尔自动化中国区总部",
        employeeCount: 2000,
        description: "中国区总部、软件研发中心及智能制造演示体验中心",
      },
      {
        city: C.shanghai,
        district: "松江区",
        address: "出口加工区南通路 / 罗克韦尔自动化松江制造基地",
        employeeCount: 1500,
        description: "工业自动化硬件、控制器及传感器核心生产与供应链基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路 5 号北京发展大厦 / 北方大区业务与行业解决方案中心",
        employeeCount: 500,
        description: "北方大区能源、石化及重工业客户支持与业务运营中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区南区 / 华南大区技术服务与数字化创新中心",
        employeeCount: 400,
        description: "华南大区电子制造、智能装备及OEM客户服务中心",
      },
    ],
    careerWebsite: "https://www.rockwellautomation.com",
    linkedin: "rockwell-automation",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "sagemcom-cn",
    name: {
      en: "Sagemcom",
      zh: "萨基姆通讯",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区南区 / 萨基姆通讯深圳办事处与技术支持中心",
        employeeCount: 200,
        description: "华南大区终端产品硬件测试、供应链协作与技术支持中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 萨基姆通讯华东业务与通信技术支持办公室",
        employeeCount: 150,
        description: "华东大区通信设备、物联网模组及机顶盒业务协作中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 萨基姆通讯中国区商务联络与运营商合作办公室",
        employeeCount: 100,
        description: "中国区整体商务战略、电信运营商及政企大客户联络中心",
      },
    ],
    careerWebsite: "https://www.sagemcom.com",
    linkedin: "sagemcom",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "eli-lilly-cn",
    name: {
      en: "Eli Lilly",
      zh: "礼来",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "科苑路 399 号张江创新园区 / 礼来中国总部与研发中心",
        employeeCount: 2500,
        description: "中国区总部、商业运营指挥中枢及早期临床研发中心",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 188 号 / 礼来苏州制药厂",
        employeeCount: 1200,
        description: "现代化无菌注射剂与固体制剂先进制造与供应基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心",
        employeeCount: 800,
        description: "北方大区商务运营、医学事务与政策准入中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC)",
        employeeCount: 500,
        description: "南方大区商业拓展与医学及销售支持办公室",
      },
    ],
    careerWebsite: "https://www.lilly.com",
    linkedin: "eli-lilly-and-company",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "johnson-johnson-cn",
    name: {
      en: "Johnson & Johnson",
      zh: "强生",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "西岸传媒港 / 强生中国总部",
        employeeCount: 4000,
        description: "中国区总部及强生创新中心 (JLABS) 与商业运营中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区荣科路 / 强生（中国）医疗器械有限公司研发与制造基地",
        employeeCount: 2500,
        description: "先进医疗器械与外科手术耗材研发及智能制造基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "光华路 1 号北京嘉里中心",
        employeeCount: 1200,
        description: "北方大区业务运营、医学事务与政策准入中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC)",
        employeeCount: 900,
        description: "南方大区医疗科技与制药业务商业运营办公室",
      },
    ],
    careerWebsite: "https://www.jnj.com",
    linkedin: "johnson--johnson",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "henkel-cn",
    name: {
      en: "Henkel",
      zh: "汉高",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "杨浦区",
        address: "江湾城路 99 号尚浦中心 / 汉高中国总部",
        employeeCount: 3000,
        description: "中国区总部、亚太区粘合剂技术创新研发中心与商业管理中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 汉高消费品及美容化妆品研发与测试中心",
        employeeCount: 1000,
        description: "美发、个人护理及家用消费品前沿配方与应用研发中心",
      },
      {
        city: C.shanghai,
        district: "奉贤区",
        address: "星火开发区 / 汉高上海制造与供应链基地",
        employeeCount: 1500,
        description: "高性能粘合剂、密封剂及表面处理产品核心智能生产与物流基地",
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "科学城 / 汉高华南粘合剂技术生产与应用中心",
        employeeCount: 800,
        description: "华南大区工业粘合剂制造、客户技术支持与应用实验室",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心",
        employeeCount: 500,
        description: "北方大区商务运营、汽车及工业客户解决方案支持中心",
      },
    ],
    careerWebsite: "https://www.henkel.com",
    linkedin: "henkel",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "basf-cn",
    name: {
      en: "BASF",
      zh: "巴斯夫",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "江心沙路 300 号 / 巴斯夫中国总部暨创新园（上海）",
        employeeCount: 4500,
        description: "大中华区总部、亚太区核心研发枢纽与商业运营中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "高桥化工区 / 巴斯夫上海高桥生产基地",
        employeeCount: 1500,
        description: "聚氨酯、汽车涂料及高性能精细化学品制造与供应链基地",
      },
      {
        city: C.nanjing,
        district: "化工园区",
        address: "方水路 300 号 / 杨子石化-巴斯夫有限责任公司",
        employeeCount: 2000,
        description: "大型一体化石化生产基地与联合生产合资项目中心",
      },
      {
        city: C.zhanjiang,
        district: "东海岛",
        address: "巴斯夫一体化基地项目区 / 巴斯夫湛江一体化基地",
        employeeCount: 3000,
        description: "全球领先的智能、低碳一体化化工生产与制造基地（百亿级重点项目）",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 5 号财富金融中心",
        employeeCount: 500,
        description: "北方大区商务运营、政企合作与行业解决方案中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城高德置地广场",
        employeeCount: 600,
        description: "华南大区商务运营与涂料、工程塑料客户技术支持中心",
      },
    ],
    careerWebsite: "https://www.basf.com",
    linkedin: "basf",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "harman-cn",
    name: {
      en: "Harman",
      zh: "哈曼",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 1010 号太平洋百货 / 哈曼中国总部与旗舰展厅",
        employeeCount: 1500,
        description: "大中华区总部、豪华汽车音响与消费电子研发及商业运营中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "金桥开发区 / 哈曼（中国）汽车电子研发中心",
        employeeCount: 1200,
        description: "车载信息娱乐系统、数字座舱与车联网软硬件核心研发中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 哈曼华南音频与消费电子技术支持办公室",
        employeeCount: 400,
        description: "华南大区声学工程、便携式音响及车载音响OEM生态合作中心",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 / 哈曼苏州智能制造与供应链基地",
        employeeCount: 2000,
        description: "全球顶尖车载音响系统、扬声器及专业音响核心智能制造基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 / 哈曼北方大区汽车客户服务与商务中心",
        employeeCount: 300,
        description: "北方大区车企客户技术对接、售后及专业音响工程方案中心",
      },
    ],
    careerWebsite: "https://www.harman.com",
    linkedin: "harman-international",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "dhl-cn",
    name: {
      en: "DHL",
      zh: "敦豪",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环北路甲 2 号京信大厦 / 中外运-敦豪 (DHL-Sinotrans) 中国总部",
        employeeCount: 3000,
        description: "中国区总部及核心商务、国际快递网络运营管理中枢",
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "迎宾一路 200 号 / 敦豪全球货运 (DHL Global Forwarding) 大中华区总部",
        employeeCount: 2500,
        description: "大中华区海运、空运及复杂供应链货运物流调度与管理中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "浦东国际机场核心物流园区 / DHL 浦东国际航空快件枢纽",
        employeeCount: 2000,
        description: "华东及国际核心航空货运转运中心、海关监管与分拣基地",
      },
      {
        city: C.guangzhou,
        district: "花都区",
        address: "广州白云国际机场 / DHL 华南航空快件转运中心",
        employeeCount: 1500,
        description: "华南地区国际快递分拨、仓储及航空物流枢纽",
      },
      {
        city: C.shenzhen,
        district: "宝安区",
        address: "深圳宝安国际机场物流区 / 敦豪华南供应链与跨境电商物流中心",
        employeeCount: 1200,
        description: "华南大区跨境电商物流、仓储配送及科技制造供应链服务中心",
      },
    ],
    careerWebsite: "https://www.dhl.com",
    linkedin: "dhl",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "msd-cn",
    name: {
      en: "MSD",
      zh: "默沙东",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "中山东二路 600 号外滩金融中心 (BFC) / 默沙东中国总部",
        employeeCount: 3500,
        description: "中国区总部、商业运营指挥中枢、医学事务与产品战略管理中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "光华路 1 号北京嘉里中心 / 默沙东北京分公司",
        employeeCount: 1500,
        description: "北方大区业务运营、政企合作、疫苗及创新药政策准入中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC) / 默沙东广州办事处",
        employeeCount: 1000,
        description: "南方大区商业拓展、临床研究支持与医学信息交流中心",
      },
      {
        city: C.hangzhou,
        district: "上城区",
        address: "钱江新城核心商务区 / 默沙东杭州运营支持中心",
        employeeCount: 800,
        description: "华东区域商业支持、数字化营销与客户服务分中心",
      },
    ],
    careerWebsite: "https://www.msd.com",
    linkedin: "merck-sharp-and-dohme-corp",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "merck-cn",
    name: {
      en: "Merck",
      zh: "默克",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区盛夏路 399 号 / 默克中国总部暨生命科学与电子科技研发中心",
        employeeCount: 3000,
        description: "中国区总部、生命科学实验室、半导体材料研发中心与商业运营中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区药谷核心区 / 默克中国医药健康研发与运营中心",
        employeeCount: 1500,
        description: "医药健康业务板块、临床研究、医学事务与商务运营中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心 / 默克北方大区办公室",
        employeeCount: 800,
        description: "北方大区医药健康及多元化科技业务、政企合作与政策准入中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城高德置地广场 / 默克华南大区商务中心",
        employeeCount: 600,
        description: "华南大区生命科学试剂、化工材料与医药产品技术支持及销售中心",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "金鸡湖大道 / 默克苏州生命科学应用与培训中心",
        employeeCount: 400,
        description: "生物制药工艺研发支持、客户培训与耗材应用交付中心",
      },
    ],
    careerWebsite: "https://www.merckgroup.com",
    linkedin: "merckgroup",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "desmi-cn",
    name: {
      en: "Desmi",
      zh: "代斯米",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "外高桥保税区富特北路 / 代斯米（上海）机械设备有限公司总部",
        employeeCount: 300,
        description: "中国区总部、亚太区仓储物流中心与成套泵系统技术组装基地",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 / 代斯米苏州生产与技术支持分中心",
        employeeCount: 200,
        description: "工业流体设备、船用泵及压载水处理系统核心零部件加工与技术支持中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "蛇口海运路 / 代斯米华南海洋工程与船舶服务办公室",
        employeeCount: 100,
        description: "华南大区船舶装备、海洋工程流体方案与售后技术服务中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 / 代斯米北方大区业务联络与工业泵技术支持中心",
        employeeCount: 805,
        description: "北方大区工业、市政及能源行业水泵系统业务开拓与客户支持中心",
      },
    ],
    careerWebsite: "https://www.desmi.com",
    linkedin: "desmi",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "grundfos-cn",
    name: {
      en: "Grundfos",
      zh: "格兰富",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "闵行区",
        address: "莘庄工业区金都路 2900 号 / 格兰富中国总部",
        employeeCount: 1500,
        description: "大中华区总部、高级水泵研发中心、数字化运营与客户体验中心",
      },
      {
        city: C.shanghai,
        district: "闵行区",
        address: "莘庄工业区 / 格兰富上海水泵制造基地",
        employeeCount: 1200,
        description: "高效节能智能水泵、成套供水设备核心生产与绿色智造基地",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 / 格兰富苏州生产及供应链分中心",
        employeeCount: 800,
        description: "工业流体系统零部件加工、电机装配与华东仓储物流枢纽",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心 / 格兰富北方大区办事处",
        employeeCount: 400,
        description: "北方大区暖通空调、市政给排水及建筑服务业务支持与政企合作中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 格兰富华南大区办事处",
        employeeCount: 350,
        description: "华南大区商业建筑、工业水处理及供水系统项目技术支持与销售中心",
      },
    ],
    careerWebsite: "https://www.grundfos.com",
    linkedin: "grundfos",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "atlas-copco-cn",
    name: {
      en: "Atlas Copco",
      zh: "阿特拉斯・科普柯",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "南京西路核心商务区",
        address: "南京西路 1288 号 / 阿特拉斯·科普柯（中国）投资有限公司总部",
        employeeCount: 2000,
        description: "大中华区总部、商务运营指挥中枢及多业务板块联合管理中心",
      },
      {
        city: C.wuxi,
        district: "新吴区",
        address: "无锡国家高新技术产业开发区 / 阿特拉斯·科普柯无锡制造基地",
        employeeCount: 2500,
        description: "全球领先的空气压缩机、工业气体设备及动力技术核心智造与研发基地",
      },
      {
        city: C.nanjing,
        district: "江宁开发区",
        address: "菲尼克斯路 / 阿特拉斯·科普柯南京工业工具与装配系统制造基地",
        employeeCount: 1200,
        description: "气动与电动工业工具、质量保证系统及智能装配解决方案制造中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 5 号财富金融中心 / 北方大区业务与矿山工程服务中心",
        employeeCount: 600,
        description: "北方大区压缩机技术、建筑与矿山业务及重工业客户支持中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 华南大区真空技术与工业解决方案中心",
        employeeCount: 500,
        description: "华南大区电子半导体真空设备、通用工业及新能源制造支持中心",
      },
    ],
    careerWebsite: "https://www.atlascopco.com",
    linkedin: "atlas-copco",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "sensirion-cn",
    name: {
      en: "Sensirion",
      zh: "盛思锐",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "仙霞路 318 号远东国际广场 / 盛思锐贸易（上海）有限公司总部",
        employeeCount: 250,
        description: "中国区总部、亚太区商务运营、市场营销及核心应用技术支持中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 盛思锐深圳分公司与华南技术支持中心",
        employeeCount: 150,
        description: "华南大区消费电子、汽车电子、物联网及智能硬件客户嵌入式研发支持中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 / 盛思锐北方大区办事处",
        employeeCount: 60,
        description: "北方大区仪器仪表、医疗器械、HVAC暖通空调行业客户支持与商务联络中心",
      },
    ],
    careerWebsite: "https://www.sensirion.com",
    linkedin: "sensirion",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "tetra-pak-cn",
    name: {
      en: "Tetra Pak",
      zh: "利乐",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "虹桥路 1488 号 / 利乐中国大中华区总部",
        employeeCount: 3000,
        description: "大中华区总部、包装解决方案研发中心、数字化运营与客户体验中心",
      },
      {
        city: C.kunshan,
        district: "昆山经济技术开发区",
        address: "昆山开发区前进东路 / 利乐包装（昆山）有限公司",
        employeeCount: 2000,
        description: "全球领先的无菌纸包装材料大型智能制造与印刷生产基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 利乐中国北京分公司",
        employeeCount: 1000,
        description: "北方大区乳品与饮料客户商务支持、政策法规与可持续发展合作中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 利乐华南大区客户服务与技术支持中心",
        employeeCount: 800,
        description: "华南大区液态食品加工设备、灌装技术服务与包材物流中心",
      },
      {
        city: C.huhehaote,
        district: "赛罕区",
        address: "呼和浩特经济技术开发区 / 利乐呼和浩特包装材料厂",
        employeeCount: 600,
        description: "华北大型乳制品产业集群配套的无菌纸包装材料生产与供应链基地",
      },
    ],
    careerWebsite: "https://www.tetrapak.com",
    linkedin: "tetra-pak",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "pcb-connect-cn",
    name: {
      en: "PCB Connect",
      zh: "PCB Connect",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "宝安区",
        address: "福永街道 / PCB Connect 中国采购与技术支持中心",
        employeeCount: 80,
        description: "中国区总部、供应链管理、供应商质量审核、CAM工程支持与物流枢纽",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / PCB Connect 华东技术服务与业务联络处",
        employeeCount: 40,
        description: "华东大区客户支持、样板快速响应与印制电路板供应链协作中心",
      },
    ],
    careerWebsite: "https://www.pcb-connect.com",
    linkedin: "pcb-connect",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "buhler-cn",
    name: {
      en: "Buhler",
      zh: "布勒",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "松江区",
        address: "泗泾镇九干路 168 号 / 布勒（中国）投资有限公司总部",
        employeeCount: 2500,
        description: "大中华区总部、应用研发中心、粮油加工与压铸技术创新基地",
      },
      {
        city: C.wuxi,
        district: "新吴区",
        address: "无锡国家高新技术产业开发区 / 布勒无锡制造基地",
        employeeCount: 1500,
        description: "高精度面粉磨机、饲料加工设备及粮油仓储工程核心制造与装配基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心 / 布勒北方大区办事处",
        employeeCount: 300,
        description: "北方大区粮食加工、食品工程及压铸客户业务拓展与服务中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 布勒华南大区技术支持与商务中心",
        employeeCount: 250,
        description: "华南大区巧克力、糖果加工设备及消费品工程技术支持中心",
      },
    ],
    careerWebsite: "https://www.buhlergroup.com",
    linkedin: "buhler-group",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "mastercard-cn",
    name: {
      en: "Mastercard",
      zh: "万事达",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "西城区",
        address: "武定侯街 6 号卓著中心 / 万事网联中国总部",
        employeeCount: 400,
        description: "万事达卡与网联清算公司合资机构（万事网联）总部与国内银行卡清算业务运营中枢",
      },
      {
        city: C.beijing,
        district: "东城区",
        address: "建国门北大街 8 号华润大厦 / 万事达卡北京分公司",
        employeeCount: 300,
        description: "北方大区业务运营、政府事务、政策准入与机构合作中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 8 号上海国金中心 (IFC) 二期 / 万事达卡上海分公司",
        employeeCount: 500,
        description: "中国区核心商务运营、金融科技合作、跨境支付与商户拓展中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "天河北路 233 号中信广场 / 万事达卡广州办事处",
        employeeCount: 200,
        description: "华南大区业务拓展、收单机构服务与数字支付解决方案支持中心",
      },
    ],
    careerWebsite: "https://www.mastercard.com",
    linkedin: "mastercard",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "visa-cn",
    name: {
      en: "Visa",
      zh: "维萨",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 100 号上海环球金融中心 (SWFC) / 维萨中国总部",
        employeeCount: 600,
        description: "大中华区总部、商务拓展中心、支付创新实验室与发卡/收单业务枢纽",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸大厦 / 维萨北京分公司",
        employeeCount: 400,
        description: "北方大区商务运营、政府事务、监管合规与机构合作伙伴关系中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC) / 维萨广州办事处",
        employeeCount: 200,
        description: "华南大区跨境旅游支付、商户生态合作与收单行技术支持中心",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道协同商务区 / 维萨深圳金融科技服务分中心",
        employeeCount: 150,
        description: "华南大区金融科技、跨境电商支付解决方案与大湾区业务创新支持中心",
      },
    ],
    careerWebsite: "https://www.visa.com",
    linkedin: "visa",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "zeiss-cn",
    name: {
      en: "Zeiss",
      zh: "蔡司",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "自由贸易试验区",
        address: "美盛路 88 号 / 卡尔·蔡司（上海）管理有限公司",
        employeeCount: 3500,
        description: "大中华区总部、创新研发中心、半导体制造光学技术与客户体验中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 蔡司医疗器械（中国）研发与运营基地",
        employeeCount: 1200,
        description: "眼科诊断与显微外科手术医疗设备核心研发、技术支持及临床培训中心",
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "广州科学城 / 蔡司华南工业测量与质量显微镜应用中心",
        employeeCount: 500,
        description: "华南大区三坐标测量机、工业显微镜质量控制与精密制造检测支持中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 / 蔡司北方大区商务与视力保健解决方案中心",
        employeeCount: 600,
        description: "北方大区眼视光及消费光学产品（镜头、眼镜片）商务运营与政企合作中心",
      },
      {
        city: C.dongguan,
        district: "松山湖高新区",
        address: "松山湖科技产业园区 / 蔡司光学科技（东莞）制造基地",
        employeeCount: 1500,
        description: "华南大区高端眼镜镜片及光学零部件大规模智能化生产与供应链基地",
      },
    ],
    careerWebsite: "https://www.zeiss.com",
    linkedin: "zeiss",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "thermo-fisher-cn",
    name: {
      en: "Thermo Fisher",
      zh: "赛默飞",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "新金桥路 27 号 / 赛默飞世尔科技（中国）有限公司总部",
        employeeCount: 4000,
        description: "大中华区总部、中国创新中心、客户体验中心及生命科学与分析仪器应用研发枢纽",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 赛默飞中国临床试剂与实验室产品制造基地",
        employeeCount: 2000,
        description: "分子生物学试剂、细胞培养基、实验室耗材及体外诊断产品核心生产基地",
      },
      {
        city: C.beijing,
        district: "昌平区",
        address: "中关村生命科学园 / 赛默飞北京科技园区与基因测序应用中心",
        employeeCount: 1500,
        description: "北方大区精密质谱仪、基因测序技术支持、科研项目合作及临床医学服务中心",
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "广州科学城 / 赛默飞华南生物制药工艺与医疗器械技术支持中心",
        employeeCount: 1000,
        description: "华南大区生物制药生产工艺支持、实验室分析仪器展厅及客户服务中心",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹东路 / 赛默飞苏州实验室智能化设备制造与物流基地",
        employeeCount: 1200,
        description:
          "实验室离心机、培养箱、超低温冰箱等常规实验室温控设备的全球智能制造与供应链中心",
      },
    ],
    careerWebsite: "https://www.thermofisher.com",
    linkedin: "thermo-fisher-scientific",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "mettler-toledo-cn",
    name: {
      en: "Mettler Toledo",
      zh: "梅特勒托利多",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "桂桥路 589 号 / 梅特勒托利多（中国）总部",
        employeeCount: 3500,
        description: "大中华区总部、研发中心、精密天平与实验室分析仪器制造基地",
      },
      {
        city: C.changzhou,
        district: "新北区",
        address: "珠江路 / 梅特勒托利多常州工业称重制造基地",
        employeeCount: 3000,
        description: "全球最大的工业衡器、地磅、称重传感器及过程称重系统智造与研发基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 / 梅特勒托利多北京分公司",
        employeeCount: 800,
        description: "北方大区制药、食品、化工行业实验室仪器与工业称重系统技术支持中心",
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "广州科学城 / 梅特勒托利多华南应用中心",
        employeeCount: 700,
        description: "华南大区滴定仪、pH计、热分析仪器及在线检测设备客户服务与销售中心",
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府软件园 / 梅特勒托利多西南大区技术支持中心",
        employeeCount: 400,
        description: "西南大区电子秤、工业称重及零售称重管理系统业务拓展与售后中心",
      },
    ],
    careerWebsite: "https://www.mt.com",
    linkedin: "mettler-toledo",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "olympus-cn",
    name: {
      en: "Olympus",
      zh: "奥林巴斯",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "新源南路 1-3 号平安国际金融中心 A 座 8 层 / 奥林巴斯（中国）有限公司总部",
        employeeCount: 1500,
        description: "中国区总部、医疗业务统筹、企业战略规划与行政管理中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "酒仙桥路 10 号恒通国际商务园 / 奥林巴斯中国医疗技术培训中心 (C-TEC)",
        employeeCount: 400,
        description: "国家级医护人员内镜诊疗微创手术培训、临床技术支持与学术交流中心",
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "淮海中路 1010 号嘉华中心 / 奥林巴斯上海分公司与科学显微镜业务中心",
        employeeCount: 800,
        description: "华东大区医疗设备、显微镜与工业影像业务支持、客户服务及生命科学应用中心",
      },
      {
        city: C.guangzhou,
        district: "越秀区",
        address: "环市东路 403 号广州国际电子大厦 / 奥林巴斯华南分公司及羊城培训基地",
        employeeCount: 500,
        description: "华南大区医疗内镜系统售后维修、临床技术支持与华南医学培训基地",
      },
    ],
    careerWebsite: "https://www.olympus.com",
    linkedin: "olympus",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "fluke-cn",
    name: {
      en: "Fluke",
      zh: "福禄克",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "淮海中路 999 号环贸广场 / 福禄克（中国）有限公司大中华区总部",
        employeeCount: 1200,
        description: "大中华区总部、商务运营、市场营销指挥中心及高端电子测试工具研发应用枢纽",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 福禄克上海校准与精密测量技术中心",
        employeeCount: 400,
        description: "电气、温度、压力及射频校准仪器实验室与技术支持中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 福禄克北京分公司",
        employeeCount: 350,
        description: "北方大区电力、通信网络测试、工业运维及政企客户支持与销售中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 福禄克深圳华南测试技术服务中心",
        employeeCount: 300,
        description: "华南大区电子制造、半导体及新能源测试解决方案与售后校准服务中心",
      },
    ],
    careerWebsite: "https://www.fluke.com",
    linkedin: "fluke-corporation",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "juniper-cn",
    name: {
      en: "Juniper Networks",
      zh: "瞻博",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 5 号财富金融中心 / 瞻博网络（中国）有限公司总部",
        employeeCount: 800,
        description: "中国区总部、高级网络架构研发中心、企业战略与大中华区商务运营中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 8 号上海国金中心 (IFC) / 瞻博网络上海分公司",
        employeeCount: 600,
        description: "华东大区金融、运营商与互联网大客户技术支持、云架构解决方案中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 瞻博网络深圳分公司与华南技术支持中心",
        employeeCount: 400,
        description: "华南大区高科技企业、大湾区数据中心与AI驱动网络（Mist AI）业务拓展中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 / 瞻博网络广州办事处",
        employeeCount: 200,
        description: "华南政企、教育及医疗行业网络基础设施建设与客户售后服务中心",
      },
    ],
    careerWebsite: "https://www.juniper.net",
    linkedin: "juniper-networks",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "commscope-cn",
    name: {
      en: "CommScope",
      zh: "康普",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "淮海中路 999 号环贸广场 / 康普（中国）大中华区总部",
        employeeCount: 600,
        description: "大中华区总部、商务运营指挥中心、市场营销及企业级网络解决方案支持枢纽",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "苏虹西路 68 号 / 康普通讯技术（中国）有限公司",
        employeeCount: 1500,
        description: "全球核心宽带通信设备、光纤电缆、无线网络基础设施及大容量智造与亚太物流基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 康普北京分公司",
        employeeCount: 300,
        description: "北方大区电信运营商业务、政企合作、数据中心及无线蜂窝网络技术支持中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 康普深圳分公司",
        employeeCount: 250,
        description: "华南大区企业网、智慧园区、数据中心布线及 Ruckus Wi-Fi 网络解决方案支持中心",
      },
    ],
    careerWebsite: "https://www.commscope.com",
    linkedin: "commscope",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "jll-cn",
    name: {
      en: "JLL",
      zh: "仲量联行",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 100 号上海环球金融中心 (SWFC) / 仲量联行中国总部",
        employeeCount: 4000,
        description: "大中华区总部、房地产投资咨询、资产管理、物业与设施管理服务运营指挥中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号北京财富中心 / 仲量联行华北区总部",
        employeeCount: 2500,
        description: "华北区商业地产顾问、企业房地产租户代表服务、项目管理与估价咨询中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC) / 仲量联行华南区总部",
        employeeCount: 2000,
        description: "华南大区商业办公楼租赁、大宗交易、资产及物业管理综合解决方案中心",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道华润大厦 / 仲量联行深圳分公司",
        employeeCount: 1500,
        description: "粤港澳大湾区科技园区物业管理、产业地产、跨境房地产投资与咨询服务中心",
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "红星路三段国际金融中心 (IFS) / 仲量联行华西区总部",
        employeeCount: 800,
        description: "华西大区核心零售商业地产策划、写字楼租售及城市更新顾问服务中心",
      },
    ],
    careerWebsite: "https://www.jll.com",
    linkedin: "jll",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "cbre-cn",
    name: {
      en: "CBRE",
      zh: "世邦魏理仕",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1515 号静安嘉里中心 / 世邦魏理仕中国总部",
        employeeCount: 4500,
        description: "大中华区总部、战略咨询、资本市场投资、产业地产与商业运营指挥中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 2 号中国世界贸易中心 / 世邦魏理仕华北区总部",
        employeeCount: 3000,
        description: "华北区大宗交易、企业房地产服务、估价及资产管理服务中心",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "益田路 5033 号平安金融中心 / 世邦魏理仕深圳分公司",
        employeeCount: 2200,
        description: "大湾区核心科技园区、高端写字楼租赁、跨境投资及设施管理服务中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江西路 5 号广州国际金融中心 (IFC) / 世邦魏理仕华南区总部",
        employeeCount: 1800,
        description: "华南大区商业地产顾问、零售地产服务及物业资产管理中心",
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "东大街下东大街段 99 号平安金融中心 / 世邦魏理仕华西区总部",
        employeeCount: 1000,
        description: "华西大区商业地产投资咨询、写字楼租售及城市更新服务中心",
      },
    ],
    careerWebsite: "https://www.cbre.com",
    linkedin: "cbre",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "stryker-cn",
    name: {
      en: "Stryker",
      zh: "史赛克",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 381 号中环广场 / 史赛克（中国）医疗有限公司总部",
        employeeCount: 3000,
        description: "大中华区总部、商务运营指挥中心、骨科与医疗设备战略规划中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 史赛克中国创新中心与医疗技术培训基地",
        employeeCount: 1200,
        description: "外科手术动力装置、神经与脊柱微创产品研发、临床应用培训与客户体验中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 / 史赛克北京分公司",
        employeeCount: 800,
        description: "北方大区骨科关节、创伤及脊柱植入物医疗器械商务拓展与政企合作中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 史赛克华南大区客户服务与医疗设备支持中心",
        employeeCount: 600,
        description: "华南大区内窥镜、手术室设备、医用床车及骨科手术机器人技术支持与售后中心",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "唯亭镇金鸡湖大道 / 史赛克苏州医疗器械制造基地",
        employeeCount: 1500,
        description: "高端骨科植入物、人工关节及微创手术耗材的大规模精密智能制造与全球供应链基地",
      },
    ],
    careerWebsite: "https://www.stryker.com",
    linkedin: "stryker",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "medtronic-cn",
    name: {
      en: "Medtronic",
      zh: "美敦力",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "中科路 880 号 / 美敦力（上海）管理有限公司",
        employeeCount: 4500,
        description:
          "大中华区总部、美敦力中国研发中心、创新体验中心及心脏与血管、微创治疗业务运营中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 美敦力医疗器械制造（上海）有限公司",
        employeeCount: 2000,
        description: "心血管起搏器、神经刺激器及高端植入式医疗电子设备的亚太区核心智能制造基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京科技园 / 美敦力北京分公司与北方大区临床技术支持中心",
        employeeCount: 1500,
        description: "北方大区脊柱、骨科、糖尿病及外科手术导航设备临床应用、学术推广与客户服务中心",
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "广州科学城 / 美敦力华南大区医疗科技服务与商务中心",
        employeeCount: 1000,
        description: "华南大区心血管介入、微创手术器械及医院整体解决方案客户支持与物流分拨中心",
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府软件园 / 美敦力西南大区技术支持中心",
        employeeCount: 600,
        description: "西南大区医疗设备应用、临床医师培训与学术交流支持中心",
      },
    ],
    careerWebsite: "https://www.medtronic.com",
    linkedin: "medtronic",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "karl-storz-cn",
    name: {
      en: "Karl Storz",
      zh: "卡尔史托斯",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "中国（上海）自由贸易试验区张东路 1761 号 7、8 幢 / 卡尔史托斯中国中心",
        employeeCount: 1500,
        description: "大中华区总部、客户服务、产品资讯、医疗学术培训与售后维修枢纽",
      },
      {
        city: C.shanghai,
        district: "松江区",
        address: "中创路 68 号 / 卡尔史托斯内窥镜技术（上海）有限公司",
        employeeCount: 600,
        description: "亚太地区首个生产与智造基地，专注于高品质医用内窥镜及相关器械制造",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address:
          "建国门外大街 8 号北京国际俱乐部有限责任公司北京财富中心写字楼 B 座 / 卡尔史托斯北京分公司",
        employeeCount: 400,
        description: "北方大区医疗内镜业务拓展、临床技术支持、学术研讨与客户服务中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "天河路 208 号粤海天河城大厦 / 卡尔史托斯广州分公司",
        employeeCount: 350,
        description: "华南大区微创外科内镜产品销售、临床应用培训与售后技术支持中心",
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "商业场街 / 卡尔史托斯成都分公司",
        employeeCount: 200,
        description: "华西大区微创外科、显微外科及动物医学内镜解决方案与客户支持中心",
      },
    ],
    careerWebsite: "https://www.karlstorz.com",
    linkedin: "karl-storz",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "skyscanner-cn",
    name: {
      en: "Skyscanner",
      zh: "天巡",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区腾讯大厦 / 天巡网深圳研发与运营中心",
        employeeCount: 300,
        description: "大中华区总部、全球机票搜索引擎核心技术研发、中文本土化产品创新与流量运营枢纽",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 / 天巡网北京商务拓展中心",
        employeeCount: 150,
        description:
          "北方大区国际航空公司合作、OTA（在线旅游平台）渠道伙伴关系与旅游大数据分析中心",
      },
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 / 天巡网上海分公司",
        employeeCount: 100,
        description: "华东大区旅游产业链商业拓展、品牌营销与跨境航司合作中心",
      },
    ],
    careerWebsite: "https://www.skyscanner.com",
    linkedin: "skyscanner",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "zuru-cn",
    name: {
      en: "ZURU",
      zh: "ZURU",
    },
    region: "CN",
    offices: [
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城高德置地广场 / 筑瑞（中国）大中华区总部",
        employeeCount: 800,
        description:
          "大中华区总部、全球玩具与消费品概念设计、IP 授权合作、市场营销与亚太区供应链运营指挥中枢",
      },
      {
        city: C.shenzhen,
        district: "龙岗区",
        address: "平湖街道跨境电商产业园 / 筑瑞深圳研发与质检分中心",
        employeeCount: 500,
        description: "智能玩具、盲盒潮流产品、自动化模具制造工艺研发及出海供应链质量控制中心",
      },
      {
        city: C.dongguan,
        district: "凤岗镇",
        address: "雁田村工业园区 / ZURU 华南联合智造与快速打样基地",
        employeeCount: 2500,
        description:
          "全球爆款玩具（如 Bunch O Balloons、Rainbocorns、Mini Brands 等）自动化生产、精密模具注塑与全球物流分拨中心",
      },
      {
        city: C.hongkong,
        district: "尖沙咀",
        address: "海港城世界商业中心 / ZURU 亚太区贸易与金融结算总部",
        employeeCount: 300,
        description:
          "亚太区国际贸易结算、全球大客户关系管理、海外零售巨头（Walmart, Target 等）供应链协同与财务管理中心",
      },
    ],
    careerWebsite: "https://www.zuru.com",
    linkedin: "zuru",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "amex-cn",
    name: {
      en: "American Express",
      zh: "美国运通",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 333 号香港广场 / 美国运通中国总部",
        employeeCount: 1500,
        description: "大中华区总部、商务运营指挥中心、高端信用卡及数字化支付业务核心研发与管理中枢",
      },
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "外滩 / 美国运通中国合资银行卡清算机构（连通技术服务有限公司）",
        employeeCount: 800,
        description: "国内首家获批开业的外外合资银行卡清算机构核心运营、清算网络与商户收单服务中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 美国运通北京分公司",
        employeeCount: 500,
        description:
          "北方大区企业差旅管理（American Express Global Business Travel）、高端客户关系及政企合作中心",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 / 美国运通深圳分公司",
        employeeCount: 400,
        description: "华南大区跨境支付、大湾区高净值客户服务与商业拓展中心",
      },
    ],
    careerWebsite: "https://www.americanexpress.com",
    linkedin: "american-express",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "hasbro-cn",
    name: {
      en: "Hasbro",
      zh: "孩之宝",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 孩之宝深圳研发与创意设计中心",
        employeeCount: 600,
        description:
          "大中华区总部、全球知名IP（变形金刚、小马宝莉、万智牌等）衍生品与玩具创意研发、设计及数字化互动娱乐枢纽",
      },
      {
        city: C.dongguan,
        district: "常平镇",
        address: "袁山贝工业区 / 孩之宝华南联合模具制造与质检基地",
        employeeCount: 2000,
        description:
          "全球核心精细化玩具模具制造、工程技术支持、自动化生产工艺创新及严格质量控制中心",
      },
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 / 孩之宝上海分公司与品牌授权运营中心",
        employeeCount: 400,
        description:
          "华东大区品牌管理、IP 跨界授权业务拓展、市场营销、数字内容发行与零售渠道合作中心",
      },
      {
        city: C.hongkong,
        district: "尖沙咀",
        address: "海港城世界商业中心 / 孩之宝亚太区贸易与金融结算总部",
        employeeCount: 500,
        description:
          "亚太区国际贸易结算、全球零售巨头大客户关系管理、供应链物流协同与亚太战略运营中枢",
      },
    ],
    careerWebsite: "https://www.hasbro.com",
    linkedin: "hasbro",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "electrolux-cn",
    name: {
      en: "Electrolux",
      zh: "伊莱克斯",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "虹口区",
        address: "东大名路 / 北外滩来福士广场 / 伊莱克斯中国区总部",
        employeeCount: 400,
        description: "中国区总部、大中华及东北亚区战略运营、品牌营销指挥中枢及高端家电产品体验中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 伊莱克斯北京分公司",
        employeeCount: 150,
        description: "北方大区高端家电业务拓展、全国大客户关系管理与北方市场营销中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 伊莱克斯广州办事处",
        employeeCount: 100,
        description: "华南大区渠道拓展、商用及家用电器产品分销与客户售后支持中心",
      },
    ],
    careerWebsite: "https://www.electrolux.com",
    linkedin: "electrolux",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "kering-cn",
    name: {
      en: "Kering",
      zh: "开云集团",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1515 号静安嘉里中心 / 开云集团大中华区总部",
        employeeCount: 1200,
        description:
          "大中华区总部、旗下核心奢侈品牌（Gucci、Saint Laurent、Bottega Veneta、Balenciaga等）战略统筹、品牌运营、市场营销与高管办公中枢",
      },
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路商圈 / 开云集团上海物流与供应链运营中心",
        employeeCount: 400,
        description:
          "中国大陆地区高级成衣、皮具、珠宝及配饰的保税仓储、质检、高端物流分拨与供应链协同中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸商城 / 开云集团北京分公司",
        employeeCount: 350,
        description: "北方大区旗舰店零售管理、VIP 客户关系维护、政企商务合作与北方市场品牌推广中心",
      },
      {
        city: C.shenzhen,
        district: "罗湖区",
        address: "深南东路 / 开云集团深圳分公司",
        employeeCount: 200,
        description: "华南大区高端零售商业拓展、粤港澳大湾区精品店运营及本地化数字化营销支持中心",
      },
      {
        city: C.hongkong,
        district: "中环",
        address: "皇后大道中 15 号置地广场 / 开云集团亚太区总部与财务结算中心",
        employeeCount: 800,
        description:
          "亚太区（含大中华区、日韩及东南亚）战略规划、亚太区高层管理、国际贸易结算、全球大客户及奢侈品零售地产战略合作中枢",
      },
    ],
    careerWebsite: "https://www.kering.com",
    linkedin: "kering",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "te-connectivity-cn",
    name: {
      en: "TE Connectivity",
      zh: "泰科电子",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "古美路 1528 号 5 幢 / 泰科电子（TE Connectivity）中国总部",
        employeeCount: 2500,
        description: "大中华区总部、商务运营指挥中心、汽车及工业类连接器与传感器核心业务管理中枢",
      },
      {
        city: C.suzhou,
        district: "苏州工业园区",
        address: "春晖路 8 号 / 泰科电子苏州制造与亚太研发基地",
        employeeCount: 4000,
        description:
          "亚太区核心研发中心、高精密连接器、光纤电缆、医疗技术组件的大规模智能制造与全球供应链枢纽",
      },
      {
        city: C.kunshan,
        district: "昆山市",
        address: "综合保税区 / 泰科电子昆山制造基地",
        employeeCount: 3000,
        description: "消费电子、新能源汽车高压线束、高速数据传输线缆与自动化模具注塑生产基地",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 泰科电子深圳分公司",
        employeeCount: 800,
        description: "华南大区消费电子、手机供应链、大湾区物联网与新能源汽车技术支持与客户服务中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 泰科电子北京分公司",
        employeeCount: 500,
        description: "北方大区电力能源、轨道交通、航空航天及工业自动化客户解决方案与政企合作中心",
      },
    ],
    careerWebsite: "https://www.te.com",
    linkedin: "te-connectivity",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "kuehne-nagel-cn",
    name: {
      en: "Kuehne+Nagel",
      zh: "德迅",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "中山东二路 600 号外滩金融中心 (BFC) / 德迅（中国）大中华区总部",
        employeeCount: 2000,
        description: "大中华区总部、国际海运、空运、公路运输与合同物流业务运营指挥中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "浦东国际机场物流园区 / 德迅华东航空货运与保税仓储枢纽",
        employeeCount: 1200,
        description: "华东大区航空货运包机、高科技电子产品保税物流、跨境电商供应链分拨中心",
      },
      {
        city: C.shenzhen,
        district: "宝安区",
        address: "福永镇国际物流中心 / 德迅华南大区运营中心",
        employeeCount: 1500,
        description: "华南大区大湾区海运出口集拼、跨境物流、智能仓储与高科技电子产业供应链支持中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京科技园 / 德迅北京分公司",
        employeeCount: 600,
        description: "北方大区航空与海洋货运代理、跨国企业供应链解决方案、工业及医药冷链物流中心",
      },
      {
        city: C.hongkong,
        district: "葵青区",
        address: "葵涌货柜码头 / 德迅亚太区总部与全球物流控制塔",
        employeeCount: 1800,
        description:
          "亚太区总部、全球供应链控制塔（Global Control Tower）、国际海空运航线统筹与金融结算中枢",
      },
    ],
    careerWebsite: "https://www.kuehne-nagel.com",
    linkedin: "kuehne-nagel",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "bayer-cn",
    name: {
      en: "Bayer",
      zh: "拜耳",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "海阳西路 399 号前滩时代广场 8 层 / 拜耳（中国）有限公司总部",
        employeeCount: 2000,
        description: "拜耳大中华区总部、集团整体战略统筹、企业事务、财务与综合业务管理中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东大桥路 9 号侨福芳草地大厦 / 拜耳北京办公区与处方药中国总部",
        employeeCount: 3500,
        description:
          "拜耳处方药事业部中国总部、全球研发中心及产品供应中心，聚焦心血管、肿瘤、妇科及眼科等核心治疗领域",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 拜耳华南大区商务中心",
        employeeCount: 800,
        description: "华南大区医疗健康、健康消费品及作物科学（农业科技）市场拓展与客户服务中心",
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "红星路 / 拜耳西南大区运营中心",
        employeeCount: 600,
        description: "西南大区医药学术推广、健康消费品分销及农业植保解决方案支持中心",
      },
      {
        city: C.hangzhou,
        district: "滨江区",
        address: "江南大道 / 拜耳作物科学杭州基地",
        employeeCount: 1000,
        description:
          "作物科学（Crop Science）板块现代绿色农业、种子研发、植保产品配方与生产供应链基地",
      },
    ],
    careerWebsite: "https://www.bayer.com",
    linkedin: "bayer",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "novo-nordisk-cn",
    name: {
      en: "Novo Nordisk",
      zh: "诺和诺德",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "国展路 1529 号世博源 / 诺和诺德（中国）制药有限公司总部",
        employeeCount: 2000,
        description:
          "大中华区总部、商务运营指挥中心、糖尿病、罕见病及肥胖症创新药物市场战略与商业化中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村生命科学园 / 诺和诺德北京研发中心",
        employeeCount: 600,
        description:
          "全球研发网络的重要组成部分，专注于蛋白质药物设计、糖尿病与代谢疾病新药早期研发与转化医学研究",
      },
      {
        city: C.tianjin,
        district: "经济技术开发区",
        address: "第九大街 / 诺和诺德（中国）制药有限公司生产基地",
        employeeCount: 4000,
        description:
          "全球最大的胰岛素生产基地之一，承担现代化无菌制剂生产、先进灌装工艺及全球供应链出口枢纽功能",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 诺和诺德华南大区商务中心",
        employeeCount: 800,
        description:
          "华南大区内分泌、罕见病与慢性病治疗领域临床医学推广、学术交流及患者关怀支持中心",
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "红星路 / 诺和诺德西南大区运营中心",
        employeeCount: 500,
        description: "西南大区医药健康产品分销、医疗机构学术支持及慢病管理合作中心",
      },
    ],
    careerWebsite: "https://www.novonordisk.com",
    linkedin: "novo-nordisk",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "iqvia-cn",
    name: {
      en: "IQVIA",
      zh: "益百利",
    },
    region: "CN",
    offices: [
      {
        city: C.hongkong,
        district: "中西区",
        address: "中环 / 益百利（Experian）中国香港亚太区总部",
        employeeCount: 150,
        description:
          "大中华区及亚太区核心战略枢纽、跨国信用管理、决策分析、反欺诈与数字身份验证服务中心",
      },
      {
        city: C.taipei,
        district: "信义区",
        address: "信义路五段 / 益百利台湾分公司",
        employeeCount: 80,
        description: "台湾地区金融机构信用大数据服务、零售消费征信及商业决策支持中心",
      },
    ],
    careerWebsite: "https://www.iqvia.com",
    linkedin: "iqvia",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "veeva-cn",
    name: {
      en: "Veeva",
      zh: "Veeva/维沃",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1601 号越洋国际广场办公楼 3206 室 / 维我软件（上海）有限公司",
        employeeCount: 600,
        description:
          "大中华区总部、商务运营指挥中心、全球生命科学云解决方案与商业化数字化系统研发管理中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "新源南里 1-3 号平安国际金融中心 A 座 / Veeva 北京办公室",
        employeeCount: 250,
        description: "北方大区制药企业客户服务、临床研发解决方案（R&D）与政企学术交流中心",
      },
      {
        city: C.dalian,
        district: "沙河口区",
        address: "软件园东路 36 号 / Veeva 大连研发与技术支持中心",
        employeeCount: 400,
        description: "面向全球及亚太市场的软件工程研发、产品测试、技术运维与客户成功支持基地",
      },
      {
        city: C.suzhou,
        district: "吴中区",
        address: "苏州中心北区 / Veeva 苏州技术支持办公室",
        employeeCount: 150,
        description: "华东大区生命科学与医疗器械行业数字化合规、临床数据管理系统技术支持中心",
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "交子大道 33 号中国华商金融中心 / Veeva 成都分公司",
        employeeCount: 150,
        description:
          "西南大区制药与医疗科技客户拓展、数字化营销云平台（Commercial Cloud）应用与交付支持中心",
      },
    ],
    careerWebsite: "https://www.veeva.com",
    linkedin: "veeva-systems",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "corning-cn",
    name: {
      en: "Corning",
      zh: "康宁",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "淮海中路 1018 号长春藤大厦 / 康宁（上海）管理有限公司",
        employeeCount: 1500,
        description:
          "大中华区总部、商务运营指挥中心、显示科技、光通信、环境科技及生命科学四大核心业务战略统筹中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区蔡伦路 / 康宁中国研发中心",
        employeeCount: 600,
        description:
          "材料科学前沿技术研发、特种玻璃、陶瓷基底与光纤新材料应用测试及本土创新孵化基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 康宁北京分公司",
        employeeCount: 350,
        description:
          "北方大区光纤网络、5G通信基础设施、政企电信运营商合作与汽车环保尾气净化产品推广中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 康宁深圳分公司",
        employeeCount: 300,
        description:
          "华南大区消费电子盖板玻璃（Corning Gorilla Glass）、移动终端大客户技术支持与供应链协作中心",
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "高新西区 / 康宁显示科技（成都）有限公司",
        employeeCount: 2000,
        description: "高世代液晶显示玻璃基板（TFT-LCD）大规模精密制造、热处理与华西大区供应链枢纽",
      },
    ],
    careerWebsite: "https://www.corning.com",
    linkedin: "corning-incorporated",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "ecocert-cn",
    name: {
      en: "Ecocert",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "天秀路 10 号中国农业大学国际创业园 3 号楼 2051 室 / 北京爱科赛尔认证中心有限公司",
        employeeCount: 150,
        description:
          "Ecocert 中国总部、有机农业、食品认证、化妆品（COSMOS）与纺织品可持续标准审核认证核心管理中枢",
      },
      {
        city: C.nanjing,
        district: "建邺区",
        address: "江东中路 / Ecocert 爱科赛尔华东分中心",
        employeeCount: 80,
        description:
          "华东大区有机茶叶、绿色食品、生态纺织品与供应链可持续发展检验检测及客户服务中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / Ecocert 爱科赛尔华南办事处",
        employeeCount: 60,
        description: "华南大区天然化妆品原料、个人护理用品及华南农业产业链生态认证技术支持中心",
      },
    ],
    careerWebsite: "https://www.ecocert.com",
    linkedin: "ecocert",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "slb-cn",
    name: {
      en: "SLB",
      zh: "斯伦贝谢",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "虹桥路 / 斯伦贝谢（SLB）中国总部",
        employeeCount: 1500,
        description:
          "大中华区总部、商务运营指挥中心、油气勘探开发工程技术服务、数字化软件解决方案与全球研发支持中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 斯伦贝谢北京分公司与技术中心",
        employeeCount: 1200,
        description:
          "北方大区国家级能源企业（中石油、中石化、中海油）战略合作、油藏评价、钻完井工程技术支持与科研合作中心",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 斯伦贝谢北京软件研发中心",
        employeeCount: 600,
        description:
          "面向全球石油勘探开发主力软件（如 Petrel、Techlog 等）的核心算法研发、AI 地质建模与数字化能源平台技术开发枢纽",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 斯伦贝谢深圳技术服务与制造基地",
        employeeCount: 500,
        description:
          "华南大区海洋石油工程技术支持、随钻测井仪器仪表装配、测试及高端能源装备制造中心",
      },
      {
        city: C.tianjin,
        district: "滨海新区",
        address: "开发区大街 / 斯伦贝谢天津保税区作业与仓储基地",
        employeeCount: 800,
        description:
          "渤海湾海上油田勘探开发设备集成、钻完井工具维护、大型特种油田作业装备仓储与物流分拨中心",
      },
    ],
    careerWebsite: "https://www.slb.com",
    linkedin: "slb",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "sohu-cn",
    name: {
      en: "Sohu",
      zh: "搜狐",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村东路 1 号院搜狐网络大厦 / 搜狐集团总部",
        employeeCount: 3500,
        description:
          "集团全球总部、搜狐网、搜狐视频、搜狐新闻客户端、畅游（游戏）核心研发、产品运营与管理中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "清华科技园 / 北京畅游时代数码技术有限公司",
        employeeCount: 1500,
        description:
          "搜狐旗下网络游戏业务（畅游）核心研发、客户端及移动端网络游戏运营与海外发行中心",
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "漕河泾新兴技术开发区 / 搜狐上海分公司",
        employeeCount: 500,
        description: "华东大区商业化广告销售、媒体内容合作、本地化品牌营销与视频业务支撑中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 搜狐广州办事处",
        employeeCount: 200,
        description: "华南大区区域广告业务拓展、大客户关系维护与华南媒体渠道运营中心",
      },
    ],
    careerWebsite: "https://www.sohu.com",
    linkedin: "sohu",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "dxc-cn",
    name: {
      en: "DXC Technology",
      zh: "戴安杰",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "广顺南大街 8 号院 1 号楼 / DXC Technology 中国区总部",
        employeeCount: 1500,
        description: "大中华区总部、商务运营指挥中心、企业IT服务、系统集成与数字化解决方案交付中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / DXC Technology 上海分公司",
        employeeCount: 800,
        description: "华东大区跨国企业客户IT外包、应用开发、测试、数据处理与现代基础设施运维中心",
      },
      {
        city: C.dalian,
        district: "沙河口区",
        address: "软件园路 / DXC Technology 大连全球交付中心",
        employeeCount: 2000,
        description:
          "面向全球及亚太客户的大型软件交付、多语言IT技术支持、业务流程外包（BPO）与运维服务基地",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / DXC Technology 广州办事处",
        employeeCount: 300,
        description: "华南大区政企客户数字化转型、金融与制造行业IT解决方案支持中心",
      },
      {
        city: C.hongkong,
        district: "东区",
        address: "鰂鱼涌英皇道 1111 号太古城 19 楼 / DXC Technology 香港分公司",
        employeeCount: 250,
        description:
          "港澳及海外业务枢纽、金融科技、核心银行系统运维、数据中心管理与跨国 IT 咨询服务中心",
      },
    ],
    careerWebsite: "https://www.dxc.technology",
    linkedin: "dxc-technology",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "elekta-cn",
    name: {
      en: "Elekta",
      zh: "Elekta/医科达",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "世纪大道 1528 号陆家嘴基金大厦 / 医科达（上海）科技有限公司",
        employeeCount: 600,
        description:
          "中国区商业运营总部、大中华区市场营销、客户服务中心及全球规模最大的软件研发中心",
      },
      {
        city: C.beijing,
        district: "昌平区",
        address: "科技园区创新路 21 号 / 医科达（北京）医疗器械有限公司",
        employeeCount: 1200,
        description:
          "全球核心制造基地、直线加速器与伽玛刀等高端放射治疗设备生产中心、全球供应链枢纽及培训创新中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "北辰西路 6 号院北辰中心 / 医科达北京办公室",
        employeeCount: 200,
        description: "北方大区商务拓展、临床学术合作、政府事务及医疗卫生政策研究中心",
      },
      {
        city: C.guangzhou,
        district: "越秀区",
        address: "环市东路 403 号广州国际电子大厦 / 医科达广州办事处",
        employeeCount: 150,
        description: "华南大区肿瘤放疗设备装机支持、临床应用培训与售后技术服务中心",
      },
      {
        city: C.chengdu,
        district: "武侯区",
        address: "人民南路四段 / 医科达成都办事处",
        employeeCount: 120,
        description: "西南大区医疗机构客户关系管理、放疗信息化系统交付与技术支持中心",
      },
    ],
    careerWebsite: "https://www.elekta.com",
    linkedin: "elekta",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "ceva-cn",
    name: {
      en: "Ceva",
      zh: "Ceva/诗华",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "蒙自路 763 号丰盛创建大厦 23 层 / 基华物流（CEVA Logistics）大中华区总部",
        employeeCount: 1800,
        description:
          "大中华区总部、商务运营指挥中心、国际海运、空运、合同物流及供应链解决方案管理中枢",
      },
      {
        city: C.beijing,
        district: "顺义区",
        address: "机场北街 8 号航港国际大厦 6 楼 / CEVA 北京分公司",
        employeeCount: 500,
        description: "北方大区航空货运、空港物流枢纽、跨国企业供应链协同与北方区业务运营中心",
      },
      {
        city: C.shenzhen,
        district: "罗湖区",
        address: "红岭北路 2088 号人保金融大厦 7 层 / CEVA 深圳分公司",
        employeeCount: 700,
        description:
          "华南大区大湾区海运出口集拼、跨境电商物流、智能仓储与高科技电子产业供应链支持中心",
      },
      {
        city: C.guangzhou,
        district: "越秀区",
        address: "桥光西路 13 号星寰国际商业中心 / CEVA 广州分公司",
        employeeCount: 400,
        description: "华南大区华南核心口岸物流分拨、陆运网络协同及华南区大客户服务中心",
      },
      {
        city: C.hongkong,
        district: "九龙湾",
        address: "宏光道 39 号宏天广场 37 楼 / CEVA 香港分公司与亚太区支持中心",
        employeeCount: 800,
        description: "香港及亚太区物流枢纽、全球供应链控制塔、国际海空运航线统筹与金融结算中枢",
      },
    ],
    careerWebsite: "https://www.ceva.com",
    linkedin: "ceva-logistics",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "cummins-cn",
    name: {
      en: "Cummins",
      zh: "康明斯",
    },
    region: "CN",
    offices: [
      {
        city: C.wuhan,
        district: "武汉经济技术开发区",
        address: "东风大道 396 号 / 康明斯（中国）投资有限公司中国总部",
        employeeCount: 2500,
        description:
          "大中华区总部、商务运营指挥中心、发动机与动力系统业务战略统筹、市场营销、采购及区域管理中枢",
      },
      {
        city: C.wuhan,
        district: "武汉经济技术开发区",
        address: "康明斯路 / 康明斯东亚研发中心",
        employeeCount: 1200,
        description:
          "全球领先的技术研发中心，专注于重型、中型发动机及零部件、排放处理系统、新能源动力总成的技术创新与本土化标定",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 康明斯北京办事处",
        employeeCount: 400,
        description:
          "国家级合作伙伴（中石油、中石化、北方重工等）战略合作、政府事务、政策研究与集团高层商务交流中心",
      },
      {
        city: C.shanghai,
        district: "嘉定区",
        address: "安亭国际汽车城 / 康明斯上海技术与分销中心",
        employeeCount: 800,
        description: "华东大区船舶动力、发电机组业务拓展、滤清系统技术支持与高端售后服务中心",
      },
      {
        city: C.xiangyang,
        district: "襄城区",
        address: "高新技术产业开发区 / 东风康明斯发动机有限公司",
        employeeCount: 4500,
        description:
          "康明斯与东风汽车合资的核心重、中型发动机制造基地，全球规模最大的柴油机生产工厂之一",
      },
    ],
    careerWebsite: "https://www.cummins.com",
    linkedin: "cummins",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "dieffenbacher-cn",
    name: {
      en: "DIEFFENBACHER",
      zh: "迪芬巴赫",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "闵行区",
        address: "虹桥商务区申长路 / 迪芬巴赫机械（上海）有限公司",
        employeeCount: 250,
        description:
          "大中华区总部、商务运营指挥中心、木质人造板机械（连续平压机系统）、复合材料与压机技术销售、项目管理及客户服务中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 迪芬巴赫北京办事处",
        employeeCount: 80,
        description: "北方大区林业工程客户关系维护、国家级木材加工集团项目对接与政策咨询中心",
      },
      {
        city: C.chengdu,
        district: "武侯区",
        address: "人民南路 / 迪芬巴赫西南技术支持中心",
        employeeCount: 60,
        description:
          "西南大区（四川、云南等林业大省）人造板生产线设备安装指导、备件供应与售后技术支持中心",
      },
    ],
    careerWebsite: "https://www.dieffenbacher.com",
    linkedin: "dieffenbacher",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "bostik-cn",
    name: {
      en: "Bostik",
      zh: "波士胶",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "闵行区",
        address: "莘庄商务区申长路 / 波士胶（中国）投资有限公司大中华区总部",
        employeeCount: 800,
        description:
          "大中华区总部、商务运营指挥中心、建筑胶、工业胶水与高性能密封胶产品线研发、市场营销与销售管理中枢",
      },
      {
        city: C.shanghai,
        district: "奉贤区",
        address: "金海公路 / 波士胶上海奉贤生产基地",
        employeeCount: 400,
        description:
          "华东大区核心制造工厂，专注于热熔胶、聚氨酯胶粘剂及建筑密封材料的大规模自动化生产与仓储物流中心",
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "开发区东区 / 波士胶广州分公司与华南工厂",
        employeeCount: 350,
        description:
          "华南大区高性能胶粘剂生产基地、汽车及电子行业用胶技术支持、华南区客户服务与供应链分拨中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国路 / 波士胶北京办事处",
        employeeCount: 150,
        description: "北方大区建筑工程、高铁及基础设施建设用胶、国家级大客户业务拓展与技术支持中心",
      },
      {
        city: C.hongkong,
        district: "观塘区",
        address: "伟业街 / 波士胶香港分公司",
        employeeCount: 80,
        description:
          "港澳及海外业务枢纽、亚太区高性能胶粘剂产品贸易结算、国际工程及建材项目配套支持中心",
      },
    ],
    careerWebsite: "https://www.bostik.com",
    linkedin: "bostik",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "schaeffler-cn",
    name: {
      en: "Schaeffler",
      zh: "Schaeffler/舍弗勒",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "嘉定区",
        address: "安亭国际汽车城昌吉路 567 号 / 舍弗勒大中华区总部",
        employeeCount: 3500,
        description:
          "大中华区总部、商务运营指挥中心、汽车核心零部件（传动系统、底盘应用）、工业轴承及航空航天技术战略统筹中枢",
      },
      {
        city: C.shanghai,
        district: "嘉定区",
        address: "安亭国际汽车城安研路 333 号 / 舍弗勒大中华区研发中心",
        employeeCount: 1500,
        description:
          "世界级研发中心，专注于新能源汽车电驱动系统、氢能技术、工业4.0智能轴承及核心摩擦学与材料科学的前沿研发",
      },
      {
        city: C.taicang,
        district: "经济开发区",
        address: "上海东路 1 号 / 舍弗勒中国制造基地（太仓工厂）",
        employeeCount: 5000,
        description:
          "全球最大的生产制造基地之一，涵盖高精度滚动轴承、汽车发动机零部件、直线导轨及自动化精密机械的大规模智能制造工厂",
      },
      {
        city: C.changsha,
        district: "经济技术开发区",
        address: "东六线 / 舍弗勒湘潭与长沙制造基地",
        employeeCount: 2000,
        description:
          "华中大区汽车零部件、离合器系统、重卡及工程机械专用轴承产品线的重要制造与供应链分拨中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 舍弗勒北京办事处",
        employeeCount: 250,
        description:
          "北方大区国家级汽车集团（一汽、北汽等）、重工业制造企业战略合作、政府事务与政策研究中心",
      },
    ],
    careerWebsite: "https://www.schaeffler.com",
    linkedin: "schaeffler",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "danone-cn",
    name: {
      en: "Danone",
      zh: "Danone/达能",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "虹口区",
        address: "东大名路 501 号上海白玉兰广场 / 达能中国总部",
        employeeCount: 3000,
        description:
          "达能中国大中华区总部、商务运营指挥中心、生命早期营养品（爱他美等）、饮用水及饮料、医学营养品业务战略统筹中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 达能中国食品饮料研发中心",
        employeeCount: 600,
        description:
          "亚太区前沿食品科学研发中心、营养配方创新、婴幼儿及成人营养品本土化产品开发与质量安全实验室",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "光华路 / 达能北京办事处",
        employeeCount: 400,
        description:
          "北方大区特殊医学用途配方食品（医学营养）、政府事务、政策研究及国家级母婴营养学术交流中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 达能华南大区运营中心",
        employeeCount: 500,
        description:
          "华南大区脉动饮料及旗下各大营养品类品牌营销、华南市场分销渠道管理与客户服务中心",
      },
      {
        city: C.qingdao,
        district: "崂山区",
        address: "香港东路 / 青岛达能饮料有限公司",
        employeeCount: 1200,
        description:
          "华东大区核心瓶装水与饮料（如脉动）现代化生产制造基地、智能化灌装生产线及北方物流分拨枢纽",
      },
    ],
    careerWebsite: "https://www.danone.com",
    linkedin: "danone",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "kerry-cn",
    name: {
      en: "Kerry",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "延安中路 1218 号嘉里中心 / 嘉里集团（中国）总部与嘉里建设上海分公司",
        employeeCount: 2500,
        description:
          "大中华区总部、商务运营指挥中心、高端城市综合体（如静安嘉里中心）开发运营、粮油食品（金龙鱼母公司益海嘉里）战略统筹与酒店管理中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "金桥经济技术开发区 / 嘉里大荣物流与供应链上海分拨中心",
        employeeCount: 1200,
        description:
          "华东大区现代仓储物流、冷链供应链管理、快速消费品及大宗商品跨境分拨与智慧物流中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "光华路 1 号北京嘉里中心 / 嘉里北京办事处与商务运营中心",
        employeeCount: 1000,
        description:
          "北方大区高端地产运营、物业资产管理、酒店（北京嘉里大酒店）管理与北方区粮油食品供应链协同中心",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 / 深圳嘉里建设广场与物流运营中心",
        employeeCount: 1500,
        description:
          "华南大区地标性商业地产开发、前海深港现代服务业合作区重大项目、大湾区跨境物流与仓储枢纽",
      },
      {
        city: C.hongkong,
        district: "鰂鱼涌",
        address:
          "英皇道 683 号嘉里中心 / 嘉里集团全球总部与嘉里建设有限公司（Kerry Properties）核心管理层",
        employeeCount: 4000,
        description:
          "嘉里集团全球最高决策中枢、嘉里建设、嘉里物流联网（Kerry Logistics）与香格里拉酒店集团全球总部及财务结算中心",
      },
    ],
    careerWebsite: "https://www.kerrygroup.com",
    linkedin: "kerrygroup",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "beiersdorf-cn",
    name: {
      en: "Beiersdorf",
      zh: "拜尔斯道夫",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 333 号香港新世界大厦 / 拜尔斯道夫（中国）企业管理有限公司",
        employeeCount: 1500,
        description:
          "大中华区总部、商务运营指挥中心、妮维雅（Nivea）、优色林（Eucerin）、莱珀妮（La Prairie）等核心护肤品牌营销、电商运营与跨国管理中枢",
      },
      {
        city: C.shanghai,
        district: "青浦区",
        address: "华新镇华徐公路 / 拜尔斯道夫上海生产基地与物流中心",
        employeeCount: 800,
        description:
          "华东大区核心制造工厂、现代化个人护理品、乳液及护肤膏霜自动化生产线、仓储与全国供应链分拨中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 拜尔斯道夫北京分公司",
        employeeCount: 300,
        description:
          "北方大区皮肤学级护肤品（优色林等）医学渠道推广、北方零售终端管理与商务拓展中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 拜尔斯道夫广州分公司",
        employeeCount: 350,
        description: "华南大区美妆日化大客户拓展、华南区域线下商超渠道、供应链协同与客户服务中心",
      },
      {
        city: C.wuhan,
        district: "江汉区",
        address: "建设大道 / 拜尔斯道夫武汉办事处",
        employeeCount: 150,
        description: "华中大区快速消费品终端零售分销支持、区域市场调研与商务运维中心",
      },
    ],
    careerWebsite: "https://www.beiersdorf.com",
    linkedin: "beiersdorf",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "organon-cn",
    name: {
      en: "Organon",
      zh: "欧加隆",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "中山东一路 18 号外滩 18 号 / 欧加隆（Organon）中国总部",
        employeeCount: 1500,
        description:
          "大中华区总部、商务运营指挥中心、女性健康、心血管代谢、呼吸及疼痛等核心全球知名慢性病与妇幼健康产品线战略统筹中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 欧加隆上海创新与医学事务中心",
        employeeCount: 400,
        description:
          "医学科学研究、临床试验管理、数字化医疗创新孵化、产品生命周期管理与药品注册事务中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 欧加隆北京分公司",
        employeeCount: 350,
        description: "北方大区国家级医疗机构战略合作、政府事务、医保准入政策研究与医学学术交流中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 欧加隆广州分公司",
        employeeCount: 300,
        description: "华南大区医药商业渠道拓展、临床药学服务、区域产品营销与客户服务中心",
      },
      {
        city: C.chengdu,
        district: "锦江区",
        address: "红星路三段 / 欧加隆成都办事处",
        employeeCount: 200,
        description: "西南大区医疗网络覆盖、基层卫生健康支持与女性健康关爱项目推广中心",
      },
    ],
    careerWebsite: "https://www.organon.com",
    linkedin: "organon",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "lseg-cn",
    name: {
      en: "LSEG",
      zh: "伦敦证券交易所集团",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address:
          "陆家嘴环路 1000 号恒生银行大厦 / 伦敦证券交易所集团（LSEG）上海代表处与路孚特金融信息服务",
        employeeCount: 600,
        description:
          "大中华区核心运营中心、路孚特（Refinitiv）金融数据终端、实时行情、量化金融分析工具研发、大宗商品与资本市场客户服务中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸大厦 / LSEG 北京分公司",
        employeeCount: 300,
        description:
          "北方大区国家金融监管机构对接、大型国有商业银行、证券公司、资产管理公司战略合作与宏观金融信息服务中心",
      },
      {
        city: C.hongkong,
        district: "中环",
        address: "金融街 8 号国际金融中心二期 / 伦敦证券交易所集团香港分公司",
        employeeCount: 500,
        description:
          "亚太区资本市场枢纽、跨境上市业务支持、富时罗素（FTSE Russell）指数业务拓展、亚太区金融合规与交易平台技术支持中心",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 / LSEG 深圳金融科技与数据支持中心",
        employeeCount: 200,
        description:
          "华南大区金融科技创新、大湾区资本市场数据采集、量化交易基础设施技术支持与客户交付中心",
      },
    ],
    careerWebsite: "https://www.lseg.com",
    linkedin: "london-stock-exchange-group",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "wiley-cn",
    name: {
      en: "Wiley",
      zh: "约翰威立出版集团",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "东三环中路 1 号环球金融中心 / 约翰威立出版集团（Wiley）中国总部",
        employeeCount: 400,
        description:
          "大中华区总部、学术与专业出版业务统筹、科研服务、期刊运营、数字化出版平台推广与高等教育教材发行管理中枢",
      },
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 / Wiley 上海分公司与编辑部",
        employeeCount: 250,
        description:
          "华东大区学术期刊编辑合作、材料科学与生命科学等核心学科主编对接、科研机构与高校图书馆战略合作中心",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村南大街 / Wiley 北京海淀编辑与数字化运营中心",
        employeeCount: 150,
        description:
          "开放获取（Open Access）期刊发展、科研作者服务、学术论文同行评审数字化工具支持与技术研发协作中心",
      },
    ],
    careerWebsite: "https://www.wiley.com",
    linkedin: "wiley",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "sandvik-cn",
    name: {
      en: "Sandvik",
      zh: "山特维克",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "仙霞路 318 号远东国际广场 / 山特维克（中国）投资有限公司大中华区总部",
        employeeCount: 1200,
        description:
          "大中华区总部、商务运营指挥中心、金属切削刀具（Sandvik Coromant）、矿山与岩石开挖技术（Sandvik Mining and Rock Solutions）、材料科技业务战略统筹中枢",
      },
      {
        city: C.shanghai,
        district: "闵行区",
        address: "莘庄工业区 / 山特维克上海应用中心与配送基地",
        employeeCount: 800,
        description:
          "华东大区切削刀具应用技术研发、客户加工测试实验室、定制化刀具预调与高精度仓储物流分拨中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 山特维克北京办事处",
        employeeCount: 300,
        description:
          "北方大区国家级能源、矿山、重工业集团（如中煤、神华等）战略客户合作、政府事务与政策研究中心",
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "广州开发区 / 山特维克华南技术服务中心",
        employeeCount: 250,
        description:
          "华南大区精密制造、汽车零部件加工、3C电子模具行业切削解决方案支持与售后技术服务中心",
      },
      {
        city: C.taiyuan,
        district: "小店区",
        address: "高新技术产业开发区 / 山特维克（太原）钻采设备有限公司",
        employeeCount: 1000,
        description:
          "华北大型制造基地，专注于井下采矿设备、凿岩机械、耐磨件制造及地下矿山智能化自动化系统的研发生产中心",
      },
    ],
    careerWebsite: "https://www.home.sandvik",
    linkedin: "sandvik",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "estee-lauder-cn",
    name: {
      en: "Estée Lauder",
      zh: "雅诗兰黛",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "静安区",
        address: "南京西路 1515 号静安嘉里中心 / 雅诗兰黛（上海）商贸有限公司大中华区总部",
        employeeCount: 3500,
        description:
          "大中华区总部、商务运营指挥中心、旗下雅诗兰黛、海蓝之谜（La Mer）、倩碧（Clinique）、TOM FORD 等众多国际美妆品牌的中国市场战略统筹与数字化营销中枢",
      },
      {
        city: C.shanghai,
        district: "闵行区",
        address: "虹桥商务区 / 雅诗兰黛中国创新研发与供应链中心",
        employeeCount: 1200,
        description:
          "世界级前沿美妆科研与创新中心、配方实验室、产品安全评估、现代智能化仓储及华东物流分拨枢纽",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 雅诗兰黛北京分公司",
        employeeCount: 600,
        description:
          "北方大区高端百货零售渠道拓展、北方美妆市场品牌公关、政府事务及医学护肤学术交流中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 雅诗兰黛广州分公司",
        employeeCount: 500,
        description: "华南大区高端美妆零售终端管理、华南市场渠道拓展、区域供应链协同与客户服务中心",
      },
      {
        city: C.hongkong,
        district: "中环",
        address: "金融街 8 号国际金融中心 / 雅诗兰黛集团香港分公司与亚太区支持中心",
        employeeCount: 800,
        description:
          "亚太区业务枢纽、旅游零售（Travel Retail）全球核心管理中心、港澳及海外跨境贸易结算中枢",
      },
    ],
    careerWebsite: "https://www.elcompanies.com",
    linkedin: "estee-lauder-companies-inc",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "unilever-cn",
    name: {
      en: "Unilever",
      zh: "联合利华",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "长宁区",
        address: "金钟路 968 号凌空 SOHO / 联合利华（中国）投资有限公司大中华区总部",
        employeeCount: 4500,
        description:
          "大中华区总部、商务运营指挥中心、个人护理、家庭护理、冰淇淋与营养品（如力士、多芬、奥妙、中华、和路雪等）品牌统筹与数字营销中枢",
      },
      {
        city: C.shanghai,
        district: "长宁区",
        address: "临虹路 / 联合利华全球研发中心（上海）",
        employeeCount: 800,
        description:
          "全球顶级消费品研发中心之一，专注于皮肤科学、发用护理、家居清洁前沿配方创新、包装可持续性设计及数字化实验室",
      },
      {
        city: C.hefei,
        district: "经济技术开发区",
        address: "锦绣大道 / 联合利华合肥生产基地与“灯塔工厂”",
        employeeCount: 3000,
        description:
          "全球首家荣获世界经济论坛“灯塔工厂”称号的个人护理用品制造基地，全球规模最大、智能化自动化程度最高的家居与个人护理品超级工厂",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 联合利华北京分公司",
        employeeCount: 600,
        description:
          "北方大区零售渠道拓展、北方市场营销、政府事务、可持续发展战略合作及北方区商务运营中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 联合利华广州分公司",
        employeeCount: 700,
        description:
          "华南大区美妆日化大客户拓展、华南线下商超与新零售渠道管理、供应链协同与客户服务中心",
      },
    ],
    careerWebsite: "https://www.unilever.com",
    linkedin: "unilever",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "jpmorgan-cn",
    name: {
      en: "JPMorgan Chase",
      zh: "摩根大通",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "陆家嘴环路 479 号上海中心大厦 / 摩根大通证券（中国）有限公司与上海分行",
        employeeCount: 2500,
        description:
          "大中华区核心业务枢纽、投资银行、股票与固定收益证券交易、商业银行服务及大宗商品业务运营中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸大厦 / 摩根大通银行（中国）有限公司北京分行",
        employeeCount: 800,
        description:
          "北方大区国家金融监管机构对接、大型国有企业及跨国公司战略客户合作、宏观经济研究与政策合规中心",
      },
      {
        city: C.hongkong,
        district: "中环",
        address: "遮打道 8 号遮打大厦 / 摩根大通亚太区总部",
        employeeCount: 5000,
        description:
          "亚太区最高决策与指挥中枢、环球企业金融、私人银行、资产管理、亚太区法律合规与结算清算核心枢纽",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 / 摩根大通深圳分公司",
        employeeCount: 400,
        description:
          "华南大区高新技术企业、大湾区跨境金融创新、科技金融服务与供应链金融业务支持中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 摩根大通广州办事处",
        employeeCount: 150,
        description: "华南区域商务拓展、本地优质外贸与制造企业跨境结算及金融咨询服务中心",
      },
    ],
    careerWebsite: "https://www.jpmorganchase.com",
    linkedin: "jpmorgan-chase",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "barclays-cn",
    name: {
      en: "Barclays",
      zh: "巴克莱银行",
    },
    region: "CN",
    offices: [
      {
        city: C.hongkong,
        district: "中环",
        address: "金融街 8 号国际金融中心二期 / 巴克莱亚洲总部",
        employeeCount: 1200,
        description:
          "亚太区核心业务枢纽、投资银行、环球市场部、股票与固定收益交易、跨境资本运作及亚太区合规风控中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "陆家嘴环路 / 巴克莱银行上海代表处",
        employeeCount: 150,
        description: "中国内地业务联络、境内外金融机构合作、宏观经济研究与跨国企业客户服务中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 巴克莱北京办事处",
        employeeCount: 100,
        description: "北方大区国家金融监管机构对接、政策研究与大型央国企客户战略合作中心",
      },
    ],
    careerWebsite: "https://www.barclays.com",
    linkedin: "barclays",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "agilent-cn",
    name: {
      en: "Agilent",
      zh: "安捷伦",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "外高桥保税区英伦路 412 号 / 安捷伦科技（中国）有限公司大中华区总部",
        employeeCount: 2000,
        description:
          "大中华区总部、商务运营指挥中心、生命科学与应用市场集团（LSAG）、诊断与基因组学（DGG）以及化学分析业务战略统筹与客户体验中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 安捷伦中国研发中心",
        employeeCount: 600,
        description:
          "世界级前沿分析仪器研发中心、高端液相色谱与质谱系统、生物制药分析软件、试剂耗材本土化创新及应用实验室",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "望京科技园 / 安捷伦北京分公司与客户支持中心",
        employeeCount: 500,
        description:
          "北方大区国家级科研院所、高校、大型药企及环境监测机构战略客户合作、应用技术支持与售后服务中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 安捷伦广州分公司",
        employeeCount: 300,
        description:
          "华南大区食品安全、临床检验、工业化学及电子测量仪器市场拓展、华南客户培训与技术服务中心",
      },
      {
        city: C.chengdu,
        district: "武侯区",
        address: "高新区 / 安捷伦成都办事处与西部技术支持中心",
        employeeCount: 200,
        description:
          "西南大区科学仪器销售网络、生物医药及高校科研项目服务、区域仓储物流与技术支持中心",
      },
    ],
    careerWebsite: "https://www.agilent.com",
    linkedin: "agilent-technologies",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "alten-cn",
    name: {
      en: "ALTEN",
      zh: "ALTEN/欧特昂",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "宜山路 889 号 / 欧特昂（ALTEN）中国大中华区总部",
        employeeCount: 1200,
        description:
          "大中华区总部、商务运营指挥中心、汽车工程研发、高端装备制造、航空航天、生命科学及数字化转型技术咨询与工程服务中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 欧特昂上海汽车工程技术中心",
        employeeCount: 600,
        description:
          "专注于新能源汽车整车设计、智能网联（ICV）、车载软件开发、自动驾驶算法仿真测试与电子电气架构研发服务基地",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 欧特昂北京分公司",
        employeeCount: 300,
        description:
          "北方大区国家级汽车集团、航空航天科研院所、轨道交通及高科技制造企业数字化工程咨询与大客户交付中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 欧特昂深圳分公司",
        employeeCount: 400,
        description:
          "华南大区高新技术企业、消费电子、嵌入式软件研发、物联网及大湾区智能制造工程技术支持中心",
      },
      {
        city: C.changchun,
        district: "汽车经济技术开发区",
        address: "东风大街 / 欧特昂长春办事处与工程支持中心",
        employeeCount: 200,
        description:
          "东北大区面向国内主流整车厂（如一汽等）的汽车动力总成、车身工程、底盘标定与驻场技术研发服务中心",
      },
    ],
    careerWebsite: "https://www.alten.com",
    linkedin: "alten",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "bv-cn",
    name: {
      en: "Bureau Veritas",
      zh: "必维国际检验集团",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "西藏中路 268 号来福士广场 / 必维集团（Bureau Veritas）大中华区总部",
        employeeCount: 3000,
        description:
          "大中华区总部、商务运营指挥中心、消费品检测、工业与基础设施服务、船舶与海事（BV）、认证及政府事务战略统筹中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "外高桥保税区华京路 / 必维上海综合检测与实验室基地",
        employeeCount: 1500,
        description:
          "世界级大型综合检测实验室、电子电气、纺织品、玩具、化学品安全及新能源汽车零部件测试与认证中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 必维北京分公司",
        employeeCount: 800,
        description:
          "北方大区国家级大型能源、石油化工、基础设施工程检验、碳减排与ESG认证及政府/央企战略合作中心",
      },
      {
        city: C.shenzhen,
        district: "宝安区",
        address: "新安街道 / 必维深圳分公司与华南检测中心",
        employeeCount: 1200,
        description:
          "华南大区消费电子、无线通信产品、蓝牙认证、玩具与跨境电商合规检测、电池安全测试及检验服务基地",
      },
      {
        city: C.hongkong,
        district: "葵涌",
        address: "九龙贸易中心 / 必维国际检验集团香港分公司",
        employeeCount: 600,
        description:
          "香港及大湾区跨境海事检验、船舶入级评定、ESG鉴证、国际贸易供应链审核与验货服务枢纽",
      },
    ],
    careerWebsite: "https://www.bureauveritas.com",
    linkedin: "bureau-veritas",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "bruker-cn",
    name: {
      en: "Bruker",
      zh: "Bruker/布鲁克",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "闵行区",
        address: "合川路 2570 号 1 号楼 9 层 / 布鲁克（上海）科学技术有限公司",
        employeeCount: 800,
        description:
          "大中华区总部、商务运营指挥中心、质谱仪、核磁共振波谱仪（NMR）、X射线谱仪等高端科学分析仪器应用研发、客户演示实验室与技术支持中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "西小口路 66 号 B-6 座 C 塔 8 层 / 布鲁克（北京）科技有限公司",
        employeeCount: 600,
        description:
          "北方大区总部、国家级科研院所与高校重点实验室战略合作、材料科学、电子显微分析（EDS/WDS/EBSD）技术支持与客户服务中心",
      },
      {
        city: C.guangzhou,
        district: "海珠区",
        address: "新港东路 618 号南丰汇大厦 6 楼 / 布鲁克广州办事处",
        employeeCount: 250,
        description:
          "华南大区生物医药、食品安全、环境监测行业高端分析仪器销售、华南应用测试中心与售后技术支持枢纽",
      },
      {
        city: C.chengdu,
        district: "武侯区",
        address: "高新区益州大道 / 布鲁克成都办事处",
        employeeCount: 150,
        description:
          "西南大区科学仪器网络覆盖、高校与医疗卫生机构科研项目服务、区域仓储物流与技术支持中心",
      },
    ],
    careerWebsite: "https://www.bruker.com",
    linkedin: "bruker",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "sartorius-cn",
    name: {
      en: "Sartorius",
      zh: "赛多利斯",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区药谷核心区 / 赛多利斯（中国）投资有限公司大中华区总部",
        employeeCount: 1500,
        description:
          "大中华区总部、商务运营指挥中心、生物工艺（Bioprocess Solutions）与实验室产品与服务（Lab Products & Services）两大核心板块战略统筹与客户体验中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江张衡路 / 赛多利斯上海生物工艺应用中心与实验室",
        employeeCount: 600,
        description:
          "世界级生物反应器、一次性使用技术、切向流过滤、病毒清除及细胞培养工艺放大研发测试与客户验证实验室",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村生命科学园 / 赛多利斯北京分公司与北方应用技术中心",
        employeeCount: 400,
        description:
          "北方大区国家级生物医药研发企业、疫苗与抗体药物生产基地、基因工程科研院所战略客户合作与技术支持中心",
      },
      {
        city: C.guangzhou,
        district: "黄埔区",
        address: "广州国际生物岛 / 赛多利斯华南办事处与应用支持中心",
        employeeCount: 300,
        description:
          "华南大区生物医药产业集群服务、细胞与基因治疗企业技术对接、华南实验室天平与纯水系统销售及售后枢纽",
      },
    ],
    careerWebsite: "https://www.sartorius.com",
    linkedin: "sartorius",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "nikon-cn",
    name: {
      en: "Nikon",
      zh: "尼康",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 283 号香港广场 / 尼康（中国）投资有限公司大中华区总部",
        employeeCount: 1500,
        description:
          "大中华区总部、商务运营指挥中心、影像产品（相机、镜头）、精密机械（半导体光刻机、FPD曝光机）、工业显微镜与测量仪器的中国市场战略统筹与营销管理中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "金桥出口加工区 / 尼康映像仪器（上海）有限公司制造基地",
        employeeCount: 2000,
        description:
          "全球核心数码相机及可换镜头的现代化精密制造工厂、自动化总装流水线、品质检验与华东物流分拨中心",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 / 尼康北京分公司",
        employeeCount: 400,
        description:
          "北方大区影像产品官方授权售后服务、北方零售渠道拓展、北方区半导体及工业精密设备客户支持中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 尼康广州分公司",
        employeeCount: 300,
        description:
          "华南大区影像器材大客户分销、华南线下商超与专业摄影俱乐部支持、区域商务拓展中心",
      },
    ],
    careerWebsite: "https://www.nikon.com.cn",
    linkedin: "nikon-corporation",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "reuters-cn",
    name: {
      en: "Reuters",
      zh: "路透社",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸大厦 / 路透社（Reuters）北京分社与新闻采编中心",
        employeeCount: 150,
        description:
          "大中华区核心新闻采编枢纽、中国宏观经济、金融市场、外交政策及地缘政治深度报道与多媒体新闻制作中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "陆家嘴环路 1000 号恒生银行大厦 / 路透社上海分社与财经新闻部",
        employeeCount: 120,
        description:
          "华东大区资本市场、A股与外汇市场动态追踪、跨国企业在中国及大宗商品产业链的商业新闻报道中心",
      },
      {
        city: C.hongkong,
        district: "中环",
        address: "金融街 8 号国际金融中心二期 / 路透社亚太区总社与电视新闻中心",
        employeeCount: 300,
        description:
          "亚太区新闻指挥中心、泛亚地区突发新闻统筹、路透电视（Reuters TV）亚太制播、大中华区及东南亚财经与国际时政核心采编中枢",
      },
    ],
    careerWebsite: "https://www.reuters.com",
    linkedin: "reuters",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "cambridge-university-press-cn",
    name: {
      en: "Cambridge University Press",
      zh: "剑桥大学出版社",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address:
          "中关村南大街 / 剑桥大学出版社暨考评院（Cambridge University Press & Assessment）中国总部",
        employeeCount: 400,
        description:
          "大中华区总部、学术图书与期刊出版统筹、剑桥英语教学（Cambridge English）与国际考评业务（CAIE）、数字化教育平台推广及大中华区战略发展中枢",
      },
      {
        city: C.shanghai,
        district: "黄浦区",
        address: "淮海中路 / 剑桥大学出版社上海分公司与编辑部",
        employeeCount: 200,
        description:
          "华东大区学术期刊发展、人文社科与科学技术类图书选题策划、高校图书馆及科研机构战略合作与学术交流中心",
      },
      {
        city: C.hongkong,
        district: "湾仔",
        address: "港湾道 / 剑桥大学出版社与考评院香港办事处",
        employeeCount: 150,
        description:
          "港澳及海外华文地区国际课程考评支持、英语语言教学（ELT）教材发行、区域版权贸易与国际学术出版服务枢纽",
      },
    ],
    careerWebsite: "https://www.cambridge.org",
    linkedin: "cambridge-university-press",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "nomura-cn",
    name: {
      en: "Nomura",
      zh: "野村证券",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "陆家嘴环路 479 号上海中心大厦 / 野村东方国际证券有限公司总部",
        employeeCount: 1000,
        description:
          "中国首批新设外资控股证券公司总部、财富管理中心、机构投资者业务、股票与固定收益研究、投资银行及资产管理业务枢纽",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸大厦 / 野村证券北京代表处",
        employeeCount: 150,
        description:
          "北方大区国家金融监管机构对接、宏观经济研究、政策合规咨询及大型央国企客户战略合作中心",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 / 野村东方国际证券深圳分公司",
        employeeCount: 200,
        description: "华南大区高新技术企业、大湾区资本市场业务拓展、财富管理及科技金融服务中心",
      },
      {
        city: C.hongkong,
        district: "中环",
        address: "金融街 8 号国际金融中心二期 / 野村国际（香港）有限公司（野村亚洲总部）",
        employeeCount: 2500,
        description:
          "亚洲（除日本外）核心业务枢纽、环球市场部、股票与衍生品交易、跨境投资银行、亚太区风险管理与清算结算中心",
      },
    ],
    careerWebsite: "https://www.nomura.com",
    linkedin: "nomura",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "zhuoshi-cn",
    name: {
      en: "Zhuoshi Quantitative",
      zh: "卓识量化",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "陆家嘴环路 1233 号汇亚大厦 / 卓识量化（ZhenSight）总部",
        employeeCount: 250,
        description:
          "大中华区总部、核心策略研发中心、高频交易系统架构、超低延迟交易网关研发、量化投资策略与数据工程统筹中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 卓识量化北京研发中心",
        employeeCount: 150,
        description:
          "北方研发中心、人工智能与机器学习在量化投资中的应用研发、另类数据挖掘、高性能并行计算与分布式回测引擎研发基地",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 / 卓识量化深圳办事处",
        employeeCount: 80,
        description:
          "华南业务联络、大湾区交易所通道技术支持、金融工程人才招募与区域投研技术协作中心",
      },
      {
        city: C.hongkong,
        district: "中环",
        address: "皇后大道中 / 卓识量化国际业务与海外交易中心",
        employeeCount: 60,
        description: "海外资本市场接入、国际化量化策略布局、离岸资产配置与全球多资产交易清算枢纽",
      },
    ],
    careerWebsite: "https://www.zhuoshiquant.com",
    linkedin: "zhuoshi-quantitative-investment",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "anz-cn",
    name: {
      en: "ANZ",
      zh: "澳新银行",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "陆家嘴环路 1233 号汇亚大厦 / 澳新银行（中国）有限公司总部与上海分行",
        employeeCount: 400,
        description:
          "中国内地总部、对公银行业务、跨国企业金融、大宗商品贸易融资、外汇与衍生品交易及结算清算中枢",
      },
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸大厦 / 澳新银行北京分行",
        employeeCount: 150,
        description:
          "北方大区国家金融监管机构对接、大型央国企客户、跨国公司战略合作与宏观经济研究中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "珠江新城 / 澳新银行广州分行",
        employeeCount: 120,
        description: "华南大区外向型制造企业、华南区供应链金融服务、跨境贸易结算与商务拓展中心",
      },
      {
        city: C.hongkong,
        district: "中环",
        address: "金融街 8 号国际金融中心二期 / 澳新银行香港分行与北亚区支持中心",
        employeeCount: 350,
        description:
          "北亚区业务枢纽、大中华区与东南亚跨境贸易融资枢纽、离岸人民币业务及私人与企业金融服务中心",
      },
    ],
    careerWebsite: "https://www.anz.com",
    linkedin: "anz",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "thales-ca",
    name: {
      en: "Thales",
      zh: "泰雷兹",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "朝阳区",
        address: "建国门外大街 1 号国贸大厦 / 泰雷兹（Thales）中国大中华区总部",
        employeeCount: 2300,
        description:
          "大中华区总部、商务运营指挥中心、航空航天、轨道交通信号系统、数字安全与防务技术战略统筹与客户体验中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 泰雷兹上海航空电子与空中交通管理研发中心",
        employeeCount: 600,
        description:
          "专注于民用航空电子系统、飞行管理系统、机载娱乐系统、空管雷达技术及数字化仿真测试的研发与本土化工程基地",
      },
      {
        city: C.beijing,
        district: "丰台区",
        address: "总部基地 / 北京泰雷兹轨道交通控制系统有限公司（合资企业）",
        employeeCount: 500,
        description:
          "中国城市轨道交通信号系统（CBTC）核心研发、核心算法设计、线路开通调试与智能化运维中心",
      },
      {
        city: C.hongkong,
        district: "湾仔",
        address: "港湾道 / 泰雷兹香港办事处与数字安全业务中心",
        employeeCount: 300,
        description:
          "大湾区及港澳地区数字身份与安全（DIS）、云安全、银行支付安全加密解决方案及区域商务拓展枢纽",
      },
    ],
    careerWebsite: "https://www.thalesgroup.com",
    linkedin: "thalesgroup",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "dh-cn",
    name: {
      en: "Donghua Software",
      zh: "东华软件",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 东华软件股份公司总部",
        employeeCount: 4500,
        description:
          "公司全球与全国总部、大型行业应用软件研发中心、核心技术攻关、云计算与大数据平台、智慧城市顶层设计与国家部委及央企大客户交付中枢",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 东华软件上海分公司与华东研发中心",
        employeeCount: 1200,
        description:
          "华东大区金融科技、智慧医疗系统集成、大型商业银行与跨国企业数字化转型整体解决方案研发及交付基地",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 东华软件深圳分公司",
        employeeCount: 800,
        description:
          "华南大区高新技术研发、物联网应用、政务大数据、大湾区智慧城市建设与信创产品适配中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "软件路 / 东华软件广州办事处",
        employeeCount: 400,
        description: "华南区域商务拓展、华南区重点行业客户项目实施、技术支持与售后服务中心",
      },
      {
        city: C.xian,
        district: "高新区",
        address: "软件园 / 东华软件西安研发基地",
        employeeCount: 1000,
        description: "中西部核心软件研发、大规模系统测试、代码编写、技术支持与软件外包交付基地",
      },
    ],
    careerWebsite: "https://www.dhcc.com.cn",
    linkedin: "donghua-software-co-ltd",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "aerospace-cn",
    name: {
      en: "Aerospace Information",
      zh: "航天信息",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "航天城南路 8 号 / 航天信息股份有限公司总部",
        employeeCount: 4000,
        description:
          "公司全球与全国总部、国家金税工程核心技术研发中心、智慧税务、数字政务、物联网与信息安全整体解决方案统筹及大客户交付中枢",
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "漕河泾新兴技术开发区 / 航天信息上海分公司",
        employeeCount: 1200,
        description:
          "华东大区税控服务、电子发票运营中心、企业数字化财税服务、智慧政务及大企业供应链协同系统研发与服务基地",
      },
      {
        city: C.shenzhen,
        district: "福田区",
        address: "深南大道 / 航天信息深圳分公司",
        employeeCount: 800,
        description:
          "华南大区高新技术研发、大湾区智慧城市建设、金融科技安全产品、政务大数据及企业级IT服务支持中心",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "天河软件园 / 航天信息广东有限公司",
        employeeCount: 1000,
        description:
          "华南区域商务运营、华南区税控及涉税服务网点统筹、行业信息化系统集成与本地化技术支持中心",
      },
      {
        city: C.wuhan,
        district: "东湖新技术开发区",
        address: "光谷软件园 / 航天信息武汉研发中心",
        employeeCount: 900,
        description:
          "中南地区核心软件研发基地、大数据与人工智能算法应用、区块链电子凭证及全国统一技术支持协作中心",
      },
    ],
    careerWebsite: "https://www.aisino.com",
    linkedin: "aisino",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "topsec-cn",
    name: {
      en: "Topsec",
      zh: "天融信",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 北京天融信网络安全技术有限公司总部",
        employeeCount: 4000,
        description:
          "公司全球与全国总部、国家级网络安全核心技术研发中心、防火墙与边界安全、云计算安全、大数据安全与态势感知产品统筹及大客户交付中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "永丰产业基地 / 天融信北京研发与攻防实验室",
        employeeCount: 1500,
        description:
          "前沿网络安全攻防技术研发、漏洞挖掘、信创安全产品适配、密码学应用与智能化安全运营中心",
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "漕河泾新兴技术开发区 / 天融信上海分公司与华东总部",
        employeeCount: 800,
        description:
          "华东大区金融科技安全、大型央国企、跨国企业及医疗教育行业网络安全整体解决方案研发、技术支持与交付基地",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 天融信深圳分公司与华南中心",
        employeeCount: 700,
        description:
          "华南大区高新技术企业网络安全保障、大湾区智慧城市安全防护、物联网安全与本地化技术支持中心",
      },
      {
        city: C.wuhan,
        district: "东湖新技术开发区",
        address: "光谷软件园 / 天融信武汉研发基地",
        employeeCount: 900,
        description:
          "中南地区核心软件开发、安全产品代码编写、大规模漏洞扫描引擎研发与全国技术支持协作中心",
      },
    ],
    careerWebsite: "https://www.topsec.com.cn",
    linkedin: "topsec",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "jiyi-cn",
    name: {
      en: "Jiyi Network",
      zh: "极意网络",
    },
    region: "CN",
    offices: [
      {
        city: C.wuhan,
        district: "洪山区",
        address: "光谷软件园 / 极意网络（Geetest）总部",
        employeeCount: 400,
        description:
          "公司全球与全国总部、行为验证技术（Behavioral Verification）核心算法研发、人工智能风控大模型、极验验证码（GeeTest）服务系统统筹及全球运维中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 极意网络北京分公司",
        employeeCount: 150,
        description:
          "北方大区互联网大厂、金融科技、政务及大客户业务拓展、网络安全攻防对抗技术研究与客户成功支持中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 极意网络上海分公司",
        employeeCount: 120,
        description:
          "华东大区跨国企业、电商零售、游戏出海业务安全、业务风控整体解决方案咨询与技术交付基地",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 极意网络深圳分公司",
        employeeCount: 100,
        description:
          "华南大区高新技术企业、移动互联网应用、跨境电商及大湾区数字业务安全技术支持中心",
      },
    ],
    careerWebsite: "https://www.jiyi.com",
    linkedin: "jiyi-network",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "obel-cn",
    name: {
      en: "Obel",
      zh: "欧倍尔",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "上地信息产业基地 / 北京欧倍尔软件技术开发有限公司总部",
        employeeCount: 600,
        description:
          "公司全球与全国总部、虚拟仿真实验教学软件核心研发中心、化工、环境、机械、医学等全系列数字孪生与VR/AR实验教学系统统筹及大客户交付中枢",
      },
      {
        city: C.shanghai,
        district: "杨浦区",
        address: "五角场高新技术产业园区 / 欧倍尔上海分公司与华东技术支持中心",
        employeeCount: 150,
        description:
          "华东大区高校虚拟仿真实验室建设、职业院校实训基地规划、华东地区医药与化工类高校客户服务及项目交付基地",
      },
      {
        city: C.wuhan,
        district: "洪山区",
        address: "光谷软件园 / 欧倍尔武汉研发中心",
        employeeCount: 200,
        description:
          "中南地区3D图形引擎渲染、工业仿真算法优化、虚拟现实（VR）交互界面开发与软件本地化测试基地",
      },
      {
        city: C.guangzhou,
        district: "天河区",
        address: "天河软件园 / 欧倍尔华南办事处",
        employeeCount: 100,
        description:
          "华南大区商务拓展、华南理工科高校实验室数字化转型咨询、虚拟仿真金课建设与售后技术支持中心",
      },
    ],
    careerWebsite: "https://www.obel.com.cn",
    linkedin: "obel",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "huayu-cn",
    name: {
      en: "Huayu Software",
      zh: "华宇软件",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 北京华宇软件股份有限公司总部",
        employeeCount: 4000,
        description:
          "公司全球与全国总部、国家级法律科技与数字政务核心研发中心、法院/检察院/司法行政信息化系统统筹、大数据与人工智能司法应用整体解决方案及大客户交付中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "上地信息产业基地 / 华宇软件北方研发与大数据实验室",
        employeeCount: 1500,
        description:
          "前沿法律大模型、区块链电子证据、政务数据治理、信创安全软件适配与智能化业务运营中心",
      },
      {
        city: C.shanghai,
        district: "徐汇区",
        address: "漕河泾新兴技术开发区 / 华宇软件上海分公司与华东总部",
        employeeCount: 800,
        description:
          "华东大区智慧法院、数字政务、市场监管及大型企事业单位信息化系统研发、技术支持与交付基地",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 华宇软件深圳分公司",
        employeeCount: 600,
        description: "华南大区高新技术应用、大湾区智慧政务建设、数字法治与本地化技术支持中心",
      },
      {
        city: C.xian,
        district: "高新区",
        address: "软件园 / 华宇软件西安研发基地",
        employeeCount: 1000,
        description:
          "中西部核心软件开发、大规模系统测试、代码编写、数据处理中心与全国技术支持协作基地",
      },
    ],
    careerWebsite: "https://www.huayu.com.cn",
    linkedin: "huayu-software",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "seeyon-cn",
    name: {
      en: "Seeyon",
      zh: "致远互联",
    },
    region: "CN",
    offices: [
      {
        city: C.beijing,
        district: "海淀区",
        address: "上地信息产业基地 / 北京致远互联软件股份有限公司总部",
        employeeCount: 2500,
        description:
          "公司全球与全国总部、协同管理软件（COP）核心研发中心、低代码平台、智能化协同办公系统统筹、大型企业及政务信创数字化整体解决方案及大客户交付中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 致远互联协同创新与人工智能实验室",
        employeeCount: 800,
        description:
          "前沿协同AI大模型、企业级流程自动化、数据中台、信创云生态产品适配与智能化应用研发中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 致远互联上海分公司与华东运营中心",
        employeeCount: 600,
        description:
          "华东大区跨国企业、大中型制造、金融及零售行业协同管理系统研发、技术支持、营销与实施交付基地",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 致远互联深圳分公司",
        employeeCount: 500,
        description: "华南大区高新技术企业、大湾区数字政务、企业数字化转型咨询与本地化技术支持中心",
      },
      {
        city: C.chengdu,
        district: "高新区",
        address: "天府软件园 / 致远互联成都研发基地",
        employeeCount: 700,
        description:
          "中西部核心软件开发、协同产品模块测试、代码编写、全国客户服务支撑与远程技术支持协作基地",
      },
    ],
    careerWebsite: "https://www.seeyon.com",
    linkedin: "seeyon",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "goodnotes-cn",
    name: {
      en: "Goodnotes",
      zh: "好笔记",
    },
    region: "CN",
    offices: [
      {
        city: C.shanghai,
        district: "浦东新区",
        address: "张江高科技园区 / 好笔记（Goodnotes）中国研发中心",
        employeeCount: 200,
        description:
          "大中华区总部、数字笔记应用软件核心研发中心、跨平台同步技术、手写识别与智能化笔记管理系统统筹及全球运维中枢",
      },
      {
        city: C.beijing,
        district: "海淀区",
        address: "中关村软件园 / 好笔记北京分公司与人工智能实验室",
        employeeCount: 100,
        description:
          "北方大区人工智能与机器学习在数字笔记中的应用研发、自然语言处理、手写识别算法优化与客户体验支持中心",
      },
      {
        city: C.shenzhen,
        district: "南山区",
        address: "高新科技园区 / 好笔记深圳分公司与移动应用开发中心",
        employeeCount: 80,
        description: "华南大区移动应用开发、跨平台同步技术、用户体验优化与本地化技术支持中心",
      },
    ],
    careerWebsite: "https://www.goodnotes.com",
    linkedin: "goodnotes",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 0,
    },
  },
  {
    id: "whatnot-cn",
    name: {
      en: "Whatnot",
      zh: "Whatnot",
    },
    region: "CN",
    offices: [],
    careerWebsite: "https://www.whatnot.com",
    linkedin: "whatnot",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 12,
    },
  },
  {
    id: "mercado-libre-cn",
    name: {
      en: "Mercado Libre",
      zh: "美客多",
    },
    region: "CN",
    offices: [
      {
        city: C.shenzhen,
        district: "龙岗区",
        address: "天安云谷产业园 / 美客多华南总部与跨境卖家服务中心",
        employeeCount: 150,
        description: "中国区华南业务总部、跨境卖家运营支持与生态服务中心",
      },
      {
        city: C.shanghai,
        district: "浦东新区 / 徐汇区",
        address: "上海办公室 / 美客多华东商务与运营中心",
        employeeCount: 100,
        description: "中国区华东业务总部、品牌出海及生态合作伙伴拓展",
      },
    ],
    careerWebsite: "https://career.mercadolibre.com/en?country=China",
    linkedin: "mercadolibre",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 1,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 10,
    },
  },
];
