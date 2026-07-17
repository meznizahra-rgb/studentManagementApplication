# API

Base URL :

```text
http://localhost:8080/api/students
```

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Lister |
| GET | `/api/students/{id}` | Consulter |
| POST | `/api/students` | Créer |
| PUT | `/api/students/{id}` | Modifier |
| DELETE | `/api/students/{id}` | Supprimer |

Exemple POST :

```json
{
  "firstName": "Weil",
  "lastName": "Hnaien",
  "email": "weil@test.com",
  "classroom": "QA"
}
```
