"use strict";
module.exports = (sequelize, DataTypes) => {
    var Bars = sequelize.define(
        "Football",
        {
            football_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            sports_id: DataTypes.INTEGER,
            football_team_name: DataTypes.STRING,
            football_team_state: DataTypes.STRING,
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

    return Football;
};