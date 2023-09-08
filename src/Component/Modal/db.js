// db.js
import Dexie from 'dexie';

const db = new Dexie('TaskDB');
db.version(1).stores({
  tasks: '++id,description,status,dueDate',
});

export default db;
