var express         = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      csp           = require('helmet-csp'),
      mongoose      = require('mongoose'),
      passport      = require('passport'),
      LocalStrategy = require('passport-local'),
      User          = require('./models/user'),
      Carrera          = require('./models/carrera')
      mongoose.set('useFindAndModify', false);

var saludo = "no";
var saludo2 = "no tampoco";
var x;





mongoose.connect('mongodb://localhost:27017/proyecto_udo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

/* DIRECTIVA DE SEGURIDAD */
app.use(csp({
    directives: {
      defaultSrc: ['*'],
      imgSrc: ['*', 'data:' ],
      scriptSrc: ['*',`'unsafe-inline'`],
      styleSrc: ['*',`'unsafe-inline'`]
    }
  }));

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

/* MANEJO DE AUTENTICACION */
app.use(require('express-session')({
    secret: 'LA CASA MAS ALTA',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* RUTAS */
app.get('/', function(req,res){
    res.redirect('/login');
});

app.get('/login', function(req,res){
    res.render('login');
});

app.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/index',
        failureRedirect: '/login'
    }), function(req,res){
    
});

app.get('/registro', function(req,res){
    res.render('registro')
})

app.post('/registro', function(req,res){
    const newUser = new User({username: req.body.username, nombreUsuario: req.body.nombreUsuario, especialidad: req.body.especialidad, horario: ''});
   User.register(newUser, req.body.password, function(err, user){
       if(err){
           console.log(err);
           return res.render('registro');
       }
       passport.authenticate('local')(req,res,function(){
           res.redirect('/index');
       });
   });
});

app.post('/ajaxRoute', (req,res)=>{
    saludo = req.body.arrayBox;
    var lol = req.user.username;
    const filter = { username: `${lol}` }
    const update = { horario: saludo }
    var y = JSON.parse(saludo);
    res.status(200).json({msg:'OK'});
   // console.log(saludo);
    //console.log(update);
   // console.log(filter);
    User.findOneAndUpdate(filter, update, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!"+ err.message);
        }
       // console.log(doc);    
    });
});
app.post('/ajaxRoute2', (req,res)=>{
    saludo2 = req.body.arraySelected;
    var lol = req.user.username;
    const filter = { username: `${lol}` }
    const update = { seleccionado: saludo2}
    res.status(200).json({msg:'OK'});
   // console.log(saludo);
   // console.log(update);
   // console.log(filter);
    User.findOneAndUpdate(filter, update, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!"+ err.message);
        }
    
        //console.log(doc);
    });
});
app.put('/ajaxRoute3', (req,res)=>{
    console.log('holi');
    time = '';
    var lol = req.user.username;
    const filter = { username: `${lol}` }
    const update = { horario: time}
    res.status(200).json({msg:'OK'});
   // console.log(saludo);
   // console.log(update);
   // console.log(filter);
    User.findOneAndUpdate(filter, update, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!"+ err.message);
        }
    
        //console.log(doc);
    });
});

// ID POR SERVIDOR
app.get('/test',function(req,res){  
    Carrera.findById('5e4d774e26e83f1788a4ca30', function (err, carreras) {
      console.log('hola');
    });        
    });

app.get('/index', isLoggedIn, function(req,res){
    if(req.user.horario != ''){
    var x = JSON.parse(req.user.seleccionado);
    var y = JSON.parse(req.user.horario);
    console.log(x)
    console.log(y)
    }
    res.render('index', {currentUser: req.user, mostrar: x, cuadro: y});
});

/* RUTA DE DESCONEXION */

app.get('/logout',function(req,res){
    req.logout();
    res.redirect('/login');
});

/* COMPROBACION DE INICIO */

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

/* puerto de acceso */
app.listen(3000, function(){
    console.log('Server running...');
});