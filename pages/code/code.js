/**
 * @author : Boutrois Romain & Morel Guillaume
 * @description : Changements de l'interface
 */

// Themes blockly dark mode :


// Light mode / dark mode

const buttonMode = document.querySelector('.button-mode');

buttonMode.addEventListener('click', () => {
    const body = document.body;

    if(body.classList.contains('dark'))
    {
        body.classList.add('light');
        body.classList.remove('dark');
        buttonMode.innerHTML = "Dark";
        workspace.setTheme(Blockly.Themes.Classic);
        
    }
    else if(body.classList.contains('light'))
    {
        body.classList.add('dark');
        body.classList.remove('light');
        buttonMode.innerHTML = "Light";
        workspace.setTheme(Blockly.Themes.Dark);
    }
})

// Change language

var language = document.querySelector('select');
  
function getLang() 
{
    var lang = getStringParamFromUrl('lang', '');
    if (LANGUAGE_NAME[lang] === undefined) 
    {
      // Default to french.
      lang = 'fr';
    }
    return lang;
}

language.addEventListener('change', function () 
{
    // Store the blocks for the duration of the reload.
    // MSIE 11 does not support sessionStorage on file:// URLs.
    if (window.sessionStorage) 
    {
        var xml = Blockly.Xml.workspaceToDom(workspace);
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }

    var newLang = encodeURIComponent(this.value);
    var search = window.location.search;
    if (search.length <= 1) 
    {
        search = '?lang=' + newLang;
    } 
    else if (search.match(/[?&]lang=[^&]*/)) 
    {
        search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
    } 
    else 
    {
        search = search.replace(/\?/, '?lang=' + newLang + '&');
    }

    window.location = window.location.protocol + '//' + window.location.host + window.location.pathname + search;
})

// Pas dans la doc, on récupère nos trois boutons en vue d'une traduction français - anglais (des boutons)
const btnCode = document.getElementById('btnCode');
const btnSave = document.getElementById('btnSave');
const btnFile = document.getElementById('btnFile');

function setLanguage()
{
    document.getElementById("changeAppLanguage").value = getLang();

    // traduction des boutons en fonction de la langue choisie
    switch(getLang())
    {
        case 'fr' :
            btnCode.innerHTML = "Télécharger mon code";
            btnSave.innerHTML = "Sauvegarder mon travail";
            btnFile.innerHTML = "Importer du travail";
            break ;

        case 'en' :
            btnCode.innerHTML = "Donwload my code";
            btnSave.innerHTML = "Save your work";
            btnFile.innerHTML = "Import some work";
            break ;

        // Français par défaut
        default :
            btnCode.innerHTML = "Télécharger mon code";
            btnSave.innerHTML = "Sauvegarder mon travail";
            btnFile.innerHTML = "Importer du travail";
            break ;
    }
}