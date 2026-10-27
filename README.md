# The Discovery of Buddhahood — Link & Holding Pages

## What this update changes

- `doug-r-thompson/index.html`: Adds a real companion-resource link to the book card in the `#books` section. Also switches the existing inline CSS to the shared `../style.css` and preserves the existing Buddhist theme.
- `doug-r-thompson/discovery-of-buddhahood/index.html`: Creates the book holding page.
- `doug-r-thompson/discovery-of-buddhahood/resources/index.html`: Creates the resource holding page.

These files use the existing root-level `style.css`; do not delete or replace it.

## Install through VS Code

1. Open your local clone of `https://github.com/timberzen/authors.git` in VS Code.
2. Copy the `doug-r-thompson` folder from this ZIP into the **root** of your local repository, merging folders and allowing the included `index.html` to replace the existing author page.
3. Check the changes (`git diff` or the VS Code Source Control panel). If you have made more recent edits to the author homepage, copy just the new resource-card link into your latest version instead of overwriting it.
4. Commit and push to `main`:

```powershell
git add doug-r-thompson/index.html doug-r-thompson/discovery-of-buddhahood/
git commit -m "Link Discovery of Buddhahood resources and create holding pages"
git push origin main
```

5. Once GitHub Pages finishes deploying, open:
   - https://timberzen.github.io/authors/doug-r-thompson/#books
   - https://timberzen.github.io/authors/doug-r-thompson/discovery-of-buddhahood/resources/

## Repository permissions

GitHub refused the connected application's attempt to write (`403 Resource not accessible by integration`), so this ZIP has **not** been committed or deployed for you.
