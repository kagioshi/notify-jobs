#!/usr/bin/env node
import { spawn } from 'child_process';

// Filter out --host flag and replace with --hostname
const args = process.argv.slice(2).filter(arg => !arg.startsWith('--host'));

// Start Next.js dev server with correct flags
const child = spawn('next', ['dev', '--hostname', '0.0.0.0', '--port', '3000'], {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  process.exit(code);
});