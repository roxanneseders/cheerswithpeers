"use strict";
module.exports = (sequelize, DataTypes) => {
    var Bars = sequelize.define(
        "sports",
        {
            sports_id_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            sports_name: DataTypes.STRING,
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
    return sports;
};