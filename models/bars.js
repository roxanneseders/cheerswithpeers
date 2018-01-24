"use strict";
module.exports = (sequelize, DataTypes) => {
    var Bars = sequelize.define(
        "Bars",
        {
            bar_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            bar_name: DataTypes.STRING,
            type_of_bar: DataTypes.STRING,
            football: DataTypes.STRING,
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
    return Bars;
};