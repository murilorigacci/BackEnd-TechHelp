import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

  async function main() {
    await prisma.chamados.createMany({
      data: [
     
      // SEED Isabella Cabrera
     

      { descricao: 'Falha grave no acesso ao banco de dados', status: 'aberto', prioridade: 'alta', criadoPorId: 1, responsavelId: 3 },
      { descricao: 'Sistema de faturamento fora do ar', status: 'em_andamento', prioridade: 'alta', criadoPorId: 5, responsavelId: 1 },
      { descricao: 'Perda de dados de cliente no CRM', status: 'aberto', prioridade: 'alta', criadoPorId: 2, responsavelId: 4 },
      { descricao: 'Vazamento de informacoes sensiveis', status: 'em_andamento', prioridade: 'alta', criadoPorId: 3, responsavelId: 2 },
      { descricao: 'Bloqueio total de conta de usuario chave', status: 'aberto', prioridade: 'alta', criadoPorId: 4, responsavelId: 5 },
      { descricao: 'Firewall bloqueando trafego essencial', status: 'em_andamento', prioridade: 'alta', criadoPorId: 1, responsavelId: 2 },
      { descricao: 'Erro na folha de pagamento de emergencia', status: 'aberto', prioridade: 'alta', criadoPorId: 5, responsavelId: 3 },
      { descricao: 'Servidor web principal inacessivel', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 1 },
      { descricao: 'Phishing reportado por varios colaboradores', status: 'aberto', prioridade: 'alta', criadoPorId: 3, responsavelId: 4 },
      { descricao: 'Ambiente de testes indisponivel para QA', status: 'em_andamento', prioridade: 'alta', criadoPorId: 4, responsavelId: 3 },

      { descricao: 'Troca de bateria de notebook corporativo', status: 'aberto', prioridade: 'media', criadoPorId: 1, responsavelId: 4 },
      { descricao: 'Monitor com pixel morto ou defeito', status: 'em_andamento', prioridade: 'media', criadoPorId: 5, responsavelId: 2 },
      { descricao: 'Headset novo para call center', status: 'aberto', prioridade: 'media', criadoPorId: 2, responsavelId: 5 },
      { descricao: 'Manutencao preventiva em PC antigo', status: 'em_andamento', prioridade: 'media', criadoPorId: 3, responsavelId: 1 },
      { descricao: 'Problemas com webcam durante reuniao', status: 'concluido', prioridade: 'media', criadoPorId: 4, responsavelId: 2 },
      { descricao: 'Configuracao de impressora de rede em novo andar', status: 'aberto', prioridade: 'media', criadoPorId: 1, responsavelId: 5 },
      { descricao: 'Solicitacao de adaptador USB-C', status: 'em_andamento', prioridade: 'media', criadoPorId: 5, responsavelId: 4 },
      { descricao: 'Substituicao de cabo de rede danificado', status: 'concluido', prioridade: 'media', criadoPorId: 2, responsavelId: 3 },
      { descricao: 'Limpeza e otimizacao de maquina lenta', status: 'aberto', prioridade: 'media', criadoPorId: 3, responsavelId: 5 },
      { descricao: 'Instalacao de mouse pad ergonomico', status: 'em_andamento', prioridade: 'media', criadoPorId: 4, responsavelId: 1 },

      { descricao: 'Permissao para instalar Chrome Extensions', status: 'aberto', prioridade: 'baixa', criadoPorId: 1, responsavelId: 2 },
      { descricao: 'Solicitacao de acesso a curso online', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 5, responsavelId: 4 },
      { descricao: 'Mudanca de grupo de seguranca no AD', status: 'concluido', prioridade: 'baixa', criadoPorId: 2, responsavelId: 1 },
      { descricao: 'Criacao de conta para estagiario futura', status: 'aberto', prioridade: 'baixa', criadoPorId: 3, responsavelId: 5 },
      { descricao: 'Revogacao de acesso de ex-colaborador', status: 'concluido', prioridade: 'baixa', criadoPorId: 4, responsavelId: 3 },
      { descricao: 'Criacao de e-mail generico para setor', status: 'aberto', prioridade: 'baixa', criadoPorId: 1, responsavelId: 4 },
      { descricao: 'Ajuste no limite de armazenamento em nuvem', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 5, responsavelId: 2 },
      { descricao: 'Acesso a documentacao interna desatualizada', status: 'aberto', prioridade: 'baixa', criadoPorId: 2, responsavelId: 3 },
      { descricao: 'Revisao de permissoes de pastas compartilhadas', status: 'concluido', prioridade: 'baixa', criadoPorId: 3, responsavelId: 1 },
      { descricao: 'Cadastro de numero de telefone em ramal', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 4, responsavelId: 5 },

      { descricao: 'Relatorio de bugs no novo modulo do app', status: 'aberto', prioridade: 'alta', criadoPorId: 1, responsavelId: 5 },
      { descricao: 'Dificuldade de conexao Wi-Fi no 3 andar', status: 'em_andamento', prioridade: 'media', criadoPorId: 5, responsavelId: 3 },
      { descricao: 'Configuracao de MFA', status: 'concluido', prioridade: 'media', criadoPorId: 2, responsavelId: 4 },
      { descricao: 'Erro na geracao de nota fiscal eletronica', status: 'aberto', prioridade: 'alta', criadoPorId: 3, responsavelId: 1 },
      { descricao: 'Solicitacao de aumento de memoria RAM', status: 'em_andamento', prioridade: 'media', criadoPorId: 4, responsavelId: 2 },

      { descricao: 'Problema na sincronizacao do calendario', status: 'concluido', prioridade: 'media', criadoPorId: 1, responsavelId: 3 },
      { descricao: 'Software 3D travando', status: 'aberto', prioridade: 'alta', criadoPorId: 5, responsavelId: 4 },
      { descricao: 'Implementacao de novo padrao de nomenclatura', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 2, responsavelId: 5 },
      { descricao: 'Licenca de software expirada', status: 'aberto', prioridade: 'media', criadoPorId: 3, responsavelId: 2 },
      { descricao: 'Treinamento de equipe em nova ferramenta', status: 'concluido', prioridade: 'baixa', criadoPorId: 4, responsavelId: 1 },

      { descricao: 'Patch de seguranca critico', status: 'em_andamento', prioridade: 'alta', criadoPorId: 1, responsavelId: 3 },
      { descricao: 'Lentidao no sistema de vendas', status: 'aberto', prioridade: 'alta', criadoPorId: 5, responsavelId: 2 },
      { descricao: 'Redefinicao de senha legado', status: 'concluido', prioridade: 'media', criadoPorId: 2, responsavelId: 4 },
      { descricao: 'VPN para viagem internacional', status: 'em_andamento', prioridade: 'media', criadoPorId: 3, responsavelId: 5 },
      { descricao: 'Criacao de subdominio', status: 'aberto', prioridade: 'baixa', criadoPorId: 4, responsavelId: 1 },
      { descricao: 'Analise de logs', status: 'em_andamento', prioridade: 'alta', criadoPorId: 1, responsavelId: 4 },
      { descricao: 'Atualizacao de BIOS', status: 'concluido', prioridade: 'media', criadoPorId: 5, responsavelId: 3 },

      { descricao: 'Bug integracao entre sistemas X e Y', status: 'aberto', prioridade: 'alta', criadoPorId: 2, responsavelId: 1 },
      { descricao: 'Descarte de equipamento antigo', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 3, responsavelId: 2 },
      { descricao: 'Problemas de audio VOIP', status: 'concluido', prioridade: 'media', criadoPorId: 4, responsavelId: 5 },
      { descricao: 'Falha na autenticacao do sistema legado', status: 'em_andamento', prioridade: 'alta', criadoPorId: 5, responsavelId: 1 },

      { descricao: 'Nova funcionalidade no ERP', status: 'aberto', prioridade: 'baixa', criadoPorId: 2, responsavelId: 4 },
      { descricao: 'Erro de calculo em planilha macro', status: 'concluido', prioridade: 'media', criadoPorId: 3, responsavelId: 5 },
      { descricao: 'Instalacao de plugin especifico', status: 'aberto', prioridade: 'baixa', criadoPorId: 4, responsavelId: 2 },
      { descricao: 'Sistema de projetos lento', status: 'em_andamento', prioridade: 'alta', criadoPorId: 1, responsavelId: 3 },

      { descricao: 'Migracao de dados entre plataformas', status: 'aberto', prioridade: 'media', criadoPorId: 5, responsavelId: 4 },
      { descricao: 'Assinatura digital PDF', status: 'concluido', prioridade: 'baixa', criadoPorId: 2, responsavelId: 1 },
      { descricao: 'Incompatibilidade com Windows 11', status: 'em_andamento', prioridade: 'media', criadoPorId: 3, responsavelId: 5 },
      { descricao: 'Erro ao gerar token API', status: 'aberto', prioridade: 'alta', criadoPorId: 4, responsavelId: 3 },
      { descricao: 'Desinstalacao de software obsoleto', status: 'concluido', prioridade: 'baixa', criadoPorId: 1, responsavelId: 2 },

      { descricao: 'Telefone VOIP sem sinal', status: 'aberto', prioridade: 'media', criadoPorId: 5, responsavelId: 2 },
      { descricao: 'Manutencao do nobreak', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 4 },
      { descricao: 'Configuracao de DHCP', status: 'concluido', prioridade: 'media', criadoPorId: 3, responsavelId: 1 },
      { descricao: 'Queda de energia no datacenter', status: 'aberto', prioridade: 'alta', criadoPorId: 4, responsavelId: 5 },
      { descricao: 'Link de internet redundante', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 1, responsavelId: 4 },

      { descricao: 'Otimizacao de rotas de rede', status: 'aberto', prioridade: 'media', criadoPorId: 5, responsavelId: 3 },
      { descricao: 'Falha no RDP', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 1 },
      { descricao: 'Renovacao de servico de Cloud', status: 'concluido', prioridade: 'baixa', criadoPorId: 3, responsavelId: 4 },
      { descricao: 'Sistema de monitoramento offline', status: 'aberto', prioridade: 'alta', criadoPorId: 4, responsavelId: 2 },
      { descricao: 'Ajuste de banda para filial', status: 'em_andamento', prioridade: 'media', criadoPorId: 1, responsavelId: 5 },

      { descricao: 'Computador infectado por ransomware', status: 'aberto', prioridade: 'alta', criadoPorId: 5, responsavelId: 3 },
      { descricao: 'Erro no calculo de comissao', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 5 },
      { descricao: 'Revisao de politica de seguranca', status: 'aberto', prioridade: 'media', criadoPorId: 3, responsavelId: 4 },
      { descricao: 'Novo token de seguranca fisico', status: 'concluido', prioridade: 'baixa', criadoPorId: 4, responsavelId: 1 },

      { descricao: 'Camera CFTV com problema', status: 'em_andamento', prioridade: 'media', criadoPorId: 1, responsavelId: 2 },
      { descricao: 'Spam excessivo na caixa de entrada', status: 'aberto', prioridade: 'media', criadoPorId: 5, responsavelId: 4 },
      { descricao: 'Servidor de testes virtual', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 3 },
      { descricao: 'Treinamento no novo ERP', status: 'concluido', prioridade: 'baixa', criadoPorId: 3, responsavelId: 1 },
      { descricao: 'Revisao de licencas vencidas', status: 'aberto', prioridade: 'media', criadoPorId: 4, responsavelId: 5 },
      { descricao: 'Atualizacao de firmware de switches', status: 'em_andamento', prioridade: 'alta', criadoPorId: 1, responsavelId: 3 },

      // SEED Ana Ramos
      
      { descricao: 'Computador nao liga', status: 'aberto', prioridade: 'alta', criadoPorId: 1, responsavelId: 2 },
      { descricao: 'Nao consigo acessar o Wi-Fi da empresa', status: 'aberto', prioridade: 'alta', criadoPorId: 3, responsavelId: 4 },
      { descricao: 'Impressora da area de vendas esta offline', status: 'em_andamento', prioridade: 'media', criadoPorId: 5, responsavelId: 2 },
      { descricao: 'Monitor secundario nao reconhecido', status: 'aberto', prioridade: 'media', criadoPorId: 6, responsavelId: 4 },
      { descricao: 'Instalacao do software DesignPro', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 7, responsavelId: 8 },
      { descricao: 'Mouse sem fio parou de funcionar', status: 'aberto', prioridade: 'baixa', criadoPorId: 9, responsavelId: 10 },
      { descricao: 'Esqueci minha senha do sistema RH', status: 'aberto', prioridade: 'alta', criadoPorId: 11, responsavelId: 8 },
      { descricao: 'Conta bloqueada apos tentativas de login', status: 'aberto', prioridade: 'alta', criadoPorId: 12, responsavelId: 10 },
      { descricao: 'Acesso a pasta Projeto Alfa', status: 'concluido', prioridade: 'baixa', criadoPorId: 13, responsavelId: 2 },
      { descricao: 'Email suspeito (phishing)', status: 'aberto', prioridade: 'alta', criadoPorId: 14, responsavelId: 4 },

      { descricao: 'Erro ao salvar documento no CRM', status: 'aberto', prioridade: 'media', criadoPorId: 15, responsavelId: 8 },
      { descricao: 'Folha de pagamento lenta', status: 'em_andamento', prioridade: 'alta', criadoPorId: 16, responsavelId: 10 },
      { descricao: 'Botao de exportar relatorio desapareceu', status: 'aberto', prioridade: 'media', criadoPorId: 17, responsavelId: 2 },
      { descricao: 'Sugestao de melhoria: filtro por data', status: 'concluido', prioridade: 'baixa', criadoPorId: 18, responsavelId: 4 },
      { descricao: 'Lampada da sala 3 queimada', status: 'aberto', prioridade: 'baixa', criadoPorId: 19, responsavelId: 8 },
      { descricao: 'Vazamento na pia do banheiro', status: 'em_andamento', prioridade: 'alta', criadoPorId: 20, responsavelId: 10 },
      { descricao: 'Ar condicionado nao gela', status: 'aberto', prioridade: 'media', criadoPorId: 21, responsavelId: 2 },
      { descricao: 'Fatura duplicada cliente C005', status: 'aberto', prioridade: 'alta', criadoPorId: 22, responsavelId: 4 },
      { descricao: 'Reenvio de nota fiscal', status: 'concluido', prioridade: 'baixa', criadoPorId: 23, responsavelId: 8 },
      { descricao: 'Duvida sobre funcionalidade onboarding', status: 'em_andamento', prioridade: 'media', criadoPorId: 24, responsavelId: 10 }
      ],
      skipDuplicates: true,
    });

    console.log('Seed unificado concluído!');
  }

    await prisma.usuario.createMany({
    data: [
      { id: 1, nome: "Ana Silva", email: "ana@empresa.com", senha: "123456", tipo: "admin" },
      { id: 2, nome: "Bruno Costa", email: "bruno@empresa.com", senha: "123456", tipo: "suporte" },
      { id: 3, nome: "Carla Souza", email: "carla@empresa.com", senha: "123456", tipo: "suporte" },
      { id: 4, nome: "Daniel Lima", email: "daniel@empresa.com", senha: "123456", tipo: "gestor" },
      { id: 5, nome: "Eduardo Rocha", email: "eduardo@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 6, nome: "Fernanda Alves", email: "fernanda@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 7, nome: "Gabriel Pinto", email: "gabriel@empresa.com", senha: "123456", tipo: "suporte" },
      { id: 8, nome: "Helena Ramos", email: "helena@empresa.com", senha: "123456", tipo: "suporte" },
      { id: 9, nome: "Igor Carvalho", email: "igor@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 10, nome: "Julia Martins", email: "julia@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 11, nome: "Kleber Santos", email: "kleber@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 12, nome: "Larissa Nogueira", email: "larissa@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 13, nome: "Marcos Paulo", email: "marcos@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 14, nome: "Natália Farias", email: "natalia@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 15, nome: "Otávio Mendes", email: "otavio@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 16, nome: "Paula Godoi", email: "paula@empresa.com", senha: "123456", tipo: "gestor" },
      { id: 17, nome: "Ricardo Moraes", email: "ricardo@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 18, nome: "Sandra Moreira", email: "sandra@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 19, nome: "Thiago Cunha", email: "thiago@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 20, nome: "Ursula Prado", email: "ursula@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 21, nome: "Vitor Ferreira", email: "vitor@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 22, nome: "Willian Barros", email: "willian@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 23, nome: "Xavier Gomes", email: "xavier@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 24, nome: "Yasmin Duarte", email: "yasmin@empresa.com", senha: "123456", tipo: "colaborador" },
      { id: 25, nome: "Zuleica Andrade", email: "zuleica@empresa.com", senha: "123456", tipo: "colaborador" },
    ],
    skipDuplicates: true,
  });

  console.log("Usuários criados!");


  main()
    .catch((e) => {
      console.error('Erro no seed:',e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });