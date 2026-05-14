import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceBrandColors() {
  const dir = path.resolve('d:/Code Canvas 1/src');
  walkDir(dir, (filePath) => {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Class name replacements
      let newContent = content
        .replace(/neonBlue/g, 'brandCyan')
        .replace(/neonPurple/g, 'brandIndigo')
        .replace(/neon-border-purple/g, 'brand-border-indigo')
        .replace(/neon-border/g, 'brand-border-cyan')
        .replace(/text-glow-purple/g, 'text-glow-indigo')
        
        // Hex replacements
        .replace(/#00f0ff/gi, '#22d3ee')
        .replace(/#6a5cff/gi, '#6366f1')
        
        // RGB replacements (compact and spaced)
        .replace(/0,240,255/g, '34,211,238')
        .replace(/106,92,255/g, '99,102,241')
        .replace(/0,\s*240,\s*255/g, '34, 211, 238')
        .replace(/106,\s*92,\s*255/g, '99, 102, 241');
        
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  });
}

replaceBrandColors();
