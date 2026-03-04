// ---------------------------------------------------------------------------
// zQuery IntelliSense — Extension Entry Point
// ---------------------------------------------------------------------------

const vscode = require('vscode');
const { registerCompletionProviders } = require('./completions');
const { registerHoverProviders } = require('./hovers');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  registerCompletionProviders(context);
  registerHoverProviders(context);

  // Log activation (visible in Output > "Extension Host")
  const outputChannel = vscode.window.createOutputChannel('zQuery');
  outputChannel.appendLine('zQuery IntelliSense activated');
  context.subscriptions.push(outputChannel);
}

function deactivate() {}

module.exports = { activate, deactivate };
