import prisma from '../config/db.js';

export async function findAll(filters = {}) {
  const { completed } = filters;

  return prisma.task.findMany({
    where: completed === undefined ? undefined : { completed },
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
