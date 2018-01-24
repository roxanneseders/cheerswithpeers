"use strict";
module.exports = (sequelize, DataTypes) => {
    var Bars = sequelize.define(
        "misc",
        {
            misc_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            // sports_id: DataTypes.INTEGER,
            // baseball_team_name: DataTypes.STRING,
            // baseball_team_state: DataTypes.STRING,
        },
        {
            timestamps: false
        },
        {
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                }
            }
        }
    );
    return misc;
};