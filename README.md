# Projet Form React.js

Ce projet te permet d'apprendre les concepts fondamentaux de React, notamment les **composants réutilisables** et les **inputs contrôlés**.

## Composant InputValueString

### Qu'est-ce qu'un composant réutilisable ?

Un composant réutilisable est un composant que tu peux utiliser plusieurs fois dans ton application avec des paramètres différents (appelés **props**).

### Qu'est-ce qu'un input contrôlé ?

Un **input contrôlé** est un champ de saisie dont la valeur est gérée par React via le **state**. Cela signifie que :
- La valeur affichée dans l'input vient du state (`value={valueString}`)
- Chaque modification de l'input met à jour le state (`onChange`)
- React a toujours le contrôle sur la valeur affichée

### Utilisation du composant

```jsx
import InputValueString from './components/InputValueString';

function App() {
  return (
    <div>
      <InputValueString label="nom" />
      <InputValueString label="prénom" type="text" />
      <InputValueString label="email" type="email" />
    </div>
  );
}
```

### Props disponibles

| Prop | Type | Valeur par défaut | Description |
|------|------|-------------------|-------------|
| `label` | string | (requis) | Le label de l'input |
| `type` | string | `"text"` | Le type d'input (text, email, password, etc.) |
| `classParent` | string | `"flex flex-col"` | Classes CSS du conteneur parent |

## Installation et démarrage

```bash
# Installer les dépendances
npm install

# Lancer le projet en mode développement
npm run dev
```

## Concepts clés à retenir

1. **Props** : Permettent de passer des données à un composant pour le personnaliser
2. **State** : Gère les données dynamiques dans un composant avec `useState`
3. **Input contrôlé** : L'input est synchronisé avec le state React
4. **Composant réutilisable** : Un seul composant utilisable dans différents contextes

---

## Technologies utilisées

- React + Vite
- Tailwind CSS
