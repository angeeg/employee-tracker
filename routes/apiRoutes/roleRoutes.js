const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Route to add new role to db 
router.post('/role', ({body}, res) => { 
    const errors = inputCheck(body, 'id', 'title', 'salary', 'department_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO department (id, title, salary, department_id)
                 VALUES(?,?,?,?)`;
    const params = [body.id, body.title, body.salary, body.department_id]

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