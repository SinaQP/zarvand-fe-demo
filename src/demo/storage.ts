import { createSeedDemoState, DEMO_DATA_VERSION, DEMO_SESSION_KEY, DEMO_STORAGE_KEY } from './seed';
import { DemoSession, DemoState } from './types';

const clone = <T,>(data: T): T => JSON.parse(JSON.stringify(data)) as T;

const hasWindow = () => typeof window !== 'undefined';

export const getSeededDemoState = (): DemoState => createSeedDemoState();

export const loadDemoState = (): DemoState => {
   if (!hasWindow()) return getSeededDemoState();

   try {
      const stored = localStorage.getItem(DEMO_STORAGE_KEY);
      if (!stored) {
         const seeded = getSeededDemoState();
         localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(seeded));
         return seeded;
      }

      const parsed = JSON.parse(stored) as DemoState;
      if (!parsed || parsed.version !== DEMO_DATA_VERSION) {
         const reseeded = getSeededDemoState();
         localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(reseeded));
         return reseeded;
      }

      return parsed;
   } catch {
      const fallback = getSeededDemoState();
      localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(fallback));
      return fallback;
   }
};

export const saveDemoState = (state: DemoState): DemoState => {
   if (hasWindow()) {
      localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(state));
   }
   return state;
};

export const updateDemoState = (updater: (state: DemoState) => DemoState): DemoState => {
   const current = loadDemoState();
   const next = updater(clone(current));
   return saveDemoState(next);
};

export const resetDemoState = (): DemoState => {
   if (hasWindow()) {
      localStorage.removeItem(DEMO_STORAGE_KEY);
      localStorage.removeItem(DEMO_SESSION_KEY);
   }
   const seeded = getSeededDemoState();
   saveDemoState(seeded);
   return seeded;
};

export const saveDemoSession = (session: DemoSession) => {
   if (hasWindow()) {
      localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(session));
   }
};

export const loadDemoSession = (): DemoSession | null => {
   if (!hasWindow()) return null;
   try {
      const stored = localStorage.getItem(DEMO_SESSION_KEY);
      if (!stored) return null;
      return JSON.parse(stored) as DemoSession;
   } catch {
      return null;
   }
};

export const clearDemoSession = () => {
   if (hasWindow()) {
      localStorage.removeItem(DEMO_SESSION_KEY);
   }
};

