#!/bin/bash

# Bienvenue sur mon script

echo "Quel dossier souhaitez-vous archiver ? "
read -p "Chemin du dossier : " folderPath
read -p "Nom de l'archive : " archiveName
read -p "Où voulez-vous mettre l'archive : " archivePath

echo "Chemin du dossier : $folderPath"
echo "Nom de l'archive : $archiveName"
echo "Chemin de l'archive : $archivePath"

select answer in oui non
do
  if [[ $answer = oui ]]
  then
    file="$archivePath/$archiveName.gz.tar"
    tar -czf $file $folderPath
    if [[ $? -eq 0 ]]
    then
      echo "Done !"
      break
    else
      echo "ERREUR !"
      break
    fi
  else
    echo "Bye !"
    break
  fi
done
