const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
});

teacherSchema.plugin(toJSON);
teacherSchema.plugin(paginate);

/**
 * @typedef Teacher
 */
 const Teacher = mongoose.model('Teacher', teacherSchema);

 module.exports = Teacher;
 