/* =====================================================================
   Mix Nails Esmalteria — configuração
   Único arquivo que precisa ser editado para o site sair do modo de
   demonstração e entrar no ar de verdade.
   ===================================================================== */

window.TV = {

  /* ---- Negócio ---------------------------------------------------- */
  nome:       'Mix Nails Esmalteria',
  slogan:     'Enaltecemos a sua beleza',
  instagram:  'mixnails.esmalteria',

  // A CONFIRMAR: o perfil do Instagram não mostra WhatsApp sem login.
  // Vazio = os botões levam para o direct do Instagram.
  whatsapp:        '',
  whatsappVisivel: '',

  endereco: {
    linha1: 'Salvador Shopping, Piso G2',
    linha2: 'Salvador — BA',
    maps:   'https://www.google.com/maps/search/?api=1&query=Salvador+Shopping+Salvador+BA',
    busca:  'Salvador Shopping, Salvador - BA'
  },

  /* ---- Supabase ---------------------------------------------------
     Enquanto estes dois campos estiverem vazios, o site roda em MODO
     DEMONSTRAÇÃO: a agenda funciona de verdade na tela, mas os horários
     ficam guardados só no navegador de quem está olhando.

     Para ligar de verdade:
       1. supabase.com  ->  New project (região: South America / São Paulo)
       2. SQL Editor    ->  cole e rode db/schema.sql inteiro
       3. Settings > API -> copie "Project URL" e a chave "anon public"
       4. cole abaixo e suba pro GitHub

     A chave anon é pública por natureza — ela aparece no código do site.
     Quem protege os dados é o RLS + as funções do schema.sql, não ela.
  ------------------------------------------------------------------ */
  supabaseUrl: '',
  supabaseKey: '',

  /* ---- Regras da agenda (espelham o db/schema.sql) ----------------
     Mudou aqui? Mude no banco também — o banco é quem manda de verdade.
  ------------------------------------------------------------------ */
  regras: {
    passoMin:        30,   // grade de meia em meia hora
    antecedenciaMin: 30,   // não dá para marcar para daqui a 20 min
    janelaDias:      30,   // até 30 dias à frente
    cancelamentoH:   2     // cancela sozinho até 2h antes
  },

  /* ---- Expediente (0 = domingo) — conforme a bio do Instagram -------- */
  expediente: {
    0: { aberto: true, abre: '13:00', fecha: '21:00' },
    1: { aberto: true, abre: '09:00', fecha: '22:00' },
    2: { aberto: true, abre: '09:00', fecha: '22:00' },
    3: { aberto: true, abre: '09:00', fecha: '22:00' },
    4: { aberto: true, abre: '09:00', fecha: '22:00' },
    5: { aberto: true, abre: '09:00', fecha: '22:00' },
    6: { aberto: true, abre: '09:00', fecha: '22:00' }
  },

  /* ---- Dados usados no modo demonstração --------------------------
     A CONFIRMAR: nomes da equipe. Por enquanto uma agenda única da casa.
     Serviços da bio; preços sob consulta (preco_centavos 0) e duração estimada.
  ------------------------------------------------------------------ */
  barbeirosDemo: [
    { id:'equipe', slug:'equipe', nome:'Equipe Mix Nails', cargo:'Manicures e nail designers', foto:'fotos/logo.jpg', instagram:'mixnails.esmalteria' }
  ],

  servicosDemo: [
    { id:'pe-mao',       nome:'Pé e mão',                    descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:90,  categoria:'Pé e mão' },
    { id:'mao',          nome:'Mão',                         descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:45,  categoria:'Pé e mão' },
    { id:'pe',           nome:'Pé',                          descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:45,  categoria:'Pé e mão' },
    { id:'banho-gel',    nome:'Banho de gel',                descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:60,  categoria:'Gel' },
    { id:'alongamento',  nome:'Alongamento de unhas',        descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:150, categoria:'Alongamento' },
    { id:'manutencao',   nome:'Manutenção do alongamento',   descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:90,  categoria:'Alongamento' },
    { id:'spa-pes',      nome:'Spa dos pés',                 descricao:'', preco_centavos:0, a_partir_de:false, duracao_min:60,  categoria:'Spa' }
  ]
};

window.TV.modoDemo = !(window.TV.supabaseUrl && window.TV.supabaseKey);
