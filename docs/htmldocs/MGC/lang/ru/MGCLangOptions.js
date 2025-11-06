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
   TabLabels = ["Разделы","Индекс","Поиск","",""]; //These are the labels for the Topics, Index and Search tabs.
   InActiveTooltip = "Переключиться на";
   NoIndexTooltip = "There is no index for this document";
   ActiveToolTip = "Разделы активная вкладка"; 
   TOCResize = "Нажмите левую кнопку мыши и перетащите, чтобы изменить размер";
   InfoHubLink = "Для получения дополнительной информации, включая видео и материалы по обучению, откройте ";
   InfoHubTerm = "InfoHub";
   LibListTitle = "Документация";
}

function MGCButtonBarLangOptions()
{
   Button = {};
   Button["Titles"] = {};
   Button.Titles["closewindow"] = "Закройте это окно";
   Button.Titles["showtabsX"] = "Показать вкладку Разделы"; //Translated as "Show Topics Tab" because all other tabs have been disabled in localized version.
   Button.Titles["showtabs"] = "Скрыть вкладку Разделы"; //Translated as "Hide Topics Tab" because all other tabs have been disabled in localized version.
   Button.Titles["hidedoclist"] = "Скрыть список документов";   
   Button.Titles["home"] = "Отобразить заглавную страницу для "; //This is the tooltip for the "home" button. The text is combined with the title of the manual, for example "Display title page for Board Editor User Guide".
   Button.Titles["prevtopic"] = "Предыдущий раздел"; //This is the tooltip for the left-arrow button that loads the previous topic.
   Button.Titles["prevtopicX"] = "Предыдущий раздел не найден"; //This tooltip is displayed when the previous topic button is inactive (there is no previous topic).
   Button.Titles["nexttopic"] = "Следующий раздел"; //This is the tooltip for the right-arrow button that loads the next topic.
   Button.Titles["nexttopicX"] = "Следующий раздел не найден"; //This tooltip is displayed when the next topic button is inactive (there is no next topic).
   Button.Titles["prevsrch"] = "Предыдущий результат поиска";
   Button.Titles["nextsrch"] = "Следующий результат поиска";
   Button.Titles["highlight_on"] = "Выключить подсветку";
   Button.Titles["highlight_off"] = "Включить подсветку";
   Button.Titles["font0"] = "Мелкий размер шрифта";
   Button.Titles["font1"] = "Нормальный размер шрифта";
   Button.Titles["font2"] = "Крупный размер шрифта";
   Button.Titles["help"] = "Справка";
   Button.Titles["ihub"] = "Откройте Справку для просмотра дополнительных инструкций";
   Button.Titles["pdf"] = "Просмотр документа в формате PDF";
   Button.Titles["print"] = "Печать этого раздела"; //This is the tooltip for the print button.
   Button.Titles["feedback"] = "Отправка обратной связи в Siemens Digital Industries Software";
   Button.Titles["mgc"] = "Отобразить веб-сайт Siemens Digital Industries Software";
   Button.Titles["preferences"] = "Диалоговое окно 'Настройки отображения'";
   Button["Text"] = {};
   Button.Text["ihub"] = "Дополнительные руководства"; //Please keep this short---no more than two words. This is the text of the "more manuals" button. Clicking this button displays a list of all of the manuals in the InfoHub (Help system).
   Button.Text["title"] = "Показать список всех установленных документов";
   Button.Text["fonts"] = "РАЗМЕР ТЕКСТА";
   Button.Text["feedback"] = "Обратная связь";
   Button.Text["nexttopic"] = "Следующий раздел";
   Button.Text["prevtopic"] = "Предыдущий раздел";
   return;
}

function MGCOptionsDBLang()
{
   ODBLabels = {};
   ODBLabels["title"] = "Системные настройки документации";
   ODBLabels["close"] = "Close the Options Dialog Box";
   ODBLabels["intro"] = "Изменение системных настроек документации";
   ODBLabels["AllDocs"] = "Все установленные документы";
   ODBLabels["MyBooks"] = "Мои книги";
   ODBLabels["SNet"] = "SupportNet";
   ODBLabels["SortByTopic"] = "По разделам";
   ODBLabels["SortByBook"] = "По книге/разделу";
   ODBLabels["SortTitle"] = "Сортировка:";
   ODBLabels["ScopeTitle"] = "Область поиска:";
   ODBLabels["MiscTitle"] = "Прочие параметры:";
   ODBLabels["ApplyFilterMsg"] = "Фильтрация результатов поиска на основе текущих параметров";
   ODBLabels["CloseFilterMsg"] = "Закрыть параметры фильтрации поиска";
   ODBLabels["FilterResultsMsg"] = "<b>Фильтрация результатов поиска по:</b>";
   ODBLabels["FilterResultsBtn"] = "Фильтрация результатов";
   ODBLabels["RemoveFilterBtn"] = "Удалить фильтр";
   ODBLabels["SearchTipsBtn"] = "Советы по поиску";
   ODBLabels["SearchCommands"] = "Ограничить поиск названиями команд и функций";
   ODBLabels["SearchTitles"] = "Показать только результаты с условиями поиска в заголовках";
   ODBLabels["ExactMatchSearch"] = "Точное совпадение поискового слова";
   ODBLabels["IncludeSynonyms"] = "Не включать синонимы";
   ODBLabels["DisplayFunctionsTitle"] = "Список команд/функций для";
   ODBLabels["DisplaySynonymsTitle"] = "Список определенных синонимов для";
   ODBLabels["DisplaySynonymsFeedback1"] = "Хотите добавить дополнительные определения синонимов? Отправьте нам";
   ODBLabels["DisplaySynonymsFeedback2"] = "Обратная связь";
   ODBLabels["DisplaySnippets"] = "Показать фрагменты текста в результатах";
   ODBLabels["DisplayCloseList"] = "Закрыть список";
   ODBLabels["DisplayShowList"] = "\(Показать список\)";
   ODBLabels["DisplaySynonyms"] = "Просмотр списка синонимов";
   ODBLabels["DisplayKeywords"] = "Просмотр списка ключевых слов для поиска";
   ODBLabels["IncludeVariants"] = "Включить варианты \(\.\*ключевое слово\.\*\)";
   ODBLabels["IncludedSynonyms"] = "Синонимы \(выделены зеленым\), включенные в этот поиск:\n";
   ODBLabels["Persistence"] = "Эти параметры являются временными только для этой сессии браузера.\n";
   ODBLabels["DisplaySnippets"] = "Показать фрагменты поиска/индекса.\n";
}

function MGCSearchMessages()
{
   SearchMessages = {};
   SearchMessages.QSPrompt = "Поиск в этом документе";
   SearchMessages.QSBasic = "Выполнить поиск по ключевым словам в текущем документе.";
   SearchMessages.QSPrevTip = "Предыдущий раздел, содержащий поисковое слово";
   SearchMessages.QSNextTip = "Следующий раздел, содержащий поисковое слово";
   SearchMessages.NoSearchResults = "Не найдено совпадений.";
   SearchMessages.Searched4Begin = "Вы ищите:";
   SearchMessages.Searched4End = "Не удается найти то, что вам нужно? Отправка того же поискового запроса в";
   SearchMessages.SearchedShowing = " Отображаются ";
   SearchMessages.SearchedShowingE = " результаты";
   SearchMessages.TurnHighlightOn = "Включить подсветку";
   SearchMessages.TurnHighlightOff = "Выключить подсветку";
   SearchMessages.ApplyFilter = "Применить фильтр";
   SearchMessages.RemoveFilter = "Удалить фильтр";
}

function MGCHelpTopicTitles()
{
   HelpTopicTitle = {};
   HelpTopicTitle.Tip = "Советы по";
   HelpTopicTitle.Search = "Советы по поиску";
   HelpTopicTitle.Nav = "Навигация";
   HelpTopicTitle.QuickHelp = "Быстрая справка";
   HelpTopicTitle.Print = "Печать";
   HelpTopicTitle.Settings = "Параметры браузера";
   HelpTopicTitle.Feedback = "Отправить замечания по документации";
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
