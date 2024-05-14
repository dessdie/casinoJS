#!/bin/bash

# Met à jour la liste des paquets
sudo apt-get update

# Installe les paquets nécessaires
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# Ajoute la clé GPG officielle de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Ajoute le dépôt Docker à la liste des sources APT
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Met à jour la liste des paquets pour inclure le dépôt Docker
sudo apt-get update

# Installe Docker
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Vérifie le statut du service Docker
sudo systemctl status docker

# Télécharge la dernière version de Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -oP '"tag_name": "\K(.*)(?=")')/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Rend Docker Compose exécutable
sudo chmod +x /usr/local/bin/docker-compose

# Affiche la version de Docker Compose pour vérifier l'installation
docker-compose --version
