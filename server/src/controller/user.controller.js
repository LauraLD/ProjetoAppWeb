const User = require("../model/user.model");

exports.registerNewUser = async (req, res) => {
  try {

    const isUser = await User.find({ email: req.body.email });
    console.log(isUser);
    if (isUser.length >= 1) {
      return res
        .status(409)
        .json({ message: "E-mail já cadastrado!" });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();
    return res
      .status(201)
      .json({ message: "Usuário(a) criado(a) com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({
        error: "Erro no login! Verifique a autenticação!",
      });
    }
    const token = await user.generateAuthToken();
    return res
      .status(201)
      .json({ message: "Login realizado com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.loginGoogle = async (req,res) => {

       const {id,name,email} = req.body

       const user = await User.findOne({email:email})

       if(!user){

           const userObject = new User({
               id_google:id,
               nome:name,
               email:email
           })

           try{
               const data = await userObject.save()
               createToken(data,req,res)
           }
           catch(e){
               console.log("Erro no login! Verifique a autenticação!",e)
           }
       }
       createToken(user,req,res)
   }

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};
