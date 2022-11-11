const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    teachers: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Teacher',
        required: true,
    },],
});

courseSchema.plugin(toJSON);
courseSchema.plugin(paginate);


const Course = mongoose.model('Course', courseSchema);
module.exports = Course;