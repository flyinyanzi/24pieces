// /js/main.js
import { openModal, closeModal } from './ui.js';

const stateKey = 'puzzle-progress-v1';
const solved = new Set(JSON.parse(localStorage.getItem(stateKey) || '[]'));

function save() {
  localStorage.setItem(stateKey, JSON.stringify([...solved]));
}

function bindPieces(puzzles) {
  document.querySelectorAll('.piece').forEach(btn => {
    const id = Number(btn.dataset.id);
    if (solved.has(id)) btn.classList.add('solved');
    btn.addEventListener('click', () => startFlow(id, puzzles));
  });
}

async function startFlow(id, puzzles) {
  const p = puzzles.find(x => x.id === id);
  const answers = [];
  for (const step of p.questions) {
    const choice = await openModal.step(step.q, step.opts);
    answers.push(choice);
  }
  // 最后一题：确认词
  let picked = await openModal.confirm("你会选择哪个词呢？", p.confirmOptions);
  if (picked !== p.correct) {
    const retry = await openModal.retry("也许再想一想？要不要换一个选项？");
    if (retry) picked = await openModal.confirm("再选一次：", p.confirmOptions);
  }
  // 结果
  if (picked === p.correct) {
    await openModal.story(p.story, p.thumb);
    document.querySelector(`.piece[data-id="${id}"]`).classList.add('solved');
    solved.add(id); save();
    checkAllSolved();
  } else {
    await openModal.note("没关系，我们一起把这块留到以后再拼。");
  }
}

function checkAllSolved() {
  if (solved.size === 24) {
    openModal.final("谢谢你和我一起完成这幅拼图。原来这些碎片，拼起来就是我们曾经的光景。");
  }
}

fetch('./data/puzzles.json').then(r => r.json()).then(puzzles => {
  bindPieces(puzzles);
});
