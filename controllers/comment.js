export const getComments = async (req, res) => {
    const q = `SELECT c.*, u.id AS userId, name FROM comments AS a JOIN users AS u ON (u.id = p.userId)
    WHERE c.postId = ? ORDER BY c.createdAt DESC
    `;

    db.query(p, [req.query.postId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}