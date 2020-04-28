const linksDietsCtrl = {};

const pool = require('../database');

linksDietsCtrl.renderAddLinkDiet = (req, res) => {
    res.render('linksDiets/addDiet');
};

linksDietsCtrl.addLinkDiet = async (req, res) => {
    const { dietName, dairyProduct, fruits, vegetables, slices, numberTimes } = req.body;
    const newLinkDiet = {
        dietName,
        dairyProduct,
        fruits,
        vegetables,
        slices,
        numberTimes,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO Dietas set ?', [newLinkDiet]);
    req.flash('success', 'Dieta guardada exitosamente');
    res.redirect('/linksDiets');
}

linksDietsCtrl.renderLinks = async (req, res) => {
    const Dietas = await pool.query('SELECT * FROM Dietas WHERE user_id = ?', [req.user.id]);
    res.render('linksDiets/listDiet', {  Dietas });
}

linksDietsCtrl.deleteLink = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Dietas WHERE ID = ?', [id]);
    req.flash('success', 'Dieta eliminada');
    res.redirect('/linksDiets');
};

linksDietsCtrl.renderEditLink = async (req, res) => {
    const { id } = req.params;
    const linksDiets = await pool.query('SELECT * FROM Dietas WHERE id = ?', [id]);
    console.log(linksDiets);
    res.render('linksDiets/editDiet', {linkDiet: linksDiets[0]});
};

linksDietsCtrl.editLink = async (req,res) => {
    const { id } = req.params;
    const { dietName, dairyProduct, fruits, vegetables, slices, numberTimes} = req.body; 
    const newLinkDiet = {
        dietName,
        dairyProduct,
        fruits,
        vegetables,
        slices,
        numberTimes,
    };
    await pool.query('UPDATE Dietas set ? WHERE id = ?', [newLinkDiet, id]);
    req.flash('success', 'Dieta actualizada');
    res.redirect('/links');
}

module.exports = linksDietsCtrl;