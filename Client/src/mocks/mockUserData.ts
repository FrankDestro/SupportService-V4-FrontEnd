export interface Usuario {
    id: number;
    avatar: string;
    department: string;
    name: string;
    email: string;
    status: string;
    role: string;
    createdBy: string;
    bloqueio: string;
  }
  
  export const usuarios: Usuario[] = [
    {
      id: 1,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      department: "TI",
      name: "João Silva",
      email: "joao.silva@example.com",
      status: "Ativo",
      role: "Admin",
      createdBy: "Maria Souza",
      bloqueio: "Não",
    },
    {
      id: 2,
      avatar: "https://media.istockphoto.com/id/1682296067/pt/foto/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=2048x2048&w=is&k=20&c=f4WyxZGMa30MoLzBoDFFZeRxBnM7TBFx3Jp4bYw9xIc=",
      department: "RH",
      name: "Fernanda Lima",
      email: "fernanda.lima@example.com",
      status: "Inativo",
      role: "Usuário",
      createdBy: "Pedro Alves",
      bloqueio: "Sim",
    },
    {
      id: 3,
      avatar: "https://media.istockphoto.com/id/1682296067/pt/foto/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=2048x2048&w=is&k=20&c=f4WyxZGMa30MoLzBoDFFZeRxBnM7TBFx3Jp4bYw9xIc=",
      department: "Financeiro",
      name: "Lucas Pereira",
      email: "lucas.pereira@example.com",
      status: "Ativo",
      role: "Admin",
      createdBy: "Ana Costa",
      bloqueio: "Não",
    },
    {
      id: 4,
      avatar: "https://media.istockphoto.com/id/1682296067/pt/foto/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=2048x2048&w=is&k=20&c=f4WyxZGMa30MoLzBoDFFZeRxBnM7TBFx3Jp4bYw9xIc=",
      department: "Marketing",
      name: "Juliana Santos",
      email: "juliana.santos@example.com",
      status: "Inativo",
      role: "Usuário",
      createdBy: "Roberto Mendes",
      bloqueio: "Não",
    },
    {
      id: 5,
      avatar: "https://media.istockphoto.com/id/1682296067/pt/foto/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=2048x2048&w=is&k=20&c=f4WyxZGMa30MoLzBoDFFZeRxBnM7TBFx3Jp4bYw9xIc=",
      department: "Vendas",
      name: "Ricardo Gomes",
      email: "ricardo.gomes@example.com",
      status: "Inativo",
      role: "Usuário",
      createdBy: "Laura Ferreira",
      bloqueio: "Sim",
    },
  ];
  