
import { PrismaClient } from '@prisma/client';

import { faker } from '@faker-js/faker/locale/pt_BR'; 

const prisma = new PrismaClient();

const NUM_USUARIOS = 30;
const NUM_CHAMADOS = 80;

/**
 * Gera um objeto de usuário fictício.
 */
function createFakeUser(index) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const name = `${firstName} ${lastName}`;
  // Garante unicidade no email adicionando o índice
  const email = faker.internet.email({ firstName, lastName, provider: 'suporte.com.br', allowSpecialCharacters: false, suffix: index.toString() });
  
  // Define o tipo 'admin' para os 5 primeiros e 'padrao' para os demais
  const type = index < 5 ? 'admin' : 'padrao';

  return {
    nome: name,
    email: email.toLowerCase(),
    // IMPORTANTE: Em produção, NUNCA armazene senhas sem HASH!
    senha: 'senha123', 
    tipo: type,
  };
}

/**
 * Gera um objeto de chamado fictício.
 */
function createFakeChamado(usuarioIds) {
  // Escolhe um criador aleatório (obrigatório)
  const criadorId = faker.helpers.arrayElement(usuarioIds);
  
  // Escolhe um responsável aleatório (pode ser null)
  const responsavelId = faker.helpers.arrayElement([...usuarioIds, null]); 
  
  // Define status e prioridade aleatórios
  const statusOptions = ['Aberto', 'Em Atendimento', 'Concluído', 'Cancelado'];
  const prioridadeOptions = ['Baixa', 'Média', 'Alta', 'Urgente'];
  
  const status = faker.helpers.arrayElement(statusOptions);
  const prioridade = faker.helpers.arrayElement(prioridadeOptions);
  
  const descricao = faker.lorem.sentences({ min: 1, max: 3 });

  // Gera uma data de criação nos últimos 90 dias
  const criadoEm = faker.date.recent({ days: 90 });
  
  // Se o chamado estiver 'Concluído', a data de atualização é posterior à criação.
  let atualizadoEm = criadoEm;
  if (status === 'Concluído' || status === 'Em Atendimento') {
    atualizadoEm = faker.date.between({ from: criadoEm, to: new Date() });
  }

  // Objeto base para o Chamado
  const chamadoData = {
    descricao: `Chamado: ${descricao.substring(0, 50)}...`,
    status: status,
    prioridade: prioridade,
    criadoEm: criadoEm,
    atualizadoEm: atualizadoEm,
    // O criadoPor é OBRIGATÓRIO (não é um campo opcional na sua lógica)
    criadoPor: { connect: { id: criadorId } },
  };

  // Adiciona o responsável APENAS se responsavelId for um ID válido
  if (responsavelId !== null) {
    chamadoData.responsavel = { connect: { id: responsavelId } };
  }
  
  return chamadoData;
}

// -----------------------------------------------------

async function main() {
  console.log('Iniciando o Seed...');

  // 1. Limpa os dados existentes (opcional, mas recomendado para um seed limpo)
  await prisma.chamados.deleteMany();
  await prisma.usuario.deleteMany();
  console.log('Tabelas limpas.');

  // 2. Cria 30 Usuários
  const userData = Array.from({ length: NUM_USUARIOS }, (_, i) => createFakeUser(i + 1));
  
  const createdUsers = await prisma.$transaction(
    userData.map(data => prisma.usuario.create({ data }))
  );
  
  const usuarioIds = createdUsers.map(user => user.id);
  console.log(`Foram criados ${createdUsers.length} usuários.`);

  // 3. Cria 80 Chamados
  const chamadosData = Array.from({ length: NUM_CHAMADOS }, () => createFakeChamado(usuarioIds));
  
  // Cria os chamados um por um devido à complexidade da relação 'connect'.
  const createdChamados = [];
  for (const data of chamadosData) {
      const chamado = await prisma.chamados.create({ data });
      createdChamados.push(chamado);
  }
  
  console.log(`Foram criados ${createdChamados.length} chamados.`);
}

main()
  .catch(async (e) => {
    // Isso imprimirá o erro detalhado que o Prisma está capturando
    console.error('ERRO DETALHADO DURANTE O SEEDING:', e); 
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Seed concluído e conexão desconectada.');
  });


  // ANA JULIA //

    async function main() {
    await prisma.chamados.createMany({
      data: [
        { descricao: 'Computador não liga', status: 'aberto', prioridade: 'alta', criadoPorId: 1, responsavelId: 2 },
        {descricao: 'Não consigo acessar o Wi-Fi da empresa', status: "aberto", prioridade: "alta", criadoPorId: 3, responsavelId: 4},
        { descricao: "Impressora da área de Vendas está offline", status: "em_andamento", prioridade: "média", criadoPorId: 5, responsavelId: 2 },
        { descricao: "Monitor secundário não está sendo reconhecido", status: "aberto", prioridade: "média", criadoPorId: 6, responsavelId: 4 },
        { descricao: "Solicitação de instalação do software DesignPro", status: "pendente", prioridade: "baixa", criadoPorId: 7, responsavelId: 8 },
        { descricao: "Mouse sem fio parou de funcionar", status: "aberto", prioridade: "baixa", criadoPorId: 9, responsavelId: 10 },
        { descricao: "Esqueci minha senha do sistema interno (RH)", status: "aberto", prioridade: "alta", criadoPorId: 11, responsavelId: 8 },
        { descricao: "Minha conta foi bloqueada após 3 tentativas de login", status: "aberto", prioridade: "alta", criadoPorId: 12, responsavelId: 10 },
        { descricao: "Solicitação de acesso à pasta compartilhada do Projeto Alfa", status: "resolvido", prioridade: "baixa", criadoPorId: 13, responsavelId: 2 },
        { descricao: "Relato de e-mail suspeito (tentativa de phishing)", status: "aberto", prioridade: "alta", criadoPorId: 14, responsavelId: 4 },
        { descricao: "Erro ao tentar salvar um documento no CRM da Vendas", status: "aberto", prioridade: "média", criadoPorId: 15, responsavelId: 8 },
        { descricao: "Sistema de Folha de Pagamento está extremamente lento", status: "em_andamento", prioridade: "alta", criadoPorId: 16, responsavelId: 10 },
        { descricao: "Botão de 'Exportar Relatório' desapareceu da tela do ERP", status: "aberto", prioridade: "média", criadoPorId: 17, responsavelId: 2 },
        { descricao: "Sugestão de melhoria: adicionar filtro por data na busca", status: "fechado", prioridade: "baixa", criadoPorId: 18, responsavelId: 4 },
        { descricao: "Lâmpada do escritório da sala 3 está queimada (Facilities)", status: "aberto", prioridade: "baixa", criadoPorId: 19, responsavelId: 8 },
        { descricao: "Vazamento na pia do banheiro masculino (Facilities)", status: "em_andamento", prioridade: "alta", criadoPorId: 20, responsavelId: 10 },
        { descricao: "Ar condicionado da sala de reuniões não está gelando", status: "aberto", prioridade: "média", criadoPorId: 21, responsavelId: 2 },
        { descricao: "Fatura do cliente #C005 veio duplicada no sistema", status: "aberto", prioridade: "alta", criadoPorId: 22, responsavelId: 4 },
        { descricao: "Solicitação de reenvio da Nota Fiscal de Serviço #876", status: "resolvido", prioridade: "baixa", criadoPorId: 23, responsavelId: 8 },
        { descricao: "Dúvida sobre o funcionamento da funcionalidade 'Checklist de Onboarding'", status: "pendente", prioridade: "média", criadoPorId: 24, responsavelId: 10 },


      ],
      skipDuplicates: true,
    });

  console.log('Seed de chamados concluído!');
  }

  main()
    .catch((e) => {
      console.error('Erro no seed:', e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });