import sequelize from "sequelize";


export const  db = new sequelize({
    dialect : "mysql",
    database:"sqlbackend",
    username:"him",
    password:"himsql",
})


//schema creation


export const Tasks = db.define("task",{
    id:{type:sequelize.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:sequelize.STRING,allowNull:false},
    city:{type:sequelize.STRING,allowNull:false},
    age:{type:sequelize.INTEGER,allowNull:false},
}
)

