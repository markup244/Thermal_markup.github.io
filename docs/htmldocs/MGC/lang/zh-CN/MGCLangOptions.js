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
   TabLabels = ["主题","索引","搜索","",""];
   InActiveTooltip = "切换至";
   NoIndexTooltip = "There is no index for this document";
   ActiveToolTip = "主题选项卡处于活动状态";
   TOCResize = "单击并拖动来调整";
   InfoHubLink = "包括视频和培训等方面的更多相关信息，请访问 ";
   InfoHubTerm = "InfoHub。";   
   LibListTitle = "文档列表";
}

function MGCButtonBarLangOptions()
{
   Button = {};
   Button["Titles"] = {};
   Button.Titles["closewindow"] = "关闭此窗口";
   Button.Titles["showtabsX"] = "显示主题选项卡";    // "Show Topics Tab";
   Button.Titles["showtabs"] = "隐藏主题选项卡";    // "Hide Topics Tab";
   Button.Titles["hidedoclist"] = "隐藏文档列表";   
   Button.Titles["home"] = "显示本文档的标题页";
   Button.Titles["prevtopic"] = "上一个主题";
   Button.Titles["prevtopicX"] = "没有再前的主题";
   Button.Titles["nexttopic"] = "下一个主题";
   Button.Titles["nexttopicX"] = "没有再后的主题";
   Button.Titles["prevsrch"] = "上一个搜索结果";
   Button.Titles["nextsrch"] = "下一个搜索结果";
   Button.Titles["highlight_on"] = "关闭高亮显示";
   Button.Titles["highlight_off"] = "打开高亮显示";
   Button.Titles["font0"] = "较小字体大小";
   Button.Titles["font1"] = "正常字体大小";
   Button.Titles["font2"] = "较大字体大小";
   Button.Titles["help"] = "帮助";
   Button.Titles["ihub"] = "打开 InfoHub 以查看更多手册";
   Button.Titles["pdf"] = "查看文档 PDF";
   Button.Titles["print"] = "打印该主题"; // Print this topic";
   Button.Titles["feedback"] = "向 Siemens Digital Industries Software 提交反馈";
   Button.Titles["mgc"] = "显示 Siemens Digital Industries Software 网站";
   Button.Titles["preferences"] = "显示首选项对话框";
   Button["Text"] = {};
   Button.Text["ihub"] = "更多介绍"; // More Manuals";
   Button.Text["title"] = "显示所有已安装的文档列表"; // "Show list of all installed documents";
   Button.Text["fonts"] = "文本大小";
   Button.Text["feedback"] = "反馈";
   Button.Text["nexttopic"] = "下一个主题";
   Button.Text["prevtopic"] = "上一个主题";
   return;
}

function MGCOptionsDBLang()
{
   ODBLabels = {};
   ODBLabels["title"] = "文档系统首选项";
   ODBLabels["close"] = "关闭选项对话框";
   ODBLabels["intro"] = "修改文档系统选项";
   ODBLabels["AllDocs"] = "所有已安装的文档";
   ODBLabels["MyBooks"] = "我的书籍";
   ODBLabels["SNet"] = "SupportNet";
   ODBLabels["SortByTopic"] = "按主题";
   ODBLabels["SortByBook"] = "按书籍/主题";
   ODBLabels["SortTitle"] = "排序顺序：";
   ODBLabels["ScopeTitle"] = "搜索范围：";
   ODBLabels["MiscTitle"] = "其他选项：";
   ODBLabels["ApplyFilterMsg"] = "根据当前设置过滤搜索结果";
   ODBLabels["CloseFilterMsg"] = "关闭搜索过滤器选项";
   ODBLabels["FilterResultsMsg"] = "<b>过滤搜索结果依据：</b>";
   ODBLabels["FilterResultsBtn"] = "过滤结果";
   ODBLabels["RemoveFilterBtn"] = "移除过滤器";
   ODBLabels["SearchTipsBtn"] = "搜索技巧";
   ODBLabels["SearchCommands"] = "将搜索范围限制为命令和功能标题";
   ODBLabels["SearchTitles"] = "仅显示标题中包含搜索词的结果";
   ODBLabels["ExactMatchSearch"] = "搜索词的精确匹配";
   ODBLabels["IncludeSynonyms"] = "不包括同义词";
   ODBLabels["DisplayFunctionsTitle"] = "命令/功能列表";
   ODBLabels["DisplaySynonymsTitle"] = "定义的同义词列表";
   ODBLabels["DisplaySynonymsFeedback1"] = "要添加其他同义词定义吗？发送给我们";
   ODBLabels["DisplaySynonymsFeedback2"] = "反馈";
   ODBLabels["DisplaySnippets"] = "在结果中显示文本片段";
   ODBLabels["DisplayCloseList"] = "关闭列表";
   ODBLabels["DisplayShowList"] = "\(显示列表\)";
   ODBLabels["DisplaySynonyms"] = "查看同义词列表";
   ODBLabels["DisplayKeywords"] = "查看搜索关键字列表";
   ODBLabels["IncludeVariants"] = "包含派生项 \(\.\*关键字\.\*\)";
   ODBLabels["IncludedSynonyms"] = "此搜索中包含的同义词（以绿色高亮显示）为：\n";
   ODBLabels["Persistence"] = "这些设置是仅对此浏览器会话的临时设置。\n";
   ODBLabels["DisplaySnippets"] = "显示搜索/索引片段。\n";
}

function MGCSearchMessages()
{
   SearchMessages = {};
   SearchMessages.QSPrompt = "搜索此文档";
   SearchMessages.QSBasic = "在当前文档中执行关键字搜索。";
   SearchMessages.QSPrevTip = "包含搜索词的上一个主题";
   SearchMessages.QSNextTip = "包含搜索词的下一个主题";
   SearchMessages.NoSearchResults = "未找到结果。";
   SearchMessages.Searched4Begin = "您已搜索";
   SearchMessages.Searched4End = "找不到所需信息？将同一搜索提交到";
   SearchMessages.SearchedShowing = " 正在显示 ";
   SearchMessages.SearchedShowingE = " 个结果。";
   SearchMessages.TurnHighlightOn = "打开高亮显示";
   SearchMessages.TurnHighlightOff = "关闭高亮显示";
   SearchMessages.ApplyFilter = "应用过滤器";
   SearchMessages.RemoveFilter = "移除过滤器";
}

function MGCHelpTopicTitles()
{
   HelpTopicTitle = {};
   HelpTopicTitle.Tip = "相关技巧";
   HelpTopicTitle.Search = "搜索技巧";
   HelpTopicTitle.Nav = "浏览";
   HelpTopicTitle.QuickHelp = "快速帮助";
   HelpTopicTitle.Print = "打印";
   HelpTopicTitle.Settings = "浏览器设置";
   HelpTopicTitle.Feedback = "有关文档的反馈，请发送至";
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
