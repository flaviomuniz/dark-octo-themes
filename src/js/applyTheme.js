function includeTheme(tab){
  if(tab.url.match(/https:\/\/(gist.)?github.com/)){  
    addThemeToTab(tab, ThemeStorage.getCurrent());
  }
}

function addThemeToTab(tab, themeName) {
  chrome.tabs.insertCSS(tab.id, {file: 'src/themes/' + themeName + '.css'});
}

chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab){
  if(changeInfo.url || changeInfo.status === "loading"){
    includeTheme(tab);
  }
});

chrome.tabs.onCreated.addListener(function(tab){
  includeTheme(tab);
});

