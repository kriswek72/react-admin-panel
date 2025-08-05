export const logActivity = (action) => (req, res, next) => {
  const userId = req.user?.id;
  if (userId) {
    req.db.query(
      'INSERT INTO activity_logs (user_id, action) VALUES ($1, $2)',
      [userId, action]
    ).catch(console.error);
  }
  next();
};
export const logUserActivity = (action) => (req, res, next) => {
  const userId = req.user?.id;
  if (userId) {
    req.db.query(
      'INSERT INTO user_activity_logs (user_id, action) VALUES ($1, $2)',
      [userId, action]
    ).catch(console.error);
  }
  next();
};
export const logAdminActivity = (action) => (req, res, next) => {
  const userId = req.user?.id;
  if (userId) {
    req.db.query(
      'INSERT INTO admin_activity_logs (user_id, action) VALUES ($1, $2)',
      [userId, action]
    ).catch(console.error);
  }
  next();
};