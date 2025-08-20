// ui.js —— Promise 风格的弹窗组件

let modal, backdrop, content;
let lastActiveEl = null;

function ensureModal() {
  if (modal) return;
  modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'modal hidden';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  backdrop = document.createElement('div');
  backdrop.className = 'modal__backdrop';

  content = document.createElement('div');
  content.className = 'modal__card';
  content.setAttribute('role', 'document');

  modal.appendChild(backdrop);
  modal.appendChild(content);
  document.body.appendChild(modal);
}

function openShell({ title, html, buttons }) {
  ensureModal();
  content.innerHTML = '';

  if (title) {
    const h3 = document.createElement('h3');
    h3.className = 'modal__title';
    h3.textContent = title;
    content.appendChild(h3);
  }

  if (html) {
    const body = document.createElement('div');
    body.className = 'modal__body';
    if (typeof html === 'string') body.innerHTML = html;
    else body.appendChild(html);
    content.appendChild(body);
  }

  const btnRow = document.createElement('div');
  btnRow.className = 'modal__actions';
  (buttons || []).forEach(b => btnRow.appendChild(b));
  content.appendChild(btnRow);

  lastActiveEl = document.activeElement;
  modal.classList.remove('hidden');
  const firstBtn = content.querySelector('button');
  if (firstBtn) firstBtn.focus();
}

function closeModal() {
  if (!modal) return;
  modal.classList.add('hidden');
  content.innerHTML = '';
  if (lastActiveEl && typeof lastActiveEl.focus === 'function') lastActiveEl.focus();
}

function makeBtn(text, variant = 'default', onClick) {
  const btn = document.createElement('button');
  btn.className = `modal__btn ${variant}`;
  btn.type = 'button';
  btn.textContent = text;
  btn.addEventListener('click', onClick);
  return btn;
}

/* —— 导出给 main.js 使用的 Promise 接口 —— */

function step(question, options) {
  return new Promise(resolve => {
    const wrap = document.createElement('div');
    wrap.className = 'modal__options';
    options.forEach(opt => {
      wrap.appendChild(makeBtn(opt, 'option', () => { closeModal(); resolve(opt); }));
    });
    openShell({ title: question, html: wrap, buttons: [] });
  });
}

function confirm(question, options) {
  return step(question, options);
}

function retry(message = '要不要再试一次？', yesText = '再选一次', noText = '算了') {
  return new Promise(resolve => {
    const yes = makeBtn(yesText, 'primary', () => { closeModal(); resolve(true); });
    const no  = makeBtn(noText,  'ghost',   () => { closeModal(); resolve(false); });
    openShell({ title: message, html: null, buttons: [no, yes] });
  });
}

function story(text, imgUrl) {
  return new Promise(resolve => {
    const box = document.createElement('div');
    box.className = 'story';
    const p = document.createElement('p');
    p.textContent = text;
    box.appendChild(p);

    if (imgUrl) {
      const img = document.createElement('img');
      img.src = imgUrl; img.alt = ''; img.className = 'story__img';
      box.appendChild(img);
    }
    const ok = makeBtn('关闭', 'primary', () => { closeModal(); resolve(); });
    openShell({ title: '这一块拼好了', html: box, buttons: [ok] });
  });
}

function note(text) {
  return new Promise(resolve => {
    const p = document.createElement('p'); p.textContent = text;
    const ok = makeBtn('知道了', 'primary', () => { closeModal(); resolve(); });
    openShell({ title: '', html: p, buttons: [ok] });
  });
}

function final(text) { return note(text); }

export const openModal = { step, confirm, retry, story, note, final };
export { closeModal };
