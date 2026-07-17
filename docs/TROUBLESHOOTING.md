# Dépannage

## UnknownHostException: postgres

Hors Docker :

```properties
jdbc:postgresql://localhost:5432/studentdb
```

Dans Docker :

```text
jdbc:postgresql://postgres:5432/studentdb
```

## Table students inexistante

```sql
SELECT current_database();
```

Résultat attendu : `studentdb`.

## Docker ne trouve pas student-frontend

Le `docker-compose.yml` doit être dans le dossier parent commun :

```text
racine/
├── docker-compose.yml
├── student-api/
└── student-frontend/
```
