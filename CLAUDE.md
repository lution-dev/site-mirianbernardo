# Contexto do projeto (para o Claude Code)

Site de portfólio da Mírian Bernardo, estrategista de marca e social media (nicho futuro: saúde). Página única em `index.html`, sem framework nem build.

## Marca
- Posicionamento: "Ajudo pequenas empresas a saírem do 'não sei o que postar' para uma comunicação com direção, que se sustenta na rotina e gera resposta."
- Método: Clareza, Criação, Rotina, Resultado.
- Voz: acolhedora, estratégica, objetiva. Português do Brasil.
- Cores: #EFF1EB (fundo), #29221B (tinta), #8C6E51 (caramelo, só textos grandes e decoração), #C0A46F (dourado, destaque em fundo escuro).
- Fontes: Bricolage Grotesque (títulos, 700/800) e Figtree (texto).
- Monograma MB e logotipo em `assets/`.

## Regras de texto
- Sem travessões e sem frases de efeito acima dos títulos de seção (a Mírian não quer cara de IA).
- Não inventar números nem depoimentos. Métricas reais hoje: Globalthings foi de 270 para 5.564 seguidores. A Duda Store é case em andamento, sem resultados ainda.
- Todos os CTAs abrem o WhatsApp com mensagem pronta e contextual.

## Pontos de atenção
- A seção "O método" usa rolagem por posição (não IntersectionObserver): manter assim.
- No celular, "Onde trava" é um acordeão (o card abre dentro da frase).
- Testado de 320px a 1920px, sem rolagem lateral. Respeitar `prefers-reduced-motion`.
- Pendências: autorização da Duda Store e da Globalthings; plano de conteúdo de 4 semanas; trocar prévia da Duda por posts reais.
