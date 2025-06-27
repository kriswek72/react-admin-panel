export const roles = {
  superadmin: ['users', 'roles', 'content', 'stats', 'hr'],
  editor: ['content'],
  analyst: ['stats'],
  hr: ['hr'],
};

export const currentUser = {
  username: 'krzysztof',
  role: 'superadmin', // <- można to dynamicznie pobierać po zalogowaniu
};
