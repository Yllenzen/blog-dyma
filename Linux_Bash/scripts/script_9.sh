!/bin/bash

# Fonction pour compter le nombre de lignes dans une liste de fichiers passée en arguments
compterLignes () {
  # Nous utilisons une variable locale car nous n’en avons besoin que dans la fonction
  # et nous ne voulons pas risquer des duplications de noms
  local fichier=$1
  # Nous stockons à chaque exécution de la fonction le nombre de lignes du fichier passé
  # nous utilisons cat et un pipe pour n’avoir qu’un nombre en sorti et pas le nom du fichier
  resultat=$(cat $fichier | wc -l)
}

# On vérifie qu'il y a au moins un argument
if [[ $# -eq 0 ]]
then
  # Si $# vaut 0 cela signifie qu’aucun argument n’est passé
  # Nous affichons une erreur et retournons un code d’erreur
  echo "ERREUR pas de fichier passé"
  exit 1
fi

# On vérifie que tous les arguments sont des fichiers en les parcourant
for fichier in $@ ; do {
  # Si un seul argument n’est pas un fichier
  if [[ ! -f $fichier ]]
  # Alors nous affichons une erreur, nous interrompons le script
  # et nous retournons un code d’erreur
  then
    echo "ERREUR des fichiers n'existent pas"
    exit 1
  fi
}
done

# On compte les lignes fichier par fichier
# Nous devons stocker dans une variable le nombre d’arguments à cause de shift
nbrFichiers=$#
# Nous initialisons à 0 le total pour pouvoir faire l’addition initiale
total=0
# Ici nous utilisons une boucle qui signifie tant qu’il y a des arguments
until [[ "$@" = ''  ]]
# Pour chaque fichier on le passe à notre fonction et on affiche le résultat
# On incrémente le nombre total de lignes
do
  compterLignes $1
  echo "$1: $resultat lignes"
  total=$(( $total + $resultat ))
  # Notez l’utilisation du shift que nous détaillerons juste après
  shift
done

echo "$nbrFichiers fichiers au total, avec $total lignes au total"

