# Gemini CLI Quick Start Guide

Gemini CLI is a powerful terminal-based AI assistant for software engineering, research, and task automation.

## Core Commands (System Shell)
| Command | Description |
| :--- | :--- |
| `gemini` | Start an interactive session |
| `gemini "<query>"` | Execute a one-shot query |
| `gemini -i "<query>"` | Start with a query and remain interactive |
| `gemini -r latest` | Resume the most recent session |
| `gemini update` | Update the CLI to the latest version |

## Interactive Slash Commands (`/`)
Use these inside a running Gemini session:

### Session & History
- `/chat`: Save, resume, or share the current session.
- `/rewind`: Step back one turn in the conversation history.
- `/restore`: Undo file changes using automatically created checkpoints.
- `/clear`: Clear the current session history.

### Workspace & Context
- `/init`: Generate a `GEMINI.md` file for project-specific instructions.
- `/directory`: Add or manage workspace paths.
- `/memory`: View or edit the persistent `GEMINI.md` context.
- `/permissions`: Manage folder trust and tool execution safety.

### Configuration & UI
- `/settings`: Open the interactive settings editor.
- `/model`: Switch between available Gemini models.
- `/theme`: Change the CLI's visual theme.
- `/vim`: Toggle Vim-style input mode.

### Tools & Extensions
- `/tools`: List all available tools the agent can use.
- `/mcp`: Manage Model Context Protocol (MCP) server connections.
- `/skills`: List and manage specialized agent skills.

## Context & Shell Integration
- **`@path/to/file`**: Type `@` followed by a file or directory path to inject its content into your prompt.
- **`!<command>`**: Run a shell command directly (e.g., `!ls -la`).
- **`!!`**: Enter/exit persistent shell mode.

## Pro Tips
1. **Plan Mode**: For complex tasks, Gemini may enter "Plan Mode" to research and design a solution before making any changes.
2. **`GEMINI.md`**: Place a `GEMINI.md` file in your project root to provide permanent instructions, coding standards, and project context to the AI.
3. **Safety First**: Gemini will ask for your confirmation before running potentially destructive shell commands or modifying files (unless configured otherwise in `/settings`).
