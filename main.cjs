const vscode = require("vscode");

module.exports = {
	async activate(context) {
		await vscode.commands.executeCommand(
			"pdml.register",
			`${context.extension.id}@${context.extension.packageJSON.version}`,
			{
				vocabularies: [
					{
						language: "pml",
						includes: ["pdml:core", "pdml:extensions"],
						id: "pml:core",
						path: vscode.Uri.joinPath(context.extensionUri, "completions.mjs")
							.fsPath,
					},
				],
			},
		);
	},
};
