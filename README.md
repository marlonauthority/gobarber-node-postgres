API em Node Js para agendamento de serviços.

Essa é versão 3 de implementação.

- Versão 1 pode ser encontrada aqui [Link-v1](https://github.com/marlondenisck/nodejs-nunjucks-agendamento-servicos)

- A Versão 2 pode ser encontrada na branch desde mesmo repositório ```git checkout v2```


-- Rodar o DB com docker
```
docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
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


