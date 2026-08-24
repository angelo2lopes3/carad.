name: Deploy do site (com config protegida)

# Roda automaticamente a cada push na branch principal,
# ou manualmente pela aba "Actions" do GitHub.
on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # ------------------------------------------------------------------
  # 1) Gera o firebase-config.js a partir dos Secrets do repositório
  #    (Settings > Secrets and variables > Actions) e publica o site
  #    no GitHub Pages. O arquivo com a config real NUNCA fica salvo
  #    no histórico do git — ele só existe durante este job.
  # ------------------------------------------------------------------
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Baixar código do repositório
        uses: actions/checkout@v4

      - name: Gerar firebase-config.js a partir dos Secrets
        run: |
          cat > firebase-config.js << EOF
          window.__FIREBASE_CONFIG__ = {
            apiKey: "${{ secrets.FIREBASE_API_KEY }}",
            authDomain: "${{ secrets.FIREBASE_AUTH_DOMAIN }}",
            projectId: "${{ secrets.FIREBASE_PROJECT_ID }}",
            storageBucket: "${{ secrets.FIREBASE_STORAGE_BUCKET }}",
            messagingSenderId: "${{ secrets.FIREBASE_MESSAGING_SENDER_ID }}",
            appId: "${{ secrets.FIREBASE_APP_ID }}"
          };
          EOF

      - name: Preparar Pages
        uses: actions/configure-pages@v5

      - name: Empacotar site
        uses: actions/upload-pages-artifact@v3
        with:
          path: .

      - name: Publicar no GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

  # ------------------------------------------------------------------
  # 2) (Opcional, recomendado) Publica firestore.rules direto no seu
  #    projeto Firebase sempre que o arquivo mudar, usando um token
  #    de CI do Firebase guardado em Secrets. Se você preferir, pode
  #    publicar as regras manualmente pelo Console do Firebase e
  #    apagar este job.
  # ------------------------------------------------------------------
  deploy-firestore-rules:
    runs-on: ubuntu-latest
    needs: build-and-deploy
    steps:
      - name: Baixar código do repositório
        uses: actions/checkout@v4

      - name: Instalar Firebase CLI
        run: npm install -g firebase-tools

      - name: Publicar firestore.rules
        run: firebase deploy --only firestore:rules --project "${{ secrets.FIREBASE_PROJECT_ID }}" --token "${{ secrets.FIREBASE_CI_TOKEN }}"
