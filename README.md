# Publicando um site na vercel (https://api-dog-dusky.vercel.app):

Iniciamos o processo de publicação do site resolvendo todos os erros no nosso projeto Next, depois armazenamos nosso código em um repositório no github.
Depois de realizar as etapas anteriores entramos na vercel e importamos nosso projeto do github para iniciar o deploy do nosso projeto, e depois de terminado nosso site está agora no ar funcionando sem problemas.

# Utilizando a ferramenta github Pages (https://rhuu4n.github.io/):

Para publicar um site utilizando esta ferramenta, devemos utilizar um projeto que utiliza html puro sem React ou outras ferramentas do Node.js.
E caso esteja utilizando React ou Next, você deve seguir os seguintes passos para converter seu arquivo para HTML.

[^1]: devemos adicionar as seguintes linas no arquivo next.config.mjs

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

[^2]: depois utilizamos