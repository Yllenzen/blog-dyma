#!/bin/bash

#Bienvenue sur mon script

case $1 in
 start)
  echo start
  ;;
 *st*)
  echo stop
  ;;
 *)
  echo Je n\'ai pas compris
  ;;
esac
