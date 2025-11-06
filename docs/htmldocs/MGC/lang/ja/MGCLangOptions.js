// ===============================================
// Copyright 2010-2020 Mentor Graphics Corporation
//
//    All Rights Reserved.
//
// THIS WORK CONTAINS TRADE SECRET
// AND PROPRIETARY INFORMATION WHICH IS THE
// PROPERTY OF MENTOR GRAPHICS
// CORPORATION OR ITS LICENSORS AND IS
// SUBJECT TO LICENSE TERMS.
// ===============================================
//
// MGCLangOptions.js
//

function MGCSetLangOptions()
{
   MGCSetTabLangOptions();
   MGCButtonBarLangOptions();
   MGCSearchMessages();
   MGCOptionsDBLang();
   MGCHelpTopicTitles();

   translateText();
}

function MGCSetTabLangOptions()
{
   TabLabels = ["トピック","インデックス","検索","",""];
   InActiveTooltip = "切り替え";
   NoIndexTooltip = "There is no index for this document";
   ActiveToolTip = "トピックタブを現在選択中";
   TOCResize = "クリックしてからドラッグ";
   InfoHubLink = "ムービーやトレーニングなどその他の情報は、";
   InfoHubTerm = "InfoHubを開いてください。";
   LibListTitle = "マニュアル一覧";
}

function MGCButtonBarLangOptions()
{
   Button = {};
   Button["Titles"] = {};
   Button.Titles["closewindow"] = "Close this window";
   Button.Titles["showtabsX"] = "トピックタブを表示";     // "Show Topics Tab";
   Button.Titles["showtabs"] = "トピックタブを非表示";    // "Hide Topics Tab";
   Button.Titles["hidedoclist"] = "Hide document list";
   Button.Titles["home"] = "このマニュアルのタイトルを表示";
   Button.Titles["prevtopic"] = "前のトピック";
   Button.Titles["prevtopicX"] = "前のトピックはありません";
   Button.Titles["nexttopic"] = "次のトピック";
   Button.Titles["nexttopicX"] = "次のトピックはありません";
   Button.Titles["prevsrch"] = "Previous Search Result";
   Button.Titles["nextsrch"] = "Next Search Result";
   Button.Titles["highlight_on"] = "Turn OFF Highlighting";
   Button.Titles["highlight_off"] = "Turn ON Highlighting";
   Button.Titles["font0"] = "Small font size";
   Button.Titles["font1"] = "Normal font size";
   Button.Titles["font2"] = "Large font size";
   Button.Titles["help"] = "Help";
   Button.Titles["ihub"] = "Open the InfoHub to view more manuals";
   Button.Titles["pdf"] = "Open the PDF for this topic";
   Button.Titles["print"] = "このトピックを印刷";
   Button.Titles["feedback"] = "シーメンスデジタルインダストリーズソフトウェアにフィードバックを送信";
   Button.Titles["mgc"] = "シーメンスデジタルインダストリーズソフトウェアWebサイトを表示";
   Button.Titles["preferences"] = "設定ダイアログボックスを表示";
   Button["Text"] = {};
   Button.Text["ihub"] = "他のマニュアルを表示";
   Button.Text["title"] = "利用可能なマニュアル一覧を表示";
   Button.Text["fonts"] = "テキストサイズ";
   Button.Text["feedback"] = "Feedback";
   Button.Text["nexttopic"] = "次のトピック";
   Button.Text["prevtopic"] = "前のトピック";
   return;
}

function MGCOptionsDBLang()
{
   ODBLabels = {};
   ODBLabels["title"] = "ドキュメントシステムのプレファレンス";
   ODBLabels["close"] = "オプションダイアログボックスを閉じる";
   ODBLabels["intro"] = "ドキュメントシステムオプションの変更";
   ODBLabels["AllDocs"] = "インストール済みのすべてのドキュメント";
   ODBLabels["MyBooks"] = "マイブック";
   ODBLabels["SNet"] = "SupportNet";
   ODBLabels["SortByTopic"] = "トピック別";
   ODBLabels["SortByBook"] = "ブック/トピック別";
   ODBLabels["SortTitle"] = "ソート順：";
   ODBLabels["ScopeTitle"] = "検索範囲：";
   ODBLabels["MiscTitle"] = "その他のオプション：";
   ODBLabels["ApplyFilterMsg"] = "現在の設定に基づいて検索結果をフィルタ";
   ODBLabels["CloseFilterMsg"] = "検索フィルタオプションを閉じる";
   ODBLabels["FilterResultsMsg"] = "<b>検索結果のフィルタ基準：</b>";
   ODBLabels["FilterResultsBtn"] = "結果をフィルタ";
   ODBLabels["RemoveFilterBtn"] = "フィルタを除去";
   ODBLabels["SearchTipsBtn"] = "検索のヒント";
   ODBLabels["SearchCommands"] = "検索をコマンドおよび機能のタイトルに制限";
   ODBLabels["SearchTitles"] = "見出しに検索用語を含む結果のみを表示";
   ODBLabels["ExactMatchSearch"] = "検索用語の完全一致";
   ODBLabels["IncludeSynonyms"] = "同意語を含めない";
   ODBLabels["DisplayFunctionsTitle"] = "コマンド/機能の一覧：";
   ODBLabels["DisplaySynonymsTitle"] = "定義された同意語の一覧：";
   ODBLabels["DisplaySynonymsFeedback1"] = "他に追加された同意語の定義は何ですか？お送りください";
   ODBLabels["DisplaySynonymsFeedback2"] = "フィードバック";
   ODBLabels["DisplaySnippets"] = "結果にテキストスニペットを表示";
   ODBLabels["DisplayCloseList"] = "一覧を閉じる";
   ODBLabels["DisplayShowList"] = "\(一覧を表示\)";
   ODBLabels["DisplaySynonyms"] = "同意語の一覧を表示";
   ODBLabels["DisplayKeywords"] = "検索キーワードの一覧を表示";
   ODBLabels["IncludeVariants"] = "バリアントを含む \(\.\*キーワード\.\*\)";
   ODBLabels["IncludedSynonyms"] = "この検索に含まれる同意語 \(緑でハイライト\)：\n";
   ODBLabels["Persistence"] = "これらの設定は、このブラウザセッションに対する一時的なものです。\n";
   ODBLabels["DisplaySnippets"] = "検索/インデックススニペットを表示します。\n";
}

function MGCSearchMessages()
{
   SearchMessages = {};
   SearchMessages.QSPrompt = "このドキュメントを検索";
   SearchMessages.QSBasic = "現在のドキュメントでキーワード検索を実行します。";
   SearchMessages.QSPrevTip = "検索用語を含む前のトピック";
   SearchMessages.QSNextTip = "検索用語を含む次のトピック";
   SearchMessages.NoSearchResults = "結果が見つかりません。";
   SearchMessages.Searched4Begin = "検索内容：";
   SearchMessages.Searched4End = "必要な情報が見つからない場合、同じ検索内容を次に送信してください：";
   SearchMessages.SearchedShowing = " 表示 ";
   SearchMessages.SearchedShowingE = " 結果";
   SearchMessages.TurnHighlightOn = "ハイライトをオンにする";
   SearchMessages.TurnHighlightOff = "ハイライトをオフにする";
   SearchMessages.ApplyFilter = "フィルタを適用";
   SearchMessages.RemoveFilter = "フィルタを除去";
}

function MGCHelpTopicTitles()
{
   HelpTopicTitle = {};
   HelpTopicTitle.Tip = "ヒント：";
   HelpTopicTitle.Search = "検索のヒント";
   HelpTopicTitle.Nav = "ナビゲート";
   HelpTopicTitle.QuickHelp = "クイックヘルプ";
   HelpTopicTitle.Print = "印刷";
   HelpTopicTitle.Settings = "ブラウザ設定";
   HelpTopicTitle.Feedback = "ドキュメント類に関するフィードバックはこちらまで";
   HelpTopicTitle.Sep = " | ";
}

function translateText()
{
    var e = document.getElementById("tab0");
    e.innerText = TabLabels[0];

    e = document.getElementById("tab1");
    if(e) e.innerText = TabLabels[1];

    // Set Search tab label. 
    // Search tab is hidden for all except English. The test is done in mgchelp.js
    e = document.getElementById("tab2");
    if(e) e.innerText = TabLabels[2];

    // Note the following is sensitive to the order of nodes in mgchelp.htm.
    e = document.getElementById("InfoHubLibListLink");
    if(e) {
      var children = e.childNodes;
      if(children[0]) children[0].textContent = InfoHubLink; // Text of the InfoHubLibListLink
      if(children[1]) children[1].innerText = InfoHubTerm;   // Text of the nested <a> child node.
    }

    e = document.getElementById("LibListTitle");
    if (e) e.innerText = LibListTitle;

    e = document.getElementById("dragbar");
    if(e) e.setAttribute('title', TOCResize);

    e = document.getElementById("showhidetabs");
    e.setAttribute('title', Button.Titles["showtabs"]);

    e = document.getElementById('HideShowTOC');
    if(e) e.setAttribute('title', Button.Titles["showtabs"]);

    e = document.getElementById('HideDocList');
    if(e) e.setAttribute('title', Button.Titles['hidedoclist']);

    e = document.getElementById("PrevTopic");
    e.firstElementChild.setAttribute('title', Button.Titles["prevtopic"]);
    e.firstElementChild.innerText = Button.Text["prevtopic"];

    e = document.getElementById("NextTopic");
    e.firstElementChild.setAttribute('title', Button.Titles["nexttopic"]);
    e.firstElementChild.innerText = Button.Text["nexttopic"];
    
    // Feedback link not present for SIEMENS_OEM, but it's also hidden for translations.
    e = document.getElementById("FdbackLnk");
    if(e != null) {
      // e.firstElementChild.setAttribute('title', Button.Titles["feedback"]);
      e.setAttribute('style', 'display: none;');
    }
    
    /* 
    * Hidden for all but English.
    e = document.getElementById("FeedbackSpan");
    if(e != null) {
      e.innerText = Button.Text["feedback"];
    }
    */

    e = document.getElementById("manuals_button");
    e.setAttribute('title', Button.Text["title"]);
    e = document.getElementById("MoreSpan");
    e.innerText = Button.Text["ihub"];

    // The footer contains links to the untranslated mgc_help book. 
    // It is hidden for all but English.
    e = document.getElementById("footer");
    if(e) e.setAttribute('style', 'display: none;');
    
    // Hidden for all but English.
    // e.firstElementChild.setAttribute('title', Button.Titles["pdf"]);    
    e = document.getElementById("PDFLnk");
    if(e) e.setAttribute('style', 'display: none;');

    e = document.getElementById("PrintTopic");
    e.setAttribute('title', Button.Titles["print"]);
}
