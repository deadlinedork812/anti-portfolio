# Git & Pull Request Workflow Rule

Whenever making any future changes, features, or fixes:
1. **Always create a new branch**: Never touch `main` directly.
   `git checkout -b feat/<name>` or `fix/<name>`
2. **Commit changes on the branch**:
   `git add ... && git commit -m "..."`
3. **Push ONLY the feature branch to GitHub**:
   `git push -u origin <branch-name>`
4. **DO NOT merge into `main` locally**:
   Leave `main` untouched. Do not run `git merge` on `main` and do not push `main`.
5. **Create a Pull Request on GitHub**:
   Use `gh pr create --title "..." --body "..."` so a real Pull Request is opened on GitHub.
   Provide the PR link to the user so they can review the diff and click **"Merge pull request"** on GitHub directly to trigger deployment.
