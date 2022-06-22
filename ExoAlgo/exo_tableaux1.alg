<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER i" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurLigne="2" totalBoucles="5000000" totalAffichages="1000" epaisseurPoint="2" maxBoucle="500000" nbDecimales="8" arrondiAuto="vrai"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#t" algoitem="t EST_DU_TYPE LISTE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="12#i#0#9" algoitem="POUR i ALLANT_DE 0 A 9">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="4#saisir une valeur: #1" algoitem="AFFICHER &quot;saisir une valeur: &quot;"/>
            <item code="2#t#i" algoitem="LIRE t[i]"/>
            <item code="4#***********#1" algoitem="AFFICHER &quot;***********&quot;"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="4#*****affichage des elements du tableaux***********#1" algoitem="AFFICHER &quot;*****affichage des elements du tableaux***********&quot;"/>
        <item code="4#valeur de l indice i est:#0" algoitem="AFFICHER &quot;valeur de l indice i est:&quot;"/>
        <item code="3#i#1#pasliste" algoitem="AFFICHER i"/>
        <item code="5#i#0#pasliste" algoitem="i PREND_LA_VALEUR 0"/>
        <item code="15#i&lt; 10" algoitem="TANT_QUE (i&lt; 10) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#valeur: #0" algoitem="AFFICHER &quot;valeur: &quot;"/>
            <item code="3#t#1#i" algoitem="AFFICHER t[i]"/>
            <item code="5#i#i+1#pasliste" algoitem="i PREND_LA_VALEUR i+1"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
