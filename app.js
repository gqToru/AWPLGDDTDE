var express         = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      csp           = require('helmet-csp'),
      mongoose      = require('mongoose'),
      passport      = require('passport'),
      LocalStrategy = require('passport-local'),
      User          = require('./models/user')

mongoose.connect('mongodb://localhost:27017/proyecto_udo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

/* DIRECTIVA DE SEGURIDAD */
app.use(csp({
    directives: {
      defaultSrc: ['*'],
      imgSrc: ['*', 'data:' ],
      scriptSrc: ['*'],
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
    res.render('landing');
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
    const newUser = new User({username: req.body.username, nombreUsuario: req.body.nombreUsuario});
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

app.get('/index', isLoggedIn, function(req,res){
    res.render('index', {currentUser: req.user});
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