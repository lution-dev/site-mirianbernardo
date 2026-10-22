# Contexto do projeto (para o Claude Code)

Site de portfólio da Mírian Bernardo, estrategista de marca e social media (nicho futuro: saúde). Página única em `index.html` mais duas páginas de case em `cases/`, sem framework nem build. O CSS fica em `assets/site.css` (compartilhado). Domínio: https://mirianbernardo.com.br (Vercel, deploy automático a cada push no `main`).

## Marca
- Posicionamento: "Ajudo pequenas empresas a saírem do 'não sei o que postar' para uma comunicação com direção, que se sustenta na rotina e gera resposta."
- Subtítulo da hero (site): "Estratégia de conteúdo para pequenas empresas: um plano simples, que cabe na sua rotina e faz sua marca ser vista e lembrada." (a frase de posicionamento acima fica para o guia de marca e a seção Sobre).
- Método: Clareza, Criação, Rotina, Resultado.
- Voz: acolhedora, estratégica, objetiva. Português do Brasil.
- Cores: #EFF1EB (fundo), #29221B (tinta), #8C6E51 (caramelo, só textos grandes e decoração), #C0A46F (dourado, destaque em fundo escuro).
- Fontes: Bricolage Grotesque (títulos, 700/800) e Figtree (texto).
- Monograma MB e logotipo em `assets/`. Imagens em WebP (exceto `og.jpg`, que precisa ser JPG para redes sociais).

## Regras de texto
- Tom profissional e seguro: nada que sugira que ela está começando ("estou construindo", "em breve", "prévia"). Falar de método, entrega e experiência real.
- Sem travessões e sem frases de efeito acima dos títulos de seção (a Mírian não quer cara de IA).
- Não inventar números nem depoimentos. Métrica real: Globalthings foi de 270 para 5.564 seguidores (20,6x). No site, mostrar só "audiência 20 vezes maior", sem os números absolutos (decisão da Mírian). A Duda Store é apresentada como portfólio (direção visual e plano de conteúdo), sem mencionar "em andamento", "prévia" ou resultados; não inventar números para ela.
- Todos os CTAs abrem o WhatsApp com mensagem pronta e contextual.

## Pontos de atenção
- A seção "O método" usa rolagem por posição (não IntersectionObserver): manter assim.
- No celular, "Onde trava" é um acordeão (o card abre dentro da frase).
- Testado de 320px a 1920px, sem rolagem lateral. Respeitar `prefers-reduced-motion`.
- Pendências: autorização da Duda Store e da Globalthings; plano de conteúdo de 4 semanas; trocar as artes da Duda por posts publicados quando existirem.

## SEO e GEO (não remover)
- `index.html` tem canonical, Open Graph/Twitter com URLs absolutas, JSON-LD (WebSite, Person, ProfessionalService, WebPage, FAQPage) e a seção "Perguntas frequentes" (`#faq`). O texto do FAQ no HTML e no JSON-LD deve ser sempre igual. Só escrever fatos reais.
- `cases/globalthings.html` e `cases/duda-store.html` são páginas estáticas (URLs limpas: /cases/globalthings). Os cards da home são links HTML fixos para essas páginas (não há modal nem array CASES). O texto completo dos cases vive só nas páginas; ao criar um case novo, adicionar o card em `#caseGrid`, a página em `cases/`, e atualizar sitemap e llms.txt. As dores ("Onde trava") também são HTML fixo; o JS só liga os cliques. Nessas páginas usar caminhos absolutos (`/assets/...`).
- `robots.txt` libera buscadores e rastreadores de IA. `sitemap.xml` e `llms.txt` listam as páginas: atualizar ao criar página nova.
- `vercel.json`: cache imutável só para imagens em `assets/`; `site.css` não é imutável (mudou, atualiza).
- Pendências de SEO: verificar o site no Google Search Console e no Bing Webmaster (colar o código de verificação em uma meta tag no head); redirect do www está 307 e deve ser 308 (painel da Vercel); declarar área de atuação nos dados estruturados quando a Mírian informar (online ou local).
- Medição: `assets/track.js` registra cliques (whatsapp_click, instagram_click, case_open) no Vercel Web Analytics e `/_vercel/insights/script.js` carrega a medição. Só funciona depois de ligar Web Analytics no painel da Vercel (aba Analytics do projeto). Eventos personalizados podem exigir plano pago.
- `404.html` é a página de erro (Vercel usa automaticamente).
- Pendências que dependem da Mírian: autorizações, depoimento, e-mail de contato (alternativa ao WhatsApp), área de atuação, contas no Search Console e Bing, links externos.
- `ig.html` (URL /ig) é a página "Comece por aqui" para a bio do Instagram: mobile first, noindex, fora do sitemap. Links curtos em `vercel.json`: `/cases-ig` (vai aos cases com UTM) e `/whatsapp` (abre o WhatsApp com mensagem do Instagram). Bio escolhida pela Mírian: "Estratégia de conteúdo para pequenas empresas / Do roteiro à arte final, com direção e métricas / Estrategista e fotógrafa / ↓ Comece por aqui". Perfil: @mirianbernardo.br (já aplicado no site).
- Na /ig os links levam UTM (utm_source=instagram, utm_medium=bio, utm_campaign=ig); o card do Globalthings diz "Audiência 20x maior" (270 para 5.564 = 20,6x, fato real), sem números absolutos de propósito.
- Craft (espaço "My Space", área Modelos): "Briefing | Roteiro de reunião" (uso interno, a Mírian conduz a reunião e preenche) e "Proposta comercial | Modelo" (vai ao cliente, valores e condições em branco, pacotes = as 3 formas de trabalhar do site + personalizado). Estilo: fundo #EFF1EB (escuro #1F1914), texto #29221B, destaque #8C6E51/#C0A46F, fonte sans do sistema (o Craft não aceita Bricolage/Figtree). Capas em `assets/craft/` (JPG e WebP), inseridas como bloco de imagem no topo de cada modelo (o Craft hospeda a imagem; a capa de página por URL externa não carregou). Proposta com blocos coloridos (tons de areia e dourado) e pacotes com checkbox "Escolher este pacote". O MCP não duplica modelos: a Mírian duplica no app a cada cliente.
