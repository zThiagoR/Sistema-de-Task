# Sistema de tarefas 

Iniciando novo projeto prático de API para aprender a usar o TypeORM e PostgreSQL.

### Tecnologias usados durante no projeto:
 - TypeScript
 - [TypeORM](https://github.com/typeorm/typeorm)
 - DBeaver (Ferramenta de administrar o banco de dados) 
 - Insomnia (Ferramenta Client API REST)

### Como rodar o projeto
* Clone ou baixe o projeto
* Instale as dependências com `npm i` ou `yarn install`
* Inicie o projeto em modo de desenvolvimento com `npm run start` ou `yarn start`
* Criar um arquivo `ormconfig.json` com as seguintes configurações:
```
{
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": "SEU_USUÁRIO",
   "password": "SUA_SENHA",
   "database": "NOME_DA_DATABASE",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
```

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Utilizando TypeORM de forma correta;
- [x] Criar o CRUD (Create, Find, Update, Find);
- [x] Terminar de escrever o README completo;

