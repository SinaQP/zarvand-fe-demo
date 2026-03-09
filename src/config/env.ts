const FALSE_VALUES = new Set(['0', 'false', 'off', 'no']);

export const IS_DEMO_MODE = (() => {
   const rawValue = import.meta.env.VITE_DEMO_MODE;
   if (typeof rawValue === 'undefined') return true;
   return !FALSE_VALUES.has(String(rawValue).trim().toLowerCase());
})();

