API em Node Js para agendamento de serviços.

Essa é versão 3 de implementação.

- Versão 1 pode ser encontrada [aqui](https://github.com/marlondenisck/nodejs-nunjucks-agendamento-servicos)

- A Versão 2 pode ser encontrada na branch desde mesmo repositório ```git checkout v2```


## DB's com docker

- `docker run --name gostack_redis -p 6379:6379 -d -t redis:alpine`;
- `docker run --name gostack_mongo -p 27017:27017 -d -t mongo`;
- `docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres`;


-- caso precise verificar se a porta esta em uso
```
lsof -i :5432
```

-- Verificar se o db esta executando
```
docker ps
```

-- Para subir novamente
```
docker start id ou name
```
## ENV
-- crie uma copia do env.example para .env e preencha corretamente com os dados dos bancos criados na etapa anterior.

## Migrations
Exemplo de como criar migrations
ps: Não é necessário executar
```
yarn typeorm migration:create -n CreateAppointments
```

# Iniciando o servidor

- Com docker, os bancos instalados e o  arquivo .env configurado rode no terminal
- Execute ```yarn typeorm migration:run``` para rodar as migrations
- Execute ```yarn dev:server``` para rodar o servidor

