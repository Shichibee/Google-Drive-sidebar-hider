// ① 右上のアイコンがクリックされたときの処理（これは今まで通り）
chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.includes("drive.google.com")) {
    chrome.tabs.sendMessage(tab.id, { action: "toggleMenu" });
  }
});


// ▼▼▼ ここから下が新しく追加する「アイコン切り替え」の機能です ▼▼▼

// URLを確認して、アイコンをカラーかモノクロか決定する関数
function updateIcon(tabId, url) {
  // urlがGoogleドライブのものを含んでいればカラー、それ以外はモノクロ
  if (url && url.includes("drive.google.com")) {
    chrome.action.setIcon({ path: "icon_color.png", tabId: tabId });
  } else {
    chrome.action.setIcon({ path: "icon_mono.png", tabId: tabId });
  }
}

// ② 今見ているタブ（画面）を切り替えたときの監視
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    updateIcon(activeInfo.tabId, tab.url);
  });
});

// ③ タブの中で違うページに移動したり、再読み込みしたときの監視
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // ページの読み込み状況に関わらず、URL情報があれば判定する
  updateIcon(tabId, tab.url);
});