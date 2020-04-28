const linksInventoryCtrl = {};

const pool = require('../database');

linksInventoryCtrl.renderAddLinkInventory = (req, res) => {
    res.render('linksInventory/addInventory');
};

linksInventoryCtrl.addLinkInventory = async (req, res) => {
    const { machineName, category, quantity, machineWeight } = req.body;
    const newLinkInventory = {
        machineName,
        category,
        quantity,
        machineWeight,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO Maquinas set ?', [newLinkInventory]);
    req.flash('success', 'Producto guardado exitosamente');
    res.redirect('/linksInventory');
}

linksInventoryCtrl.renderLinksInventory = async (req, res) => {
    const Maquinas = await pool.query('SELECT * FROM Maquinas WHERE user_id = ?', [req.user.id]);
    res.render('linksInventory/listInventory', { Maquinas });
}

linksInventoryCtrl.deleteLinkInventory = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM Maquinas WHERE ID = ?', [id]);
    req.flash('success', 'Producto eliminado');
    res.redirect('/linksInventory');
};

linksInventoryCtrl.renderEditLinkInventory = async (req, res) => {
    const { id } = req.params;
    const linksInventory = await pool.query('SELECT * FROM Maquinas WHERE id = ?', [id]);
    console.log(linksInventory);
    res.render('linksInventory/editInventory', {linkInventory: linksInventory[0]});
};

linksInventoryCtrl.editLinkInventory = async (req,res) => {
    const { id } = req.params;
    const { machineName, category, quantity, machineWeight } = req.body; 
    const newLinkInventory = {
        machineName,
        category,
        quantity,
        machineWeight
    };
    await pool.query('UPDATE Maquinas set ? WHERE id = ?', [newLinkInventory, id]);
    req.flash('success', 'Producto actualizado');
    res.redirect('/linksInventory');
}

module.exports = linksInventoryCtrl;