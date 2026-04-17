
const TARGET_SUCCESS_COUNT = 24;
const HIDDEN_WORDS = ["一间能看见月亮的房间", "一条洒满月光的路"];

const SPECIAL_LINES = {
  "郑州": "是芮芮出生、长大的地方，你在这里收获了亲情、友情以及早八，也成为了善良、勇敢、美好的人～",
  "北京": "是你上大学的地方，也是你有很多回忆和体验的地方，祝愿你今后在这里的每一天都是快乐的！",
  "烟台": "相信迷笛音乐节是你美好的回忆。",
  "云南": "愿你以后可以在这里领略自然的清新与辽远，也感受返璞归真的日常。",
  "大阪": "是我生活的城市哈哈，希望我分享的那些生活角落可以让你得到放松～",
  "东京": "这里生活节奏真的好快哦，不过也有很多咖啡馆唱片店以及有趣的小店！",
  "京都": "是我也生活了很久的城市，是让人迷恋而沉醉的城市，鸭川散步的感觉好惬意。",
  "雷克雅未克": "是在世界尽头的地方，是冰与火之国，是极光飞舞以及精灵闪烁的地方。",
  "冰岛": "是在世界尽头的地方，是冰与火之国，是极光飞舞以及精灵闪烁的地方。",
  "日本": "这是个充满矛盾的地方，是我留下了十几年记忆的地方。",
  "对外经贸大学": "解锁新词汇！愿你在这里的经历都是难忘而美好的，走过的路在未来都会闪闪发光。",
  "惠新西街": "解锁新词汇！愿你在这里的经历都是难忘而美好的，走过的路在未来都会闪闪发光。",
  "鸭川": "这里夏天时真的会有鸭子游过呢，傍晚川水会被夕阳温柔覆盖，夜晚有人放线香花火，明月低悬在远山。",
  "国家地理展览": "你想到这个展览啦～神奇而壮丽的景象很难忘，开心的回忆！",
  "陶喆": "你果然想到他啦！听他唱歌真的会变得心情舒畅呢！",
  "袁娅维": "耶，想到她啦！好像是我们第一个提起过的歌手～",
  "方大同": "他会像一颗星星一样永远闪耀。",
  "权志龙": "我记得你喜欢他啦，他很酷也很可爱啦。",
  "许巍": "他也是我很喜欢的歌手，每次听都觉得烦恼可以随风而散，融入大海。",
  "deca joins": "关于他们有很多记忆呢，我记得那天晚上我看完演出你安慰我，也记得你把他们的日历贴在宿舍～",
  "刺猬": "是会让人有些感慨的乐队呢。上大学时ta们和后鲨的海报会出现在校园，午后从鼓楼走到MAO去看演出。",
  "Sigur Rós": "很开心你想到这个词，它是我最喜欢的乐队～",
  "Live House": "愿你可以在更多音乐现场感受放松与美妙的音乐体验～",
  "音乐现场": "愿你可以在更多音乐现场感受放松与美妙的音乐体验～",
  "《少年锦时》": "相信快乐很简单，爱很简单～愿你未来的生活也都快乐如彼时～",
  "看日落": "解锁新词汇！是你很喜欢的呢，日落真的很美很温柔，愿你未来都能有随时感受日落的心境。",
  "日落": "解锁新词汇！是你很喜欢的呢，日落真的很美很温柔，愿你未来都能有随时感受日落的心境。",
  "日落时分": "解锁新词汇！是你很喜欢的呢，日落真的很美很温柔，愿你未来都能有随时感受日落的心境。",
  "画画": "你画的小画很可爱呢！愿你今后也随时有写写画画、做自己喜欢的事的惬意时刻～",
  "手作": "好像是你在郑州和朋友一起喜欢做的事呢，感觉是很开心惬意的时光啦！",
  "逛公园": "愿你有更多静下来感受自然与放松的时光～",
  "朝阳公园": "愿你有更多静下来感受自然与放松的时光～",
  "睡觉": "哇，真的会想到这个词！祝你以后每天都有好的睡眠～",
  "早八": "记录一只充满奇迹而幸运的、给人温暖而淘气的小猫！",
  "银杏叶": "很喜欢秋天整条街都是金黄色的景象，也记得你在大学校园里捡到的一大束落叶。",
  "skullpanda": "很开心你想到这个词，我很喜欢TA！",
  "小马宝莉": "TA们很可爱也很勇敢，很好笑也很感人。还有我记得你喜欢碧琪啦！",
  "小黑": "我们的小黑被想到啦，哈哈哈！它也很开心你给起的“珍珠”这个名字！",
  "相机": "我们都是热爱生活的人，也祝愿你今后能够记录下更多美好回忆～",
  "眼药水": "可能是我们认识时提到的第一个物品哈哈，你说你眼睛干涩时会用海露。",
  "护手霜": "哈哈，以护手霜为首的我的谜之百宝箱～",
  "退烧贴": "祝你以后身体健康，永远都用不上它！",
  "贝斯": "很开心你想到它！贝斯的音色和律动感让人着迷，它在乐队中也是不可或缺的！",
  "蓝莓": "好像是我们第一个聊到的水果哈哈～蓝莓对眼睛很好啦！",
  "多肉葡萄": "你喜欢的喜茶的饮品～谢谢推荐啦，它确实很好喝！",
  "提子饼干": "你想到这个词啦！是我喜欢的零食，也是我的微信名哈哈～",
  "见手青": "最初是在《舌尖上的中国》里看到的，希望以后有机会在云南吃到～",
  "《动物世界》": "它真是很好看的呀！自然最美好了，动物最美好了！"
};

const REPLY_TEXT = {
  welcome: `欢迎来到这本慢慢被点亮的小绘本。\n每一局都会让一处场景亮起来。先从一个词开始吧。`,
  chooseRoot: "先从一个大的方向开始吧。",
  nextRound: "这一局结束啦。接下来你想继续想一个词，还是轮到我来猜？",
  negativeConfirm: "这里是更偏向消极感受的一支。还想继续往下走吗？",
  negativeContinue: "那我们就继续慢慢往下走吧。",
  negativeStop: "没关系，我们就停在这里，换一个词也很好。",
  aiIntro: "接下来轮到我来想一个词。",
  aiReady: "我会一点点给你提示，你想到的时候就告诉我。",
  aiAnswer: [
    "我脑海里浮出来的词是——{word}",
    "我想到的答案是：{word}"
  ],
  aiGiveUp: [
    "那我把这次想到的词告诉你：{word}",
    "这次没有猜到也没关系，我原本想的是：{word}"
  ],
  guessTemplates: [
    "我猜你想的词是“{word}”，对吗？",
    "我脑海里有了一个词……“{word}”，对吗？"
  ]
};

const STORY_PAGES = [
  {
    key: "spring",
    label: "春",
    title: "樱花与复苏的森林",
    kicker: "Page 1 / 6",
    copy: "最开始时，这一页还是浅浅的雾粉色。每完成一个词，樱花和新叶就更鲜亮一点，像春天慢慢靠近了。",
    sceneClass: "spring"
  },
  {
    key: "summer",
    label: "夏",
    title: "茂盛而蓬松的绿色森林",
    kicker: "Page 2 / 6",
    copy: "夏天会比春天更浓郁一些。绿色层层叠起，像树叶被阳光照亮，也像呼吸越来越有生命力。",
    sceneClass: "summer"
  },
  {
    key: "autumn",
    label: "秋",
    title: "沉静的银杏与深红的枫叶",
    kicker: "Page 3 / 6",
    copy: "到了秋天，颜色会沉下来。金黄色的银杏和深红色枫叶并排出现，像安静地把心事放好。",
    sceneClass: "autumn"
  },
  {
    key: "winter",
    label: "冬",
    title: "蓝白色的雪覆森林",
    kicker: "Page 4 / 6",
    copy: "冬天不是冷硬的，它更像一口清冽的空气。雪轻轻压在树枝上，月光也开始变得更明显了。",
    sceneClass: "winter"
  },
  {
    key: "special",
    label: "特别页",
    title: "一页熟悉的颜色",
    kicker: "Page 5 / 6",
    copy: "这一页会慢一些。黑、红、黄、白四种颜色一点点亮起来，像某种不用明说也能被认出来的记忆。",
    sceneClass: "special"
  },
  {
    key: "moon",
    label: "月亮房间",
    title: "能看见月亮的房间",
    kicker: "Page 6 / 6",
    copy: "这一页会慢慢把前面的路收拢起来。最后，灯亮着，窗外有月亮，房间里也会有一条温柔的光。",
    sceneClass: "moon"
  }
];

const PREFERRED_ROOT_ORDER = [
  "地点","和音乐有关","一个人","生物","动画角色","玩偶",
  "物品","吃的","喝的","一件你喜欢做的事","和大自然有关",
  "用来描述一段时间","用来描述情绪或感觉","剧集或节目"
];

const appState = {
  loading: true,
  error: "",
  data: { roots: [] },
  solvedWordIds: new Set(),
  solvedWordNames: new Set(),
  storyPage: 0,
  pageProgress: [0,0,0,0,0,0],
  overlay: null,
  rootBatchOffset: 0,
  round: null,
  aiRound: null,
  introSeen: false,
  pageHint: ""
};

function cleanLabel(label=""){
  return String(label).replace(/[{}<>]/g,"").replace(/（.*?）/g,"").replace(/\(.*?\)/g,"").trim();
}
function stripAiMarker(label=""){
  return String(label).replace(/（★★★不要出现在猜AI环节）/g,"").trim();
}
function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function format(t, vars){ return t.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? ""); }
function deepClone(obj){ return JSON.parse(JSON.stringify(obj)); }

function getNodeId(node){ return node?.node_id ?? node?.id ?? null; }
function getNodeType(node){ return node?.node_type ?? node?.type ?? null; }
function getWordId(node){ return node?.word_id ?? node?.wordId ?? null; }
function getWordText(node){ return node?.word_text ?? node?.wordText ?? stripAiMarker(String(node?.label || "")); }
function getIsFallback(node){ return node?.is_fallback ?? node?.isFallback ?? false; }
function getChildren(node){ return Array.isArray(node?.children) ? node.children : []; }
function isWordLeaf(node){ return getNodeType(node) === "word_leaf"; }

function getVisibleRoots(){
  return appState.data.roots.filter(root => cleanLabel(root.label) !== "隐藏词组");
}
function walk(node, fn){
  if (fn(node)) return true;
  for (const child of getChildren(node)) {
    if (walk(child, fn)) return true;
  }
  return false;
}
function findNodeById(id, nodes = appState.data.roots){
  for (const node of nodes) {
    if (getNodeId(node) === id) return node;
    const kids = getChildren(node);
    if (kids.length) {
      const found = findNodeById(id, kids);
      if (found) return found;
    }
  }
  return null;
}
function getWordNameById(wordId){
  let found = null;
  for (const root of appState.data.roots) {
    walk(root, node => {
      if (getWordId(node) === wordId) {
        found = getWordText(node);
        return true;
      }
      return false;
    });
    if (found) break;
  }
  return found;
}
function compareRoots(a,b){
  const la = cleanLabel(a.label), lb = cleanLabel(b.label);
  const ia = PREFERRED_ROOT_ORDER.indexOf(la);
  const ib = PREFERRED_ROOT_ORDER.indexOf(lb);
  const sa = ia === -1 ? 999 : ia;
  const sb = ib === -1 ? 999 : ib;
  if (sa !== sb) return sa - sb;
  return la.localeCompare(lb, 'zh-CN');
}
function getRootBatch(){
  const roots = [...getVisibleRoots()].sort(compareRoots);
  if (roots.length <= 4) return roots;
  const batch = [];
  const offset = appState.rootBatchOffset % roots.length;
  for (let i=0;i<4;i++) batch.push(roots[(offset+i)%roots.length]);
  return batch;
}
function cycleRootBatch(){
  appState.rootBatchOffset += 4;
  render();
}

function ensureStoryPageBounds(){
  const solved = appState.solvedWordNames.size;
  const shouldPage = Math.min(5, Math.floor(solved / 4));
  if (appState.storyPage < shouldPage) appState.storyPage = shouldPage;
}
function currentPageData(){
  return STORY_PAGES[appState.storyPage] || STORY_PAGES[0];
}
function currentPageSolvedCount(){
  return appState.pageProgress[appState.storyPage] || 0;
}
function currentPageHint(){
  return appState.pageHint || "";
}
function getCurrentSlotIndex(){
  return currentPageSolvedCount();
}
function canOpenSlot(slotIndex){
  return slotIndex === getCurrentSlotIndex() && !appState.overlay && appState.solvedWordNames.size < TARGET_SUCCESS_COUNT;
}
function pageCardState(slotIndex){
  const solved = currentPageSolvedCount();
  if (slotIndex < solved) return "done";
  if (slotIndex === solved) return "active";
  return "locked";
}
function getPageCardTitle(pageIndex, slotIndex){
  const titles = {
    spring:["第一粒种子","第二片花影","第三阵微风","第四处新绿"],
    summer:["第一束日光","第二层树叶","第三片深绿","第四处蝉声"],
    autumn:["第一枚银杏","第二片枫叶","第三阵沉静","第四束晚霞"],
    winter:["第一瓣雪","第二枝霜白","第三缕清冷月色","第四片安静"],
    special:["第一块颜色","第二块颜色","第三块颜色","第四块颜色"],
    moon:["第一束灯光","第二格窗影","第三片月色","第四段温柔"]
  };
  const key = STORY_PAGES[pageIndex]?.key || "spring";
  return titles[key][slotIndex];
}
function getPageCardCopy(pageIndex, slotIndex, state){
  const pageKey = STORY_PAGES[pageIndex]?.key || "spring";
  const lines = {
    spring:{
      done:"这一格已经被点亮，樱花和新叶把雾气推开了一点。",
      active:"从这里开始下一局吧。答完这一轮，春天会更鲜亮一些。",
      locked:"它还在安静地等着，等前面的词语一点点把春色带过来。"},
    summer:{
      done:"这一格已经把绿色抬高了一些，阳光透过树叶的时候更像夏天了。",
      active:"下一局会让这一块的树影更浓，夏天会从这里再往前生长一点。",
      locked:"它还没完全醒来，等前面的深绿更稳了，这里也会慢慢亮起来。"},
    autumn:{
      done:"金黄和深红已经在这里落下来了，像把安静的情绪轻轻放好。",
      active:"下一局会让秋天更沉静一点，像枫叶和银杏同时被风吹动。",
      locked:"它还在等，等别处的颜色慢慢沉下去，才会显出秋天的厚度。"},
    winter:{
      done:"这一块已经有了雪光，空气像被洗净了一样。",
      active:"从这里开始，冬天会更清澈一点，像枝头和月色一起变白。",
      locked:"它还留在冷静的蓝白里，等下一束光慢慢落上去。"},
    special:{
      done:"这一块颜色已经显出来了，不用解释也能让人认出来。",
      active:"下一局会让这一页更接近那种熟悉的黑、红、黄、白。",
      locked:"它还藏着，等另外几块颜色先浮上来。"},
    moon:{
      done:"这一格已经亮起来了，房间里的光也更安稳了一些。",
      active:"下一局会让这页更像一个能看见月亮、也能随时说话的地方。",
      locked:"它还在窗边安静地等着，等灯和月色慢慢把房间填满。"}
  };
  return lines[pageKey][state];
}


function updateSpecialPageFlowAfterSuccess(previousPage){
  appState.pageHint = "";
  if (previousPage !== 4 && previousPage !== 5) return;
  const otherPage = previousPage === 4 ? 5 : 4;
  if ((appState.pageProgress[otherPage] || 0) < 4) {
    appState.storyPage = otherPage;
    appState.pageHint = previousPage === 4
      ? "另一页，好像也亮了一点。接下来去月亮房间那一页看看吧。"
      : "另一页，好像也亮了一点。接下来回到那页熟悉的颜色里吧。";
  }
}

function createRound(rootNode){
  return {
    rootId: getNodeId(rootNode),
    currentQuestionNodeId: null,
    guessedWordId: null,
    guessedWordName: "",
    snapshots: [],
    parentStates: {}
  };
}
function initParentStateIfMissing(parentId){
  if (!appState.round.parentStates[parentId]) {
    appState.round.parentStates[parentId] = { askedIds: [] };
  }
  return appState.round.parentStates[parentId];
}
function getFallbackChild(parentNode){
  return getChildren(parentNode).find(child => getIsFallback(child)) || null;
}
function getAvailableNormalChildren(parentNode){
  const parentId = getNodeId(parentNode);
  const pState = initParentStateIfMissing(parentId);
  return getChildren(parentNode).filter(child => !getIsFallback(child) && !pState.askedIds.includes(getNodeId(child)));
}
function saveSnapshot(){
  appState.round.snapshots.push(deepClone({
    currentQuestionNodeId: appState.round.currentQuestionNodeId,
    guessedWordId: appState.round.guessedWordId,
    guessedWordName: appState.round.guessedWordName,
    parentStates: appState.round.parentStates
  }));
}
function restoreLastSnapshot(){
  if (!appState.round.snapshots.length) return false;
  const last = appState.round.snapshots.pop();
  appState.round.currentQuestionNodeId = last.currentQuestionNodeId;
  appState.round.guessedWordId = last.guessedWordId;
  appState.round.guessedWordName = last.guessedWordName;
  appState.round.parentStates = deepClone(last.parentStates);
  return true;
}

function beginAtParent(parentId, previousAnswer = null){
  const parentNode = findNodeById(parentId);
  if (!parentNode) return;
  const pState = initParentStateIfMissing(parentId);
  let normalChildren = getAvailableNormalChildren(parentNode);

  if (previousAnswer === false) {
    // current question already counted elsewhere
  }

  if (!normalChildren.length) {
    const fallback = getFallbackChild(parentNode);
    if (fallback) {
      const fallbackChildren = getChildren(fallback);
      if (!fallbackChildren.length) {
        appState.overlay = { type: "message", view: "no_more_words" };
        render();
        return;
      }
      const tempParentId = getNodeId(fallback);
      initParentStateIfMissing(tempParentId);
      beginAtParent(tempParentId, true);
      return;
    }
    appState.overlay = { type: "message", view: "no_more_words" };
    render();
    return;
  }

  const picked = normalChildren[0];
  appState.round.currentQuestionNodeId = getNodeId(picked);
  appState.overlay = { type: "quiz", view: "question" };
  render();
}
function goToRootPicker(){
  appState.rootBatchOffset = 0;
  appState.overlay = { type: "root_picker", view: "root_picker" };
  render();
}
function startWordRound(rootId){
  const rootNode = findNodeById(rootId);
  if (!rootNode) return;
  appState.round = createRound(rootNode);
  beginAtParent(getNodeId(rootNode), true);
}
function answerCurrentQuestion(answer){
  const qNode = findNodeById(appState.round.currentQuestionNodeId);
  if (!qNode) return;
  const parentId = findParentIdOfNode(getNodeId(qNode), findNodeById(appState.round.rootId));
  if (!parentId) return;
  saveSnapshot();
  const parentState = initParentStateIfMissing(parentId);
  const qNodeId = getNodeId(qNode);

  if (!parentState.askedIds.includes(qNodeId)) {
    parentState.askedIds.push(qNodeId);
  }

  if (answer === true && cleanLabel(qNode.label) === "更倾向于消极") {
    appState.overlay = { type: "message", view: "negative_confirm" };
    render();
    return;
  }

  if (answer) {
    if (isWordLeaf(qNode)) {
      appState.round.guessedWordId = getWordId(qNode);
      appState.round.guessedWordName = getWordText(qNode);
      appState.overlay = { type: "message", view: "guess_word" };
      render();
      return;
    }
    const children = getChildren(qNode);
    if (!children.length) {
      appState.overlay = { type: "message", view: "no_more_words" };
      render();
      return;
    }

    if (children.length === 1 && isWordLeaf(children[0])) {
      appState.round.guessedWordId = getWordId(children[0]);
      appState.round.guessedWordName = getWordText(children[0]);
      appState.overlay = { type: "message", view: "guess_word" };
      render();
      return;
    }

    beginAtParent(qNodeId, true);
  } else {
    beginAtParent(parentId, false);
  }
}
function findParentIdOfNode(targetId, rootNode){
  let foundParent = null;
  function dfs(node){
    for (const child of getChildren(node)) {
      if (getNodeId(child) === targetId) {
        foundParent = getNodeId(node);
        return true;
      }
      if (dfs(child)) return true;
    }
    return false;
  }
  dfs(rootNode);
  return foundParent;
}
function goBackOneStep(){
  if (!appState.round) return;
  const ok = restoreLastSnapshot();
  if (!ok) return;
  appState.overlay = { type: "quiz", view: "question" };
  render();
}
function confirmNegativeContinue(shouldContinue){
  if (shouldContinue) {
    appState.overlay = { type: "message", view: "negative_note_continue" };
  } else {
    appState.overlay = { type: "message", view: "negative_note_stop" };
  }
  render();
}
function resumeAfterNegativeContinue(){
  const qNode = findNodeById(appState.round.currentQuestionNodeId);
  if (!qNode) return;
  const children = getChildren(qNode);
  if (!children.length) {
    appState.overlay = { type: "message", view: "no_more_words" };
    render();
    return;
  }
  if (children.length === 1 && isWordLeaf(children[0])) {
    appState.round.guessedWordId = getWordId(children[0]);
    appState.round.guessedWordName = getWordText(children[0]);
    appState.overlay = { type: "message", view: "guess_word" };
    render();
    return;
  }
  beginAtParent(getNodeId(qNode), true);
}
function confirmGuess(correct){
  const wordId = appState.round.guessedWordId;
  const wordName = stripAiMarker(appState.round.guessedWordName);
  if (correct) {
    if (wordId) appState.solvedWordIds.add(wordId);
    if (wordName) appState.solvedWordNames.add(wordName);
    appState.overlay = { type: "message", view: "guess_success", wordName };
  } else {
    appState.overlay = { type: "message", view: "guess_fail", wordName };
  }
  render();
}
function closeRoundAndReturn(success){
  if (success) {
    const solved = appState.solvedWordNames.size;
    const pageIndex = Math.min(5, Math.floor((solved - 1) / 4));
    const pageCount = solved - pageIndex * 4;
    appState.pageProgress[pageIndex] = Math.min(4, pageCount);
    ensureStoryPageBounds();
    if (!appState.introSeen) {
    app.innerHTML = renderIntroScreen();
    return;
  }
  if (appState.solvedWordNames.size >= TARGET_SUCCESS_COUNT) {
      appState.overlay = null;
      render();
      return;
    }
  }
  appState.round = null;
  appState.overlay = null;
  render();
}

function getAiEligibleLeaves(){
  const leaves = [];
  const seenNames = new Set();
  for (const root of getVisibleRoots()) {
    walk(root, (node) => {
      if (isWordLeaf(node)) {
        const label = stripAiMarker(getWordText(node));
        const raw = String(node.label || "") + " " + String(node.word_text || "") + " " + String(node.wordText || "");
        if (raw.includes("不要出现在猜AI环节")) return false;
        if (["焦虑","孤独","疲惫","回避","你的亲人","你的朋友"].includes(label)) return false;
        if (appState.solvedWordNames.has(label)) return false;
        if (seenNames.has(label)) return false;
        leaves.push({ root, leaf: node, wordLabel: label });
        seenNames.add(label);
      }
      return false;
    });
  }
  return leaves;
}
function buildPathToLeaf(rootNode, leafId){
  function dfs(node, path){
    const nextPath = [...path, node];
    if (getNodeId(node) === leafId) return nextPath;
    for (const child of getChildren(node)) {
      const result = dfs(child, nextPath);
      if (result) return result;
    }
    return null;
  }
  return dfs(rootNode, []) || [];
}
function startAiRound(){
  appState.pageHint = "";
  const eligible = getAiEligibleLeaves();
  if (!eligible.length) {
    appState.overlay = { type: "message", view: "no_more_words" };
    render();
    return;
  }
  const picked = rand(eligible);
  const pathNodes = buildPathToLeaf(picked.root, getNodeId(picked.leaf));
  const revealPath = pathNodes
    .filter(node => getNodeType(node) === "attribute")
    .map(node => cleanLabel(node.label))
    .filter(Boolean)
    .filter(label => label !== "其它");
  appState.aiRound = {
    wordLabel: picked.wordLabel,
    revealPath,
    revealIndex: 0
  };
  appState.overlay = { type: "ai", view: "ai_intro" };
  render();
}
function nextAiReveal(){
  if (!appState.aiRound) return;
  if (appState.aiRound.revealIndex < appState.aiRound.revealPath.length) {
    appState.aiRound.revealIndex += 1;
  }
  appState.overlay = { type: "ai", view: "ai_reveal" };
  render();
}
function showAiAnswer(giveUp=false){
  appState.overlay = { type: "ai", view: giveUp ? "ai_giveup" : "ai_answer" };
  render();
}
function confirmAiGuessResult(correct){
  const word = appState.aiRound?.wordLabel;
  const previousPage = appState.storyPage;
  if (correct && word) {
    appState.solvedWordNames.add(word);
    const solved = appState.solvedWordNames.size;
    const pageIndex = Math.min(5, Math.floor((solved - 1) / 4));
    const pageCount = solved - pageIndex * 4;
    appState.pageProgress[pageIndex] = Math.min(4, pageCount);
    ensureStoryPageBounds();
    updateSpecialPageFlowAfterSuccess(previousPage);
  }
  appState.overlay = { type: "ai", view: correct ? "ai_answer_success" : "ai_answer_fail" };
  render();
}
function closeAiOverlay(){
  appState.aiRound = null;
  appState.overlay = null;
  render();
}

function render(){
  const app = document.getElementById('app');
  if (appState.loading) {
    app.innerHTML = `<div class="app"><div class="forest-shell"><div class="panel"><h3>正在加载…</h3><p>正在把树和场景慢慢铺开。</p></div></div></div>`;
    return;
  }
  if (appState.error) {
    app.innerHTML = `<div class="app"><div class="forest-shell"><div class="panel"><h3>页面加载失败</h3><p>${escapeHtml(appState.error)}</p><p style="margin-top:10px;">请确认 tree.json 放在 ./data/tree.json，且通过静态服务器访问。</p></div></div></div>`;
    return;
  }
  if (!appState.introSeen) {
    app.innerHTML = renderIntroScreen();
    return;
  }
  if (appState.solvedWordNames.size >= TARGET_SUCCESS_COUNT) {
    app.innerHTML = renderHiddenScreen();
    return;
  }
  app.innerHTML = renderStoryScreen();
}


function renderIntroScreen(){
  return `
    <div class="app intro-scene spring">
      <div class="story-bg" style="background:radial-gradient(circle at 18% 18%, rgba(255,255,255,0.92), transparent 20%), radial-gradient(circle at 82% 26%, rgba(255,255,255,0.72), transparent 18%), linear-gradient(180deg, rgba(249,243,247,1) 0%, rgba(244,250,241,1) 54%, rgba(235,245,229,1) 100%);"></div>
      <div class="story-layer">${renderStoryDecor('spring', 0)}</div>
      <div class="forest-shell intro-shell">
        <div class="intro-card panel">
          <p class="page-kicker">欢迎来到 24 Pieces</p>
          <h1 class="page-title intro-title">这是一本会慢慢被点亮的小绘本。</h1>
          <p class="page-copy">欢迎来到读心术小游戏！</p>
          <p class="page-copy">在我们以前聊到过的那些内容里，先在心里抓住一个词。凭直觉想就可以。它可能和喜好或经历有关，也可能是一个名字、一样东西，甚至是某种感受。</p>
          <p class="page-copy">也可以让AI来想一个词，你来猜它想的是哪个词。</p>
          <p class="page-copy">每完成一局，当前页面就会亮起一格，把一个季节、一片森林、或者一页颜色慢慢点亮。</p>
          <p class="page-copy">一共会有 24 局。点击开始。</p>
          <div class="button-row" style="margin-top:20px;">
            <button class="btn primary" onclick="startExperience()">开始这本绘本</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderStoryScreen(){
  const page = currentPageData();
  const solved = appState.solvedWordNames.size;
  const totalPageSolved = currentPageSolvedCount();
  const rootBadge = `${page.label} · ${totalPageSolved} / 4`;
  return `
    <div class="app ${page.sceneClass}">
      <div class="story-bg" style="${renderStoryBg(page.key, totalPageSolved)}"></div>
      <div class="story-layer">${renderStoryDecor(page.key, totalPageSolved)}</div>
      <div class="forest-shell">
        <div class="topbar">
          <div class="topbar-left">
            <div class="badge"><strong>${page.kicker}</strong></div>
            <div class="badge"><strong>${rootBadge}</strong></div>
            <div class="badge">总进度 <strong>${solved} / ${TARGET_SUCCESS_COUNT}</strong></div>
          </div>
        </div>
        <div class="story-board">
          <section class="story-main">
            <div class="story-wash"></div>
            <div class="story-content">
              <div class="page-intro">
                <p class="page-kicker">${page.kicker}</p>
                <h1 class="page-title">${page.title}</h1>
                <p class="page-copy">${page.copy}</p>
                ${currentPageHint() ? `<div class="page-note">${escapeHtml(currentPageHint())}</div>` : ''}
              </div>
              <div class="grid-wrap">
                ${[0,1,2,3].map(slotIndex => renderStoryCard(appState.storyPage, slotIndex)).join("")}
              </div>
            </div>
          </section>
          <aside class="sidebar">
            <div class="panel">
              <h3>这一页会怎么推进？</h3>
              <p>每完成一局，这一页就亮起一格。四格都点亮后，就会自然进入下一页。答题页不会跳到新的 html，而是在当前场景上浮起一张卡片，结束后再回到这里。</p>
              <div class="page-dots">
                ${[0,1,2,3].map(i => `<span class="page-dot ${i < totalPageSolved ? "filled" : ""} ${i === totalPageSolved && totalPageSolved < 4 ? "current" : ""}"></span>`).join("")}
              </div>
            </div>
            <div class="panel">
              <h3>这一页的词语模块</h3>
              <p>直接点击当前正在发亮的模块，就会弹出这一局的选择层。进入方式已经收成一个入口，不需要再从别的按钮进去。</p>
              <p class="muted-note" style="margin-top:12px;">这一版先把春夏秋冬、特别页、月亮房间和答题浮层都接起来。细节插画和动效之后还能继续慢慢加。</p>
            </div>
            <div class="panel">
              <h3>总进度</h3>
              <div class="progress-row">
                <div class="progress-strip">${Array.from({length:TARGET_SUCCESS_COUNT}).map((_,i)=>`<span class="progress-dot ${i<solved?'filled':''}"></span>`).join("")}</div>
              </div>
              <p style="margin-top:12px;">已经点亮的词：${solved === 0 ? "还没有开始，第一束光还在等你。" : `${solved} 个。`}</p>
            </div>
          </aside>
        </div>
      </div>
      ${appState.overlay ? renderOverlay() : ""}
    </div>
  `;
}
function renderStoryCard(pageIndex, slotIndex){
  const state = pageCardState(slotIndex);
  const title = getPageCardTitle(pageIndex, slotIndex);
  const copy = getPageCardCopy(pageIndex, slotIndex, state);
  const stateText = state === "done" ? "已点亮" : state === "active" ? "进行中" : "未开启";
  const clickable = state === "active" ? "clickable" : "";
  const action = state === "active" ? `onclick="openCurrentSlot()"` : "";
  return `
    <article class="story-card ${state} ${clickable}" ${action}>
      <div class="card-top">
        <div>
          <div class="card-step">Module ${slotIndex + 1}</div>
          <h2 class="card-title">${title}</h2>
        </div>
        <div class="card-state">${stateText}</div>
      </div>
      <p class="card-copy">${copy}</p>
    </article>
  `;
}
function renderStoryBg(key, solved){
  const intensity = [0.42,0.58,0.78,0.96][Math.min(3, solved)];
  if (key === "spring") {
    return `background:
      radial-gradient(circle at 18% 18%, rgba(255,255,255,0.92), transparent 20%),
      radial-gradient(circle at 82% 26%, rgba(255,255,255,0.72), transparent 18%),
      linear-gradient(180deg, rgba(249,243,247,1) 0%, rgba(244,250,241,1) 54%, rgba(235,245,229,1) 100%);`;
  }
  if (key === "summer") {
    return `background:
      radial-gradient(circle at 15% 14%, rgba(255,255,255,0.65), transparent 18%),
      radial-gradient(circle at 82% 20%, rgba(255,255,255,0.34), transparent 16%),
      linear-gradient(180deg, rgba(235,247,232,1) 0%, rgba(203,230,188,1) 44%, rgba(147,193,126,1) 100%);`;
  }
  if (key === "autumn") {
    return `background:
      radial-gradient(circle at 16% 16%, rgba(255,255,255,0.66), transparent 18%),
      linear-gradient(180deg, rgba(248,241,232,1) 0%, rgba(231,212,180,1) 40%, rgba(188,121,93,1) 100%);`;
  }
  if (key === "winter") {
    return `background:
      radial-gradient(circle at 24% 14%, rgba(255,255,255,0.78), transparent 18%),
      linear-gradient(180deg, rgba(239,245,252,1) 0%, rgba(212,226,244,1) 44%, rgba(173,197,224,1) 100%);`;
  }
  if (key === "special") {
    return `background:
      linear-gradient(135deg, rgba(29,31,38,1) 0%, rgba(56,18,27,1) 28%, rgba(182,44,54,0.92) 49%, rgba(222,176,54,0.88) 72%, rgba(242,240,232,0.95) 100%);`;
  }
  return `background:
    radial-gradient(circle at 78% 18%, rgba(255,243,190,0.92), transparent 16%),
    linear-gradient(180deg, rgba(28,38,57,1) 0%, rgba(55,66,89,1) 52%, rgba(72,82,103,1) 100%);`;
}
function renderStoryDecor(key, solved){
  if (key === "spring") {
    return `
      <div style="position:absolute;left:8%;top:14%;width:18px;height:44%;border-radius:999px;background:rgba(118,97,88,.24)"></div>
      <div style="position:absolute;left:19%;top:8%;width:22px;height:50%;border-radius:999px;background:rgba(130,105,98,.2)"></div>
      <div style="position:absolute;right:16%;top:12%;width:16px;height:42%;border-radius:999px;background:rgba(120,99,92,.18)"></div>
      <div style="position:absolute;left:2%;top:6%;width:240px;height:240px;border-radius:999px;background:rgba(247,211,226,.45);filter:blur(8px)"></div>
      <div style="position:absolute;left:12%;top:2%;width:280px;height:280px;border-radius:999px;background:rgba(244,201,221,.38);filter:blur(8px)"></div>
      <div style="position:absolute;right:0;top:8%;width:220px;height:220px;border-radius:999px;background:rgba(244,212,230,.36);filter:blur(8px)"></div>
      <div style="position:absolute;left:0;right:0;bottom:0;height:28%;background:linear-gradient(180deg, rgba(213,234,201,.08), rgba(166,204,149,.34) 55%, rgba(144,189,129,.56) 100%)"></div>
    `;
  }
  if (key === "summer") {
    return `
      <div style="position:absolute;left:7%;top:10%;width:22px;height:52%;border-radius:999px;background:rgba(78,96,59,.22)"></div>
      <div style="position:absolute;left:17%;top:3%;width:26px;height:56%;border-radius:999px;background:rgba(85,101,62,.22)"></div>
      <div style="position:absolute;right:14%;top:8%;width:20px;height:48%;border-radius:999px;background:rgba(88,108,67,.2)"></div>
      <div style="position:absolute;left:0;top:0;width:320px;height:280px;border-radius:999px;background:rgba(180,221,163,.42);filter:blur(10px)"></div>
      <div style="position:absolute;right:0;top:0;width:300px;height:240px;border-radius:999px;background:rgba(149,204,131,.36);filter:blur(10px)"></div>
      <div style="position:absolute;left:0;right:0;bottom:0;height:32%;background:linear-gradient(180deg, rgba(125,174,108,.04), rgba(106,159,87,.26) 48%, rgba(82,130,64,.58) 100%)"></div>
    `;
  }
  if (key === "autumn") {
    return `
      <div style="position:absolute;left:8%;top:12%;width:20px;height:50%;border-radius:999px;background:rgba(106,84,68,.26)"></div>
      <div style="position:absolute;right:18%;top:9%;width:16px;height:42%;border-radius:999px;background:rgba(112,78,63,.24)"></div>
      <div style="position:absolute;left:0;top:2%;width:300px;height:260px;border-radius:999px;background:rgba(241,208,118,.26);filter:blur(9px)"></div>
      <div style="position:absolute;left:18%;top:8%;width:260px;height:220px;border-radius:999px;background:rgba(197,77,54,.22);filter:blur(9px)"></div>
      <div style="position:absolute;right:4%;top:6%;width:260px;height:240px;border-radius:999px;background:rgba(233,177,66,.24);filter:blur(9px)"></div>
      <div style="position:absolute;left:0;right:0;bottom:0;height:30%;background:linear-gradient(180deg, rgba(145,105,78,.04), rgba(139,95,66,.24) 45%, rgba(112,70,51,.48) 100%)"></div>
    `;
  }
  if (key === "winter") {
    return `
      <div style="position:absolute;left:8%;top:10%;width:18px;height:48%;border-radius:999px;background:rgba(111,123,146,.18)"></div>
      <div style="position:absolute;right:14%;top:7%;width:16px;height:44%;border-radius:999px;background:rgba(116,132,158,.18)"></div>
      <div style="position:absolute;left:0;top:0;width:240px;height:240px;border-radius:999px;background:rgba(255,255,255,.38);filter:blur(10px)"></div>
      <div style="position:absolute;right:0;top:2%;width:260px;height:220px;border-radius:999px;background:rgba(232,242,255,.28);filter:blur(10px)"></div>
      <div style="position:absolute;left:0;right:0;bottom:0;height:28%;background:linear-gradient(180deg, rgba(220,229,241,.06), rgba(195,211,231,.24) 45%, rgba(178,198,220,.54) 100%)"></div>
    `;
  }
  if (key === "special") {
    return `
      <div style="position:absolute;left:6%;top:12%;width:220px;height:220px;border-radius:999px;background:rgba(12,13,17,.18);filter:blur(8px)"></div>
      <div style="position:absolute;left:26%;top:18%;width:180px;height:180px;border-radius:999px;background:rgba(186,45,55,.26);filter:blur(10px)"></div>
      <div style="position:absolute;right:18%;top:14%;width:220px;height:220px;border-radius:999px;background:rgba(230,178,67,.28);filter:blur(10px)"></div>
    `;
  }
  return `
    <div style="position:absolute;right:10%;top:10%;width:170px;height:170px;border-radius:999px;background:radial-gradient(circle at 50% 48%, rgba(255,247,214,.94), rgba(248,233,161,.76) 46%, rgba(255,255,255,.06) 72%);box-shadow:0 0 60px rgba(255,239,178,.24)"></div>
    <div style="position:absolute;left:0;right:0;bottom:0;height:26%;background:linear-gradient(180deg, rgba(66,61,75,.02), rgba(83,73,75,.18) 46%, rgba(78,67,63,.44) 100%)"></div>
    <div style="position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:170px;height:34%;background:linear-gradient(180deg, rgba(255,235,164,.0), rgba(255,232,152,.22) 38%, rgba(255,240,184,.7) 100%);filter:blur(2px);clip-path:polygon(46% 0,54% 0,100% 100%,0 100%)"></div>
  `;
}

function renderOverlay(){
  const view = appState.overlay.view;
  let body = "";
  if (view === "slot_menu") body = renderSlotMenu();
  else if (view === "root_picker") body = renderRootPicker();
  else if (view === "question") body = renderQuestion();
  else if (view === "negative_confirm") body = renderNegativeConfirm();
  else if (view === "negative_note_continue") body = renderSimpleMessage(REPLY_TEXT.negativeContinue, `<div class="button-row"><button class="btn primary" onclick="resumeAfterNegativeContinue()">继续</button></div>`);
  else if (view === "negative_note_stop") body = renderSimpleMessage(REPLY_TEXT.negativeStop, renderNextChoiceButtons());
  else if (view === "guess_word") body = renderGuessWord();
  else if (view === "guess_success") body = renderGuessSuccess();
  else if (view === "guess_fail") body = renderGuessFail();
  else if (view === "no_more_words") body = renderSimpleMessage("这一支已经走到头了。", renderNextChoiceButtons());
  else if (view === "ai_intro") body = renderAiIntro();
  else if (view === "ai_reveal") body = renderAiReveal();
  else if (view === "ai_answer") body = renderAiAnswer(false);
  else if (view === "ai_giveup") body = renderAiAnswer(true);
  else if (view === "ai_answer_success") body = renderAiAnswerSuccess();
  else if (view === "ai_answer_fail") body = renderAiAnswerFail();
  return `
    <div class="overlay">
      <div class="overlay-card">
        <div class="overlay-head">
          <div>
            <h2 class="overlay-title">这一局的小卡片</h2>
            <p class="overlay-sub">答完之后会回到当前绘本页，对应模块就会亮起来。</p>
          </div>
          <button class="close-btn" onclick="closeOverlaySafely()">×</button>
        </div>
        ${body}
      </div>
    </div>
  `;
}
function closeOverlaySafely(){
  if (appState.overlay?.view === "question" || appState.overlay?.view === "guess_word" || appState.overlay?.view === "negative_confirm") {
    return;
  }
  if (appState.overlay?.view?.startsWith("ai_")) {
    closeAiOverlay();
    return;
  }
  appState.overlay = null;
  render();
}
function renderSimpleMessage(text, controls=""){
  return `
    <div class="message-card">
      <h3 class="question-text">${escapeHtml(text)}</h3>
    </div>
    ${controls}
  `;
}

function renderSlotMenu(){
  return `
    <div class="message-card">
      <p class="page-kicker" style="margin-bottom:8px;">当前模块</p>
      <h3 class="overlay-title" style="font-size:30px;margin:0 0 8px;">${escapeHtml(getPageCardTitle(appState.storyPage, getCurrentSlotIndex()))}</h3>
      <p class="scene-text">先选一种方式开始这一格吧。无论选哪一种，结束后都会回到这一页继续点亮。</p>
    </div>
    <div class="option-grid two-way-grid">
      <button class="btn primary big-choice" onclick="goToRootPicker()">开始这一局</button>
      <button class="btn secondary big-choice" onclick="startAiRound()">让AI想一个词</button>
    </div>
  `;
}

function renderRootPicker(){
  const roots = getRootBatch();
  return `
    <div class="quiz-card">
      <p class="page-kicker" style="margin-bottom:8px;">开始这一局</p>
      <h3 class="overlay-title" style="font-size:30px;margin:0 0 8px;">${REPLY_TEXT.chooseRoot}</h3>
      <p class="overlay-sub">先从一个分类进入。点完这一局后，就会回到当前绘本页继续点亮。</p>
    </div>
    <div class="root-grid">
      ${roots.map(root => `
        <button class="root-btn" onclick="startWordRound('${getNodeId(root)}')">
          <span class="tiny">Root</span>
          <span class="name">${escapeHtml(cleanLabel(root.label))}</span>
        </button>
      `).join("")}
    </div>
    <div class="button-row" style="margin-top:14px;">
      <button class="btn secondary" onclick="cycleRootBatch()">换一批</button>
      <button class="btn ghost" onclick="closeOverlaySafely()">先不选了</button>
    </div>
  `;
}
function renderQuestion(){
  const qNode = findNodeById(appState.round.currentQuestionNodeId);
  const label = cleanLabel(qNode?.label || "");
  return `
    <div class="quiz-card">
      <p class="page-kicker" style="margin-bottom:10px;">读心术进行中</p>
      <h3 class="question-text">TA是不是“${escapeHtml(label)}”？</h3>
      <p class="scene-text">在当前这一局里，我们就顺着这一条路径慢慢走。答完后，这一格就会被点亮。</p>
    </div>
    <div class="option-grid">
      <button class="btn primary" onclick="answerCurrentQuestion(true)">是</button>
      <button class="btn secondary" onclick="answerCurrentQuestion(false)">不是</button>
      <button class="btn ghost" onclick="goBackOneStep()" ${appState.round.snapshots.length ? "" : "disabled"}>返回上一问</button>
    </div>
  `;
}
function renderNegativeConfirm(){
  return `
    <div class="message-card">
      <h3 class="question-text">${REPLY_TEXT.negativeConfirm}</h3>
      <p class="scene-text">这一支下面是焦虑、孤独、疲惫、回避这些词。你也可以选择停在这里，换一个方向。</p>
    </div>
    <div class="button-row">
      <button class="btn primary" onclick="confirmNegativeContinue(true)">继续往下</button>
      <button class="btn secondary" onclick="confirmNegativeContinue(false)">换一个词</button>
    </div>
  `;
}
function renderGuessWord(){
  const word = stripAiMarker(appState.round.guessedWordName);
  return `
    <div class="message-card">
      <h3 class="question-text">${escapeHtml(format(rand(REPLY_TEXT.guessTemplates), { word }))}</h3>
      <p class="result-word">${escapeHtml(word)}</p>
    </div>
    <div class="button-row">
      <button class="btn primary" onclick="confirmGuess(true)">对</button>
      <button class="btn secondary" onclick="confirmGuess(false)">不对</button>
    </div>
  `;
}
function renderGuessSuccess(){
  const word = stripAiMarker(appState.overlay.wordName || appState.round?.guessedWordName || "");
  const special = SPECIAL_LINES[word];
  return `
    <div class="message-card">
      <p class="page-kicker" style="margin-bottom:8px;">这一局完成了</p>
      <h3 class="overlay-title" style="margin:0 0 6px;font-size:30px;">猜中啦</h3>
      <p class="result-word">${escapeHtml(word)}</p>
      ${special ? `<p class="scene-text">${escapeHtml(special)}</p>` : `<p class="scene-text">这一格会回到绘本页里慢慢亮起来。</p>`}
    </div>
    <div class="button-row">
      <button class="btn primary" onclick="closeRoundAndReturn(true)">回到绘本页</button>
    </div>
  `;
}
function renderGuessFail(){
  const word = stripAiMarker(appState.overlay.wordName || appState.round?.guessedWordName || "");
  return `
    <div class="message-card">
      <h3 class="overlay-title" style="margin:0 0 8px;font-size:30px;">这次没有猜中呢</h3>
      <p class="result-word">${escapeHtml(word)}</p>
      <p class="scene-text">没关系，这一局就停在这里。可以重新想一个词，或者换成让我来猜。</p>
    </div>
    ${renderNextChoiceButtons()}
  `;
}
function renderNextChoiceButtons(){
  return `
    <div class="button-row">
      <button class="btn primary" onclick="goToRootPicker()">我再想一个词</button>
      <button class="btn secondary" onclick="startAiRound()">让AI想一个词</button>
      <button class="btn ghost" onclick="closeOverlaySafely()">回到绘本页</button>
    </div>
  `;
}
function renderAiIntro(){
  return `
    <div class="message-card">
      <h3 class="overlay-title" style="margin:0 0 8px;font-size:30px;">${REPLY_TEXT.aiIntro}</h3>
      <p class="scene-text">${REPLY_TEXT.aiReady}</p>
    </div>
    <div class="button-row">
      <button class="btn primary" onclick="nextAiReveal()">开始</button>
      <button class="btn ghost" onclick="closeAiOverlay()">返回</button>
    </div>
  `;
}
function renderAiReveal(){
  const ai = appState.aiRound;
  const hints = ai.revealPath.slice(0, ai.revealIndex);
  const canGiveUp = ai.revealIndex >= ai.revealPath.length;
  return `
    <div class="quiz-card">
      <p class="page-kicker" style="margin-bottom:8px;">我正在一点点给你提示</p>
      <div class="hint-list">
        ${hints.map(h => `<span class="hint-chip">${escapeHtml(h)}</span>`).join("") || `<span class="hint-chip">先给你一点时间准备好。</span>`}
      </div>
    </div>
    <div class="button-row">
      <button class="btn primary" onclick="showAiAnswer(false)">我猜到了</button>
      <button class="btn secondary" onclick="nextAiReveal()" ${canGiveUp ? "disabled" : ""}>继续</button>
      <button class="btn ghost" onclick="showAiAnswer(true)" ${canGiveUp ? "" : "disabled"}>我猜不到</button>
    </div>
  `;
}
function renderAiAnswer(giveUp=false){
  const word = appState.aiRound.wordLabel;
  const line = format(rand(giveUp ? REPLY_TEXT.aiGiveUp : REPLY_TEXT.aiAnswer), { word });
  if (giveUp) {
    const special = SPECIAL_LINES[word];
    return `
      <div class="message-card">
        <h3 class="question-text">${escapeHtml(line)}</h3>
        <p class="result-word">${escapeHtml(word)}</p>
        ${special ? `<p class="scene-text">${escapeHtml(special)}</p>` : ""}
      </div>
      <div class="button-row">
        <button class="btn primary" onclick="closeAiOverlay()">回到绘本页</button>
        <button class="btn secondary" onclick="startAiRound()">你再想一个词</button>
      </div>
    `;
  }
  return `
    <div class="message-card">
      <h3 class="question-text">${escapeHtml(line)}</h3>
      <p class="result-word">${escapeHtml(word)}</p>
    </div>
    <div class="button-row">
      <button class="btn primary" onclick="confirmAiGuessResult(true)">猜中了</button>
      <button class="btn secondary" onclick="confirmAiGuessResult(false)">没猜中</button>
    </div>
  `;
}
function renderAiAnswerSuccess(){
  const word = appState.aiRound.wordLabel;
  const special = SPECIAL_LINES[word];
  return `
    <div class="message-card">
      <h3 class="overlay-title" style="margin:0 0 8px;font-size:30px;">猜中啦！</h3>
      <p class="result-word">${escapeHtml(word)}</p>
      ${special ? `<p class="scene-text">${escapeHtml(special)}</p>` : ""}
    </div>
    <div class="button-row">
      <button class="btn primary" onclick="closeAiOverlay()">回到绘本页</button>
      <button class="btn secondary" onclick="startAiRound()">你再想一个词</button>
    </div>
  `;
}
function renderAiAnswerFail(){
  const word = appState.aiRound.wordLabel;
  return `
    <div class="message-card">
      <h3 class="overlay-title" style="margin:0 0 8px;font-size:30px;">这次没有猜中呢～</h3>
      <p class="result-word">${escapeHtml(word)}</p>
    </div>
    <div class="button-row">
      <button class="btn primary" onclick="closeAiOverlay()">回到绘本页</button>
      <button class="btn secondary" onclick="startAiRound()">你再想一个词</button>
    </div>
  `;
}
function renderHiddenScreen(){
  return `
    <div class="hidden-screen">
      <div class="hidden-room">
        <div class="hidden-window"></div>
        <div class="hidden-floor"></div>
        <div class="moon-road"></div>
        <div class="hidden-copy">
          <p class="kicker">终章 · 24 / 24</p>
          <h1>${HIDDEN_WORDS[1]}</h1>
          <p>24 个小小的词一路把这本绘本点亮到了最后。现在，房间里有灯，窗外有月亮，地面上也有一条被月光照亮的路。</p>
          <p>如果哪一天想说话，想起什么，或者只是想轻轻停一下，这个房间都在。它不会催，也不会追问，只会亮着一盏安静的光。</p>
          <div class="hidden-actions">
            <button class="btn primary" onclick="restartAll()">再玩一轮</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
function restartAll(){
  appState.solvedWordIds = new Set();
  appState.solvedWordNames = new Set();
  appState.storyPage = 0;
  appState.pageProgress = [0,0,0,0,0,0];
  appState.overlay = null;
  appState.round = null;
  appState.aiRound = null;
  appState.rootBatchOffset = 0;
  appState.introSeen = false;
  appState.pageHint = '';
  render();
}
function openCurrentSlot(){
  if (!appState.overlay) {
    appState.pageHint = '';
    appState.overlay = { type: 'slot_menu', view: 'slot_menu' };
    render();
  }
}
function startExperience(){
  appState.introSeen = true;
  appState.pageHint = '';
  render();
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

async function bootstrap(){
  try{
    const res = await fetch('data/tree.json?ts=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}：读取 data/tree.json 失败`);
    const text = await res.text();
    let raw;
    try{
      raw = JSON.parse(text);
    }catch(e){
      throw new Error(`tree.json 不是合法 JSON：${e.message}`);
    }
    const roots = Array.isArray(raw) ? raw : raw?.roots;
    if (!Array.isArray(roots)) throw new Error('tree.json 顶层既不是数组，也没有 roots 数组');
    appState.data = { roots };
    appState.loading = false;
  }catch(err){
    appState.loading = false;
    appState.error = err?.message || String(err);
  }
  render();
}

window.cycleRootBatch = cycleRootBatch;
window.startWordRound = startWordRound;
window.answerCurrentQuestion = answerCurrentQuestion;
window.goBackOneStep = goBackOneStep;
window.confirmNegativeContinue = confirmNegativeContinue;
window.resumeAfterNegativeContinue = resumeAfterNegativeContinue;
window.confirmGuess = confirmGuess;
window.closeRoundAndReturn = closeRoundAndReturn;
window.goToRootPicker = goToRootPicker;
window.startAiRound = startAiRound;
window.nextAiReveal = nextAiReveal;
window.showAiAnswer = showAiAnswer;
window.confirmAiGuessResult = confirmAiGuessResult;
window.closeAiOverlay = closeAiOverlay;
window.closeOverlaySafely = closeOverlaySafely;
window.openCurrentSlot = openCurrentSlot;
window.restartAll = restartAll;
window.startExperience = startExperience;

bootstrap();
