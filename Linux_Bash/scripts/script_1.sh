#!/bin/bash

export mavar="Hello World"

echo Ma variable : $mavar
echo Variable nb caractères : ${#mavar}
echo Mes arguments : $1 $2 $3
echo Nom du script : $0
echo Nombre arguments : $#
echo Tous les arguments : $@
echo Retour dernier processus : $?
echo PID script : $$
echo Qui : $USER
echo Nom de la machine : $HOSTNAME
echo Random : $RANDOM
echo Random : $RANDOM
echo Ligne : $LINENO
echo Path : $PATH

echo "Je suis le contenu de mmyvar : $mavar"
echo 'Je suis le contenu de mmyvar : $mavar'
echo "Je suis le contenu de mmyvar : \$mavar"

./script_0.sh

sub=$(ls -l | wc -l)

echo $sub
