const authorization = (roles) => (req, res, next) => {

    try {

        let flag = true;
        roles.map((e) => {

            if (req.user.role == e) {
                flag = false;
                return next()
                console.log(e)

            }
        })
        if (flag) {
            return res.send({ message: "no permission" })
        }



    }
    catch (err) {
        return res.send({ err: err })
    }


}
module.exports = authorization;