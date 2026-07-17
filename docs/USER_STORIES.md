# User Stories

## US-01 — Créer un étudiant

En tant qu’utilisateur, je souhaite créer un étudiant afin de l’enregistrer.

```gherkin
Scénario: Création réussie
  Étant donné que les champs sont valides
  Quand l'utilisateur clique sur "Créer l'étudiant"
  Alors l'étudiant est enregistré
  Et il apparaît dans la liste
```

## US-02 — Lister les étudiants

En tant qu’utilisateur, je souhaite consulter les étudiants enregistrés.

## US-03 — Supprimer un étudiant

En tant qu’utilisateur, je souhaite supprimer un étudiant après confirmation.

## US-04 — Gérer les erreurs

En tant qu’utilisateur, je souhaite recevoir un message clair lorsqu’une opération échoue.
