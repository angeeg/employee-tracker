const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Route to add new department to db 
router.post('/department', ({body}, res) => { 
    const errors = inputCheck(body, 'id', 'name');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO department (id, name)
                 VALUES(?,?)`;
    const params = [body.id, body.name]

    db.query(sql, params, (err, result)=> {
        if(err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        })
    })
});

module.exports = router;