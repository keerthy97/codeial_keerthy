// a user controller which controls mul users(for more actions and methods)
module.exports.profile = function(req, res){
    // res.end('<h1>profile is here</h1>');
    return res.render('user_profile', {
        title : "User Profile"
    });

}
