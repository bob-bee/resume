import { defineStore } from 'pinia';
import type { ResumeState } from 'src/models/models';

export const useBackupStore = defineStore('backup', {
  state: () => ({
    message: '' as string,
  }),
  actions: {
    exportBackup(data: ResumeState): void {
      const dataStr = JSON.stringify(data, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `resume-backup-${new Date().toISOString()}.json`;
      a.click();

      URL.revokeObjectURL(url);
      this.message = 'Backup exported successfully.';
    },

    async importBackup(file: File, applyData: (data: ResumeState) => void): Promise<void> {
      this.message = '';
      try {
        const text = await file.text();
        const data = JSON.parse(text) as ResumeState;
        // Optional: validate data here

        applyData(data);
        this.message = 'Backup imported successfully.';
      } catch {
        this.message = 'Failed to import backup: invalid file.';
      }
    },
  },
});
