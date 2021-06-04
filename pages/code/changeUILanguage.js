// On énumère les langages disponibles
const LANGUAGE_NAME = {
    'en': 'English',
    'fr': 'Français'
}

function getStringParamFromUrl(name, defaultValue)
{
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
}

function defineLanguage()
{
    language = getStringParamFromUrl('lang', '');
    
    if(LANGUAGE_NAME[language] === undefined)
    {
        var language = 'fr'; // Langage par défaut
    }

    // On ajoute le script de langue
    document.open();
    document.write('<script src="../msg/js/'+language+'.js"></script>');
    document.close();
}

defineLanguage();



