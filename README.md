# Client Charm

Uma aplicação React moderna construída com Vite, TypeScript e Tailwind CSS, apresentando uma biblioteca abrangente de componentes de UI alimentada por shadcn/ui e Radix UI.

## Funcionalidades
- **Configuração Moderna do React**: Construída com Vite para desenvolvimento rápido e builds otimizados
- **TypeScript**: Segurança total de tipos em toda a aplicação
- **Tailwind CSS**: Framework CSS utility-first para estilização rápida
- **Componentes shadcn/ui**: Componentes de UI bonitos e acessíveis construídos em primitivos Radix UI
- **Design Responsivo**: Abordagem mobile-first com layouts responsivos
- **Página de Destino**: Página de destino completa com seções para Hero, Funcionalidades, Preços, Depoimentos, FAQ e mais
- **Testes**: Vitest para testes unitários com Playwright para testes end-to-end
- **Linting**: ESLint para qualidade do código

## Pilha Tecnológica

- **Framework Frontend**: React 18
- **Ferramenta de Build**: Vite
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes UI**: shadcn/ui (primitivos Radix UI)
- **Gerenciamento de Estado**: React Query para estado do servidor
- **Manipulação de Formulários**: React Hook Form com validação Zod
- **Testes**: Vitest + Playwright
- **Gerenciador de Pacotes**: Bun

## Começando

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Bun (recomendado) ou npm/yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone <repository-url>
   cd client-charm
   ```

2. Instale as dependências:
   ```bash
   bun install
   # ou
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   bun run dev
   # ou
   npm run dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## Scripts Disponíveis

- `dev` - Iniciar o servidor de desenvolvimento
- `build` - Construir o projeto para produção
- `build:dev` - Construir o projeto em modo desenvolvimento
- `lint` - Executar ESLint
- `preview` - Visualizar o build de produção localmente
- `test` - Executar testes uma vez
- `test:watch` - Executar testes em modo watch

## Estrutura do Projeto

```
src/
├── components/
│   ├── ui/          # Componentes de UI reutilizáveis (shadcn/ui)
│   └── landing/     # Componentes específicos da página de destino
├── hooks/           # Hooks customizados do React
├── lib/             # Funções utilitárias
├── pages/           # Componentes de página
└── test/            # Arquivos de teste
```

## Contribuindo

1. Fork o repositório
2. Crie uma branch de funcionalidade (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.