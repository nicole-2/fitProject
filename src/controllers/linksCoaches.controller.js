const linksCoachesCtrl = {};

const pool = require('../database');

linksCoachesCtrl.renderAddLinkCoach = (req, res) => {
    res.render('linksCoaches/addCoach');
};

linksCoachesCtrl.addLinkCoach = async (req, res) => {
    const { fullname, ci, telephone, homeAddress, specialty,workTime, startTime} = req.body;
    const newLinkCoach = {
        fullname,
        ci, 
        telephone, 
        homeAddress, 
        specialty, 
        workTime,
        startTime,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO Entrenadores set ?', [newLinkCoach]);
    req.flash('success', 'Entrenador guardado exitosamente');
    res.redirect('/linksCoaches');
}

linksCoachesCtrl.renderLinksCoaches = async (req, res) => {
    const Entrenadores = await pool.query('SELECT * FROM Entrenadores WHERE user_id = ?', [req.user.id]);
    res.render('linksCoaches/listCoach', { Entrenadores });
}

linksCoachesCtrl.deleteLinkCoach = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Entrenadores WHERE ID = ?', [id]);
    req.flash('success', 'Entrenador eliminado');
    res.redirect('/linksCoaches');
};

linksCoachesCtrl.renderEditLinkCoach = async (req, res) => {
    const { id } = req.params;
    const linksCoaches = await pool.query('SELECT * FROM Entrenadores WHERE id = ?', [id]);
    console.log(linksCoaches);
    res.render('linksCoaches/editCoach', {linkCoach: linksCoaches[0]});
};

linksCoachesCtrl.editLinkCoach = async (req,res) => {
    const { id } = req.params;
    const { fullname, ci, telephone, homeAddress, specialty, workTime, startTime} = req.body; 
    const newLinkCoach = {
        fullname,
        ci, 
        telephone, 
        homeAddress, 
        specialty, 
        workTime,
        startTime
    };
    await pool.query('UPDATE Entrenadores set ? WHERE id = ?', [newLinkCoach, id]);
    req.flash('success', 'Entrenador actualizado');
    res.redirect('/linksCoaches');
}

module.exports = linksCoachesCtrl;