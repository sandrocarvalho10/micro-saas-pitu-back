import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://epiz_27695047:teste1234@sql109.epizy.com:3306/epiz_27695047_micro_saas_pitu_db'||'mysql://root:teste1234@localhost:3306/micro_saas_pitu');

export default sequelize;

