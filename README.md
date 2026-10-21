# Site da Mírian Bernardo

Site de uma página só (HTML, CSS e JavaScript puros, sem build). Estratégia de marca e social media.

## Estrutura
- `index.html`: o site inteiro (estilos e scripts dentro dele)
- `assets/`: fotos, logos e imagens dos cases
- `favicon.svg`: ícone da aba (monograma MB)
- `vercel.json`: cache das imagens

## Como subir
1. Crie um repositório no GitHub e envie esta pasta inteira.
2. Na Vercel: Add New > Project > escolha o repositório. Framework: **Other**. Não precisa de build command nem de output directory. Deploy.
3. Depois que tiver o domínio, abra `index.html` e troque `content="assets/og.jpg"` por o endereço completo, por exemplo `https://seudominio.com.br/assets/og.jpg`. Sem isso, a prévia do link no WhatsApp e no Instagram pode não mostrar a imagem.

## O que editar com frequência
- **Cases:** no final do `index.html`, na lista `CASES` (título, texto, imagens, métrica).
- **Mensagens do WhatsApp:** os links `https://wa.me/5511917373372?text=...`. O número está em vários pontos: use buscar e substituir.
- **Textos das dores:** lista `PAINS`, logo acima de `CASES`.
- **Cores e fontes:** variáveis no começo do `<style>` (`--bg`, `--ink`, `--caramel`, `--gold`). Fontes: Bricolage Grotesque e Figtree (Google Fonts).

## Antes de divulgar
- Confirmar com a Duda Store e a Globalthings a autorização para mostrar nome e peças.
- Conferir o número de WhatsApp.
- Trocar as imagens da Duda Store pelas artes publicadas, quando existirem, e adicionar os resultados medidos.
