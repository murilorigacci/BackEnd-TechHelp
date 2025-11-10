
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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