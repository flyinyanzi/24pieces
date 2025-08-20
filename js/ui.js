// ui.js
const modal = document.getElementById('modal');

function clearModal() {
  modal.innerHTML = '';
}

function showModal() {
  modal.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
}

/**
 * 通用的选项弹窗
 * @param {string} question - 问题文本
 * @param {string[]} options - 选项数组
 * @returns Promise<string> - 用户选择的选项
 */
function choiceModal(question, options) {
  return new Promise(resolve => {
    clearModal();
    const q = document.createElement('p');
    q.textContent = question;
    modal.appendChild(q);

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        hideModal();
        resolve(opt);
      });
      modal.appendChild(btn);
    });

    showModal();
  });
}

// ============ 导出 API ============

// 普通问题
function step(q, opts) {
  return choiceModal(q, opts);
}

// 确认选择
function confirm(q, opts) {
  return choiceModal(q, opts);
}

// 允许重试（是/否）
function retry(msg) {
  return new Promise(resolve => {
    clearModal();
    const p = document.createElement('p');
    p.textContent = msg;
    modal.appendChild(p);

    const yes = document.createElement('button');
    yes.textContent = '再试一次';
    yes.onclick = () => { hideModal(); resolve(true); };
    modal.appendChild(yes);

    const no = document.createElement('button');
    no.textContent = '算了';
    no.onclick = () => { hideModal(); resolve(false); };
    modal.appendChild(no);

    showModal();
  });
}

// 展示故事/结果
function story(text, imgUrl) {
  return new Promise(resolve => {
    clearModal();
    const p = document.createElement('p');
    p.textContent = text;
    modal.appendChild(p);

    if (imgUrl) {
      const img = document.createElement('img');
      img.src = imgUrl;
      img.style.maxWidth = '100%';
      modal.appendChild(img);
    }

    const btn = document.createElement('button');
    btn.textContent = '关闭';
    btn.onclick = () => { hideModal(); resolve(); };
    modal.appendChild(btn);

    showModal();
  });
}

// 提示信息
function note(text) {
  return new Promise(resolve => {
    clearModal();
    const p = document.createElement('p');
    p.textContent = text;
    modal.appendChild(p);

    const btn = document.createElement('button');
    btn.textContent = '知道了';
    btn.onclick = () => { hideModal(); resolve(); };
    modal.appendChild(btn);

    showModal();
  });
}

// 完成时
function final(text) {
  return note(text);
}

export const openModal = { step, confirm, retry, story, note, final };
export function closeModal() { hideModal(); }
