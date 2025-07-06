#!/bin/bash

#Bienvenue sur mon script

# read -p 'Tapez un nombre : ' nbr

# while [ $nbr -gt 0 ]
# do
#  echo $nbr
#  ((nbr--))
# done

# until [ $nbr -le 0 ]
# do
#  echo $nbr
#  ((nbr--))
# done

noms='Pierre Paul Jack annuler'

# for nom in $noms
# do
 # if [ $nom = Paul ] 
 # then
  # continue
 # break
 # fi
 # echo $nom
# done

PS3="Sélectionnez une boisson : "

select BOISSON in thé café "jus de fruit" eau bière quitter
do
    case $BOISSON in
      café|thé|bière)
          echo "A consommer avec modération"
          ;;
      eau|"jus de fruit")
        echo "A boire sans retenue"
        ;;
      quitter)
        break
        ;;
      *)
        echo "ERREUR : invalide"
        ;;
    esac
done
echo Fini !
