// Controller for cat API
export const getCatNames = (req, res) => {
  const catNames = ['Whiskers', 'Mittens', 'Shadow', 'Simba', 'Luna'];
  res.json({ cats: catNames });
};
