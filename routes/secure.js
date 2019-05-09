const express = require('express');
const router = express.Router();
const student = require('../models/students');

const statusCodes = require('../Util/statusCode');
router.post('/login/:Student_email,:Student_password', async (req, res) => {         //login page
    try {
        let result = await student.findAll({ where: { Student_email: req.params.Student_email, Student_password: req.params.Student_password } })

        if (result.length) {
            res.status(statusCodes.OK).send({

                "statusCode": statusCodes.OK,

                "info": "Successfully login",

                "student": result[0]

            })
        }
        else {
            res.status(statusCodes.NOT_FOUND).send({

                "statusCode": statusCodes.NOT_FOUND,

                "info": "no user",

            })
        }
    }
    catch (err) {
        console.log(err);
    }
})

router.post('/signup', async (req, res) => {         //registration page

    const result = await student.create({
        //Student_id:1,
        Student_name: req.body.Student_name,
        Student_email: req.body.Student_email,
        Student_password: req.body.Student_password,
        Student_phoneNumber: req.body.Student_phoneNumber,
        Student_Branch: req.body.Student_Branch,
        Student_state: req.body.Student_state,
        CreatedOn: new Date(),
        ModifiedOn: new Date(),
        IsDeleted: 0

    });
    if (result) {
        res.status(statusCodes.OK).send({

            "statusCode": statusCodes.OK,

            "info": "Successfully deleted",

            "student": result
        })
    }
    else {
        res.status(statusCodes.NOT_FOUND).send({

            "statusCode": statusCodes.NOT_FOUND,

            "info": "no data found",
        })
    }
});

module.exports = router;