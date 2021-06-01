function getStringParamFromUrl(name, defaultValue)
{
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
}

function defineLanguage()
{
    var language = 'fr'; // default language

    if(getStringParamFromUrl('lang', '') != null)
    {
        language = getStringParamFromUrl('lang', '');
    }

    var script = document.createElement("script");
    script.src = "../msg/js/"+language+".js";
    document.head.insertBefore(script, document.head.children[11]);
}

defineLanguage();



