# Publicando um site na vercel (https://api-dog-dusky.vercel.app):

Iniciamos o processo de publicação do site resolvendo todos os erros no nosso projeto Next, depois armazenamos nosso código em um repositório no github.
Depois de realizar as etapas anteriores entramos na vercel e importamos nosso projeto do github para iniciar o deploy do nosso projeto, e depois de terminado nosso site está agora no ar funcionando sem problemas.

# Utilizando a ferramenta github Pages (https://rhuu4n.github.io/):

Para publicar um site utilizando esta ferramenta, devemos utilizar um projeto que utiliza html puro sem React ou outras ferramentas do Node.js.
E caso esteja utilizando React ou Next, você deve seguir os seguintes passos para converter seu arquivo para HTML.

1. Devemos adicionar as seguintes linhas no arquivo "next.config.mjs"

```
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
```

2. Depois utilizamos o comando "npx next build", para construir um arquivo pronto para a publicação.

3. Por fim pegamos os arquivos armazenados na pasta "out" do seu projeto e importamos para um repositorio no github com o seguinte nome "*seu nick do github*.github.io"

4. Pronto você já está utilizando o github pages!!