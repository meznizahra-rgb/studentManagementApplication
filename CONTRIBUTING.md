# Contribution

## Branches

- `main`
- `develop`
- `feature/<nom>`
- `bugfix/<nom>`
- `test/<nom>`

## Convention de commit

```text
feat: add student creation
fix: handle duplicated email
test: add cucumber scenario
docs: update deployment guide
```

## Avant une Pull Request

```bash
cd student-api && mvn clean test
cd ../student-frontend && npm ci && npm run build
cd ../student-cucumber-tests && mvn clean test
```
