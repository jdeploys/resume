import { persist } from 'zustand/middleware';
import { create } from 'zustand/react';

interface ResumeStoreState {
  isShowSummary: boolean;
}

interface ResumeStoreAction {
  toggleSummary: (isShow?: boolean) => void;
}

export const useResumeStore = create<ResumeStoreState & ResumeStoreAction>()(
  persist(
    (set) => ({
      isShowSummary: false,
      toggleSummary: (isShow?: boolean) =>
        set((state) => {
          return { isShowSummary: isShow ?? !state.isShowSummary };
        }),
    }),
    {
      name: 'resume',
    },
  ),
);
