"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chapter = exports.LearnVimProvider = void 0;
const vscode = require("vscode");
const path = require("path");

// Constantes para organização
const MEDIA_PATH = path.join(__dirname, "..", "..", "media");
const ICONS = {
    READ: path.join(MEDIA_PATH, "checked-circle.svg"),
    UNREAD: path.join(MEDIA_PATH, "unchecked-circle.svg")
};

class LearnVimProvider {
    constructor(chaptersReadState = []) {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this._elements = this._initializeChapters(chaptersReadState);
    }

    get elements() {
        return this._elements;
    }

    _initializeChapters(chaptersReadState) {
        const chapters = getInitialChapters();

        if (chaptersReadState.length > 0) {
            this._updateReadState(chapters, chaptersReadState);
        }

        return chapters;
    }

    _updateReadState(chapters, chaptersReadState = []) {
        const stateMap = new Map(chaptersReadState.map(state => [state.id, state.isRead]));

        for (const chapter of chapters) {
            if (stateMap.has(chapter.url)) {
                chapter.isRead = stateMap.get(chapter.url);
            }
        }
    }

    refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }

    getTreeItem(element) {
        return element;
    }

    getParent(element) {
        return null; // Todos os capítulos são elementos raiz
    }

    getChildren(element) {
        return element ? [] : this.elements;
    }

    getReadState() {
        return this.elements.map(e => e.toReadState());
    }
}
exports.LearnVimProvider = LearnVimProvider;

class Chapter extends vscode.TreeItem {
    constructor(
        name,
        url,
        number,
        isRead = false,
        collapsibleState = vscode.TreeItemCollapsibleState.None
    ) {
        super(name, collapsibleState);

        this.name = name;
        this.url = url;
        this.number = number;
        this.isRead = isRead;
        this.contextValue = "chapter"; // Permite ações contextuais

        // Configurações padrão
        this.tooltip = this._generateTooltip();
        this.command = this._generateCommand();
        this.iconPath = this._getIconPath();
    }

    _generateTooltip() {
        return `${this.name}${this.number ? ` (Capítulo ${this.number})` : ''}`;
    }

    get description() {
        return this.isRead ? "✓ Concluído" : "";
    }

    get exercise() {
        if (!this.number) return `template-${this.url}`;
        return `template-${this.number.toString().padStart(2, "0")}-${this.url}`;
    }

    _generateCommand() {
        return {
            command: "learn-vim.openChapter",
            title: "Abrir Capítulo",
            arguments: [this.url, this],
        };
    }

    _getIconPath() {
        return this.isRead ? ICONS.READ : ICONS.UNREAD;
    }

    toReadState() {
        return {
            id: this.url,
            isRead: this.isRead,
        };
    }
}
exports.Chapter = Chapter;

function getInitialChapters() {
    return [
        new Chapter("Prefácio", "foreword", undefined, true),
        new Chapter("Introdução", "introduction", 1),
        new Chapter("Instalar Vim no VSCode", "installing-vim-in-vscode", 2),
        new Chapter("Primeiros Passos", "baby-steps-in-vim", 3),
        new Chapter("Movendo-se Rápido: Movimentos", "moving-blazingly-fast-with-the-core-vim-motions", 4),
        new Chapter("Mágica de Edição: Operadores", "editing-like-magic-with-vim-operators", 5),
        new Chapter("O Segredo do Vim", "vims-secret-language", 6),
        new Chapter("Inserindo Texto", "inserting-text", 7),
        new Chapter("Selecionando Texto", "selecting-text", 8),
        new Chapter("Operando em Buscas", "switftly-operate-on-search-matches", 9),
        new Chapter("Copiando e Colando", "copy-paste", 10),
        new Chapter("Modo de Linha de Comando", "command-line-mode", 11),
        new Chapter("Divisões e Abas", "splitting-windows", 12),
        new Chapter("Envolvendo Texto", "surrounding-things-with-vim-surround", 13),
        new Chapter("Mapeamentos Personalizados", "elevating-your-worflow-with-custom-mappings", 14),
        new Chapter("Movendo-se ainda mais rápido", "moving-even-faster-with-vim-sneak-and-easymotion", 15),
        new Chapter("Múltiplos Cursors", "multiple-cursors", 16),
        new Chapter("Explorador de Arquivos Avançado", "enhanced-file-explorer-panes-and-palettes", 17),
        new Chapter("VSCode e Neovim", "integrating-vscode-with-neovim", 18),
        new Chapter("Mapeamentos Úteis", "some-handy-vscode-only-mappings", 19),
        new Chapter("Para Onde Ir Agora?", "where-should-i-go-from-here", 20),
        new Chapter("Folha de Referência", "cheatsheet", 21),
        new Chapter("Sobre o Autor", "about-the-author", 22),
        new Chapter("Agradecimentos", "acknowledgments", 23)
    ];
}
//# sourceMappingURL=treeview.js.map