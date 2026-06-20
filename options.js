// ページが開かれたときに、現在保存されている設定値を表示する
function loadOptions() {
  const defaultLimitWidth = Math.floor(window.screen.width / 2)+ 10;

  chrome.storage.sync.get({ limitWidth: defaultLimitWidth, enableAutoHide: true }, (items) => {
    document.getElementById('width-input').value = items.limitWidth;
    document.getElementById('auto-hide-enable').checked = items.enableAutoHide;
  });
}

// 保存ボタンが押されたときに、設定を保存する
function saveOptions() {
  const widthValue = parseInt(document.getElementById('width-input').value, 10);
  const isEnabled = document.getElementById('auto-hide-enable').checked;
  
  chrome.storage.sync.set({ limitWidth: widthValue, enableAutoHide: isEnabled }, () => {
    const status = document.getElementById('status-message');
    status.style.color = 'green';
    status.textContent = '設定を保存しました！Googleドライブのページを再読み込みすると反映されます。';
    setTimeout(() => { status.textContent = ''; }, 3000);
  });
}

// ★追加：リセットボタンが押されたときの処理
function resetOptions() {
  // 再度、画面の半分の幅を計算する
  const defaultLimitWidth = Math.floor(window.screen.width / 2)+ 10;

  // 画面の入力欄を強制的に「デフォルト状態」に戻す
  document.getElementById('width-input').value = defaultLimitWidth;
  document.getElementById('auto-hide-enable').checked = true;

  // そのまま保存も実行してしまう
  chrome.storage.sync.set({ limitWidth: defaultLimitWidth, enableAutoHide: true }, () => {
    const status = document.getElementById('status-message');
    status.style.color = '#d93025'; // リセットしたことが分かりやすいように赤っぽい文字色にする
    status.textContent = '初期値（画面の半分の幅）にリセットしました！';
    setTimeout(() => { status.textContent = ''; }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save-button').addEventListener('click', saveOptions);
// ★追加：リセットボタンをクリックしたときの指示
document.getElementById('reset-button').addEventListener('click', resetOptions);