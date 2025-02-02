const ticketDataMock = {
  content: [
    {
      id: 1,
      subject: "Problema no sistema",
      description: "Erro ao tentar acessar o sistema de pagamento",
      registrationDate: "2024-10-25T11:30:00Z",
      dueDate: "2024-11-01T11:30:00Z",
      statusTicket: "FINISHED",
      completionDate: "2024-11-01T11:30:00Z",
      typeRequest: {
        id: 1,
        name: "Solicitação",
      },
      sla: {
        id: 1,
        severity: "Baixa",
        responseTime: 48,
      },
      solvingArea: {
        id: 1,
        name: "Redes",
      },
      categoryTicket: {
        id: 1,
        name: "Hardware",
      },
      requester: {
        firstName: "Maria",
        lastName: "Souza",
        email: "maria.solicitante@empresa.com",
      },
      technician: {
        firstName: "Carlos",
        lastName: "Ferreira",
        email: "carlos.tecnico@empresa.com",
      },
      resolver: {
        firstName: "Ana",
        lastName: "Pereira",
        email: "ana.tecnico@empresa.com",
      },
      onSLA: true, // Campo adicionado
    },
    {
      id: 2,
      subject: "Atualização de software",
      description: "Necessidade de atualização no sistema de gestão",
      registrationDate: "2024-10-26T08:15:00Z",
      dueDate: "2024-11-02T08:15:00Z",
      statusTicket: "IN_PROGRESS",
      completionDate: null,
      typeRequest: {
        id: 2,
        name: "Atualização",
      },
      sla: {
        id: 2,
        severity: "Média",
        responseTime: 24,
      },
      solvingArea: {
        id: 2,
        name: "TI",
      },
      categoryTicket: {
        id: 2,
        name: "Software",
      },
      requester: {
        firstName: "João",
        lastName: "Silva",
        email: "joao.solicitante@empresa.com",
      },
      technician: {
        firstName: "Beatriz",
        lastName: "Mendes",
        email: "beatriz.tecnico@empresa.com",
      },
      resolver: {
        firstName: "Fernando",
        lastName: "Alves",
        email: "fernando.tecnico@empresa.com",
      },
      onSLA: true, // Campo adicionado
    },
    {
      id: 3,
      subject: "Requisição de equipamento",
      description: "Solicitação de novo monitor para estação de trabalho",
      registrationDate: "2024-10-27T09:45:00Z",
      dueDate: "2024-11-03T09:45:00Z",
      statusTicket: "PENDING",
      completionDate: null,
      typeRequest: {
        id: 3,
        name: "Aquisição",
      },
      sla: {
        id: 3,
        severity: "Alta",
        responseTime: 12,
      },
      solvingArea: {
        id: 3,
        name: "Logística",
      },
      categoryTicket: {
        id: 3,
        name: "Equipamento",
      },
      requester: {
        firstName: "Pedro",
        lastName: "Almeida",
        email: "pedro.solicitante@empresa.com",
      },
      technician: {
        firstName: "Luciana",
        lastName: "Santos",
        email: "luciana.tecnico@empresa.com",
      },
      resolver: {
        firstName: "Rafael",
        lastName: "Oliveira",
        email: "rafael.tecnico@empresa.com",
      },
      onSLA: true, // Campo adicionado
    },
    {
      id: 4,
      subject: "Novo pedido de acesso",
      description: "Solicitação de acesso ao sistema de gestão de projetos",
      registrationDate: "2024-10-28T10:00:00Z",
      dueDate: "2024-11-05T10:00:00Z",
      statusTicket: "OPEN",
      completionDate: null,
      typeRequest: {
        id: 4,
        name: "Acesso",
      },
      sla: {
        id: 4,
        severity: "Baixa",
        responseTime: 48,
      },
      solvingArea: {
        id: 4,
        name: "Segurança da Informação",
      },
      categoryTicket: {
        id: 4,
        name: "Acesso",
      },
      requester: {
        firstName: "Fernanda",
        lastName: "Lima",
        email: "fernanda.solicitante@empresa.com",
      },
      technician: {
        firstName: "Roberto",
        lastName: "Costa",
        email: "roberto.tecnico@empresa.com",
      },
      resolver: {
        firstName: "Sofia",
        lastName: "Martins",
        email: "sofia.tecnico@empresa.com",
      },
      onSLA: true, // Campo adicionado
    },
    {
      id: 5,
      subject: "Problema com impressora",
      description: "Impressora não está respondendo aos comandos",
      registrationDate: "2024-10-29T11:00:00Z",
      dueDate: "2024-11-06T11:00:00Z",
      statusTicket: "FROZEN",
      completionDate: null,
      typeRequest: {
        id: 5,
        name: "Manutenção",
      },
      sla: {
        id: 5,
        severity: "Alta",
        responseTime: 12,
      },
      solvingArea: {
        id: 5,
        name: "Suporte Técnico",
      },
      categoryTicket: {
        id: 5,
        name: "Manutenção",
      },
      requester: {
        firstName: "Carlos",
        lastName: "Silveira",
        email: "carlos.solicitante@empresa.com",
      },
      technician: {
        firstName: "Juliana",
        lastName: "Nogueira",
        email: "juliana.tecnico@empresa.com",
      },
      resolver: {
        firstName: "Paulo",
        lastName: "Santos",
        email: "paulo.tecnico@empresa.com",
      },
      onSLA: false, // Campo adicionado
    },
    {
      id: 6,
      subject: "Cancelamento de serviço",
      description: "Solicitação de cancelamento de serviço de internet",
      registrationDate: "2024-10-29T12:00:00Z",
      dueDate: "2024-11-06T12:00:00Z",
      statusTicket: "CANCELED",
      completionDate: null,
      typeRequest: {
        id: 6,
        name: "Cancelamento",
      },
      sla: {
        id: 6,
        severity: "Média",
        responseTime: 24,
      },
      solvingArea: {
        id: 6,
        name: "Suporte ao Cliente",
      },
      categoryTicket: {
        id: 6,
        name: "Serviço",
      },
      requester: {
        firstName: "Lucas",
        lastName: "Pereira",
        email: "lucas.solicitante@empresa.com",
      },
      technician: {
        firstName: "Mariana",
        lastName: "Azevedo",
        email: "mariana.tecnico@empresa.com",
      },
      resolver: {
        firstName: "Henrique",
        lastName: "Dutra",
        email: "henrique.tecnico@empresa.com",
      },
      onSLA: false, // Campo adicionado
    },
  ],
};

export default ticketDataMock;
