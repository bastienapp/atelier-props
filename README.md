Dans une application React, créer le composant Avatar qui prend comme props :
image: l’url de l’image à afficher
firstName: le prénom à afficher 
lastName: le nom à afficher en majuscule (même si le nom passé en props est en minuscule)
Appele ce composant dans App.js au moins 3 fois avec des valeurs différentes
Utilise le spread operator avec le composant Avatar pour afficher les valeurs de l’objet suivant:
Bart Data
Ajoute la vérification des types de données avec les PropTypes
Toujours avec les PropTypes, vérifie que les nom et prénoms sont bien renseigné (mais pas l'image)

si la prop image n’est pas fournie le composant affiche cette image (affichage par défaut)
faite en sorte que recevoir une nouvelle prop star (booléenne)
si elle vaut true, applique un style particulier à ton avatar (couleur de fond, couleur de texte, et pourquoi pas des paillettes animées en CSS).
