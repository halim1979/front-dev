<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER totalTTC"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2para="" F2defaut="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param arrondiAuto="vrai" epaisseurLigne="2" epaisseurPoint="2" nbDecimales="8" totalBoucles="5000000" totalAffichages="1000" maxBoucle="500000"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#boisson" algoitem="boisson EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#plat" algoitem="plat EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#supplément" algoitem="supplément EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#totalHT" algoitem="totalHT EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#TVA" algoitem="TVA EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#totalTTC" algoitem="totalTTC EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="2#boisson#pasliste" algoitem="LIRE boisson"/>
        <item code="3#boisson#0#pasliste" algoitem="AFFICHER boisson"/>
        <item code="2#plat#pasliste" algoitem="LIRE plat"/>
        <item code="3#plat#0#pasliste" algoitem="AFFICHER plat"/>
        <item code="2#supplément#pasliste" algoitem="LIRE supplément"/>
        <item code="3#plat#0#pasliste" algoitem="AFFICHER plat"/>
        <item code="5#totalHT#boisson+plat+supplément#pasliste" algoitem="totalHT PREND_LA_VALEUR boisson+plat+supplément"/>
        <item code="5#TVA#10%#pasliste" algoitem="TVA PREND_LA_VALEUR 10%"/>
        <item code="5#totalTTC#totalHT*TVA#pasliste" algoitem="totalTTC PREND_LA_VALEUR totalHT*TVA"/>
        <item code="3#totalTTC#0#pasliste" algoitem="AFFICHER totalTTC"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
