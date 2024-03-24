const db = require("../models");
const { Sequelize, where, Op } = require("sequelize");
const sequelize = db.sequelize;

async function getAllRole(req, res) {
  try {
    console.log("req query", req.query);

    const q = req.query.q;

    const clauseRoleName = q ? `WHERE view_name LIKE '%${q}%'` : "";

    const allRole = await db.sequelize.query(
      `SELECT 
        id, view_name, flag_active
        FROM m_role
        ${clauseRoleName}`,

      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    return res.status(200).send({ message: "Succefuly get All role", allRole });
  } catch (error) {
    console.log("error", error);
    return res.status(200).send(error);
  }
}

async function DetailRoleAccess(req, res) {
  try {
    console.log("req manage acces", req.params);
    const roleId = parseInt(req.params.roleId);

    const mMenus = await db.m_menu.findAll({
      attributes: ["id", "name", "path"],
      where: {
        [Op.and]: [
          { path: { [Op.not]: null } }, // Path tidak null
        ],
      },
      include: [
        {
          model: db.m_action,
          attributes: ["id", "action", "path", "m_sub_menu_id"],
          include: [
            {
              model: db.m_role_access,
              attributes: ["id", "m_role_id", "m_action_id", "flag_active"],
              where: {
                m_role_id: roleId,
              },
            },
          ],
        },
      ],
    });

    const mSubMenus = await db.m_sub_menu.findAll({
      attributes: ["id", "name", "m_menu_name", "path"],
      include: [
        {
          model: db.m_action,
          attributes: ["id", "action", "path", "m_sub_menu_id"],
          include: [
            {
              model: db.m_role_access,
              attributes: ["id", "m_role_id", "m_action_id", "flag_active"],
              where: {
                m_role_id: roleId,
              },
            },
          ],
        },
      ],
    });

    const roleAccess = mMenus.concat(mSubMenus);

    return res
      .status(200)
      .send({ message: "Succesfully get Detail Role Access", roleAccess });
  } catch (error) {
    console.log("err", error);
    return res.status(400).send(error);
  }
}

async function updateRoleAccess(req, res) {
  try {
    console.log("req manage acces", req.body);

    const userId = parseInt(req.body.userUpdate);
    const accessId = parseInt(req.body.id);
    const roleId = parseInt(req.body.roleId);
    const flgaActive = req.body.active;

    const existRoleAccess = await db.m_role_access.findOne({
      where: {
        id: accessId,
        m_role_id: roleId,
      },
    });

    if (!existRoleAccess) return res.status(400).send({ message: "not found" });

    await db.m_role_access.update(
      {
        flag_active: flgaActive,
        updatedBy: userId,
      },
      {
        where: {
          id: accessId,
        },
      }
    );

    return res
      .status(200)
      .send({ message: "Succesfully get Detail Role Access" });
  } catch (error) {
    console.log("err", error);
    return res.status(400).send(error);
  }
}

module.exports = {
  getAllRole,
  DetailRoleAccess,
  updateRoleAccess,
};
