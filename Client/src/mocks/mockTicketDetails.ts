// src/data/ticketData.js
const ticketData = {
  id: 1,
  subject: "Problema no sistema",
  description: "Erro ao tentar acessar o sistema de pagamento. O usuário reportou que ao tentar realizar a transação, uma mensagem de erro apareceu, indicando que o sistema estava fora do ar. O suporte técnico foi acionado para investigar o problema, e uma atualização será feita assim que tivermos mais informações sobre a situação.",
  registrationDate: "2024-10-25T11:30:00Z",
  dueDate: "2024-11-01T11:30:00Z",
  statusTicket: "IN_PROGRESS",
  completionDate: "2024-11-01T11:30:00Z",
  onSLA: false, // Campo adicionado
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
    solvingAreaDTO: null,
  },
  requester: {
    id: 2,
    firstName: "Maria",
    lastName: "Souza",
    email: "maria.solicitante@empresa.com",
    imgProfile: "https://media.gettyimages.com/id/155472787/pt/foto/em-estrada.jpg?s=2048x2048&w=gi&k=20&c=A0Qe72BTxLHxOoZ5Q7Yp4C-Df0tnt2Y6cSTMe8jDcWc=",
    contactNumber: "11988887777",
    department: {
      id: 1,
      description: "Recursos Humanos",
    },
  },
  technician: {
    id: 3,
    firstName: "Carlos",
    lastName: "Ferreira",
    email: "carlos.tecnico@empresa.com",
    imgProfile: "img3.png",
    contactNumber: "11977776666",
    department: {
      id: 2,
      description: "Tecnologia da Informação",
    },
  },
  resolver: {
    id: 4,
    firstName: "Ana",
    lastName: "Pereira",
    email: "ana.tecnico@empresa.com",
    imgProfile: "img4.png",
    contactNumber: "11966665555",
    department: {
      id: 6,
      description: "Suporte ao Cliente",
    },
  },

  ticketHistories: [
    {
      id: 1,
      description: "Anotação sobre o progresso do ticket",
      annotationPublic: true,
      registrationDate: "2024-10-25T11:30:00Z",
      visibleToRequester: true,
      systemGenerated: false,
      noteType: "COMMENT",
      user: {
        id: 1,
        firstName: "João",
        lastName: "Silva",
        email: "joao.solicitante@empresa.com",
        imgProfile:
          "https://media.gettyimages.com/id/1317804578/pt/foto/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=2048x2048&w=gi&k=20&c=gMzCcmqTO9gSAV6j-jbWbGH0aRCAle6lW61oG2rYg7A=",
        contactNumber: "11999998888",
        department: {
          id: 1,
          description: "Recursos Humanos",
        },
      },
    },
    {
      id: 3,
      description: "Foi realizado um teste e o problema foi identificado.",
      annotationPublic: true,
      registrationDate: "2024-10-27T14:45:00Z",
      visibleToRequester: true,
      systemGenerated: false,
      noteType: "COMMENT",
      user: {
        id: 3,
        firstName: "Carlos",
        lastName: "Pereira",
        email: "carlos.pereira@empresa.com",
        imgProfile:
          "https://media.gettyimages.com/id/1317804578/pt/foto/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=2048x2048&w=gi&k=20&c=gMzCcmqTO9gSAV6j-jbWbGH0aRCAle6lW61oG2rYg7A=",
        contactNumber: "11999996666",
        department: {
          id: 3,
          description: "Suporte Técnico",
        },
      },
    },
    {
      id: 4,
      description:
        "A correção foi aplicada e o ticket está aguardando validação.",
      annotationPublic: true,
      registrationDate: "2024-10-28T10:30:00Z",
      visibleToRequester: true,
      systemGenerated: false,
      noteType: "COMMENT",
      user: {
        id: 4,
        firstName: "Ana",
        lastName: "Lima",
        email: "ana.lima@empresa.com",
        imgProfile:
          "https://media.gettyimages.com/id/1317804578/pt/foto/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=2048x2048&w=gi&k=20&c=gMzCcmqTO9gSAV6j-jbWbGH0aRCAle6lW61oG2rYg7A=",
        contactNumber: "11999995555",
        department: {
          id: 4,
          description: "Qualidade",
        },
      },
    },
    {
      id: 5,
      description: "O ticket foi fechado após a validação do cliente.",
      annotationPublic: false,
      registrationDate: "2024-10-29T16:00:00Z",
      visibleToRequester: true,
      systemGenerated: false,
      noteType: "COMMENT",
      user: {
        id: 5,
        firstName: "Lucas",
        lastName: "Costa",
        email: "lucas.costa@empresa.com",
        imgProfile:
          "https://media.gettyimages.com/id/1317804578/pt/foto/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=2048x2048&w=gi&k=20&c=gMzCcmqTO9gSAV6j-jbWbGH0aRCAle6lW61oG2rYg7A=",
        contactNumber: "11999994444",
        department: {
          id: 5,
          description: "Atendimento ao Cliente",
        },
      },
    },
  ],

  attachments: [
    {
      id: 1,
      url: "https://example.com/file.pdf",
      registrationDate: "2024-11-02T20:19:46.221159Z",
      fileName: "file.pdf",
      type: "PDF",
      user: {
        id: 2,
        firstName: "Maria",
        lastName: "Souza",
        email: "maria.solicitante@empresa.com",
        imgProfile: "img2.png",
        contactNumber: "11988887777",
        department: {
          id: 1,
          description: "Recursos Humanos",
        },
      },
    },
  ],
};

export default ticketData;
