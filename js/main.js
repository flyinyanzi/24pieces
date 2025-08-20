// main.js —— 绑定拼图块，组织问答流程
import { openModal } from './ui.js';

const stateKey = 'puzzle-progress-v1';
const solved = new Set(JSON.parse(localStorage.getItem(stateKey) || '[]'));

function save() {
  localStorage.setItem(stateKey, JSON.stringify([...solved]));
}

function markSolved(id) {
  const el = document.querySelector(`.piece[data-id="${id}"]`);
  if (!el) return;
  el.classList.add('solved');
  solved.add(id);
  save();
}

function restoreSolved() {
  solved.forEach(id => markSolved(id));
}

async function runFlowForPiece(id) {
  // 这里是示例问题（先简化2问 + 最后确认）
  await openModal.step('如果这是一段有声音的记忆，它更像——', ['柔和的吉他', '房间的灯', '窗外的雨', '人群的低语']);
  await openModal.step('它更可能存在于——', ['疫情在家', '去年夏天', '散步途中', '车窗边']);

  const options = ['deca joins', '小黑', '胶卷', '植物园'];
  let picked = await openModal.confirm('你会选择哪个词呢？', options);

  // 简单的“允许重选一次”
  if (picked !== 'deca joins') {
    const again = await openModal.retry('也许再想一想？要不要换一个？');
    if (again) picked = await openModal.confirm('再选一次：', options);
  }

  if (picked === 'deca joins') {
    await openModal.story('那时候你说，他们的歌陪你熬过封闭的日子……');
    markSolved(id);
    if (solved.size >= 24) {
      await openModal.final('谢谢你和我一起完成这幅拼图。原来这些碎片，拼起来就是我们曾经的光景。');
    }
  } else {
    // 未一致：什么也不做（保持灰块）
  }
}

function bind() {
  document.querySelectorAll('.piece').forEach(btn => {
    const id = Number(btn.dataset.id);
    if (solved.has(id)) btn.classList.add('solved');
    btn.addEventListener('click', () => runFlowForPiece(id));
  });

  const reset = document.getElementById('reset');
  if (reset) {
    reset.addEventListener('click', () => {
      localStorage.removeItem(stateKey);
      solved.clear();
      document.querySelectorAll('.piece').forEach(b => b.classList.remove('solved'));
    });
  }
}

restoreSolved();
bind();
