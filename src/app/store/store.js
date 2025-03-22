import create from 'zustand';

const useStore = create((set) => ({
  jobs: [],
  setJobs: (jobs) => set({ jobs }),
}));

export default useStore;