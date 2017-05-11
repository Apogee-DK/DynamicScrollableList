import {Component} from '@angular/core';
import {Hero} from './hero';

const HEROES: Hero[] = [
  {id: 1, name: 'xuttw', luckyNumber: 0, luckyCharacter: 'mhtyamla', father: 'rqtcz', mother: 'uqgxt'},
  {id: 2, name: 'zuaox', luckyNumber: 0.35266072264081405, luckyCharacter: 'orcgfxa', father: 'xnwwf', mother: 'wxqyv'},
  {id: 3, name: 'amvkj', luckyNumber: 0.8807489549845546, luckyCharacter: 'tfqpbweg', father: 'mjzww', mother: 'ewhgr'},
  {id: 4, name: 'sqzsl', luckyNumber: 1.9766475793799727, luckyCharacter: 'wtzxiz', father: 'lnjih', mother: 'kyaco'},
  {id: 5, name: 'zuzcd', luckyNumber: 0.3756639309564207, luckyCharacter: 'befsootv', father: 'vsiqo', mother: 'faviu'},
  {
    id: 6,
    name: 'mzfjd',
    luckyNumber: 3.1593795662514204,
    luckyCharacter: 'qqldppdhl',
    father: 'uuavb',
    mother: 'ongpb'
  },
  {id: 7, name: 'iheyr', luckyNumber: 5.5435344521612535, luckyCharacter: 'rmyhtoof', father: 'olhqe', mother: 'nfhij'},
  {id: 8, name: 'uhebo', luckyNumber: 4.090267721714769, luckyCharacter: 'ofshfkwl', father: 'fpxcx', mother: 'qqbbs'},
  {id: 9, name: 'brjfe', luckyNumber: 7.272447882021398, luckyCharacter: 'gslkazu', father: 'jowmb', mother: 'laals'},
  {id: 10, name: 'zpcav', luckyNumber: 3.1219247146993876, luckyCharacter: 'hxuugmb', father: 'yymlc', mother: 'zuwob'},
  {id: 11, name: 'mldma', luckyNumber: 3.0735996178623726, luckyCharacter: 'onjcanp', father: 'audfj', mother: 'yvevs'},
  {id: 12, name: 'zdlvd', luckyNumber: 1.892027888467385, luckyCharacter: 'kumjkoca', father: 'ywwz', mother: 'amykq'},
  {
    id: 13,
    name: 'axifi',
    luckyNumber: 1.4623616513262263,
    luckyCharacter: 'wiutklrc',
    father: 'pksbe',
    mother: 'himbq'
  },
  {
    id: 14,
    name: 'lgnmu',
    luckyNumber: 1.4596881858281698,
    luckyCharacter: 'dcbarkrrc',
    father: 'ikwii',
    mother: 'rtryp'
  },
  {
    id: 15,
    name: 'wdtkm',
    luckyNumber: 11.343019256365494,
    luckyCharacter: 'gngfvyegr',
    father: 'pdbxk',
    mother: 'bkycc'
  },
  {id: 16, name: 'sbkww', luckyNumber: 3.731927565844292, luckyCharacter: 'mmjtdyc', father: 'lxkbz', mother: 'pdcyq'},
  {id: 17, name: 'obsup', luckyNumber: 8.731474955703817, luckyCharacter: 'gyhqaj', father: 'ucch', mother: 'xznnv'},
  {
    id: 18,
    name: 'kqzfd',
    luckyNumber: 10.078579256516901,
    luckyCharacter: 'vtavdffkyl',
    father: 'cflny',
    mother: 'mpzcb'
  },
  {
    id: 19,
    name: 'ltxxa',
    luckyNumber: 17.978161425101014,
    luckyCharacter: 'itaordzd',
    father: 'fczhc',
    mother: 'kwjpt'
  },
  {
    id: 20,
    name: 'lyfzr',
    luckyNumber: 5.9416691261479455,
    luckyCharacter: 'kaauftjsi',
    father: 'cyqqb',
    mother: 'tmtsg'
  },
  {id: 21, name: 'amqiq', luckyNumber: 11.51946190166679, luckyCharacter: 'abfgqglt', father: 'ysmtf', mother: 'wotfx'},
  {id: 22, name: 'sejah', luckyNumber: 0.3907427131311709, luckyCharacter: 'kgivpsk', father: 'quzuu', mother: 'fflqh'},
  {id: 23, name: 'iffaf', luckyNumber: 2.839067187746873, luckyCharacter: 'rtjbc', father: 'kniuw', mother: 'wsepp'},
  {id: 24, name: 'lrxlq', luckyNumber: 19.012164693567875, luckyCharacter: 'lxasu', father: 'yisal', mother: 'mwvlk'},
  {
    id: 25,
    name: 'yjvwn',
    luckyNumber: 0.35305978615624944,
    luckyCharacter: 'tfujbwjap',
    father: 'xmlcq',
    mother: 'zsuyd'
  },
  {
    id: 26,
    name: 'jpqwv',
    luckyNumber: 10.814599775635902,
    luckyCharacter: 'lntdqnzzs',
    father: 'bghpd',
    mother: 'biseh'
  },
  {
    id: 27,
    name: 'avdxk',
    luckyNumber: 2.4390669740969626,
    luckyCharacter: 'xrvnfiose',
    father: 'drmoj',
    mother: 'qzzpf'
  },
  {id: 28, name: 'qfaqs', luckyNumber: 5.78133029694899, luckyCharacter: 'gfecewkyt', father: 'ublff', mother: 'vvatm'},
  {
    id: 29,
    name: 'tfrkt',
    luckyNumber: 0.3672161107180516,
    luckyCharacter: 'emwnygunk',
    father: 'elihj',
    mother: 'uwdoo'
  },
  {id: 30, name: 'pwqai', luckyNumber: 17.14091623656959, luckyCharacter: 'nzhhmjhh', father: 'hmhmw', mother: 'bbohd'},
  {id: 31, name: 'rfbss', luckyNumber: 11.845459264923226, luckyCharacter: 'xzcezq', father: 'ptzaj', mother: 'poxrg'},
  {
    id: 32,
    name: 'wcwbk',
    luckyNumber: 26.976591221945284,
    luckyCharacter: 'ayfmbivc',
    father: 'pqvdv',
    mother: 'sybjc'
  },
  {id: 33, name: 'tkzzb', luckyNumber: 2.531284580065318, luckyCharacter: 'pdjoqli', father: 'cufav', mother: 'ihsvm'},
  {
    id: 34,
    name: 'jvrga',
    luckyNumber: 5.695313629004336,
    luckyCharacter: 'mksfqwsuaca',
    father: 'twzqr',
    mother: 'xngf'
  },
  {
    id: 35,
    name: 'yqore',
    luckyNumber: 14.534945078632347,
    luckyCharacter: 'iqhwbxpz',
    father: 'pyarj',
    mother: 'ezlcj'
  },
  {
    id: 36,
    name: 'qxxhr',
    luckyNumber: 30.892602263605212,
    luckyCharacter: 'hoyimtine',
    father: 'hptyt',
    mother: 'ieae'
  },
  {
    id: 37,
    name: 'wpdry',
    luckyNumber: 14.619266610731206,
    luckyCharacter: 'tlwfbtzm',
    father: 'upphi',
    mother: 'lztat'
  },
  {id: 38, name: 'ndtqw', luckyNumber: 4.932016582580561, luckyCharacter: 'dkadkrmm', father: 'fjymx', mother: 'hmhj'},
  {id: 39, name: 'genlg', luckyNumber: 33.72441398651054, luckyCharacter: 'lwyophb', father: 'ddqaf', mother: 'vliso'},
  {
    id: 40,
    name: 'kiotj',
    luckyNumber: 6.293312711171993,
    luckyCharacter: 'jfuhkomkt',
    father: 'jxlqm',
    mother: 'hlyrj'
  },
  {
    id: 41,
    name: 'ncrws',
    luckyNumber: 3.0615904390583903,
    luckyCharacter: 'oogbjctm',
    father: 'uczcd',
    mother: 'grbrp'
  },
  {
    id: 42,
    name: 'krziq',
    luckyNumber: 38.30944699509293,
    luckyCharacter: 'jbtsyrolzq',
    father: 'bgbpp',
    mother: 'toeql'
  },
  {
    id: 43,
    name: 'xhfrw',
    luckyNumber: 20.184141606401198,
    luckyCharacter: 'cwiygoufn',
    father: 'aaxom',
    mother: 'elzos'
  },
  {id: 44, name: 'lmgni', luckyNumber: 38.292795031978166, luckyCharacter: 'bsgsead', father: 'buamo', mother: 'xhiea'},
  {
    id: 45,
    name: 'jqgsh',
    luckyNumber: 22.35787834220743,
    luckyCharacter: 'mtbbjhkir',
    father: 'qzutw',
    mother: 'ckedk'
  },
  {id: 46, name: 'ypdup', luckyNumber: 37.43479343436321, luckyCharacter: 'hkqqhb', father: 'kasfj', mother: 'khmok'},
  {id: 47, name: 'bcyng', luckyNumber: 34.70635429380488, luckyCharacter: 'stjngyc', father: 'ntgch', mother: 'lfsbb'},
  {
    id: 48,
    name: 'zpfpp',
    luckyNumber: 16.343082085415595,
    luckyCharacter: 'plauyljsx',
    father: 'ecvgb',
    mother: 'tfzks'
  },
  {id: 49, name: 'skaso', luckyNumber: 7.502788434097937, luckyCharacter: 'tunmjuv', father: 'xeqha', mother: 'iblis'},
  {
    id: 50,
    name: 'vglbj',
    luckyNumber: 22.408364254831458,
    luckyCharacter: 'gfhehuizd',
    father: 'aiqjb',
    mother: 'btaqc'
  },
  {id: 51, name: 'bkpsw', luckyNumber: 24.73375509198499, luckyCharacter: 'xllaqwx', father: 'zopik', mother: 'rvtyj'},
  {id: 52, name: 'gtbqt', luckyNumber: 37.79179984523326, luckyCharacter: 'vpwqjeo', father: 'vrlto', mother: 'mcalk'},
  {
    id: 53,
    name: 'dansg',
    luckyNumber: 7.063212314726229,
    luckyCharacter: 'usinnhjoln',
    father: 'bojnl',
    mother: 'hakfz'
  },
  {id: 54, name: 'unxpp', luckyNumber: 39.848754284829724, luckyCharacter: 'keewdtk', father: 'prwco', mother: 'fbrot'},
  {
    id: 55,
    name: 'rulhx',
    luckyNumber: 12.706264065316827,
    luckyCharacter: 'fhtsvzrk',
    father: 'dduxf',
    mother: 'mzkju'
  },
  {
    id: 56,
    name: 'ygfct',
    luckyNumber: 46.38000758305306,
    luckyCharacter: 'plmyadtsy',
    father: 'zgleg',
    mother: 'ptjgl'
  },
  {
    id: 57,
    name: 'pvtpb',
    luckyNumber: 33.87328242257409,
    luckyCharacter: 'lvpwiwwfue',
    father: 'skvdt',
    mother: 'ahzxi'
  },
  {id: 58, name: 'gkjjk', luckyNumber: 49.799508403535505, luckyCharacter: 'scovzw', father: 'yopod', mother: 'qzvfn'},
  {id: 59, name: 'muwbk', luckyNumber: 46.4078102654606, luckyCharacter: 'yjowqs', father: 'mrwmk', mother: 'uaedf'},
  {
    id: 60,
    name: 'jeakn',
    luckyNumber: 5.972745693158821,
    luckyCharacter: 'rxqikscjyjg',
    father: 'kdefu',
    mother: 'avhhy'
  },
  {id: 61, name: 'nrfdg', luckyNumber: 18.25367320261421, luckyCharacter: 'dybgswat', father: 'gxtgn', mother: 'nhrrw'},
  {
    id: 62,
    name: 'ngudp',
    luckyNumber: 4.683555742813915,
    luckyCharacter: 'fxgcedajo',
    father: 'cxrtg',
    mother: 'sqmut'
  },
  {id: 63, name: 'spisq', luckyNumber: 9.59488052760694, luckyCharacter: 'xwvnhzjr', father: 'pzwbc', mother: 'bbgcn'},
  {
    id: 64,
    name: 'zaerd',
    luckyNumber: 40.85862383915888,
    luckyCharacter: 'hkvbdcyyg',
    father: 'gedpp',
    mother: 'otolq'
  },
  {id: 65, name: 'cbtrd', luckyNumber: 4.776774615395993, luckyCharacter: 'kzioviws', father: 'boqjd', mother: 'oczbe'},
  {
    id: 66,
    name: 'otqvf',
    luckyNumber: 21.737348275116133,
    luckyCharacter: 'cgkcipffv',
    father: 'wlojz',
    mother: 'lcsrb'
  },
  {
    id: 67,
    name: 'hkprr',
    luckyNumber: 49.71195714148564,
    luckyCharacter: 'zgwezsocwg',
    father: 'ngrdr',
    mother: 'mygis'
  },
  {
    id: 68,
    name: 'ztqeh',
    luckyNumber: 31.153979311593318,
    luckyCharacter: 'qrhhjmnk',
    father: 'tyhwg',
    mother: 'yfjlw'
  },
  {
    id: 69,
    name: 'jgdpe',
    luckyNumber: 30.825622756501573,
    luckyCharacter: 'qjffymutca',
    father: 'smpmo',
    mother: 'cfggl'
  },
  {
    id: 70,
    name: 'fuyvo',
    luckyNumber: 42.28456368593773,
    luckyCharacter: 'xtofsdcxd',
    father: 'awqor',
    mother: 'eugdr'
  },
  {
    id: 71,
    name: 'pzcse',
    luckyNumber: 6.496642521986811,
    luckyCharacter: 'qfpfzntcg',
    father: 'wvrds',
    mother: 'wcndk'
  },
  {id: 72, name: 'ftqdk', luckyNumber: 32.3594263794454, luckyCharacter: 'zmmayo', father: 'duoye', mother: 'hfrng'},
  {
    id: 73,
    name: 'siuid',
    luckyNumber: 58.921319098727594,
    luckyCharacter: 'bjlvazza',
    father: 'cupbp',
    mother: 'enqqh'
  },
  {id: 74, name: 'xegte', luckyNumber: 21.522262467069652, luckyCharacter: 'byocxu', father: 'ewgih', mother: 'hielm'},
  {id: 75, name: 'moctd', luckyNumber: 17.755904651889683, luckyCharacter: 'yckynq', father: 'vncsl', mother: 'phndp'},
  {
    id: 76,
    name: 'gdcia',
    luckyNumber: 37.72208114498807,
    luckyCharacter: 'qnpobstvm',
    father: 'uatgb',
    mother: 'hxoom'
  },
  {id: 77, name: 'cdbjv', luckyNumber: 63.587929579748234, luckyCharacter: 'dpdyvkj', father: 'iciyg', mother: 'tzifm'},
  {
    id: 78,
    name: 'spzzj',
    luckyNumber: 6.207091337918341,
    luckyCharacter: 'trngpnfod',
    father: 'tbahv',
    mother: 'dywsx'
  },
  {
    id: 79,
    name: 'pwkyg',
    luckyNumber: 21.423276650576096,
    luckyCharacter: 'vbxmrkwq',
    father: 'egzhz',
    mother: 'kmnra'
  },
  {id: 80, name: 'ngwue', luckyNumber: 48.141884063086216, luckyCharacter: 'siupaq', father: 'hfvzk', mother: 'eqllz'},
  {
    id: 81,
    name: 'hubhu',
    luckyNumber: 14.712644998492141,
    luckyCharacter: 'mojqruryt',
    father: 'dvpgg',
    mother: 'cvwhk'
  },
  {
    id: 82,
    name: 'eqlop',
    luckyNumber: 12.414859171041156,
    luckyCharacter: 'rtvhceddyb',
    father: 'ewhdy',
    mother: 'jjnzi'
  },
  {id: 83, name: 'vvfwt', luckyNumber: 71.12347209206273, luckyCharacter: 'qadlpmvj', father: 'qluvd', mother: 'cvbdz'},
  {id: 84, name: 'lzhxx', luckyNumber: 7.082868521724944, luckyCharacter: 'cceiqro', father: 'hrnzn', mother: 'ucnrq'},
  {id: 85, name: 'gyrdr', luckyNumber: 79.55303457965017, luckyCharacter: 'ebbtah', father: 'ttobh', mother: 'toeeu'},
  {id: 86, name: 'nqyvm', luckyNumber: 33.3168419891543, luckyCharacter: 'pwdqea', father: 'fufds', mother: 'xguoe'},
  {id: 87, name: 'azpbo', luckyNumber: 7.121594297074686, luckyCharacter: 'uvzodpjb', father: 'fdllq', mother: 'baemu'},
  {id: 88, name: 'czlak', luckyNumber: 23.106691453579685, luckyCharacter: 'lrpwgj', father: 'pzzwy', mother: 'sckky'},
  {
    id: 89,
    name: 'shsco',
    luckyNumber: 6.319961555429234,
    luckyCharacter: 'klpawvrrrt',
    father: 'vhrny',
    mother: 'gyvzg'
  },
  {
    id: 90,
    name: 'lmpvb',
    luckyNumber: 51.669875082022386,
    luckyCharacter: 'mmweeqwrvhd',
    father: 'jwcce',
    mother: 'qjane'
  },
  {
    id: 91,
    name: 'ijtxz',
    luckyNumber: 86.87126612385515,
    luckyCharacter: 'nwnnrdfxf',
    father: 'zolpk',
    mother: 'krekb'
  },
  {
    id: 92,
    name: 'glsch',
    luckyNumber: 70.05619009342738,
    luckyCharacter: 'ngzhbrmrpj',
    father: 'siikz',
    mother: 'fqdy'
  },
  {id: 93, name: 'njje', luckyNumber: 77.28959820450129, luckyCharacter: 'ioufahjw', father: 'dzgmr', mother: 'dbwav'},
  {id: 94, name: 'yztsb', luckyNumber: 13.089582484035292, luckyCharacter: 'naantoa', father: 'dmoeu', mother: 'isotk'},
  {id: 95, name: 'rwjjl', luckyNumber: 17.3254710280901, luckyCharacter: 'vqpzvqsfi', father: 'ocrup', mother: 'rxcvf'},
  {
    id: 96,
    name: 'peniy',
    luckyNumber: 46.38111317544273,
    luckyCharacter: 'gvbsvsovt',
    father: 'lkldz',
    mother: 'dmgzr'
  },
  {id: 97, name: 'yojru', luckyNumber: 91.20830530031515, luckyCharacter: 'xtlkr', father: 'npedm', mother: 'mzknt'},
  {
    id: 98,
    name: 'fwgwa',
    luckyNumber: 57.69543975410918,
    luckyCharacter: 'agdyqervuq',
    father: 'fuose',
    mother: 'uselk'
  },
  {
    id: 99,
    name: 'fqwxl',
    luckyNumber: 13.824508049375611,
    luckyCharacter: 'whazoojiy',
    father: 'reser',
    mother: 'mpkit'
  },
  {
    id: 100,
    name: 'slhbo',
    luckyNumber: 53.72961359784397,
    luckyCharacter: 'gcoplxqci',
    father: 'updsa',
    mother: 'gjldd'
  },
  {id: 101, name: 'ejrtu', luckyNumber: 93.92061202436406, luckyCharacter: 'vlhsmuf', father: 'pnwpl', mother: 'tqvah'},
  {
    id: 102,
    name: 'rixxc',
    luckyNumber: 18.345393380442363,
    luckyCharacter: 'tepafhl',
    father: 'csode',
    mother: 'ocrqi'
  },
  {id: 103, name: 'jhfzv', luckyNumber: 81.85623550224712, luckyCharacter: 'fppbzs', father: 'xfbhm', mother: 'emgey'},
  {
    id: 104,
    name: 'yyvft',
    luckyNumber: 33.209207925936155,
    luckyCharacter: 'jgmmsmq',
    father: 'ngulj',
    mother: 'hpixr'
  },
  {id: 105, name: 'uwhch', luckyNumber: 59.82956226389002, luckyCharacter: 'duahwem', father: 'qsbgs', mother: 'deqoa'},
  {id: 106, name: 'wzhqq', luckyNumber: 30.66176144170154, luckyCharacter: 'rjdbdg', father: 'wjlpm', mother: 'rktqe'},
  {id: 107, name: 'mtvyo', luckyNumber: 95.1710669479714, luckyCharacter: 'utqtu', father: 'iwqjt', mother: 'mhyat'},
  {
    id: 108,
    name: 'gohdl',
    luckyNumber: 91.40427554945968,
    luckyCharacter: 'owzkkruick',
    father: 'vdssa',
    mother: 'csvag'
  },
  {
    id: 109,
    name: 'ayeyk',
    luckyNumber: 29.425643277303283,
    luckyCharacter: 'eafohfvq',
    father: 'hgoel',
    mother: 'uxdgj'
  },
  {
    id: 110,
    name: 'yuqce',
    luckyNumber: 35.6316488633125,
    luckyCharacter: 'wynqwbdgip',
    father: 'eshhz',
    mother: 'naaeo'
  },
  {id: 111, name: 'dqeuz', luckyNumber: 93.31652620915264, luckyCharacter: 'ejdio', father: 'whnoi', mother: 'ubxef'},
  {id: 112, name: 'uqhmo', luckyNumber: 34.251356362009, luckyCharacter: 'ouiprzp', father: 'lzsfh', mother: 'vndan'},
  {id: 113, name: 'mblbu', luckyNumber: 28.86431418783981, luckyCharacter: 'zuqbdf', father: 'nruzi', mother: 'yupfx'},
  {
    id: 114,
    name: 'hkfhu',
    luckyNumber: 7.367538369841035,
    luckyCharacter: 'mvfihbzh',
    father: 'kqyte',
    mother: 'ctdgg'
  },
  {
    id: 115,
    name: 'qbvpq',
    luckyNumber: 102.53386801471703,
    luckyCharacter: 'erpswrtid',
    father: 'enjqb',
    mother: 'cycyi'
  },
  {
    id: 116,
    name: 'vfigm',
    luckyNumber: 78.79708702856827,
    luckyCharacter: 'vqpzvkwsp',
    father: 'wkiqp',
    mother: 'dxehu'
  },
  {id: 117, name: 'zrpov', luckyNumber: 106.301328157153, luckyCharacter: 'zjaqyzlb', father: 'ziqkd', mother: 'khvyh'},
  {id: 118, name: 'mrlcp', luckyNumber: 93.05907961060359, luckyCharacter: 'qpounqp', father: 'lanjo', mother: 'clanq'},
  {id: 119, name: 'brftu', luckyNumber: 67.31056218959957, luckyCharacter: 'aufamj', father: 'ntqis', mother: 'vbszn'},
  {
    id: 120,
    name: 'vssfj',
    luckyNumber: 12.228351234416559,
    luckyCharacter: 'orsxlir',
    father: 'uobid',
    mother: 'glxog'
  },
  {
    id: 121,
    name: 'sxbkz',
    luckyNumber: 13.017231516400996,
    luckyCharacter: 'ymtnqwtb',
    father: 'jhhcq',
    mother: 'auxml'
  },
  {
    id: 122,
    name: 'hgcfd',
    luckyNumber: 97.50821949831617,
    luckyCharacter: 'dithtfpbuf',
    father: 'ktoco',
    mother: 'gtqqp'
  },
  {
    id: 123,
    name: 'sqfff',
    luckyNumber: 18.04959710627146,
    luckyCharacter: 'bbovsiamtfh',
    father: 'comch',
    mother: 'dddni'
  },
  {
    id: 124,
    name: 'mtecf',
    luckyNumber: 35.018030464160105,
    luckyCharacter: 'qytrgea',
    father: 'jlpef',
    mother: 'pkfdb'
  },
  {
    id: 125,
    name: 'iaxue',
    luckyNumber: 111.91445303661973,
    luckyCharacter: 'rzsoebils',
    father: 'eeyrh',
    mother: 'irugu'
  },
  {
    id: 126,
    name: 'nrodi',
    luckyNumber: 22.157828860870477,
    luckyCharacter: 'njrqvmbsrd',
    father: 'tiqgv',
    mother: 'lwdkm'
  },
  {
    id: 127,
    name: 'upgsd',
    luckyNumber: 19.952383434406926,
    luckyCharacter: 'ubjtirwcsr',
    father: 'sttaf',
    mother: 'dsfyn'
  },
  {
    id: 128,
    name: 'ulmro',
    luckyNumber: 39.700229633283925,
    luckyCharacter: 'kraeerzq',
    father: 'tqbet',
    mother: 'arwzu'
  },
  {
    id: 129,
    name: 'ehtjq',
    luckyNumber: 29.38716283133877,
    luckyCharacter: 'cvlvcqgs',
    father: 'nzbwl',
    mother: 'hxbvr'
  },
  {
    id: 130,
    name: 'rsdni',
    luckyNumber: 5.6687108072260495,
    luckyCharacter: 'zlvsciqnya',
    father: 'rvqvt',
    mother: 'uhucs'
  },
  {
    id: 131,
    name: 'mjuwx',
    luckyNumber: 51.862831209584854,
    luckyCharacter: 'fdyzvswp',
    father: 'uydby',
    mother: 'auvvt'
  },
  {id: 132, name: 'icapg', luckyNumber: 63.25443149589611, luckyCharacter: 'wxmeupk', father: 'goisd', mother: 'msgbp'},
  {
    id: 133,
    name: 'rachc',
    luckyNumber: 2.9407937518804728,
    luckyCharacter: 'mnpxhfjytm',
    father: 'rhbua',
    mother: 'icpdr'
  },
  {
    id: 134,
    name: 'giroe',
    luckyNumber: 79.41126821663076,
    luckyCharacter: 'gljjslxghu',
    father: 'msref',
    mother: 'txmrn'
  },
  {
    id: 135,
    name: 'vqdmj',
    luckyNumber: 106.46736394321366,
    luckyCharacter: 'hfwrmjghk',
    father: 'lnzcj',
    mother: 'zbosu'
  },
  {
    id: 136,
    name: 'oqsxy',
    luckyNumber: 36.3906479938421,
    luckyCharacter: 'fwhmunrcq',
    father: 'eurjd',
    mother: 'gvnbp'
  },
  {
    id: 137,
    name: 'canix',
    luckyNumber: 95.95898662965487,
    luckyCharacter: 'vykwjypc',
    father: 'cbfwx',
    mother: 'srudh'
  },
  {
    id: 138,
    name: 'pwqnk',
    luckyNumber: 24.121112333609435,
    luckyCharacter: 'yhqtxftkm',
    father: 'gjgkn',
    mother: 'orjyd'
  },
  {id: 139, name: 'vtweq', luckyNumber: 80.8858092522302, luckyCharacter: 'rflcbbfe', father: 'evvjx', mother: 'tgjbx'},
  {id: 140, name: 'ssdm', luckyNumber: 14.47117449942639, luckyCharacter: 'fgjocbe', father: 'wrnjs', mother: 'knens'},
  {id: 141, name: 'zozrv', luckyNumber: 80.23729794501385, luckyCharacter: 'rlxigd', father: 'afivj', mother: 'mahmt'},
  {
    id: 142,
    name: 'vzavr',
    luckyNumber: 20.05434868045872,
    luckyCharacter: 'poubxrfyb',
    father: 'orufb',
    mother: 'oywro'
  },
  {
    id: 143,
    name: 'hkzhr',
    luckyNumber: 50.485949953135595,
    luckyCharacter: 'eddzzdj',
    father: 'dmtnw',
    mother: 'vaery'
  },
  {id: 144, name: 'wdjyk', luckyNumber: 74.89193823274697, luckyCharacter: 'ujjebmh', father: 'bncmd', mother: 'wqpnc'},
  {id: 145, name: 'maabm', luckyNumber: 85.14328522694741, luckyCharacter: 'kdznnl', father: 'sfxfy', mother: 'zyvoq'},
  {
    id: 146,
    name: 'ppfae',
    luckyNumber: 134.28710496265666,
    luckyCharacter: 'lfcstqub',
    father: 'oxtec',
    mother: 'tryit'
  },
  {
    id: 147,
    name: 'sooar',
    luckyNumber: 143.99497005770834,
    luckyCharacter: 'kcltkhdim',
    father: 'gardf',
    mother: 'lllwz'
  },
  {id: 148, name: 'awrqg', luckyNumber: 53.50830466916811, luckyCharacter: 'nniibas', father: 'aubct', mother: 'qtgof'},
  {id: 149, name: 'zatlg', luckyNumber: 106.82208147972699, luckyCharacter: 'ovcq', father: 'wzazd', mother: 'wlreb'},
  {
    id: 150,
    name: 'xlkxv',
    luckyNumber: 48.66509141007977,
    luckyCharacter: 'ishvozmfo',
    father: 'rjluc',
    mother: 'cwtru'
  },
  {id: 151, name: 'iwyzd', luckyNumber: 39.901642091320255, luckyCharacter: 'nyqeka', father: 'utslb', mother: 'doumq'},
  {
    id: 152,
    name: 'cavir',
    luckyNumber: 21.55293446224331,
    luckyCharacter: 'qmvglgsmo',
    father: 'yprkn',
    mother: 'mwayy'
  },
  {id: 153, name: 'tywlr', luckyNumber: 116.01226048003625, luckyCharacter: 'zdbmmr', father: 'sdteu', mother: 'rizex'},
  {
    id: 154,
    name: 'zyurl',
    luckyNumber: 102.4201527295331,
    luckyCharacter: 'vkfepxzk',
    father: 'mgnur',
    mother: 'thgwe'
  },
  {
    id: 155,
    name: 'wedcl',
    luckyNumber: 24.766110015313522,
    luckyCharacter: 'pbxphgp',
    father: 'pljkt',
    mother: 'nrppz'
  },
  {
    id: 156,
    name: 'kmmlh',
    luckyNumber: 69.37658032412558,
    luckyCharacter: 'zdhvrmpcnk',
    father: 'wgmnq',
    mother: 'oowmf'
  },
  {
    id: 157,
    name: 'btbmc',
    luckyNumber: 122.87018980810085,
    luckyCharacter: 'mtorkjc',
    father: 'xjdgy',
    mother: 'zkjok'
  },
  {id: 158, name: 'svxpx', luckyNumber: 23.58646957613581, luckyCharacter: 'hnrdnxt', father: 'aznjj', mother: 'sanaj'},
  {
    id: 159,
    name: 'xeuhf',
    luckyNumber: 121.89025789021538,
    luckyCharacter: 'tqcihpbbg',
    father: 'wxhlf',
    mother: 'qujnj'
  },
  {id: 160, name: 'tbswc', luckyNumber: 33.01353191891257, luckyCharacter: 'aasnauz', father: 'zvpoy', mother: 'nmepu'},
  {
    id: 161,
    name: 'lwyxc',
    luckyNumber: 7.033285009767667,
    luckyCharacter: 'gpiejrxl',
    father: 'vefrt',
    mother: 'vglgm'
  },
  {id: 162, name: 'dzlbj', luckyNumber: 125.48325083826126, luckyCharacter: 'xejtmc', father: 'usexn', mother: 'wphyk'},
  {
    id: 163,
    name: 'cnjyn',
    luckyNumber: 19.98853210200713,
    luckyCharacter: 'kecopxnatm',
    father: 'esqdc',
    mother: 'lqasw'
  },
  {
    id: 164,
    name: 'txsng',
    luckyNumber: 120.0718359582211,
    luckyCharacter: 'jlvrobezc',
    father: 'qagqg',
    mother: 'trnbe'
  },
  {id: 165, name: 'wuoul', luckyNumber: 68.70247977344626, luckyCharacter: 'jkbcj', father: 'qtlkk', mother: 'qrirk'},
  {
    id: 166,
    name: 'cripw',
    luckyNumber: 16.130088465804736,
    luckyCharacter: 'ynzrdffdhd',
    father: 'yaira',
    mother: 'extxh'
  },
  {
    id: 167,
    name: 'ejcqj',
    luckyNumber: 15.905060120500156,
    luckyCharacter: 'tebgsvzxj',
    father: 'woonv',
    mother: 'rpvgn'
  },
  {
    id: 168,
    name: 'vtoun',
    luckyNumber: 152.12054945378537,
    luckyCharacter: 'kuynkuoa',
    father: 'moiaj',
    mother: 'cvmqg'
  },
  {
    id: 169,
    name: 'poawg',
    luckyNumber: 78.78439238056079,
    luckyCharacter: 'vjvonjvjto',
    father: 'eozwi',
    mother: 'irxfw'
  },
  {
    id: 170,
    name: 'dnfne',
    luckyNumber: 105.91302671982862,
    luckyCharacter: 'cojdhcxw',
    father: 'guaqz',
    mother: 'atcmm'
  },
  {
    id: 171,
    name: 'bdvux',
    luckyNumber: 155.98095588829497,
    luckyCharacter: 'rodegukp',
    father: 'qbujr',
    mother: 'aryat'
  },
  {
    id: 172,
    name: 'ufhut',
    luckyNumber: 128.3647522043665,
    luckyCharacter: 'rjtfkvyqc',
    father: 'aopdw',
    mother: 'zaqjn'
  },
  {
    id: 173,
    name: 'xokva',
    luckyNumber: 138.0789937192157,
    luckyCharacter: 'zdzfeitlm',
    father: 'wekbv',
    mother: 'cpllz'
  },
  {
    id: 174,
    name: 'zpuqr',
    luckyNumber: 28.51761590225292,
    luckyCharacter: 'lvgiagmq',
    father: 'xmvzr',
    mother: 'dugen'
  },
  {
    id: 175,
    name: 'bjdxr',
    luckyNumber: 130.9403552119157,
    luckyCharacter: 'ouktofeo',
    father: 'zmymg',
    mother: 'psksm'
  },
  {
    id: 176,
    name: 'inmxe',
    luckyNumber: 89.46887661513834,
    luckyCharacter: 'avabtgab',
    father: 'mrajn',
    mother: 'hweap'
  },
  {
    id: 177,
    name: 'zncsr',
    luckyNumber: 31.1643724278649,
    luckyCharacter: 'lsfqwldfx',
    father: 'zpwyd',
    mother: 'lwxrc'
  },
  {
    id: 178,
    name: 'wnevz',
    luckyNumber: 54.023443470570584,
    luckyCharacter: 'cqqqybzh',
    father: 'asgqy',
    mother: 'negli'
  },
  {
    id: 179,
    name: 'ukgyz',
    luckyNumber: 131.47254400191878,
    luckyCharacter: 'hlexlhj',
    father: 'ngvlh',
    mother: 'zqibg'
  },
  {
    id: 180,
    name: 'tipcs',
    luckyNumber: 32.00239268271199,
    luckyCharacter: 'mmixjzpjna',
    father: 'koebn',
    mother: 'cbtiz'
  },
  {
    id: 181,
    name: 'bexfe',
    luckyNumber: 149.66144028800534,
    luckyCharacter: 'ylussoqa',
    father: 'cidaa',
    mother: 'paaqj'
  },
  {
    id: 182,
    name: 'pzaqa',
    luckyNumber: 133.38624758136368,
    luckyCharacter: 'zymuzudbo',
    father: 'nraix',
    mother: 'crsif'
  },
  {
    id: 183,
    name: 'jomkx',
    luckyNumber: 175.0538969055999,
    luckyCharacter: 'rxnqdwmhfw',
    father: 'lgilf',
    mother: 'wegkt'
  },
  {id: 184, name: 'ybkmk', luckyNumber: 89.36515855437368, luckyCharacter: 'yuvpiui', father: 'hpyqp', mother: 'biduo'},
  {
    id: 185,
    name: 'pfrqj',
    luckyNumber: 112.16387443187807,
    luckyCharacter: 'ppcfyoxj',
    father: 'btert',
    mother: 'yktiu'
  },
  {id: 186, name: 'rujiw', luckyNumber: 10.168881307036013, luckyCharacter: 'wdcax', father: 'xxccp', mother: 'pxkbq'},
  {id: 187, name: 'cdwjc', luckyNumber: 120.35673711230882, luckyCharacter: 'npmlzp', father: 'emcxz', mother: 'lhkgx'},
  {
    id: 188,
    name: 'vorww',
    luckyNumber: 18.21260184661732,
    luckyCharacter: 'sajsorud',
    father: 'mzbgr',
    mother: 'mbqhu'
  },
  {
    id: 189,
    name: 'oxolq',
    luckyNumber: 42.76660348208157,
    luckyCharacter: 'mmygnfvfzg',
    father: 'mxvsj',
    mother: 'zyzpi'
  },
  {id: 190, name: 'chpqk', luckyNumber: 81.36635711163146, luckyCharacter: 'hzbeoi', father: 'uhuvn', mother: 'esppx'},
  {id: 191, name: 'pjmeb', luckyNumber: 89.917173915908, luckyCharacter: 'cyctwcynk', father: 'pzrxr', mother: 'oscvj'},
  {
    id: 192,
    name: 'feraf',
    luckyNumber: 176.9089987391546,
    luckyCharacter: 'nufzrxud',
    father: 'kuhjx',
    mother: 'lubtp'
  },
  {
    id: 193,
    name: 'ezrbp',
    luckyNumber: 186.69521112470244,
    luckyCharacter: 'prxuczl',
    father: 'qxjir',
    mother: 'aeiya'
  },
  {
    id: 194,
    name: 'tpwin',
    luckyNumber: 84.58351243551378,
    luckyCharacter: 'paxbsswtc',
    father: 'sdowu',
    mother: 'mcbyj'
  },
  {
    id: 195,
    name: 'ajnmw',
    luckyNumber: 53.9749429171438,
    luckyCharacter: 'vwkkqtkng',
    father: 'lpvkp',
    mother: 'seesm'
  },
  {id: 196, name: 'vnxqb', luckyNumber: 97.27744960514988, luckyCharacter: 'qgjp', father: 'xcold', mother: 'qmhip'},
  {id: 197, name: 'uvtyg', luckyNumber: 104.6937596860766, luckyCharacter: 'flmnahi', father: 'vmmoc', mother: 'fffvh'},
  {
    id: 198,
    name: 'wmbpa',
    luckyNumber: 115.82942922687282,
    luckyCharacter: 'fnmnubt',
    father: 'ioaqu',
    mother: 'vkdnc'
  },
  {id: 199, name: 'jdjvv', luckyNumber: 18.28462941012329, luckyCharacter: 'tqdlcs', father: 'uccj', mother: 'engmn'},
  {id: 200, name: 'qyqvv', luckyNumber: 74.5969359752846, luckyCharacter: 'yfplgxl', father: 'hxgpo', mother: 'rtzeq'},
  {
    id: 201,
    name: 'gxqrg',
    luckyNumber: 52.304895487427274,
    luckyCharacter: 'zmlfplug',
    father: 'gtdgc',
    mother: 'glcjn'
  },
  {id: 202, name: 'mhwub', luckyNumber: 78.23601833940761, luckyCharacter: 'njibohp', father: 'lnajp', mother: 'ivofu'},
  {
    id: 203,
    name: 'lpfbe',
    luckyNumber: 131.92165933417567,
    luckyCharacter: 'mdnurtves',
    father: 'hdsji',
    mother: 'fxewg'
  },
  {
    id: 204,
    name: 'rapow',
    luckyNumber: 176.96711801958241,
    luckyCharacter: 'alsoxkq',
    father: 'pwrfh',
    mother: 'dpkog'
  },
  {
    id: 205,
    name: 'chuqg',
    luckyNumber: 131.56069391137876,
    luckyCharacter: 'csrsonh',
    father: 'dzgcm',
    mother: 'uaiui'
  },
  {
    id: 206,
    name: 'apipy',
    luckyNumber: 171.08299045814445,
    luckyCharacter: 'iamamalwwbh',
    father: 'fwote',
    mother: 'hvfdq'
  },
  {
    id: 207,
    name: 'lownv',
    luckyNumber: 100.94982039469417,
    luckyCharacter: 'gmwniycisxt',
    father: 'efysq',
    mother: 'lclja'
  },
  {
    id: 208,
    name: 'oyhry',
    luckyNumber: 27.344951402171247,
    luckyCharacter: 'svsuduy',
    father: 'rinse',
    mother: 'ctgvy'
  },
  {
    id: 209,
    name: 'aflms',
    luckyNumber: 102.59705629395208,
    luckyCharacter: 'zfopxicg',
    father: 'ptkxe',
    mother: 'dyohf'
  },
  {id: 210, name: 'uwdjb', luckyNumber: 46.76499849852336, luckyCharacter: 'fimkeej', father: 'dzcxd', mother: 'ttiyb'},
  {
    id: 211,
    name: 'qodir',
    luckyNumber: 196.27491116768599,
    luckyCharacter: 'qvofwpa',
    father: 'ukulw',
    mother: 'cpvts'
  },
  {
    id: 212,
    name: 'pdyml',
    luckyNumber: 114.59133612797883,
    luckyCharacter: 'hockhszz',
    father: 'utbqz',
    mother: 'nltyp'
  },
  {
    id: 213,
    name: 'uyxhx',
    luckyNumber: 150.0278936099674,
    luckyCharacter: 'tzjrzxmf',
    father: 'lrvas',
    mother: 'zdrhc'
  },
  {
    id: 214,
    name: 'ubqmo',
    luckyNumber: 154.81452116880465,
    luckyCharacter: 'mgcpxvkkpgg',
    father: 'kmjzx',
    mother: 'otmqb'
  },
  {id: 215, name: 'vnqis', luckyNumber: 208.43505992577164, luckyCharacter: 'anaou', father: 'kxlfl', mother: 'vimob'},
  {id: 216, name: 'agcwj', luckyNumber: 213.1884665186758, luckyCharacter: 'wfmbrv', father: 'ytjux', mother: 'lcpag'},
  {
    id: 217,
    name: 'qxqtt',
    luckyNumber: 58.42562822075876,
    luckyCharacter: 'npawqzpg',
    father: 'jzguc',
    mother: 'igdfc'
  },
  {
    id: 218,
    name: 'ixyfh',
    luckyNumber: 66.99246306037801,
    luckyCharacter: 'zughhsid',
    father: 'yfohf',
    mother: 'gdgyu'
  },
  {
    id: 219,
    name: 'aimjp',
    luckyNumber: 46.036003205966736,
    luckyCharacter: 'tfdxpwsns',
    father: 'bwlos',
    mother: 'phmic'
  },
  {
    id: 220,
    name: 'jvgxt',
    luckyNumber: 213.51060963226507,
    luckyCharacter: 'zuzlifrgr',
    father: 'lrqca',
    mother: 'jhqlq'
  },
  {
    id: 221,
    name: 'xfifr',
    luckyNumber: 166.70901433784954,
    luckyCharacter: 'twmtpvmxqk',
    father: 'teizu',
    mother: 'rpjsv'
  },
  {
    id: 222,
    name: 'cpzcf',
    luckyNumber: 213.95564387029577,
    luckyCharacter: 'ysknauds',
    father: 'nmira',
    mother: 'umfcq'
  },
  {
    id: 223,
    name: 'pixnu',
    luckyNumber: 86.62982980696785,
    luckyCharacter: 'rrjyvllpd',
    father: 'ichpy',
    mother: 'hoeac'
  },
  {
    id: 224,
    name: 'zgrkh',
    luckyNumber: 216.3097539733913,
    luckyCharacter: 'umcksiplk',
    father: 'adzwz',
    mother: 'oohot'
  },
  {
    id: 225,
    name: 'ehenh',
    luckyNumber: 206.9208819040524,
    luckyCharacter: 'wytlnbkuo',
    father: 'csbdd',
    mother: 'cjbby'
  },
  {
    id: 226,
    name: 'tjlfn',
    luckyNumber: 202.45824414984574,
    luckyCharacter: 'kqzklbrqra',
    father: 'xwzgv',
    mother: 'obr'
  },
  {
    id: 227,
    name: 'wtcmg',
    luckyNumber: 147.46394343003593,
    luckyCharacter: 'hrqjvxpnw',
    father: 'ffmov',
    mother: 'jmhzn'
  },
  {
    id: 228,
    name: 'upibl',
    luckyNumber: 105.79017148382181,
    luckyCharacter: 'jdjzhsyt',
    father: 'yahig',
    mother: 'dansf'
  },
  {id: 229, name: 'cxnzi', luckyNumber: 14.310553851083538, luckyCharacter: 'rcckc', father: 'oytko', mother: 'ehzzl'},
  {id: 230, name: 'soxoh', luckyNumber: 194.5292754388827, luckyCharacter: 'tvpnf', father: 'erkkn', mother: 'lwk'},
  {
    id: 231,
    name: 'ziryn',
    luckyNumber: 124.7917329862909,
    luckyCharacter: 'ucfbsvilvi',
    father: 'mdead',
    mother: 'rdwtx'
  },
  {
    id: 232,
    name: 'oogug',
    luckyNumber: 200.05701975530687,
    luckyCharacter: 'fuzvviz',
    father: 'wsnen',
    mother: 'qeumc'
  },
  {
    id: 233,
    name: 'irzlv',
    luckyNumber: 155.93938727168597,
    luckyCharacter: 'awlqtoenn',
    father: 'dsofv',
    mother: 'dzerx'
  },
  {
    id: 234,
    name: 'letzm',
    luckyNumber: 199.01095055738756,
    luckyCharacter: 'dygemss',
    father: 'jovjp',
    mother: 'xzoby'
  },
  {
    id: 235,
    name: 'kbtgn',
    luckyNumber: 41.938974227871505,
    luckyCharacter: 'yxpwzzhf',
    father: 'nbrjj',
    mother: 'ygici'
  },
  {id: 236, name: 'xvuxf', luckyNumber: 194.0040475572915, luckyCharacter: 'amoemhp', father: 'osekw', mother: 'aybvm'},
  {
    id: 237,
    name: 'ijoyv',
    luckyNumber: 66.99255554995166,
    luckyCharacter: 'zslugkurvi',
    father: 'oegsa',
    mother: 'xueku'
  },
  {
    id: 238,
    name: 'scrxp',
    luckyNumber: 181.3590727040567,
    luckyCharacter: 'ftpupefqyb',
    father: 'karpe',
    mother: 'yrhxc'
  },
  {
    id: 239,
    name: 'ihazs',
    luckyNumber: 2.5942508005615528,
    luckyCharacter: 'nuywzuq',
    father: 'zuema',
    mother: 'ursfs'
  },
  {id: 240, name: 'xypiv', luckyNumber: 32.361296917563806, luckyCharacter: 'bpgpq', father: 'wsfdo', mother: 'gcvzb'},
  {id: 241, name: 'rmvyv', luckyNumber: 54.654077332255255, luckyCharacter: 'aoopzq', father: 'qpgzr', mother: 'mbrww'},
  {
    id: 242,
    name: 'eibkg',
    luckyNumber: 42.430289602535424,
    luckyCharacter: 'hvdjbar',
    father: 'xikhs',
    mother: 'rhnrf'
  },
  {id: 243, name: 'fseie', luckyNumber: 6.55926580404399, luckyCharacter: 'opcolkidc', father: 'rzth', mother: 'abkba'},
  {id: 244, name: 'sfmhj', luckyNumber: 38.15079437089526, luckyCharacter: 'adibhdg', father: 'ytexi', mother: 'acdrt'},
  {
    id: 245,
    name: 'klgkh',
    luckyNumber: 86.42495634322951,
    luckyCharacter: 'gghbdrvt',
    father: 'sefez',
    mother: 'yebbh'
  },
  {
    id: 246,
    name: 'ojdnp',
    luckyNumber: 138.393881177329,
    luckyCharacter: 'wmleuzgwhq',
    father: 'pjcst',
    mother: 'yvuxt'
  },
  {
    id: 247,
    name: 'gswqh',
    luckyNumber: 102.92693887363716,
    luckyCharacter: 'egppwyi',
    father: 'njndd',
    mother: 'xyyvk'
  },
  {id: 248, name: 'nwytn', luckyNumber: 201.7492314963858, luckyCharacter: 'fzhpezh', father: 'dembh', mother: 'uirhj'},
  {id: 249, name: 'nzsvq', luckyNumber: 170.1815050303098, luckyCharacter: 'xvcojz', father: 'kdsxe', mother: 'qxrep'},
  {
    id: 250,
    name: 'hbioa',
    luckyNumber: 15.06691746407858,
    luckyCharacter: 'yxyktijbh',
    father: 'kbvut',
    mother: 'psmgd'
  },
  {
    id: 251,
    name: 'mfxyt',
    luckyNumber: 30.012988554839914,
    luckyCharacter: 'ncnkzafae',
    father: 'edjcp',
    mother: 'iufad'
  },
  {
    id: 252,
    name: 'hdlvq',
    luckyNumber: 59.867326879221054,
    luckyCharacter: 'lspztwuvm',
    father: 'oijpl',
    mother: 'zjrmg'
  },
  {
    id: 253,
    name: 'ynukv',
    luckyNumber: 186.7427761174175,
    luckyCharacter: 'fbihqejtod',
    father: 'oestw',
    mother: 'iiaba'
  },
  {id: 254, name: 'dkehj', luckyNumber: 88.58644792044366, luckyCharacter: 'cgbzpxr', father: 'lvble', mother: 'nhsvn'},
  {
    id: 255,
    name: 'tilgo',
    luckyNumber: 113.46634335217414,
    luckyCharacter: 'sdrmguzz',
    father: 'yunku',
    mother: 'wrmou'
  },
  {id: 256, name: 'wdczw', luckyNumber: 154.71445116393144, luckyCharacter: 'ptzmvz', father: 'zpkav', mother: 'lhgvu'},
  {
    id: 257,
    name: 'nhvpx',
    luckyNumber: 87.05042371390732,
    luckyCharacter: 'ashvtochp',
    father: 'njsfj',
    mother: 'ecwer'
  },
  {
    id: 258,
    name: 'gftga',
    luckyNumber: 108.8711443911407,
    luckyCharacter: 'tpajbjjo',
    father: 'rezoz',
    mother: 'roxdb'
  },
  {id: 259, name: 'xrfnx', luckyNumber: 127.21323703544093, luckyCharacter: 'xvxnqg', father: 'kmrba', mother: 'yzwjo'},
  {
    id: 260,
    name: 'zivmw',
    luckyNumber: 32.80712675744344,
    luckyCharacter: 'dwgtfszi',
    father: 'lvjon',
    mother: 'zfhgr'
  },
  {id: 261, name: 'cehnx', luckyNumber: 214.5282000640008, luckyCharacter: 'ithrzr', father: 'tjylz', mother: 'yvtzx'},
  {
    id: 262,
    name: 'fawem',
    luckyNumber: 221.58556251835608,
    luckyCharacter: 'irzaypoe',
    father: 'haqkw',
    mother: 'nsnoy'
  },
  {id: 263, name: 'znytd', luckyNumber: 65.67917249478442, luckyCharacter: 'cnnjma', father: 'vkrfx', mother: 'ficqb'},
  {
    id: 264,
    name: 'krdwq',
    luckyNumber: 150.06266257614226,
    luckyCharacter: 'vlelixd',
    father: 'zdmkd',
    mother: 'bymut'
  },
  {id: 265, name: 'xvatz', luckyNumber: 53.55527293369073, luckyCharacter: 'pkcsbot', father: 'nsduo', mother: 'eoamt'},
  {id: 266, name: 'zeitx', luckyNumber: 213.0123528726871, luckyCharacter: 'naqrpi', father: 'urgyv', mother: 'uajad'},
  {
    id: 267,
    name: 'eepao',
    luckyNumber: 60.96394991588115,
    luckyCharacter: 'yrxjhyfzn',
    father: 'bsyna',
    mother: 'mokyx'
  },
  {
    id: 268,
    name: 'legij',
    luckyNumber: 129.39968076452655,
    luckyCharacter: 'ozvmbaozih',
    father: 'eidft',
    mother: 'afzoj'
  },
  {
    id: 269,
    name: 'jwjos',
    luckyNumber: 203.47964401965763,
    luckyCharacter: 'aykhoro',
    father: 'yewfn',
    mother: 'vuaaw'
  },
  {
    id: 270,
    name: 'bwovq',
    luckyNumber: 98.42690867659933,
    luckyCharacter: 'wajmnfra',
    father: 'kqpby',
    mother: 'eweno'
  },
  {
    id: 271,
    name: 'pgmlr',
    luckyNumber: 174.03661481581008,
    luckyCharacter: 'ibcdlglr',
    father: 'eyxdr',
    mother: 'yinuf'
  },
  {id: 272, name: 'ewwpt', luckyNumber: 164.532603484132, luckyCharacter: 'buewi', father: 'vkknc', mother: 'rpwow'},
  {id: 273, name: 'kbyhf', luckyNumber: 251.09346164480957, luckyCharacter: 'wdhzg', father: 'drdwn', mother: 'mwlud'},
  {id: 274, name: 'csdyk', luckyNumber: 18.09595409349365, luckyCharacter: 'drsnfan', father: 'npapa', mother: 'zfojm'},
  {
    id: 275,
    name: 'ctvlx',
    luckyNumber: 158.30971679738877,
    luckyCharacter: 'cqsxyzjgn',
    father: 'ixiur',
    mother: 'czqsc'
  },
  {
    id: 276,
    name: 'djuki',
    luckyNumber: 199.32736154501623,
    luckyCharacter: 'puamnxdo',
    father: 'tbarf',
    mother: 'zvpis'
  },
  {
    id: 277,
    name: 'yrjwu',
    luckyNumber: 123.3049072842511,
    luckyCharacter: 'cfxbhfbid',
    father: 'retif',
    mother: 'rxaqz'
  },
  {
    id: 278,
    name: 'vypve',
    luckyNumber: 104.08114143513494,
    luckyCharacter: 'lfdfvybf',
    father: 'xerzo',
    mother: 'ydoic'
  },
  {id: 279, name: 'ofwqr', luckyNumber: 54.82978525838671, luckyCharacter: 'vfhilrm', father: 'tlhqn', mother: 'qcskz'},
  {
    id: 280,
    name: 'elniv',
    luckyNumber: 158.82480963982843,
    luckyCharacter: 'yqbbvqzh',
    father: 'fwdii',
    mother: 'zmjox'
  },
  {
    id: 281,
    name: 'qehof',
    luckyNumber: 137.68365840809795,
    luckyCharacter: 'cmmftjtwp',
    father: 'cfuox',
    mother: 'tkjte'
  },
  {id: 282, name: 'ukawq', luckyNumber: 95.9633027315898, luckyCharacter: 'epcsgq', father: 'cpsld', mother: 'pytos'},
  {
    id: 283,
    name: 'lqmae',
    luckyNumber: 167.67751714915306,
    luckyCharacter: 'nliwapzbc',
    father: 'rwoua',
    mother: 'qcwko'
  },
  {
    id: 284,
    name: 'sxujq',
    luckyNumber: 89.39084367731222,
    luckyCharacter: 'bfsaxtji',
    father: 'obogq',
    mother: 'avbkl'
  },
  {
    id: 285,
    name: 'pedzh',
    luckyNumber: 15.499184805707268,
    luckyCharacter: 'xwleoyrmc',
    father: 'ojoth',
    mother: 'wguyd'
  },
  {id: 286, name: 'oswoi', luckyNumber: 162.88840888111804, luckyCharacter: 'ocyxq', father: 'xrjmr', mother: 'ermkx'},
  {
    id: 287,
    name: 'btasf',
    luckyNumber: 48.29025705305494,
    luckyCharacter: 'nmivlhgsp',
    father: 'uyjis',
    mother: 'qjrvn'
  },
  {
    id: 288,
    name: 'fbeid',
    luckyNumber: 133.31426105957323,
    luckyCharacter: 'sntcsngavr',
    father: 'sztdy',
    mother: 'qtodr'
  },
  {id: 289, name: 'vtvgh', luckyNumber: 149.48615560208626, luckyCharacter: 'strsnv', father: 'gmlbq', mother: 'gyxjk'},
  {
    id: 290,
    name: 'lcpel',
    luckyNumber: 157.02116905637354,
    luckyCharacter: 'iuqnqibohc',
    father: 'eoxqj',
    mother: 'mtuaw'
  },
  {
    id: 291,
    name: 'kttst',
    luckyNumber: 257.38852834470634,
    luckyCharacter: 'dlwxyeed',
    father: 'eavfd',
    mother: 'duwop'
  },
  {
    id: 292,
    name: 'ltvth',
    luckyNumber: 132.18996135246144,
    luckyCharacter: 'erdfyxau',
    father: 'tnmlr',
    mother: 'svvad'
  },
  {
    id: 293,
    name: 'qmhto',
    luckyNumber: 124.05600509860135,
    luckyCharacter: 'sawnshclsj',
    father: 'nsidy',
    mother: 'kdqdt'
  },
  {id: 294, name: 'ysapk', luckyNumber: 5.6846531622101, luckyCharacter: 'derfamloi', father: 'lhhqi', mother: 'khwmf'},
  {
    id: 295,
    name: 'kpdvc',
    luckyNumber: 254.23749268945008,
    luckyCharacter: 'xwbtiezspuq',
    father: 'hbnnb',
    mother: 'hexva'
  },
  {
    id: 296,
    name: 'pyudn',
    luckyNumber: 174.98185862574798,
    luckyCharacter: 'lhxgkcev',
    father: 'htmfw',
    mother: 'bypeb'
  },
  {
    id: 297,
    name: 'qdzza',
    luckyNumber: 29.896225232660946,
    luckyCharacter: 'oarncjwp',
    father: 'feixm',
    mother: 'sfxoq'
  },
  {
    id: 298,
    name: 'snwga',
    luckyNumber: 35.788433086697715,
    luckyCharacter: 'uzrbajjq',
    father: 'swcql',
    mother: 'mzvty'
  },
  {
    id: 299,
    name: 'zybpv',
    luckyNumber: 0.7616913802544585,
    luckyCharacter: 'ncwgjvmpp',
    father: 'hmfum',
    mother: 'uievi'
  },
  {id: 300, name: 'mhyvi', luckyNumber: 32.93626880788561, luckyCharacter: 'ncuced', father: 'witaw', mother: 'lcrls'},
  {
    id: 301,
    name: 'kyprn',
    luckyNumber: 260.6714912198204,
    luckyCharacter: 'ljxcncal',
    father: 'aatfb',
    mother: 'zhudx'
  },
  {
    id: 302,
    name: 'dgtek',
    luckyNumber: 229.85760521210656,
    luckyCharacter: 'dvdmytlhid',
    father: 'evvke',
    mother: 'iuudv'
  },
  {
    id: 303,
    name: 'fqwtb',
    luckyNumber: 216.75904793977418,
    luckyCharacter: 'alegjsdgh',
    father: 'jnujq',
    mother: 'xfjvu'
  },
  {
    id: 304,
    name: 'gtkpo',
    luckyNumber: 156.88415802411927,
    luckyCharacter: 'hrdsehdorq',
    father: 'vwyad',
    mother: 'ezmfz'
  },
  {
    id: 305,
    name: 'rnzsr',
    luckyNumber: 298.36658190803047,
    luckyCharacter: 'mswnpyn',
    father: 'wugag',
    mother: 'fmvwe'
  },
  {
    id: 306,
    name: 'qmhus',
    luckyNumber: 279.08090929985667,
    luckyCharacter: 'iejhucwewi',
    father: 'bjyee',
    mother: 'qljzy'
  },
  {
    id: 307,
    name: 'ezmbr',
    luckyNumber: 160.49458345946653,
    luckyCharacter: 'rwisifo',
    father: 'xxsuh',
    mother: 'yknow'
  },
  {
    id: 308,
    name: 'jngqy',
    luckyNumber: 154.22810575718466,
    luckyCharacter: 'rjadrfzmkp',
    father: 'hnvyz',
    mother: 'hkwhc'
  },
  {
    id: 309,
    name: 'rxqki',
    luckyNumber: 284.46905838781856,
    luckyCharacter: 'zkaiilsa',
    father: 'uyglv',
    mother: 'uqfce'
  },
  {id: 310, name: 'uraeq', luckyNumber: 292.198256145059, luckyCharacter: 'nlgctc', father: 'gudvd', mother: 'yuswm'},
  {id: 311, name: 'uezqo', luckyNumber: 238.4668264603019, luckyCharacter: 'mzknvmva', father: 'otf', mother: 'vrmyc'},
  {
    id: 312,
    name: 'uflpj',
    luckyNumber: 179.07675683636472,
    luckyCharacter: 'gsubtkizw',
    father: 'sgnjj',
    mother: 'rhfaa'
  },
  {id: 313, name: 'esndd', luckyNumber: 266.45797263795674, luckyCharacter: 'ejrtxf', father: 'rspdh', mother: 'ijpjw'},
  {
    id: 314,
    name: 'bizos',
    luckyNumber: 137.02656069183973,
    luckyCharacter: 'ddnrxrbs',
    father: 'mtgeb',
    mother: 'lryic'
  },
  {
    id: 315,
    name: 'nzjax',
    luckyNumber: 139.77788833429076,
    luckyCharacter: 'rvaaizyfa',
    father: 'cjazp',
    mother: 'hhmdb'
  },
  {
    id: 316,
    name: 'espbu',
    luckyNumber: 50.02015136680946,
    luckyCharacter: 'rbxampcmli',
    father: 'vvfzw',
    mother: 'ympaq'
  },
  {
    id: 317,
    name: 'diehc',
    luckyNumber: 283.6984512171801,
    luckyCharacter: 'tmghjkmn',
    father: 'nampl',
    mother: 'qoxkt'
  },
  {id: 318, name: 'fwwqi', luckyNumber: 183.83497184808735, luckyCharacter: 'ytlmpp', father: 'okwgk', mother: 'ikdus'},
  {
    id: 319,
    name: 'sfiub',
    luckyNumber: 88.66486470685776,
    luckyCharacter: 'xscdrwib',
    father: 'ifnvg',
    mother: 'vqlat'
  },
  {
    id: 320,
    name: 'pwgxv',
    luckyNumber: 265.15087930111645,
    luckyCharacter: 'nxlwijy',
    father: 'nsuvw',
    mother: 'siyve'
  },
  {
    id: 321,
    name: 'ewnra',
    luckyNumber: 313.1607902520092,
    luckyCharacter: 'fwimcrvg',
    father: 'sxmqv',
    mother: 'zeopi'
  },
  {
    id: 322,
    name: 'rgsqh',
    luckyNumber: 192.80458565404555,
    luckyCharacter: 'hbguhqjm',
    father: 'drega',
    mother: 'redup'
  },
  {
    id: 323,
    name: 'czzfo',
    luckyNumber: 186.22272759502115,
    luckyCharacter: 'llzeunhe',
    father: 'skzjk',
    mother: 'mabcx'
  },
  {
    id: 324,
    name: 'jepin',
    luckyNumber: 131.40316940327503,
    luckyCharacter: 'lyynhcjq',
    father: 'ilmiu',
    mother: 'czemb'
  },
  {id: 325, name: 'orwde', luckyNumber: 211.55163636104217, luckyCharacter: 'owvjvu', father: 'gsqru', mother: 'ymcea'},
  {
    id: 326,
    name: 'yzvgw',
    luckyNumber: 263.1505883883032,
    luckyCharacter: 'kldrxjiw',
    father: 'aoqqo',
    mother: 'llwfm'
  },
  {
    id: 327,
    name: 'qnukl',
    luckyNumber: 231.22708913854302,
    luckyCharacter: 'hnqrkejpm',
    father: 'sthqj',
    mother: 'hrfh'
  },
  {id: 328, name: 'yzdhq', luckyNumber: 289.0570141584187, luckyCharacter: 'gjcmfzt', father: 'cnvel', mother: 'hmhys'},
  {
    id: 329,
    name: 'nnczj',
    luckyNumber: 180.47682008788917,
    luckyCharacter: 'dkaqnasi',
    father: 'aiihd',
    mother: 'sztlb'
  },
  {
    id: 330,
    name: 'tkcdq',
    luckyNumber: 50.48718001462289,
    luckyCharacter: 'xlreluzbfx',
    father: 'ogdoy',
    mother: 'yjztd'
  },
  {
    id: 331,
    name: 'lzjcq',
    luckyNumber: 281.62588720962225,
    luckyCharacter: 'xmymhhns',
    father: 'qvidi',
    mother: 'xdcla'
  },
  {
    id: 332,
    name: 'srnjd',
    luckyNumber: 85.9039867954992,
    luckyCharacter: 'jpwwtixmnkf',
    father: 'mxsqe',
    mother: 'fmnoq'
  },
  {
    id: 333,
    name: 'tpdak',
    luckyNumber: 231.74642558699668,
    luckyCharacter: 'pobdwuwg',
    father: 'nqvsc',
    mother: 'brsvi'
  },
  {id: 334, name: 'vnexm', luckyNumber: 4.9767220779762, luckyCharacter: 'fytkpohco', father: 'kmmsp', mother: 'ixeic'},
  {
    id: 335,
    name: 'lwxoj',
    luckyNumber: 209.9749944769597,
    luckyCharacter: 'ozngjykmfr',
    father: 'xkwxh',
    mother: 'eyowj'
  },
  {
    id: 336,
    name: 'hoanx',
    luckyNumber: 100.63283839831348,
    luckyCharacter: 'yufhvenq',
    father: 'puncj',
    mother: 'vxbsy'
  },
  {
    id: 337,
    name: 'lbncg',
    luckyNumber: 54.820551166717536,
    luckyCharacter: 'corbbvza',
    father: 'xuwzs',
    mother: 'cemfo'
  },
  {
    id: 338,
    name: 'esbpl',
    luckyNumber: 235.6646565085056,
    luckyCharacter: 'yubuqqgkrjd',
    father: 'aqatg',
    mother: 'jirfd'
  },
  {
    id: 339,
    name: 'bnfcw',
    luckyNumber: 256.77144900862567,
    luckyCharacter: 'abyfiyn',
    father: 'kgrry',
    mother: 'zmcjw'
  },
  {id: 340, name: 'yvwqj', luckyNumber: 325.316197394645, luckyCharacter: 'xzprxvr', father: 'pssxa', mother: 'qmrot'},
  {id: 341, name: 'czvnw', luckyNumber: 331.66226861203654, luckyCharacter: 'roysyr', father: 'qzmkb', mother: 'vhdys'},
  {id: 342, name: 'huoqt', luckyNumber: 19.754028279380627, luckyCharacter: 'wyuwqf', father: 'jmlaj', mother: 'ybwjs'},
  {
    id: 343,
    name: 'bwjoh',
    luckyNumber: 170.36415216151627,
    luckyCharacter: 'fpnxgwndde',
    father: 'pddfe',
    mother: 'xxakg'
  },
  {
    id: 344,
    name: 'pngfa',
    luckyNumber: 58.13439524221918,
    luckyCharacter: 'oywnflvf',
    father: 'rslnf',
    mother: 'srywz'
  },
  {id: 345, name: 'vtabx', luckyNumber: 260.89642200912385, luckyCharacter: 'ggyzop', father: 'idoaa', mother: 'uwfqd'},
  {
    id: 346,
    name: 'gtbkp',
    luckyNumber: 281.9758665552693,
    luckyCharacter: 'yxrbhugz',
    father: 'rziuf',
    mother: 'mayiq'
  },
  {
    id: 347,
    name: 'uqkux',
    luckyNumber: 341.721602478604,
    luckyCharacter: 'cwehrudpow',
    father: 'yeiex',
    mother: 'qhpms'
  },
  {
    id: 348,
    name: 'zwlux',
    luckyNumber: 257.10031103993794,
    luckyCharacter: 'umvxdcwfvcq',
    father: 'qtqlf',
    mother: 'xaq'
  },
  {
    id: 349,
    name: 'endgp',
    luckyNumber: 193.93898610630038,
    luckyCharacter: 'niwrvcum',
    father: 'reyfh',
    mother: 'pweeg'
  },
  {
    id: 350,
    name: 'jdnwd',
    luckyNumber: 98.91161764339381,
    luckyCharacter: 'egkbfzny',
    father: 'vsprg',
    mother: 'mlrio'
  },
  {
    id: 351,
    name: 'czzmq',
    luckyNumber: 280.1461952234432,
    luckyCharacter: 'dwznegxzbs',
    father: 'cwuct',
    mother: 'jolxt'
  },
  {id: 352, name: 'aaqq', luckyNumber: 349.21149702612723, luckyCharacter: 'qwckgah', father: 'icaff', mother: 'uqgrf'},
  {
    id: 353,
    name: 'anzxj',
    luckyNumber: 117.2987506161856,
    luckyCharacter: 'gvoablegch',
    father: 'garie',
    mother: 'uqacd'
  },
  {
    id: 354,
    name: 'uftyj',
    luckyNumber: 224.58690895721682,
    luckyCharacter: 'yjvoqwi',
    father: 'igrap',
    mother: 'tzwij'
  },
  {
    id: 355,
    name: 'xnlew',
    luckyNumber: 165.71218223126138,
    luckyCharacter: 'tewwkgyww',
    father: 'pwfva',
    mother: 'yynuj'
  },
  {
    id: 356,
    name: 'pjrgd',
    luckyNumber: 116.75798338210589,
    luckyCharacter: 'erxbpnr',
    father: 'wwwge',
    mother: 'fqrrj'
  },
  {
    id: 357,
    name: 'mlwki',
    luckyNumber: 27.089542747418797,
    luckyCharacter: 'wnpsvysb',
    father: 'gtysp',
    mother: 'euyoq'
  },
  {id: 358, name: 'inwzt', luckyNumber: 318.0356115674996, luckyCharacter: 'uftzfp', father: 'czwcf', mother: 'fqina'},
  {
    id: 359,
    name: 'erkgi',
    luckyNumber: 60.549289296939605,
    luckyCharacter: 'ptkdphws',
    father: 'fggpt',
    mother: 'wvzif'
  },
  {
    id: 360,
    name: 'xvdyy',
    luckyNumber: 27.137701672820885,
    luckyCharacter: 'jtjvimpi',
    father: 'xlibf',
    mother: 'wdpkr'
  },
  {
    id: 361,
    name: 'nmjxu',
    luckyNumber: 332.66832627836175,
    luckyCharacter: 'csnkveh',
    father: 'pkzuc',
    mother: 'efqpf'
  },
  {
    id: 362,
    name: 'sfddl',
    luckyNumber: 75.12556274134039,
    luckyCharacter: 'xbypcjie',
    father: 'pmkxu',
    mother: 'pncbg'
  },
  {
    id: 363,
    name: 'wkkce',
    luckyNumber: 17.385135368139007,
    luckyCharacter: 'jscwztmof',
    father: 'zplja',
    mother: 'psjle'
  },
  {
    id: 364,
    name: 'vvxuf',
    luckyNumber: 299.7441103759747,
    luckyCharacter: 'hlaelfsdhk',
    father: 'hjbhk',
    mother: 'shlgk'
  },
  {id: 365, name: 'ojhzu', luckyNumber: 242.74396515572388, luckyCharacter: 'roloxd', father: 'qhzzz', mother: 'wniqr'},
  {id: 366, name: 'eobsd', luckyNumber: 90.11422461324179, luckyCharacter: 'jmowtfd', father: 'friju', mother: 'fbnft'},
  {
    id: 367,
    name: 'fyek',
    luckyNumber: 226.68183799596642,
    luckyCharacter: 'hnxtnngkjh',
    father: 'vqupb',
    mother: 'wyutc'
  },
  {id: 368, name: 'gtcnp', luckyNumber: 336.0143588134907, luckyCharacter: 'sdparo', father: 'waqjt', mother: 'wapmg'},
  {id: 369, name: 'lksdl', luckyNumber: 45.80957912233822, luckyCharacter: 'fognfhn', father: 'ktvfr', mother: 'lzwyv'},
  {
    id: 370,
    name: 'rtghb',
    luckyNumber: 140.74595106634533,
    luckyCharacter: 'entouaxk',
    father: 'kwgvr',
    mother: 'gwbjr'
  },
  {
    id: 371,
    name: 'pbuiw',
    luckyNumber: 298.10650524094825,
    luckyCharacter: 'nkdaeli',
    father: 'houbo',
    mother: 'jfprn'
  },
  {
    id: 372,
    name: 'zyfad',
    luckyNumber: 230.14296737706448,
    luckyCharacter: 'lwxjlpcmk',
    father: 'vhihi',
    mother: 'qrsde'
  },
  {
    id: 373,
    name: 'misrg',
    luckyNumber: 9.558174716269043,
    luckyCharacter: 'lgigxfip',
    father: 'fdkry',
    mother: 'khnfj'
  },
  {
    id: 374,
    name: 'wmmoi',
    luckyNumber: 349.1759038561725,
    luckyCharacter: 'llnjbwdva',
    father: 'kxprr',
    mother: 'jucvh'
  },
  {
    id: 375,
    name: 'vowqc',
    luckyNumber: 15.246560111430401,
    luckyCharacter: 'pyvnhdpkg',
    father: 'bmjhn',
    mother: 'vcrzu'
  },
  {
    id: 376,
    name: 'dppsk',
    luckyNumber: 16.51581284234763,
    luckyCharacter: 'csivwecti',
    father: 'azdti',
    mother: 'jcxmu'
  },
  {
    id: 377,
    name: 'gbfis',
    luckyNumber: 344.3340674815184,
    luckyCharacter: 'vaeartgki',
    father: 'waixx',
    mother: 'eujcg'
  },
  {
    id: 378,
    name: 'tzcjf',
    luckyNumber: 48.477511929537506,
    luckyCharacter: 'undosvdr',
    father: 'jdgzj',
    mother: 'ptjfg'
  },
  {
    id: 379,
    name: 'qlgip',
    luckyNumber: 362.9157058654881,
    luckyCharacter: 'igfefdfn',
    father: 'fxnbo',
    mother: 'rsbri'
  },
  {
    id: 380,
    name: 'epcwp',
    luckyNumber: 191.6354184512592,
    luckyCharacter: 'durltpoi',
    father: 'orerb',
    mother: 'vduch'
  },
  {id: 381, name: 'mmauo', luckyNumber: 72.60445429266508, luckyCharacter: 'jzlkmco', father: 'upojw', mother: 'xdtgx'},
  {id: 382, name: 'srpqs', luckyNumber: 363.5320117252891, luckyCharacter: 'ojkgnhppi', father: 'losit', mother: 'kqs'},
  {
    id: 383,
    name: 'wkqot',
    luckyNumber: 39.842642410519986,
    luckyCharacter: 'gmgpxyif',
    father: 'pysso',
    mother: 'chqxd'
  },
  {
    id: 384,
    name: 'oodco',
    luckyNumber: 233.81063404178065,
    luckyCharacter: 'raraohsuc',
    father: 'qwyzr',
    mother: 'pbsjq'
  },
  {
    id: 385,
    name: 'smbtx',
    luckyNumber: 37.78583561455022,
    luckyCharacter: 'eadjkrxciso',
    father: 'xicdj',
    mother: 'tgixi'
  },
  {
    id: 386,
    name: 'azykv',
    luckyNumber: 366.2932254893854,
    luckyCharacter: 'otnahzog',
    father: 'arjyx',
    mother: 'nuolk'
  },
  {id: 387, name: 'dknuy', luckyNumber: 13.20804101066308, luckyCharacter: 'gigrxmt', father: 'hgyyk', mother: 'omnek'},
  {
    id: 388,
    name: 'gavzu',
    luckyNumber: 107.9928209300847,
    luckyCharacter: 'tqmfccho',
    father: 'ujkyi',
    mother: 'qeums'
  },
  {
    id: 389,
    name: 'eaget',
    luckyNumber: 352.56921680671235,
    luckyCharacter: 'dkljbfbd',
    father: 'tonks',
    mother: 'gnjq'
  },
  {
    id: 390,
    name: 'xxphd',
    luckyNumber: 149.92471908752995,
    luckyCharacter: 'qxmurdn',
    father: 'yynkf',
    mother: 'sohey'
  },
  {
    id: 391,
    name: 'kfamd',
    luckyNumber: 237.9538164107768,
    luckyCharacter: 'kkshmfpat',
    father: 'yrlus',
    mother: 'trucl'
  },
  {
    id: 392,
    name: 'qtwaq',
    luckyNumber: 376.40457321232043,
    luckyCharacter: 'yxfuvse',
    father: 'wxqco',
    mother: 'bibgl'
  },
  {
    id: 393,
    name: 'ogkwi',
    luckyNumber: 12.619665815131983,
    luckyCharacter: 'vfkbjfi',
    father: 'buikg',
    mother: 'ivlli'
  },
  {
    id: 394,
    name: 'tdvcu',
    luckyNumber: 26.726809709859108,
    luckyCharacter: 'vyabjma',
    father: 'elwlk',
    mother: 'xzjms'
  },
  {id: 395, name: 'kjlhu', luckyNumber: 72.93112813303738, luckyCharacter: 'myf', father: 'bnjpl', mother: 'pouir'},
  {
    id: 396,
    name: 'gkuud',
    luckyNumber: 41.78930187610941,
    luckyCharacter: 'ezilkqyvx',
    father: 'lxbhc',
    mother: 'idvpd'
  },
  {
    id: 397,
    name: 'zmxjh',
    luckyNumber: 166.8547457735893,
    luckyCharacter: 'psbjaecf',
    father: 'kmxxl',
    mother: 'ywtbn'
  },
  {
    id: 398,
    name: 'cnshn',
    luckyNumber: 122.60143961494249,
    luckyCharacter: 'ffrkbjj',
    father: 'pbvnm',
    mother: 'bkblr'
  },
  {
    id: 399,
    name: 'pszhb',
    luckyNumber: 272.96717394883825,
    luckyCharacter: 'vdlanacn',
    father: 'whfjs',
    mother: 'gzraf'
  },
  {id: 400, name: 'hwhpi', luckyNumber: 149.7216351780073, luckyCharacter: 'hapldlrc', father: 'ctprg', mother: 'hrjwk'}
]

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2><h3>{{count}} heroes serving the country</h3>
    <dynamic-list [loadAmount]="limit"
                  [items]="heroes"
                  (selection)="selectedHero=$event"></dynamic-list>
    <hero-detail [hero]="selectedHero"></hero-detail>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[] = HEROES;
  count: number = this.heroes.length;
  selectedHero: Hero;
  limit: number = 20;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
