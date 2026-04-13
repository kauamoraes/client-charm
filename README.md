# 🚀 NexusCRM - Sistema de Gestão de Projetos

> Uma plataforma moderna e intuitiva para gerenciamento completo de projetos, clientes, tarefas e finanças. Construída com as melhores práticas de engenharia e design.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![React Version](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-blueviolet)

---

## 📋 Índice

- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📦 Instalação](#-instalação)
- [🚀 Como Usar](#-como-usar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🎯 Funcionalidades Detalhadas](#-funcionalidades-detalhadas)
- [💡 Diretrizes de Desenvolvimento](#-diretrizes-de-desenvolvimento)
- [📱 Responsividade](#-responsividade)
- [🚀 Scripts Disponíveis](#-scripts-disponíveis)

---

## ✨ Funcionalidades

### 📊 Dashboard

- **Visão geral em tempo real** de todas as informações críticas
- **Três cards principais:**
  - 💰 **Faturamento do mês** - Saldo dinâmico (Entradas - Saídas)
  - 📁 **Projetos ativos** - Contagem em tempo real
  - ✅ **Tarefas pendentes** - Apenas tarefas em andamento
- **Gráfico de faturamento mensal** com visualização em barras interativas
- **Seção de últimas tarefas concluídas** com detalhes rápidos

### 📋 Tarefas - Kanban Board

- **Sistema Kanban interativo** com três colunas:
  - 🔵 **A Fazer** - Tarefas não iniciadas
  - 🟡 **Em Progresso** - Tarefas em andamento
  - 🟢 **Feito** - Tarefas concluídas
- **Drag & drop** intuitivo para mover tarefas entre colunas
- **Adicionar novas tarefas** diretamente da interface
- **Visualização de horas** alocadas e prazos de vencimento
- **Contagem automática** de tarefas por status
- **Sincronização em tempo real** com projetos

### 📁 Projetos

- **Gestão completa de projetos** com status em tempo real
- **Visualização de progresso** percentual de cada projeto
- **Informações detalhadas:**
  - Nome do projeto
  - Descrição clara
  - Percentual de progresso (0-100%)
  - Horas alocadas vs. horas totais
  - Data de vencimento
  - Status atual
- **Status dinâmico:** Pausado, Em andamento, Concluído

### 👥 Clientes

- **Cadastro e organização** de clientes
- **Filtros rápidos** para encontrar clientes
- **Informações estruturadas** de contato
- **Histórico de projetos por cliente**
- **Interface intuitiva** e responsiva

### 💳 Financeiro

- **Gestão completa de contas** a pagar e a receber
- **Três cards de métricas:**
  - 🟢 **Entradas** (Verde) - Total a receber
  - 🔴 **Saídas** (Vermelho) - Total a pagar
  - 🟢 **Saldo** (Verde dinâmico) - Saldo líquido
- **Formulário de adição** de contas com validação completa
- **Tabela com paginação** (8 itens por página)
- **Filtros por tipo:** Todas, A Receber, A Pagar
- **Colunas da tabela:**
  - 🏢 Nome da empresa
  - 👤 Cliente
  - 📝 Descrição
  - 💵 Valor (com ícones de entrada/saída)
  - 📅 Data de vencimento
  - 🏷️ Status (Pendente, Pago, Atrasado)
- **Ações:** Deletar contas com confirmação

---

## 🛠️ Stack Tecnológico

### Frontend

| Tecnologia       | Versão | Uso              |
| ---------------- | ------ | ---------------- |
| **React**        | 18.3   | Biblioteca UI    |
| **TypeScript**   | 5.0    | Type safety      |
| **Vite**         | 5.0    | Build tool       |
| **Tailwind CSS** | 3.x    | Styling          |
| **Shadcn/ui**    | Latest | Componentes      |
| **React Router** | 6.x    | Navegação        |
| **Recharts**     | 2.x    | Gráficos         |
| **Lucide React** | Latest | Ícones           |
| **React Query**  | 5.x    | State management |

### Ferramentas de Desenvolvimento

- **ESLint** - Linting e qualidade de código
- **Vitest** - Testes unitários
- **Playwright** - Testes E2E
- **PostCSS** - Processamento de CSS
- **Bun** - Gerenciador de pacotes

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18.0+ ou Bun
- Git

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nexus-crm.git

# Navegue para o diretório do projeto
cd app/client-charm/front-end

# Instale as dependências
bun install
# ou
npm install

# Inicie o servidor de desenvolvimento
bun run dev
# ou
npm run dev
```

O projeto estará disponível em **http://localhost:5173**

---

## 🚀 Como Usar

### Estrutura de Navegação

```
NexusCRM
├── 🏠 Dashboard
├── 📋 Tarefas
├── 📁 Projetos
├── 👥 Clientes
└── 💳 Financeiro
```

### Fluxos Principais

#### 1️⃣ Acompanhar Tarefas

1. Acesse a seção **Tarefas**
2. Visualize o status em tempo real no **Kanban**
3. Arraste tarefas entre colunas para atualizar status
4. Clique em "+ Adicionar" para criar nova tarefa
5. Veja a contagem automática de tarefas

#### 2️⃣ Gerenciar Financeiro

1. Vá para **Financeiro**
2. Observe os cards de **Entradas**, **Saídas** e **Saldo**
3. Clique em "**Adicionar Conta**" para registrar novos valores
4. Use os filtros para visualizar contas específicas
5. Navegue pela paginação para ver mais contas

#### 3️⃣ Monitorar Projetos

1. Acesse a seção **Projetos**
2. Veja o progresso de cada projeto em tempo real
3. Analise prazos e horas alocadas
4. Acompanhe o status de cada projeto

#### 4️⃣ Visualizar Dashboard

1. Vá para a página inicial (**Dashboard**)
2. Veja as métricas resumidas do seu negócio
3. Acompanhe o faturamento do mês
4. Verifique tarefas em andamento
5. Confira últimas tarefas concluídas

---

## 📁 Estrutura do Projeto

```
front-end/
├── src/
│   ├── components/
│   │   ├── nexusCRM/
│   │   │   ├── dashboard.tsx          # Página principal com métricas
│   │   │   ├── tasks.tsx              # Sistema Kanban interativo
│   │   │   ├── projecs.tsx            # Gestão de projetos
│   │   │   ├── clients.tsx            # Gestão de clientes
│   │   │   ├── finance.tsx            # Gestão financeira
│   │   │   └── asideBar.tsx           # Barra lateral de navegação
│   │   ├── landing/                   # Componentes da landing page
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                        # Componentes Shadcn/ui
│   ├── context/
│   │   ├── ProjectsContext.tsx        # Estado global de projetos
│   │   ├── ClientsContext.tsx         # Estado global de clientes
│   │   └── FinanceContext.tsx         # Estado global de financeiro
│   ├── hooks/
│   │   ├── use-mobile.tsx             # Detectar viewport mobile
│   │   ├── use-toast.ts               # Hook de notificações
│   │   └── useScrollAnimation.ts      # Animações ao scroll
│   ├── pages/
│   │   ├── Index.tsx                  # Landing page / Home
│   │   └── NotFound.tsx               # Página 404
│   ├── App.tsx                        # Aplicação principal com rotas
│   ├── main.tsx                       # Entry point da aplicação
│   ├── App.css                        # Estilos globais
│   ├── index.css                      # CSS base
│   └── vite-env.d.ts                  # Tipos Vite
├── public/                            # Assets estáticos
│   └── robots.txt
├── vite.config.ts                     # Configuração Vite
├── tailwind.config.ts                 # Configuração Tailwind
├── tsconfig.json                      # Configuração TypeScript
├── tsconfig.app.json                  # TypeScript para app
├── tsconfig.node.json                 # TypeScript para node
├── vitest.config.ts                   # Configuração Vitest
├── playwright.config.ts               # Configuração Playwright
├── playwright-fixture.ts              # Fixtures de teste
├── postcss.config.js                  # Configuração PostCSS
├── eslint.config.js                   # Configuração ESLint
├── components.json                    # Configuração de componentes
├── index.html                         # HTML principal
├── package.json                       # Dependências
└── bun.lockb                          # Lock file do Bun
```

---

## 🎯 Funcionalidades Detalhadas

### 📊 Dashboard - Visão Consolidada

A página de dashboard fornece uma visão integrada e em tempo real:

**Cards de Métricas:**

```
┌──────────────────────┬──────────────────┬──────────────────┐
│ Faturamento do Mês   │ Projetos Ativos  │ Tarefas Pendentes│
│    R$ 57.300         │        4         │        2         │
└──────────────────────┴──────────────────┴──────────────────┘
```

**Dados Dinâmicos:**

- ✅ Faturamento calcula automaticamente: `Entradas - Saídas`
- ✅ Contagem de projetos em tempo real do contexto
- ✅ Tarefas em andamento apenas (status = "Em andamento")
- ✅ Gráfico de receita mensal interativo
- ✅ Últimas tarefas concluídas com detalhes

### 📋 Tarefas - Kanban Board

Sistema completo de gerenciamento com **drag & drop** intuitivo:

**Estrutura:**

```
│ A Fazer (3) │ Em Progresso (2) │ Feito (5) │
├─────────────┼──────────────────┼───────────┤
│ Tarefa 1    │ Tarefa 4         │ Tarefa 9  │
│ Tarefa 2    │ Tarefa 5         │ Tarefa 10 │
│ Tarefa 3    │                  │ Tarefa 11 │
```

**Features:**

- ✨ Mova tarefas entre colunas com drag & drop
- ✨ Adicione novas tarefas inline
- ✨ Visualize horas e prazos
- ✨ Contagem automática atualizada
- ✨ Cores diferenciadas por coluna
- ✨ Sincroniza com projetos do contexto

### 💳 Financeiro - Gestão de Contas

Interface completa com **otimizações de performance**:

**Cards de Métricas com Cores:**

```
🟢 Entradas       🔴 Saídas         🟢 Saldo
R$ 16.000        R$ 1.750         R$ 14.250
```

**Tabela Interativa com Paginação:**
| Empresa | Cliente | Descrição | Valor | Vencimento | Status | Ação |
|---------|---------|-----------|-------|-----------|--------|------|
| TechSolutions | João Silva | Desenvolvimento | +R$ 5.000 | 20/04/2026 | Pendente | 🗑️ |

**Formulário Modal:**

```
┌─────────────────────────────────────┐
│         Adicionar Conta               │
├─────────────────────────────────────┤
│ Tipo .............. [ A Receber ▼ ] │
│ Status ............ [ Pendente ▼ ]  │
│ Empresa ........... [ TechSolutions ] │
│ Cliente ........... [ João Silva ]   │
│ Descrição ......... [ Desenvolvimento]│
│ Valor ............. [ 5000 ]        │
│ Vencimento ........ [ 20/04/2026 ]  │
│                                       │
│ [ Adicionar ]  [ Cancelar ]         │
└─────────────────────────────────────┘
```

---

## 💡 Diretrizes de Desenvolvimento

### Boas Práticas Implementadas

#### 1. **Performance Otimizada** ⚡

```typescript
// ✅ Memoização inteligente com useMemo
const metrics = useMemo(() => {
  const incoming = accounts
    .filter((acc) => acc.type === "a-receber")
    .reduce((sum, acc) => sum + acc.amount, 0);
  return { incoming, outgoing, balance };
}, [accounts]);

// ✅ Callbacks otimizadas com useCallback
const handleAddAccount = useCallback(() => {
  addAccount({ ...formData });
}, [formData, addAccount]);

// ✅ Paginação para renderizar apenas 8 itens
const paginatedAccounts = useMemo(() => {
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  return filteredAccounts.slice(startIdx, startIdx + ITEMS_PER_PAGE);
}, [filteredAccounts, currentPage]);
```

#### 2. **HTML Semântico** 🏷️

```jsx
// ✅ Tags semânticas por padrão
<header>...</header>
<main>...</main>
<section>...</section>
<article>...</article>
<nav aria-label="Navigation">...</nav>
<table>
  <thead>...</thead>
  <tbody>...</tbody>
</table>
```

#### 3. **Acessibilidade (A11y)** ♿

```jsx
// ✅ Atributos ARIA
<button
  aria-label="Deletar conta"
  aria-current={currentPage === idx + 1 ? "page" : undefined}
>
  <Trash2 />
</button>

<nav aria-label="Paginação">
  {/* Navegação */}
</nav>
```

#### 4. **Arquitetura Ágil** 🔄

```typescript
// ✅ Context API para estado global
export function FinanceProvider({ children }: { children: ReactNode }) {
    const [accounts, setAccounts] = useState<FinanceAccount[]>([]);

    const addAccount = useCallback((account) => {...}, []);
    return (
        <FinanceContext.Provider value={{ accounts, addAccount }}>
            {children}
        </FinanceContext.Provider>
    );
}

// ✅ Custom hooks para reutilização
export function useFinance() {
    return useContext(FinanceContext);
}
```

#### 5. **Type Safety com TypeScript** 🔒

```typescript
// ✅ Interfaces bem definidas
export interface FinanceAccount {
  id: number;
  type: "a-pagar" | "a-receber";
  companyName: string;
  clientName: string;
  description: string;
  amount: number;
  dueDate: string;
  status: "pendente" | "pago" | "atrasado";
  createdAt: string;
}

// ✅ Context types bem estruturados
interface FinanceContextType {
  accounts: FinanceAccount[];
  addAccount: (account: Omit<FinanceAccount, "id" | "createdAt">) => void;
}
```

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
bun run dev              # Inicia servidor dev em http://localhost:5173
bun run dev -- --port 3000  # Especificar porta customizada

# Build
bun run build            # Build optimizado para produção
bun run build:dev        # Build em modo desenvolvimento

# Testes
bun run test             # Executar testes com Vitest
bun run test:watch       # Modo watch para testes

# Qualidade
bun run lint             # ESLint para verificar código

# Preview
bun run preview          # Visualizar build de produção localmente
```

---

## 🎨 Design System

### Paleta de Cores

| Cor         | Uso               | Hex     | Tailwind       |
| ----------- | ----------------- | ------- | -------------- |
| 🟣 Roxo     | Primária / CTAs   | #8b5cf6 | `purple-600`   |
| 🟢 Verde    | Sucesso / Entrada | #10b981 | `green-500`    |
| 🔴 Vermelho | Erro / Saída      | #ef4444 | `red-500`      |
| 🟡 Amarelo  | Aviso / Pendente  | #eab308 | `yellow-400`   |
| ⚫ Dark     | Background        | #0B1220 | `bg-[#0B1220]` |
| ⬜ Light    | Secondary BG      | #111827 | `bg-[#111827]` |

### Tipografia

- **H1** - `text-3xl font-bold` - Títulos principais
- **H2** - `text-2xl font-bold` - Subtítulos
- **H3** - `text-xl font-bold` - Seções
- **Body** - `text-sm text-gray-400` - Texto padrão
- **Caption** - `text-xs text-gray-500` - Textos pequenos

---

## 📊 Estrutura de Dados

### FinanceAccount

```typescript
{
    id: 1,
    type: "a-receber",
    companyName: "TechSolutions Inc",
    clientName: "João Silva",
    description: "Desenvolvimento de Sistema",
    amount: 5000,
    dueDate: "2026-04-20",
    status: "pendente",
    createdAt: "2026-04-01"
}
```

### Project

```typescript
{
    id: 1,
    name: "App Eccomerce",
    description: "Loja Virtual Pro",
    progress: 90,
    hours: "18h/20",
    deadline: "14/04/2026",
    status: "Em andamento",
    pendente: true
}
```

### Task

```typescript
{
    id: 1,
    title: "Design do Carrinho",
    description: "Criar UI do carrinho",
    status: "in-progress",
    hours: "8h",
    deadline: "2026-04-15"
}
```

---

## 🐛 Troubleshooting

### Problema: Tailwind não funciona

```bash
# Limpe cache e reinstale
rm -rf ./node_modules/.vite
bun install
bun run dev
```

### Problema: Porta 5173 em uso

```bash
# Use outra porta
bun run dev -- --port 3000
```

### Problema: Contexto não inicializa

```bash
# Verifique se o Provider está em App.tsx
<FinanceProvider>
    <ClientsProvider>
        <ProjectsProvider>
            {/* Router */}
        </ProjectsProvider>
    </ClientsProvider>
</FinanceProvider>
```

---

## 📚 Recursos Úteis

- 🔗 [React Docs](https://react.dev)
- 🔗 [Vite Docs](https://vitejs.dev)
- 🔗 [Tailwind CSS](https://tailwindcss.com)
- 🔗 [Shadcn/ui](https://ui.shadcn.com)
- 🔗 [TypeScript](https://www.typescriptlang.org)
- 🔗 [React Router](https://reactrouter.com)

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas!

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

---

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ em 2026

---

## 📞 Contato & Suporte

- 📧 Email: contato@nexuscrm.com
- 🐛 Issues: GitHub Issues
- 💬 Discussões: GitHub Discussions

---

<div align="center">

### ⭐ Este projeto é incrível? Deixe uma estrela!

**[⬆️ Voltar ao topo](#-nexuscrm---sistema-de-gestão-de-projetos)**

</div>
