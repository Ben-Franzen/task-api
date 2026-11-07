import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(filters = {}) {
  const { completed } = filters;

  let normalizedCompleted;
  if (completed !== undefined) {
    normalizedCompleted = completed === 'true' || completed === true;
  }

  return taskRepository.findAll({ completed: normalizedCompleted });
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
