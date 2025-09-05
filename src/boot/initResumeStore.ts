import { boot } from '#app';
import { useResumeStore } from 'src/stores/useResumeStore';

export default boot(({ app }) => {
  const resumeStore = useResumeStore();
  resumeStore.loadFromLocalStorage();
});
