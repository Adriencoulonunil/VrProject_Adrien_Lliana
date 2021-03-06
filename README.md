# Mars Apocalypse

## (i) Description :

Pour réaliser ce projet, nous nous sommes réunis quatre fois durant plusieurs heures afin de définir d’abord notre idée initiale et de construire ensuite le code ensemble. Nous avons décidé de créer une ambiance apocalyptique et spatiale sur la planète Mars. Notre choix a été conforté par la découverte de modèles gltf d’éléments spatiaux mis en ligne gratuitement sur le site du Smithsonian.  Nous avons aussi puisé dans des sites qui donnaient accès à d’autres modèles qui complétaient bien la vision que nous avions pour notre projet. 


“Depuis ta station spatiale orbitant autour de Mars, tes instruments de mesure perçoivent une fréquence inhabituelle émanant de la planète, et qui met en péril ton observation de l’environnement. Alors que ton modèle Apollo se dirige vers Mars afin d’élucider ce mystère, ton pilote automatique s’affole et tu t’écrases sur la planète. Lorsque tu sors du module, ton assistante humanoïde semble perturbée par une forte radiation et ne répond plus à tes commandes. L’environnement de la planète est hostile, avec de nombreuses pluies de météorites, et une curieuse lumière émane d’ossements à apparence animale… Heureusement, une navette de secours vient te chercher, mais auras-tu le temps d’étudier le squelette inquiétant avant que les radiations ne grillent les systèmes de la navette?”

## (ii) Captures d'écran:
![Dashboard view](/screen1.jpg)
![Dashboard view](/screen2.png)

## (iii) Procédure d’installation requise:
Il n'y a pas de procédure d'installation requise.

## (iv) Eventuels modules, librairies ou scripts intégrés ou nécessaires au bon fonctionnement du projet:
Nous avons du installer trois extensions sur Visual Studio Code afin de voir notre code fonctionner.

A-Frame Completion, version: v0.4.1, par Marlon Lückert

glTF Tools, version: v2.3.16, par CesiumJS.org

audio-preview, version: v2.0.3, par sukumo28

## (v) Création du projet:


__Téléchargement des Objets:__

  -Id et sources des objets téléchargés:
  
  Les objets (GLTF uniquement) du projet viennent des sites suivant: https://3d.si.edu/collections/apollo11 et https://www.cgtrader.com/items/2639757/download-page
  
  -Décor du sol et fond:
  
  Après plusieurs test sur des images libres de droit de google image nous avons pu créer le décor. Les images sont bien saturées avec un effet couleur rouge.
  
  -Id et source audio:
  
  L'audio est un extrait du site de la NASA, il s'agit du véritable son du vent sur Mars. 
  
  
  
  
  
__Mise en place de la scène avec les actions liées aux objets:__

  -Ciel/fond et Sol:
  
  La sol est assez large pour que le spectateur ne puisse pas voir ses limites. Il n'y a pas de rupture avec le ciel/fond. Un aspect rouge fut ajouté pour plus de continuité aux deux éléments. 
  
  -Navette:
  
  Elle vient se déposer doucement sur le sol, l'avion s'enfonce dans le sol car il n'y a pas de piste d'attérissage. L'utilisation de dur pour la durée fut très utile. 
  
  -Element apollo et la Squelette dinosaure:
  
  Ce sont deux éléments "statiques" de la scène qui permettent d'imaginer l'histoire. 
  
  -Humanoîde "Wraith" et le Satelite:
  
  L'idée d'un drone qui tourne autour de nous dans les airs fut difficile à réaliser. Nous n'avons pas trouvé de drone en gltf gratuit.
  Cependant cet humanoîde est très drôle et tourne comme s'il n'y a plus de contrôle sur l'engin. 
  La satelite est plus stable est fait le tour de la planète doucement. 
  Pour les deux éléments nous avons utilisé la "rotation" pour ne pas avoir une trajectoire trop linéaire. 
  
  -Son:
  
  Le son est un enregistrement du vent sur Mars d'une dizaine de seconde qui tourne en boucle. Il doit se lancer tout seul à l'ouverture du projet. Si ce n'est pas le cas c'est qu'il est en cours de chargement. (jusqu'à 5-10min parfois!) Il sera peut être nécessaie de cliquer sur le fichier mp3 pour s'assurer qu'il se télécharge bien. 
  
  -Lumières spot vert alien:
  
  La lumière verte permet de donner plus de sens à l'animal mort et la couleure verte est associée dans l'imagianire collectif aux aliens. ce qui crée un monde étrange.
  
  -Lumières spot éclairage météorites:
  
  Un spot était nécessaire pour mettre en valeur le pluie de météorite. 
  
  -Lumière ambiance:
  
  Une lumière d'ambiance rouge permet d'asombrir un peu la scène. 
  
  -Pluie de météorite:
  
la pluie de météorite est un ensemble de 8 pierres qui volent en groupe toujours dans le même sens mais pas toute à la même vitesse. L'utilisation de "dir: normal" fut très utile. Elles viennent de l'infinie pour aller à l'opposer de la scène. 
  
## (vi) Contexte de développement:

Ce projet a été développé dans le cadre du cours "Réalité virtuelle et augmentée" dispensé par Isaac Pante (SLI, Lettres, UNIL).

## (vii) Auteur.rice.s:

Lliana Doudot et Adrien Coulon
