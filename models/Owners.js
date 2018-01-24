"use strict";
module.exports = (sequelize, DataTypes) => {
    var Bars = sequelize.define(
        "Owners",
        {
            owner_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            owner_id: DataTypes.INTEGER,
            bar_id: DataTypes.INTEGER,
            bar_name: DataTypes.STRING,
            owner_name: DataTypes.STRING
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
    return Owners;
};