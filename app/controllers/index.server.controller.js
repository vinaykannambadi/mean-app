exports.render = (req, res) =>{
    if (!req.session.lastVisit) { 
        req.session.lastVisit = new Date();
    } 
    
    res.render('index', {
        title: "Hello World",
        sessionTrack: req.session.lastVisit
    });
}