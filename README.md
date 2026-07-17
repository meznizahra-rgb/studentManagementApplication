# Student Management System

Application pédagogique de gestion des étudiants avec Angular, Spring Boot, PostgreSQL et Docker.

## Fonctionnalités

- Créer un étudiant
- Valider les champs
- Lister les étudiants
- Actualiser la liste
- Supprimer un étudiant
- Persister les données dans PostgreSQL
- Exécuter les tests Cucumber / Selenium

## Architecture

```text
Navigateur
   |
Angular + Nginx :4200
   |
Spring Boot REST API :8080
   |
PostgreSQL :5432
```

## Structure

```text
student-management-system/
├── student-api/
├── student-frontend/
├── student-cucumber-tests/
├── docs/
├── postman/
├── sql/
├── .github/workflows/
├── docker-compose.yml
├── .env.example
└── README.md
```

## Démarrage avec Docker

```bash
cp .env.example .env
docker compose up -d --build
```

Sous Windows CMD :

```cmd
copy .env.example .env
docker compose up -d --build
```

## URLs

- Frontend : http://localhost:4200
- Backend : http://localhost:8080
- API : http://localhost:8080/api/students
- PostgreSQL : localhost:5432

## Arrêt

```bash
docker compose down
```

Suppression complète des données locales :

```bash
docker compose down -v
```

## Tests Cucumber

```bash
cd student-cucumber-tests
mvn clean test
```

## Documentation

- `docs/INSTALL.md`
- `docs/DEPLOYMENT.md`
- `docs/ARCHITECTURE.md`
- `docs/API.md`
- `docs/TESTING.md`
- `docs/TROUBLESHOOTING.md`
- `docs/USER_STORIES.md`
