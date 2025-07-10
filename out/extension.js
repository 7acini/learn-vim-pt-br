"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const vscode_1 = require("vscode");
const treeview_1 = require("./treeview");
const path = require("path");

// Constantes para organização
const CHAPTER_READ_STATE_KEY = "chapter-read-state";
const EXTENSION_NAME = "learn-vim";
const WEBVIEW_TITLE = "Learn Vim";
const BASE_URL = "https://www.barbarianmeetscoding.com/boost-your-coding-fu-with-vscode-and-vim";

class ExtensionController {
    constructor(context) {
        this.context = context;
        this.storageService = new GlobalStorageService(context);
        this.readPanel = null;
        this.lastEditor = null;
    }

    async activate() {
        console.log(`Congratulations, your extension "${EXTENSION_NAME}" is now active!`);

        // Inicializa componentes
        this.initializeTreeView();
        this.registerCommands();
    }

    initializeTreeView() {
        const chaptersReadState = this.storageService.readChaptersState();
        this.treeDataProvider = new treeview_1.LearnVimProvider(chaptersReadState);

        vscode.window.createTreeView(EXTENSION_NAME, {
            treeDataProvider: this.treeDataProvider
        }).then(treeView => {
            const children = this.treeDataProvider.getChildren();
            if (children && children.length > 0) {
                treeView.reveal(children[0]);
            }
        });
    }

    registerCommands() {
        this.context.subscriptions.push(
            vscode.commands.registerCommand(`${EXTENSION_NAME}.learnVim`, () => this.handleLearnVimCommand()),
            vscode.commands.registerCommand(`${EXTENSION_NAME}.openChapter`, (url, chapter) =>
                this.handleOpenChapterCommand(url, chapter))
        );
    }

    async handleLearnVimCommand() {
        vscode.window.showInformationMessage("Ready to Learn Some Vim?");

        if (!this.readPanel) {
            this.readPanel = this.createReadWebview();
        }

        await this.loadContent("foreword");
        this.lastEditor = await this.openExercise("template-foreword");
    }

    async handleOpenChapterCommand(url, chapter) {
        chapter.isRead = true;
        this.treeDataProvider.refresh();
        this.storageService.updateChaptersState(this.treeDataProvider.getReadState());

        if (this.lastEditor) {
            await this.lastEditor.hide();
        }

        if (!this.readPanel) {
            this.readPanel = this.createReadWebview();
        }

        await this.loadContent(url);
        this.lastEditor = await this.openExercise(chapter.exercise);
    }

    createReadWebview() {
        const panel = vscode.window.createWebviewPanel(
            `${EXTENSION_NAME}-book`,
            WEBVIEW_TITLE,
            {
                viewColumn: vscode.ViewColumn.One,
                preserveFocus: true,
            },
            {
                enableScripts: true,
                enableCommandUris: true,
                enableFindWidget: true,
                retainContextWhenHidden: true
            }
        );

        panel.onDidDispose(() => {
            this.readPanel = null;
        });

        return panel;
    }

    async loadContent(url) {
        if (!this.readPanel) return;

        const fullUrl = `${BASE_URL}/${url}`;
        console.log(`Loading content from: ${fullUrl}`);
        this.readPanel.webview.html = this.getWebviewHtml(fullUrl);
    }

    getWebviewHtml(url) {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${WEBVIEW_TITLE}</title>
            <style>
                html, body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                }
                iframe {
                    border: none;
                    width: 100%;
                    height: 100%;
                }
            </style>
        </head>
        <body>
            <iframe src="${url}" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
        </body>
        </html>`;
    }

    async openExercise(exerciseName) {
        try {
            const templateName = `${exerciseName}.md`;
            const folder = path.join(__dirname, "..", "exercises");
            const exerciseTemplate = path.join(folder, templateName);
            const exerciseFile = path.join(folder, templateName.replace("template-", ""));

            const [templateUri, exerciseUri] = [
                vscode.Uri.file(exerciseTemplate),
                vscode.Uri.file(exerciseFile)
            ];

            await vscode.workspace.fs.copy(templateUri, exerciseUri, { overwrite: true });

            const editor = await vscode.window.showTextDocument(exerciseUri, {
                viewColumn: vscode_1.ViewColumn.Beside,
                preview: false
            });

            await editor.document.save();
            return editor;
        } catch (error) {
            console.error(`Error opening exercise: ${error}`);
            vscode.window.showErrorMessage(`Failed to open exercise: ${exerciseName}`);
            throw error;
        }
    }
}

class GlobalStorageService {
    constructor(context) {
        this.context = context;
    }

    readChaptersState() {
        try {
            const state = this.context.globalState.get(CHAPTER_READ_STATE_KEY);
            return state ? JSON.parse(state) : [];
        } catch (error) {
            console.error("Error reading chapters state:", error);
            return [];
        }
    }

    async updateChaptersState(chaptersReadState) {
        try {
            await this.context.globalState.update(
                CHAPTER_READ_STATE_KEY,
                JSON.stringify(chaptersReadState)
            );
        } catch (error) {
            console.error("Error updating chapters state:", error);
        }
    }
}

async function activate(context) {
    const controller = new ExtensionController(context);
    await controller.activate();
    return controller;
}
exports.activate = activate;

function deactivate() {
    // Cleanup if needed
}
exports.deactivate = deactivate;