module.exports = {
    withSuccess: (msg, data)=>{
        return {
            success: true,
            msg : msg,
            data : data
        };
    },
    withError: (msg, errors = {})=>{
        return {
            success: false,
            msg : msg,
            errors: errors
        };
    },
    sendSuccess: (res, data, msg = 'done')=>{
        return res.status(200).send({
            success: true,
            msg : msg,
            data : data
        });
    },
    sendError: (res, errors = {}, msg = 'error', code = 400)=>{
        return res.status(code).send({
            success: false,
            msg : msg,
            errors: errors
        });
    },
    sendServerError: (res, errors = {}, msg = 'Server error', code = 500)=>{
        return res.status(code).send({
            success: false,
            msg : msg,
            errors: errors
        });
    },
    sendDatabaseError: (res, errors = {}, msg = 'Db error', code = 502)=>{
        return res.status(code).send({
            success: false,
            msg : msg,
            errors: errors
        });
    }
}