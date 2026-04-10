// Simple logger utility
const logger = {
  info: (message) => console.log(`ℹ️ [INFO] ${message}`),
  error: (message) => console.error(`❌ [ERROR] ${message}`),
  warn: (message) => console.warn(`⚠️ [WARN] ${message}`),
  success: (message) => console.log(`✅ [SUCCESS] ${message}`),
};

export default logger;
