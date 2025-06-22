// Helper functions for the QTify application

/**
 * Truncate a string to a specified length and add ellipsis if truncated
 * @param {string} str - The string to truncate
 * @param {number} maxLength - The maximum length before truncation
 * @returns {string} The truncated string with ellipsis if needed
 */
export const truncate = (str, maxLength) => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '...';
};
