import { persist } from 'zustand/middleware';
import { create } from 'zustand/react';

interface ResumeStoreState {
  isShowSummary: boolean;
  isShowSection: {
    [key: string]: boolean;
  };
}

interface ResumeStoreAction {
  toggleSummary: (isShow?: boolean) => void;
  setShowSection: (section: string, isShow: boolean) => void;
}

const initSection = {
  about: false,
  experience: false,
  project: false,
  product: false,
} as const;

export const useResumeStore = create<ResumeStoreState & ResumeStoreAction>()(
  persist(
    (set) => ({
      isShowSummary: false,
      isShowSection: {
        about: true,
        experience: false,
        project: false,
        product: false,
      },
      setShowSection: (section, isShow) => {
        set((state) => {
          return {
            isShowSection: {
              ...(isShow ? initSection : state.isShowSection),
              [section]: isShow,
            },
          };
        });
      },
      toggleSummary: (isShow) =>
        set((state) => {
          return { isShowSummary: isShow ?? !state.isShowSummary };
        }),
    }),
    {
      name: 'resume',
      partialize: (state) => ({
        isShowSummary: state.isShowSummary,
      }),
    },
  ),
);
