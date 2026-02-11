---
description: How to deploy the portfolio to GitHub Pages for Bhargavireddy16
---
# Deploying to GitHub Pages for Bhargavireddy16

I have configured your project to use the repository: `protfiolo` (as provided).

## ⚠️ Authentication Issue Detected

The deployment failed because your terminal is authenticated as GitHub user **Afthab33**, but the repository belongs to **Bhargavireddy16**.

### How to Fix

**Option 1: Add Afthab33 as a Collaborator (Recommended)**
1. Log in to GitHub as **Bhargavireddy16**.
2. Go to [https://github.com/Bhargavireddy16/protfiolo/settings/access](https://github.com/Bhargavireddy16/protfiolo/settings/access).
3. Click "Add people" and enter `Afthab33`.
4. Accept the invitation from `Afthab33`'s email/notifications.

**Option 2: Sign in as Bhargavireddy16 locally**
You may need to clear your git credentials or use a Personal Access Token (PAT) for Bhargavireddy16.

### Once Authentication is Fixed

Run these commands to deploy:

1. **Push your code**:
   ```bash
   git push -u origin main
   ```

2. **Deploy via `gh-pages`**:
   ```bash
   npm run deploy
   ```

Your site will be live at:
[https://Bhargavireddy16.github.io/protfiolo/](https://Bhargavireddy16.github.io/protfiolo/)
