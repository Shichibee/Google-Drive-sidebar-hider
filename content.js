const selectors = ['div.ZHllM', 'div.ALpC8b.fVVp2c', '.a-U-ye-ha'];

// 半分に割った後、余裕を持たせるために 10ピクセル 足す
const defaultLimitWidth = Math.floor(window.screen.width / 2) + 10;

let autoHideWidth = defaultLimitWidth; 
let enableAutoHide = true; 
let lastWidth = window.innerWidth;

// ▼▼▼ 新しく追加：画面左端に浮遊するボタンを作る ▼▼▼
const floatingBtn = document.createElement('button');
floatingBtn.innerText = '≡'; // ボタンのアイコン代わりのテキスト
floatingBtn.style.position = 'fixed';
floatingBtn.style.left = '0px';        // 画面の左端にピタッとくっつける
floatingBtn.style.top = '50%';         // 画面の縦半分の位置
floatingBtn.style.transform = 'translateY(-50%)'; // ぴったり中央に合わせる調整
floatingBtn.style.zIndex = '9999';     // どんな要素よりも一番手前に表示する
floatingBtn.style.padding = '12px 8px';
floatingBtn.style.backgroundColor = '#1a73e8'; // ドライブのテーマカラーっぽい青色
floatingBtn.style.color = 'white';
floatingBtn.style.border = 'none';
floatingBtn.style.borderTopRightRadius = '6px';    // 右側の角だけ丸くしてタブっぽくする
floatingBtn.style.borderBottomRightRadius = '6px';
floatingBtn.style.cursor = 'pointer';
floatingBtn.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.3)';
floatingBtn.style.opacity = '0.5'; // 普段は少し透けさせて、作業の邪魔にならないようにする

// マウスが乗ったときだけ、くっきり表示させるギミック
floatingBtn.addEventListener('mouseenter', () => { floatingBtn.style.opacity = '1'; });
floatingBtn.addEventListener('mouseleave', () => { floatingBtn.style.opacity = '0.5'; });

// 画面内のボタンが押されたときの動作（右上の拡張機能アイコンを押した時と同じ動き）
floatingBtn.addEventListener('click', () => {
  setMenuVisibility(isMenuHidden());
});

// 作成したボタンを、Googleドライブの画面に追加する
document.body.appendChild(floatingBtn);
// ▲▲▲ 新しく追加するコードはここまで ▲▲▲


// ① 設定画面で保存された値を読み込む
chrome.storage.sync.get({ limitWidth: defaultLimitWidth, enableAutoHide: true }, (items) => {
  autoHideWidth = items.limitWidth;
  enableAutoHide = items.enableAutoHide; 
  setTimeout(initCheck, 1500);
});

// メニューが隠れているかどうかを判定する関数
function isMenuHidden() {
  for (const selector of selectors) {
    const el = document.querySelector(selector);
    if (el) {
      return el.style.display === 'none';
    }
  }
  return false; 
}

// メニューの表示・非表示を切り替える関数
function setMenuVisibility(show) {
  for (const selector of selectors) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.style.display = show ? '' : 'none';
    });
  }
}

// 初期読み込み時のチェック
function initCheck() {
  if (enableAutoHide && window.innerWidth <= autoHideWidth) {
    setMenuVisibility(false);
  }
}

// ② ウィンドウサイズが変わったときの処理
window.addEventListener('resize', () => {
  if (!enableAutoHide) return;

  const currentWidth = window.innerWidth;

  if (lastWidth > autoHideWidth && currentWidth <= autoHideWidth) {
    setMenuVisibility(false);
  }
  else if (lastWidth <= autoHideWidth && currentWidth > autoHideWidth) {
    setMenuVisibility(true);
  }

  lastWidth = currentWidth;
});

// ③ 右上のアイコン（手動クリック）による開閉
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleMenu") {
    setMenuVisibility(isMenuHidden());
  }
});