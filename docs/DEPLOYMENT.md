# Déploiement

```bash
docker compose up -d --build
docker compose ps
docker compose logs -f
```

## Mise à jour

```bash
git pull
docker compose down
docker compose up -d --build
```

## Réinitialisation

```bash
docker compose down -v
docker compose up -d --build
```
