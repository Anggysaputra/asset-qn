const { Sequelize } = require("sequelize");
const db = require("../models");
const sequelize = db.sequelize;

async function getStatusReturn(req, res) {
  try {
    console.log("status return", req);
    const statusReturn = await db.m_status_condition.findAll();

    res.status(200).send({
      message: "Succesfuly get data status return",
      statusReturn,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).send(error);
  }
}

async function getCountStatus(req, res) {
  try {
    console.log("status return", req);
    const status = await sequelize.query(
      `SELECT 
      msc.name,
      COALESCE(count(ma.m_status_condition_id), 0) as count
      FROM m_status_condition msc
      LEFT JOIN m_assets ma ON ma.m_status_condition_id = msc.id
      GROUP BY msc.name;
    `,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
    res.status(200).send({
      message: "Succesfuly get data status count",
      status,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).send(error);
  }
}

module.exports = {
  getStatusReturn,
  getCountStatus,
};
