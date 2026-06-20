# Google Drive Sidebar Hider
Googleドライブの左側サイドメニュー（マイドライブやゴミ箱などが並んでいるメニュー）を、快適に開閉するためのChrome/Edge拡張機能です。

## ✨ 主な機能

* **自動開閉機能:** ウィンドウの幅が指定したサイズよりも狭くなると、自動的にサイドメニューを折りたたみます。（標準設定はディスプレイ幅の半分です）
* **フローティングボタン:** 画面左端に常に表示される「≡」ボタンをクリックすることで、いつでも手動でサイドメニューの表示/非表示を切り替えられます。
* **カスタマイズ可能な設定画面:** 自動開閉のON/OFFや、折りたたむ基準となるウィンドウ幅（px）を自由に設定できます。
* **アイコン切り替えギミック:** Googleドライブのタブを開いている時だけ、ブラウザ右上の拡張機能アイコンがカラーになります。

<img width="374" height="460" alt="before" src="https://github.com/user-attachments/assets/5b51dda0-c8a7-4ae7-a8a7-28902e4fb7fb" />
<img width="374" height="459" alt="after" src="https://github.com/user-attachments/assets/09072dec-f86a-4797-9bc1-af8eed5123f4" />

<img width="959" height="565" alt="2分割" src="https://github.com/user-attachments/assets/60db91d7-70d9-4d1e-baec-3c276efc1fab" />

## 📦 インストール方法（導入手順）

この拡張機能はChromeウェブストアには公開していないため、以下の手順でブラウザに直接読み込ませて使用します。

1. このページの右上にある緑色の `<> Code` ボタンをクリックし、**「Download ZIP」** を選択してパソコンに保存します。
2. ダウンロードしたZIPファイルを解凍（展開）し、フォルダを取り出します。
3. Google Chromeを開き、URLバーに `chrome://extensions/` と入力して「拡張機能の管理画面」を開きます。
4. 画面右上にある **「デベロッパー モード」** のスイッチをONにします。
5. 画面左上に出現する **「パッケージ化されていない拡張機能を読み込む」** をクリックし、手順2で解凍したフォルダを選択します。

これでインストールは完了です！Googleドライブを開いて動作を確認してください。

## ⚙️ 設定の変更方法

1. Chromeの拡張機能管理画面（ `chrome://extensions/` ）を開きます。
2. 「Google Drive Sidebar Hider」の項目内にある「詳細」をクリックし、「拡張機能のオプション」を開きます。
3. 自動開閉のON/OFFや、動作するウィンドウ幅の数値を変更し、「設定を保存」をクリックしてください。
4. 設定変更後、Googleドライブのページを再読み込み（リロード）すると反映されます。

## ⚠️ 注意事項

* 本拡張機能は、GoogleドライブのHTMLクラス名（`div.ZHllM` など）を指定して動作しています。そのため、**Googleドライブ側の仕様変更やデザインのアップデートがあった場合、突然動作しなくなる可能性があります。** あらかじめご了承ください。
* 本ツールは個人開発の非公式ツールです。ご利用は自己責任でお願いいたします。

## 🙏 謝辞 (Acknowledgments)

本拡張機能を作成するにあたり、以下の既存ツールや記事のアプローチ・アイデアを参考にさせていただきました。この場を借りて感謝申し上げます。

* [Google Drive Sidebar Toggler](https://chromewebstore.google.com/detail/google-drive-sidebar-togg/fdmlgpnckdndmeoofglbgeijcocpaegc) (Chromeウェブストア)
* [Googleドライブの右サイドパネルを非表示にするブックマークレット](https://pajoca.com/hide-googledrive-sidepanel/)

## 📄 ライセンス

MIT License
