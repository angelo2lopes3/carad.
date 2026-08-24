/*
  MODELO do arquivo de configuração do Firebase.

  Este arquivo é só um exemplo e É SEGURO deixá-lo no GitHub.
  O arquivo real (firebase-config.js) NÃO deve ser commitado —
  ele é gerado automaticamente no deploy pelo GitHub Actions,
  usando os "Secrets" cadastrados nas configurações do repositório.

  Se você quiser rodar o site na sua máquina (localmente), copie
  este arquivo para "firebase-config.js" e preencha com os dados
  do seu projeto Firebase (Console Firebase > Configurações do
  projeto > Seus apps > SDK setup and configuration).

  IMPORTANTE (leia antes de se preocupar com a apiKey):
  A apiKey de um projeto Firebase NÃO é uma senha e não precisa
  ficar em segredo — ela só identifica o projeto para o Google.
  Quem realmente protege os dados são:
    1) As regras do Firestore (arquivo firestore.rules)
    2) A autenticação (Firebase Auth) exigida para ações de admin
  Mesmo assim, tiramos a chave do HTML e passamos a gerá-la via
  variáveis de ambiente/Secrets para: (a) facilitar trocar a chave
  sem editar código, (b) impedir que ferramentas automatizadas de
  scraping associem facilmente o repositório público ao projeto,
  e (c) seguir a boa prática de nunca hardcodar configuração.
*/
window.__FIREBASE_CONFIG__ = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.firebasestorage.app",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};
