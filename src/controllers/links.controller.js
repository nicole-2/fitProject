const linksCtrl = {};

const pool = require('../database');

linksCtrl.renderAddLink = (req, res) => {
    res.render('links/add');
};

linksCtrl.addLink = async (req, res) => {
    const { fullname, ci, telephone, homeAddress, exercise, attendanceTime, hour, payment } = req.body;
    const newLink = {
        fullname,
        ci, 
        telephone, 
        homeAddress, 
        exercise, 
        attendanceTime,
        hour,
        payment,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO Clientes set ?', [newLink]);
    req.flash('success', 'Cliente guardado exitosamente');
    res.redirect('/links');
}

linksCtrl.renderLinks = async (req, res) => {
    const Clientes = await pool.query('SELECT * FROM Clientes WHERE user_id = ?', [req.user.id]);
    res.render('links/list', { Clientes });
}

linksCtrl.deleteLink = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Clientes WHERE ID = ?', [id]);
    req.flash('success', 'Cliente eliminado');
    res.redirect('/links');
};

linksCtrl.renderEditLink = async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM Clientes WHERE id = ?', [id]);
    console.log(links);
    res.render('links/edit', {link: links[0]});
};

linksCtrl.editLink = async (req,res) => {
    const { id } = req.params;
    const { fullname, ci, telephone, homeAddress, exercise, attendanceTime, hour, payment} = req.body; 
    const newLink = {
        fullname,
        ci, 
        telephone, 
        homeAddress, 
        exercise, 
        attendanceTime,
        hour,
        payment
    };
    await pool.query('UPDATE Clientes set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Cliente actualizado');
    res.redirect('/links');
}

module.exports = linksCtrl;