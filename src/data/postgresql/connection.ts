import { Sequelize } from "sequelize"; 


//CONECTANDO O SEQUELIZE ORM AO BANCO POSTGRES
export const sequelize = new Sequelize(
    process.env.NEXT_PUBLIC_PG_DB,
    process.env.NEXT_PUBLIC_PG_USERNAME,
    process.env.NEXT_PUBLIC_PG_PASSWORD,
    {
        dialect: 'postgres',
        port: parseInt(process.env.NEXT_PUBLIC_PG_PORT) //transforma em number para o TS nao reclamar
    }
);