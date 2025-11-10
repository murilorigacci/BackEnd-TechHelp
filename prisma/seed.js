import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

  async function main() {
    await prisma.chamados.createMany({
      data: [
  { descricao: 'Falha grave no acesso ao banco de dados', status: 'aberto', prioridade: 'altíssima', criadoPorId: 1, responsavelId: 3 },
  { descricao: 'Sistema de faturamento fora do ar', status: 'em_andamento', prioridade: 'altíssima', criadoPorId: 5, responsavelId: 1 },
  { descricao: 'Perda de dados de cliente no CRM', status: 'aberto', prioridade: 'alta', criadoPorId: 2, responsavelId: 4 },
  { descricao: 'Vazamento de informações sensíveis', status: 'em_andamento', prioridade: 'altíssima', criadoPorId: 3, responsavelId: 2 },
  { descricao: 'Bloqueio total de conta de usuário chave', status: 'aberto', prioridade: 'alta', criadoPorId: 4, responsavelId: 5 },
  { descricao: 'Firewall bloqueando tráfego essencial', status: 'em_andamento', prioridade: 'altíssima', criadoPorId: 1, responsavelId: 2 },
  { descricao: 'Erro na folha de pagamento de emergência', status: 'aberto', prioridade: 'altíssima', criadoPorId: 5, responsavelId: 3 },
  { descricao: 'Servidor web principal inacessível', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 1 },
  { descricao: 'Phishing reportado por vários colaboradores', status: 'aberto', prioridade: 'alta', criadoPorId: 3, responsavelId: 4 },
  { descricao: 'Ambiente de testes indisponível para QA', status: 'em_andamento', prioridade: 'alta', criadoPorId: 4, responsavelId: 3 },
  { descricao: 'Troca de bateria de notebook corporativo', status: 'aberto', prioridade: 'média', criadoPorId: 1, responsavelId: 4 },
  { descricao: 'Monitor com pixel morto ou defeito', status: 'em_andamento', prioridade: 'média', criadoPorId: 5, responsavelId: 2 },
  { descricao: 'Headset novo para call center', status: 'aberto', prioridade: 'média', criadoPorId: 2, responsavelId: 5 },
  { descricao: 'Manutenção preventiva em PC antigo', status: 'em_andamento', prioridade: 'média', criadoPorId: 3, responsavelId: 1 },
  { descricao: 'Problemas com webcam durante reunião', status: 'concluído', prioridade: 'média', criadoPorId: 4, responsavelId: 2 },
  { descricao: 'Configuração de impressora de rede em novo andar', status: 'aberto', prioridade: 'média', criadoPorId: 1, responsavelId: 5 },
  { descricao: 'Solicitação de adaptador USB-C', status: 'em_andamento', prioridade: 'média', criadoPorId: 5, responsavelId: 4 },
  { descricao: 'Substituição de cabo de rede danificado', status: 'concluído', prioridade: 'média', criadoPorId: 2, responsavelId: 3 },
  { descricao: 'Limpeza e otimização de máquina lenta', status: 'aberto', prioridade: 'média', criadoPorId: 3, responsavelId: 5 },
  { descricao: 'Instalação de mouse pad ergonômico', status: 'em_andamento', prioridade: 'média', criadoPorId: 4, responsavelId: 1 },
  { descricao: 'Permissão para instalar Chrome Extensions', status: 'aberto', prioridade: 'baixa', criadoPorId: 1, responsavelId: 2 },
  { descricao: 'Solicitação de acesso a curso online', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 5, responsavelId: 4 },
  { descricao: 'Mudança de grupo de segurança no AD', status: 'concluído', prioridade: 'baixa', criadoPorId: 2, responsavelId: 1 },
  { descricao: 'Criação de conta para estagiário (futura)', status: 'aberto', prioridade: 'baixa', criadoPorId: 3, responsavelId: 5 },
  { descricao: 'Revogação de acesso de ex-colaborador', status: 'concluído', prioridade: 'baixa', criadoPorId: 4, responsavelId: 3 },
  { descricao: 'Criação de e-mail genérico para setor', status: 'aberto', prioridade: 'baixa', criadoPorId: 1, responsavelId: 4 },
  { descricao: 'Ajuste no limite de armazenamento em nuvem', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 5, responsavelId: 2 },
  { descricao: 'Acesso à documentação interna desatualizada', status: 'aberto', prioridade: 'baixa', criadoPorId: 2, responsavelId: 3 },
  { descricao: 'Revisão de permissões de pastas compartilhadas', status: 'concluído', prioridade: 'baixa', criadoPorId: 3, responsavelId: 1 },
  { descricao: 'Cadastro de número de telefone em ramal', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 4, responsavelId: 5 },
  { descricao: 'Relatório de bugs no novo módulo do app', status: 'aberto', prioridade: 'alta', criadoPorId: 1, responsavelId: 5 },
  { descricao: 'Dificuldade de conexão Wi-Fi no 3º andar', status: 'em_andamento', prioridade: 'média', criadoPorId: 5, responsavelId: 3 },
  { descricao: 'Configuração de multi-fator de autenticação (MFA)', status: 'concluído', prioridade: 'média', criadoPorId: 2, responsavelId: 4 },
  { descricao: 'Erro na geração de nota fiscal eletrônica (NF-e)', status: 'aberto', prioridade: 'alta', criadoPorId: 3, responsavelId: 1 },
  { descricao: 'Solicitação de aumento de memória RAM (upgrade)', status: 'em_andamento', prioridade: 'média', criadoPorId: 4, responsavelId: 2 },
  { descricao: 'Problema na sincronização do calendário corporativo', status: 'concluído', prioridade: 'média', criadoPorId: 1, responsavelId: 3 },
  { descricao: 'Software de modelagem 3D travando constantemente', status: 'aberto', prioridade: 'alta', criadoPorId: 5, responsavelId: 4 },
  { descricao: 'Implementação de novo padrão de nomenclatura', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 2, responsavelId: 5 },
  { descricao: 'Verificação de licença de software expirada', status: 'aberto', prioridade: 'média', criadoPorId: 3, responsavelId: 2 },
  { descricao: 'Treinamento de equipe em nova ferramenta de gestão', status: 'concluído', prioridade: 'baixa', criadoPorId: 4, responsavelId: 1 },
  { descricao: 'Implantação de patch de segurança crítico', status: 'em_andamento', prioridade: 'altíssima', criadoPorId: 1, responsavelId: 3 },
  { descricao: 'Relatar lentidão no sistema de vendas', status: 'aberto', prioridade: 'alta', criadoPorId: 5, responsavelId: 2 },
  { descricao: 'Redefinição de senha de aplicativo legado', status: 'concluído', prioridade: 'média', criadoPorId: 2, responsavelId: 4 },
  { descricao: 'Configuração de VPN para viagem internacional', status: 'em_andamento', prioridade: 'média', criadoPorId: 3, responsavelId: 5 },
  { descricao: 'Criação de subdomínio para novo projeto', status: 'aberto', prioridade: 'baixa', criadoPorId: 4, responsavelId: 1 },
  { descricao: 'Análise de logs para erro desconhecido', status: 'em_andamento', prioridade: 'alta', criadoPorId: 1, responsavelId: 4 },
  { descricao: 'Atualização de BIOS de estação de trabalho', status: 'concluído', prioridade: 'média', criadoPorId: 5, responsavelId: 3 },
  { descricao: 'Bug na integração entre sistemas X e Y', status: 'aberto', prioridade: 'alta', criadoPorId: 2, responsavelId: 1 },
  { descricao: 'Solicitação de descarte de equipamento antigo', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 3, responsavelId: 2 },
  { descricao: 'Problemas de áudio em chamada VOIP', status: 'concluído', prioridade: 'média', criadoPorId: 4, responsavelId: 5 },
  { descricao: 'Falha na autenticação do sistema legado', status: 'em_andamento', prioridade: 'alta', criadoPorId: 5, responsavelId: 1 },
  { descricao: 'Solicitação de nova funcionalidade no ERP', status: 'aberto', prioridade: 'baixa', criadoPorId: 2, responsavelId: 4 },
  { descricao: 'Erro de cálculo em planilha macro', status: 'concluído', prioridade: 'média', criadoPorId: 3, responsavelId: 5 },
  { descricao: 'Instalação de plugin específico para navegador', status: 'aberto', prioridade: 'baixa', criadoPorId: 4, responsavelId: 2 },
  { descricao: 'Sistema de gestão de projetos lento após atualização', status: 'em_andamento', prioridade: 'alta', criadoPorId: 1, responsavelId: 3 },
  { descricao: 'Necessidade de migração de dados entre plataformas', status: 'aberto', prioridade: 'média', criadoPorId: 5, responsavelId: 4 },
  { descricao: 'Configuração de assinatura digital em PDF', status: 'concluído', prioridade: 'baixa', criadoPorId: 2, responsavelId: 1 },
  { descricao: 'Incompatibilidade de software com Windows 11', status: 'em_andamento', prioridade: 'média', criadoPorId: 3, responsavelId: 5 },
  { descricao: 'Erro ao gerar token de API', status: 'aberto', prioridade: 'alta', criadoPorId: 4, responsavelId: 3 },
  { descricao: 'Solicitação de desinstalação de software obsoleto', status: 'concluído', prioridade: 'baixa', criadoPorId: 1, responsavelId: 2 },
  { descricao: 'Problema com telefone fixo (VOIP) sem sinal', status: 'aberto', prioridade: 'média', criadoPorId: 5, responsavelId: 2 },
  { descricao: 'Manutenção do nobreak da sala de servidores', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 4 },
  { descricao: 'Configuração de DHCP para nova sub-rede', status: 'concluído', prioridade: 'média', criadoPorId: 3, responsavelId: 1 },
  { descricao: 'Queda de energia elétrica no datacenter', status: 'aberto', prioridade: 'altíssima', criadoPorId: 4, responsavelId: 5 },
  { descricao: 'Solicitação de link de internet redundante', status: 'em_andamento', prioridade: 'baixa', criadoPorId: 1, responsavelId: 4 },
  { descricao: 'Otimização de rotas na rede interna', status: 'aberto', prioridade: 'média', criadoPorId: 5, responsavelId: 3 },
  { descricao: 'Falha no acesso remoto via RDP', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 1 },
  { descricao: 'Renovação de contrato de serviço de Cloud', status: 'concluído', prioridade: 'baixa', criadoPorId: 3, responsavelId: 4 },
  { descricao: 'Sistema de monitoramento de infraestrutura offline', status: 'aberto', prioridade: 'altíssima', criadoPorId: 4, responsavelId: 2 },
  { descricao: 'Ajuste de banda de internet para filial', status: 'em_andamento', prioridade: 'média', criadoPorId: 1, responsavelId: 5 },
  { descricao: 'Computador infectado por ransomware', status: 'aberto', prioridade: 'altíssima', criadoPorId: 5, responsavelId: 3 },
  { descricao: 'Erro no cálculo de comissão de vendas', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 5 },
  { descricao: 'Revisão de política de segurança de dados', status: 'aberto', prioridade: 'média', criadoPorId: 3, responsavelId: 4 },
  { descricao: 'Solicitação de novo token de segurança físico', status: 'concluído', prioridade: 'baixa', criadoPorId: 4, responsavelId: 1 },
  { descricao: 'Problemas com a câmera de segurança (CFTV)', status: 'em_andamento', prioridade: 'média', criadoPorId: 1, responsavelId: 2 },
  { descricao: 'Relatar Spam excessivo na caixa de entrada', status: 'aberto', prioridade: 'média', criadoPorId: 5, responsavelId: 4 },
  { descricao: 'Implantação de servidor de testes virtual', status: 'em_andamento', prioridade: 'alta', criadoPorId: 2, responsavelId: 3 },
  { descricao: 'Treinamento sobre uso correto do novo ERP', status: 'concluído', prioridade: 'baixa', criadoPorId: 3, responsavelId: 1 },
  { descricao: 'Revisão de licenças de software vencidas', status: 'aberto', prioridade: 'média', criadoPorId: 4, responsavelId: 5 },
  { descricao: 'Atualização de firmwares de switches de rede', status: 'em_andamento', prioridade: 'alta', criadoPorId: 1, responsavelId: 3 }
      ],
      skipDuplicates: true,
    });

    console.log('Seed de chamados concluído!');
  }

  main()
    .catch((e) => {
      console.error('Erro no seed:',e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });