# ElioBlocks
Elio programing interface based on Google Blockly 

# Structure initiale du projet
La structure actuelle du projet tire directement sa source du projet blockly initial de google

# Inspiration d'autres projets :
- Dossier `pages` et ses éléments<br/>
    Ce dossier contient l'affichage de l'interface.

    Cet élément a vu le jour grâce à <a href="https://medium.com/@akajithkumar9700/create-workspace-custom-blocks-in-blockly-530d97a95ce">ce guide</a>. Ce guide a permis au développeur de poser les bases de l'interface et de commencer à comprendre comme cela marchait. 

    Par la suite, la structure html et les autres fichiers du dossier ont été refait selon la structure de la page "demo" du projet initial b
    **Blockly**.

    Le fichier `affichageCode.js`, permettant l'affichage du code C++ des blocs, a été rendu fonctionnel grâce à <a herf="https://52.41.178.224/Junkbot-Projects/codebrick_blockly">ce projet</a> et notamment <a href="https://52.41.178.224/Junkbot-Projects/codebrick_blockly/blob/bbb0aec6726d36cafb06118039212c7dadc3bd0b/blockly/tests/generators/index.html">cette partie</a>

<br/>

- Dossier `blocks`<br/>
    Ce dossier contient la définition des blocs utilisés dans le projet.

    L'intégralité de son contenu est tiré et inspiré du projet **Blockly**, les blocs de base déjà fonctionnels ont été réutilisés pour ce projet dans un soucis de gain de temps.

<br/>

- Dossier `generators` <br/>
    Ce dossier permet d'effectuer la correspondance entre les blocs utilisés par le client et le code qu'ils décrivent.

    Ce dossier est directement inspiré et tiré du projet **BloklyDuino 2**

<br/>

- Dossier `msg` <br/>
    Ce dossier contient les éléments de langages dans l'optique de faire une application multilangue

    Cet élément est directement inspiré du projet **Blokly** ainsi que le tuto mis à la disposition des développeurs.

<br/>

- Dossier `ressourses` <br/>
    Ce dossier contient des éléments indispensables pour le bon fonctionnement du projet. Ils sont directement tirés du projet initial **Blokly**.

- Autres dossiers
    Les dossiers non mentionnés sont directement issu du projet blockly
