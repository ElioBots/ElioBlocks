import * as fichier from  'fs'

function getCode(fichier)
{
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    
    var fichierResultat = fichier.writeFile("testfile.c", 2, true);

    fichierResultat.WriteLine(code);
    fichierResultat.Close();
}
