import Dexie from 'dexie';
import type { ResumeState } from 'src/models/models';

class ResumeDB extends Dexie {
  resumes: Dexie.Table<ResumeState & { key: string }, string>;

  constructor() {
    super('ResumeDB');
    this.version(1).stores({
      resumes: 'key', // key is the primary key
    });
    this.resumes = this.table('resumes');
  }

  async getResume(key: string): Promise<ResumeState | undefined> {
    return await this.resumes.get(key);
  }

  async saveResume(key: string, data: ResumeState): Promise<void> {
    await this.resumes.put({ ...data, key });
  }

  async deleteResume(key: string): Promise<void> {
    await this.resumes.delete(key);
  }
}

export const db = new ResumeDB();
