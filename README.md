# 🐉 PokemonBattle

## 💬 Description

PokemonBattle est une application mobile de combat de Pokémon développée en React Native, avec une partie backend en Python et une base de données MariaDB.

## 🛠 Prérequis

Ce projet repose sur plusieurs langages :
- Python 3.12
- React Native (TypeScript) avec Expo

Assurez vous d'avoir soit votre téléphone avec l'application Expo installé ou d'avoir Android Studio d'installé sur votre machine.

⚠️ Attention si vous utilisez l'application Expo sur votre téléphone il faut que le téléphone et la machine sur laquelle tourne le projet soit sur le même réseau. ⚠️

## 📦 Fonctionnalités

- Gestion de compte
- Monnaie
- Gestion de classement
- Gestion d'équipe
- Boutique d'Oeufs mystère et de Pokéball
- Capture de Pokemon
- Système de combat Pokemon

## 💻 Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/Lytzeer/PokemonBattle.git
```

2. Accédez au répertoire du projet :

```bash
cd PokemonBattle
```

3. Installez les dépendances :
```bash
npm install
```

4. Installez les dépendances pour l'API :
```bash
pip install -r server/requirements.txt
```

5. Modifiez la configuration de l'API dans server/Game/config.py.
```
Vous devez mettre votre IP personnel et non localhost ou 127.0.0.1
```

6. Créez un fichier .env à la racine du projet avec les variables d'environnement nécessaires.
```
EXPO_PUBLIC_API_URL="adresse_ip_de_l'api"
```

7. Lancez les conteneurs Docker :
```bash
cd server
docker-compose up -d
cd ..
```

8. Accédez à phpMyAdmin à l'adresse suivante : [localhost:8080](http://localhost:8080) et importez le [dump](https://drive.google.com/file/d/1r5CSij-bNxU4P1x48EKrmOC7E165SKBu/view?usp=sharing) de la base de données en suivant les étapes que vous voyez sur les images
- Étape 1 : Allez dans la base de donnée pokemon_battle
![etape 1](https://media.discordapp.net/attachments/857295238947012619/1239302728790839296/image.png?ex=66426e1b&is=66411c9b&hm=363b491a4829cfb7e2f25d3fae3a46d63d0442af2d12b329e4c8e9db47e90102&=&format=webp&quality=lossless&width=1402&height=670)

- Étape 2 : Aller dans l'onglet Importer
![etape 2](https://media.discordapp.net/attachments/857295238947012619/1239302995091390545/image.png?ex=66426e5b&is=66411cdb&hm=90f95f9edf4f0f170d497dfdaf810fa6c20f84c85d5e009ec2c836f81f7f0e5b&=&format=webp&quality=lossless&width=1440&height=60)

- Étape 3 : Choisir le fichier sql téléchargé
![etape 3](https://media.discordapp.net/attachments/857295238947012619/1239303179829645415/image.png?ex=66426e87&is=66411d07&hm=194eb5f4f0e11522d88fce08c0893ef1184fffa45b559133b424e8c4ab4aab99&=&format=webp&quality=lossless&width=1400&height=671)

- Étape 4 : Importer
![etape 4](https://media.discordapp.net/attachments/857295238947012619/1239303321970282649/image.png?ex=66426ea9&is=66411d29&hm=4dc6faea3ef854b979b40ec13048eccd28161c9a59d209823cafb1760aea454c&=&format=webp&quality=lossless&width=1396&height=671)

9. Lancez l'API :
```bash
cd server
python Game/api.py
```

10. Démarrez l'application mobile :
```bash
npm start
```

## Warning

Malheureusement certaine fonctionnalités n'ont pas pu etre finalisé et sont tout juste fonctionnelles voici une liste des fonctionnalités qui n'ont pas pu etre finalisé entièrement :
- Le système de capture de pokémon.
    - Vous pouvez bel est bien attraper le pokemon mais ça ne vous retire pas de pokeball.
- Le Shop.
    - Vous pouvez acheter des oeufs et des pokeball mais il n'y a pas d'indication d'achat.
- Le Système de combat.
    - Si vous utilisez une attaque qui n'a pas de stat de puissance l'attaque ne fera rien.

 Tout ces manque sont des améliorations qui y seront apporté.
