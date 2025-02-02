# Support Service - Frontend

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/FrankDestro/SupportService-v3.0-frontend?tab=MIT-1-ov-file)

## 📌 Sobre o Projeto

O **Support Service - Frontend** é uma aplicação web construída para interagir com o sistema de **gestão de chamados** e **suporte ao cliente** desenvolvido no backend. Este frontend facilita a interação do usuário com a plataforma, permitindo o gerenciamento de tickets, acompanhamento de SLA, e outros recursos de ITSM (gerenciamento de serviços de TI).

O objetivo principal do projeto é oferecer uma interface simples e intuitiva para os usuários finais, permitindo a criação, atualização e visualização de tickets de suporte.

## 🚀 Tecnologias Utilizadas

### 🔹 Frontend
- **React 18**
- **TypeScript**
- **Vite** (para bundling)
- **React Router** (para navegação entre páginas)
- **Axios** (para comunicação com a API backend)
- **Styled-components** (para estilização)
- **Bootstrap** (para componentes de interface)
- **ESLint / Prettier** (para linting e formatação)
- **Context API e useState** (para gerenciamento de estado)

### 🔹 Infraestrutura
- **Docker 24.0** (para conteinerização da aplicação frontend)
- **Podman Desktop** (para gerenciamento visual dos containers)
- **Fedora 41**
---

## 📂 Estrutura do Projeto
```js
supportService.v4
│   src
│   ├── assets
│   │   ├── bell.png
│   │   ├── calendario.png
│   │   ├── editar.png
│   │   ├── eye.png
│   │   ├── help.png
│   │   ├── kedb.png
│   │   ├── lock.png
│   │   ├── logo.svg
│   │   ├── logo2.gif
│   │   ├── logo3.gif
│   │   ├── logo4.png
│   │   ├── logout.png
│   │   ├── natalia.jpg
│   │   ├── react.svg
│   │   ├── recovery.png
│   │   └── settings.png
│   ├── components
│   │   ├── ActivityPanelSummaryTickets
│   │   │   ├── ActivityPanelSummaryTickets.css
│   │   │   └── ActivityPanelSummaryTickets.tsx
│   │   ├── Button
│   │   │   ├── button.css
│   │   │   └── Button.tsx
│   │   ├── Clock
│   │   │   ├── Clock.css
│   │   │   └── Clock.tsx
│   │   ├── Dashboard
│   │   │   ├── LineChartSupportByDay
│   │   │   │   └── LineChartSupportByDay.tsx
│   │   │   ├── PieChartByUrgency
│   │   │   │   └── PieChartByUrgency.tsx
│   │   │   ├── PieChartDonutByStatusTicket
│   │   │   │   └── PieChartDonutByStatusTicket.tsx
│   │   │   └── SlaIndicators
│   │   │       ├── SlaIndicators.css
│   │   │       └── SlaIndicators.tsx
│   │   ├── DialogInfo
│   │   │   ├── DialogInfo.css
│   │   │   └── DialogInfo.tsx
│   │   ├── Footer
│   │   │   ├── footer.css
│   │   │   └── footer.tsx
│   │   ├── Header
│   │   │   ├── header.css
│   │   │   └── header.tsx
│   │   ├── Header2
│   │   │   ├── header.css
│   │   │   └── index.tsx
│   │   ├── InputCustom
│   │   │   └── InputCustom.tsx
│   │   ├── KEDBSearch
│   │   │   ├── KEDBSearch.css
│   │   │   └── KEDBSearch.tsx
│   │   ├── ModalBootTest
│   │   │   ├── DialogUserCreateModal2.css
│   │   │   └── DialogUserCreateModal2.tsx
│   │   ├── ModalUserUpdate
│   │   │   ├── DialogUserUpdateModal..css
│   │   │   └── DialogUserUpdateModal.tsx
│   │   ├── NavbarLocation
│   │   │   ├── NavbarLocation.css
│   │   │   └── NavbarLocation.tsx
│   │   ├── NoData
│   │   │   └── NoData.tsx
│   │   ├── Pagination
│   │   │   ├── Pagination.css
│   │   │   └── Pagination.tsx
│   │   ├── SearchPanel
│   │   │   ├── SearchPanel.css
│   │   │   └── SearchPanel.tsx
│   │   ├── SearchTicket
│   │   │   ├── SearchTicket.css
│   │   │   └── SearchTicket.tsx
│   │   ├── SearchUser
│   │   │   ├── SearchUser.css
│   │   │   └── SearchUser.tsx
│   │   ├── SettingsSidebar
│   │   │   ├── SettingsSidebar.css
│   │   │   └── SettingsSidebar.tsx
│   │   ├── SideMenu
│   │   │   ├── SideMenu.css
│   │   │   └── SideMenu.tsx
│   │   ├── TableKnowError
│   │   │   ├── TableKnowError.css
│   │   │   └── TableKnowError.tsx
│   │   ├── TableTicket
│   │   │   ├── TableTicket.css
│   │   │   └── TableTicket.tsx
│   │   ├── TableUsers
│   │   │   ├── TableUsers.css
│   │   │   └── TableUsers.tsx
│   │   ├── TicketDetails
│   │   │   ├── TicketDetails.css
│   │   │   └── TicketDetails.tsx
│   │   ├── TicketFormCreate
│   │   │   ├── TicketFormCreate.css
│   │   │   └── TicketFormCreate.tsx
│   │   ├── TicketTabsContainer
│   │   │   ├── TicketTabsContainer.css
│   │   │   └── TicketTabsContainer.tsx
│   │   └── UserFormCreate
│   │       ├── UserFormCreate.css
│   │       └── UserFormCreate.tsx
│   ├── layout
│   │   ├── MainLayout.css
│   │   └── MainLayout.tsx
│   ├── mocks
│   │   ├── KnowErrosData.ts
│   │   ├── mockTicketData.ts
│   │   ├── mockTicketDetails.ts
│   │   └── mockUserData.ts
│   ├── models
│   │   ├── activityPanelSummaryPercentTickets.ts
│   │   ├── activityPanelSummaryTicketsByUrgency.ts
│   │   ├── activityPanelSummaryTicketsDTO.ts
│   │   ├── AttachmentsDTO.ts
│   │   ├── CategoryTicketDTO.ts
│   │   ├── DepartmentDTO.ts
│   │   ├── knowErrorDTO.ts
│   │   ├── Login.ts
│   │   ├── RequesterDTO.ts
│   │   ├── RoleDTO.ts
│   │   ├── slaDTO.ts
│   │   ├── solvingAreaDTO.ts
│   │   ├── ticketDTO.ts
│   │   ├── TicketHistoriesDTO.ts
│   │   ├── ticketHistoryDTO.ts
│   │   ├── typeRequestDTO.ts
│   │   └── UserDTO.ts
│   ├── repository
│   │   └── access-token-repository.ts
│   ├── routes
│   │   ├── ActivityPainelPage
│   │   │   ├── ActivityPainelPage.css
│   │   │   └── ActivityPainelPage.tsx
│   │   ├── Auth
│   │   │   ├── Login
│   │   │   │   ├── Login.css
│   │   │   │   └── Login.tsx
│   │   │   ├── Recovery
│   │   │   │   ├── Recovery.css
│   │   │   │   └── Recovery.tsx
│   │   │   └── Auth.tsx
│   │   ├── Dashboard
│   │   │   └── Dashboard.tsx
│   │   ├── Home
│   │   │   ├── home.css
│   │   │   └── home.tsx
│   │   ├── knowErrorDbPage
│   │   │   ├── KnowErrorDbPage.css
│   │   │   └── KnowErrorDbPage.tsx
│   │   ├── SettingPages
│   │   │   ├── General Settings
│   │   │   │   └── GeneralSettingsPage.tsx
│   │   │   ├── ProfileSettings
│   │   │   │   ├── ProfileSettingsPage.css
│   │   │   │   └── ProfileSettingsPage.tsx
│   │   │   └── SLA Settings
│   │   │       ├── SlaSettingsPage.css
│   │   │       └── SlaSettingsPage.tsx
│   │   ├── SettingsLayout
│   │   │   ├── SettingsLayout.css
│   │   │   └── SettingsLayout.tsx
│   │   ├── Test
│   │   │   └── Test.tsx
│   │   ├── TicketDetailsPage
│   │   │   └── TicketDetailsPage.tsx
│   │   ├── Tickets
│   │   │   ├── tickets.css
│   │   │   └── tickets.tsx
│   │   └── Users
│   │       ├── user.css
│   │       └── user.tsx
│   ├── Service
│   │   ├── activityPanel-service.ts
│   │   ├── attachment-service.ts
│   │   ├── category-service.ts
│   │   ├── department-service.ts
│   │   ├── Kow-error-service.ts
│   │   ├── login-service.ts
│   │   ├── role-service.ts
│   │   ├── sla-service.ts
│   │   ├── solving-area.ts
│   │   ├── ticket-history-service.ts
│   │   ├── ticket-service.ts
│   │   ├── type-request.ts
│   │   └── user-service.ts
│   ├── utils
│   │   ├── apiService.ts
│   │   ├── context-token.ts
│   │   ├── forms.ts
│   │   ├── functions.ts
│   │   └── system.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│   architecture.txt
```

## 📝 Funcionalidades

1. **Login**
   - A página de login permite que o usuário entre com suas credenciais.
   - O login é tratado via **Context API**, que gerencia o estado global do usuário autenticado.
   - O estado de autenticação é persistido no `localStorage`.

2. **Página de Tickets**
   - A página principal exibe a lista de tickets criados.
   - É possível criar novos tickets e visualizar os detalhes de tickets existentes.

3. **Autorização**
   - Algumas páginas requerem que o usuário esteja autenticado. Isso é tratado pela `PrivateRoute`, que verifica se o usuário está logado antes de permitir o acesso.

4. **Formulário de Ticket**
   - Os usuários podem criar um novo ticket através de um formulário interativo.
   - O formulário faz validação de dados antes de enviar a requisição.

5. **Página Não Encontrada**
   - Caso o usuário tente acessar uma rota que não existe, será redirecionado para uma página de erro 404.


# Documentação do Layout do Projeto

## Telas do Sistema

### 1. Tela de Login
A tela de login permite que o usuário entre no sistema usando suas credenciais. O login é tratado através da **Context API** para gerenciar o estado global do usuário.

![Tela de Login](./assets/login-screen.png)

### 2. Página de Tickets
A página de tickets exibe todos os tickets criados no sistema. O usuário pode criar novos tickets ou visualizar os detalhes dos existentes.

![Tela de Tickets](./assets/tickets-screen.png)

### 3. Tela de Criação de Ticket
A tela de criação de ticket permite que o usuário crie um novo ticket fornecendo as informações necessárias. O formulário faz validação de dados antes de submeter.

![Tela de Criação de Ticket](./assets/create-ticket-screen.png)

### 4. Página de Erro 404
Caso o usuário acesse uma URL inválida, ele será redirecionado para uma página de erro 404.

![Tela de Erro 404](./assets/error-404-screen.png)



## ⚙️ Comandos

- **Instalar as dependências**: `yarn`
- **Rodar o servidor de desenvolvimento**: `yarn dev`
- **Criar build de produção**: `yarn run build`

## 📚 Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch para a sua feature: `git checkout -b minha-feature`.
3. Faça as alterações desejadas e commit: `git commit -am 'Adiciona nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um Pull Request.
