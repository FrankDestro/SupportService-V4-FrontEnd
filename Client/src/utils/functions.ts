/* eslint-disable @typescript-eslint/no-explicit-any */
import { differenceInDays, differenceInHours, differenceInMinutes, parseISO } from "date-fns";
import { UserDTO } from "../models/RequesterDTO";


export const getStatusUserBadgeStyle = (status: string): React.CSSProperties => {
  switch (status.toLowerCase()) {
    case "inactive": // Use "não" em vez de "nao" se o seu dado tiver acentos
      return {
        backgroundColor: "#FF0000", // Shade of red for blocked status
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "active": // Use "sim" em vez de "default"
      return {
        backgroundColor: "#8DD600", // Shade of green for unblocked status
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    default:
      return {
        backgroundColor: "#8DD600", // Fallback to green
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
  }
};

export const getBlockedStatusBadgeStyle = (
  statusBlock: boolean
): React.CSSProperties => {
  switch (statusBlock) {
    case true: // Use "não" em vez de "nao" se o seu dado tiver acentos
      return {
        backgroundColor: "#FF0000", // Shade of red for blocked status
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case false: // Use "sim" em vez de "default"
      return {
        backgroundColor: "#8DD600", // Shade of green for unblocked status
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    default:
      return {
        backgroundColor: "#8DD600", // Fallback to green
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
  }
};

export const getStatusTicketBadgeStyle = (
  statusTicket: string
): React.CSSProperties => {
  switch (statusTicket.toUpperCase()) {
    case "OPEN":
      return {
        backgroundColor: "#007BFF", // Azul para status de "Aberto"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "IN_PROGRESS":
      return {
        backgroundColor: "#FFC107", // Amarelo para "Em Progresso"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "FROZEN":
      return {
        backgroundColor: "#6C757D", // Cinza para "Congelado"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "CANCELED":
      return {
        backgroundColor: "#DC3545", // Vermelho para "Cancelado"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "FINISHED":
      return {
        backgroundColor: "#28A745", // Verde para "Finalizado"
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    default:
      return {
        backgroundColor: "#8DD600", // Fallback padrão verde
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
  }
};


export const getStatusKnowErrorsBadgeStyle = (
  knowErrorStatus: string
): React.CSSProperties => {
  switch (knowErrorStatus.toUpperCase()) {
    case "OPEN":
      return {
        backgroundColor: "#FFC107", /* Amarelo */
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "UNDER_ANALYSIS":
      return {
        backgroundColor: "#17a2b8", /* Azul Claro */
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "DOCUMENTED":
      return {
        backgroundColor: "#6c757d", /* Cinza Claro */
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "SOLUTION_PENDING":
      return {
        backgroundColor: "#fd7e14",  /* Laranja Escuro */
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "RESOLVED":
      return {
        backgroundColor: " #28a745", /* Verde */  
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    default:
      return {
        backgroundColor: "#343a40", /* Cinza Escuro */
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
  }
};

export const getSeverityBadgeStyle = (
  severity: string
): React.CSSProperties => {
  switch (severity.toLowerCase()) {
    case "baixa":
      return {
        backgroundColor: "#8DD600", // Verde claro
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "média":
      return {
        backgroundColor: "#FFC107", // Amarelo
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "alta":
      return {
        backgroundColor: "#FF9800", // Laranja
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "urgente":
      return {
        backgroundColor: "#F44336", // Vermelho escuro
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    case "crítica":
      return {
        backgroundColor: "#9C27B0", // Roxo
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
    default:
      return {
        backgroundColor: "#E0E0E0", // Cinza padrão
        color: "#333",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
      };
  }
};


export function calculateRemainingTime(dueDate: string): string {
  // Converte a string de data fornecida para um objeto Date
  const dueDateObj = parseISO(dueDate);
  const currentDate = new Date();

  // Calcula a diferença de tempo em minutos
  const differenceMinutes = differenceInMinutes(dueDateObj, currentDate);
  const differenceHours = differenceInHours(dueDateObj, currentDate);
  const differenceDays = differenceInDays(dueDateObj, currentDate);

  // Calcula os minutos restantes após calcular as horas
  const remainingMinutes = Math.abs(differenceMinutes - (differenceHours * 60));
  
  // Formata a diferença em uma string no formato "x dias, x horas e x minutos"
  const daysString = differenceDays > 0 ? `${differenceDays} dias, ` : '';
  const hoursString = `${Math.abs(differenceHours)} horas `;
  const minutesString = `${remainingMinutes} minutos`;

  const sign = differenceMinutes < 0 ? '-' : '';

  return `${sign}${daysString}${hoursString}${minutesString}`;
}


export const formatDate = (date: Date | string) => {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    return "Data inválida";
  }

  return parsedDate.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).replace(',', '');
};

export function toValuesTicket(inputs: any) {
  const data: any = {};

  for (const name in inputs) {
    if (name === "typeRequest" || name === "categoryTicket" || name === "sla") {
      data[name] = { id: parseInt(inputs[name], 10) }; 
    } else {
      data[name] = inputs[name];
    }
  }
  return data;
}


export const cleanDescription = (description: string) => {
  return description.replace(/<\/?p>/g, '');
};


export const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\\/?]).{8,}$/;
  return regex.test(password);
};

export const removeTags = (value: string) => {
  const plainText = value.replace(/<\/?[^>]+(>|$)/g, "");
  return plainText;
};


export function toUserDTO(formData: any): UserDTO {
  const data: any = {};

  // Transformando os campos para o formato esperado no UserDTO
  data.firstName = formData.firstName;
  data.lastName = formData.lastName;
  data.email = formData.email;
  data.contactNumber = formData.contactNumber;

  // Transformando o departamento e área solucionadora para objetos (caso sejam passados como IDs)
  if (formData.department) {
    data.department = { id: parseInt(formData.department, 10) };
  }
  if (formData.solvingArea) {
    data.solvingArea = { id: parseInt(formData.solvingArea, 10) };
  }

  // Transformando permissões (roles) em um array de objetos, caso existam
  if (formData.roles && Array.isArray(formData.roles)) {
    data.roles = formData.roles.map((roleId: string) => ({ id: parseInt(roleId, 10) }));
  } else {
    data.roles = [];
  }

  // Se a imagem de perfil foi adicionada, você pode incluir ela como base64 ou em um formato adequado
  if (formData.imgProfile && formData.imgProfile instanceof File) {
    // Aqui você pode tratar a imagem conforme necessário (ex: convertendo para base64)
    // Por enquanto, deixo como um exemplo de como você pode incluir a imagem
    data.imgProfile = formData.imgProfile;
  }

  return data;
}
