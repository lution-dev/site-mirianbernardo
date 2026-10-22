/* Medição simples: eventos de clique no WhatsApp e no Instagram (Vercel Web Analytics).
   Funciona depois que o Web Analytics for ligado no painel da Vercel; sem isso, não faz nada. */
window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href]');
  if (!a) return;
  var href = a.getAttribute('href') || '', name = null;
  if (href.indexOf('https://wa.me') === 0) name = 'whatsapp_click';
  else if (href.indexOf('instagram.com') > -1) name = 'instagram_click';
  else if (href.indexOf('/cases/') === 0) name = 'case_open';
  if (!name) return;
  var s = a.closest('section, header, footer, article, aside');
  try { window.va('event', { name: name, data: { onde: (s && (s.id || s.className.split(' ')[0] || s.tagName.toLowerCase())) || 'pagina', destino: href.indexOf('/cases/') === 0 ? href : undefined } }); } catch (err) {}
});
