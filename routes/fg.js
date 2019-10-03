router.post('/getClassWiseVoilation', (req, res, next) => {
    if (req.headers && req.headers.authorization) {
      var authorization = req.headers.authorization.substring(4),
      decoded;
      try {
        decoded = jwt.verify(authorization, Config.secret);
        var start = new Date(req.body.sDate);
        // start.setHours(00, 00, 00, 000);
        var end = new Date(req.body.eDate);
        // end.setHours(23, 59, 59, 999);
        // werCond = { createdAt : { $between: [start, end] }};
        classes.findAll({
              // group: ['class_name'],
              order: [[Sequelize.fn('length', Sequelize.col('class_name')), 'DESC'],['class_name', 'DESC']],
              attributes: [
                [Sequelize.fn('DISTINCT', Sequelize.col('class_name')) ,'class_name'],
                 [Sequelize.fn('length', Sequelize.col('class_name')), 'len']
                
              ]
        }).then(clas => {
          // console.log()
          let resp = [];
          async.eachOfSeries(clas, (element, key, callback) => {
          // clas.forEach(function(element) {
            classes.findAll({
              where: {  class_name:element.class_name },
              include: [{
                model: Students,
                include: [{
                  model: Rules_violation,
                  where:{ createdAt : { $between: [start, end] }}
                }]
              }]
              // where: { [Op.and]: [{ violated_faculty_id:req.body.faculty_id, id: {[Op.ne]: req.body.vio_id} }] }
            }).then(voil => {
              ttlVoilation = 0;
              voil.forEach((stud) => {
                stud.tbl_students.forEach((vio) => {
                  ttlVoilation += vio.tbl_rule_violations.length;
                });
              });
              
              resp.push({class:element.class_name,violation: ttlVoilation});
              callback();
            });
          // });
          },function (err) { 
            return res.json(resp);
          });
        });
      } catch (e) {
        // return res.status(401).send('unauthorized');
        return res.json({success:false, msg: 'Invalid User'});
      }
        
    }else {
      return res.status(401).send('Invalid User');
    }
  });