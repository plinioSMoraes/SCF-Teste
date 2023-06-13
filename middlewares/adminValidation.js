// Já que nao tem uma rota de login, vamos criar um middleware que vai validar se o usuário é admin ou não.
// O usuario é admin se o campo role for igual a admin.

const adminValidation = (req, res, next) => {
    const { role }= req.body;

    if (role !== "admin") {
        return res.status(403).send({ message: "Restricted access" });
    }
    
    next();
}

module.exports = adminValidation;