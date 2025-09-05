import { boot } from 'quasar/wrappers';
import { useResumeStore } from 'src/stores/useResumeStore';

export default boot(() => {
  const resumeStore = useResumeStore();
  resumeStore.loadFromLocalStorage();
});
