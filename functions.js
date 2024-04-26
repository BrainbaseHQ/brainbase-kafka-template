const colorLog = require("./log_utils")

const list_files_in_workspace = async () => {
    // Implementation...
    colorLog("Listed files in workspace", "cyan")
}

const create_file = async (path) => {
    // Implementation...
    colorLog(`[${path}] Created file`, "green")
}

const read_file = async (path) => {
    // Implementation...
    colorLog(`[${path}] Read file`, "yellow")
}

const write_to_file = async (path, code) => {
    // Implementation...
    colorLog(`[${path}] Wrote to file`, "blue")
}

const modify_file = async (path, line_range, code) => {
    // 
    colorLog(`[${path}] Modified file`, "magenta")
}

module.exports = {
    list_files_in_workspace,
    create_file,
    read_file,
    write_to_file,
    modify_file
}