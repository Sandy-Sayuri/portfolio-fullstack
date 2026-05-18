const projectDetails = {
  orbitlab: {
    title: "OrbitLab",
    subtitle: "Simulador visual de fisica baseado em formulas matematicas.",
    sections: [
      {
        label: "contexto",
        content:
          "Laboratorio interativo de fisica desenvolvido para transformar formulas matematicas em simulacoes visuais em tempo real no navegador.",
      },
      {
        label: "minha atuacao",
        content:
          "Desenvolvimento da aplicacao em arquitetura frontend-first, incluindo parser matematico, deteccao automatica de variaveis, geracao dinamica de inputs, classificacao do fenomeno fisico, solver numerico e renderizacao em Canvas. Estruturacao do backend NestJS como API REST modular para gerenciamento de simulacoes e evolucao futura.",
      },
      {
        label: "desafios tecnicos",
        type: "list",
        items: [
          "Parser matematico com MathJS",
          "Deteccao automatica de variaveis",
          "Inputs dinamicos",
          "Classificacao fisica",
          "Solver numerico",
          "Renderizacao em Canvas",
          "API REST modular em NestJS",
        ],
      },
      {
        label: "stack",
        type: "tags",
        items: ["Angular", "TypeScript", "Canvas API", "MathJS", "NestJS"],
      },
      {
        label: "observacao",
        content: "Projeto pessoal em evolucao. Ainda sem deploy publico.",
      },
    ],
    links: [],
  },
  "vitrine-de-talentos": {
    title: "Vitrine de Talentos",
    subtitle: "Sistema corporativo de realocacao interna.",
    sections: [
      {
        label: "contexto",
        content:
          "Sistema interno voltado a realocacao de colaboradores, apoiando processos corporativos de movimentacao interna.",
      },
      {
        label: "minha atuacao",
        content:
          "Atuacao no desenvolvimento e manutencao da aplicacao, incluindo ajustes em frontend/backend, suporte a traducao do sistema, login corporativo e integracoes assincronas com RabbitMQ para enfileiramento de requisicoes.",
      },
      {
        label: "desafios tecnicos",
        type: "list",
        items: [
          "Suporte a traducao",
          "Login corporativo",
          "Integracao frontend/backend",
          "RabbitMQ",
          "Enfileiramento de requisicoes",
          "Sistema corporativo interno",
        ],
      },
      {
        label: "stack",
        type: "tags",
        items: ["Angular", "NestJS", "MySQL", "RabbitMQ", "i18n"],
      },
      {
        label: "observacao",
        content:
          "Projeto corporativo interno. Nao adicionar link publico, deploy ou GitHub.",
      },
    ],
    links: [],
  },
  "admissao-digital": {
    title: "Admissao Digital",
    subtitle: "Backend corporativo para pre-admissao e onboarding.",
    sections: [
      {
        label: "contexto",
        content:
          "Plataforma corporativa voltada a pre-admissao e onboarding de colaboradores.",
      },
      {
        label: "minha atuacao",
        content:
          "Atuacao no backend da aplicacao, desenvolvendo e mantendo APIs, regras de negocio, fluxos de autenticacao, permissoes, gestao documental, beneficios, dashboards, integracoes corporativas e suporte a traducao.",
      },
      {
        label: "desafios tecnicos",
        type: "list",
        items: [
          "APIs REST",
          "Autenticacao",
          "Permissoes",
          "Gestao documental",
          "Onboarding",
          "Dashboards",
          "Suporte a traducao",
          "SQLAlchemy assincrono",
        ],
      },
      {
        label: "stack",
        type: "tags",
        items: [
          "FastAPI",
          "PostgreSQL",
          "SQLAlchemy Async",
          "Python",
          "APIs REST",
          "i18n",
        ],
      },
      {
        label: "observacao",
        content:
          "Projeto corporativo interno. Nao adicionar link publico, deploy ou GitHub.",
      },
    ],
    links: [],
  },
  "atomkit-ui": {
    title: "AtomKit UI",
    subtitle: "Biblioteca de componentes baseada em Atomic Design.",
    sections: [
      {
        label: "contexto",
        content:
          "Biblioteca frontend em desenvolvimento para criar componentes reutilizaveis, padronizar interfaces e acelerar a construcao de aplicacoes web.",
      },
      {
        label: "minha atuacao",
        content:
          "Criacao da estrutura da biblioteca, organizacao dos componentes por Atomic Design, definicao de componentes base, documentacao visual e preparacao para publicacao futura no npm.",
      },
      {
        label: "desafios tecnicos",
        type: "list",
        items: [
          "Organizacao por atoms, molecules e organisms",
          "Tipagem com TypeScript",
          "Build de biblioteca",
          "Documentacao com Storybook",
          "Publicacao futura no npm",
          "Reutilizacao entre projetos",
        ],
      },
      {
        label: "stack",
        type: "tags",
        items: [
          "React",
          "TypeScript",
          "Vite",
          "Storybook",
          "NPM",
          "Atomic Design",
        ],
      },
      {
        label: "observacao",
        content:
          "Projeto em progresso. Preparado para publicacao futura no npm.",
      },
    ],
    links: [],
  },
};

const terminalCommands = [
  { name: "about", description: "quem sou eu" },
  { name: "skills", description: "minhas habilidades" },
  { name: "projects", description: "meus projetos" },
  { name: "experience", description: "minha jornada" },
  { name: "contact", description: "vamos conversar" },
  { name: "orbitlab", description: "abrir detalhes do OrbitLab" },
  { name: "clear", description: "limpar respostas" },
  { name: "help", description: "listar comandos" },
];

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const topNavLinks = Array.from(document.querySelectorAll(".top-nav-link"));
  const samePageLinks = Array.from(
    document.querySelectorAll('a[href^="#"]'),
  ).filter((link) => link.getAttribute("href") !== "#");

  const trackedSections = topNavLinks
    .map((link) => {
      const selector = link.getAttribute("href");
      const target = selector ? document.querySelector(selector) : null;

      if (!target) {
        return null;
      }

      return { link, target };
    })
    .filter(Boolean);

  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("project-modal-title");
  const modalSubtitle = document.getElementById("project-modal-subtitle");
  const modalSections = document.getElementById("project-modal-sections");
  const modalLinks = document.getElementById("project-modal-links");
  const modalCloseButton = modal?.querySelector(".project-modal-close");
  const modalTriggers = Array.from(
    document.querySelectorAll(".mission-button[data-project]"),
  );

  const terminalWindow = document.querySelector(".terminal-window");
  const terminalForm = document.getElementById("terminal-form");
  const terminalInput = document.getElementById("terminal-input");
  const terminalLog = document.getElementById("terminal-log");

  let lastFocusedElement = null;
  let modalJustOpened = false;

  function updateActiveNav() {
    if (trackedSections.length === 0) {
      return;
    }

    const currentPosition = window.scrollY + 180;
    let activeId = trackedSections[0].target.id;

    trackedSections.forEach(({ target }) => {
      if (target.offsetTop <= currentPosition) {
        activeId = target.id;
      }
    });

    topNavLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${activeId}`,
      );
    });
  }

  function scrollToTarget(target) {
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  function createExternalLink(link) {
    const anchor = document.createElement("a");
    anchor.className = "button button-link project-modal-link";
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = link.label;
    return anchor;
  }

  function renderExternalLinks(links) {
    if (!modalLinks) {
      return;
    }

    if (!Array.isArray(links) || links.length === 0) {
      modalLinks.replaceChildren();
      modalLinks.hidden = true;
      return;
    }

    const anchors = links.map(createExternalLink);
    modalLinks.replaceChildren(...anchors);
    modalLinks.hidden = false;
  }

  function createProjectTagList(items) {
    const tagList = document.createElement("div");
    tagList.className = "project-modal-tech";

    const tags = items.map((item) => {
      const tag = document.createElement("span");
      tag.textContent = item;
      return tag;
    });

    tagList.append(...tags);
    return tagList;
  }

  function createProjectList(items, compact = false) {
    const list = document.createElement("ul");
    list.className = compact
      ? "project-modal-list project-modal-list-compact"
      : "project-modal-list";

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.append(listItem);
    });

    return list;
  }

  function createProjectGroup(group) {
    const wrapper = document.createElement("article");
    wrapper.className = "project-modal-group";

    const title = document.createElement("p");
    title.className = "project-modal-group-title";
    title.textContent = group.title;
    wrapper.append(title);

    if (Array.isArray(group.items) && group.items.length > 0) {
      wrapper.append(createProjectList(group.items, true));
    }

    if (group.copy) {
      const paragraph = document.createElement("p");
      paragraph.className = "project-modal-copy";
      paragraph.textContent = group.copy;
      wrapper.append(paragraph);
    }

    return wrapper;
  }

  function createProjectSection(section) {
    const wrapper = document.createElement("section");
    wrapper.className = "project-modal-section";

    const label = document.createElement("p");
    label.className = "project-modal-label";
    label.textContent = section.label;
    wrapper.append(label);

    if (section.type === "code") {
      const codeBlock = document.createElement("pre");
      codeBlock.className = "project-modal-code";
      codeBlock.textContent = section.content;
      wrapper.append(codeBlock);
      return wrapper;
    }

    if (section.type === "list") {
      wrapper.append(createProjectList(section.items || []));
      return wrapper;
    }

    if (section.type === "tags") {
      wrapper.append(createProjectTagList(section.items || []));
      return wrapper;
    }

    if (section.type === "groups") {
      const groups = document.createElement("div");
      groups.className = "project-modal-groups";

      (section.groups || []).forEach((group) => {
        groups.append(createProjectGroup(group));
      });

      wrapper.append(groups);
      return wrapper;
    }

    const paragraphs = Array.isArray(section.content)
      ? section.content
      : [section.content];

    paragraphs.filter(Boolean).forEach((content) => {
      const paragraph = document.createElement("p");
      paragraph.className = "project-modal-copy";
      paragraph.textContent = content;
      wrapper.append(paragraph);
    });

    return wrapper;
  }

  function buildProjectSections(project) {
    if (Array.isArray(project.sections) && project.sections.length > 0) {
      return project.sections;
    }

    const sections = [
      {
        label: "contexto",
        content: project.context,
      },
      {
        label: "minha atuacao",
        content: project.role,
      },
    ];

    if (
      project.showTechnologies !== false &&
      Array.isArray(project.technologies) &&
      project.technologies.length > 0
    ) {
      sections.push({
        label: "tecnologias",
        type: "tags",
        items: project.technologies,
      });
    }

    return sections;
  }

  function renderProjectSections(project) {
    if (!modalSections) {
      return;
    }

    const sections = buildProjectSections(project).map(createProjectSection);
    modalSections.replaceChildren(...sections);
  }

  function openProjectModal(projectKey, trigger) {
    const project = projectDetails[projectKey];

    if (!project || !modal || !modalTitle || !modalSections) {
      return;
    }

    lastFocusedElement = trigger instanceof HTMLElement ? trigger : null;

    modalTitle.textContent = project.title;
    if (modalSubtitle) {
      modalSubtitle.textContent = project.subtitle || "";
      modalSubtitle.hidden = !project.subtitle;
    }
    renderProjectSections(project);
    renderExternalLinks(project.links);

    modal.hidden = false;
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");

    modalJustOpened = true;
    setTimeout(() => {
      modalJustOpened = false;
    }, 150);

    if (modalCloseButton instanceof HTMLElement) {
      modalCloseButton.focus();
    }
  }

  function closeProjectModal() {
    if (!modal || modal.hidden || modalJustOpened) {
      return;
    }

    modal.classList.remove("is-open");
    modal.hidden = true;
    document.body.classList.remove("modal-open");

    if (lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  function scrollTerminalToBottom() {
    if (!terminalLog) {
      return;
    }

    terminalLog.scrollTop = terminalLog.scrollHeight;
  }

  function appendTerminalEntry(command, renderOutput, options = {}) {
    if (!terminalLog) {
      return;
    }

    const entry = document.createElement("article");
    entry.className =
      "terminal-entry" +
      (options.accent ? ` terminal-entry--${options.accent}` : "");

    const promptLine = document.createElement("p");
    promptLine.className = "prompt terminal-entry-prompt";
    promptLine.textContent = `sandy.dev@portfolio:~$ ${command}`;

    const output = document.createElement("div");
    output.className = "terminal-entry-output";

    if (options.header) {
      const badge = document.createElement("span");
      badge.className = "terminal-entry-header";
      badge.textContent = options.header;
      output.append(badge);
    }

    renderOutput(output);

    entry.append(promptLine, output);
    terminalLog.append(entry);
    scrollTerminalToBottom();
  }

  function appendTerminalLines(command, lines, options = {}) {
    appendTerminalEntry(
      command,
      (output) => {
        lines.forEach((line, i) => {
          const row = document.createElement("p");
          row.className = "terminal-entry-line";
          row.textContent = line;
          if (!prefersReducedMotion) {
            row.style.animationDelay = `${i * 32}ms`;
            row.classList.add("is-animating");
          }
          output.append(row);
        });
      },
      options,
    );

    if (!prefersReducedMotion && lines.length > 1) {
      setTimeout(scrollTerminalToBottom, lines.length * 32 + 120);
    }
  }

  function createTerminalLink(label, href, text, isExternal) {
    const row = document.createElement("p");
    row.className = "terminal-entry-line terminal-entry-line-links";

    const labelNode = document.createElement("strong");
    labelNode.textContent = `${label}:`;

    const link = document.createElement("a");
    link.className = "terminal-entry-link";
    link.href = href;
    link.textContent = text;

    if (isExternal) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    row.append(labelNode, document.createTextNode(" "), link);
    return row;
  }

  function renderHelp(output) {
    terminalCommands.forEach(({ name, description }) => {
      const row = document.createElement("p");
      row.className = "terminal-entry-command";

      const commandName = document.createElement("strong");
      commandName.textContent = name;

      const descriptionText = document.createElement("span");
      descriptionText.textContent = `- ${description}`;

      row.append(commandName, descriptionText);
      output.append(row);
    });
  }

  function clearTerminalLog() {
    if (!terminalLog) {
      return;
    }

    terminalLog.replaceChildren();
  }

  function handleProjectsCommand() {
    const projectsSection = document.getElementById("missions");

    appendTerminalLines(
      "projects",
      [
        "scanning project index...",
        "",
        "4 missoes encontradas.",
        "",
        "  \u2713  [01]  OrbitLab          ............  EM EVOLUCAO",
        "  \u2713  [02]  Vitrine de Talentos .........  CORPORATIVO",
        "  \u2713  [03]  Admissao Digital  ...........  CORPORATIVO",
        "  \u2713  [04]  AtomKit UI        ...........  EM PROGRESSO",
        "",
        "destacando projetos...",
      ],
      { header: "[ PROJECT INDEX ]", accent: "projects" },
    );

    if (!projectsSection) return;

    setTimeout(() => {
      scrollToTarget(projectsSection);
      window.history.replaceState(null, "", "#missions");
      projectsSection.classList.add("is-terminal-highlight");
      setTimeout(
        () => projectsSection.classList.remove("is-terminal-highlight"),
        1800,
      );
    }, 420);
  }

  function handleContactCommand() {
    appendTerminalEntry(
      "contact",
      (output) => {
        const lines = [
          "initiating contact protocol...",
          "",
          "canais disponiveis:",
        ];
        lines.forEach((text, i) => {
          const p = document.createElement("p");
          p.className = "terminal-entry-line";
          p.textContent = text;
          if (!prefersReducedMotion) {
            p.style.animationDelay = `${i * 32}ms`;
            p.classList.add("is-animating");
          }
          output.append(p);
        });
        output.append(
          createTerminalLink(
            "  LinkedIn",
            "https://www.linkedin.com/in/sandy-sayuri-37a69b189/",
            "linkedin.com/in/sandy-sayuri",
            true,
          ),
        );
        output.append(
          createTerminalLink(
            "  GitHub  ",
            "https://github.com/Sandy-Sayuri",
            "github.com/Sandy-Sayuri",
            true,
          ),
        );
        output.append(
          createTerminalLink(
            "  E-mail  ",
            "mailto:sandysayuri120@gmail.com",
            "sandysayuri120@gmail.com",
            false,
          ),
        );
      },
      { header: "[ CONTACT PROTOCOL ]", accent: "contact" },
    );
  }

  function handleOrbitLabCommand() {
    appendTerminalLines(
      "orbitlab",
      [
        "loading mission file: ORBITLAB...",
        "",
        "  status  \u2192  EM EVOLUCAO",
        "  tipo    \u2192  projeto pessoal",
        "  stack   \u2192  Angular  TypeScript  Canvas  MathJS  NestJS",
        "",
        "abrindo ficha tecnica...",
      ],
      { header: "[ MISSION FILE ]", accent: "orbitlab" },
    );

    setTimeout(() => openProjectModal("orbitlab", terminalInput), 480);
  }

  function handleHiddenTerminalCommand(command) {
    if (command === "ls" || command === "dir") {
      appendTerminalLines(
        command,
        [
          "ei!!! isso nao estava na lista de comandos...",
          "mas essa foi boa.",
          "",
          "pastas encontradas:",
          "  ./sobre",
          "  ./skills",
          "  ./projetos",
          "  ./experiencia",
          "  ./contato",
          "",
          "dica: tenta 'cd projetos' ou 'cd experiencia'.",
        ],
        { header: "[ SECRET COMMAND ]", accent: "help" },
      );
      return true;
    }

    if (command === "cd" || command.startsWith("cd ")) {
      const target = command.replace(/^cd\s*/, "").trim() || "~";

      appendTerminalLines(
        command,
        [
          "ei!!! isso nao estava na lista de comandos...",
          "mas gostei da iniciativa.",
          "",
          `entrando em: ${target}`,
          "acesso simbolico concedido.",
          "",
          "atalhos uteis:",
          "  cd projetos     -> destaca os projetos",
          "  cd experiencia  -> mostra minha jornada",
          "  cd contato      -> abre canais de contato",
        ],
        { header: "[ NAVIGATION HACK ]", accent: "help" },
      );

      if (target === "projetos" || target === "projects") {
        setTimeout(() => executeTerminalCommand("projects"), 420);
      }

      if (target === "experiencia" || target === "experience") {
        setTimeout(() => executeTerminalCommand("experience"), 420);
      }

      if (target === "contato" || target === "contact") {
        setTimeout(() => executeTerminalCommand("contact"), 420);
      }

      return true;
    }

    return false;
  }

  function executeTerminalCommand(rawCommand) {
    const normalizedCommand = rawCommand.trim().toLowerCase();

    if (!normalizedCommand) {
      return;
    }

    if (handleHiddenTerminalCommand(normalizedCommand)) {
      return;
    }

    switch (normalizedCommand) {
      case "about":
        appendTerminalLines(
          "about",
          [
            "loading operator profile...",
            "",
            "  Sandy Sayuri",
            "  Desenvolvedora Fullstack",
            "",
            "  foco    \u2192  backend  APIs  sistemas corporativos",
            "  stack   \u2192  FastAPI  NestJS  React  Angular  PostgreSQL",
            "",
            "  Experiencia em aplicacoes internas, microsservicos,",
            "  autenticacao corporativa e integracoes assincronas.",
            "",
            "  Tambem desenvolvo projetos pessoais com foco em",
            "  simulacao, interfaces interativas e frontend-first.",
          ],
          { header: "[ OPERATOR PROFILE ]", accent: "about" },
        );
        break;
      case "skills":
        appendTerminalLines(
          "skills",
          [
            "running skill scanner...",
            "",
            "  BACKEND      FastAPI · NestJS · Node.js · Python",
            "  FRONTEND     React · Angular · TypeScript · HTML/CSS",
            "  DATABASE     PostgreSQL · MySQL · SQLAlchemy",
            "  ARCH         APIs REST · RabbitMQ · Microsservicos · i18n",
            "  TOOLS        Git · Docker · Storybook · Vite",
            "",
            "  scan completo.",
          ],
          { header: "[ SKILL SCANNER ]", accent: "skills" },
        );
        break;
      case "projects":
        handleProjectsCommand();
        break;
      case "experience":
        appendTerminalLines(
          "experience",
          [
            "[ 2023 - Atual ]  Stefanini Brasil — Analista Desenvolvedor Junior",
            "[ 2022 - 2023 ]   Stefanini Brasil — Estagiario de TI",
            "",
            "Projetos e frentes:",
            "  · Admissao Digital: FastAPI, SQLAlchemy async e PostgreSQL",
            "  · Estoque: Angular, NestJS e PostgreSQL",
            "  · Vitrine de Talentos: Angular, NestJS, MySQL e integracoes",
            "  · Biblioteca de dashboards reutilizavel com Atomic Design",
            "  · Microservico de traducao: NestJS + RabbitMQ",
            "  · Login corporativo integrado ao Azure",
            "",
            "Atuacao:",
            "  · APIs REST corporativas, regras de negocio e permissoes",
            "  · Autenticacao, convites, cadastro de pessoas e onboarding",
            "  · Gestao documental, beneficios e controle de acesso",
            "  · Integracoes corporativas, documentacao tecnica e testes",
          ],
          { header: "[ EXPERIENCE ]", accent: "experience" },
        );
        break;
      case "contact":
        handleContactCommand();
        break;
      case "orbitlab":
        handleOrbitLabCommand();
        break;
      case "clear":
        clearTerminalLog();
        break;
      case "help":
        appendTerminalEntry("help", renderHelp, {
          header: "[ HELP ]",
          accent: "help",
        });
        break;
      default:
        appendTerminalLines(
          normalizedCommand,
          [
            `comando '${normalizedCommand}' nao reconhecido.`,
            "execute 'help' para listar os comandos disponiveis.",
          ],
          { header: "[ COMMAND NOT FOUND ]", accent: "error" },
        );
        break;
    }
  }

  samePageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const selector = link.getAttribute("href");

      if (!selector) {
        return;
      }

      const target = document.querySelector(selector);

      if (!target) {
        return;
      }

      event.preventDefault();
      scrollToTarget(target);
      window.history.replaceState(null, "", selector);
    });
  });

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const projectKey = trigger.dataset.project;

      if (!projectKey) {
        return;
      }

      openProjectModal(projectKey, trigger);
    });
  });

  modal?.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.closest("[data-modal-close]")) {
      closeProjectModal();
    }
  });

  terminalInput?.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    event.preventDefault();

    if (!(terminalInput instanceof HTMLInputElement)) return;

    const typed = terminalInput.value.trim().toLowerCase();
    if (!typed) return;

    const matches = terminalCommands
      .map((c) => c.name)
      .filter((name) => name.startsWith(typed));

    if (matches.length === 1) {
      terminalInput.value = matches[0];
    } else if (matches.length > 1) {
      // preenche até o prefixo comum
      let common = matches[0];
      for (const m of matches) {
        while (!m.startsWith(common)) {
          common = common.slice(0, -1);
        }
      }
      terminalInput.value = common;
    }
  });

  terminalForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!(terminalInput instanceof HTMLInputElement)) {
      return;
    }

    const command = terminalInput.value;
    terminalInput.value = "";
    executeTerminalCommand(command);
  });

  terminalWindow?.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.closest("a, button, input")) {
      return;
    }

    terminalInput?.focus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
});
