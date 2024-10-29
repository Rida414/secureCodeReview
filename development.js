const locations = require("./../locations");
const path = locations.path;
module.exports = {
  app_port: 7000,
  database: {
    host: "10.111.202.146",
    port: "23013",
    db: "ONBOARDING",
    user: "JSONBO",
    password: "jsonbo",
  },
  allowedAdminOrigins: ["localhost"],
  activeDirectoryAuthConfig: {
    is_allow: true,
    ldap: {
      url: "ldap://172.16.72.15",
      baseDN: "dc=jsbl,dc=com",
      domain: "@jsbl.com",
    },
    db_store_session: "mongo", //mongo,sql, null
  },
  ssl: {
    active: false,
    key: path.resolve(__dirname, "../../SSL/node_jsbl_com.key"),
    cert: path.resolve(__dirname, "../../SSL/star_jsbl_com.crt"),
    port: 443,
  },
  TOKEN: {
    AP_TOKEN_SECRET_EXP: "60s",
    AP_TOKEN_SECRET: "455d9f7c7601b5bd09e0812067a8407cf27eba82b5f096f5e8f6c1536e6f5ac4",
    DEVICE_REGISTRATION_TOKEN_SECRET: "6343a88fc8be2171bd7fc6987a19fc06a1d4b5020bc525f1fc9e2ac0ab555496b5625942ec8b9277f4dd0aef72544e35eb50183fed3ada5561a526f46f8b5283",
    AP_USERID_SECRET: "21e5cc5af9c69d7518f9d1c0b784027bad14ef06a476dd71456ce32d472035b5",
    CRYPTO_SECRET_KEY: "a6a243aecedaee3aa8a062759fe17b623d4bd3ee9dd22f0e2c1aab17360f04de",
  },
};
